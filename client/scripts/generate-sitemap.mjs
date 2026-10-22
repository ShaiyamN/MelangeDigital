import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { getSitemapXml } = require("./live-sitemap.cjs");

/**
 * Validates live sitemap generation (Firestore + site-routes).
 * Does NOT write public/sitemap.xml or spa/sitemap.xml — a physical file
 * on Hostinger was being served instead of the Express GET /sitemap.xml route.
 */
async function main() {
  try {
    const xml = await getSitemapXml();
    const locs = (xml.match(/<loc>/g) || []).length;
    if (!xml.includes("<urlset") || locs < 1) {
      console.error("Generated sitemap looks empty or invalid");
      process.exit(1);
    }
    console.log(`Live sitemap ok (${locs} urls). Static sitemap.xml not written (Express serves /sitemap.xml).`);
    process.exit(0);
  } catch (err) {
    console.error("Failed to generate live sitemap:", err);
    process.exit(1);
  }
}

main();
