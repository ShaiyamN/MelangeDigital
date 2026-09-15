const SITE = "https://melangedigital.co";
const PUBLISHER_LOGO = "https://melangedigital.co/logo.png";

/** Drop null, "", empty arrays, and empty plain objects. Nested maps are cleaned the same way. */
export function omitEmpty(value) {
  if (value == null || value === "") return undefined;
  if (Array.isArray(value)) {
    const items = value.map(omitEmpty).filter((v) => v !== undefined);
    return items.length ? items : undefined;
  }
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const next = omitEmpty(v);
      if (next !== undefined) out[k] = next;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return value;
}

const parseBlogDate = (date) => {
  if (!date || typeof date !== "string") return "";
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString();
};

export function generateBlogSchema(blog = {}) {
  const slug = String(blog.slug || "").replace(/^\/+|\/+$/g, "");
  const pageUrl = slug ? `${SITE}/blogs/${slug}` : "";
  const headline = String(blog.seoTitle || blog.title || "").trim();
  const description = String(blog.metaDescription || blog.description || "").trim();
  const published = parseBlogDate(blog.date);
  const modified = String(blog.updatedAt || "").trim() || published;
  const section = Array.isArray(blog.categories) && blog.categories.length
    ? blog.categories.filter(Boolean).join(", ")
    : String(blog.category || "").trim();
  const authorName = String(blog.author || "").trim();
  const videoBlock = (blog.contentBlocks || []).find((b) => b && b.type === "video" && b.url);

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: String(blog.image || "").trim(),
    author: authorName
      ? {
          "@type": /m[ée]lange digital/i.test(authorName) ? "Organization" : "Person",
          name: authorName,
        }
      : undefined,
    datePublished: published,
    dateModified: modified,
    publisher: {
      "@type": "Organization",
      name: "Mélange Digital",
      url: SITE,
      logo: PUBLISHER_LOGO,
    },
    mainEntityOfPage: pageUrl ? { "@type": "WebPage", "@id": pageUrl } : "",
    url: pageUrl,
    articleSection: section,
    keywords: String(blog.focusKeywords || "").trim(),
    video: videoBlock
      ? {
          "@type": "VideoObject",
          name: headline || videoBlock.url,
          contentUrl: videoBlock.url,
          embedUrl: videoBlock.url,
        }
      : undefined,
  });
}

export function validateBlogSchema(text) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    return { ok: false, error: `Invalid JSON: ${err.message}` };
  }
  const nodes = Array.isArray(parsed) ? parsed : [parsed];
  if (!nodes.length || nodes.some((n) => n == null || typeof n !== "object" || Array.isArray(n))) {
    return { ok: false, error: "Schema must be a JSON object or an array of objects." };
  }
  if (!nodes.some((n) => n["@context"])) {
    return { ok: false, error: "Missing @context." };
  }
  if (nodes.some((n) => !n["@type"])) {
    return { ok: false, error: "Every node needs @type." };
  }
  return { ok: true, value: parsed };
}

export const prettySchema = (obj) => JSON.stringify(obj, null, 2);

export const schemasEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export function activeBlogSchema(blog) {
  if (blog?.schemaMode === "custom" && blog.customSchema) return blog.customSchema;
  return blog?.generatedSchema || generateBlogSchema(blog || {});
}
