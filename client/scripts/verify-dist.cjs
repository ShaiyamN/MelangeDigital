const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const spa = path.join(root, "spa");
const dist = path.join(root, "dist");
const served = fs.existsSync(path.join(spa, "index.html")) ? spa : dist;

if (!fs.existsSync(path.join(served, "index.html"))) {
  console.error("FAIL: spa/index.html missing");
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

if (!fs.existsSync(reportDownload)) {
  console.error("FAIL: report-download.html missing in spa");
  process.exit(1);
}
if (!fs.existsSync(reportPdf)) {
  console.error("FAIL: report PDF missing in spa");
  process.exit(1);
}
if (!fs.existsSync(path.join(root, "server.js")) || !fs.existsSync(path.join(root, "server.cjs"))) {
  console.error("FAIL: server.js / server.cjs missing");
  process.exit(1);
}

console.log(`verify-dist: ok (${path.join(served, "index.html")}, ${bytes} bytes)`);
console.log("hostinger-build: ok (prebuilt spa, no Vite)");
