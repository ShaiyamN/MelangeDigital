import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { reportDownloadHtml } = require("./scripts/report-download-html.cjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MARKETING_SLUG = "destination-marketing-agency";
const marketingPublicDir = path.join(__dirname, "public", MARKETING_SLUG);
const REPORT_PDF_FILE = path.join(
  __dirname,
  "public",
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf",
);
const careersFormDir = path.join(
  __dirname,
  "public",
  "careers",
  "Apply_Now_and_Become_a_Part_of_Our_Team"
);
const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
};
function marketingDevMiddleware() {
  return {
    name: "marketing-dev-middleware",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0] || "";

        if (url === "/report-download" || url === "/report-download/") {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-cache");
          res.end(reportDownloadHtml());
          return;
        }

        if (
          url === "/tourism" ||
          url === "/tourism/" ||
          url === `/${MARKETING_SLUG}` ||
          url === `/${MARKETING_SLUG}/` ||
          url === "/destination-marketing" ||
          url === "/destination-marketing/"
        ) {
          res.writeHead(301, { Location: "/" });
          res.end();
          return;
        }

        if (url === "/indian-outbound-tourism-report" || url === "/indian-outbound-tourism-report/") {
          if (!fs.existsSync(REPORT_PDF_FILE)) {
            res.statusCode = 404;
            res.end("Report PDF not found");
            return;
          }
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            'inline; filename="The Indian Outbound Inspiration report 2026.pdf"',
          );
          fs.createReadStream(REPORT_PDF_FILE).pipe(res);
          return;
        }

        // Standalone careers form — mirror the server.cjs production routes so the
        // careers page iframe loads the form in dev instead of the SPA fallback.
        if (url === "/careers/form" || url === "/careers/form/") {
          const indexFile = path.join(careersFormDir, "index.html");
          if (!fs.existsSync(indexFile)) {
            res.statusCode = 404;
            res.end("Careers form not found");
            return;
          }
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-cache");
          fs.createReadStream(indexFile).pipe(res);
          return;
        }

        if (url.startsWith("/careers/form/")) {
          const relativePath = url.replace(/^\/careers\/form\//, "");
          const candidate = path.join(careersFormDir, relativePath);
          if (
            candidate.startsWith(careersFormDir) &&
            fs.existsSync(candidate) &&
            fs.statSync(candidate).isFile() &&
            fs.statSync(candidate).size > 0
          ) {
            const ext = path.extname(candidate);
            res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
            fs.createReadStream(candidate).pipe(res);
            return;
          }
        }

        if (!url.startsWith(`/${MARKETING_SLUG}/`)) {
          next();
          return;
        }

        const relativePath = url.replace(new RegExp(`^/${MARKETING_SLUG}/?`), "") || "";
        if (!relativePath || relativePath === "index.html") {
          res.writeHead(301, { Location: "/" });
          res.end();
          return;
        }

        const candidate = path.join(marketingPublicDir, relativePath);
        if (
          !candidate.startsWith(marketingPublicDir) ||
          !fs.existsSync(candidate) ||
          !fs.statSync(candidate).isFile() ||
          fs.statSync(candidate).size === 0
        ) {
          next();
          return;
        }

        const ext = path.extname(candidate);
        res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
        fs.createReadStream(candidate).pipe(res);
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), marketingDevMiddleware()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // ponytail: Hostinger shared builds OOM above ~512MB heap; skip gzip size pass
    reportCompressedSize: false,
    rollupOptions: {
      maxParallelFileOps: 2,
    },
  },
});
