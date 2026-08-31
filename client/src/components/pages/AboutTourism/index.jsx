import { Helmet } from "react-helmet-async";
import {
  TOURISM_ASSET as ASSET,
  TourismShell,
  tourismNavCss,
  useTourismBoot,
} from "../tourismPage";
import markup from "./markup.html?raw";

const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260831l`,
];
const SCRIPT_BASES = [
  "/about/network-sphere.js",
  `${ASSET}/js/about.js?v=20260824ap`,
];

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://melangedigital.co" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://melangedigital.co/about" },
  ],
};

const ABOUT_PAGE = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Best DMO Marketing Agency | About Melange Digital",
  url: "https://melangedigital.co/about",
  description:
    "Melange Digital is a DMO marketing agency and destination marketing specialist, built by people who've worked inside tourism boards. Meet the team.",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "Mélange Digital", url: "https://melangedigital.co" },
  about: {
    "@type": "LocalBusiness",
    name: "Mélange Digital",
    url: "https://melangedigital.co",
    logo: "https://melangedigital.co/logo.png",
    foundingDate: "2021",
    description:
      "Mélange Digital is a data-driven digital marketing agency that crafts emotionally resonant campaigns using AI-powered insights, cultural understanding, and performance strategies.",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 30, maxValue: 50 },
    areaServed: [{ "@type": "Country", name: "India" }],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "B12, 7th Floor, Silvio Heights, St. Inez Road, Santa Inez",
        addressLocality: "Panaji",
        addressRegion: "Goa",
        postalCode: "403001",
        addressCountry: "IN",
      },
    ],
  },
};

const LEADERS = [
  { name: "Sanket Bolinjkar", jobTitle: "Founder and Chief Executive Officer" },
  { name: "Ekaterina Bolinjkar", jobTitle: "Co-Founder, Finance and People" },
  { name: "Jason Dias", jobTitle: "Director of Growth & Strategy" },
  { name: "Kaustubh Shetye", jobTitle: "Director Creative Strategy & Operations" },
  { name: "Julien Cordon", jobTitle: "Regional Director, GCC" },
  { name: "Maria Masiri", jobTitle: "Regional Director, Africa" },
];

const LEADERSHIP_LIST = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mélange Digital Leadership Team",
  url: "https://melangedigital.co/about",
  itemListElement: LEADERS.map((person, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      worksFor: { "@type": "Organization", name: "Mélange Digital", url: "https://melangedigital.co" },
      url: "https://melangedigital.co/about",
    },
  })),
};

const AboutTourism = () => {
  const cssReady = useTourismBoot("abt", CSS, SCRIPT_BASES);

  return (
    <>
      <Helmet>
        <title>Best DMO Marketing Agency | About Melange Digital</title>
        <meta
          name="description"
          content="Melange Digital is a DMO marketing agency and destination marketing specialist, built by people who've worked inside tourism boards. Meet the team."
        />
        <link rel="canonical" href="https://melangedigital.co/about" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Baskervville:ital@1&family=Libre+Baskerville:ital@1&family=Lato:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/about" />
        <meta property="og:title" content="Best DMO Marketing Agency | About Melange Digital" />
        <meta
          property="og:description"
          content="Melange Digital is a DMO marketing agency and destination marketing specialist, built by people who've worked inside tourism boards. Meet the team."
        />
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB)}</script>
        <script type="application/ld+json">{JSON.stringify(ABOUT_PAGE)}</script>
        <script type="application/ld+json">{JSON.stringify(LEADERSHIP_LIST)}</script>
        <style type="text/css">{tourismNavCss("abt")}</style>
      </Helmet>

      <TourismShell slug="abt" cssReady={cssReady} markup={markup} />
    </>
  );
};

export default AboutTourism;
