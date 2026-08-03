const http = require("http");
const fs = require("fs");
const path = require("path");

// Hostinger Node entry when app root is the repo (see root package.json "start").
const DIST = path.join(__dirname, "client", "dist");
const PORT = Number(process.env.PORT) || 3000;
const REPORT_PDF = path.join(
  DIST,
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf"
);

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
  ".pdf": "application/pdf",
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
  const stat = fs.statSync(filePath);
  res.writeHead(status, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Content-Length": stat.size,
  });
  fs.createReadStream(filePath).pipe(res);
}

function sendText(res, status, text, type = "text/plain; charset=utf-8") {
  const body = Buffer.from(text);
  res.writeHead(status, {
    "Content-Type": type,
    "Content-Length": body.length,
  });
  res.end(body);
}

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error(`Missing ${path.join(DIST, "index.html")} — run npm run build first`);
  process.exit(1);
}

http
  .createServer((req, res) => {
    const urlPath = (req.url || "/").split("?")[0];

    // Old bookmark only — landing lives at /destination-marketing-agency/
    if (urlPath === "/tourism" || urlPath === "/tourism/") {
      res.writeHead(302, { Location: "/destination-marketing-agency/" });
      res.end();
      return;
    }

    if (
      urlPath === "/indian-outbound-tourism-report" ||
      urlPath === "/indian-outbound-tourism-report/"
    ) {
      if (!fs.existsSync(REPORT_PDF)) {
        sendText(res, 404, "Report PDF not found");
        return;
      }
      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'inline; filename="The Indian Outbound Inspiration report 2026.pdf"',
        "Content-Length": fs.statSync(REPORT_PDF).size,
      });
      fs.createReadStream(REPORT_PDF).pipe(res);
      return;
    }

    const filePath = resolveFile(DIST, urlPath);
    if (filePath) {
      send(res, filePath);
      return;
    }

    if (urlPath.startsWith("/assets/")) {
      sendText(res, 404, "Not found");
      return;
    }

    send(res, path.join(DIST, "index.html"));
  })
  .listen(PORT, () => {
    console.log(`Melange static server on :${PORT} → ${DIST}`);
  });
