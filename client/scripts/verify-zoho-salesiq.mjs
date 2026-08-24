/** Smoke-check: Zoho SalesIQ script loads on `/` and injects the chat widget. */
import { createRequire } from "module";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ORIGIN = process.env.VERIFY_ORIGIN || "http://127.0.0.1:3000";
const WIDGET =
  "https://salesiq.zohopublic.in/widget?wc=siqc7d0ce652d28d2f589045cdec7219da7147e109a95c024619d5d0af39690f3dd";
const WIDGET_CODE = "siqc7d0ce652d28d2f589045cdec7219da7147e109a95c024619d5d0af39690f3dd";

const html = readFileSync(path.join(__dirname, "../index.html"), "utf8");
if (!html.includes("zsiqscript") || !html.includes(WIDGET_CODE)) {
  console.error("index.html is missing the Zoho SalesIQ embed");
  process.exit(1);
}

const widgetRes = await fetch(WIDGET, { redirect: "follow" });
if (!widgetRes.ok) {
  console.error(`Zoho widget script returned HTTP ${widgetRes.status}`);
  process.exit(1);
}
const widgetBody = await widgetRes.text();
const widgetType = widgetRes.headers.get("content-type") ?? "";
if (!/javascript/i.test(widgetType)) {
  console.error(`Zoho widget URL must return JavaScript, got ${widgetType}`);
  process.exit(1);
}
if (widgetBody.length < 200 || widgetBody.trimStart().startsWith("{")) {
  console.error("Zoho widget URL looks like JSON/config, not the JS loader");
  process.exit(1);
}
if (html.includes("visitor/v2/channels/website")) {
  console.error("index.html still uses the JSON API URL for SalesIQ — use /widget?wc=");
  process.exit(1);
}

if (process.env.VERIFY_LIVE === "1") {
  const live = await fetch("https://melangedigital.co/").then((r) => r.text());
  if (live.includes("visitor/v2/channels/website")) {
    console.error("live melangedigital.co still serves the broken SalesIQ embed — deploy dist/");
    process.exit(1);
  }
  if (!live.includes("widget?wc=") || !live.includes(WIDGET_CODE)) {
    console.error("live melangedigital.co is missing the SalesIQ widget loader");
    process.exit(1);
  }
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`${ORIGIN}/`, { waitUntil: "networkidle0", timeout: 60000 });

await page.waitForFunction(
  () => {
    const nodes = document.querySelectorAll('[id*="zsiq"], [class*="zsiq"], iframe[src*="salesiq"], iframe[src*="zoho"]');
    return nodes.length > 1 || [...nodes].some((el) => el.tagName !== "SCRIPT");
  },
  { timeout: 20000 },
).catch(() => null);

await new Promise((r) => setTimeout(r, 3000));

const info = await page.evaluate(() => ({
  hasScript: !!document.getElementById("zsiqscript"),
  hasFloat: !!document.getElementById("zsiq_float"),
  zohoReady: typeof window.$zoho?.salesiq === "object",
  zsiqNodes: [...document.querySelectorAll('[id*="zsiq"], [class*="zsiq"], iframe[src*="salesiq"], iframe[src*="zoho"]')].map(
    (el) => ({ tag: el.tagName, id: el.id, className: el.className, src: el.src || null }),
  ),
}));
await browser.close();

console.log(JSON.stringify({ origin: ORIGIN, widgetScriptOk: true, ...info }, null, 2));

const widgetVisible =
  info.hasFloat || info.zsiqNodes.some((n) => n.tag !== "SCRIPT");
if (!widgetVisible) {
  console.error("Zoho SalesIQ script loaded but no widget DOM detected");
  process.exit(1);
}
console.log("verify-zoho-salesiq: ok");
