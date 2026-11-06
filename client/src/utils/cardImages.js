// Case-study card banners are multi-MB PNGs on Cloudinary. Serve resized WebP/AVIF via
// on-the-fly transforms with a srcset, and lazy-load every card that isn't the LCP.
const CARD_WIDTHS = [400, 640, 800, 1200];
// Measured: cards are viewport - 48px on mobile and ~508px wide in the desktop two-column grid.
const CARD_SIZES = "(max-width: 767px) calc(100vw - 48px), (max-width: 1100px) 45vw, 520px";
// CMS banners are stored as /uploads/<cloudinaryId>.<ext>, which server.cjs 302-redirects to
// the full-size Cloudinary original. Point straight at Cloudinary to skip that uncached hop.
const CLOUDINARY_UPLOAD_BASE = `https://res.cloudinary.com/${
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dbhrpsnzg"
}/image/upload/`;
const CARD_IMG =
  /<img\b([^>]*?)\ssrc="(?:(https:\/\/res\.cloudinary\.com\/[^"/]+\/image\/upload\/)([^"]+)|\/uploads\/([A-Za-z0-9_-]+\.(?:webp|png|jpe?g|gif|avif)))"([^>]*)>/gi;

/**
 * Rewrite Cloudinary / CMS-upload <img> tags in an HTML string to resized, lazy images.
 * `eagerFirst`: the first card is the page's LCP (Work), so fetch it at high priority.
 */
export function optimizeCardImages(html, { eagerFirst = false } = {}) {
  let index = 0;
  return html.replace(CARD_IMG, (tag, before, cloudinaryBase, cloudinaryRest, uploadFile, after) => {
    const base = cloudinaryBase || CLOUDINARY_UPLOAD_BASE;
    // Same mapping as server.cjs: IDs are case-sensitive, only the extension is lowercased.
    const rest = cloudinaryRest || uploadFile.replace(/\.[^.]+$/, (ext) => ext.toLowerCase());
    const i = index++;
    if (/\ssrcset=/.test(tag) || /^[a-z]{1,3}_[^/]*\//.test(rest)) return tag;
    const url = (w) => `${base}f_auto,q_auto,c_limit,w_${w}/${rest}`;
    const srcset = CARD_WIDTHS.map((w) => `${url(w)} ${w}w`).join(", ");
    const hints = eagerFirst && i === 0 ? ' fetchpriority="high"' : ' loading="lazy"';
    return `<img${before} src="${url(800)}" srcset="${srcset}" sizes="${CARD_SIZES}"${hints} decoding="async"${after}>`;
  });
}

/** The card links in rendered markup, for skipping no-op CMS re-renders. */
export const cardHrefs = (html) =>
  [...html.matchAll(/<a class="svc-project" href="([^"]+)"/g)].map((m) => m[1]).join("|");

/**
 * Card links + text, for pages where the CMS can change captions without changing links.
 * Spaces are normalised because the live DOM has deorphan's &nbsp; inserted.
 */
export const cardSignature = (html) =>
  [...html.matchAll(/<a class="svc-project" href="([^"]+)"[\s\S]*?svc-project__title">([^<]*)<[\s\S]*?svc-project__caption">([^<]*)</g)]
    .map((m) => m.slice(1).join("~").replace(/&nbsp;| |\s+/g, " ").trim())
    .join("|");

/**
 * On a prerendered load, start from the snapshot already in #root so React's first render
 * matches what the visitor is looking at instead of swapping in stale markup.
 */
export function prerenderedMarkup(rootSelector) {
  if (typeof document === "undefined" || window.__PRERENDERING__) return null;
  const prerendered = document.querySelector(`#root ${rootSelector}`);
  return prerendered?.querySelector(".svc-project") ? prerendered.innerHTML : null;
}
