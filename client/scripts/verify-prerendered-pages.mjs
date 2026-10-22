import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { isPrerenderableRoute } from "./site-routes.mjs";

const require = createRequire(import.meta.url);
const { getPageIndex } = require("./live-sitemap.cjs");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const spa = path.join(root, "spa");

function routeFile(route) {
  const directory =
    route === "/" ? spa : path.resolve(spa, `.${route}`);
  if (directory !== spa && !directory.startsWith(`${spa}${path.sep}`)) {
    throw new Error(`Invalid route in prerender manifest: ${route}`);
  }
  return path.join(directory, "index.html");
}

function plainText(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "";
  return body
    .replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function requiresHeading(route) {
  return (
    ["/", "/services", "/about", "/contact", "/blogs"].includes(route) ||
    route.startsWith("/services/") ||
    route.startsWith("/blogs/") ||
    route.startsWith("/work/")
  );
}

const pageIndex = await getPageIndex();
const routes = [...pageIndex.routes].filter((route) =>
  isPrerenderableRoute(route, pageIndex.byPath),
);
const blogRoutes = routes.filter((route) => route.startsWith("/blogs/"));
if (!blogRoutes.length) {
  throw new Error("No CMS blog routes were found in the prerender manifest.");
}

for (const route of routes) {
  const file = routeFile(route);
  if (!fs.existsSync(file)) {
    throw new Error(`Missing prerendered HTML for ${route}: ${file}`);
  }
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes(`<!-- prerendered-route:${route} -->`)) {
    throw new Error(`Prerender route marker missing for ${route}`);
  }
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "";
  const headingText = heading.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const visibleText = plainText(html);
  if (
    (requiresHeading(route) && !headingText) ||
    visibleText.split(/\s+/).filter(Boolean).length < 40
  ) {
    throw new Error(
      `Prerendered page is missing a meaningful H1/body for ${route} (H1="${headingText}", textLength=${visibleText.length}).`,
    );
  }
  console.log(`Verified ${route}: ${visibleText.length} visible characters`);
}

for (const route of ["/", "/services", "/about", "/contact"]) {
  if (!routes.includes(route)) {
    throw new Error(`Required page is absent from the prerender route set: ${route}`);
  }
}

console.log(
  `Prerender verification passed (${routes.length} routes, including ${blogRoutes.length} blog pages).`,
);
