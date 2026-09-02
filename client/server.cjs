const express = require("express");
const basicAuth = require("express-basic-auth");
const fs = require("fs");
const path = require("path");

// Hostinger entry when app root is client/ — serves Vite dist on process.env.PORT.
// Root package.json also starts this file via `node client/server.cjs`.
const DIST = path.join(__dirname, "dist");
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

const { applyHead, resolveMeta } = require("./scripts/seo-head.cjs");
const { getSitemapXml, getPageIndex, buildXml } = require("./scripts/live-sitemap.cjs");
const { reportDownloadHtml } = require("./scripts/report-download-html.cjs");

const app = express();

const stagingUser = process.env.STAGING_USER;
const stagingPass = process.env.STAGING_PASS;
if (stagingUser && stagingPass) {
  app.use(
    basicAuth({
      users: { [stagingUser]: stagingPass },
      challenge: true,
      realm: "Melange Digital Staging",
    })
  );
}

const PERMA_REDIRECTS = {
  "/work/singapore-tourism-board-stb": "/work/singapore-tourism-board",
  "/work/GenVR": "/work/genvr",
  "/work/neoTraders": "/work/neotraders",
  "/work/devBoost": "/work/devboost",
};

for (const [from, to] of Object.entries(PERMA_REDIRECTS)) {
  app.get([from, `${from}/`], (_req, res) => {
    res.redirect(301, to);
  });
}

async function sendIndex(req, res) {
  let meta = { stripFaq: true, noindex: true };
  try {
    const index = await getPageIndex();
    meta = resolveMeta(req.path, index);
  } catch (err) {
    console.error("seo head index failed:", err.message);
    meta = resolveMeta(req.path, { routes: new Set(), byPath: {} });
  }
  res.setHeader("Cache-Control", "no-cache");
  res.type("html");
  res.send(applyHead(INDEX_HTML, meta));
}

const DMA = "destination-marketing-agency";
const ZOHO_CAREERS_FORM =
  "https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI";

async function serveCareersFormEmbed(req, res) {
  const qs = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "?zf_rszfm=1";
  try {
    const upstream = await fetch(ZOHO_CAREERS_FORM + qs);
    if (!upstream.ok) {
      res.status(upstream.status).type("text/plain").send("Form unavailable");
      return;
    }
    let html = await upstream.text();
    const inject = '<link rel="stylesheet" href="/careers/zoho-form.css">';
    html = html.includes("</head>")
      ? html.replace("</head>", inject + "</head>")
      : inject + html;
    res.type("html").set("Cache-Control", "no-cache").send(html);
  } catch (err) {
    console.error("careers form embed failed:", err.message);
    res.status(502).type("text/plain").send("Form unavailable");
  }
}

app.get(["/careers/form-embed", "/careers/form-embed/"], serveCareersFormEmbed);

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

// Live sitemap from Firestore (blogs + casestudies). Before static so dist/sitemap.xml is not used.
app.get("/sitemap.xml", async (_req, res) => {
  try {
    const xml = await getSitemapXml();
    res
      .type("application/xml")
      .set("Cache-Control", "public, max-age=300")
      .send(xml);
  } catch (err) {
    console.error("live sitemap failed, static route list:", err.message);
    const xml = buildXml("https://melangedigital.co", ["/"]);
    res
      .type("application/xml")
      .set("Cache-Control", "public, max-age=60")
      .send(xml);
  }
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

app.use((req, res) => {
  if (req.path.startsWith("/assets/")) {
    res.status(404).type("text/plain").send("Not found");
    return;
  }
  return sendIndex(req, res);
});

app.listen(PORT, () => {
  console.log(`Melange static server on :${PORT} → ${DIST}`);
});
