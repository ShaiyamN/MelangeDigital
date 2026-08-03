import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { prerenderRoutes as routes } from "./scripts/site-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Simple static file server
function startServer(distPath, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = (req.url || "/").split("?")[0];
      let filePath = path.join(
        distPath,
        urlPath === "/" ? "/index.html" : urlPath,
      );

      const exists = fs.existsSync(filePath) && fs.statSync(filePath).isFile();
      if (!exists) {
        // Don't serve HTML for missing JS/CSS — that triggers browser MIME errors
        if (urlPath.startsWith("/assets/")) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain");
          res.end("Not found");
          return;
        }
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
        ".webp": "image/webp",
        ".mp4": "video/mp4",
      };

      res.setHeader("Content-Type", mimeTypes[ext] || "text/plain");
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => resolve(server));
  });
}

const PORT = 3033;
const distPath = path.join(__dirname, "dist");

console.log("Starting server...");
const server = await startServer(distPath, PORT);
console.log(`Server running at http://localhost:${PORT}`);

const chromePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  (process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : undefined);

const browser = await puppeteer.launch({
  ...(chromePath && fs.existsSync(chromePath)
    ? { executablePath: chromePath }
    : {}),
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
