import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORT_SLUG = "indian-outbound-tourism-report";
const reportPublicDir = path.join(__dirname, "public", REPORT_SLUG);
const reportStagingDir = path.join(__dirname, "tourism-landing-staging");

function reportLandingDevMiddleware() {
  return {
    name: "report-landing-dev-middleware",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] || "";

        if (url === "/tourism" || url === "/tourism/") {
          res.writeHead(301, { Location: `/${REPORT_SLUG}/` });
          res.end();
          return;
        }

        if (!url.startsWith(`/${REPORT_SLUG}`)) {
          next();
          return;
        }

        const sourceRoot = fs.existsSync(reportPublicDir) ? reportPublicDir : reportStagingDir;
        const relativePath = url.replace(new RegExp(`^/${REPORT_SLUG}/?`), "") || "index.html";
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
  plugins: [react(), reportLandingDevMiddleware()],
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
