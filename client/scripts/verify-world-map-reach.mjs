import { createRequire } from "module";
import { createReadStream, existsSync, readFileSync, statSync } from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// The page sets <base href="/destination-marketing-agency/">, so assets only resolve over HTTP.
const WEB_ROOT = path.join(__dirname, "../public");
const PAGE = "/destination-marketing-agency/index.html";
const ASSET = path.join(__dirname, "../tourism-landing-staging/images/global/world-map-reach.svg");
const CACHE = "20260821c";
const EXPECT_W = 1002;
const EXPECT_H = 392;
const MAX_RENDER_W = 1130;

// The map is vector so it stays sharp however large it renders. Guard the pieces the build script
// reconstructs: lose one and the section silently drops a market.
const svg = readFileSync(ASSET, "utf8");
const expected = [
  [svg.includes(`viewBox="0 0 ${EXPECT_W} ${EXPECT_H}"`), "viewBox"],
  [(svg.match(/<path d="M/g) ?? []).length === 5, "5 route paths"],
  [(svg.match(/<use href="#pin"/g) ?? []).length === 5, "5 pins"],
  [(svg.match(/<text /g) ?? []).length === 6, "6 label lines"],
  [svg.includes('id="land"'), "land layer"],
  [svg.includes('id="india"'), "india layer"],
];
for (const [ok, what] of expected) {
  if (!ok) {
    console.error(`map asset is missing ${what}; rebuild with scripts/prepare-world-map.py`);
    process.exit(1);
  }
}

// India came off the original trace as one blob fused to a piece of south-east Asia and ringed by
// 26 single-pixel specks, which read as stray dabs of purple in the sea around it.
const specks = (svg.match(/id="india"[^>]*\sd="([^"]+)"/)?.[1] ?? "")
  .split("M")
  .filter((sub) => sub.trim())
  .filter((sub) => {
    const n = sub.match(/-?\d+\.?\d*/g).map(Number);
    const xs = n.filter((_, i) => i % 2 === 0);
    const ys = n.filter((_, i) => i % 2);
    return Math.max(...xs) - Math.min(...xs) < 4 && Math.max(...ys) - Math.min(...ys) < 4;
  });
if (specks.length) {
  console.error(`india outline has ${specks.length} stray specks; rebuild with scripts/restyle-world-map.py`);
  process.exit(1);
}

// The arcs fitted from the original export bowed so high that two of them ran off the top of the
// canvas. A cubic stays inside its control polygon, so checking the control points is enough.
for (const [, d] of svg.matchAll(/<path d="(M[-\d.]+ [-\d.]+ C[^"]+)"/g)) {
  const n = d.match(/-?\d+\.?\d*/g).map(Number);
  const outside = n.some((v, i) => (i % 2 ? v < 0 || v > EXPECT_H : v < 0 || v > EXPECT_W));
  if (outside) {
    console.error(`route path leaves the canvas, so it will be clipped: ${d}`);
    process.exit(1);
  }
}

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
};

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = path.join(WEB_ROOT, rel);
  if (!file.startsWith(WEB_ROOT) || !existsSync(file) || !statSync(file).isFile()) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});

async function check(viewportWidth, dpr) {
  const page = await browser.newPage();
  await page.setViewport({ width: viewportWidth, height: 900, deviceScaleFactor: dpr });
  await page.goto(`${origin}${PAGE}`, { waitUntil: "networkidle0" });
  await page.evaluate(async () => {
    document.querySelector(".global-reach-map")?.scrollIntoView();
    const img = document.querySelector(".global-reach-map");
    if (img && !img.complete) await new Promise((r) => img.addEventListener("load", r, { once: true }));
  });
  const info = await page.evaluate((cache) => {
    const map = document.querySelector(".global-reach-map");
    const rect = map?.getBoundingClientRect();
    return {
      src: map?.currentSrc || map?.src || "",
      natural: map ? { w: map.naturalWidth, h: map.naturalHeight } : null,
      rendered: rect ? { w: rect.width, h: rect.height } : null,
      cacheOk: (map?.currentSrc || map?.src || "").includes(cache),
    };
  }, CACHE);
  await page.close();
  return { viewportWidth, dpr, ...info };
}

const desktop = await check(1440, 1);
const wide = await check(2560, 2);
await browser.close();
server.close();

console.log(JSON.stringify({ desktop, wide }, null, 2));

let fail = false;
for (const r of [desktop, wide]) {
  if (!r.cacheOk) fail = true;
  if (!/world-map-reach\.svg/.test(r.src)) fail = true;
  if (r.natural?.w !== EXPECT_W || r.natural?.h !== EXPECT_H) {
    console.error("map image did not load at viewport", r.viewportWidth, r.natural);
    fail = true;
  }
  if (r.rendered && r.rendered.w > MAX_RENDER_W + 1) {
    console.error("map renders wider than the cap at viewport", r.viewportWidth, r.rendered);
    fail = true;
  }
}
if (fail) process.exit(1);
console.log("verify-world-map-reach: ok");
