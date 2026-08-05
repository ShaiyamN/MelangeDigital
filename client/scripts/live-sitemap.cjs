const assert = require("assert");
const path = require("path");
const { pathToFileURL } = require("url");
const { initializeApp, getApps } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const TTL_MS = 5 * 60 * 1000;
let cache = { xml: null, at: 0 };
let db;

function firebaseConfig() {
  const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
  if (!projectId) return null;
  return {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
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

async function fetchContentRoutes(firestore) {
  const out = [];
  for (const [col, prefix] of [
    ["blogs", "/blogs/"],
    ["casestudies", "/work/"],
  ]) {
    const snap = await getDocs(collection(firestore, col));
    snap.forEach((docSnap) => {
      const slug = docSnap.data().slug;
      if (typeof slug === "string" && slug.trim()) {
        out.push(`${prefix}${slug.trim()}`);
      }
    });
  }
  return out;
}

async function getSitemapXml() {
  if (cache.xml && Date.now() - cache.at < TTL_MS) return cache.xml;

  const { SITE_ORIGIN, routes } = await import(
    pathToFileURL(path.join(__dirname, "site-routes.mjs")).href
  );
  const origin = process.env.SITE_ORIGIN || SITE_ORIGIN;
  const firestore = getDb();
  const dynamic = firestore ? await fetchContentRoutes(firestore) : [];
  const xml = buildXml(origin, [...routes, ...dynamic]);
  cache = { xml, at: Date.now() };
  return xml;
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

module.exports = { getSitemapXml, buildXml };
