/** Central indexable route list for prerender + sitemap. Keep in sync with App.jsx. */
export const SITE_ORIGIN = "https://melangedigital.co";

/** Legacy asset path; `/` is the canonical home. */
export const DESTINATION_LANDING = "/destination-marketing-agency";

export const routes = [
  "/",
  "/services",
  "/services/influencer-marketing",
  "/services/branded-content-ips",
  "/services/experiential-marketing",
  "/services/fam-trips-pr",
  "/work",
  "/about",
  "/contact",
  "/blogs",
  "/careers",
  "/terms-of-service",
  "/privacy-policy",
  "/cookie-policy",
  "/work/costa-cruises",
  "/work/resorts-world-cruises",
  "/work/singapore-tourism-board",
  "/work/her-hk",
  "/work/akbar-travels",
  "/work/zambia-tourism",
];

const REDIRECTED_ROUTES = new Set([
  "/blogs/community-first-content-stacks-why-owning-your-audience-is-the-new-moat",
  "/blogs/the-rise-of-creator-storefronts-and-how-they-are-reshaping-brand-influencer-partnerships",
]);

export function isPrerenderableRoute(route, cmsPages = {}) {
  if (route === DESTINATION_LANDING || REDIRECTED_ROUTES.has(route)) return false;
  return !route.startsWith("/work/") || Boolean(cmsPages[route]);
}

export const prerenderRoutes = routes.filter(isPrerenderableRoute);
