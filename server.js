const http = require("http");
const fs = require("fs");
const path = require("path");

// Serves the Vite build for Hostinger Node entry (process.env.PORT).
const DIST = path.join(__dirname, "client", "dist");
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const resolved = path.normalize(path.join(root, decoded));
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function send(res, filePath, status = 200) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(status, { "Content-Type": MIME[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error(`Missing ${path.join(DIST, "index.html")} — run npm run build first`);
  process.exit(1);
}

http
  .createServer((req, res) => {
    const urlPath = req.url === "/" ? "/index.html" : req.url;
    let filePath = safeJoin(DIST, urlPath);

    if (filePath && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      send(res, filePath);
      return;
    }

    // SPA fallback
    send(res, path.join(DIST, "index.html"));
  })
  .listen(PORT, () => {
    console.log(`Melange static server on :${PORT} → ${DIST}`);
  });
