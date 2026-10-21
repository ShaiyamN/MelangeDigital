const assert = require("assert");
const CASE_STUDY_SEO = require("../src/constants/caseStudySeo.json");

const ORIGIN = process.env.SITE_ORIGIN || "https://melangedigital.co";

/** Titles/descriptions must match Helmet on these pages. */
const PAGE_META = {
  "/": {
    title:
      "Global Travel & Tourism Marketing Agency | Mélange Digital",
    description:
      "Mélange is a travel and tourism marketing agency in India, turning cultural insight into arrivals for tourism boards and travel brands worldwide. Book a call.",
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
    title: "Best Destination Marketing Agency | Mélange Digital",
    description:
      "We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy.",
  },
  "/services": {
    title: "Digital Marketing for Travel and Tourism | Mélange",
    description:
      "Mélange offers digital marketing services for the travel and tourism industry, from influencer marketing to branding, built for destinations, DMOs, and NTOs.",
  },
  "/services/influencer-marketing": {
    title: "Travel Influencer Marketing Agency for tourism boards| Mélange Digital",
    description:
      "Mélange casts influencers & celebrities for tourism boards, DMOs, travel brands by trust, not follower count. Connect now for travel influencer marketing.",
  },
  "/services/branded-content-ips": {
    title: "Film Tourism Marketing & Branded Content | Mélange Digital",
    description:
      "Mélange secures film, music and editorial IP, the core of film tourism marketing, so destinations live inside stories audiences choose to watch.",
  },
  "/services/branded-content-ip": {
    title: "Film Tourism Marketing & Branded Content | Mélange Digital",
    description:
      "Mélange secures film, music and editorial IP, the core of film tourism marketing, so destinations live inside stories audiences choose to watch.",
  },
  "/services/experiential-marketing": {
    title: "Tourism Experiential Marketing Agency | Mélange Digital",
    description:
      "Mélange runs tourism experiential marketing: trade show booths, roadshows and mall activations built to capture qualified leads, not footfall.",
  },
  "/services/fam-trips-pr": {
    title: "Travel PR Agency & FAM Trip Management | Mélange Digital",
    description:
      "Mélange runs familiarisation trips & destination PR for tourism boards: journalist and creator FAMs, trade hosting and much more across the GCC.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Mélange Digital",
    description:
      "Terms of Service for Mélange Digital. Please read these terms and conditions before using our services.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Mélange Digital",
    description:
      "Privacy Policy for Mélange Digital. Learn how we collect, use, and protect your personal information.",
  },
  "/cancellation-and-refund-policy": {
    title: "Cancellation & Refund Policy | Mélange Digital",
    description:
      "Cancellation and Refund Policy for Mélange Digital services.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Mélange Digital",
    description:
      "Cookie Policy for Mélange Digital to understand our use of cookies.",
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
  const last = p.split("/").filter(Boolean).pop() || "Mélange Digital";
  const name = last
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return `${name} | Mélange Digital`;
}

function canonicalFor(path, origin = ORIGIN) {
  const clean = normalizePath(path);
  if (clean === "/") return `${origin}/`;
  const m = clean.match(/^\/work\/(.+)$/);
  if (m) {
    const slug = CANONICAL_SLUG[m[1].toLowerCase()] || m[1];
    return `${origin}/work/${slug}`;
  }
  return `${origin}${clean}`;
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
  const caseStudySlug = path.match(/^\/work\/([^/]+)$/)?.[1];
  const caseStudy = caseStudySlug ? CASE_STUDY_SEO[caseStudySlug.toLowerCase()] : null;
  const listed = Boolean(known) || path in PAGE_META || Boolean(caseStudy);

  if (!listed && !cms) {
    return { path, noindex: true, stripFaq: true };
  }

  const preset = PAGE_META[path] || PAGE_META[known] || {};
  const title =
    (caseStudy?.displayTitle &&
      `${caseStudy.displayTitle} | Mélange Digital's Work`) ||
    preset.title ||
    (cms && (cms.seoTitle || cms.title)) ||
    titleFromPath(path);
  const description =
    caseStudy?.description ||
    preset.description ||
    (cms && (cms.metaDescription || cms.description || cms.intro)) ||
    `${title}. Digital marketing for travel and tourism.`;

  const canonical = canonicalFor(known || path, origin);
  const isBlogPost = path.startsWith("/blogs/") && path !== "/blogs";
  const isBlogIndex = path === "/blogs";
  const pageDescription = caseStudy?.description
    ? String(description).replace(/\s+/g, " ").trim()
    : String(description).replace(/\s+/g, " ").trim().slice(0, 160);

  return {
    path,
    title: String(title),
    description: pageDescription,
    canonical,
    stripFaq: path !== "/",
    noindex: false,
    jsonLd: isBlogPost
      ? blogPostingJsonLd(canonical, cms || {})
      : isBlogIndex
        ? collectionPageJsonLd(canonical, title, description)
        : null,
  };
}

function isoDate(value) {
  if (!value) return "";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString();
}

/** Minimal BlogPosting for the initial HTML shell (crawlers that skip JS). */
function blogPostingJsonLd(pageUrl, cms) {
  const headline = String(cms.seoTitle || cms.title || "").trim();
  if (!headline) return null;
  if (cms.schemaMode === "custom" && cms.customSchema) return cms.customSchema;
  if (cms.generatedSchema && typeof cms.generatedSchema === "object") {
    return cms.generatedSchema;
  }
  const published = isoDate(cms.date);
  const modified = isoDate(cms.updatedAt) || published;
  const authorName = String(cms.author || "").trim();
  const node = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: String(cms.metaDescription || cms.description || "").trim() || undefined,
    image: String(cms.image || "").trim() || undefined,
    datePublished: published || undefined,
    dateModified: modified || undefined,
    author: authorName
      ? {
          "@type": /m[ée]lange digital/i.test(authorName) ? "Organization" : "Person",
          name: authorName,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Mélange Digital",
      url: ORIGIN,
      logo: `${ORIGIN}/logo.png`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    url: pageUrl,
  };
  for (const k of Object.keys(node)) {
    if (node[k] === undefined) delete node[k];
  }
  return node;
}

function collectionPageJsonLd(pageUrl, name, description) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@type": "WebSite", name: "Mélange Digital", url: ORIGIN },
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
  if (meta.jsonLd) {
    const block = `\n  <script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`;
    out = out.replace(/<\/head>/i, `${block}\n</head>`);
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

  const blogShell = applyHead(
    shell,
    resolveMeta("/blogs/airlines-marketing", {
      routes: new Set(),
      byPath: {
        "/blogs/airlines-marketing": {
          seoTitle: "Airlines Marketing Guide",
          metaDescription: "How airlines market destinations.",
          author: "Mélange Digital",
          date: "2026-10-01",
          updatedAt: "2026-10-05T00:00:00.000Z",
          image: "https://melangedigital.co/logo.png",
        },
      },
      origin: ORIGIN,
    }),
  );
  assert(blogShell.includes('rel="canonical" href="https://melangedigital.co/blogs/airlines-marketing"'));
  assert(blogShell.includes("Airlines Marketing Guide"));
  assert(blogShell.includes('"@type":"BlogPosting"'));
  assert(blogShell.includes("airlines-marketing"));

  const blogsIndex = applyHead(
    shell,
    resolveMeta("/blogs", { routes: new Set(["/blogs"]), byPath: {}, origin: ORIGIN }),
  );
  assert(blogsIndex.includes('"@type":"CollectionPage"'));
  assert(blogsIndex.includes("https://melangedigital.co/blogs"));

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
  const svcMeta = resolveMeta("/services", { routes: new Set(["/services"]), byPath: {} });
  assert.strictEqual(
    svcMeta.description,
    "Mélange offers digital marketing services for the travel and tourism industry, from influencer marketing to branding, built for destinations, DMOs, and NTOs."
  );
  assert.strictEqual(svcMeta.canonical, "https://melangedigital.co/services");

  for (const [slug, caseSeo] of Object.entries(CASE_STUDY_SEO)) {
    if (!caseSeo.description) continue;
    const casePath = `/work/${slug}`;
    const caseMeta = resolveMeta(casePath, { routes: new Set([casePath]), byPath: {} });
    assert.strictEqual(caseMeta.description, caseSeo.description.trim());
    assert(!/\b(cohor|globa|met)$/.test(caseMeta.description));
    const caseHtml = applyHead(shell, caseMeta);
    assert(caseHtml.includes(
      `<meta data-rh="true" name="description" content="${esc(caseMeta.description)}">`,
    ));
    assert.strictEqual((caseHtml.match(/name="description"/g) || []).length, 1);
  }

  // Trailing slash normalization test:
  assert.strictEqual(canonicalFor("/services/"), "https://melangedigital.co/services");
  assert.strictEqual(canonicalFor("/"), "https://melangedigital.co/");
  assert.strictEqual(canonicalFor(""), "https://melangedigital.co/");

  console.log("seo-head self-check ok");
}

module.exports = {
  PAGE_META,
  applyHead,
  resolveMeta,
  normalizePath,
  canonicalFor,
};
