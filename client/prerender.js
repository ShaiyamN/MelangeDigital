import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Simple static file server
function startServer(distPath, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = path.join(
        distPath,
        req.url === "/" ? "/index.html" : req.url,
      );

      // Handle SPA routing - serve index.html for unknown paths
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distPath, "index.html");
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
      };

      res.setHeader("Content-Type", mimeTypes[ext] || "text/plain");
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => resolve(server));
  });
}

const routes = [
  "/",
  "/services",
  "/work",
  "/about",
  "/contact",
  "/blogs",
  "/careers",
  "/terms-of-service",
  "/privacy-policy",
  "/cancellation-and-refund-policy",
  "/cookie-policy",
  "/performance-marketing",
  "/work/zee5",
  "/work/costa-cruises",
  "/work/kalon",
  "/work/duvon",
  "/work/make-my-trip",
  "/work/sportz-village",
  "/work/active-club",
  "/work/kunal-rathod",
  "/work/sportz-village-xp",
  "/work/proportunity",
  "/work/dhruvak",
  "/work/travel-stop",
  "/work/GenVR",
  "/work/rock-highland",
  "/work/aartech-solonics",
  "/work/enerqual",
  "/work/resorts-world-cruises",
  "/work/ganga-fashions",
  "/work/versailles-dental-clinic",
  "/work/healthy-mithai",
  "/work/jewel-houze",
  "/work/neoTraders",
  "/work/devBoost",
  "/work/singapore-tourism-board",
  "/work/singapore-tourism-board-stb",
  "/work/her-hk",
  "/work/akbar-travels",
  "/work/zambia-tourism",
  "/work/navi-savi",
  "/services/brand-strategy",
  "/services/influencer-marketing",
  "/services/immersive-brand-storytelling",
  "/services/design-and-development",
  "/services/content-strategy-and-production",
  "/services/pr-and-outreach",
  "/services/content-marketing",
  "/services/ecommerce",
  "/services/design-solutions",
  "/services/performance-marketing",
  "/services/website-development-seo",
  "/services/brand-strategy/market-research",
  "/services/brand-strategy/brand-audit",
  "/services/brand-strategy/competition-category-benchmarking",
  "/services/brand-strategy/audience-profiling",
  "/services/brand-strategy/brand-experience",
  "/services/brand-strategy/communication-design",
  "/services/design-solutions/branding",
  "/services/design-solutions/graphic-design",
  "/services/design-solutions/data-visualization",
  "/services/content-marketing/social-media",
  "/services/content-marketing/influencer-marketing",
  "/services/content-marketing/video-graphy",
  "/services/content-marketing/photo-graphy",
  "/services/content-marketing/motion-graphics",
  "/services/content-marketing/articles",
  "/services/content-marketing/ad-copywriting",
  "/services/content-marketing/b2b-marketing",
  "/services/performance-marketing/ads",
  "/services/performance-marketing/media-buying-planning",
  "/services/performance-marketing/automation",
  "/services/performance-marketing/analytics",
  "/services/website-development-seo/web-development",
  "/services/website-development-seo/ui-ux",
  "/services/website-development-seo/content",
  "/services/website-development-seo/seo",
  "/services/ecommerce/market-research",
  "/services/ecommerce/d2c",
  "/services/ecommerce/marketplace-management",
  "/services/ecommerce/paid-campaigns",
  "/blogs/the-rise-of-creator-storefronts-and-how-they-are-reshaping-brand-influencer-partnerships",
  "/blogs/sustainable-design-and-packaging-why-2025-consumers-judge-before-they-click-buy",
  "/blogs/community-first-content-stacks-why-owning-your-audience-is-the-new-moat",
  "/blogs/from-products-to-experiences-how-micro-events-and-community-activations-are-shaping-brand-ip-in-2025",
  "/singapore-tourism",
  "/singapore-tourism-aeo-seo",
  "/siam-malls",
  "/work/green-label",
  "/ganga-fashion",
  "/work/maison-luxe",
  "/work/veda-naturals",
  "/services/aeo-seo",
];

const PORT = 3033;
const distPath = path.join(__dirname, "dist");

console.log("Starting server...");
const server = await startServer(distPath, PORT);
console.log(`Server running at http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const route of routes) {
  const page = await browser.newPage();

  await page.evaluateOnNewDocument(() => {
    window.__PRERENDERING__ = true;
  });

  // ─── STEP 2: Use networkidle2 + fallback on timeout ────────────────────────
  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });
  } catch (err) {
    // If it times out, the page is likely still usable — just continue
    console.warn(`⚠️  Timeout on ${route}, continuing anyway...`);
  }

  // ─── STEP 3: Kill any remaining CSS animations / transitions ────────────────
  await page.evaluate(() => {
    document.body.classList.add("prerendering");

    const style = document.createElement("style");
    style.setAttribute("data-prerender-freeze", "true");
    style.innerHTML = `
      .prerendering *,
      .prerendering *::before,
      .prerendering *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `;
    document.head.appendChild(style);
  });

  // ─── STEP 4: Wait for fonts, frames, and React to fully settle ──────────────
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(
    () =>
      new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
  );
  await new Promise((r) => setTimeout(r, 500));

  // ─── STEP 5: Clean up ALL prerender artifacts before snapshotting ───────────
  await page.evaluate(() => {
    document.body.classList.remove("prerendering");

    const freezeStyle = document.querySelector("style[data-prerender-freeze]");
    if (freezeStyle) freezeStyle.remove();

    delete window.__PRERENDERING__;

    document.querySelectorAll('[style*="animation"]').forEach((el) => {
      el.style.animationDuration = "";
      el.style.animationDelay = "";
    });
    document.querySelectorAll('[style*="transition"]').forEach((el) => {
      el.style.transitionDuration = "";
      el.style.transitionDelay = "";
    });
  });

  // ─── STEP 6: Wait one more frame so browser repaints after cleanup ──────────
  await page.evaluate(
    () =>
      new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
  );

  const html = await page.content();

  const outDir = path.join(distPath, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log("Prerendered:", route);

  await page.close();
}

await browser.close();
await new Promise((resolve) => server.close(resolve));
console.log("Prerender complete.");
