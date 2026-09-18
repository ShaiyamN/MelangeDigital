import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  MARKETING_ASSET as ASSET,
  MarketingShell,
  marketingNavCss,
  useMarketingBoot,
} from "../marketingShell";
import rawMarkup from "./markup.html?raw";

function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderWorkCardHtml(cs) {
  if (!cs) return "";
  const href = cs.slug ? (cs.slug.startsWith("/") ? cs.slug : `/work/${cs.slug}`) : "/work";
  const caption = cs.serviceCaption || cs.intro || cs.caption || "";
  const title = cs.title || "";
  const bannerImage = cs.bannerImage || "";
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
  if (!list || list.length === 0) return baseHtml;
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
  name: "Our Work | Case Studies | Melange Digital",
  description:
    "See how Melange turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike.",
  isPartOf: { "@type": "WebSite", name: "Mélange Digital", url: "https://melangedigital.co" },
};

const Work = () => {
  const [markup, setMarkup] = useState(rawMarkup);
  const cssReady = useMarketingBoot("wrk", CSS, SCRIPT_BASES);

  useEffect(() => {
    let active = true;

    const loadWorkCaseStudies = async () => {
      try {
        if (!db) return;
        const querySnapshot = await getDocs(collection(db, "casestudies"));
        if (!active || querySnapshot.empty) return;
        const list = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));

        const workSorted = [...list].sort((a, b) => {
          if (a.sortOrder !== undefined && b.sortOrder !== undefined) return a.sortOrder - b.sortOrder;
          if (a.sortOrder !== undefined) return -1;
          if (b.sortOrder !== undefined) return 1;
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });

        setMarkup(buildWorkDynamicMarkup(rawMarkup, workSorted));
      } catch (err) {
        console.warn("Could not load dynamic work case studies:", err);
      }
    };

    loadWorkCaseStudies();
    return () => {
      active = false;
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
        <title>Our Work | Case Studies | Melange Digital</title>
        <meta
          name="description"
          content="See how Melange turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike."
        />
        <link rel="canonical" href="https://melangedigital.co/work" data-rh="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Baskervville:ital@1&family=Libre+Baskerville:ital@1&family=Lato:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melangedigital.co/work" />
        <meta property="og:title" content="Our Work | Case Studies | Melange Digital" />
        <meta
          property="og:description"
          content="See how Melange turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike."
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
