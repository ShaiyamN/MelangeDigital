import fs from "fs";
import path from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { isPrerenderableRoute } from "./scripts/site-routes.mjs";

const require = createRequire(import.meta.url);
const puppeteer = (await import("puppeteer-core")).default;
const { getPageIndex } = require("./scripts/live-sitemap.cjs");
const { applyHead, resolveMeta } = require("./scripts/seo-head.cjs");
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function startServer(distPath, port) {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      let urlPath;
      try {
        urlPath = decodeURIComponent(
          new URL(req.url || "/", "http://localhost").pathname,
        );
      } catch {
        res.statusCode = 400;
        res.end("Bad request");
        return;
      }

      const distRoot = path.resolve(distPath);
      let filePath = path.resolve(
        distRoot,
        urlPath === "/" ? "index.html" : `.${urlPath}`,
      );
      if (
        filePath !== path.join(distRoot, "index.html") &&
        !filePath.startsWith(`${distRoot}${path.sep}`)
      ) {
        res.statusCode = 400;
        res.end("Bad request");
        return;
      }

      const exists = fs.existsSync(filePath) && fs.statSync(filePath).isFile();
      if (!exists) {
        if (urlPath.startsWith("/assets/")) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain");
          res.end("Not found");
          return;
        }
        filePath = path.join(distRoot, "index.html");
      }

      const mimeTypes = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpeg": "image/jpeg",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".webp": "image/webp",
        ".avif": "image/avif",
        ".mp4": "video/mp4",
      };
      res.setHeader(
        "Content-Type",
        mimeTypes[path.extname(filePath)] || "text/plain",
      );
      fs.createReadStream(filePath).pipe(res);
    });

    server.once("error", reject);
    server.listen(port, () => resolve(server));
  });
}

function outputDirectory(root, route) {
  const rootPath = path.resolve(root);
  const directory =
    route === "/" ? rootPath : path.resolve(rootPath, `.${route}`);
  if (
    directory !== rootPath &&
    !directory.startsWith(`${rootPath}${path.sep}`)
  ) {
    throw new Error(`Refusing to write route outside output directory: ${route}`);
  }
  return directory;
}

function stripAnalyticsFromSnapshot(html) {
  return html
    .replace(
      /<script\b(?=[^>]*\bsrc=["'][^"']*(?:googletagmanager\.com\/gtag\/js|connect\.facebook\.net\/signals\/config|connect\.facebook\.net\/en_US\/fbevents\.js)[^"']*["'])[^>]*>[\s\S]*?<\/script>\s*/gi,
      "",
    )
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>\s*/gi, (script) =>
      /(?:fbq\s*\(\s*["'](?:init|track)["']|gtag\s*\(\s*["']config["'])/i.test(
        script,
      )
        ? ""
        : script,
    )
    .replace(
      /<noscript\b[^>]*>[\s\S]*?facebook\.com\/tr[\s\S]*?<\/noscript>\s*/gi,
      "",
    );
}

const PORT = 3033;
const distPath = path.join(__dirname, "dist");
const spaPath = path.join(__dirname, "spa");
const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : null,
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);
const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

if (!chromePath) {
  throw new Error(
    "Chrome was not found. Set PUPPETEER_EXECUTABLE_PATH to a Chrome/Chromium executable.",
  );
}
if (!fs.existsSync(path.join(distPath, "index.html"))) {
  throw new Error("Missing dist/index.html. Run npm run build:full before prerendering.");
}
if (!fs.existsSync(spaPath)) {
  throw new Error("Missing spa/ directory. Run npm run build:full before prerendering.");
}

const pageIndex = await getPageIndex();
const routes = [...pageIndex.routes]
  .filter((route) => isPrerenderableRoute(route, pageIndex.byPath))
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
const blogRoutes = routes.filter((route) => route.startsWith("/blogs/"));
const routesRequiringHeading = new Set([
  "/",
  "/services",
  "/about",
  "/contact",
  "/blogs",
]);
if (!blogRoutes.length) {
  throw new Error("No CMS blog routes were found; refusing to produce a partial prerender.");
}

let server;
let browser;
try {
  server = await startServer(distPath, PORT);
  browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of routes) {
    const page = await browser.newPage();
    const browserErrors = [];
    try {
      page.on("pageerror", (error) => browserErrors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") browserErrors.push(message.text());
      });
      await page.evaluateOnNewDocument(() => {
        window.__PRERENDERING__ = true;
      });
      const response = await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      if (!response || !response.ok()) {
        throw new Error(
          `HTTP ${response?.status() ?? "no response"} loading ${route}`,
        );
      }

      try {
        await page.waitForFunction(
          () => {
            const text = document.body?.innerText?.replace(/\s+/g, " ").trim() || "";
            return text.length >= 300;
          },
          { timeout: 30000 },
        );
        if (
          routesRequiringHeading.has(route) ||
          route.startsWith("/services/") ||
          route.startsWith("/blogs/") ||
          route.startsWith("/work/")
        ) {
          await page.waitForFunction(
            () => Boolean(document.querySelector("h1")?.innerText?.trim()),
            { timeout: 15000 },
          );
        }
      } catch (error) {
        const state = await page.evaluate(() => ({
          title: document.title,
          h1: document.querySelector("h1")?.innerText?.trim() || "",
          visibleTextLength: document.body?.innerText?.trim().length || 0,
        }));
        throw new Error(
          `Page content did not become indexable for ${route}: ${JSON.stringify(state)}; browser errors: ${browserErrors.join(" | ") || "none"}; ${error.message}`,
        );
      }

      if (route === "/work") {
        await page.waitForFunction(
          () => document.querySelectorAll(".svc-project").length >= 10,
          { timeout: 15000 },
        );
      } else if (route.startsWith("/blogs/")) {
        await page.waitForFunction(() => {
          const hasHeadings = document.querySelector(".firstSection h2");
          return (
            !hasHeadings ||
            document.querySelector(".secSection")?.textContent?.includes("Table of Contents")
          );
        }, { timeout: 15000 });
      }

      await page.evaluate(() => {
        document.body.classList.add("prerendering");
        const style = document.createElement("style");
        style.setAttribute("data-prerender-freeze", "true");
        style.textContent = `
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
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(
        () =>
          new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve)),
          ),
      );
      await new Promise((resolve) => setTimeout(resolve, 300));
      await page.evaluate(() => {
        document.body.classList.remove("prerendering");
        document.querySelector("style[data-prerender-freeze]")?.remove();
        delete window.__PRERENDERING__;
      });

      const routeMeta = resolveMeta(route, pageIndex);
      let html = applyHead(
        stripAnalyticsFromSnapshot(await page.content()),
        routeMeta,
      );
      html = html.replace(/[ \t]+$/gm, "");
      const marker = `<!-- prerendered-route:${route} -->`;
      html = html.replace(/<\/head>/i, `  ${marker}\n</head>`);
      if (!html.includes(marker)) {
        throw new Error(`Could not mark prerendered HTML for ${route}`);
      }

      for (const root of [distPath, spaPath]) {
        const outputDir = outputDirectory(root, route);
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, "index.html"), html);
      }
      console.log(`Prerendered ${route}`);
    } finally {
      await page.close();
    }
  }
} finally {
  if (browser) await browser.close();
  if (server) {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

console.log(
  `Prerender complete (${routes.length} routes, ${blogRoutes.length} blog pages).`,
);
