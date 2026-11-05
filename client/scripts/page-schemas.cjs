/**
 * Approved JSON-LD packs for Home, Services, About, and selected service details.
 * Used by seo-head.cjs so schemas land in the initial HTML response.
 */

const ORIGIN = process.env.SITE_ORIGIN || "https://melangedigital.co";
const EXPERIENTIAL_MARKETING_FAQS = require("../src/constants/experiential-marketing-faqs.json");
const FAM_TRIPS_PR_FAQS = require("../src/constants/fam-trips-pr-faqs.json");

/** Four hub services — names/@id match homepage Organization catalog + Services ItemList. */
const HUB_SERVICES = [
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
  },
  {
    slug: "branded-content-ips",
    name: "Branded Content and IPs",
  },
  {
    slug: "experiential-marketing",
    name: "Experiential Marketing",
  },
  {
    slug: "fam-trips-pr",
    name: "FAM Trips and Travel PR",
  },
];

const HOME_FAQS = [
  {
    question: "What does a travel marketing agency do?",
    answer:
      "A travel marketing agency turns a destination or travel brand into a choice travellers actively make. It maps the audience's cultural passions, builds a story inside them, casts the right creators, then engineers the path from that story to a booked trip. Success is measured in arrivals, not impressions.",
  },
  {
    question: "How is a travel marketing agency different from a regular ad agency?",
    answer:
      "A regular ad agency buys media and hopes it lands. A travel marketing agency starts with why a destination matters to a specific audience, builds the story inside that culture, then engineers the path to a booked trip. The difference shows up in arrivals, not just impressions.",
  },
  {
    question: "Do travel marketing agencies work with national tourism boards?",
    answer:
      "Yes. Mélange works directly with national tourism boards and destination marketing organisations, including Singapore Tourism Board, Hong Kong Tourism Board, and Saudi Tourism Authority to name a few. Our campaigns are built to survive board-level scrutiny: measurable arrivals, clear attribution, and outcomes a minister can report upward.",
  },
  {
    question: "What results can a destination expect from travel advertising?",
    answer:
      "Real travel advertising is measured in arrivals and bookings, not clicks or views. Mélange's campaigns have driven double-digit YOY arrival growth and multi-million-dollar attributed sales for tourism boards and travel brands. Every campaign is built around a specific, trackable outcome agreed before work begins.",
  },
  {
    question: "How much does it cost to work with a travel and tourism marketing agency?",
    answer:
      "Cost depends on the mandate: a single campaign, a market launch, or an ongoing retainer all price differently. Mélange scopes every engagement around the board or brand's specific goals rather than a flat package. The fastest way to get a real number is a strategy call.",
  },
];

const SERVICES_FAQS = [
  {
    question: "What does digital marketing for travel and tourism include?",
    answer:
      "Digital marketing for travel and tourism includes influencer and celebrity marketing, branded content and IP integrations, experiential activations, FAM trips and PR, all built specifically for destinations, DMOs, NTOs and travel brands, not adapted from retail or FMCG playbooks.",
  },
  {
    question: "What is digital marketing for DMOs?",
    answer:
      "Digital marketing for DMOs is the full stack of services we offer specifically for destination marketing organisations. We build campaigns that survive government-level approval chains, prove arrivals rather than impressions, and understand procurement realities a typical ad agency has never worked inside.",
  },
  {
    question:
      "Does Mélange handle influencer marketing in travel and tourism, or only celebrity campaigns?",
    answer:
      "Both. Mélange's influencer marketing in travel and tourism spans everything from mega-follower celebrities to regional-language creators on platforms like ShareChat and Moj, cast by subculture fit rather than follower count alone.",
  },
  {
    question: "Is marketing for NTOs different from marketing other travel brands?",
    answer:
      "Yes. NTO marketing means working within a national tourism organisation's mandate, budget cycles and ministerial reporting lines: categorically different from marketing a private travel brand, and a large part of what Mélange specialises in.",
  },
  {
    question: "What does Mélange Digital specialise in?",
    answer:
      "Mélange Digital is a travel and tourism marketing agency. We decode the culture, narrate the story, match the creator, and convert emotion into a booking. Success is measured in arrivals, not impressions.",
  },
  {
    question: "How do you choose creators for a destination campaign?",
    answer:
      "We cast for credibility inside a subculture, not follower count. We check the data behind every creator before signing a contract, and casting, negotiation, content and reporting run under one roof.",
  },
];

/** Influencer detail FAQs — must match servicesData.faqs.items (incl. live typos until content fixes). */
const INFLUENCER_MARKETING_FAQS = [
  {
    question: "What does Travel influencer marketing for tourism boards involve?",
    answer:
      "Influencer marketing for tourism boards involves casting creators and celebrities whose audiences match a destination's target traveller, then managing negotiation, contracting, content direction and reporting as one campaign. For NTOs and DMOs it also means work that survives a government approval chain and reports against arrivals, not just engagement.",
  },
  {
    question: "How do you choose influencers for a tourism campaign?",
    answer:
      "By subculture credibility first, follower count last. We vet every creator on audience geography, engagement quality, authenticity scoring and prior brand fit before a contract is signed, because a large following with no standing in travel produces impressions rather than intent.",
  },
  {
    question:
      "What can Mélange as an per expert Travel influencer Marketing agency do?",
    answer:
      "Mélange run celebrity destination campaigns as well as creator campaigns. Both, often in the same campaign. Our network spans mega-follower celebrities through to regional-language creators on platforms like ShareChat and Moj, cast by fit rather than tier.",
  },
  {
    question: "Can influencer marketing actually be measured against arrivals?",
    answer:
      "Yes, when it is set up for it. We agree the arrivals or consideration metric with the tourism board at brief stage and report against it, alongside standard reach and engagement data.",
  },
];

const BRANDED_CONTENT_IPS_FAQS = [
  {
    question: "What is film tourism marketing?",
    answer:
      "Film tourism marketing is the practice of embedding a destination inside film, television or music content so audiences discover it through a story rather than an advertisement. Sometimes called screen tourism or set-jetting, it works because a destination inside a narrative inherits the audience's feeling about that narrative.",
  },
  {
    question: "How do you attract film productions to a destination?",
    answer:
      "Through direct relationships with production houses and a commercially credible case for the location, then handling clearances, regulatory coordination and contract negotiation so the production can actually shoot. Mélange has secured and delivered this for a national tourism board with a major Indian studio.",
  },
  {
    question: "Is a destination placement in a film different from product placement?",
    answer:
      "Yes. A logo placement is inventory. A destination placement works only when the location carries story weight, when scenes could not happen anywhere else. We shape the integration at script stage rather than buying a frame.",
  },
  {
    question: "Can branded content work for a destination without a large media budget?",
    answer:
      "Often better. Branded content is designed for earned reach, so the asset keeps travelling after paid distribution stops. That is usually a better fit for an NTO budget cycle than sustained paid placement.",
  },
];

const ABOUT_FAQS = [
  {
    question: "What does Mélange Digital do?",
    answer:
      "Mélange Digital is a destination marketing agency specialising in DMO, NTO marketing, that turn cultural insight into travel bookings. We work with national tourism boards, destination brands and travel tech platforms, building campaigns run by people who've worked inside the industry they now serve.",
  },
  {
    question: "How is a travel marketing agency different from a regular ad agency?",
    answer:
      "A regular ad agency buys media and hopes it lands. A travel marketing agency starts with why a destination matters to a specific audience, builds the story inside that culture, then engineers the path to a booked trip. The difference shows up in arrivals, not just impressions.",
  },
  {
    question:
      "What makes a destination marketing agency different from a general marketing agency?",
    answer:
      "A general agency serves any industry. A destination marketing agency works exclusively with tourism boards, DMOs, and travel brands, understanding budget cycles, ministerial reporting, and traveller psychology specific to this category. That focus is why boards trust Mélange with mandates broader agencies rarely see.",
  },
  {
    question: "What results can a destination expect from travel advertising?",
    answer:
      "Real travel advertising is measured in arrivals and bookings, not clicks or views. Mélange's campaigns have driven double-digit YOY arrival growth and multi-million-dollar attributed sales for tourism boards and travel brands. Every campaign is built around a specific, trackable outcome agreed before work begins.",
  },
  {
    question: "How much does it cost to work with a travel and tourism marketing agency?",
    answer:
      "Cost depends on the mandate: a single campaign, a market launch, or an ongoing retainer all price differently. Mélange scopes every engagement around the board or brand's specific goals rather than a flat package. The fastest way to get a real number is a strategy call.",
  },
];

const LEADERS = [
  {
    id: `${ORIGIN}/#founder`,
    name: "Sanket Bolinjkar",
    jobTitle: "Founder and Chief Executive Officer",
    sameAs: ["https://www.linkedin.com/in/sanket-bolinjkar-743ba224"],
  },
  {
    id: `${ORIGIN}/about#ekaterina-bolinjkar`,
    name: "Ekaterina Bolinjkar",
    jobTitle: "Co-Founder, Finance and People",
    sameAs: ["https://www.linkedin.com/in/ekaterina-bolinjkar-8bb33720/"],
  },
  {
    id: `${ORIGIN}/about#jason-dias`,
    name: "Jason Dias",
    jobTitle: "Director of Growth & Strategy",
    sameAs: ["https://www.linkedin.com/in/jasondias01/"],
  },
  {
    id: `${ORIGIN}/about#mihir-shah`,
    name: "Mihir Shah",
    jobTitle: "Regional Director, UK",
    sameAs: ["https://www.linkedin.com/in/mihirshah1987/"],
  },
  {
    id: `${ORIGIN}/about#julien-cordon`,
    name: "Julien Cordon",
    jobTitle: "Regional Director, GCC",
    sameAs: ["https://www.linkedin.com/in/julien-r-r-cordon-0a5204ba/"],
  },
  {
    id: `${ORIGIN}/about#maria-masiri`,
    name: "Maria Masiri",
    jobTitle: "Regional Director, Africa",
    sameAs: ["https://www.linkedin.com/in/maria-masiri-3b883934/"],
  },
];

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: "Mélange Digital",
    alternateName: ["Melange Digital", "Mélange", "Melange"],
    publisher: { "@id": `${ORIGIN}/#organization` },
    inLanguage: "en",
  };
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ORIGIN}/#organization`,
    name: "Mélange Digital",
    alternateName: ["Melange Digital", "Mélange", "Melange"],
    url: `${ORIGIN}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${ORIGIN}/#logo`,
      url: `${ORIGIN}/logo.png`,
      contentUrl: `${ORIGIN}/logo.png`,
      width: 774,
      height: 192,
      caption: "Mélange Digital",
    },
    image: { "@id": `${ORIGIN}/#logo` },
    description:
      "Mélange Digital is a travel and tourism marketing agency that makes destinations irresistible to Indian travellers. We deliver influencer and celebrity marketing, branded content and film IP, experiential marketing, and FAM trips and PR for national tourism boards, DMOs and travel brands across India, UAE, Singapore, UK, US and Zambia.",
    foundingDate: "2021",
    founder: {
      "@type": "Person",
      "@id": `${ORIGIN}/#founder`,
      name: "Sanket Bolinjkar",
      jobTitle: "Founder and CEO",
      worksFor: { "@id": `${ORIGIN}/#organization` },
    },
    email: "hello@melangedigital.co",
    telephone: "+91-9372567722",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9372567722",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
        areaServed: ["IN", "AE", "SG", "GB", "US", "ZM"],
      },
      {
        "@type": "ContactPoint",
        email: "hello@melangedigital.co",
        contactType: "customer support",
        availableLanguage: "English",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Zambia" },
    ],
    location: [
      { "@id": `${ORIGIN}/#localbusiness-goa` },
      { "@id": `${ORIGIN}/#localbusiness-mumbai` },
    ],
    sameAs: [
      "https://www.linkedin.com/company/melangedigital/",
      "https://www.instagram.com/melangedigital.co",
      "https://www.designrush.com/agency/profile/melange-digital",
    ],
    knowsAbout: [
      "Digital marketing for travel and tourism",
      "Digital marketing agency for travel",
      "Tourism board marketing agency",
      "Destination marketing agency",
      "Travel and tourism marketing",
      "Destination marketing",
      "NTO marketing",
      "DMO marketing",
      "Indian outbound travel market",
      "Travel influencer marketing",
      "Celebrity marketing for tourism",
      "Film tourism",
      "Influencer marketing for tourism",
      "Branded content",
      "Film and music IP integration",
      "Experiential marketing for tourism",
      "Travel trade shows and roadshows",
      "FAM trips",
      "Travel public relations",
      "Travel branding",
      "Tourism market research",
      "Travel brand storytelling",
      "Travel PR",
      "Social media marketing for tourism",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services for Travel and Tourism",
      url: `${ORIGIN}/services`,
      itemListElement: HUB_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${ORIGIN}/services/${s.slug}#service`,
          name: s.name,
          url: `${ORIGIN}/services/${s.slug}`,
          provider: { "@id": `${ORIGIN}/#organization` },
        },
      })),
    },
  };
}

function officeGoaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${ORIGIN}/#localbusiness-goa`,
    name: "Mélange Digital - Tourism Marketing Agency in Goa",
    parentOrganization: { "@id": `${ORIGIN}/#organization` },
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/logo.png`,
    telephone: "+91-9372567722",
    email: "hello@melangedigital.co",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7th Floor, Silvio Heights, B12, St Inez Rd, Santa Inez",
      addressLocality: "Panaji",
      addressRegion: "Goa",
      postalCode: "403001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.489123,
      longitude: 73.819111,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    hasMap: "https://maps.app.goo.gl/FSfiMEP7C4n4CMQTA",
    sameAs: [
      "https://www.linkedin.com/company/melangedigital/",
      "https://www.instagram.com/melangedigital.co",
    ],
  };
}

function officeMumbaiSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${ORIGIN}/#localbusiness-mumbai`,
    name: "Mélange Digital - Tourism Marketing Agency in Mumbai",
    parentOrganization: { "@id": `${ORIGIN}/#organization` },
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/logo.png`,
    telephone: "+91-7700974123",
    email: "hello@melangedigital.co",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L-302, The Trees Godrej, Vikhroli East",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400079",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.0922401,
      longitude: 72.9212571,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    hasMap:
      "https://www.google.com/maps/place/The+Trees/@19.0922452,72.9186822,17z",
    sameAs: [
      "https://www.linkedin.com/company/melangedigital/",
      "https://www.instagram.com/melangedigital.co",
    ],
  };
}

function faqSchema(faqs, { id, url, isPartOf }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    url,
    isPartOf: { "@id": isPartOf },
    about: { "@id": `${ORIGIN}/#organization` },
    inLanguage: "en",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function homeSchemas(meta = {}) {
  const name =
    meta.title ||
    "Global Travel & Tourism Marketing Agency | Mélange Digital";
  const description =
    meta.description ||
    "Mélange Digital helps tourism boards and travel brands worldwide turn cultural insight into arrivals through travel marketing. Book a call.";
  return [
    websiteSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${ORIGIN}/#webpage`,
      url: `${ORIGIN}/`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": `${ORIGIN}/#organization` },
      publisher: { "@id": `${ORIGIN}/#organization` },
      primaryImageOfPage: { "@id": `${ORIGIN}/#logo` },
      hasPart: { "@id": `${ORIGIN}/#faq` },
      inLanguage: "en",
    },
    officeGoaSchema(),
    officeMumbaiSchema(),
    faqSchema(HOME_FAQS, {
      id: `${ORIGIN}/#faq`,
      url: `${ORIGIN}/`,
      isPartOf: `${ORIGIN}/#webpage`,
    }),
  ];
}

function servicesSchemas(meta = {}) {
  const name =
    meta.title || "Digital Marketing for Travel and Tourism | Mélange Digital";
  const description =
    meta.description ||
    "Mélange Digital offers travel and tourism marketing services, from influencer marketing to branding for destinations, DMOs, and NTOs.";
  return [
    websiteSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${ORIGIN}/services#webpage`,
      url: `${ORIGIN}/services`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": `${ORIGIN}/#organization` },
      mainEntity: { "@id": `${ORIGIN}/services#itemlist` },
      breadcrumb: { "@id": `${ORIGIN}/services#breadcrumb` },
      publisher: { "@id": `${ORIGIN}/#organization` },
      hasPart: { "@id": `${ORIGIN}/services#faq` },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${ORIGIN}/services#itemlist`,
      name: "Digital Marketing Services for Travel and Tourism",
      numberOfItems: HUB_SERVICES.length,
      itemListElement: HUB_SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          "@id": `${ORIGIN}/services/${s.slug}#service`,
          name: s.name,
          url: `${ORIGIN}/services/${s.slug}`,
          provider: { "@id": `${ORIGIN}/#organization` },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${ORIGIN}/services#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${ORIGIN}/services`,
        },
      ],
    },
    faqSchema(SERVICES_FAQS, {
      id: `${ORIGIN}/services#faq`,
      url: `${ORIGIN}/services`,
      isPartOf: `${ORIGIN}/services#webpage`,
    }),
  ];
}

function influencerMarketingSchemas(meta = {}) {
  const path = "/services/influencer-marketing";
  const name =
    meta.title ||
    "Travel Influencer Marketing Agency for tourism boards| Mélange Digital";
  const description =
    meta.description ||
    "Mélange casts influencers & celebrities for tourism boards, DMOs, travel brands by trust, not follower count. Connect now for travel influencer marketing.";
  const webpageId = `${ORIGIN}${path}#webpage`;
  const serviceId = `${ORIGIN}${path}#service`;
  const breadcrumbId = `${ORIGIN}${path}#breadcrumb`;
  const faqId = `${ORIGIN}${path}#faq`;
  return [
    websiteSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: `${ORIGIN}${path}`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": serviceId },
      mainEntity: { "@id": serviceId },
      breadcrumb: { "@id": breadcrumbId },
      publisher: { "@id": `${ORIGIN}/#organization` },
      hasPart: { "@id": faqId },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "Influencer Marketing",
      alternateName: "Influencer & Celebrity Marketing in Travel & Tourism",
      serviceType: "Travel influencer and celebrity marketing",
      description,
      url: `${ORIGIN}${path}`,
      provider: { "@id": `${ORIGIN}/#organization` },
      areaServed: organizationSchema().areaServed,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "National tourism organisations (NTOs), destination marketing organisations (DMOs) and travel brands",
      },
      mainEntityOfPage: { "@id": webpageId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${ORIGIN}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Influencer Marketing",
          item: `${ORIGIN}${path}`,
        },
      ],
    },
    faqSchema(INFLUENCER_MARKETING_FAQS, {
      id: faqId,
      url: `${ORIGIN}${path}`,
      isPartOf: webpageId,
    }),
  ];
}

function brandedContentIpsSchemas(meta = {}) {
  const path = "/services/branded-content-ips";
  const name =
    meta.title || "Film Tourism Marketing & Branded Content | Mélange Digital";
  const description =
    meta.description ||
    "Mélange secures film, music and editorial IP, the core of film tourism marketing, so destinations live inside stories audiences choose to watch.";
  const webpageId = `${ORIGIN}${path}#webpage`;
  const serviceId = `${ORIGIN}${path}#service`;
  const breadcrumbId = `${ORIGIN}${path}#breadcrumb`;
  const faqId = `${ORIGIN}${path}#faq`;

  return [
    websiteSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: `${ORIGIN}${path}`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": serviceId },
      mainEntity: { "@id": serviceId },
      breadcrumb: { "@id": breadcrumbId },
      publisher: { "@id": `${ORIGIN}/#organization` },
      hasPart: { "@id": faqId },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "Branded Content and IPs",
      alternateName: "Film Tourism Marketing and Branded Content for Destinations",
      serviceType: "Film tourism marketing and branded content",
      description,
      url: `${ORIGIN}${path}`,
      provider: { "@id": `${ORIGIN}/#organization` },
      areaServed: organizationSchema().areaServed,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "National tourism organisations (NTOs), destination marketing organisations (DMOs) and travel brands",
      },
      mainEntityOfPage: { "@id": webpageId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${ORIGIN}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Branded Content & IPs",
          item: `${ORIGIN}${path}`,
        },
      ],
    },
    faqSchema(BRANDED_CONTENT_IPS_FAQS, {
      id: faqId,
      url: `${ORIGIN}${path}`,
      isPartOf: webpageId,
    }),
  ];
}

function experientialMarketingSchemas(meta = {}) {
  const path = "/services/experiential-marketing";
  const name =
    meta.title || "Tourism Experiential Marketing Agency | Mélange Digital";
  const description =
    meta.description ||
    "Mélange runs tourism experiential marketing: trade show booths, roadshows and mall activations built to capture qualified leads, not footfall.";
  const webpageId = `${ORIGIN}${path}#webpage`;
  const serviceId = `${ORIGIN}${path}#service`;
  const breadcrumbId = `${ORIGIN}${path}#breadcrumb`;
  const faqId = `${ORIGIN}${path}#faq`;

  return [
    websiteSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: `${ORIGIN}${path}`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": serviceId },
      mainEntity: { "@id": serviceId },
      breadcrumb: { "@id": breadcrumbId },
      publisher: { "@id": `${ORIGIN}/#organization` },
      hasPart: { "@id": faqId },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "Experiential Marketing",
      alternateName: "Experiential Marketing in Travel & Tourism",
      serviceType: "Tourism experiential marketing",
      description,
      url: `${ORIGIN}${path}`,
      provider: { "@id": `${ORIGIN}/#organization` },
      areaServed: organizationSchema().areaServed,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "National tourism organisations (NTOs), destination marketing organisations (DMOs) and travel brands",
      },
      mainEntityOfPage: { "@id": webpageId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${ORIGIN}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Experiential Marketing",
          item: `${ORIGIN}${path}`,
        },
      ],
    },
    faqSchema(EXPERIENTIAL_MARKETING_FAQS, {
      id: faqId,
      url: `${ORIGIN}${path}`,
      isPartOf: webpageId,
    }),
  ];
}

function famTripsPrSchemas(meta = {}) {
  const path = "/services/fam-trips-pr";
  const name =
    meta.title || "Travel PR Agency & FAM Trip Management | Mélange Digital";
  const description =
    meta.description ||
    "Mélange runs familiarisation trips & destination PR for tourism boards: journalist and creator FAMs, trade hosting and much more across the GCC.";
  const webpageId = `${ORIGIN}${path}#webpage`;
  const serviceId = `${ORIGIN}${path}#service`;
  const breadcrumbId = `${ORIGIN}${path}#breadcrumb`;
  const faqId = `${ORIGIN}${path}#faq`;

  return [
    websiteSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: `${ORIGIN}${path}`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": serviceId },
      mainEntity: { "@id": serviceId },
      breadcrumb: { "@id": breadcrumbId },
      publisher: { "@id": `${ORIGIN}/#organization` },
      hasPart: { "@id": faqId },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "FAM Trips and Travel PR",
      alternateName: "FAM Trips + PR in Travel & Tourism",
      serviceType: "Travel PR and familiarisation (FAM) trip management",
      description,
      url: `${ORIGIN}${path}`,
      provider: { "@id": `${ORIGIN}/#organization` },
      areaServed: organizationSchema().areaServed,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "National tourism organisations (NTOs), destination marketing organisations (DMOs) and travel brands",
      },
      mainEntityOfPage: { "@id": webpageId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${ORIGIN}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "FAM Trips + PR",
          item: `${ORIGIN}${path}`,
        },
      ],
    },
    faqSchema(FAM_TRIPS_PR_FAQS, {
      id: faqId,
      url: `${ORIGIN}${path}`,
      isPartOf: webpageId,
    }),
  ];
}

function aboutSchemas(meta = {}) {
  const name =
    meta.title || "Best Destination Marketing Agency | Mélange Digital";
  const description =
    meta.description ||
    "We're a destination marketing agency for DMOs, NTOs, and tourism boards, built by people who've worked inside one. Meet the team driving the strategy.";
  return [
    websiteSchema(),
    organizationSchema(),
    officeGoaSchema(),
    officeMumbaiSchema(),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${ORIGIN}/about#webpage`,
      url: `${ORIGIN}/about`,
      name,
      description,
      isPartOf: { "@id": `${ORIGIN}/#website` },
      about: { "@id": `${ORIGIN}/#organization` },
      mainEntity: { "@id": `${ORIGIN}/#organization` },
      breadcrumb: { "@id": `${ORIGIN}/about#breadcrumb` },
      publisher: { "@id": `${ORIGIN}/#organization` },
      hasPart: { "@id": `${ORIGIN}/about#faq` },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${ORIGIN}/about#leadership`,
      name: "Leadership that moves the needle",
      numberOfItems: LEADERS.length,
      itemListElement: LEADERS.map((person, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          "@id": person.id,
          name: person.name,
          jobTitle: person.jobTitle,
          worksFor: { "@id": `${ORIGIN}/#organization` },
          sameAs: person.sameAs,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${ORIGIN}/about#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${ORIGIN}/about`,
        },
      ],
    },
    faqSchema(ABOUT_FAQS, {
      id: `${ORIGIN}/about#faq`,
      url: `${ORIGIN}/about`,
      isPartOf: `${ORIGIN}/about#webpage`,
    }),
  ];
}

function schemasForPath(path, meta = {}) {
  if (path === "/") return homeSchemas(meta);
  if (path === "/services") return servicesSchemas(meta);
  if (path === "/about") return aboutSchemas(meta);
  if (path === "/services/influencer-marketing") {
    return influencerMarketingSchemas(meta);
  }
  if (path === "/services/branded-content-ips") {
    return brandedContentIpsSchemas(meta);
  }
  if (path === "/services/experiential-marketing") {
    return experientialMarketingSchemas(meta);
  }
  if (path === "/services/fam-trips-pr") {
    return famTripsPrSchemas(meta);
  }
  return null;
}

module.exports = {
  HUB_SERVICES,
  HOME_FAQS,
  SERVICES_FAQS,
  INFLUENCER_MARKETING_FAQS,
  BRANDED_CONTENT_IPS_FAQS,
  ABOUT_FAQS,
  LEADERS,
  websiteSchema,
  organizationSchema,
  officeGoaSchema,
  officeMumbaiSchema,
  homeSchemas,
  servicesSchemas,
  aboutSchemas,
  influencerMarketingSchemas,
  brandedContentIpsSchemas,
  experientialMarketingSchemas,
  famTripsPrSchemas,
  schemasForPath,
};
