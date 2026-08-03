import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SITE_ORIGIN, routes } from "./site-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "sitemap.xml");

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

const lastmod = new Date().toISOString().slice(0, 10);
const seen = new Set();
const urls = [];

for (const route of routes) {
  const locPath = route === "/" ? "/" : route.replace(/\/$/, "") || "/";
  if (seen.has(locPath)) continue;
  seen.add(locPath);
  const { changefreq, priority } = metaFor(locPath);
  const loc = locPath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${locPath}`;
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

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(OUT, xml, "utf8");
console.log(`Wrote ${urls.length} URLs → ${OUT}`);
