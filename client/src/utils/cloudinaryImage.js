const CLOUDINARY_BASE = `https://res.cloudinary.com/${
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dbhrpsnzg"
}/image/upload`;

// CMS images are stored as /uploads/<id>.<ext> (server.cjs redirects them to the
// Cloudinary original) or as full Cloudinary upload URLs. Originals can be 3MB+,
// so request a resized, auto-format/quality version straight from Cloudinary.
function cloudinaryPublicPath(src) {
  if (typeof src !== "string") return null;
  const local = /^\/uploads\/([A-Za-z0-9_-]+)\.(webp|png|jpe?g|gif|avif)$/i.exec(src);
  // Same mapping as server.cjs: IDs are case-sensitive, only the extension is lowercased.
  if (local) return `${local[1]}.${local[2].toLowerCase()}`;
  const remote = /^https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/(?:v\d+\/)?([^,\s?#/]+\.(?:webp|png|jpe?g|gif|avif))$/i.exec(src);
  return remote ? remote[1] : null;
}

export function cloudinaryUrl(src, width) {
  const file = cloudinaryPublicPath(src);
  if (!file) return src;
  return `${CLOUDINARY_BASE}/f_auto,q_auto,c_limit,w_${width}/${file}`;
}

export function cloudinarySrcSet(src, widths) {
  if (!cloudinaryPublicPath(src)) return undefined;
  return widths.map((w) => `${cloudinaryUrl(src, w)} ${w}w`).join(", ");
}
