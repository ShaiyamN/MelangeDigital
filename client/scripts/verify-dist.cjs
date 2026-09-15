const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const spa = path.join(root, "spa");
const dist = path.join(root, "dist");

function hasIndex(dir) {
  return fs.existsSync(path.join(dir, "index.html"));
}

// Hostinger Express default output is `dist` and it empties that folder.
// Prebuilt files live in spa/ (git). Never run Vite here.
if (!hasIndex(dist) && hasIndex(spa)) {
  try {
    fs.cpSync(spa, dist, { recursive: true });
    console.log("verify-dist: restored dist/ from spa/");
  } catch (err) {
    console.warn("verify-dist: spa -> dist copy skipped:", err.message);
  }
}

const served = hasIndex(dist) ? dist : spa;
if (!hasIndex(served)) {
  console.error("FAIL: spa/index.html missing (Hostinger must not run Vite)");
  process.exit(1);
}

const bytes = fs.statSync(path.join(served, "index.html")).size;
const reportDownload = path.join(served, "report-download.html");
const reportPdf = path.join(
  served,
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf",
);

console.log(`verify-dist: ok (${path.join(served, "index.html")}, ${bytes} bytes)`);
console.log("hostinger-build: ok (prebuilt spa)");

const servedVideos = path.join(served, "videos");
const publicVideos = path.join(root, "public", "videos");
if (!fs.existsSync(servedVideos) && fs.existsSync(publicVideos)) {
  try {
    const symlinkType = process.platform === "win32" ? "junction" : "dir";
    fs.symlinkSync(publicVideos, servedVideos, symlinkType);
  } catch {
    // server.cjs fallback serves public directory directly
  }
}

if (!fs.existsSync(reportDownload)) {
  console.error("FAIL: report-download.html missing in prebuilt spa");
  process.exit(1);
}
if (!fs.existsSync(reportPdf)) {
  console.error("FAIL: report PDF missing in prebuilt spa");
  process.exit(1);
}

if (!fs.existsSync(path.join(root, "server.js"))) {
  console.error("FAIL: server.js missing (Hostinger Express entry)");
  process.exit(1);
}
if (!fs.existsSync(path.join(root, "server.cjs"))) {
  console.error("FAIL: server.cjs missing");
  process.exit(1);
}

console.log("");
console.log("Hostinger: build is verify-only. Vite runs on GitHub Actions, not here.");
