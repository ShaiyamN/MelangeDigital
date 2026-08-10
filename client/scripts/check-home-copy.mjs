import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const m = fs.readFileSync(
  path.join(root, "src/components/pages/DestinationMarketingAgency/markup.html"),
  "utf8",
);

const allCards = [...m.matchAll(/work-card-link card-1 work-card--stats/g)].length;
const hidden = [...m.matchAll(/data-work-hidden="1"/g)].length;
const visibleCount = allCards - hidden;

const asserts = [
  [m.includes('class="sr-only">Travel'), "sr-only H1"],
  [m.includes("India's Leading Travel and Tourism Marketing Agency"), "hero eyebrow"],
  [m.includes("Book a Strategy Call"), "strategy CTA"],
  [!m.includes("hero-report-prompt"), "no hero report prompt"],
  [!m.includes("div-block-47"), "webflow nav stripped"],
  [!m.includes("mobileNavDrawer"), "mobile drawer stripped"],
  [m.includes("We Bring <span") || m.includes("We Bring <span class"), "shift one-line heading"],
  [!m.includes("We Bring<br"), "no shift br"],
  [m.includes('data-count="61.7"'), "shift countup $61.7B"],
  [m.includes('data-count="50"') && m.includes('data-suffix="M+"'), "shift countup 50M+"],
  [m.includes("Work That Put"), "work headline"],
  [visibleCount === 5, `five visible work cards (got ${visibleCount})`],
  [hidden === 5, `five hidden work cards (got ${hidden})`],
  [m.includes("View All Case Studies"), "view all link"],
  [m.includes("Cultural Voices"), "network heading restored"],
  [m.includes('data-count="5000"'), "network 5000 countup"],
  [m.includes('data-count="62.3"'), "network 62.3 countup"],
  [!m.includes("home-audiences-section"), "audiences section removed"],
  [!m.includes('id="services"'), "no #services section"],
  [m.includes("Influencer &amp; Celebrity Marketing"), "footer 4 services"],
  [!m.includes("Brand Strategy and Planning"), "pdf 7-item list gone"],
  [m.includes("What does a travel marketing agency do?"), "faq rewrite"],
  [m.includes('id="lead-form"'), "lead form kept"],
  [m.includes('id="team"'), "leadership kept"],
  [m.includes("home-testimonial"), "testimonials kept"],
  [m.includes("+91 93725 67722"), "phone unchanged"],
  [m.includes("10+ national boards"), "hero stats unchanged"],
];

let fail = 0;
for (const [ok, name] of asserts) {
  console.log(`${ok ? "PASS" : "FAIL"}: ${name}`);
  if (!ok) fail++;
}
process.exit(fail ? 1 : 0);
