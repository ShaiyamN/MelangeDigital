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
  `${ASSET}/css/melange.css?v=20260901b`,
];
const SCRIPT_BASES = [`${ASSET}/js/about.js?v=20260824ap`];

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
  const cssReady = useMarketingBoot("wrk", CSS, SCRIPT_BASES);

  return (
    <>
      <Helmet>
        <title>Our Work | Case Studies | Melange Digital</title>
        <meta
          name="description"
          content="See how Melange turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike."
        />
        <link rel="canonical" href="https://melangedigital.co/work" />
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
