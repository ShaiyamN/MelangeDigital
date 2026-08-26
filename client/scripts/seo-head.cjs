const assert = require("assert");

const ORIGIN = process.env.SITE_ORIGIN || "https://melangedigital.co";

/** Titles/descriptions must match Helmet on these pages. */
const PAGE_META = {
  "/": {
    title:
      "Global Digital Marketing Agency for Travel and Tourism | Melange",
    description:
      "Melange is a global digital marketing agency for travel and tourism, specialising in paid ads, influencer marketing, social media, and growth campaigns.",
  },
  "/work": {
    title: "Our Work & Case Study Portfolio | Mélange Digital",
    description:
      "Explore Mélange Digital's portfolio of award-winning campaigns, brand transformations & digital marketing success stories from clients around the globe.",
  },
  "/contact": {
    title: "Contact Us & Let's Work Together | Mélange Digital",
    description:
      "Get in touch with Mélange Digital today. Our team is ready to craft the perfect digital marketing strategy to grow your brand globally",
  },
  "/about": {
    title: "About Mélange Digital: Our Story, Mission & Vision",
    description:
      "Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story",
  },
  "/services": {
    title: "Travel & Tourism Marketing Services | Melange Digital",
    description:
      "Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards. How Melange engineers desire to arrivals.",
  },
  "/blogs": {
    title: "Blog & Insights | Mélange Digital",
    description: "Insights, ideas, and stories from the Mélange Digital team.",
  },
  "/careers": {
    title: "Careers: Join Our Global Team | Mélange Digital",
    description:
      "Join Mélange Digital's global team. Careers in strategy, creative, and growth for travel and tourism brands.",
  },
  "/services/aeo-seo": {
    title: "AEO & SEO Services | Mélange Digital",
    description:
      "Amplify your brand with Mélange Digital's AEO and SEO services. Be cited by AI assistants, rank in search, and build authority across modern answer engines.",
  },
  "/services/design-and-development": {
    title: "Design & Development Services | Mélange Digital",
    description:
      "Website, UI/UX, and brand design for travel and tourism. Mélange Digital builds high-performing digital experiences for tourism boards and travel brands.",
  },
  "/services/content-strategy-and-production": {
    title: "Content Strategy & Production Services | Mélange Digital",
    description:
      "Content strategy and production for travel and tourism brands. From destination stories to campaign assets, Mélange Digital plans and produces work that converts.",
  },
  "/services/pr-and-outreach": {
    title: "PR & Outreach Services | Mélange Digital",
    description:
      "Travel PR and outreach for tourism boards and travel brands. Media, FAM trips, and industry visibility from Mélange Digital.",
  },
  "/services/immersive-brand-storytelling": {
    title: "Immersive Brand Storytelling Services | Mélange Digital",
    description:
      "Immersive brand storytelling for travel and tourism. Experiential narratives and branded content from Mélange Digital.",
  },
  "/services/brand-strategy": {
    title: "Brand Strategy Services | Mélange Digital",
    description:
      "Brand strategy for travel and tourism. Positioning, messaging, and go-to-market planning for tourism boards, hospitality, and travel brands.",
  },
  "/services/influencer-marketing": {
    title: "Influencer Marketing Services | Mélange Digital",
    description:
      "Amplify your brand with Mélange Digital's influencer marketing services. Connect with right influencers to drive authentic engagement & real results",
  },
};

const CANONICAL_SLUG = {
  "singapore-tourism-board-stb": "singapore-tourism-board",
  genvr: "genvr",
  neotraders: "neotraders",
  devboost: "devboost",
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function normalizePath(p) {
  if (!p) return "/";
  const path = p.split("?")[0].split("#")[0];
  if (path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

function titleFromPath(p) {
  const last = p.split("/").filter(Boolean).pop() || "Melange Digital";
  const name = last
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return `${name} | Mélange Digital`;
}

function canonicalFor(path, origin = ORIGIN) {
  if (path === "/") return `${origin}/`;
  const m = path.match(/^\/work\/(.+)$/);
  if (m) {
    const slug = CANONICAL_SLUG[m[1].toLowerCase()] || m[1];
    return `${origin}/work/${slug}`;
  }
  return `${origin}${path}`;
}

function pathKey(index, path) {
  if (index.routes.has(path)) return path;
  const lower = path.toLowerCase();
  for (const r of index.routes) {
    if (r.toLowerCase() === lower) return r;
  }
  if (index.byPath[path]) return path;
  for (const k of Object.keys(index.byPath)) {
    if (k.toLowerCase() === lower) return k;
  }
  return null;
}

/**
 * @param {string} reqPath
 * @param {{ origin?: string, routes?: Set<string>, byPath?: Record<string, {title?: string, description?: string}> }} index
 */
function resolveMeta(reqPath, index = {}) {
  const path = normalizePath(reqPath);
  const origin = index.origin || ORIGIN;
  const routes = index.routes || new Set(Object.keys(PAGE_META));
  const byPath = index.byPath || {};

  if (path.startsWith("/admin") || path.startsWith("/location/")) {
    return { path, noindex: true, stripFaq: true };
  }

  const known = pathKey({ routes, byPath }, path);
  const cms = known ? byPath[known] || byPath[path] : byPath[path];
  const listed = Boolean(known) || path in PAGE_META;

  if (!listed && !cms) {
    return { path, noindex: true, stripFaq: true };
  }

  const preset = PAGE_META[path] || PAGE_META[known] || {};
  const title =
    preset.title ||
    (cms && (cms.seoTitle || cms.title)) ||
    titleFromPath(path);
  const description =
    preset.description ||
    (cms && (cms.metaDescription || cms.description || cms.intro)) ||
    `${title}. Digital marketing for travel and tourism.`;

  return {
    path,
    title: String(title),
    description: String(description).replace(/\s+/g, " ").trim().slice(0, 160),
    canonical: canonicalFor(known || path, origin),
    stripFaq: path !== "/",
    noindex: false,
  };
}

function applyHead(html, meta) {
  let out = html;
  if (meta.title) {
    out = out.replace(
      /<title[^>]*>[\s\S]*?<\/title>/,
      `<title data-rh="true">${esc(meta.title)}</title>`,
    );
  }
  if (meta.description) {
    out = out.replace(
      /<meta data-rh="true" name="description" content="[^"]*">/,
      `<meta data-rh="true" name="description" content="${esc(meta.description)}">`,
    );
  }
  if (meta.noindex) {
    out = out.replace(
      /<link data-rh="true" rel="canonical"[^>]*>/,
      "",
    );
    if (!/name="robots"/.test(out)) {
      out = out.replace(
        /<meta name="viewport"[^>]*>/,
        (m) =>
          `${m}\n  <meta name="robots" content="noindex, follow">`,
      );
    }
  } else if (meta.canonical) {
    out = out.replace(
      /<link data-rh="true" rel="canonical" href="[^"]*">/,
      `<link data-rh="true" rel="canonical" href="${esc(meta.canonical)}">`,
    );
  }
  if (meta.stripFaq) {
    out = out.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
      (block) =>
        /"@type"\s*:\s*"FAQPage"/.test(block) ? "" : block,
    );
  }
  return out;
}

if (require.main === module) {
  const shell = `<!DOCTYPE html><html><head>
  <meta name="viewport" content="width=device-width">
  <link data-rh="true" rel="canonical" href="https://melangedigital.co">
  <title data-rh="true">Home Title</title>
  <meta data-rh="true" name="description" content="Home desc">
  <script type="application/ld+json">{"@type": "FAQPage"}</script>
  <script type="application/ld+json">{"@type": "Organization"}</script>
</head></html>`;

  const work = applyHead(
    shell,
    resolveMeta("/work", { routes: new Set(["/work"]), byPath: {}, origin: ORIGIN }),
  );
  assert(work.includes('rel="canonical" href="https://melangedigital.co/work"'));
  assert(work.includes("Our Work &amp; Case Study Portfolio"));
  assert(!work.includes("FAQPage"));
  assert(work.includes("Organization"));

  const design = applyHead(
    shell,
    resolveMeta("/services/design-and-development", {
      routes: new Set(["/services/design-and-development"]),
      byPath: {},
      origin: ORIGIN,
    }),
  );
  assert(design.includes("/services/design-and-development"));
  assert(design.includes("Design &amp; Development"));
  assert(!design.includes("AEO and SEO"));

  const ghost = applyHead(shell, resolveMeta("/not-a-real-page", { routes: new Set(["/"]), byPath: {} }));
  assert(ghost.includes('name="robots" content="noindex, follow"'));
  assert(!ghost.includes('rel="canonical"'));

  const slug = applyHead(
    shell,
    resolveMeta("/work/acme", {
      routes: new Set(),
      byPath: { "/work/acme": { title: "Acme Case", intro: "A campaign about travel." } },
      origin: ORIGIN,
    }),
  );
  assert(slug.includes("https://melangedigital.co/work/acme"));
  assert(slug.includes("Acme Case"));

  assert(
    canonicalFor("/work/singapore-tourism-board-stb") ===
      "https://melangedigital.co/work/singapore-tourism-board",
  );
  const stbKeep = resolveMeta("/work/singapore-tourism-board", {
    routes: new Set(["/work/singapore-tourism-board"]),
    byPath: {},
  });
  assert(
    stbKeep.canonical ===
      "https://melangedigital.co/work/singapore-tourism-board",
  );

  console.log("seo-head self-check ok");
}

module.exports = {
  PAGE_META,
  applyHead,
  resolveMeta,
  normalizePath,
  canonicalFor,
};
