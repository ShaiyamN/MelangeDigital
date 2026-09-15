import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { getSitemapXml } = require("./live-sitemap.cjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_OUT = path.join(__dirname, "..", "public", "sitemap.xml");
const DIST_OUT = path.join(__dirname, "..", "dist", "sitemap.xml");

async function main() {
  try {
    const xml = await getSitemapXml();
    fs.writeFileSync(PUBLIC_OUT, xml, "utf8");
    console.log(`Wrote live sitemap.xml → ${PUBLIC_OUT}`);

    if (fs.existsSync(path.dirname(DIST_OUT))) {
      fs.writeFileSync(DIST_OUT, xml, "utf8");
      console.log(`Wrote live sitemap.xml → ${DIST_OUT}`);
    }
    process.exit(0);
  } catch (err) {
    console.error("Failed to generate live sitemap:", err);
    process.exit(1);
  }
}

main();
