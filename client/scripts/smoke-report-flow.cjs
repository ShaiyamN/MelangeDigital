// ponytail: one-shot deploy smoke — fails if report redirect chain is broken.
const fs = require("fs");
const path = require("path");
const { reportDownloadHtml } = require("./report-download-html.cjs");

const root = path.join(__dirname, "..");
let fail = 0;

function ok(msg) {
  console.log(`ok: ${msg}`);
}
function bad(msg) {
  console.error(`FAIL: ${msg}`);
  fail++;
}

const assetDir = path.join(root, "dist", "assets");
const indexBundles = fs
  .readdirSync(assetDir)
  .filter((f) => f.startsWith("index-") && f.endsWith(".js"));
if (!indexBundles.length) bad("dist/assets/index-*.js missing");
else {
  const js = indexBundles
    .map((f) => fs.readFileSync(path.join(assetDir, f), "utf8"))
    .join("\n");
  if (!js.includes("WebsiteReportLead")) bad("bundle missing WebsiteReportLead form");
  else ok("bundle includes WebsiteReportLead HTML form");
  if (!js.includes("xcTd58RcdWgj94Z0Q1vN0Z6YOwjBfedp3vSkxnlNj0Q"))
    bad("bundle missing report form perma");
  else ok("bundle includes report form perma");
  if (!js.includes("/report-download")) bad("bundle missing report-download path");
  else ok("bundle includes /report-download redirect path");
}

const html = reportDownloadHtml();
if (!html.includes("indian-outbound-tourism-report")) bad("report-download HTML missing PDF route");
else ok("report-download HTML redirects to /indian-outbound-tourism-report");

const pdf = path.join(
  root,
  "dist",
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf",
);
if (!fs.existsSync(pdf)) bad("report PDF missing in dist");
else ok(`report PDF present (${Math.round(fs.statSync(pdf).size / 1024)} KB)`);

if (!fs.existsSync(path.join(root, "dist", "report-download.html")))
  bad("dist/report-download.html missing");
else ok("dist/report-download.html present");

if (fs.existsSync(path.join(root, "public", "Tell_us_about_yourself")))
  bad("unused Tell_us_about_yourself/ still in public/");
else ok("unused Tell_us_about_yourself/ removed");

if (fail) {
  console.error(`\nsmoke-report-flow: ${fail} check(s) failed`);
  process.exit(1);
}
console.log("smoke-report-flow: ok");
