import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../../layout";
import markup from "./markup.html?raw";

const ASSET = "/destination-marketing-agency";
const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260824az`,
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
  name: "About Mélange Digital: Our Story, Mission & Vision",
  url: "https://melangedigital.co/about",
  description:
    "Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "Mélange Digital", url: "https://melangedigital.co" },
  about: {
    "@type": "LocalBusiness",
    name: "Mélange Digital",
    url: "https://melangedigital.co",
    logo: "https://melangedigital.co/assets/mainLogo-8756aff9.png",
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
  { name: "Sanket Bolinjkar", jobTitle: "Founder & CEO" },
  { name: "Ekaterina Bolinjkar", jobTitle: "Head of HR & Finance" },
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

function loadCss(href) {
  const existing = document.querySelector(`link[data-abt-css="${href}"]`);
  if (existing) {
    return existing.sheet
      ? Promise.resolve()
      : new Promise((resolve) => {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => resolve(), { once: true });
        });
  }
  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute("data-abt-css", href);
    link.onload = () => resolve();
    link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.setAttribute("data-abt-js", "1");
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

function showBootLoader(show) {
  document.getElementById("boot-loader")?.classList.toggle("hidden", !show);
}

function teardown() {
  document.querySelectorAll("link[data-abt-css]").forEach((el) => el.remove());
  document.querySelectorAll("script[data-abt-js]").forEach((el) => el.remove());
}

const AboutTourism = () => {
  const rootRef = useRef(null);
  const bootId = useRef(0);
  const [cssReady, setCssReady] = useState(false);

  useLayoutEffect(() => {
    showBootLoader(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");
    document.body.classList.add("body", "abt-react");

    let baseEl = document.querySelector("base[data-abt-base]");
    if (!baseEl) {
      baseEl = document.createElement("base");
      baseEl.setAttribute("data-abt-base", "1");
      document.head.insertBefore(baseEl, document.head.firstChild);
    }
    baseEl.setAttribute("href", `${ASSET}/`);

    const id = ++bootId.current;
    let cancelled = false;

    (async () => {
      teardown();
      setCssReady(false);
      await Promise.all(CSS.map(loadCss));
      if (cancelled || bootId.current !== id) return;
      setCssReady(true);
      showBootLoader(false);

      const bust = `abt=${id}`;
      try {
        for (const base of SCRIPT_BASES) {
          if (cancelled || bootId.current !== id) return;
          const sep = base.includes("?") ? "&" : "?";
          await loadScript(`${base}${sep}${bust}`);
        }
      } catch (err) {
        if (!cancelled) console.error("[AboutTourism]", err);
      }
    })();

    return () => {
      cancelled = true;
      showBootLoader(false);
      document.body.classList.remove("body", "abt-react");
      document.querySelectorAll("base[data-abt-base]").forEach((el) => el.remove());
      teardown();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About Mélange Digital: Our Story, Mission & Vision</title>
        <meta
          name="description"
          content="Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story"
        />
        <link rel="canonical" href="https://melangedigital.co/about" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Lato:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/about" />
        <meta property="og:title" content="About Mélange Digital: Our Story, Mission & Vision" />
        <meta
          property="og:description"
          content="Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story"
        />
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB)}</script>
        <script type="application/ld+json">{JSON.stringify(ABOUT_PAGE)}</script>
        <script type="application/ld+json">{JSON.stringify(LEADERSHIP_LIST)}</script>
        <style type="text/css">{`
          body.abt-react .font-bricolage.fixed {
            z-index: 100 !important;
          }
          body.abt-react .font-bricolage.fixed,
          body.abt-react .font-bricolage.fixed *,
          body.abt-react > .font-bricolage,
          body.abt-react > .font-bricolage * {
            font-family: "Bricolage Grotesque", sans-serif !important;
          }
          body.abt-react .font-bricolage.fixed a,
          body.abt-react > .font-bricolage a {
            text-decoration: none !important;
            color: inherit;
          }
          body.abt-react {
            --nav-sticky-offset: 64px;
            padding-top: 4rem;
            background: #fff;
          }
          @media (min-width: 640px) {
            body.abt-react {
              --nav-sticky-offset: 84.8px;
              padding-top: 5.3rem;
            }
          }
        `}</style>
      </Helmet>

      <Navbar />
      <div
        id="siteNav"
        className="pointer-events-none invisible fixed top-0 left-0 z-0 w-full h-16 sm:h-[5.3rem]"
        aria-hidden="true"
      />

      <div
        ref={rootRef}
        className={`abt-react-root${cssReady ? " abt-css-ready" : ""}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
};

export default AboutTourism;
