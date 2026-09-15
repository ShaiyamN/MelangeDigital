// Throwaway visual-verification harness. Deleted once the pass is signed off.
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE = "http://localhost:5199";
const OUT = "C:\\Users\\Shaiyam\\AppData\\Local\\Temp\\svc-shots";

const ROUTES = {
  home: "/",
  svcindex: "/services",
  inf: "/services/influencer-marketing",
  brand: "/services/branded-content-ips",
  exp: "/services/experiential-marketing",
  fam: "/services/fam-trips-pr",
};

const SECTIONS = {
  hero: ".svc-hero-section",
  manifesto: ".svc-philosophy-top",
  band: ".svc-philosophy-banner",
  approach: ".svc-approach-section",
  process: ".svc-process-section",
  work: ".svc-work-section",
  faq: ".svc-faq-section",
  cta: ".svc-bottom-cta-section",
};

const args = process.argv.slice(2);
const routeKeys = (args[0] || "inf").split(",");
const width = Number(args[1] || 1440);
const only = args[2]; // optional single selector override

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: EDGE });

for (const key of routeKeys) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const problems = [];
  page.on("console", (m) => {
    if (m.type() === "error") problems.push(`console: ${m.text().slice(0, 160)}`);
  });

  await page.goto(BASE + ROUTES[key], { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(3000);

  const targets = only ? { shot: only } : SECTIONS;
  for (const [name, sel] of Object.entries(targets)) {
    const el = page.locator(sel).first();
    if ((await el.count()) === 0) continue;
    await el.scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(400);
    await el.screenshot({ path: join(OUT, `${key}-${width}-${name}.png`) }).catch((e) =>
      problems.push(`shot ${name}: ${e.message.slice(0, 80)}`)
    );
  }

  const probe = await page.evaluate(() => {
    const de = document.documentElement;
    const out = [];
    document.querySelectorAll(".svc-detail-page *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.right > de.clientWidth + 2) {
        out.push(`${String(el.className).slice(0, 60)} +${Math.round(r.right - de.clientWidth)}px`);
      }
    });
    return { overflow: de.scrollWidth - de.clientWidth, offenders: [...new Set(out)].slice(0, 6) };
  });

  console.log(`\n=== ${key} @ ${width} === overflow ${probe.overflow}px`);
  if (probe.offenders.length) console.log("  offenders: " + probe.offenders.join(" | "));
  if (problems.length) console.log("  " + [...new Set(problems)].join("\n  "));
  await page.close();
}

await browser.close();
console.log(`\nwrote to ${OUT}`);
