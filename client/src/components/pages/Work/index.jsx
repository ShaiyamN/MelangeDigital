import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { applyCaseStudySeo } from "../../../constants/serviceCards";
import {
  MARKETING_ASSET as ASSET,
  MarketingShell,
  marketingNavCss,
  useMarketingBoot,
} from "../marketingShell";
import rawMarkup from "./markup.html?raw";

const FEATURED_WORK_ORDER = [
  "singapore-tourism-board-isthisevensingapore",
  "hong-kong-tourism-board-herhongkong",
  "zambia-tourism-otm-mumbai-2026",
  "resorts-world-sentosa-go-bananas-in-minion-land",
  "resorts-world-cruises-premium-cruise-launch-dubai",
];
const FEATURED_WORK_RANK = new Map(FEATURED_WORK_ORDER.map((slug, index) => [slug, index]));

function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Card banners are multi-MB PNGs on Cloudinary. Serve resized WebP/AVIF via
// on-the-fly transforms and only fetch the first cards eagerly.
const CARD_WIDTHS = [400, 640, 800, 1200];
// Measured: cards are viewport - 48px on mobile and ~508px wide in the desktop two-column grid.
const CARD_SIZES = "(max-width: 767px) calc(100vw - 48px), (max-width: 1100px) 45vw, 520px";
// CMS banners are stored as /uploads/<cloudinaryId>.<ext>, which server.cjs 302-redirects to
// the full-size Cloudinary original. Point straight at Cloudinary to skip that uncached hop.
const CLOUDINARY_UPLOAD_BASE = `https://res.cloudinary.com/${
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dbhrpsnzg"
}/image/upload/`;
const CARD_IMG =
  /<img\b([^>]*?)\ssrc="(?:(https:\/\/res\.cloudinary\.com\/[^"/]+\/image\/upload\/)([^"]+)|\/uploads\/([A-Za-z0-9_-]+\.(?:webp|png|jpe?g|gif|avif)))"([^>]*)>/gi;

function optimizeCardImages(html) {
  let index = 0;
  return html.replace(CARD_IMG, (tag, before, cloudinaryBase, cloudinaryRest, uploadFile, after) => {
    const base = cloudinaryBase || CLOUDINARY_UPLOAD_BASE;
    // Same mapping as server.cjs: IDs are case-sensitive, only the extension is lowercased.
    const rest = cloudinaryRest || uploadFile.replace(/\.[^.]+$/, (ext) => ext.toLowerCase());
    const i = index++;
    if (/\ssrcset=/.test(tag) || /^[a-z]{1,3}_[^/]*\//.test(rest)) return tag;
    const url = (w) => `${base}f_auto,q_auto,c_limit,w_${w}/${rest}`;
    const srcset = CARD_WIDTHS.map((w) => `${url(w)} ${w}w`).join(", ");
    const hints = i === 0 ? ' fetchpriority="high"' : ' loading="lazy"';
    return `<img${before} src="${url(800)}" srcset="${srcset}" sizes="${CARD_SIZES}"${hints} decoding="async"${after}>`;
  });
}

const workCardSlugs = (html) =>
  [...html.matchAll(/<a class="svc-project" href="([^"]+)"/g)].map((m) => m[1]).join("|");

// On a prerendered load, start from the snapshot already in #root so React's first
// render matches what the visitor is looking at instead of swapping in stale markup.
function initialWorkMarkup() {
  if (typeof document === "undefined" || window.__PRERENDERING__) return optimizeCardImages(rawMarkup);
  const prerendered = document.querySelector("#root .wrk-react-root");
  return prerendered?.querySelector(".svc-project") ? prerendered.innerHTML : optimizeCardImages(rawMarkup);
}

function renderWorkCardHtml(cs) {
  if (!cs) return "";
  const card = applyCaseStudySeo(cs);
  const href = card.slug ? (card.slug.startsWith("/") ? card.slug : `/work/${card.slug}`) : "/work";
  const caption = card.serviceCaption || card.intro || card.caption || "";
  const title = card.title || "";
  const bannerImage = card.bannerImage || "";
  return `      <a class="svc-project" href="${esc(href)}">
       <div class="svc-project__media">
        <img alt="${esc(title)}" src="${esc(bannerImage)}" width="1200" height="600" style="object-fit: contain; width: 100%; height: 100%;"/>
       </div>
       <div class="svc-project__bar">
        <h3 class="svc-project__title">${esc(title)}</h3>
        <p class="svc-project__caption">${esc(caption)}</p>
       </div>
      </a>`;
}

function buildWorkDynamicMarkup(baseHtml, list) {
  if (!list || list.length === 0) {
    const match = baseHtml.match(/(<div class="svc-projects">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/);
    if (!match) return baseHtml;
    const cards = match[2].match(/<a class="svc-project"[\s\S]*?<\/a>/g);
    if (!cards?.length) return baseHtml;
    const ordered = [...cards].sort((a, b) => {
      const slugA = a.match(/href="\/work\/([^"]+)"/)?.[1];
      const slugB = b.match(/href="\/work\/([^"]+)"/)?.[1];
      const rankA = FEATURED_WORK_RANK.get(slugA);
      const rankB = FEATURED_WORK_RANK.get(slugB);
      if (rankA !== undefined || rankB !== undefined) {
        if (rankA === undefined) return 1;
        if (rankB === undefined) return -1;
        return rankA - rankB;
      }
      return 0;
    });
    return baseHtml.replace(match[0], `${match[1]}\n${ordered.join("\n")}\n${match[3]}`);
  }
  const cardsHtml = list.map(renderWorkCardHtml).join("\n");
  const regex = /(<div class="svc-projects">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;
  if (!regex.test(baseHtml)) return baseHtml;
  return baseHtml.replace(regex, (_m, start, _old, end) => `${start}\n${cardsHtml}\n     ${end}`);
}

const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260915t`,
];
const SCRIPT_BASES = [`${ASSET}/js/about.js?v=20260915b`];

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://melangedigital.co" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://melangedigital.co/work" },
  ],
};

const COLLECTION = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://melangedigital.co/work#webpage",
  url: "https://melangedigital.co/work",
  name: "Our Work | Case Studies | Mélange Digital",
  description:
    "See how Mélange Digital turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike.",
  isPartOf: { "@type": "WebSite", name: "Mélange Digital", url: "https://melangedigital.co" },
};

const Work = () => {
  const [markup, setMarkup] = useState(initialWorkMarkup);
  const cssReady = useMarketingBoot("wrk", CSS, SCRIPT_BASES);

  useEffect(() => {
    let active = true;
    let idleHandle;

    const loadWorkCaseStudies = async () => {
      try {
        // Firebase is ~400KB of JS; keep it out of the page's critical path.
        const [{ db }, { loadCaseStudies }] = await Promise.all([
          import("../../../firebase"),
          import("../../../constants/caseStudyData"),
        ]);
        if (!active || !db) return;
        const list = await loadCaseStudies();
        if (!active || list.length === 0) return;

        const workSorted = [...list].sort((a, b) => {
          const rankA = FEATURED_WORK_RANK.get(a.slug);
          const rankB = FEATURED_WORK_RANK.get(b.slug);
          if (rankA !== undefined || rankB !== undefined) {
            if (rankA === undefined) return 1;
            if (rankB === undefined) return -1;
            return rankA - rankB;
          }
          if (a.sortOrder !== undefined && b.sortOrder !== undefined) return a.sortOrder - b.sortOrder;
          if (a.sortOrder !== undefined) return -1;
          if (b.sortOrder !== undefined) return 1;
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });

        const next = optimizeCardImages(buildWorkDynamicMarkup(rawMarkup, workSorted));
        // Prerendered snapshot already shows these cards; skip a full re-render when nothing changed.
        setMarkup((current) => (workCardSlugs(current) === workCardSlugs(next) ? current : next));
      } catch (err) {
        console.warn("Could not load dynamic work case studies:", err);
      }
    };

    if (window.__PRERENDERING__ || !("requestIdleCallback" in window)) {
      loadWorkCaseStudies();
    } else {
      idleHandle = window.requestIdleCallback(loadWorkCaseStudies, { timeout: 4000 });
    }
    return () => {
      active = false;
      if (idleHandle) window.cancelIdleCallback(idleHandle);
    };
  }, []);

  useEffect(() => {
    if (!cssReady) return;

    const measureButtons = () => {
      const root = document.querySelector(".wrk-react-root");
      if (!root) return;
      const btns = root.querySelectorAll(".c2a-button, .let-s-collaborate, .hero-download-btn, .btn-anim");
      btns.forEach((btn) => {
        const icon = btn.querySelector(".btn-anim__icon, .hero-btn-icon");
        if (!icon) return;
        const btnRect = btn.getBoundingClientRect();
        const iconRect = icon.getBoundingClientRect();
        if (!btnRect.width || !iconRect.width) return;
        const styles = window.getComputedStyle(btn);
        const padLeft = parseFloat(styles.paddingLeft) || 8;
        const targetX = btnRect.left + padLeft + iconRect.width / 2;
        const currentX = iconRect.left + iconRect.width / 2;
        btn.style.setProperty("--arrow-shift", `${Math.round(targetX - currentX)}px`);
      });
    };

    measureButtons();
    const t1 = setTimeout(measureButtons, 50);
    const t2 = setTimeout(measureButtons, 250);
    window.addEventListener("resize", measureButtons);
    document.fonts?.ready?.then(measureButtons).catch(() => {});
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measureButtons);
    };
  }, [markup, cssReady]);

  return (
    <>
      <Helmet>
        <title>Our Work | Case Studies | Mélange Digital</title>
        <meta
          name="description"
          content="See how Mélange Digital turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike."
        />
        <link rel="canonical" href="https://melangedigital.co/work" data-rh="true" />
        {/* Fonts come from the shared non-blocking <link> in index.html. */}
        <base href="/destination-marketing-agency/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melangedigital.co/work" />
        <meta property="og:title" content="Our Work | Case Studies | Mélange Digital" />
        <meta
          property="og:description"
          content="See how Mélange Digital turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike."
        />
        <meta property="og:image" content="https://melangedigital.co/og-work.jpg" />
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB)}</script>
        <script type="application/ld+json">{JSON.stringify(COLLECTION)}</script>
        <style type="text/css">{marketingNavCss("wrk")}</style>
      </Helmet>

      <MarketingShell slug="wrk" cssReady={cssReady} markup={markup} />
    </>
  );
};

export default Work;
