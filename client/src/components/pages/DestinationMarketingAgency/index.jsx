import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer } from "../../layout";
import markup from "./markup.html?raw";

const ASSET = "/destination-marketing-agency";
const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/form.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260831a`,
  "https://unpkg.com/lenis@1.1.14/dist/lenis.css",
];

const SCRIPT_BASES = [
  `${ASSET}/js/jquery.js?site=6a2fe655a827b7d915b35c60`,
  `${ASSET}/js/melange.schunk.36b8fb49256177c8.js`,
  `${ASSET}/js/melange.schunk.435a162c7a78ae40.js`,
  `${ASSET}/js/site-home.js`,
  `${ASSET}/js/gsap.min.js`,
  `${ASSET}/js/splittext.min.js`,
  `${ASSET}/js/scrolltrigger.min.js`,
  "https://unpkg.com/lenis@1.1.14/dist/lenis.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.js",
  `${ASSET}/js/melange.js?v=20260821w`,
];

function loadCss(href) {
  const existing = document.querySelector(`link[data-dma-css="${href}"]`);
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
    link.setAttribute("data-dma-css", href);
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
    s.setAttribute("data-dma-js", "1");
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

// main.jsx clears the boot loader as soon as React mounts, which is well before these sheets land.
// Holding it over that gap shows the spinner instead of a blank page.
function showBootLoader(show) {
  document.getElementById("boot-loader")?.classList.toggle("hidden", !show);
}

function teardownDmaAssets() {
  document.querySelectorAll("link[data-dma-css]").forEach((el) => el.remove());
  document.querySelectorAll("script[data-dma-js]").forEach((el) => el.remove());
  if (window.__tourismLenis && typeof window.__tourismLenis.destroy === "function") {
    try {
      window.__tourismLenis.destroy();
    } catch (_) {
      /* ignore */
    }
    delete window.__tourismLenis;
  }
}

/**
 * Tourism landing as SPA home: React Navbar (same as old home) + tourism body shell.
 * Markup from tourism-landing-staging via scripts/extract-dma-markup.mjs.
 */
const DestinationMarketingAgency = () => {
  const rootRef = useRef(null);
  const bootId = useRef(0);
  const [cssReady, setCssReady] = useState(false);

  // Before paint, or the markup's first frame is a blank gated page and the spinner returns late.
  useLayoutEffect(() => {
    showBootLoader(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");
    document.body.classList.add("body", "dma-react");

    let baseEl = document.querySelector("base[data-dma-base]");
    if (!baseEl) {
      baseEl = document.createElement("base");
      baseEl.setAttribute("data-dma-base", "1");
      document.head.insertBefore(baseEl, document.head.firstChild);
    }
    baseEl.setAttribute("href", `${ASSET}/`);

    const spaLenis = window.__melangeLenis;
    if (spaLenis && typeof spaLenis.stop === "function") spaLenis.stop();

    const id = ++bootId.current;
    let cancelled = false;

    (async () => {
      teardownDmaAssets();
      setCssReady(false);
      await Promise.all(CSS.map(loadCss));
      if (cancelled || bootId.current !== id) return;
      setCssReady(true);
      showBootLoader(false);

      const bust = `dma=${id}`;
      try {
        for (const base of SCRIPT_BASES) {
          if (cancelled || bootId.current !== id) return;
          const sep = base.includes("?") ? "&" : "?";
          await loadScript(`${base}${sep}${bust}`);
        }
      } catch (err) {
        if (!cancelled) console.error("[DestinationMarketingAgency]", err);
      }
    })();

    return () => {
      cancelled = true;
      showBootLoader(false);
      document.body.classList.remove("body", "dma-react");
      document.querySelectorAll("base[data-dma-base]").forEach((el) => el.remove());
      teardownDmaAssets();
      if (spaLenis && typeof spaLenis.start === "function") spaLenis.start();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Global Travel & Tourism Marketing Agency | Melange Digital</title>
        <meta
          name="description"
          content="Melange is a travel and tourism marketing agency in India, turning cultural insight into arrivals for tourism boards and travel brands worldwide. Book a call."
        />
        <link rel="canonical" href="https://melangedigital.co/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Lato:wght@400;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/" />
        <meta property="og:title" content="Global Travel & Tourism Marketing Agency | Melange Digital" />
        <meta
          property="og:description"
          content="Melange is a travel and tourism marketing agency in India, turning cultural insight into arrivals for tourism boards and travel brands worldwide. Book a call."
        />
        <style type="text/css">{`
          /* Safety: hide leftover Webflow nav if cached markup still has it */
          body.dma-react .div-block-47,
          body.dma-react .mobile-menu-overlay,
          body.dma-react #mobileNavDrawer {
            display: none !important;
          }
          body.dma-react .font-bricolage.fixed {
            z-index: 100 !important;
          }
          body.dma-react .font-bricolage.fixed,
          body.dma-react .font-bricolage.fixed *,
          body.dma-react > .font-bricolage,
          body.dma-react > .font-bricolage * {
            font-family: "Bricolage Grotesque", sans-serif !important;
          }
          body.dma-react .font-bricolage.fixed a,
          body.dma-react > .font-bricolage a {
            text-decoration: none !important;
            color: inherit;
          }
          body.dma-react {
            --nav-sticky-offset: 64px;
            --hero-pad-top: 24px;
            padding-top: 4rem;
          }
          @media (min-width: 640px) {
            body.dma-react {
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
        className={`dma-react-root${cssReady ? " dma-css-ready" : ""}`}
        // ponytail: extracted HTML shell; full JSX port after home is stable
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <Footer />
    </>
  );
};

export default DestinationMarketingAgency;
