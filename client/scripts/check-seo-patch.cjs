const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { applyHead, resolveMeta } = require("./seo-head.cjs");

const distIndex = path.join(__dirname, "..", "dist", "index.html");
const srcIndex = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(fs.existsSync(distIndex) ? distIndex : srcIndex, "utf8");

const index = {
  origin: "https://melangedigital.co",
  routes: new Set([
    "/work",
    "/contact",
    "/services/aeo-seo",
    "/services/design-and-development",
    "/blogs/hello-world",
  ]),
  byPath: {
    "/blogs/hello-world": { title: "Hello World", description: "A post." },
  },
};

const samples = [
  ["/work", "https://melangedigital.co/work", "Our Work"],
  ["/contact", "https://melangedigital.co/contact", "Contact Us"],
  ["/services/aeo-seo", "https://melangedigital.co/services/aeo-seo", "AEO"],
  [
    "/services/design-and-development",
    "https://melangedigital.co/services/design-and-development",
    "Design",
  ],
  ["/blogs/hello-world", "https://melangedigital.co/blogs/hello-world", "Hello World"],
];

for (const [p, canonical, needle] of samples) {
  const out = applyHead(html, resolveMeta(p, index));
  assert(out.includes(`rel="canonical" href="${canonical}"`), p + " canonical");
  assert(out.includes(needle), p + " title/copy");
  assert(!out.includes('"@type": "FAQPage"'), p + " no FAQ");
}

const sitemap = require("./live-sitemap.cjs");
const xml = sitemap.buildXml("https://melangedigital.co", ["/work", "/contact"]);
assert(xml.includes("https://melangedigital.co/work"));
assert(xml.startsWith("<?xml"));

console.log("seo patch check ok");
