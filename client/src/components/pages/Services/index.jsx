import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { DEFAULT_SERVICE_CARDS } from "../../../constants/serviceCards";
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

function renderServiceCardHtml(card) {
  if (!card) return "";
  const href = card.slug ? (card.slug.startsWith("/") ? card.slug : `/work/${card.slug}`) : "/work";
  return `      <a class="svc-project" href="${esc(href)}">
       <div class="svc-project__media">
        <img alt="${esc(card.title)}" src="${esc(card.bannerImage)}" width="1200" height="600" style="object-fit: cover; width: 100%; height: 100%;" />
       </div>
       <div class="svc-project__bar">
        <h3 class="svc-project__title">${esc(card.title)}</h3>
        <p class="svc-project__caption">${esc(card.caption || "")}</p>
       </div>
      </a>`;
}

function buildDynamicMarkup(baseHtml, settings) {
  if (!settings) return baseHtml;

  let result = baseHtml;
  for (const [serviceId, serviceData] of Object.entries(DEFAULT_SERVICE_CARDS)) {
    const custom = settings[serviceId];
    if (!custom) continue;

    const card1 = custom.slot1 !== undefined && custom.slot1 !== null ? custom.slot1 : serviceData.slot1;
    const card2 = custom.slot2 !== undefined && custom.slot2 !== null ? custom.slot2 : serviceData.slot2;

    const newCardsHtml = `\n${renderServiceCardHtml(card1)}\n${renderServiceCardHtml(card2)}\n     `;
    const regex = new RegExp(
      `(<section[^>]*id="${serviceId}"[\\s\\S]*?<div class="svc-projects">)([\\s\\S]*?)(<\\/div>\\s*<div class="svc-cta-row">)`
    );

    result = result.replace(regex, `$1${newCardsHtml}$3`);
  }

  return result;
}

const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260831d`,
];
const SCRIPT_BASES = [`${ASSET}/js/services.js?v=20260824w`];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does digital marketing for travel and tourism include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing for travel and tourism includes influencer and celebrity marketing, branded content and IP integrations, experiential activations, FAM trips and PR, all built specifically for destinations, DMOs, NTOs and travel brands, not adapted from retail or FMCG playbooks.",
      },
    },
    {
      "@type": "Question",
      name: "What is digital marketing for DMOs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing for DMOs is the full stack of services we offer specifically for destination marketing organisations. We build campaigns that survive government-level approval chains, prove arrivals rather than impressions, and understand procurement realities a typical ad agency has never worked inside.",
      },
    },
    {
      "@type": "Question",
      name: "Does Melange handle influencer marketing in travel and tourism, or only celebrity campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Melange's influencer marketing in travel and tourism spans everything from mega-follower celebrities to regional-language creators on platforms like ShareChat and Moj, cast by subculture fit rather than follower count alone.",
      },
    },
    {
      "@type": "Question",
      name: "Is marketing for NTOs different from marketing other travel brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NTO marketing means working within a national tourism organisation's mandate, budget cycles and ministerial reporting lines: categorically different from marketing a private travel brand, and a large part of what Melange specialises in.",
      },
    },
  ],
};

const Services = () => {
  const cssReady = useMarketingBoot("svc", CSS, SCRIPT_BASES);
  const [markup, setMarkup] = useState(rawMarkup);

  useEffect(() => {
    let active = true;
    const loadServiceCards = async () => {
      try {
        const snap = await getDoc(doc(db, "settings", "service_cards"));
        if (snap.exists() && active) {
          const updated = buildDynamicMarkup(rawMarkup, snap.data());
          setMarkup(updated);
        }
      } catch (err) {
        console.warn("Could not load dynamic service cards:", err);
      }
    };

    loadServiceCards();
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Travel and Tourism | Melange</title>
        <meta
          name="description"
          content="Melange offers digital marketing services for the travel and tourism industry, from influencer marketing to branding, built for destinations, DMOs, and NTOs."
        />
        <link rel="canonical" href="https://melangedigital.co/services" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Baskervville:ital@1&family=Libre+Baskerville:ital@1&family=Lato:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/services" />
        <meta property="og:title" content="Digital Marketing for Travel and Tourism | Melange" />
        <meta
          property="og:description"
          content="Melange offers digital marketing services for the travel and tourism industry, from influencer marketing to branding, built for destinations, DMOs, and NTOs."
        />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Travel and Tourism Marketing",
            url: "https://melangedigital.co/services",
            provider: {
              "@type": "Organization",
              name: "Melange Digital",
              url: "https://melangedigital.co",
            },
            description:
              "Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tourism marketing services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Influencer & Celebrity Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branded Content & IPs" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Experiential Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "FAM Trips + PR" } },
              ],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://melangedigital.co/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://melangedigital.co/services" },
            ],
          })}
        </script>
        <style type="text/css">{marketingNavCss("svc")}</style>
      </Helmet>

      <MarketingShell slug="svc" cssReady={cssReady} markup={markup} />
    </>
  );
};

export default Services;
