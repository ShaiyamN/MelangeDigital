const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const TTL_MS = 60 * 1000;
let cache = { xml: null, at: 0, routes: new Set(), byPath: {}, origin: "https://melangedigital.co" };
let db;

function clearSitemapCache() {
  cache = { xml: null, at: 0, routes: new Set(), byPath: {}, origin: "https://melangedigital.co" };
}

function loadEnvFile() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] == null || process.env[key] === "") process.env[key] = val;
  }
}

loadEnvFile();

function firebaseConfig() {
  const projectId =
    process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
  if (!projectId) return null;
  return {
    apiKey: process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
    authDomain:
      process.env.VITE_FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
    projectId,
    storageBucket:
      process.env.VITE_FIREBASE_STORAGE_BUCKET ||
      process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      process.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
      process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
  };
}

function getDb() {
  if (db) return db;
  const cfg = firebaseConfig();
  if (!cfg) return null;
  // Lazy require so self-checks run without node_modules/firebase installed.
  const { initializeApp, getApps } = require("firebase/app");
  const { getFirestore } = require("firebase/firestore");
  const existing = getApps().find((a) => a.name === "live-sitemap");
  const app = existing || initializeApp(cfg, "live-sitemap");
  db = getFirestore(app);
  return db;
}

function metaFor(route) {
  if (route === "/") return { changefreq: "daily", priority: "1.0" };
  if (route === "/destination-marketing-agency")
    return { changefreq: "weekly", priority: "0.9" };
  if (
    route.startsWith("/work/") ||
    route.startsWith("/services/") ||
    route.startsWith("/blogs/")
  )
    return { changefreq: "monthly", priority: "0.8" };
  if (
    route.includes("policy") ||
    route.includes("terms") ||
    route.includes("privacy") ||
    route.includes("cookie")
  )
    return { changefreq: "yearly", priority: "0.5" };
  return { changefreq: "monthly", priority: "0.8" };
}

/** YYYY-MM-DD for sitemap protocol, or "" if unparseable. Never invents "today". */
function toSitemapDate(value) {
  if (value == null || value === "") return "";
  if (typeof value === "object" && typeof value.toDate === "function") {
    try {
      value = value.toDate();
    } catch {
      return "";
    }
  }
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? "" : value.toISOString().slice(0, 10);
  }
  const s = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

function lastmodForPath(locPath, lastmodByPath) {
  const meta = lastmodByPath && lastmodByPath[locPath];
  if (!meta || typeof meta !== "object") return "";
  return (
    toSitemapDate(meta.updatedAt) ||
    toSitemapDate(meta.date) ||
    toSitemapDate(meta.createdAt) ||
    ""
  );
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * @param {string} origin
 * @param {string[]} routes
 * @param {Record<string, {updatedAt?: string, date?: string, createdAt?: string}>} [lastmodByPath]
 */
function buildXml(origin, routes, lastmodByPath = {}) {
  const seen = new Set();
  const urls = [];

  for (const route of routes) {
    const locPath = route === "/" ? "/" : route.replace(/\/$/, "") || "/";
    if (seen.has(locPath)) continue;
    seen.add(locPath);
    const { changefreq, priority } = metaFor(locPath);
    const loc = locPath === "/" ? `${origin}/` : `${origin}${locPath}`;
    const lastmod = lastmodForPath(locPath, lastmodByPath);
    urls.push({ loc, lastmod, changefreq, priority });
  }

  const body = urls
    .map((u) => {
      const lines = [
        "  <url>",
        `    <loc>${xmlEscape(u.loc)}</loc>`,
      ];
      if (u.lastmod) lines.push(`    <lastmod>${xmlEscape(u.lastmod)}</lastmod>`);
      lines.push(
        `    <changefreq>${u.changefreq}</changefreq>`,
        `    <priority>${u.priority}</priority>`,
        "  </url>",
      );
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

async function fetchContent(firestore) {
  const { collection, getDocs } = require("firebase/firestore");
  const byPath = {};
  const paths = [];
  for (const [col, prefix] of [
    ["blogs", "/blogs/"],
    ["casestudies", "/work/"],
  ]) {
    const snap = await getDocs(collection(firestore, col));
    snap.forEach((docSnap) => {
      const data = docSnap.data() || {};
      // No draft/published field in CMS — public site lists every doc with a slug.
      const slug = typeof data.slug === "string" ? data.slug.trim() : "";
      if (!slug) return;
      const loc = `${prefix}${slug}`;
      paths.push(loc);
      byPath[loc] = {
        title: data.seoTitle || data.title || "",
        description: data.metaDescription || data.description || data.intro || "",
        seoTitle: data.seoTitle,
        metaDescription: data.metaDescription,
        intro: data.intro,
        image: data.image || data.bannerImage || "",
        author: data.author || "",
        date: data.date || "",
        updatedAt: data.updatedAt || "",
        createdAt: data.createdAt || "",
        generatedSchema: data.generatedSchema || null,
        customSchema: data.customSchema || null,
        schemaMode: data.schemaMode || "",
      };
    });
  }
  return { paths, byPath };
}

async function loadSiteRoutes() {
  const { SITE_ORIGIN, routes } = await import(
    pathToFileURL(path.join(__dirname, "site-routes.mjs")).href
  );
  return {
    origin: process.env.SITE_ORIGIN || SITE_ORIGIN,
    routes: [...routes],
  };
}

async function refresh() {
  if (cache.xml && Date.now() - cache.at < TTL_MS) return cache;

  let origin = process.env.SITE_ORIGIN || "https://melangedigital.co";
  let routes = ["/"];
  try {
    const site = await loadSiteRoutes();
    origin = site.origin;
    routes = site.routes;
  } catch (err) {
    console.error("site-routes import failed:", err.message);
  }

  let extra = [];
  let byPath = {};
  try {
    const firestore = getDb();
    if (firestore) {
      const content = await fetchContent(firestore);
      extra = content.paths;
      byPath = content.byPath;
    }
  } catch (err) {
    console.error("firestore sitemap skipped:", err.message);
  }

  const allRoutes = [...routes, ...extra];
  const xml = buildXml(origin, allRoutes, byPath);
  cache = {
    xml,
    at: Date.now(),
    origin,
    routes: new Set(allRoutes),
    byPath,
  };
  return cache;
}

async function getSitemapXml() {
  const page = await refresh();
  return page.xml;
}

async function getPageIndex() {
  return refresh();
}

if (require.main === module) {
  const withDates = buildXml(
    "https://example.com",
    ["/", "/blogs", "/blogs/hello-world", "/work/acme", "/blogs/hello-world", "/blogs/airlines-marketing"],
    {
      "/blogs/hello-world": { updatedAt: "2026-10-01T12:00:00.000Z" },
      "/blogs/airlines-marketing": { date: "2026-10-10" },
      "/work/acme": { createdAt: "2026-08-01" },
    },
  );
  assert(withDates.includes("https://example.com/blogs/hello-world"));
  assert(withDates.includes("https://example.com/blogs/airlines-marketing"));
  assert(withDates.includes("https://example.com/work/acme"));
  assert((withDates.match(/hello-world/g) || []).length === 1);
  assert(withDates.includes("<lastmod>2026-10-01</lastmod>"));
  assert(withDates.includes("<lastmod>2026-10-10</lastmod>"));
  assert(withDates.includes("<lastmod>2026-08-01</lastmod>"));
  // Static listing path has no CMS date → no fabricated lastmod
  const blogsBlock = withDates.split("<loc>https://example.com/blogs</loc>")[1].split("</url>")[0];
  assert(!blogsBlock.includes("<lastmod>"));
  assert.equal(toSitemapDate(""), "");
  assert.equal(toSitemapDate("not a date"), "");
  assert.equal(xmlEscape("a&b"), "a&amp;b");
  console.log("live-sitemap self-check ok");
}

module.exports = {
  getSitemapXml,
  getPageIndex,
  buildXml,
  clearSitemapCache,
  toSitemapDate,
  xmlEscape,
  lastmodForPath,
};
