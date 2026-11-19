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
import { cardHrefs, optimizeCardImages, prerenderedMarkup } from "../../../utils/cardImages";

const FEATURED_WORK_ORDER = [
  "singapore-tourism-board-isthisevensingapore",
  "hong-kong-tourism-board-herhongkong",
  "zambia-tourism-otm-mumbai-2026",
  "resorts-world-sentosa-go-bananas-in-minion-land",
  "resorts-world-cruises-premium-cruise-launch-dubai",
];
const FEATURED_WORK_RANK = new Map(FEATURED_WORK_ORDER.map((slug, index) => [slug, index]));

/** Work-page-only card copy; overrides the CMS title/caption. Services cards are unaffected. */
const WORK_CARD_TEXT = {
  "singapore-tourism-board-isthisevensingapore": {
    title: "Singapore Tourism Board: #IsThisEvenSingapore",
    caption: "21 creators across five youth subcultures drove 190M views and an 18% YoY rise in Indian arrivals, and grew the under-35 traveller share from 31% to 39%.",
  },
  "hong-kong-tourism-board-herhongkong": {
    title: "Hong Kong Tourism Board: #HerHongKong",
    caption: "Four South Indian actresses recast Hong Kong for women travellers, lifting female arrivals 22% YoY and leisure share by 15 points as stays grew to three nights.",
  },
  "zambia-tourism-otm-mumbai-2026": {
    title: "Zambia Tourism: OTM Mumbai 2026",
    caption: "Client-reported results from a one-year mandate include 500+ trade connections, approximately $3.2M from seven MICE groups (75–700 guests) and 18 influencers.",
  },
  "resorts-world-sentosa-go-bananas-in-minion-land": {
    title: "Resorts World Sentosa: Go Bananas in Minion Land",
    caption: "Five regional-language creators on ShareChat and Moj drove 86M+ views, 13.7M+ reach, 4.75% engagement, a 6.80% consideration lift and 4,927 tracked bookings.",
  },
  "resorts-world-cruises-premium-cruise-launch-dubai": {
    title: "Dream Cruises: Premium Cruise Launch, Dubai",
    caption: "Run as Resorts World Cruises, this Dubai launch with 44 creators drove $2.3M+ in attributed sales, 90M+ impressions and 250K+ clicks.",
  },
  "hong-kong-tourism-board-x-ram-charan-esquire-india-cover": {
    title: "Ram Charan x Hong Kong: Esquire India Cover",
    caption: "A 16+ page Esquire India cover built Hong Kong’s luxury appeal in South India without a celebrity talent fee, delivering ~10X ROI and $2.5M earned media value.",
  },
  "singapore-tourism-board-x-divine-saucy-music-video": {
    title: "Singapore x DIVINE: Saucy Music Video",
    caption: "DIVINE’s Saucy music video, shot at Singapore landmarks, kept the city culturally relevant to India’s under-35 and lifted youth travel affinity by 21 points.",
  },
  "dharma-productions-x-singapore-tourism-board-jigra": {
    title: "Dharma Productions x Singapore: Jigra",
    caption: "Over 50% of the Bollywood film Jigra was shot in Singapore, establishing it as a filming destination and sparking 6+ follow-on production conversations.",
  },
  "mall-activation-for-saudi-tourism": {
    title: "Saudi Tourism: Mall Activation",
    caption: "A 4-day mall activation shifted Indian views of Saudi Arabia from religious to leisure, with 4,100+ walk-in signups, 2.1M+ radio reach and 1,200+ packages sold.",
  },
  "costa-cruises-introducing-luxury-cruising-to-india": {
    title: "Costa Cruises: India’s Luxury Cruise Launch",
    caption: "Costa Cruises launched its maiden Italy-to-India voyage in a market with no prior cruise category awareness or behavioural precedent drove $430K+ in attributed sales.",
  },
};

function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// The first Work card is the page's LCP image.
const optimizeWorkCards = (html) => optimizeCardImages(html, { eagerFirst: true });

function initialWorkMarkup() {
  return prerenderedMarkup(".wrk-react-root") ?? optimizeWorkCards(rawMarkup);
}

function renderWorkCardHtml(cs) {
  if (!cs) return "";
  const card = applyCaseStudySeo(cs);
  const href = card.slug ? (card.slug.startsWith("/") ? card.slug : `/work/${card.slug}`) : "/work";
  const workText = WORK_CARD_TEXT[card.slug];
  const caption = workText?.caption || card.serviceCaption || card.intro || card.caption || "";
  const title = workText?.title || card.title || "";
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
  `${ASSET}/css/melange.css?v=20261119a`,
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
        // Firestore REST, not the SDK: no ~400KB of JS (and no Auth), and no streaming
        // connection left open, which kept PageSpeed tracing (and counting analytics).
        const { runQuery } = await import("../../../utils/firestoreRest");
        if (!active) return;
        const list = (await runQuery("casestudies")).map((d) => ({ id: d.id, ...d.data }));
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

        const next = optimizeWorkCards(buildWorkDynamicMarkup(rawMarkup, workSorted));
        // Prerendered snapshot already shows these cards; skip a full re-render when nothing changed.
        setMarkup((current) => (cardHrefs(current) === cardHrefs(next) ? current : next));
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
