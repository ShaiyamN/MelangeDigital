const http = require("http");
const fs = require("fs");
const path = require("path");

// Serves the Vite build for Hostinger Node entry when app root is the repo.
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
  ".jfif": "image/jpeg",
};

function underRoot(root, candidate) {
  const rootResolved = path.resolve(root);
  const candidateResolved = path.resolve(candidate);
  return (
    candidateResolved === rootResolved ||
    candidateResolved.startsWith(rootResolved + path.sep)
  );
}

function resolveFile(root, urlPath) {
  const raw = decodeURIComponent((urlPath || "/").split("?")[0].split("#")[0]);
  const relative = raw.replace(/^\/+/, "");
  let candidate = path.resolve(root, relative);

  if (!underRoot(root, candidate)) return null;

  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
    candidate = path.join(candidate, "index.html");
    if (!underRoot(root, candidate)) return null;
  }

  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }
  return null;
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
    const urlPath = (req.url || "/").split("?")[0];

    if (urlPath === "/tourism") {
      res.writeHead(302, { Location: "/tourism/" });
      res.end();
      return;
    }

    const filePath = resolveFile(DIST, urlPath);
    if (filePath) {
      send(res, filePath);
      return;
    }

    send(res, path.join(DIST, "index.html"));
  })
  .listen(PORT, () => {
    console.log(`Melange static server on :${PORT} → ${DIST}`);
  });
