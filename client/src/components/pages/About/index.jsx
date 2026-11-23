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
  "/about/network-sphere.js?v=20261123a",
  "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.js",
  `${ASSET}/js/melange.js?v=20261123a`,
  `${ASSET}/js/about.js?v=20260915b`,
];

/** JSON-LD for /about is injected into the initial HTML by Express (page-schemas.cjs). */
const About = () => {
  const cssReady = useMarketingBoot("abt", CSS, SCRIPT_BASES);

  return (
    <>
      <Helmet>
        <title>Best Destination Marketing Agency | Mélange Digital</title>
        <meta
          name="description"
          content="We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy."
        />
        <link rel="canonical" href="https://melangedigital.co/about" data-rh="true" />
        {/* Fonts come from the non-blocking font <link> in index.html (a superset of
            what this page uses); a second, blocking copy here delayed first paint. */}
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/about" />
        <meta property="og:title" content="Best Destination Marketing Agency | Mélange Digital" />
        <meta
          property="og:description"
          content="We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy."
        />
        <meta property="og:image" content="https://melangedigital.co/about-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Destination Marketing Agency | Mélange Digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Destination Marketing Agency | Mélange Digital" />
        <meta
          name="twitter:description"
          content="We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy."
        />
        <meta name="twitter:image" content="https://melangedigital.co/about-og.png" />
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
