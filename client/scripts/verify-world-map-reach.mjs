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
const ASSET = path.join(__dirname, "../tourism-landing-staging/images/global/world-map-reach.png");
const CACHE = "20260826i";
const EXPECT_W = 2800;
const EXPECT_H = 958;
const MAX_RENDER_W = 1400;

if (!existsSync(ASSET)) {
  console.error(`map asset missing: ${ASSET}`);
  process.exit(1);
}

const png = readFileSync(ASSET);
const sig = png.subarray(0, 8).toString("hex");
if (sig !== "89504e470d0a1a0a") {
  console.error("world-map-reach.png is not a valid PNG");
  process.exit(1);
}
const actualW = png.readUInt32BE(16);
const actualH = png.readUInt32BE(20);
if (actualW !== EXPECT_W || actualH !== EXPECT_H) {
  console.error(`map PNG is ${actualW}x${actualH}, expected ${EXPECT_W}x${EXPECT_H}`);
  process.exit(1);
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
  if (!/world-map-reach\.png/.test(r.src)) fail = true;
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
