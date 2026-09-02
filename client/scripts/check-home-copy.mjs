import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const m = fs.readFileSync(
  path.join(root, "src/components/pages/Home/markup.html"),
  "utf8",
);

const allCards = [...m.matchAll(/work-card-link card-1 work-card--stats/g)].length;
const hidden = [...m.matchAll(/data-work-hidden="1"/g)].length;
const visibleCount = allCards - hidden;

const sectionOrder = [
  "home-video-section",
  "home-shift-section",
  "home-caas-section",
  "home-our-work-section",
  "home-awards-section",
  "home-network-section",
  "home-innovation-section",
  "home-global-section",
  "home-report-promo-section",
  "home-testimonial-stagger-section",
];
let orderOk = true;
let pos = 0;
for (const cls of sectionOrder) {
  const i = m.indexOf(cls, pos);
  if (i === -1 || i < pos) {
    orderOk = false;
    break;
  }
  pos = i;
}

const asserts = [
  [m.includes('class="sr-only">Travel'), "sr-only H1"],
  [m.includes("India's Leading Travel and Tourism Marketing Agency"), "hero eyebrow"],
  [m.includes("Book a Strategy Call"), "strategy CTA"],
  [m.includes('id="opportunity"'), "shift section id"],
  [m.includes("We Bring <span") || m.includes("We Bring <span class"), "shift one-line heading"],
  [m.includes('data-count="61.7"') && m.includes("data-melange-count"), "shift countup $61.7B"],
  [m.includes("Work That Put"), "work headline"],
  [visibleCount === 5, `five visible work cards (got ${visibleCount})`],
  [m.includes("Intelligence-Led"), "governments cards"],
  [m.includes('id="governments"'), "governments section"],
  [m.includes("Local Agency"), "global reach heading"],
  [m.includes("India outbound travel marketing"), "global reach subcopy"],
  [m.includes("across five markets"), "global reach markets line"],
  [m.includes("world-map-reach.png"), "global reach map asset"],
  [m.includes("global-reach-stack"), "global reach stacked layout"],
  [m.includes("More About Us"), "global reach cta"],
  [m.includes("home-report-promo-section"), "report promo section"],
  [m.includes("Travel Marketing"), "report wireframe heading"],
  [m.includes("report-promo-header"), "report centered header"],
  [m.includes("report-promo-card"), "report lavender card"],
  [m.includes("report-promo-grid"), "report card two-column layout"],
  [!m.includes("report-promo-benefits__title"), "report promo what-you-get removed"],
  [m.includes("report-promo-card__title"), "report card title"],
  [m.includes("The Indian Outbound Inspiration Report 2026"), "report card name"],
  [m.includes("report-desk-cover.png"), "report desk cover image"],
  [m.includes("Cultural Voices"), "network heading"],
  [m.includes("home-testimonial"), "testimonials kept"],
  [m.includes("home-video-section"), "showreel kept"],
  [m.includes(">FAQ<"), "faq wireframe heading"],
  [m.includes("home-prefooter-cta"), "pre-footer cta"],
  [m.includes('id="report-access"'), "report access form kept"],
  [!m.includes("home-infra-section"), "infra removed"],
  [!m.includes('id="team"'), "team section removed"],
  [!m.includes('id="pricing"'), "detailed report grid removed"],
  [!m.includes('class="footer"'), "html footer removed (react Footer)"],
  [orderOk, "wireframe section order"],
];

let fail = 0;
for (const [ok, name] of asserts) {
  console.log(`${ok ? "PASS" : "FAIL"}: ${name}`);
  if (!ok) fail++;
}
process.exit(fail ? 1 : 0);
