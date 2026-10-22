export const BLOG_CATEGORY_OPTIONS = [
  { id: "content-marketing", label: "Content Marketing" },
  { id: "brand-strategy", label: "Travel Brand Strategy" },
  { id: "travel-influencer-marketing", label: "Travel influencer marketing" },
  { id: "film-tourism", label: "Film tourism" },
  { id: "fam-trips", label: "Fam trips" },
  { id: "branded-content", label: "Branded Content" },
  { id: "experential-marketing", label: "Experential Marketing" },
  { id: "destination-marketing", label: "Destination Marketing" },
  { id: "tourism-marketing", label: "Tourism Marketing" },
  { id: "travel-pr", label: "Travel PR" },
];

// Keep labels for existing post records; these values are not admin options.
const legacyCategoryLabels = {
  "ecommerce-management": "E-commerce Management",
  "design-solutions": "Design Solutions",
  "performance-marketing": "Performance Marketing",
  "website-development-seo": "Website Development & SEO",
  "influencer-marketing": "Influencer Marketing",
  "design-development": "Design & Development",
  "design-dev": "Design & Development",
  "content-strategy": "Content Strategy",
  storytelling: "Storytelling",
  "ips-pr": "PR, IPs & Outreach",
  pr: "IPs & PR",
  "aeo-seo": "AEO & SEO",
  ecommerce: "E-Commerce",
};

const categoryLabels = {
  ...Object.fromEntries(BLOG_CATEGORY_OPTIONS.map(({ id, label }) => [id, label])),
  ...legacyCategoryLabels,
};

export function formatBlogCategory(category) {
  if (!category) return "";
  return (
    categoryLabels[category] ||
    category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}
