import { Helmet } from "react-helmet-async";
import {
  MARKETING_ASSET as ASSET,
  MarketingShell,
  marketingNavCss,
  useMarketingBoot,
} from "../marketingShell";
import markup from "./markup.html?raw";

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
        text: "Digital marketing for travel and tourism includes influencer and celebrity marketing, branded content and IP integration, experiential activations, FAM trips and PR, all built specifically for destinations, DMOs, NTOs and travel brands, not adapted from retail or FMCG playbooks.",
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

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Travel and Tourism | Melange</title>
        <meta
          name="description"
          content="Melange offers digital marketing services for the travel and tourism industry, from influencer marketing to branded content, built for destinations, DMOs and NTOs."
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
          content="Melange offers digital marketing services for the travel and tourism industry, from influencer marketing to branded content, built for destinations, DMOs and NTOs."
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
