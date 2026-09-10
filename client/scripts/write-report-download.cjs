const fs = require("fs");
const path = require("path");
const { reportDownloadHtml } = require("./report-download-html.cjs");

const out = path.join(__dirname, "../public/report-download.html");
fs.writeFileSync(out, reportDownloadHtml(), "utf8");
console.log("Wrote public/report-download.html");
