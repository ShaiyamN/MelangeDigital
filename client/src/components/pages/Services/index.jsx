import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DEFAULT_SERVICE_CARDS, getServiceCardAltText, resolveServiceSlots } from "../../../constants/serviceCards";
import {
  MARKETING_ASSET as ASSET,
  MarketingShell,
  marketingNavCss,
  useMarketingBoot,
} from "../marketingShell";
import rawMarkup from "./markup.html?raw";
import { cardSignature, optimizeCardImages, prerenderedMarkup } from "../../../utils/cardImages";

function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderServiceCardHtml(card) {
  if (!card) return "";
  const href = card.slug ? (card.slug.startsWith("/") ? card.slug : `/work/${card.slug}`) : "/work";
  return `      <a class="svc-project" href="${esc(href)}">
       <div class="svc-project__media">
        <img alt="${esc(getServiceCardAltText(card))}" src="${esc(card.bannerImage)}" width="1200" height="600" style="object-fit: contain; width: 100%; height: 100%;" />
       </div>
       <div class="svc-project__bar">
        <h3 class="svc-project__title">${esc(card.title)}</h3>
        <p class="svc-project__caption">${esc(card.caption || "")}</p>
       </div>
      </a>`;
}

function buildDynamicMarkup(baseHtml, settings, caseStudiesList = null) {
  let result = baseHtml;
  for (const serviceId of Object.keys(DEFAULT_SERVICE_CARDS)) {
    const [card1, card2] = resolveServiceSlots(serviceId, settings, caseStudiesList);
    const newCardsHtml = `\n${renderServiceCardHtml(card1)}\n${renderServiceCardHtml(card2)}\n     `;
    const regex = new RegExp(
      `(<section[^>]*id="${serviceId}"[\\s\\S]*?<div class="svc-projects">)([\\s\\S]*?)(<\\/div>\\s*<div class="svc-cta-row">)`
    );
    result = result.replace(regex, (_m, start, _old, end) => `${start}${newCardsHtml}${end}`);
  }
  return result;
}

const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260909c`,
];
const SCRIPT_BASES = [`${ASSET}/js/services.js?v=20260824w`];

/** JSON-LD for /services is injected into the initial HTML by Express (page-schemas.cjs). */
const Services = () => {
  const cssReady = useMarketingBoot("svc", CSS, SCRIPT_BASES);
  // Prerendered loads start from the snapshot (already has CMS cards + resized images).
  const [markup, setMarkup] = useState(
    () => prerenderedMarkup(".svc-react-root") ?? optimizeCardImages(buildDynamicMarkup(rawMarkup, null)),
  );

  useEffect(() => {
    let active = true;
    let idleHandle;
    const loadServiceCards = async () => {
      try {
        // Firebase is ~400KB of JS; keep it out of the page's critical path.
        const [{ db }, { doc, getDoc, collection, getDocs }] = await Promise.all([
          import("../../../firebase"),
          import("firebase/firestore"),
        ]);
        if (!active || !db) return;
        const [snap, csSnap] = await Promise.all([
          getDoc(doc(db, "settings", "service_cards")).catch(() => null),
          getDocs(collection(db, "casestudies")).catch(() => null),
        ]);
        if (!active) return;
        const settingsData = snap && snap.exists() ? snap.data() : null;
        const caseStudiesList = csSnap && !csSnap.empty
          ? csSnap.docs.map((d) => ({ id: d.id, ...d.data() }))
          : null;
        if (settingsData || caseStudiesList) {
          const next = optimizeCardImages(buildDynamicMarkup(rawMarkup, settingsData, caseStudiesList));
          // Skip the full re-render when the prerendered cards already match the CMS.
          setMarkup((current) => (cardSignature(current) === cardSignature(next) ? current : next));
        }
      } catch (err) {
        console.warn("Could not load dynamic service cards:", err);
      }
    };

    if (window.__PRERENDERING__ || !("requestIdleCallback" in window)) {
      loadServiceCards();
    } else {
      idleHandle = window.requestIdleCallback(loadServiceCards, { timeout: 4000 });
    }
    return () => {
      active = false;
      if (idleHandle) window.cancelIdleCallback(idleHandle);
    };
  }, []);

  useEffect(() => {
    if (!cssReady) return;

    const measureButtons = () => {
      const root = document.querySelector(".svc-react-root");
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
        <title>Digital Marketing for Travel and Tourism | Mélange Digital</title>
        <meta
          name="description"
          content="Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs."
        />
        <link rel="canonical" href="https://melangedigital.co/services" data-rh="true" />
        {/* Fonts come from the shared non-blocking <link> in index.html. */}
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/services" />
        <meta property="og:title" content="Digital Marketing for Travel and Tourism | Mélange Digital" />
        <meta
          property="og:description"
          content="Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs."
        />
        <meta property="og:image" content="https://melangedigital.co/services-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Digital Marketing for Travel and Tourism | Mélange Digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing for Travel and Tourism | Mélange Digital" />
        <meta
          name="twitter:description"
          content="Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs."
        />
        <meta name="twitter:image" content="https://melangedigital.co/services-og.png" />
        <style type="text/css">{marketingNavCss("svc")}</style>
      </Helmet>

      <MarketingShell slug="svc" cssReady={cssReady} markup={markup} />
    </>
  );
};

export default Services;
