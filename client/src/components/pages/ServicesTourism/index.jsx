import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../../layout";
import markup from "./markup.html?raw";

const ASSET = "/destination-marketing-agency";
const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260824az`,
];
const SCRIPT_BASES = [`${ASSET}/js/services.js?v=20260824w`];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Melange Digital specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melange is a travel and tourism marketing agency. We decode the culture, narrate the story, match the creator, and convert emotion into a booking. Success is measured in arrivals, not impressions.",
      },
    },
    {
      "@type": "Question",
      name: "How do you choose creators for a destination campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cast for credibility inside a subculture, not follower count. Every creator is pressure-tested against audience data before a contract is signed, and casting, negotiation, content and reporting run under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Can a destination live inside film or music IP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We land the production or the track, not just a placement. The destination lives inside the narrative, and our film and music network gets a destination cast, not just pitched.",
      },
    },
    {
      "@type": "Question",
      name: "What does an experiential activation actually deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We turn a booth, mall or trade-show floor into the highest-performing square foot in travel. Activations are designed, fabricated and staffed end to end, and engineered to capture a qualified enquiry, not just a photo.",
      },
    },
    {
      "@type": "Question",
      name: "How are FAM trips and PR different from a media buy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cover story lands harder than a media buy. We host, negotiate and staff trips and stalls in person, and our publisher and journalist network is built over years, not rented per campaign.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure a campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By arrivals, enquiries, earned media and follow-on production. Every campaign is built around a specific, trackable outcome agreed before work begins.",
      },
    },
  ],
};

function loadCss(href) {
  const existing = document.querySelector(`link[data-svc-css="${href}"]`);
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
    link.setAttribute("data-svc-css", href);
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
    s.setAttribute("data-svc-js", "1");
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

function showBootLoader(show) {
  document.getElementById("boot-loader")?.classList.toggle("hidden", !show);
}

function teardown() {
  document.querySelectorAll("link[data-svc-css]").forEach((el) => el.remove());
  document.querySelectorAll("script[data-svc-js]").forEach((el) => el.remove());
}

const ServicesTourism = () => {
  const rootRef = useRef(null);
  const bootId = useRef(0);
  const [cssReady, setCssReady] = useState(false);

  useLayoutEffect(() => {
    showBootLoader(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");
    document.body.classList.add("body", "svc-react");

    let baseEl = document.querySelector("base[data-svc-base]");
    if (!baseEl) {
      baseEl = document.createElement("base");
      baseEl.setAttribute("data-svc-base", "1");
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

      const bust = `svc=${id}`;
      try {
        for (const base of SCRIPT_BASES) {
          if (cancelled || bootId.current !== id) return;
          const sep = base.includes("?") ? "&" : "?";
          await loadScript(`${base}${sep}${bust}`);
        }
      } catch (err) {
        if (!cancelled) console.error("[ServicesTourism]", err);
      }
    })();

    return () => {
      cancelled = true;
      showBootLoader(false);
      document.body.classList.remove("body", "svc-react");
      document.querySelectorAll("base[data-svc-base]").forEach((el) => el.remove());
      teardown();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Travel & Tourism Marketing Services | Melange Digital</title>
        <meta
          name="description"
          content="Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards. How Melange engineers desire to arrivals."
        />
        <link rel="canonical" href="https://melangedigital.co/services" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Lato:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/services" />
        <meta property="og:title" content="Travel & Tourism Marketing Services | Melange Digital" />
        <meta
          property="og:description"
          content="Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards."
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
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branded Content & IP" } },
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
        <style type="text/css">{`
          body.svc-react .font-bricolage.fixed {
            z-index: 100 !important;
          }
          body.svc-react .font-bricolage.fixed,
          body.svc-react .font-bricolage.fixed *,
          body.svc-react > .font-bricolage,
          body.svc-react > .font-bricolage * {
            font-family: "Bricolage Grotesque", sans-serif !important;
          }
          body.svc-react .font-bricolage.fixed a,
          body.svc-react > .font-bricolage a {
            text-decoration: none !important;
            color: inherit;
          }
          body.svc-react {
            --nav-sticky-offset: 64px;
            padding-top: 4rem;
            background: #fff;
          }
          @media (min-width: 640px) {
            body.svc-react {
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
        className={`svc-react-root${cssReady ? " svc-css-ready" : ""}`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
};

export default ServicesTourism;
