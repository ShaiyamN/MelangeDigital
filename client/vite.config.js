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

        if (url === "/tourism" || url === "/tourism/") {
          res.writeHead(301, { Location: `/${TOURISM_SLUG}` });
          res.end();
          return;
        }

        if (url === `/${TOURISM_SLUG}/`) {
          res.writeHead(301, { Location: `/${TOURISM_SLUG}` });
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

        if (!url.startsWith(`/${TOURISM_SLUG}`)) {
          next();
          return;
        }

        const sourceRoot = fs.existsSync(tourismPublicDir) ? tourismPublicDir : tourismStagingDir;
        const relativePath = url.replace(new RegExp(`^/${TOURISM_SLUG}/?`), "") || "index.html";
        const filePath = path.join(sourceRoot, relativePath === "" ? "index.html" : relativePath);

        if (!filePath.startsWith(sourceRoot)) {
          res.statusCode = 403;
          res.end("Forbidden");
          return;
        }

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
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
        }

        const indexPath = path.join(sourceRoot, "index.html");
        if (fs.existsSync(indexPath)) {
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(indexPath).pipe(res);
          return;
        }

        next();
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
  },
});
