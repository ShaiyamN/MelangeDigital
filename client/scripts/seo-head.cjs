const assert = require("assert");
const {
  schemasForPath,
  websiteSchema,
  organizationSchema,
} = require("./page-schemas.cjs");
const CASE_STUDY_SEO = require("../src/constants/caseStudySeo.json");

const ORIGIN = process.env.SITE_ORIGIN || "https://melangedigital.co";

/** Titles/descriptions must match Helmet on these pages. */
const PAGE_META = {
  "/": {
    title:
      "Global Travel & Tourism Marketing Agency | Mélange Digital",
    description:
      "Mélange Digital helps tourism boards and travel brands worldwide turn cultural insight into arrivals through travel marketing. Book a call.",
    image: `${ORIGIN}/og-home.png`,
    imageAlt: "Mélange Digital — Travel & Tourism Marketing Agency",
  },
  "/work": {
    title: "Our Work & Case Study Portfolio | Mélange Digital",
    description:
      "Explore Mélange Digital's portfolio of award-winning campaigns, brand transformations & digital marketing success stories from clients around the globe.",
  },
  "/contact": {
    title: "Contact a Tourism Board Marketing Agency in India | Mélange Digital",
    description:
      "Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team.",
    image: `${ORIGIN}/contact-og.jpg`,
    imageAlt: "Tourism Board Marketing Agency – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Contact a Tourism Board Marketing Agency in India | Mélange Digital",
    twitterDescription:
      "Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team.",
  },
  "/about": {
    title: "Best Destination Marketing Agency | Mélange Digital",
    description:
      "We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy.",
    image: `${ORIGIN}/about-og.png`,
    imageAlt: "Destination Marketing Agency | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Best Destination Marketing Agency | Mélange Digital",
    twitterDescription:
      "We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy.",
  },
  "/services": {
    title: "Digital Marketing for Travel and Tourism | Mélange Digital",
    description:
      "Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs.",
    image: `${ORIGIN}/services-og.png`,
    imageAlt: "Digital Marketing for Travel and Tourism | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Digital Marketing for Travel and Tourism | Mélange Digital",
    twitterDescription:
      "Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs.",
  },
  "/services/influencer-marketing": {
    title: "Travel Influencer Marketing Agency for tourism boards| Mélange Digital",
    ogTitle: "Travel Influencer Marketing Agency for tourism boards | Mélange Digital",
    description:
      "Mélange casts influencers & celebrities for tourism boards, DMOs, travel brands by trust, not follower count. Connect now for travel influencer marketing.",
    image: `${ORIGIN}/influencer-marketing-og.png`,
    imageAlt: "Travel Influencer Marketing | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Travel Influencer Marketing Agency for tourism boards | Mélange Digital",
    twitterDescription:
      "Mélange casts influencers & celebrities for tourism boards, DMOs, travel brands by trust, not follower count. Connect now for travel influencer marketing.",
  },
  "/services/branded-content-ips": {
    title: "Film Tourism Marketing & Branded Content | Mélange Digital",
    description:
      "Mélange secures film, music and editorial IP, the core of film tourism marketing, so destinations live inside stories audiences choose to watch.",
    image: `${ORIGIN}/film-tourism-og.jpg`,
    imageAlt: "Film Tourism Marketing & Branded Content | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Film Tourism Marketing & Branded Content | Mélange Digital",
    twitterDescription:
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
    image: `${ORIGIN}/experiential-marketing-og.jpg`,
    imageAlt: "Tourism Experiential Marketing Agency | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Tourism Experiential Marketing Agency | Mélange Digital",
    twitterDescription:
      "Mélange runs tourism experiential marketing: trade show booths, roadshows and mall activations built to capture qualified leads, not footfall.",
  },
  "/services/fam-trips-pr": {
    title: "Travel PR Agency & FAM Trip Management | Mélange Digital",
    description:
      "Mélange runs familiarisation trips & destination PR for tourism boards: journalist and creator FAMs, trade hosting and much more across the GCC.",
    image: `${ORIGIN}/fam-trips-pr-og.jpg`,
    imageAlt: "Travel PR Agency & FAM Trip – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Travel PR Agency & FAM Trip Management | Mélange Digital",
    twitterDescription:
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
  "/blogs/destination-marketing-in-tourism": {
    title: "Destination Marketing in Tourism: What It Is & Why It Matters",
    ogTitle: "Destination Marketing in Tourism: What It Is & Why It Matters",
    description:
      "Destination marketing in tourism drives real visitor spend and repeat travel, not just awareness. See what DMOs and travel brands should do next",
    image: `${ORIGIN}/destination-marketing-in-tourism-og.jpg`,
    imageAlt: "Destination Marketing in Tourism – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "Destination Marketing in Tourism: What It Is & Why It Matters",
    twitterDescription:
      "Destination marketing in tourism drives real visitor spend and repeat travel, not just awareness. See what DMOs and travel brands should do next",
  },
  "/blogs/experiential-tourism-guide": {
    title: "Experiential Tourism Guide 2026 | Blog by Melange Digital",
    ogTitle: "Experiential Tourism Guide 2026 | Blog by Melange Digital",
    description:
      "Discover how Experiential tourism is changing how travellers pick their destinations, travel trends for 2026, and what DMOs, travel brands need to do next",
    image: `${ORIGIN}/experiential-tourism-og.jpg`,
    imageAlt: "Experiential Tourism – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "Experiential Tourism Guide 2026 | Blog by Melange Digital",
    twitterDescription:
      "Discover how Experiential tourism is changing how travellers pick their destinations, travel trends for 2026, and what DMOs, travel brands need to do next",
  },
  "/blogs/ai-for-travel-planning": {
    title: "How People Use AI for Travel Planning | Blog by Melange Digital",
    ogTitle: "How People Use AI for Travel Planning | Blog by Melange Digital",
    description:
      "Travellers now ask an AI chatbot where to go & when to visit before they open a search engine. Here's what's actually changed about AI for travel planning.",
    image: `${ORIGIN}/ai-for-travel-planning-og.jpg`,
    imageAlt: "AI for Travel Planning – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "How People Use AI for Travel Planning | Blog by Melange Digital",
    twitterDescription:
      "Travellers now ask an AI chatbot where to go & when to visit before they open a search engine. Here's what's actually changed about AI for travel planning.",
  },
  "/blogs/travel-influencer-marketing": {
    title: "A Guide to Travel Influencer Marketing | Blog by Melange Digital",
    ogTitle: "A Guide to Travel Influencer Marketing | Blog by Melange Digital",
    description:
      "Travel influencer marketing drives real bookings, not just views. See how travel brands or tourism boards pick creators, measure ROI, and much more!",
    image: `${ORIGIN}/travel-influencer-marketing-og.jpg`,
    imageAlt: "Travel Influencer Marketing – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "A Guide to Travel Influencer Marketing | Blog by Melange Digital",
    twitterDescription:
      "Travel influencer marketing drives real bookings, not just views. See how travel brands or tourism boards pick creators, measure ROI, and much more!",
  },
  "/blogs/airlines-marketing": {
    title:
      "Airlines Marketing and Tourism Boards: Why Joint Campaigns Outperform Solo Ones",
    ogTitle:
      "Airlines Marketing and Tourism Boards: Why Joint Campaigns Outperform Solo Ones",
    description:
      "Airlines marketing works best paired with a tourism board, not run solo. See real 2026 partnerships and what to check before signing a joint campaign.",
    image: `${ORIGIN}/airlines-marketing-og.jpg`,
    imageAlt: "Airlines Marketing – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle:
      "Airlines Marketing and Tourism Boards: Why Joint Campaigns Outperform Solo Ones",
    twitterDescription:
      "Airlines marketing works best paired with a tourism board, not run solo. See real 2026 partnerships and what to check before signing a joint campaign.",
  },
  "/blogs/destination-marketing-strategies": {
    title: "Destination Marketing Strategies by Goal | Blog by Melange Digital",
    ogTitle: "Destination Marketing Strategies by Goal | Blog by Melange Digital",
    description:
      "Destination marketing strategies work best when matched to a goal. See which fits awareness, perception change, launches, new segments and recovery",
    image: `${ORIGIN}/destination-marketing-strategies-og.jpg`,
    imageAlt: "Destination Marketing Strategies – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    ogType: "article",
    twitterTitle: "Destination Marketing Strategies by Goal | Blog by Melange Digital",
    twitterDescription:
      "Destination marketing strategies work best when matched to a goal. See which fits awareness, perception change, launches, new segments and recovery",
  },
  "/blogs/film-induced-tourism": {
    title: "Film-Induced Tourism: How Screens Drive Travel | Melange",
    ogTitle: "Film-Induced Tourism: How Screens Drive Travel | Melange",
    description:
      "Film-induced tourism turns viewers into travellers. See how OTT, set-jetting and reels shape bookings in India, the GCC and beyond. Read the full guide.",
    image: `${ORIGIN}/film-induced-tourism-og.jpg`,
    imageAlt: "Film-Induced Tourism: How Screens Drive Travel | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "Film-Induced Tourism: How Screens Drive Travel | Melange",
    twitterDescription:
      "Film-induced tourism turns viewers into travellers. See how OTT, set-jetting and reels shape bookings in India, the GCC and beyond. Read the full guide.",
  },
  "/blogs/what-are-fam-trip": {
    title: "What Are Fam Trips? A Guide for Destinations | blog by Melange Digital",
    ogTitle: "What Are Fam Trips? A Guide for Destinations | blog by Melange Digital",
    description:
      "What is a fam trip in tourism? Discover what a fam trip usually involves, who to invite and how destinations turn hosted visits into bookings.",
    image: `${ORIGIN}/what-are-fam-trips-og.jpg`,
    imageAlt: "What Are Fam Trips? | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "What Are Fam Trips? A Guide for Destinations | blog by Melange Digital",
    twitterDescription:
      "What is a fam trip in tourism? Discover what a fam trip usually involves, who to invite and how destinations turn hosted visits into bookings.",
  },
  "/blogs/cruise-branding": {
    title: "Cruise Branding for New Cruise Lines | Melange Digital",
    ogTitle: "Cruise Branding for New Cruise Lines | Melange Digital",
    description:
      "Cruise branding for new and emerging cruise lines: Read how to win traveller trust, work with creators, and keep your brand clear as the fleet grows",
    image: `${ORIGIN}/cruise-branding-og.jpg`,
    imageAlt: "Cruise Branding for New Cruise Lines | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "Cruise Branding for New Cruise Lines | Melange Digital",
    twitterDescription:
      "Cruise branding for new and emerging cruise lines: Read how to win traveller trust, work with creators, and keep your brand clear as the fleet grows",
  },
  "/blogs/7-travel-marketing-trends": {
    title: "7 Key Travel Marketing Trends 2027 | Blog by Melange Digital",
    ogTitle: "7 Key Travel Marketing Trends 2027 | Blog by Melange Digital",
    description:
      "Travel marketing trends 2027: AI search, creator partnerships, hybrid FAM trips, film tourism and arrivals-led measurement. Read what to plan for.",
    image: `${ORIGIN}/travel-marketing-trends-og.jpg`,
    imageAlt: "Travel Marketing Trends 2027 – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    ogType: "article",
    twitterTitle: "7 Key Travel Marketing Trends 2027 | Blog by Melange Digital",
    twitterDescription:
      "Travel marketing trends 2027: AI search, creator partnerships, hybrid FAM trips, film tourism and arrivals-led measurement. Read what to plan for.",
  },
  "/blogs/how-to-choose-a-destination-marketing-agency-in-india": {
    title: "Choosing a Destination Marketing Agency in India | Blog by Melange",
    ogTitle: "Choosing a Destination Marketing Agency in India | Blog by Melange",
    description:
      "Hiring a destination marketing agency in India? Six criteria, RFP questions and red flags for tourism boards and DMOs choosing a partner. Read the guide",
    image: `${ORIGIN}/choosing-destination-marketing-agency-india-og.jpg`,
    imageAlt: "Choosing a Destination Marketing Agency in India | Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    ogType: "article",
    twitterTitle: "Choosing a Destination Marketing Agency in India | Blog by Melange",
    twitterDescription:
      "Hiring a destination marketing agency in India? Six criteria, RFP questions and red flags for tourism boards and DMOs choosing a partner. Read the guide",
  },
  "/careers": {
    title: "Careers: Join Our Global Team | Mélange Digital",
    description:
      "Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team.",
    image: `${ORIGIN}/careers-og.jpg`,
    imageAlt: "Tourism Marketing Careers – Mélange Digital",
    imageWidth: 1200,
    imageHeight: 630,
    twitterTitle: "Careers: Join Our Global Team | Mélange Digital",
    twitterDescription:
      "Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team.",
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
  const pageTitle = String(title);
  const pageDescription = caseStudy?.description
    ? String(description).replace(/\s+/g, " ").trim()
    : truncateMetaDescription(description);
  const jsonLdBlocks = schemasForPath(path, {
    title: pageTitle,
    description: pageDescription,
  });
  const image =
    preset.image ||
    String(cms?.image || "").trim() ||
    undefined;
  const imageAlt = preset.imageAlt || undefined;
  const imageWidth = preset.imageWidth || undefined;
  const imageHeight = preset.imageHeight || undefined;
  const imageType = preset.imageType || undefined;
  const ogTitle = preset.ogTitle || undefined;
  const ogType = preset.ogType || undefined;
  const twitterTitle = preset.twitterTitle || undefined;
  const twitterDescription = preset.twitterDescription || undefined;

  return {
    path,
    title: pageTitle,
    description: pageDescription,
    canonical,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    imageType,
    ogTitle,
    ogType,
    twitterTitle,
    twitterDescription,
    /** Always strip shell JSON-LD; page packs replace it for /, /services, /about. */
    stripShellJsonLd: true,
    noindex: false,
    jsonLdBlocks,
    jsonLd: isBlogPost
      ? blogPostingJsonLd(canonical, cms || {})
      : isBlogIndex
        ? collectionPageJsonLd(canonical, title, description)
        : null,
  };
}

function truncateMetaDescription(value, maxLength = 160) {
  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const lastSpace = normalized.lastIndexOf(" ", maxLength);
  if (lastSpace > 0) return normalized.slice(0, lastSpace).trimEnd();
  const nextSpace = normalized.indexOf(" ", maxLength);
  return nextSpace < 0 ? normalized : normalized.slice(0, nextSpace).trimEnd();
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

function containsArticleSchema(html) {
  const scripts = [
    ...html.matchAll(
      /<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  return scripts.some(([, json]) =>
    /"@type"\s*:\s*(?:"(?:BlogPosting|Article)"|\[[^\]]*"(?:BlogPosting|Article)")/.test(
      json,
    ),
  );
}

function isArticleSchema(schema) {
  const types = Array.isArray(schema?.["@type"])
    ? schema["@type"]
    : [schema?.["@type"]];
  return types.some((type) => type === "BlogPosting" || type === "Article");
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
    const descriptionTag = `<meta data-rh="true" name="description" content="${esc(meta.description)}">`;
    const descriptionPattern = /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/gi;
    out = out.replace(descriptionPattern, "");
    const metaSectionPattern = /(<!--\s*Meta Tags\s*-->)([\s\S]*?)(<!--\s*End of Meta Tags\s*-->)/i;
    if (metaSectionPattern.test(out)) {
      out = out.replace(metaSectionPattern, (_match, start, contents, end) => {
        const titleEnd = contents.search(/<\/title>/i);
        const insertAt = titleEnd < 0 ? 0 : titleEnd + "</title>".length;
        const before = contents.slice(0, insertAt);
        const after = contents.slice(insertAt);
        return `${start}${before}\n  ${descriptionTag}${after}${end}`;
      });
    } else if (/<\/head>/i.test(out)) {
      out = out.replace(/<\/head>/i, `  ${descriptionTag}\n</head>`);
    } else {
      throw new Error("applyHead: cannot add meta description without a <head> element");
    }
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
  // Drop shell OG/Twitter tags so a homepage asset never leaks onto other routes.
  out = out.replace(
    /<meta\b[^>]*\bproperty=["']og:(?:image(?::[a-z]+)?|type|url|title|description)["'][^>]*>\s*/gi,
    "",
  );
  out = out.replace(
    /<meta\b[^>]*\bname=["']twitter:(?:card|image)["'][^>]*>\s*/gi,
    "",
  );
  if (meta.twitterTitle || meta.twitterDescription) {
    out = out.replace(
      /<meta\b[^>]*\bname=["']twitter:(?:title|description)["'][^>]*>\s*/gi,
      "",
    );
  }
  if (meta.image) {
    const ogTags = [
      `<meta data-rh="true" property="og:type" content="${esc(meta.ogType || "website")}">`,
      meta.canonical
        ? `<meta data-rh="true" property="og:url" content="${esc(meta.canonical)}">`
        : "",
      meta.ogTitle || meta.title
        ? `<meta data-rh="true" property="og:title" content="${esc(meta.ogTitle || meta.title)}">`
        : "",
      meta.description
        ? `<meta data-rh="true" property="og:description" content="${esc(meta.description)}">`
        : "",
      `<meta data-rh="true" property="og:image" content="${esc(meta.image)}">`,
      `<meta data-rh="true" property="og:image:width" content="${meta.imageWidth || 1200}">`,
      `<meta data-rh="true" property="og:image:height" content="${meta.imageHeight || 632}">`,
      meta.imageType
        ? `<meta data-rh="true" property="og:image:type" content="${esc(meta.imageType)}">`
        : "",
      meta.imageAlt
        ? `<meta data-rh="true" property="og:image:alt" content="${esc(meta.imageAlt)}">`
        : "",
      `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
      meta.twitterTitle
        ? `<meta data-rh="true" name="twitter:title" content="${esc(meta.twitterTitle)}">`
        : "",
      meta.twitterDescription
        ? `<meta data-rh="true" name="twitter:description" content="${esc(meta.twitterDescription)}">`
        : "",
      `<meta data-rh="true" name="twitter:image" content="${esc(meta.image)}">`,
    ]
      .filter(Boolean)
      .map((t) => `  ${t}`)
      .join("\n");
    const metaSectionPattern =
      /(<!--\s*Meta Tags\s*-->)([\s\S]*?)(<!--\s*End of Meta Tags\s*-->)/i;
    if (metaSectionPattern.test(out)) {
      out = out.replace(metaSectionPattern, (_match, start, contents, end) => {
        return `${start}${contents}\n${ogTags}\n  ${end}`;
      });
    } else if (/<\/head>/i.test(out)) {
      out = out.replace(/<\/head>/i, `${ogTags}\n</head>`);
    }
  }
  if (meta.stripFaq) {
    out = out.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi,
      "",
    );
  } else if (meta.stripShellJsonLd) {
    out = out.replace(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi,
      (script) => (/\bdata-rh=["']true["']/i.test(script) ? script : ""),
    );
  }
  const blocks = [];
  let hasArticleSchema = containsArticleSchema(out);
  if (Array.isArray(meta.jsonLdBlocks)) {
    for (const obj of meta.jsonLdBlocks) {
      if (!obj) continue;
      if (isArticleSchema(obj)) {
        if (hasArticleSchema) continue;
        hasArticleSchema = true;
      }
      blocks.push(obj);
    }
  }
  if (meta.jsonLd) {
    if (!isArticleSchema(meta.jsonLd) || !hasArticleSchema) {
      blocks.push(meta.jsonLd);
    }
  }
  if (blocks.length) {
    const scripts = blocks
      .map(
        (obj) =>
          `  <script type="application/ld+json" data-rh="true" data-seo-route="${esc(meta.path)}">${JSON.stringify(obj)}</script>`,
      )
      .join("\n");
    const section = `  <!-- Schema Markup -->\n${scripts}\n  <!-- End of Schema Markup -->`;
    if (
      /<!--\s*Schema Markup\s*-->[\s\S]*?<!--\s*End of Schema Markup\s*-->/i.test(
        out,
      )
    ) {
      out = out.replace(
        /<!--\s*Schema Markup\s*-->[\s\S]*?<!--\s*End of Schema Markup\s*-->/i,
        section,
      );
    } else {
      out = out.replace(/<\/head>/i, `${section}\n</head>`);
    }
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

  const expectedAlternates = ["Melange Digital", "Mélange", "Melange"];
  assert.deepStrictEqual(websiteSchema().alternateName, expectedAlternates);
  assert.deepStrictEqual(organizationSchema().alternateName, expectedAlternates);
  assert.strictEqual(organizationSchema().foundingDate, "2021");
  assert.deepStrictEqual(
    schemasForPath("/about").find((schema) => schema["@type"] === "AboutPage").hasPart,
    { "@id": `${ORIGIN}/about#faq` },
  );
  const contactShell = shell.replace(
    '<script type="application/ld+json">{"@type": "FAQPage"}</script>',
    '<script type="application/ld+json" data-rh="true">{"@type": "Organization","alternateName":["Melange Digital","Mélange","Melange"]}</script>',
  );
  const contactHtml = applyHead(
    contactShell,
    resolveMeta("/contact", { routes: new Set(["/contact"]), byPath: {} }),
  );
  assert(contactHtml.includes('"alternateName":["Melange Digital","Mélange","Melange"]'));

  const work = applyHead(
    shell,
    resolveMeta("/work", { routes: new Set(["/work"]), byPath: {}, origin: ORIGIN }),
  );
  assert(work.includes('rel="canonical" href="https://melangedigital.co/work"'));
  assert(work.includes("Our Work &amp; Case Study Portfolio"));
  assert(!work.includes("FAQPage"));
  assert(!work.includes("application/ld+json"));

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

  const casePath = "/work/hong-kong-tourism-board-herhongkong";
  const caseMeta = resolveMeta(casePath, { routes: new Set([casePath]), byPath: {} });
  const metaShell = shell
    .replace(/<meta data-rh="true" name="description" content="[^"]*">\s*/, "")
    .replace('<title data-rh="true">Home Title</title>', `<!-- Meta Tags -->\n  <title data-rh="true">Home Title</title>\n  <!-- End of Meta Tags -->`);
  const caseHtml = applyHead(metaShell, caseMeta);
  const caseMetaSection = caseHtml.match(/<!--\s*Meta Tags\s*-->([\s\S]*?)<!--\s*End of Meta Tags\s*-->/i);
  assert(
    caseMetaSection?.[1].includes(`<meta data-rh="true" name="description" content="${esc(caseMeta.description)}">`),
    "case-study description must be inserted inside the Meta Tags section when missing",
  );
  assert.strictEqual((caseHtml.match(/name="description"/g) || []).length, 1);

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

  const destinationPath = "/blogs/destination-marketing-strategies";
  const destinationMeta = resolveMeta(destinationPath, {
    routes: new Set([destinationPath]),
    byPath: {
      [destinationPath]: {
        seoTitle: "Destination Marketing Strategies: How to Choose the Right One for Your Goal",
        metaDescription:
          "Destination marketing strategies work best when matched to a goal. See which fits awareness, perception change, launches, new segments and recovery.",
        author: "Mélange Digital",
        date: "2026-10-30",
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(destinationMeta.title, "Destination Marketing Strategies by Goal | Blog by Melange Digital");
  assert.strictEqual(
    destinationMeta.description,
    "Destination marketing strategies work best when matched to a goal. See which fits awareness, perception change, launches, new segments and recovery",
  );
  assert.strictEqual(destinationMeta.canonical, `${ORIGIN}${destinationPath}`);
  assert.strictEqual(destinationMeta.image, `${ORIGIN}/destination-marketing-strategies-og.jpg`);
  assert.strictEqual(destinationMeta.imageAlt, "Destination Marketing Strategies – Mélange Digital");
  assert.strictEqual(destinationMeta.imageWidth, 1200);
  assert.strictEqual(destinationMeta.imageHeight, 630);
  assert.strictEqual(destinationMeta.ogType, "article");
  assert.strictEqual(destinationMeta.twitterTitle, destinationMeta.title);
  assert.strictEqual(destinationMeta.twitterDescription, destinationMeta.description);
  const destinationShell = applyHead(shell, destinationMeta);
  assert(
    destinationShell.includes(
      `rel="canonical" href="${ORIGIN}${destinationPath}"`,
    ),
  );
  assert.strictEqual((destinationShell.match(/rel="canonical"/g) || []).length, 1);
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${destinationPath}`],
    ['property="og:title"', destinationMeta.title],
    ['property="og:description"', destinationMeta.description],
    ['property="og:image"', destinationMeta.image],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:alt"', destinationMeta.imageAlt],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', destinationMeta.title],
    ['name="twitter:description"', destinationMeta.description],
    ['name="twitter:image"', destinationMeta.image],
  ]) {
    assert(destinationShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (destinationShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(destinationShell.includes('"@type":"BlogPosting"'));
  assert.strictEqual((destinationShell.match(/application\/ld\+json/g) || []).length, 1);

  const travelTrendsPath = "/blogs/7-travel-marketing-trends";
  const travelTrendsMeta = resolveMeta(travelTrendsPath, {
    routes: new Set([travelTrendsPath]),
    byPath: {
      [travelTrendsPath]: {
        seoTitle: "7 Key Travel Marketing Trends 2027 | Blog by Melange Digital",
        metaDescription:
          "Travel marketing trends 2027: AI search, creator partnerships, hybrid FAM trips, film tourism and arrivals-led measurement. Read what to plan for.",
        author: "Mélange Digital",
        date: "2026-10-22",
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(
    travelTrendsMeta.title,
    "7 Key Travel Marketing Trends 2027 | Blog by Melange Digital",
  );
  assert.strictEqual(
    travelTrendsMeta.description,
    "Travel marketing trends 2027: AI search, creator partnerships, hybrid FAM trips, film tourism and arrivals-led measurement. Read what to plan for.",
  );
  assert.strictEqual(travelTrendsMeta.canonical, `${ORIGIN}${travelTrendsPath}`);
  assert.strictEqual(
    travelTrendsMeta.image,
    `${ORIGIN}/travel-marketing-trends-og.jpg`,
  );
  assert.strictEqual(
    travelTrendsMeta.imageAlt,
    "Travel Marketing Trends 2027 – Mélange Digital",
  );
  assert.strictEqual(travelTrendsMeta.imageWidth, 1200);
  assert.strictEqual(travelTrendsMeta.imageHeight, 630);
  assert.strictEqual(travelTrendsMeta.ogType, "article");
  assert.strictEqual(travelTrendsMeta.twitterTitle, travelTrendsMeta.title);
  assert.strictEqual(
    travelTrendsMeta.twitterDescription,
    travelTrendsMeta.description,
  );
  const travelTrendsShell = applyHead(shell, travelTrendsMeta);
  assert(
    travelTrendsShell.includes(
      `rel="canonical" href="${ORIGIN}${travelTrendsPath}"`,
    ),
  );
  assert.strictEqual(
    (travelTrendsShell.match(/rel="canonical"/g) || []).length,
    1,
  );
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${travelTrendsPath}`],
    ['property="og:title"', travelTrendsMeta.title],
    ['property="og:description"', travelTrendsMeta.description],
    ['property="og:image"', travelTrendsMeta.image],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:alt"', travelTrendsMeta.imageAlt],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', travelTrendsMeta.title],
    ['name="twitter:description"', travelTrendsMeta.description],
    ['name="twitter:image"', travelTrendsMeta.image],
  ]) {
    assert(travelTrendsShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (travelTrendsShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(travelTrendsShell.includes('"@type":"BlogPosting"'));
  assert.strictEqual(
    (travelTrendsShell.match(/application\/ld\+json/g) || []).length,
    1,
  );

  const existingArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Existing article schema",
  };
  const existingArticleShell = shell.replace(
    "</head>",
    `  <script type="application/ld+json" data-rh="true">${JSON.stringify(existingArticleSchema)}</script>\n</head>`,
  );
  const noDuplicateArticleSchema = applyHead(existingArticleShell, travelTrendsMeta);
  const articleSchemaScripts = [
    ...noDuplicateArticleSchema.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ].filter(([, json]) => json.includes('"@type":"BlogPosting"'));
  assert.strictEqual(articleSchemaScripts.length, 1);
  assert(articleSchemaScripts[0][1].includes('"headline":"Existing article schema"'));

  const agencyPath =
    "/blogs/how-to-choose-a-destination-marketing-agency-in-india";
  const agencyTitle =
    "Choosing a Destination Marketing Agency in India | Blog by Melange";
  const agencyDescription =
    "Hiring a destination marketing agency in India? Six criteria, RFP questions and red flags for tourism boards and DMOs choosing a partner. Read the guide";
  const agencyMeta = resolveMeta(agencyPath, {
    routes: new Set([agencyPath]),
    byPath: {
      [agencyPath]: {
        seoTitle: agencyTitle,
        metaDescription: agencyDescription,
        title: agencyTitle,
        author: "Mélange Digital",
        date: "2026-11-05",
        schemaMode: "custom",
        customSchema: existingArticleSchema,
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(agencyMeta.title, agencyTitle);
  assert.strictEqual(agencyMeta.description, agencyDescription);
  assert.strictEqual(agencyMeta.canonical, `${ORIGIN}${agencyPath}`);
  assert.strictEqual(
    agencyMeta.image,
    `${ORIGIN}/choosing-destination-marketing-agency-india-og.jpg`,
  );
  assert.strictEqual(agencyMeta.imageWidth, 1200);
  assert.strictEqual(agencyMeta.imageHeight, 630);
  assert.strictEqual(agencyMeta.imageType, "image/jpeg");
  assert.strictEqual(agencyMeta.ogType, "article");
  assert.strictEqual(agencyMeta.twitterTitle, agencyTitle);
  assert.strictEqual(agencyMeta.twitterDescription, agencyDescription);
  const agencyShell = applyHead(shell, agencyMeta);
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${agencyPath}`],
    ['property="og:title"', agencyTitle],
    ['property="og:description"', agencyDescription],
    [
      'property="og:image"',
      `${ORIGIN}/choosing-destination-marketing-agency-india-og.jpg`,
    ],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:type"', "image/jpeg"],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', agencyTitle],
    ['name="twitter:description"', agencyDescription],
    [
      'name="twitter:image"',
      `${ORIGIN}/choosing-destination-marketing-agency-india-og.jpg`,
    ],
  ]) {
    assert(agencyShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (agencyShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(agencyShell.includes('"headline":"Existing article schema"'));
  assert.strictEqual(
    (agencyShell.match(/"@type":"BlogPosting"/g) || []).length,
    1,
  );

  const cruisePath = "/blogs/cruise-branding";
  const cruiseTitle = "Cruise Branding for New Cruise Lines | Melange Digital";
  const cruiseDescription =
    "Cruise branding for new and emerging cruise lines: Read how to win traveller trust, work with creators, and keep your brand clear as the fleet grows";
  const cruiseMeta = resolveMeta(cruisePath, {
    routes: new Set([cruisePath]),
    byPath: {
      [cruisePath]: {
        seoTitle: `${cruiseTitle} `,
        metaDescription: cruiseDescription,
        title: cruiseTitle,
        schemaMode: "custom",
        customSchema: existingArticleSchema,
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(cruiseMeta.title, cruiseTitle);
  assert.strictEqual(cruiseMeta.description, cruiseDescription);
  assert.strictEqual(cruiseMeta.canonical, `${ORIGIN}${cruisePath}`);
  assert.strictEqual(cruiseMeta.image, `${ORIGIN}/cruise-branding-og.jpg`);
  assert.strictEqual(cruiseMeta.imageWidth, 1200);
  assert.strictEqual(cruiseMeta.imageHeight, 630);
  assert.strictEqual(cruiseMeta.imageType, "image/jpeg");
  assert.strictEqual(cruiseMeta.ogType, "article");
  assert.strictEqual(cruiseMeta.twitterTitle, cruiseTitle);
  assert.strictEqual(cruiseMeta.twitterDescription, cruiseDescription);
  const cruiseShell = applyHead(shell, cruiseMeta);
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${cruisePath}`],
    ['property="og:title"', cruiseTitle],
    ['property="og:description"', cruiseDescription],
    ['property="og:image"', `${ORIGIN}/cruise-branding-og.jpg`],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:type"', "image/jpeg"],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', cruiseTitle],
    ['name="twitter:description"', cruiseDescription],
    ['name="twitter:image"', `${ORIGIN}/cruise-branding-og.jpg`],
  ]) {
    assert(cruiseShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (cruiseShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(cruiseShell.includes('"headline":"Existing article schema"'));
  assert.strictEqual(
    (cruiseShell.match(/"@type":"BlogPosting"/g) || []).length,
    1,
  );

  const articleFamTripsPath = "/blogs/what-are-fam-trip";
  const articleFamTripsTitle =
    "What Are Fam Trips? A Guide for Destinations | blog by Melange Digital";
  const articleFamTripsDescription =
    "What is a fam trip in tourism? Discover what a fam trip usually involves, who to invite and how destinations turn hosted visits into bookings.";
  const articleFamTripsMeta = resolveMeta(articleFamTripsPath, {
    routes: new Set([articleFamTripsPath]),
    byPath: {
      [articleFamTripsPath]: {
        seoTitle: `${articleFamTripsTitle} `,
        metaDescription: articleFamTripsDescription,
        title: articleFamTripsTitle,
        schemaMode: "custom",
        customSchema: existingArticleSchema,
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(articleFamTripsMeta.title, articleFamTripsTitle);
  assert.strictEqual(articleFamTripsMeta.description, articleFamTripsDescription);
  assert.strictEqual(
    articleFamTripsMeta.canonical,
    `${ORIGIN}${articleFamTripsPath}`,
  );
  assert.strictEqual(
    articleFamTripsMeta.image,
    `${ORIGIN}/what-are-fam-trips-og.jpg`,
  );
  assert.strictEqual(articleFamTripsMeta.imageWidth, 1200);
  assert.strictEqual(articleFamTripsMeta.imageHeight, 630);
  assert.strictEqual(articleFamTripsMeta.imageType, "image/jpeg");
  assert.strictEqual(articleFamTripsMeta.ogType, "article");
  assert.strictEqual(articleFamTripsMeta.twitterTitle, articleFamTripsTitle);
  assert.strictEqual(
    articleFamTripsMeta.twitterDescription,
    articleFamTripsDescription,
  );
  const articleFamTripsShell = applyHead(shell, articleFamTripsMeta);
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${articleFamTripsPath}`],
    ['property="og:title"', articleFamTripsTitle],
    ['property="og:description"', articleFamTripsDescription],
    ['property="og:image"', `${ORIGIN}/what-are-fam-trips-og.jpg`],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:type"', "image/jpeg"],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', articleFamTripsTitle],
    ['name="twitter:description"', articleFamTripsDescription],
    ['name="twitter:image"', `${ORIGIN}/what-are-fam-trips-og.jpg`],
  ]) {
    assert(articleFamTripsShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (articleFamTripsShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(articleFamTripsShell.includes('"headline":"Existing article schema"'));
  assert.strictEqual(
    (articleFamTripsShell.match(/"@type":"BlogPosting"/g) || []).length,
    1,
  );

  const filmTourismPath = "/blogs/film-induced-tourism";
  const filmTourismTitle =
    "Film-Induced Tourism: How Screens Drive Travel | Melange";
  const filmTourismDescription =
    "Film-induced tourism turns viewers into travellers. See how OTT, set-jetting and reels shape bookings in India, the GCC and beyond. Read the full guide.";
  const filmTourismMeta = resolveMeta(filmTourismPath, {
    routes: new Set([filmTourismPath]),
    byPath: {
      [filmTourismPath]: {
        seoTitle: `${filmTourismTitle} `,
        metaDescription: filmTourismDescription,
        title: filmTourismTitle,
        schemaMode: "custom",
        customSchema: existingArticleSchema,
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(filmTourismMeta.title, filmTourismTitle);
  assert.strictEqual(filmTourismMeta.description, filmTourismDescription);
  assert.strictEqual(
    filmTourismMeta.canonical,
    `${ORIGIN}${filmTourismPath}`,
  );
  assert.strictEqual(
    filmTourismMeta.image,
    `${ORIGIN}/film-induced-tourism-og.jpg`,
  );
  assert.strictEqual(filmTourismMeta.imageWidth, 1200);
  assert.strictEqual(filmTourismMeta.imageHeight, 630);
  assert.strictEqual(filmTourismMeta.imageType, "image/jpeg");
  assert.strictEqual(filmTourismMeta.ogType, "article");
  assert.strictEqual(filmTourismMeta.twitterTitle, filmTourismTitle);
  assert.strictEqual(
    filmTourismMeta.twitterDescription,
    filmTourismDescription,
  );
  const filmTourismShell = applyHead(shell, filmTourismMeta);
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${filmTourismPath}`],
    ['property="og:title"', filmTourismTitle],
    ['property="og:description"', filmTourismDescription],
    ['property="og:image"', `${ORIGIN}/film-induced-tourism-og.jpg`],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:type"', "image/jpeg"],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', filmTourismTitle],
    ['name="twitter:description"', filmTourismDescription],
    ['name="twitter:image"', `${ORIGIN}/film-induced-tourism-og.jpg`],
  ]) {
    assert(filmTourismShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (filmTourismShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(filmTourismShell.includes('"headline":"Existing article schema"'));
  assert.strictEqual(
    (filmTourismShell.match(/"@type":"BlogPosting"/g) || []).length,
    1,
  );

  const airlinesPath = "/blogs/airlines-marketing";
  const airlinesTitle =
    "Airlines Marketing and Tourism Boards: Why Joint Campaigns Outperform Solo Ones";
  const airlinesDescription =
    "Airlines marketing works best paired with a tourism board, not run solo. See real 2026 partnerships and what to check before signing a joint campaign.";
  const airlinesMeta = resolveMeta(airlinesPath, {
    routes: new Set([airlinesPath]),
    byPath: {
      [airlinesPath]: {
        seoTitle: airlinesTitle,
        metaDescription: airlinesDescription,
        title: airlinesTitle,
        schemaMode: "custom",
        customSchema: existingArticleSchema,
      },
    },
    origin: ORIGIN,
  });
  assert.strictEqual(airlinesMeta.title, airlinesTitle);
  assert.strictEqual(airlinesMeta.description, airlinesDescription);
  assert.strictEqual(airlinesMeta.canonical, `${ORIGIN}${airlinesPath}`);
  assert.strictEqual(airlinesMeta.image, `${ORIGIN}/airlines-marketing-og.jpg`);
  assert.strictEqual(airlinesMeta.imageWidth, 1200);
  assert.strictEqual(airlinesMeta.imageHeight, 630);
  assert.strictEqual(airlinesMeta.imageType, "image/jpeg");
  assert.strictEqual(airlinesMeta.ogType, "article");
  assert.strictEqual(airlinesMeta.twitterTitle, airlinesTitle);
  assert.strictEqual(airlinesMeta.twitterDescription, airlinesDescription);
  const airlinesShell = applyHead(shell, airlinesMeta);
  for (const [tag, value] of [
    ['property="og:type"', "article"],
    ['property="og:url"', `${ORIGIN}${airlinesPath}`],
    ['property="og:title"', airlinesTitle],
    ['property="og:description"', airlinesDescription],
    ['property="og:image"', `${ORIGIN}/airlines-marketing-og.jpg`],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:type"', "image/jpeg"],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', airlinesTitle],
    ['name="twitter:description"', airlinesDescription],
    ['name="twitter:image"', `${ORIGIN}/airlines-marketing-og.jpg`],
  ]) {
    assert(airlinesShell.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual(
      (airlinesShell.match(new RegExp(tag, "g")) || []).length,
      1,
      `${tag} must occur once`,
    );
  }
  assert(airlinesShell.includes('"headline":"Existing article schema"'));
  assert.strictEqual(
    (airlinesShell.match(/"@type":"BlogPosting"/g) || []).length,
    1,
  );

  for (const [articlePath, articleTitle, articleDescription, imageName] of [
    [
      "/blogs/destination-marketing-in-tourism",
      "Destination Marketing in Tourism: What It Is & Why It Matters",
      "Destination marketing in tourism drives real visitor spend and repeat travel, not just awareness. See what DMOs and travel brands should do next",
      "destination-marketing-in-tourism-og.jpg",
    ],
    [
      "/blogs/experiential-tourism-guide",
      "Experiential Tourism Guide 2026 | Blog by Melange Digital",
      "Discover how Experiential tourism is changing how travellers pick their destinations, travel trends for 2026, and what DMOs, travel brands need to do next",
      "experiential-tourism-og.jpg",
    ],
    [
      "/blogs/ai-for-travel-planning",
      "How People Use AI for Travel Planning | Blog by Melange Digital",
      "Travellers now ask an AI chatbot where to go & when to visit before they open a search engine. Here's what's actually changed about AI for travel planning.",
      "ai-for-travel-planning-og.jpg",
    ],
    [
      "/blogs/travel-influencer-marketing",
      "A Guide to Travel Influencer Marketing | Blog by Melange Digital",
      "Travel influencer marketing drives real bookings, not just views. See how travel brands or tourism boards pick creators, measure ROI, and much more!",
      "travel-influencer-marketing-og.jpg",
    ],
  ]) {
    const articleImage = `${ORIGIN}/${imageName}`;
    const articleMeta = resolveMeta(articlePath, {
      routes: new Set([articlePath]),
      byPath: {
        [articlePath]: {
          seoTitle: articleTitle,
          metaDescription: articleDescription,
          title: articleTitle,
          schemaMode: "custom",
          customSchema: existingArticleSchema,
        },
      },
      origin: ORIGIN,
    });
    assert.strictEqual(articleMeta.title, articleTitle);
    assert.strictEqual(articleMeta.description, articleDescription);
    assert.strictEqual(articleMeta.canonical, `${ORIGIN}${articlePath}`);
    assert.strictEqual(articleMeta.image, articleImage);
    assert.strictEqual(articleMeta.imageWidth, 1200);
    assert.strictEqual(articleMeta.imageHeight, 630);
    assert.strictEqual(articleMeta.imageType, "image/jpeg");
    assert.strictEqual(articleMeta.ogType, "article");
    assert.strictEqual(articleMeta.twitterTitle, articleTitle);
    assert.strictEqual(articleMeta.twitterDescription, articleDescription);
    const articleShell = applyHead(shell, articleMeta);
    for (const [tag, value] of [
      ['property="og:type"', "article"],
      ['property="og:url"', `${ORIGIN}${articlePath}`],
      ['property="og:title"', articleTitle],
      ['property="og:description"', articleDescription],
      ['property="og:image"', articleImage],
      ['property="og:image:width"', "1200"],
      ['property="og:image:height"', "630"],
      ['property="og:image:type"', "image/jpeg"],
      ['name="twitter:card"', "summary_large_image"],
      ['name="twitter:title"', articleTitle],
      ['name="twitter:description"', articleDescription],
      ['name="twitter:image"', articleImage],
    ]) {
      assert(articleShell.includes(`${tag} content="${esc(value)}"`));
      assert.strictEqual(
        (articleShell.match(new RegExp(tag, "g")) || []).length,
        1,
        `${tag} must occur once for ${articlePath}`,
      );
    }
    assert(articleShell.includes('"headline":"Existing article schema"'));
    assert.strictEqual(
      (articleShell.match(/"@type":"BlogPosting"/g) || []).length,
      1,
    );
  }

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
    "Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs."
  );
  assert.strictEqual(svcMeta.canonical, "https://melangedigital.co/services");
  assert.strictEqual(svcMeta.image, `${ORIGIN}/services-og.png`);
  assert.strictEqual(svcMeta.imageWidth, 1200);
  assert.strictEqual(svcMeta.imageHeight, 630);
  assert.strictEqual(svcMeta.imageAlt, "Digital Marketing for Travel and Tourism | Mélange Digital");
  assert.strictEqual(svcMeta.twitterTitle, svcMeta.title);
  assert.strictEqual(svcMeta.twitterDescription, svcMeta.description);
  assert.strictEqual(svcMeta.jsonLdBlocks?.length, 6);
  assert(svcMeta.jsonLdBlocks.some((b) => b["@type"] === "CollectionPage"));
  assert(
    !svcMeta.jsonLdBlocks.some(
      (b) => b["@id"] === "https://melangedigital.co/#localbusiness-goa",
    ),
  );

  const homeMeta = resolveMeta("/", { routes: new Set(["/"]), byPath: {} });
  assert.strictEqual(homeMeta.jsonLdBlocks?.length, 6);
  assert.strictEqual(homeMeta.image, `${ORIGIN}/og-home.png`);
  assert.strictEqual(homeMeta.imageHeight, undefined);
  const homeShell = `<!DOCTYPE html><html><head>
  <meta name="viewport" content="width=device-width">
  <link data-rh="true" rel="canonical" href="https://melangedigital.co/">
  <title data-rh="true">Home</title>
  <meta data-rh="true" name="description" content="Home desc">
  <!-- Schema Markup -->
  <!-- placeholder -->
  <!-- End of Schema Markup -->
</head></html>`;
  const homeHtml = applyHead(homeShell, homeMeta);
  assert(homeHtml.includes('data-rh="true" data-seo-route="/"'));
  assert(
    homeHtml.includes('"alternateName":["Melange Digital","Mélange","Melange"]'),
  );
  assert.strictEqual(
    (homeHtml.match(/application\/ld\+json/g) || []).length,
    6,
  );
  const marked = homeHtml.match(
    /<!--\s*Schema Markup\s*-->([\s\S]*?)<!--\s*End of Schema Markup\s*-->/i,
  );
  assert(marked, "homepage schemas must sit between Schema Markup markers");
  assert.strictEqual(
    (marked[1].match(/application\/ld\+json/g) || []).length,
    6,
  );
  assert(!homeHtml.slice(homeHtml.indexOf("</head>")).includes("ld+json"));
  assert(homeHtml.includes("Social media marketing for tourism"));
  assert(!homeHtml.includes("Social Media Marketing for Hotels and Resorts"));
  assert(
    homeHtml.includes(`property="og:image" content="${ORIGIN}/og-home.png"`),
  );
  assert(homeHtml.includes('property="og:image:height" content="632"'));
  assert(!homeHtml.includes(`${ORIGIN}/about-og.png`));
  assert(homeHtml.includes('name="twitter:card" content="summary_large_image"'));

  const influencerPath = "/services/influencer-marketing";
  const influencerMeta = resolveMeta(influencerPath, {
    routes: new Set([influencerPath]),
    byPath: {},
  });
  assert.strictEqual(influencerMeta.ogTitle, "Travel Influencer Marketing Agency for tourism boards | Mélange Digital");
  assert.strictEqual(influencerMeta.image, `${ORIGIN}/influencer-marketing-og.png`);
  assert.strictEqual(influencerMeta.imageWidth, 1200);
  assert.strictEqual(influencerMeta.imageHeight, 630);
  assert.strictEqual(influencerMeta.imageAlt, "Travel Influencer Marketing | Mélange Digital");
  assert.strictEqual(influencerMeta.twitterTitle, influencerMeta.ogTitle);
  assert.strictEqual(influencerMeta.twitterDescription, influencerMeta.description);
  const influencerHtml = applyHead(homeShell, influencerMeta);
  assert(influencerHtml.includes(`property="og:title" content="${esc(influencerMeta.ogTitle)}"`));
  assert(influencerHtml.includes(`property="og:url" content="${ORIGIN}${influencerPath}"`));
  assert(influencerHtml.includes(`property="og:image" content="${ORIGIN}/influencer-marketing-og.png"`));
  assert(influencerHtml.includes('property="og:image:width" content="1200"'));
  assert(influencerHtml.includes('property="og:image:height" content="630"'));
  assert(influencerHtml.includes('property="og:image:alt" content="Travel Influencer Marketing | Mélange Digital"'));
  assert(influencerHtml.includes(`name="twitter:title" content="${esc(influencerMeta.twitterTitle)}"`));
  assert(influencerHtml.includes(`name="twitter:description" content="${esc(influencerMeta.twitterDescription)}"`));
  assert(influencerHtml.includes(`name="twitter:image" content="${ORIGIN}/influencer-marketing-og.png"`));
  for (const tag of [
    'property="og:title"',
    'property="og:description"',
    'property="og:image"',
    'property="og:image:width"',
    'property="og:image:height"',
    'property="og:image:alt"',
    'property="og:url"',
    'name="twitter:card"',
    'name="twitter:title"',
    'name="twitter:description"',
    'name="twitter:image"',
  ]) {
    assert.strictEqual((influencerHtml.match(new RegExp(tag, "g")) || []).length, 1, `${tag} must occur once`);
  }
  assert(!influencerHtml.includes("about-og.png"));
  assert(!influencerHtml.includes("services-og.png"));
  assert(!influencerHtml.includes("og-home.png"));

  const brandedContentPath = "/services/branded-content-ips";
  const brandedContentMeta = resolveMeta(brandedContentPath, {
    routes: new Set([brandedContentPath]),
    byPath: {},
  });
  assert.strictEqual(brandedContentMeta.title, "Film Tourism Marketing & Branded Content | Mélange Digital");
  assert.strictEqual(brandedContentMeta.description, "Mélange secures film, music and editorial IP, the core of film tourism marketing, so destinations live inside stories audiences choose to watch.");
  assert.strictEqual(brandedContentMeta.image, `${ORIGIN}/film-tourism-og.jpg`);
  assert.strictEqual(brandedContentMeta.imageWidth, 1200);
  assert.strictEqual(brandedContentMeta.imageHeight, 630);
  assert.strictEqual(brandedContentMeta.imageAlt, brandedContentMeta.title);
  assert.strictEqual(brandedContentMeta.twitterTitle, brandedContentMeta.title);
  assert.strictEqual(brandedContentMeta.twitterDescription, brandedContentMeta.description);
  const brandedContentHtml = applyHead(homeShell, brandedContentMeta);
  for (const [tag, value] of [
    ['property="og:title"', brandedContentMeta.title],
    ['property="og:description"', brandedContentMeta.description],
    ['property="og:url"', `${ORIGIN}${brandedContentPath}`],
    ['property="og:image"', `${ORIGIN}/film-tourism-og.jpg`],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:alt"', brandedContentMeta.title],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', brandedContentMeta.title],
    ['name="twitter:description"', brandedContentMeta.description],
    ['name="twitter:image"', `${ORIGIN}/film-tourism-og.jpg`],
  ]) {
    assert(brandedContentHtml.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual((brandedContentHtml.match(new RegExp(tag, "g")) || []).length, 1, `${tag} must occur once`);
  }
  for (const otherImage of ["og-home.png", "about-og.png", "services-og.png", "influencer-marketing-og.png"]) {
    assert(!brandedContentHtml.includes(otherImage));
  }

  const experientialPath = "/services/experiential-marketing";
  const experientialMeta = resolveMeta(experientialPath, {
    routes: new Set([experientialPath]),
    byPath: {},
  });
  assert.strictEqual(experientialMeta.title, "Tourism Experiential Marketing Agency | Mélange Digital");
  assert.strictEqual(experientialMeta.description, "Mélange runs tourism experiential marketing: trade show booths, roadshows and mall activations built to capture qualified leads, not footfall.");
  assert.strictEqual(experientialMeta.image, `${ORIGIN}/experiential-marketing-og.jpg`);
  assert.strictEqual(experientialMeta.imageWidth, 1200);
  assert.strictEqual(experientialMeta.imageHeight, 630);
  assert.strictEqual(experientialMeta.imageAlt, experientialMeta.title);
  assert.strictEqual(experientialMeta.twitterTitle, experientialMeta.title);
  assert.strictEqual(experientialMeta.twitterDescription, experientialMeta.description);
  const experientialHtml = applyHead(homeShell, experientialMeta);
  for (const [tag, value] of [
    ['property="og:title"', experientialMeta.title],
    ['property="og:description"', experientialMeta.description],
    ['property="og:url"', `${ORIGIN}${experientialPath}`],
    ['property="og:image"', `${ORIGIN}/experiential-marketing-og.jpg`],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:alt"', experientialMeta.title],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', experientialMeta.title],
    ['name="twitter:description"', experientialMeta.description],
    ['name="twitter:image"', `${ORIGIN}/experiential-marketing-og.jpg`],
  ]) {
    assert(experientialHtml.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual((experientialHtml.match(new RegExp(tag, "g")) || []).length, 1, `${tag} must occur once`);
  }
  for (const otherImage of ["og-home.png", "about-og.png", "services-og.png", "influencer-marketing-og.png", "film-tourism-og.jpg"]) {
    assert(!experientialHtml.includes(otherImage));
  }

  const famTripsPath = "/services/fam-trips-pr";
  const famTripsMeta = resolveMeta(famTripsPath, {
    routes: new Set([famTripsPath]),
    byPath: {},
  });
  assert.strictEqual(famTripsMeta.title, "Travel PR Agency & FAM Trip Management | Mélange Digital");
  assert.strictEqual(famTripsMeta.description, "Mélange runs familiarisation trips & destination PR for tourism boards: journalist and creator FAMs, trade hosting and much more across the GCC.");
  assert.strictEqual(famTripsMeta.canonical, `${ORIGIN}${famTripsPath}`);
  assert.strictEqual(famTripsMeta.image, `${ORIGIN}/fam-trips-pr-og.jpg`);
  assert.strictEqual(famTripsMeta.imageWidth, 1200);
  assert.strictEqual(famTripsMeta.imageHeight, 630);
  assert.strictEqual(famTripsMeta.imageAlt, "Travel PR Agency & FAM Trip – Mélange Digital");
  assert.strictEqual(famTripsMeta.twitterTitle, famTripsMeta.title);
  assert.strictEqual(famTripsMeta.twitterDescription, famTripsMeta.description);
  const famTripsHtml = applyHead(homeShell, famTripsMeta);
  for (const [tag, value] of [
    ['property="og:title"', famTripsMeta.title],
    ['property="og:description"', famTripsMeta.description],
    ['property="og:type"', "website"],
    ['property="og:url"', famTripsMeta.canonical],
    ['property="og:image"', famTripsMeta.image],
    ['property="og:image:width"', "1200"],
    ['property="og:image:height"', "630"],
    ['property="og:image:alt"', famTripsMeta.imageAlt],
    ['name="twitter:card"', "summary_large_image"],
    ['name="twitter:title"', famTripsMeta.title],
    ['name="twitter:description"', famTripsMeta.description],
    ['name="twitter:image"', famTripsMeta.image],
  ]) {
    assert(famTripsHtml.includes(`${tag} content="${esc(value)}"`));
    assert.strictEqual((famTripsHtml.match(new RegExp(tag, "g")) || []).length, 1, `${tag} must occur once`);
  }
  for (const otherImage of ["og-home.png", "about-og.png", "services-og.png", "influencer-marketing-og.png", "film-tourism-og.jpg", "experiential-marketing-og.jpg"]) {
    assert(!famTripsHtml.includes(otherImage));
  }

  const aboutMeta = resolveMeta("/about", {
    routes: new Set(["/about"]),
    byPath: {},
  });
  assert.strictEqual(aboutMeta.jsonLdBlocks?.length, 8);
  assert(aboutMeta.jsonLdBlocks.some((b) => b["@type"] === "AboutPage"));
  assert.strictEqual(aboutMeta.image, `${ORIGIN}/about-og.png`);
  assert.strictEqual(aboutMeta.imageWidth, 1200);
  assert.strictEqual(aboutMeta.imageHeight, 630);
  assert.strictEqual(aboutMeta.twitterTitle, aboutMeta.title);
  assert.strictEqual(aboutMeta.twitterDescription, aboutMeta.description);
  const aboutHtml = applyHead(homeShell, aboutMeta);
  assert(!aboutHtml.includes("og-home.png"));
  assert(aboutHtml.includes(`property="og:url" content="${ORIGIN}/about"`));
  assert(aboutHtml.includes(`property="og:image" content="${ORIGIN}/about-og.png"`));
  assert(aboutHtml.includes('property="og:image:width" content="1200"'));
  assert(aboutHtml.includes('property="og:image:height" content="630"'));
  assert(aboutHtml.includes('property="og:image:alt" content="Destination Marketing Agency | Mélange Digital"'));
  assert(aboutHtml.includes(`name="twitter:title" content="${esc(aboutMeta.title)}"`));
  assert(aboutHtml.includes(`name="twitter:description" content="${esc(aboutMeta.description)}"`));
  assert(aboutHtml.includes(`name="twitter:image" content="${ORIGIN}/about-og.png"`));
  for (const tag of [
    'property="og:title"',
    'property="og:description"',
    'property="og:image"',
    'property="og:image:width"',
    'property="og:image:height"',
    'property="og:image:alt"',
    'name="twitter:card"',
    'name="twitter:title"',
    'name="twitter:description"',
    'name="twitter:image"',
  ]) {
    assert.strictEqual((aboutHtml.match(new RegExp(tag, "g")) || []).length, 1, `${tag} must occur once`);
  }
  const aboutMarked = aboutHtml.match(
    /<!--\s*Schema Markup\s*-->([\s\S]*?)<!--\s*End of Schema Markup\s*-->/i,
  );
  assert(aboutMarked, "about schemas must sit between Schema Markup markers");
  assert.strictEqual(
    (aboutMarked[1].match(/application\/ld\+json/g) || []).length,
    8,
  );
  assert.strictEqual(
    (aboutHtml.match(/application\/ld\+json/g) || []).length,
    8,
  );

  const svcHtml = applyHead(homeShell, svcMeta);
  assert(svcHtml.includes(`property="og:url" content="${ORIGIN}/services"`));
  assert(svcHtml.includes(`property="og:image" content="${ORIGIN}/services-og.png"`));
  assert(svcHtml.includes('property="og:image:width" content="1200"'));
  assert(svcHtml.includes('property="og:image:height" content="630"'));
  assert(svcHtml.includes('property="og:image:alt" content="Digital Marketing for Travel and Tourism | Mélange Digital"'));
  assert(svcHtml.includes(`name="twitter:title" content="${esc(svcMeta.title)}"`));
  assert(svcHtml.includes(`name="twitter:description" content="${esc(svcMeta.description)}"`));
  assert(svcHtml.includes(`name="twitter:image" content="${ORIGIN}/services-og.png"`));
  for (const tag of [
    'property="og:title"',
    'property="og:description"',
    'property="og:image"',
    'property="og:image:width"',
    'property="og:image:height"',
    'property="og:image:alt"',
    'name="twitter:card"',
    'name="twitter:title"',
    'name="twitter:description"',
    'name="twitter:image"',
  ]) {
    assert.strictEqual((svcHtml.match(new RegExp(tag, "g")) || []).length, 1, `${tag} must occur once`);
  }
  assert(!svcHtml.includes("about-og.png"));
  assert(!svcHtml.includes("og-home.png"));
  const svcMarked = svcHtml.match(
    /<!--\s*Schema Markup\s*-->([\s\S]*?)<!--\s*End of Schema Markup\s*-->/i,
  );
  assert(svcMarked, "services schemas must sit between Schema Markup markers");
  assert.strictEqual(
    (svcMarked[1].match(/application\/ld\+json/g) || []).length,
    6,
  );

  const infPath = "/services/influencer-marketing";
  const infMeta = resolveMeta(infPath, {
    routes: new Set([infPath]),
    byPath: {},
  });
  assert.strictEqual(infMeta.jsonLdBlocks?.length, 6);
  assert.strictEqual(
    infMeta.title,
    "Travel Influencer Marketing Agency for tourism boards| Mélange Digital",
  );
  assert.strictEqual(
    infMeta.description,
    "Mélange casts influencers & celebrities for tourism boards, DMOs, travel brands by trust, not follower count. Connect now for travel influencer marketing.",
  );
  assert(
    infMeta.jsonLdBlocks.every(
      (b) => !String(b["@id"] || "").includes("#localbusiness-"),
    ),
  );
  const infTypes = infMeta.jsonLdBlocks.map((b) => b["@type"]);
  assert.deepStrictEqual(infTypes, [
    "WebSite",
    "Organization",
    "WebPage",
    "Service",
    "BreadcrumbList",
    "FAQPage",
  ]);
  const infHtml = applyHead(homeShell, infMeta);
  assert.strictEqual(
    (infHtml.match(/application\/ld\+json/g) || []).length,
    6,
  );
  assert(infHtml.includes(`${ORIGIN}${infPath}#service`));
  assert(!infHtml.includes("Digital Marketing Agency in Goa"));

  assert.strictEqual(
    truncateMetaDescription("A complete phrase ending midword", 18),
    "A complete phrase",
  );
  for (const [slug, caseSeo] of Object.entries(CASE_STUDY_SEO)) {
    if (!caseSeo.description) continue;
    const path = `/work/${slug}`;
    const caseMeta = resolveMeta(path, { routes: new Set([path]), byPath: {} });
    assert.strictEqual(caseMeta.title, `${caseSeo.displayTitle} | Mélange Digital's Work`);
    assert.strictEqual(caseMeta.description, caseSeo.description.trim());
    assert(!/\b(cohor|globa|met)$/.test(caseMeta.description));
  }

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
