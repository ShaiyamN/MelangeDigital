import http from "http";
import assert from "node:assert/strict";
import { SERVICES_DATA } from "../src/constants/servicesData.js";

function get(path) {
  return new Promise((resolve, reject) => {
    http
      .get(
        `http://127.0.0.1:3000${path}`,
        // Match curl exemption in staging basic-auth middleware
        { headers: { "User-Agent": "curl/8 check-page-schemas" } },
        (res) => {
          let d = "";
          res.setEncoding("utf8");
          res.on("data", (c) => (d += c));
          res.on("end", () => resolve({ status: res.statusCode, html: d }));
        },
      )
      .on("error", reject);
  });
}

const expected = {
  "/": 6,
  "/services": 6,
  "/about": 8,
  "/services/influencer-marketing": 6,
  "/services/branded-content-ips": 6,
  "/services/experiential-marketing": 6,
  "/services/fam-trips-pr": 6,
};

const schemasByPath = new Map();

for (const path of Object.keys(expected)) {
  const { status, html } = await get(path);
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
  const scripts = [
    ...html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].map((m) => JSON.parse(m[1]));
  const headScripts = [
    ...head.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].map((m) => JSON.parse(m[1]));
  schemasByPath.set(path, headScripts);
  const types = scripts.map((s) =>
    Array.isArray(s["@type"]) ? s["@type"].join("|") : s["@type"],
  );
  const outdated =
    html.includes("Hotels and Resorts") ||
    html.includes("Paid Advertising for Tourism Boards");
  const utf8 =
    path === "/"
      ? html.includes("₹₹") && html.includes("Mélange")
      : true;
  const ok =
    status === 200 &&
    scripts.length === expected[path] &&
    !outdated &&
    utf8;
  console.log(
    `${ok ? "OK" : "FAIL"} ${path} status=${status} count=${scripts.length} (want ${expected[path]}) types=${types.join(",")} outdated=${outdated} utf8=${utf8}`,
  );
  if (!ok) process.exitCode = 1;
}

const brandedPath = "/services/branded-content-ips";
const brandedSchemas = schemasByPath.get(brandedPath) || [];
const expectedTypes = [
  "WebSite",
  "Organization",
  "WebPage",
  "Service",
  "BreadcrumbList",
  "FAQPage",
];
const expectedIds = [
  "https://melangedigital.co/#website",
  "https://melangedigital.co/#organization",
  `${SERVICES_DATA["branded-content-ips"].seo.canonical}#webpage`,
  `${SERVICES_DATA["branded-content-ips"].seo.canonical}#service`,
  `${SERVICES_DATA["branded-content-ips"].seo.canonical}#breadcrumb`,
  `${SERVICES_DATA["branded-content-ips"].seo.canonical}#faq`,
];
assert.deepEqual(
  brandedSchemas.map((schema) => schema["@type"]),
  expectedTypes,
  "Branded Content schemas must have the required order",
);
assert.deepEqual(
  brandedSchemas.map((schema) => schema["@id"]),
  expectedIds,
  "Branded Content schema IDs must match the implementation pack",
);
assert.deepEqual(
  brandedSchemas.slice(0, 2),
  (schemasByPath.get("/") || []).slice(0, 2),
  "Branded Content must reuse the homepage WebSite and Organization schemas",
);

const webpage = brandedSchemas[2];
const service = brandedSchemas[3];
const breadcrumb = brandedSchemas[4];
const faqPage = brandedSchemas[5];
const brandedData = SERVICES_DATA["branded-content-ips"];
const targetHtml = (await get(brandedPath)).html;
const targetHead = targetHtml.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
const markedSchemas = targetHead.match(
  /<!--\s*Schema Markup\s*-->([\s\S]*?)<!--\s*End of Schema Markup\s*-->/i,
);
assert(markedSchemas, "Branded Content schemas must be inside the schema markers");
assert.equal(
  (markedSchemas[1].match(/application\/ld\+json/g) || []).length,
  6,
  "All six Branded Content schemas must be inside the schema markers",
);
assert.equal(
  (targetHead.match(/application\/ld\+json/g) || []).length,
  6,
  "Initial Branded Content head must contain exactly six JSON-LD blocks",
);
assert.equal(webpage.name, brandedData.seo.title);
assert.equal(webpage.description, brandedData.seo.description);
assert.equal(service.name, "Branded Content and IPs");
assert.equal(service.alternateName, "Film Tourism Marketing and Branded Content for Destinations");
assert.equal(service.description, brandedData.seo.description);
assert.deepEqual(
  service.areaServed.map((country) => country.name),
  ["India", "United Arab Emirates", "Singapore", "United Kingdom", "United States", "Zambia"],
);
assert.deepEqual(
  breadcrumb.itemListElement.map(({ name, item }) => [name, item]),
  [
    ["Home", "https://melangedigital.co/"],
    ["Services", "https://melangedigital.co/services"],
    ["Branded Content & IPs", brandedData.seo.canonical],
  ],
);
assert.deepEqual(
  faqPage.mainEntity.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  })),
  brandedData.faqs.items,
  "FAQ schema must match the visible accordion data",
);
assert(
  brandedSchemas.every(
    (schema) =>
      schema["@type"] !== "ProfessionalService" &&
      !String(schema["@id"] || "").includes("#localbusiness-"),
  ),
  "Branded Content must not add Goa/Mumbai office schemas",
);

const title = targetHead.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
const description =
  targetHead.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i)?.[1] || "";
assert.equal(title.replace(/&amp;/g, "&"), webpage.name);
assert.equal(description.replace(/&amp;/g, "&"), webpage.description);
console.log("OK branded-content-ips schema pack, metadata, and FAQ parity");

const experientialPath = "/services/experiential-marketing";
const experientialSchemas = schemasByPath.get(experientialPath) || [];
const experientialData = SERVICES_DATA["experiential-marketing"];
const experientialUrl = experientialData.seo.canonical;
const experientialIds = [
  "https://melangedigital.co/#website",
  "https://melangedigital.co/#organization",
  `${experientialUrl}#webpage`,
  `${experientialUrl}#service`,
  `${experientialUrl}#breadcrumb`,
  `${experientialUrl}#faq`,
];
assert.deepEqual(
  experientialSchemas.map((schema) => schema["@type"]),
  expectedTypes,
  "Experiential Marketing schemas must have the required order",
);
assert.deepEqual(
  experientialSchemas.map((schema) => schema["@id"]),
  experientialIds,
  "Experiential Marketing schema IDs must match the implementation pack",
);
assert.deepEqual(
  experientialSchemas.slice(0, 2),
  (schemasByPath.get("/") || []).slice(0, 2),
  "Experiential Marketing must reuse the homepage WebSite and Organization schemas",
);

const experientialPage = experientialSchemas[2];
const experientialService = experientialSchemas[3];
const experientialBreadcrumb = experientialSchemas[4];
const experientialFaqPage = experientialSchemas[5];
const experientialHtml = (await get(experientialPath)).html;
const experientialHead =
  experientialHtml.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
const experientialMarkedSchemas = experientialHead.match(
  /<!--\s*Schema Markup\s*-->([\s\S]*?)<!--\s*End of Schema Markup\s*-->/i,
);
assert(
  experientialMarkedSchemas,
  "Experiential Marketing schemas must be inside the schema markers",
);
assert.equal(
  (experientialMarkedSchemas[1].match(/application\/ld\+json/g) || []).length,
  6,
  "All six Experiential Marketing schemas must be inside the schema markers",
);
assert.equal(
  (experientialHead.match(/application\/ld\+json/g) || []).length,
  6,
  "Initial Experiential Marketing head must contain exactly six JSON-LD blocks",
);
assert.equal(experientialPage.name, experientialData.seo.title);
assert.equal(experientialPage.description, experientialData.seo.description);
assert.equal(experientialService.name, "Experiential Marketing");
assert.equal(
  experientialService.alternateName,
  "Experiential Marketing in Travel & Tourism",
);
assert.equal(experientialService.serviceType, "Tourism experiential marketing");
assert.equal(experientialService.description, experientialData.seo.description);
assert.equal(experientialService.url, experientialUrl);
assert.deepEqual(
  experientialService.areaServed.map((country) => country.name),
  [
    "India",
    "United Arab Emirates",
    "Singapore",
    "United Kingdom",
    "United States",
    "Zambia",
  ],
);
assert.deepEqual(experientialService.provider, {
  "@id": "https://melangedigital.co/#organization",
});
assert.deepEqual(
  experientialService.audience,
  {
    "@type": "BusinessAudience",
    audienceType:
      "National tourism organisations (NTOs), destination marketing organisations (DMOs) and travel brands",
  },
);
assert.deepEqual(
  experientialBreadcrumb.itemListElement.map(({ position, name, item }) => [
    position,
    name,
    item,
  ]),
  [
    [1, "Home", "https://melangedigital.co/"],
    [2, "Services", "https://melangedigital.co/services"],
    [3, "Experiential Marketing", experientialUrl],
  ],
);
assert.deepEqual(
  experientialFaqPage.mainEntity.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  })),
  experientialData.faqs.items,
  "Experiential Marketing FAQ schema must match the visible accordion data",
);
assert(
  experientialSchemas.every(
    (schema) =>
      schema["@type"] !== "LocalBusiness" &&
      schema["@type"] !== "ProfessionalService" &&
      !String(schema["@id"] || "").includes("#localbusiness-"),
  ),
  "Experiential Marketing must not include office schemas",
);

const experientialTitle =
  experientialHead.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
const experientialDescription =
  experientialHead.match(
    /<meta[^>]*name="description"[^>]*content="([^"]*)"/i,
  )?.[1] || "";
assert.equal(experientialTitle.replace(/&amp;/g, "&"), experientialPage.name);
assert.equal(
  experientialDescription.replace(/&amp;/g, "&"),
  experientialPage.description,
);
console.log(
  "OK experiential-marketing schema pack, metadata, and FAQ parity",
);

const famTripsPath = "/services/fam-trips-pr";
const famTripsSchemas = schemasByPath.get(famTripsPath) || [];
const famTripsData = SERVICES_DATA["fam-trips-pr"];
const famTripsUrl = famTripsData.seo.canonical;
assert.deepEqual(
  famTripsSchemas.map((schema) => schema["@type"]),
  expectedTypes,
  "FAM Trips + PR schemas must have the required order",
);
assert.deepEqual(
  famTripsSchemas.map((schema) => schema["@id"]),
  [
    "https://melangedigital.co/#website",
    "https://melangedigital.co/#organization",
    `${famTripsUrl}#webpage`,
    `${famTripsUrl}#service`,
    `${famTripsUrl}#breadcrumb`,
    `${famTripsUrl}#faq`,
  ],
  "FAM Trips + PR schema IDs must match the implementation pack",
);
assert.deepEqual(
  famTripsSchemas.slice(0, 2),
  (schemasByPath.get("/") || []).slice(0, 2),
  "FAM Trips + PR must reuse the homepage WebSite and Organization schemas",
);

const famTripsPage = famTripsSchemas[2];
const famTripsService = famTripsSchemas[3];
const famTripsBreadcrumb = famTripsSchemas[4];
const famTripsFaq = famTripsSchemas[5];
const famTripsHtml = (await get(famTripsPath)).html;
const famTripsHead = famTripsHtml.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
assert.equal(
  (famTripsHead.match(/application\/ld\+json/g) || []).length,
  6,
  "Initial FAM Trips + PR head must contain exactly six JSON-LD blocks",
);
assert.equal(famTripsPage.name, famTripsData.seo.title);
assert.equal(famTripsPage.description, famTripsData.seo.description);
assert.deepEqual(famTripsPage.isPartOf, {
  "@id": "https://melangedigital.co/#website",
});
assert.deepEqual(famTripsPage.about, { "@id": `${famTripsUrl}#service` });
assert.deepEqual(famTripsPage.mainEntity, { "@id": `${famTripsUrl}#service` });
assert.deepEqual(famTripsPage.breadcrumb, {
  "@id": `${famTripsUrl}#breadcrumb`,
});
assert.deepEqual(famTripsPage.publisher, {
  "@id": "https://melangedigital.co/#organization",
});
assert.deepEqual(famTripsPage.hasPart, { "@id": `${famTripsUrl}#faq` });
assert.equal(famTripsPage.inLanguage, "en");
assert.deepEqual(famTripsService.provider, {
  "@id": "https://melangedigital.co/#organization",
});
assert.equal(famTripsService.name, "FAM Trips and Travel PR");
assert.equal(famTripsService.alternateName, "FAM Trips + PR in Travel & Tourism");
assert.equal(
  famTripsService.serviceType,
  "Travel PR and familiarisation (FAM) trip management",
);
assert.equal(famTripsService.description, famTripsData.seo.description);
assert.deepEqual(
  famTripsService.areaServed.map((country) => country.name),
  [
    "India",
    "United Arab Emirates",
    "Singapore",
    "United Kingdom",
    "United States",
    "Zambia",
  ],
);
assert.deepEqual(
  famTripsService.audience,
  {
    "@type": "BusinessAudience",
    audienceType:
      "National tourism organisations (NTOs), destination marketing organisations (DMOs) and travel brands",
  },
);
assert.deepEqual(famTripsService.mainEntityOfPage, {
  "@id": `${famTripsUrl}#webpage`,
});
assert.deepEqual(
  famTripsBreadcrumb.itemListElement.map(({ position, name, item }) => [
    position,
    name,
    item,
  ]),
  [
    [1, "Home", "https://melangedigital.co/"],
    [2, "Services", "https://melangedigital.co/services"],
    [3, "FAM Trips + PR", famTripsUrl],
  ],
);
assert.deepEqual(
  famTripsFaq.mainEntity.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  })),
  famTripsData.faqs.items,
  "FAM Trips + PR FAQ schema must match the visible accordion data",
);
assert.equal(famTripsFaq.mainEntity.length, 5);
assert.equal(famTripsFaq.url, famTripsUrl);
assert.deepEqual(famTripsFaq.isPartOf, { "@id": `${famTripsUrl}#webpage` });
assert.deepEqual(famTripsFaq.about, {
  "@id": "https://melangedigital.co/#organization",
});
assert.equal(famTripsFaq.inLanguage, "en");
assert(
  famTripsSchemas.every(
    (schema) =>
      schema["@type"] !== "LocalBusiness" &&
      schema["@type"] !== "ProfessionalService" &&
      !String(schema["@id"] || "").includes("#localbusiness-"),
  ),
  "FAM Trips + PR must not include office schemas",
);
assert.equal(
  new Set(famTripsSchemas.map((schema) => schema["@id"])).size,
  famTripsSchemas.length,
  "FAM Trips + PR schema IDs must be unique",
);
const famTripsTitle =
  famTripsHead.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
const famTripsDescription =
  famTripsHead.match(
    /<meta[^>]*name="description"[^>]*content="([^"]*)"/i,
  )?.[1] || "";
assert.equal(famTripsTitle.replace(/&amp;/g, "&"), famTripsPage.name);
assert.equal(
  famTripsDescription.replace(/&amp;/g, "&"),
  famTripsPage.description,
);
console.log("OK fam-trips-pr schema pack, metadata, and FAQ parity");
