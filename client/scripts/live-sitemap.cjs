const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { initializeApp, getApps } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const TTL_MS = 5 * 60 * 1000;
let cache = { xml: null, at: 0, routes: new Set(), byPath: {}, origin: "https://melangedigital.co" };
let db;

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

function buildXml(origin, routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const seen = new Set();
  const urls = [];

  for (const route of routes) {
    const locPath = route === "/" ? "/" : route.replace(/\/$/, "") || "/";
    if (seen.has(locPath)) continue;
    seen.add(locPath);
    const { changefreq, priority } = metaFor(locPath);
    const loc = locPath === "/" ? `${origin}/` : `${origin}${locPath}`;
    urls.push({ loc, lastmod, changefreq, priority });
  }

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

async function fetchContent(firestore) {
  const byPath = {};
  const paths = [];
  for (const [col, prefix] of [
    ["blogs", "/blogs/"],
    ["casestudies", "/work/"],
  ]) {
    const snap = await getDocs(collection(firestore, col));
    snap.forEach((docSnap) => {
      const data = docSnap.data() || {};
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
  const xml = buildXml(origin, allRoutes);
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
  const xml = buildXml("https://example.com", [
    "/",
    "/blogs",
    "/blogs/hello-world",
    "/work/acme",
    "/blogs/hello-world",
  ]);
  assert(xml.includes("https://example.com/blogs/hello-world"));
  assert(xml.includes("https://example.com/work/acme"));
  assert((xml.match(/hello-world/g) || []).length === 1);
  console.log("live-sitemap self-check ok");
}

module.exports = { getSitemapXml, getPageIndex, buildXml };
