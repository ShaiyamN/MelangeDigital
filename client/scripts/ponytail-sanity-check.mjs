import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5173;
const HOST = "localhost";

const routesToTest = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services", expectDesc: " Melange offers digital marketing services for the travel and tourism industry, from influencer marketing to branding, built for destinations, DMOs, and NTOs." },
  { path: "/work", name: "Work / Case Studies" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/blogs", name: "Blogs" },
  { path: "/careers", name: "Careers" },
  { path: "/careers/form", name: "Careers Form Iframe" },
  { path: "/terms-of-service", name: "Terms of Service" },
  { path: "/privacy-policy", name: "Privacy Policy" },
  { path: "/cancellation-and-refund-policy", name: "Refund Policy" },
  { path: "/cookie-policy", name: "Cookie Policy" },
  { path: "/work/singapore-tourism-board", name: "Case Study - Singapore Tourism" },
  { path: "/work/genvr", name: "Case Study - GenVR" },
  { path: "/work/neotraders", name: "Case Study - NeoTraders" },
  { path: "/services/brand-strategy", name: "Service - Brand Strategy" },
  { path: "/services/influencer-marketing", name: "Service - Influencer Marketing" },
  { path: "/services/aeo-seo", name: "Service - AEO/SEO" },
  { path: "/singapore-tourism", name: "Individual - Singapore Tourism" },
  { path: "/singapore-tourism-aeo-seo", name: "Individual - Singapore Tourism AEO/SEO" },
  { path: "/ganga-fashion", name: "Individual - Ganga Fashion" },
  { path: "/siam-malls", name: "Individual - Siam Malls" },
  { path: "/report-download.html", name: "Report Download HTML" },
];

function fetchPage(urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.get({
      hostname: HOST,
      port: PORT,
      path: urlPath,
      headers: { "User-Agent": "PonytailSanityRunner/1.0" }
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on("error", reject);
  });
}

async function run() {
  console.log("==================================================");
  console.log("   PONYTAIL PRE-PROD DEPLOYMENT SANITY AUDIT      ");
  console.log("==================================================");
  let passed = 0;
  let failed = 0;

  for (const r of routesToTest) {
    try {
      const res = await fetchPage(r.path);
      if (res.status !== 200) {
        console.error(`❌ [FAIL] ${r.name} (${r.path}): HTTP ${res.status}`);
        failed++;
        continue;
      }

      console.log(`✅ [PASS] ${r.name} (${r.path}): HTTP 200 OK`);
      passed++;

      // Check specific expectations
      if (r.path === "/careers/form") {
        const hasAlan = res.body.includes("Alan+Sans") || res.body.includes("Alan Sans");
        const hasBaskervville = res.body.includes("Baskervville");
        const hasLato = res.body.includes("Lato");
        const hasLenis = res.body.includes("__melangeLenis");
        if (hasAlan && hasBaskervville && hasLato && hasLenis) {
          console.log(`   └─ ✅ Font links + Lenis scroll bridge present`);
          passed++;
        } else {
          console.error(`   └─ ❌ Missing fonts or Lenis bridge in form: Alan=${hasAlan}, Bask=${hasBaskervville}, Lato=${hasLato}, Lenis=${hasLenis}`);
          failed++;
        }
      }

      if (r.path === "/report-download.html") {
        if (res.body.includes("/indian-outbound-tourism-report")) {
          console.log(`   └─ ✅ Redirect target /indian-outbound-tourism-report verified`);
          passed++;
        } else {
          console.error(`   └─ ❌ Report download redirect target missing`);
          failed++;
        }
      }

    } catch (err) {
      console.error(`❌ [ERROR] Could not reach ${r.path}: ${err.message}`);
      failed++;
    }
  }

  // Check Sitemap file
  const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, "utf8");
    const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    console.log(`\nSitemap check: ${locMatches.length} URLs found.`);
    let sitemapIssues = 0;
    for (const u of locMatches) {
      if (!u.startsWith("https://melangedigital.co")) {
        console.error(`   ❌ Invalid domain in sitemap: ${u}`);
        sitemapIssues++;
      }
      if (u !== "https://melangedigital.co" && u.endsWith("/")) {
        console.error(`   ❌ Trailing slash found in sitemap: ${u}`);
        sitemapIssues++;
      }
    }
    if (sitemapIssues === 0) {
      console.log(`   ✅ All sitemap URLs strictly match canonical https://melangedigital.co (no trailing slashes).`);
      passed++;
    } else {
      failed++;
    }
  }

  console.log("\n==================================================");
  console.log(`AUDIT RESULTS: ${passed} passed, ${failed} failed`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

run();
