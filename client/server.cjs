const express = require("express");
const basicAuth = require("express-basic-auth");
const fs = require("fs");
const path = require("path");

// Hostinger Express Default moves `dist/` to public_html. Serve spa/ so Node still has files.
const DIST = path.join(__dirname, "spa");
const PORT = Number(process.env.PORT) || 3000;
const INDEX = path.join(DIST, "index.html");
const REPORT_PDF = path.join(
  DIST,
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf"
);

if (!fs.existsSync(INDEX)) {
  console.error(`Missing ${INDEX} — run npm run build first`);
  process.exit(1);
}

// Buffer once — Hostinger has been returning Express finalhandler 404 from sendFile failures
const INDEX_HTML = fs.readFileSync(INDEX, "utf8");

// Resilient requires — server must always start even if Firebase/SEO modules fail
let applyHead, resolveMeta, getSitemapXml, getPageIndex, buildXml, clearSitemapCache, reportDownloadHtml;
try {
  ({ applyHead, resolveMeta } = require("./scripts/seo-head.cjs"));
} catch (err) {
  console.error("seo-head.cjs failed to load:", err.message);
  applyHead = (html) => html;
  resolveMeta = () => ({ stripFaq: true, noindex: true });
}
try {
  ({ getSitemapXml, getPageIndex, buildXml, clearSitemapCache } = require("./scripts/live-sitemap.cjs"));
} catch (err) {
  console.error("live-sitemap.cjs failed to load:", err.message);
  getSitemapXml = async () => '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://melangedigital.co/</loc></url></urlset>';
  getPageIndex = async () => ({ routes: new Set(), byPath: {} });
  buildXml = (origin, routes) => `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`;
  clearSitemapCache = () => {};
}
try {
  ({ reportDownloadHtml } = require("./scripts/report-download-html.cjs"));
} catch (err) {
  console.error("report-download-html.cjs failed to load:", err.message);
  reportDownloadHtml = () => "<html><body>Report download unavailable</body></html>";
}

const app = express();

// Public health check routes for Hostinger deployment checks & uptime monitors
app.get(["/health", "/healthz", "/ping", "/_health", "/api/health"], (_req, res) => {
  res.status(200).json({ status: "ok", uptime: Math.floor(process.uptime()), timestamp: Date.now() });
});

// HEAD on health probes only — never short-circuit page HEAD (Chrome treats
// empty HEAD with no Content-Type as a download / blank view-source).
app.head(["/health", "/healthz", "/ping", "/_health", "/api/health"], (_req, res) => {
  res.status(200).end();
});

// Staging basic auth only on the staging host. .env often has STAGING_* locally;
// applying it on 127.0.0.1 breaks browser View Source (401 empty body).
const stagingUser = process.env.STAGING_USER;
const stagingPass = process.env.STAGING_PASS;
const stagingHost = (process.env.STAGING_HOST || "staging.melangedigital.in").toLowerCase();
if (stagingUser && stagingPass) {
  const authMiddleware = basicAuth({
    users: { [stagingUser]: stagingPass },
    challenge: true,
    realm: "Melange Digital Staging",
  });
  app.use((req, res, next) => {
    const host = (req.hostname || "").toLowerCase();
    if (host !== stagingHost) {
      return next();
    }

    const userAgent = (req.headers["user-agent"] || "").toLowerCase();
    const isHealthProbe =
      userAgent.includes("health") ||
      userAgent.includes("probe") ||
      userAgent.includes("hostinger") ||
      userAgent.includes("uptime") ||
      userAgent.includes("curl") ||
      req.headers["x-health-check"] !== undefined;

    if (
      req.path === "/sitemap.xml" ||
      req.path === "/robots.txt" ||
      req.path === "/api/sitemap/clear-cache" ||
      req.path.startsWith("/health") ||
      req.path === "/ping" ||
      req.path === "/_health" ||
      isHealthProbe
    ) {
      return next();
    }
    return authMiddleware(req, res, next);
  });
}


const SEO_REDIRECTS = {
  "/services/brand-strategy": "/services/branded-content-ips",
  "/services/content-strategy-and-production": "/services/branded-content-ips",
  "/services/immersive-brand-storytelling": "/services/branded-content-ips",
  "/singapore": "/",
  "/uae": "/",
  "/india": "/",
  "/blogs/community-first-content-stacks-why-owning-your-audience-is-the-new-moat": "/blogs",
  "/services/pr-and-outreach": "/services/fam-trips-pr",
  "/global/united-kingdom": "/",
  "/uk": "/",
  "/global/united-arab-emirates": "/",
  "/services/content-marketing": "/services/branded-content-ips",
  "/services/design-solutions": "/services",
  "/blogs/the-rise-of-creator-storefronts-and-how-they-are-reshaping-brand-influencer-partnerships": "/blogs",
  "/work/costa-cruises": "/work/costa-cruises-introducing-luxury-cruising-to-india",
  "/work/singapore-tourism-board-stb": "/work/singapore-tourism-board",
  "/work/genvr": "/work/genvr",
  "/work/neotraders": "/work/neotraders",
  "/work/devboost": "/work/devboost",
  "/blog": "/blogs",
  "/work/GenVR": "/work/genvr",
  "/work/neoTraders": "/work/neotraders",
  "/work/devBoost": "/work/devboost",
};

// Redirect legacy URLs and normalize work slugs before canonicalizing the host.
app.use((req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") return next();
  const rawPath = req.path;
  const cleanPath = rawPath.replace(/\/+$/, "") || "/";
  const normalizedPath = cleanPath.startsWith("/work/")
    ? cleanPath.toLowerCase()
    : cleanPath;
  const redirectTarget =
    SEO_REDIRECTS[rawPath] ||
    SEO_REDIRECTS[cleanPath] ||
    SEO_REDIRECTS[normalizedPath] ||
    normalizedPath;
  const requestHost = (req.get("host") || "").split(":")[0].toLowerCase();
  const forwardedProto = (req.get("x-forwarded-proto") || "")
    .split(",")[0]
    .trim()
    .toLowerCase();
  const requestProto = forwardedProto || (req.secure ? "https" : "http");
  const redirectHost =
    requestHost === "www.melangedigital.co" ||
    (requestHost === "melangedigital.co" && requestProto !== "https");
  const queryIndex = req.originalUrl.indexOf("?");
  const query = queryIndex !== -1 ? req.originalUrl.slice(queryIndex) : "";

  if (redirectHost) {
    return res.redirect(
      301,
      `https://melangedigital.co${redirectTarget}${query}`,
    );
  }
  if (redirectTarget !== rawPath) {
    return res.redirect(301, redirectTarget + query);
  }
  next();
});

app.get(["/blog/:slug", "/blog/:slug/"], (req, res) => {
  res.redirect(301, `/blogs/${req.params.slug}`);
});

// /home is not a route (hits Coming Soon). Live homepage is /.
app.get(["/home", "/home/"], (_req, res) => {
  res.redirect(301, "/");
});

function getPrerenderedHtml(reqPath) {
  const route = reqPath === "/" ? "/" : reqPath.replace(/\/+$/, "");
  const filePath =
    route === "/" ? INDEX : path.resolve(DIST, `.${route}`, "index.html");
  const distRoot = path.resolve(DIST);
  if (
    filePath !== INDEX &&
    !filePath.startsWith(`${distRoot}${path.sep}`)
  ) {
    return null;
  }
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return null;
  }
  const html = filePath === INDEX ? INDEX_HTML : fs.readFileSync(filePath, "utf8");
  return html.includes(`<!-- prerendered-route:${route} -->`) ? html : null;
}

function sendHtml(req, res, html) {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Disposition": "inline",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "X-Content-Type-Options": "nosniff",
  });
  res.end(req.method === "HEAD" ? undefined : html);
}

async function sendIndex(req, res) {
  const prerenderedHtml = getPrerenderedHtml(req.path || "/");
  if (prerenderedHtml) {
    sendHtml(req, res, prerenderedHtml);
    return;
  }

  let meta = { stripFaq: true, noindex: true };
  try {
    const index = await getPageIndex();
    meta = resolveMeta(req.path, index);
  } catch (err) {
    console.error("seo head index failed:", err.message);
    meta = resolveMeta(req.path, { routes: new Set(), byPath: {} });
  }
  if (res.headersSent) return;
  const html = applyHead(INDEX_HTML, meta);
  sendHtml(req, res, html);
}

const DMA = "destination-marketing-agency";

const CAREERS_FORM_HTML = path.join(DIST, "careers", "form", "index.html");

function getFormFragment() {
  if (!fs.existsSync(CAREERS_FORM_HTML)) return null;
  return fs.readFileSync(CAREERS_FORM_HTML, "utf8");
}

app.get(["/careers/form", "/careers/form/"], (_req, res) => {
  const fragment = getFormFragment();
  if (!fragment) {
    res.status(404).type("text/plain").send("Careers form not found");
    return;
  }
  res.type("html").set("Cache-Control", "no-cache").send(fragment);
});

// Serve the careers form's CSS and JS assets from dist/
const CAREERS_DIST_DIR = path.join(DIST, "careers", "form");
app.use("/careers/form", express.static(CAREERS_DIST_DIR, {
  setHeaders(res, filePath) {
    res.setHeader("Cache-Control", "no-cache");
  },
}));

app.get(["/report-download", "/report-download/"], (_req, res) => {
  res.type("html").set("Cache-Control", "no-cache").send(reportDownloadHtml());
});

// Tourism landing lives at `/` (React shell). Old URLs redirect; assets stay under /DMA/.
app.get([`/${DMA}`, `/${DMA}/`], (_req, res) => {
  res.redirect(301, "/");
});

app.get(["/tourism", "/tourism/"], (_req, res) => {
  res.redirect(301, "/");
});

app.get(["/destination-marketing", "/destination-marketing/"], (_req, res) => {
  res.redirect(301, "/");
});

app.get(
  ["/indian-outbound-tourism-report", "/indian-outbound-tourism-report/"],
  (_req, res) => {
    if (!fs.existsSync(REPORT_PDF)) {
      res.status(404).send("Report PDF not found");
      return;
    }
    res.type("application/pdf");
    res.set(
      "Content-Disposition",
      'inline; filename="The Indian Outbound Inspiration report 2026.pdf"'
    );
    fs.createReadStream(REPORT_PDF).pipe(res);
  }
);

// Clear sitemap cache API for Admin triggers
app.post("/api/sitemap/clear-cache", (_req, res) => {
  clearSitemapCache();
  res.json({ ok: true, cleared: true });
});

// Live sitemap from Firestore (blogs + casestudies). Before static so spa/sitemap.xml is not used.
app.get("/sitemap.xml", async (req, res) => {
  res.set("Content-Type", "application/xml; charset=utf-8");
  res.set("Cache-Control", "public, max-age=60");
  try {
    if (req.query.refresh === "1") {
      clearSitemapCache();
    }
    const xml = await getSitemapXml();
    res.send(xml);
  } catch (err) {
    console.error("live sitemap failed, static route list:", err.message);
    const xml = buildXml("https://melangedigital.co", ["/"]);
    res.send(xml);
  }
});

// Explicit plain-text serving for LLM crawler specifications
app.get(["/llms.txt", "/llm.txt"], (_req, res) => {
  const spaFile = path.join(DIST, "llms.txt");
  const pubFile = path.join(__dirname, "public", "llms.txt");
  const target = fs.existsSync(spaFile) ? spaFile : pubFile;
  if (fs.existsSync(target)) {
    res.type("text/plain; charset=utf-8").sendFile(target);
  } else {
    res.status(404).type("text/plain").send("Not found");
  }
});

/**
 * Serve robots.txt with an explicit UTF-8 plain-text Content-Type.
 * Keep this route before express.static middleware.
 */
app.get("/robots.txt", (_req, res, next) => {
  const robotsPath = path.join(__dirname, "public", "robots.txt");

  fs.readFile(robotsPath, "utf8", (err, contents) => {
    if (err) {
      return next(err);
    }

    res.status(200);
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(contents);
  });
});

// write-spa-shells copies index.html into about/, contact/, etc. If static serves those
 // first, seo-head never runs and View Source shows stale/empty schema. Intercept HTML
 // navigations before static; leave admin + hashed assets to express.static.
app.use((req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") return next();
  const p = req.path || "/";
  if (
    p.startsWith("/admin") ||
    p.startsWith("/assets/") ||
    p.startsWith("/destination-marketing-agency") ||
    p.startsWith("/vcard") ||
    p.startsWith("/Career") ||
    p.startsWith("/careers/form") ||
    p.startsWith("/careers/Apply")
  ) {
    return next();
  }
  // Real files (js/css/png/…) — not SPA routes
  if (p !== "/" && /\.[a-zA-Z0-9]+$/.test(p)) return next();
  return sendIndex(req, res);
});

app.use(
  express.static(DIST, {
    // Avoid /admin/login → /admin/login/ 301 (breaks behind some Hostinger proxies)
    redirect: false,
    // Physical admin/*/index.html shells (from write-spa-shells) are served here
    setHeaders(res, filePath) {
      if (filePath.endsWith(`${path.sep}index.html`) || filePath.endsWith("/index.html")) {
        res.setHeader("Cache-Control", "no-cache");
        return;
      }
      if (filePath.includes(`${path.sep}assets${path.sep}`) || filePath.includes("/assets/")) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  })
);

const PUBLIC_DIR = path.join(__dirname, "public");
app.use(
  express.static(PUBLIC_DIR, {
    redirect: false,
    setHeaders(res, filePath) {
      if (filePath.endsWith(`${path.sep}index.html`) || filePath.endsWith("/index.html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

app.use((req, res) => {
  if (req.path.startsWith("/assets/")) {
    res.status(404).type("text/plain").send("Not found");
    return;
  }
  return sendIndex(req, res);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Melange static server on :${PORT} → ${DIST}`);
});
