import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOURISM_SLUG = "destination-marketing-agency";
const tourismPublicDir = path.join(__dirname, "public", TOURISM_SLUG);
const tourismStagingDir = path.join(__dirname, "tourism-landing-staging");
const REPORT_PDF_FILE = path.join(
  __dirname,
  "public",
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf",
);

function tourismDevMiddleware() {
  return {
    name: "tourism-dev-middleware",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] || "";

        if (
          url === "/tourism" ||
          url === "/tourism/" ||
          url === `/${TOURISM_SLUG}` ||
          url === `/${TOURISM_SLUG}/` ||
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

        if (!url.startsWith(`/${TOURISM_SLUG}/`)) {
          next();
          return;
        }

        const relativePath = url.replace(new RegExp(`^/${TOURISM_SLUG}/?`), "") || "";
        if (!relativePath || relativePath === "index.html") {
          res.writeHead(301, { Location: "/" });
          res.end();
          return;
        }

        const roots = fs.existsSync(tourismPublicDir)
          ? [tourismPublicDir, tourismStagingDir]
          : [tourismStagingDir];
        let filePath = null;
        for (const root of roots) {
          const candidate = path.join(root, relativePath);
          if (!candidate.startsWith(root)) continue;
          if (!fs.existsSync(candidate) || !fs.statSync(candidate).isFile()) continue;
          if (fs.statSync(candidate).size === 0) continue;
          filePath = candidate;
          break;
        }

        if (!filePath) {
          next();
          return;
        }

        const ext = path.extname(filePath);
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
        res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
        fs.createReadStream(filePath).pipe(res);
        return;
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tourismDevMiddleware()],
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
