const fs = require("fs");
const path = require("path");
const os = require("os");

const root = path.join(__dirname, "..");
let fail = 0;

function ok(msg) {
  console.log(`ok: ${msg}`);
}
function bad(msg) {
  console.error(`FAIL: ${msg}`);
  fail++;
}

const freeMb = Math.round(os.freemem() / (1024 * 1024));
const totalMb = Math.round(os.totalmem() / (1024 * 1024));
ok(`node ${process.version}`);
ok(`cwd ${process.cwd()}`);
ok(`mem ${freeMb}MB free / ${totalMb}MB total`);
if (totalMb < 1024) {
  console.warn(`WARN: low RAM (${totalMb}MB) — Vite needs ~768MB heap; may OOM on shared hosting`);
}

for (const rel of [
  "package.json",
  "server.cjs",
  "public/destination-marketing-agency/css/melange.css",
  "public/destination-marketing-agency/js/site-home.js",
]) {
  if (fs.existsSync(path.join(root, rel))) ok(rel);
  else bad(`missing ${rel}`);
}

const hero = path.join(root, "public/destination-marketing-agency/images/figma/hero_banner.jpg");
if (fs.existsSync(hero)) {
  const mb = fs.statSync(hero).size / (1024 * 1024);
  ok(`hero_banner.jpg ${mb.toFixed(2)} MB`);
  if (mb > 5) bad(`hero_banner.jpg too large for deploy (${mb.toFixed(1)} MB)`);
} else {
  bad("missing public/destination-marketing-agency/images/figma/hero_banner.jpg");
}

for (const rel of [
  "public/destination-marketing-agency/images/site/logo-footer.png",
  "public/destination-marketing-agency/images/site/si-linkedin.svg",
  "public/destination-marketing-agency/images/site/si-insta.svg",
  "public/destination-marketing-agency/images/figma/pooja.jpeg",
  "public/destination-marketing-agency/images/creators/hk-1.png",
  "public/careers/721bcf8d9032.avif",
]) {
  if (fs.existsSync(path.join(root, rel))) ok(rel);
  else bad(`missing ${rel}`);
}

try {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  const override = pkg.overrides?.["react-router"];
  if (override === "8.3.0") {
    bad("react-router override 8.3.0 needs Node 22 + React 19 — pin to 7.18.2 for this app");
  } else {
    ok(`react-router override ${override || "(none)"}`);
  }
} catch (err) {
  bad(`package.json read failed: ${err.message}`);
}

if (fail) {
  console.error(`\nhostinger-preflight: ${fail} check(s) failed`);
  process.exit(1);
}
console.log("hostinger-preflight: ok");
