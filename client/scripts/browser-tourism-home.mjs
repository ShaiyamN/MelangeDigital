import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 3500));

const info = await page.evaluate(async () => {
  const base = document.querySelector("base");
  const hero = document.querySelector(".hero-figma img, #home img");
  const sampleSrcs = [
    ...new Set(
      [
        ...[...document.querySelectorAll(".stagger-card-img")].map((i) => i.currentSrc || i.src),
        ...[...document.querySelectorAll("#team img, .home-our-team-sec img")]
          .filter((i) => /\/images\/team\//.test(i.src))
          .map((i) => i.currentSrc || i.src),
      ].filter(Boolean),
    ),
  ].slice(0, 6);

  const fetches = [];
  for (const src of sampleSrcs) {
    try {
      const r = await fetch(src, { method: "HEAD" });
      fetches.push({ src: src.replace(/^https?:\/\/[^/]+/, ""), status: r.status });
    } catch (e) {
      fetches.push({ src, status: 0, err: String(e) });
    }
  }

  return {
    hasMain: !!document.querySelector(".main"),
    hasNav: !!document.querySelector(".div-block-47"),
    base: base && base.getAttribute("href"),
    heroOk: hero ? hero.naturalWidth > 0 : null,
    canonical: document.querySelector("link[rel=canonical]")?.href,
    fetches,
  };
});
console.log(JSON.stringify(info, null, 2));

await page.click('a.nav-link-4[href="#pricing"]');
await new Promise((r) => setTimeout(r, 2800));
const spy = await page.evaluate(() => {
  const a = document.querySelector(".nav-link-4.is-active");
  return { active: a ? a.textContent.trim() : null, href: a ? a.getAttribute("href") : null };
});
console.log("spy", spy);

await page.goto("http://localhost:5173/about", { waitUntil: "domcontentloaded", timeout: 60000 });
await new Promise((r) => setTimeout(r, 800));
await page.click('a[href="/"]');
await page.waitForFunction(() => !!document.querySelector(".div-block-47"), { timeout: 30000 });
const back = await page.evaluate(() => ({
  path: location.pathname,
  hasNav: !!document.querySelector(".div-block-47"),
}));
console.log("about→home", back);

await browser.close();

let fail = false;
if (!info.hasMain || !info.hasNav) fail = true;
if (info.base !== "/destination-marketing-agency/") fail = true;
if (info.heroOk === false) fail = true;
if (spy.href !== "#pricing") fail = true;
if (info.fetches.some((f) => f.status !== 200)) {
  console.error("image fetch fail", info.fetches);
  fail = true;
}
if (back.path !== "/" || !back.hasNav) fail = true;
if (fail) process.exit(1);
console.log("browser-tourism-home: ok");
