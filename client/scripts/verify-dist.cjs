const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const spa = path.join(root, "spa");
const dist = path.join(root, "dist");
const index = path.join(spa, "index.html");

if (!fs.existsSync(index)) {
  console.error("FAIL: spa/index.html missing");
  process.exit(1);
}

const reportDownload = path.join(spa, "report-download.html");
const reportPdf = path.join(
  spa,
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

fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(index, path.join(dist, "index.html"));

const bytes = fs.statSync(index).size;
console.log(`verify-dist: ok (${index}, ${bytes} bytes)`);
console.log("hostinger-build: ok (prebuilt spa, no Vite)");
