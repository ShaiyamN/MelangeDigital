/** Central indexable route list for prerender + sitemap. Keep in sync with App.jsx. */
export const SITE_ORIGIN = "https://melangedigital.co";

/** Legacy asset path; `/` is the canonical home. */
export const DESTINATION_LANDING = "/destination-marketing-agency";

export const routes = [
  "/",
  "/services",
  "/work",
  "/about",
  "/contact",
  "/blogs",
  "/careers",
  "/terms-of-service",
  "/privacy-policy",
  "/cancellation-and-refund-policy",
  "/cookie-policy",
  "/work/zee5",
  "/work/costa-cruises",
  "/work/kalon",
  "/work/duvon",
  "/work/make-my-trip",
  "/work/sportz-village",
  "/work/active-club",
  "/work/kunal-rathod",
  "/work/sportz-village-xp",
  "/work/proportunity",
  "/work/dhruvak",
  "/work/travel-stop",
  "/work/genvr",
  "/work/rock-highland",
  "/work/aartech-solonics",
  "/work/enerqual",
  "/work/resorts-world-cruises",
  "/work/ganga-fashions",
  "/work/versailles-dental-clinic",
  "/work/healthy-mithai",
  "/work/jewel-houze",
  "/work/neotraders",
  "/work/devboost",
  "/work/singapore-tourism-board",
  "/work/her-hk",
  "/work/akbar-travels",
  "/work/zambia-tourism",
  "/work/navi-savi",
  "/work/green-label",
  "/work/maison-luxe",
  "/work/veda-naturals",
  "/blogs/the-rise-of-creator-storefronts-and-how-they-are-reshaping-brand-influencer-partnerships",
  "/blogs/sustainable-design-and-packaging-why-2025-consumers-judge-before-they-click-buy",
  "/blogs/community-first-content-stacks-why-owning-your-audience-is-the-new-moat",
  "/blogs/from-products-to-experiences-how-micro-events-and-community-activations-are-shaping-brand-ip-in-2025",
];

/** Puppeteer prerender skips the static DMA folder (already real HTML from sync). */
export const prerenderRoutes = routes.filter((r) => r !== DESTINATION_LANDING);
