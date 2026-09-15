const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const index = path.join(root, "dist", "index.html");

if (!fs.existsSync(index)) {
  console.error("FAIL: dist/index.html missing");
  console.error("  Hostinger Output directory must be empty. If it is `dist`, Hostinger deletes the prebuilt files before npm run build.");
  console.error("  Deploy branch hostinger-dist with build command: node scripts/verify-dist.cjs");
  process.exit(1);
}

const bytes = fs.statSync(index).size;
const reportDownload = path.join(root, "dist", "report-download.html");
const reportPdf = path.join(
  root,
  "dist",
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf",
);

console.log(`verify-dist: ok (${index}, ${bytes} bytes)`);
console.log("hostinger-build: ok (dist/index.html)");

const distVideos = path.join(root, "dist", "videos");
const publicVideos = path.join(root, "public", "videos");
if (!fs.existsSync(distVideos) && fs.existsSync(publicVideos)) {
  try {
    const symlinkType = process.platform === "win32" ? "junction" : "dir";
    fs.symlinkSync(publicVideos, distVideos, symlinkType);
  } catch {
    // server.cjs fallback serves public directory directly
  }
}

if (!fs.existsSync(reportDownload)) {
  console.error("FAIL: dist/report-download.html missing");
  process.exit(1);
}
if (!fs.existsSync(reportPdf)) {
  console.error("FAIL: report PDF missing in dist/assets/reports/");
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
console.log("Hostinger panel (recommended — skip on-server Vite):");
console.log("  Branch:           main");
console.log("  Application root: client");
console.log("  Node.js version:  20.x");
console.log("  Build command:    node scripts/verify-dist.cjs");
console.log("  Start command:    npm start");
console.log("  Entry file:       server.js");
console.log("  Output directory: (leave empty — Express, not static Vite)");
