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
  "tourism-landing-staging/index.html",
  "scripts/sync-tourism.mjs",
]) {
  if (fs.existsSync(path.join(root, rel))) ok(rel);
  else bad(`missing ${rel}`);
}

const tourismHero = path.join(root, "tourism-landing-staging/images/figma/hero_banner.jpg");
if (fs.existsSync(tourismHero)) {
  const mb = fs.statSync(tourismHero).size / (1024 * 1024);
  ok(`hero_banner.jpg ${mb.toFixed(2)} MB`);
  if (mb > 5) bad(`hero_banner.jpg too large for deploy (${mb.toFixed(1)} MB)`);
} else {
  bad("missing tourism hero_banner.jpg");
}

const master = path.join(root, "tourism-landing-staging/images/figma/IMG_4294_upscaled_4x.png");
if (fs.existsSync(master)) {
  bad("18MB source PNG must not live under tourism-landing-staging/images (sync copies all of images/)");
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
