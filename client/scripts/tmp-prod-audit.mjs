import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer-core");

const cfg = await fetch(
  "https://salesiq.zohopublic.in/visitor/v2/channels/website?widgetcode=siqc7d0ce652d28d2f589045cdec7219da7147e109a95c024619d5d0af39690f3dd",
).then((r) => r.json());
console.log(
  "Zoho allowed sites:",
  cfg.data?.access_multiple_websites?.map((s) => s.url),
);

async function audit(origin) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();
  const fails = [];
  page.on("requestfailed", (r) => {
    if (/zoho|salesiq|zsiq/i.test(r.url())) fails.push(`${r.url()} :: ${r.failure()?.errorText}`);
  });
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${origin}/`, { waitUntil: "networkidle0", timeout: 90000 });
  await new Promise((r) => setTimeout(r, 15000));
  const info = await page.evaluate(() => ({
    embedSrc: document.getElementById("zsiqscript")?.getAttribute("src") ?? "",
    hasFloat: !!document.getElementById("zsiq_float"),
    href: location.href,
  }));
  await browser.close();
  return { origin, ...info, fails };
}

for (const origin of [
  "https://melangedigital.co",
  "https://www.melangedigital.co",
  "http://www.melangedigital.co",
]) {
  console.log(JSON.stringify(await audit(origin), null, 2));
}
