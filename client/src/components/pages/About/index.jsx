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
  `${ASSET}/css/melange.css?v=20260904s`,
];
const SCRIPT_BASES = [
  "/about/network-sphere.js?v=20260902f",
  "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.js",
  `${ASSET}/js/melange.js?v=20260902c`,
  `${ASSET}/js/about.js?v=20260915b`,
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
  name: "Best Destination Marketing Agency | Melange Digital",
  url: "https://melangedigital.co/about",
  description:
    "We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy.",
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

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Melange Digital do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melange Digital is a destination marketing agency specialising in DMO, NTO marketing, that turn cultural insight into travel bookings. We work with national tourism boards, destination brands and travel tech platforms, building campaigns run by people who've worked inside the industry they now serve.",
      },
    },
    {
      "@type": "Question",
      name: "How is a travel marketing agency different from a regular ad agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular ad agency buys media and hopes it lands. A travel marketing agency starts with why a destination matters to a specific audience, builds the story inside that culture, then engineers the path to a booked trip. The difference shows up in arrivals, not just impressions.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a destination marketing agency different from a general marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A general agency serves any industry. A destination marketing agency works exclusively with tourism boards, DMOs, and travel brands, understanding budget cycles, ministerial reporting, and traveller psychology specific to this category. That focus is why boards trust Melange with mandates broader agencies rarely see.",
      },
    },
    {
      "@type": "Question",
      name: "What results can a destination expect from travel advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real travel advertising is measured in arrivals and bookings, not clicks or views. Melange's campaigns have driven double-digit YOY arrival growth and multi-million-dollar attributed sales for tourism boards and travel brands. Every campaign is built around a specific, trackable outcome agreed before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to work with a travel and tourism marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the mandate: a single campaign, a market launch, or an ongoing retainer all price differently. Melange scopes every engagement around the board or brand's specific goals rather than a flat package. The fastest way to get a real number is a strategy call.",
      },
    },
  ],
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

const About = () => {
  const cssReady = useMarketingBoot("abt", CSS, SCRIPT_BASES);

  return (
    <>
      <Helmet>
        <title>Best Destination Marketing Agency | Melange Digital</title>
        <meta
          name="description"
          content="We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy."
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
        <meta property="og:title" content="Best Destination Marketing Agency | Melange Digital" />
        <meta
          property="og:description"
          content="We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy."
        />
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB)}</script>
        <script type="application/ld+json">{JSON.stringify(ABOUT_PAGE)}</script>
        <script type="application/ld+json">{JSON.stringify(LEADERSHIP_LIST)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <style type="text/css">{`${marketingNavCss("abt")}
.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
body.abt-react .section-8 .accordion-toggle .text-block-30{font-size:18px!important;font-weight:500!important;line-height:1.4!important}
body.abt-react .section-8 .faq-more-btn{align-self:center!important}`}</style>
      </Helmet>

      <MarketingShell slug="abt" cssReady={cssReady} markup={markup} />
    </>
  );
};

export default About;
