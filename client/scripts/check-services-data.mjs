/**
 * Fails if any entry in SERVICES_DATA is missing a field that
 * components/pages/Services/ServiceDetail.jsx renders, or points at a local
 * image that isn't on disk.
 *
 * Those are the two ways a service page silently loses a section when new copy
 * lands: a renamed/omitted key renders as blank, and a bad image path renders
 * as an empty box. Neither throws, so nothing else catches them.
 *
 * Run: npm run check:services
 */
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(here, "..", "public");

const { SERVICES_DATA } = await import("../src/constants/servicesData.js");

const errors = [];

/** Dotted-path lookup, so the failure message names the exact missing key. */
const get = (obj, path) =>
  path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

const nonEmpty = (v) => typeof v === "string" && v.trim() !== "";

// Scalars the JSX prints directly. Anything missing renders as a blank.
const REQUIRED_STRINGS = [
  "slug",
  "name",
  "seo.title",
  "seo.description",
  "seo.h1",
  "hero.badge",
  "hero.titlePart1",
  "hero.titleAccent",
  "hero.ctaText",
  "manifesto.eyebrow",
  "manifesto.titlePart1",
  "manifesto.titleAccent",
  "philosophy.eyebrow",
  "approach.titlePart1",
  "approach.titleAccent",
  "process.titlePart1",
  "process.titleAccent",
  "process.description",
  "caseStudies.titlePart1",
  "caseStudies.titleAccent",
  "faqs.titleAccent",
  "bottomCta.titlePart1",
  "bottomCta.titleAccent",
  "bottomCta.buttonText",
];

// Arrays the JSX maps over, with the keys each item must carry.
const REQUIRED_LISTS = [
  ["philosophy.pillars", ["title", "description"], 4],
  ["approach.cards", ["title", "description", "image"], 1],
  ["process.steps", ["number", "title"], 6],
  ["faqs.items", ["question", "answer"], 1],
];

// Local asset references, checked against client/public.
const IMAGE_PATHS = [
  "bottomCta.bgImage",
  "philosophy.bgImage",
];

const checkAsset = (slug, label, src) => {
  if (!nonEmpty(src) || !src.startsWith("/")) return; // remote or absent
  if (!existsSync(join(PUBLIC_DIR, src.replace(/^\//, "")))) {
    errors.push(`${slug}: ${label} -> missing file "${src}"`);
  }
};

const words = (s) =>
  String(s)
    .replace(/<[^>]+>/g, " ")
    .replace(/[.,!?;:]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

const inRange = (n, min, max) => n >= min && n <= max;

for (const [slug, service] of Object.entries(SERVICES_DATA)) {
  for (const path of REQUIRED_STRINGS) {
    if (!nonEmpty(get(service, path))) {
      errors.push(`${slug}: missing or empty "${path}"`);
    }
  }

  // Manifesto right column is a single paragraph on every service page.
  const hasParagraph = nonEmpty(get(service, "manifesto.paragraph"));
  if (!hasParagraph) {
    errors.push(`${slug}: manifesto.paragraph is missing or empty`);
  }
  const counts = {
    "manifesto.eyebrow": [words(get(service, "manifesto.eyebrow")), 4, 4],
    "manifesto.titlePart1": [words(get(service, "manifesto.titlePart1")), 4, 5],
    "manifesto.titleAccent": [words(get(service, "manifesto.titleAccent")), 2, 3],
    "manifesto.paragraph": [words(get(service, "manifesto.paragraph")), 22, 24],
  };
  for (const [path, [n, min, max]] of Object.entries(counts)) {
    if (!inRange(n, min, max)) {
      errors.push(`${slug}: ${path} is ${n} words, expected ${min === max ? min : `${min}–${max}`}`);
    }
  }

  for (const [path, keys, minLength] of REQUIRED_LISTS) {
    const list = get(service, path);
    if (!Array.isArray(list) || list.length < minLength) {
      errors.push(`${slug}: "${path}" must be an array of at least ${minLength}`);
      continue;
    }
    list.forEach((item, i) => {
      for (const key of keys) {
        if (!nonEmpty(item?.[key])) {
          errors.push(`${slug}: "${path}[${i}].${key}" is missing or empty`);
        }
      }
    });
  }

    if (get(service, "process.steps")?.length !== 6) {
      errors.push(`${slug}: process.steps must be exactly 6`);
    }

    for (const path of IMAGE_PATHS) checkAsset(slug, path, get(service, path));
  (get(service, "approach.cards") || []).forEach((c, i) =>
    checkAsset(slug, `approach.cards[${i}].image`, c?.image)
  );
}

const { DEFAULT_SERVICE_CARDS } = await import("../src/constants/serviceCards.js");
for (const [id, svc] of Object.entries(DEFAULT_SERVICE_CARDS)) {
  for (const slot of ["slot1", "slot2"]) {
    const card = svc[slot];
    for (const key of ["title", "caption", "bannerImage", "slug"]) {
      if (!nonEmpty(card?.[key])) {
        errors.push(`serviceCards.${id}.${slot}.${key} is missing or empty`);
      }
    }
    checkAsset(id, `${slot}.bannerImage`, card?.bannerImage);
  }
}

// The hero collage shared art fallback
for (let n = 1; n <= 8; n += 1) {
  checkAsset("shared", `hero collage tile ${n}`,
    `/destination-marketing-agency/images/services/collage/tile-${n}.jpg`);
}

// Per-service hero collage tiles
const serviceHeroFolders = [
  "influencer-marketing",
  "branded-content-ips",
  "experiential-marketing",
  "fam-trips-pr",
];
for (const folder of serviceHeroFolders) {
  for (let n = 1; n <= 8; n += 1) {
    checkAsset(folder, `hero collage tile ${n}`, `/assets/services/${folder}/tile-${n}.jpg`);
  }
}

const count = Object.keys(SERVICES_DATA).length;

if (errors.length > 0) {
  console.error(`check-services-data: ${errors.length} problem(s) across ${count} services\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`check-services-data: OK — ${count} services, all rendered fields present.`);
