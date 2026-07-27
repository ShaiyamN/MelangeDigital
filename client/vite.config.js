import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tourismDir = path.join(__dirname, "public", "tourism");
const tourismStagingDir = path.join(__dirname, "tourism-landing-staging");

function tourismDevMiddleware() {
  return {
    name: "tourism-dev-middleware",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] || "";
        if (!url.startsWith("/tourism")) {
          next();
          return;
        }

        const sourceRoot = fs.existsSync(tourismDir) ? tourismDir : tourismStagingDir;
        const relativePath = url.replace(/^\/tourism\/?/, "") || "index.html";
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
