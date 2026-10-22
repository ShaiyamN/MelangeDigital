import CASE_STUDY_SEO from "./caseStudySeo.json" with { type: "json" };

/**
 * Default work cards configuration for the 4 service blocks on /services.
 * Used as fallback and baseline when custom case study overrides are set from the Admin Panel.
 */
export const DEFAULT_SERVICE_CARDS = {
  influencer: {
    id: "influencer",
    name: "Influencer & Celebrity Marketing",
    shortName: "Influencer",
    slot1: {
      title: "Singapore Tourism Board: #IsThisEvenSingapore",
      slug: "singapore-tourism-board-isthisevensingapore",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784615757/gfaniul2q2obwsptkqxf.png",
      caption: "21 creators across five youth subcultures. 190M views. Total Indian arrivals grew 18% YoY; under-35 traveller share rose from 31% to 39%.",
    },
    slot2: {
      title: "Hong Kong Tourism Board: #HerHongKong",
      slug: "hong-kong-tourism-board-herhongkong",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784614817/hxmjpdwafz28ruf41sn7.png",
      caption: "Hong Kong read as a corporate stopover for Indian travellers. Meanwhile South Indian women were travelling independently for self-discovery, a high-intent cohort no destination had claimed.",
    },
  },
  branded: {
    id: "branded",
    name: "Branded Content & IP's",
    shortName: "Branded",
    slot1: {
      title: "Dharma Productions x Singapore Tourism Board: Jigra",
      slug: "dharma-productions-x-singapore-tourism-board-jigra",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1786615807/shkfhgaxrbl79zhobfxl.png",
      caption: "Over 50% of the film shot in Singapore across seven landmarks. Six-plus follow-on production conversations generated.",
    },
    slot2: {
      title: "Singapore Tourism Board x DIVINE: Saucy Music Video",
      slug: "singapore-tourism-board-x-divine-saucy-music-video",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784617229/hlh3ap4lmrln1ko70902.png",
      caption: "A destination woven into hip-hop's biggest release of the year. +21pts youth-cohort travel affinity.",
    },
  },
  experiential: {
    id: "experiential",
    name: "Experiential Marketing",
    shortName: "Experiential",
    slot1: {
      title: "Mall Activation For Saudi Tourism",
      slug: "mall-activation-for-saudi-tourism",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1789710108/dzr088ftu02tfbcjqij4.png",
      caption: "Saudi Arabia was fixed in the Indian mind as a religious destination. Its leisure and tourism proposition, culture, destinations, hospitality, had almost no awareness among Indian leisure travellers. Perception that entrenched needed physical, sensory proof, not another screen.",
    },
    slot2: {
      title: "Zambia Tourism: OTM Mumbai 2026",
      slug: "zambia-tourism-otm-mumbai-2026",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784615253/i5bja9epdkwkmty3w92c.png",
      caption: "Client-reported results from a one-year mandate: 500+ trade connections, approximately US$3.2M from seven MICE groups (75–700 guests), and 18 influencers. The campaign also received a Most Promising Destination award.",
    },
  },
  fam: {
    id: "fam",
    name: "FAM Trips + PR",
    shortName: "FAM + PR",
    slot1: {
      title: "Resorts World Sentosa: Go Bananas in Minion Land",
      slug: "resorts-world-sentosa-go-bananas-in-minion-land",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1786617757/cgqyaqyagvgw1vjrl2db.png",
      caption: "Five regional-language creators on ShareChat and Moj. 86M+ views; 4,927 direct bookings reported by Resorts World Sentosa via a tracked booking link.",
    },
    slot2: {
      title: "Hong Kong Tourism Board x Ram Charan: Esquire India Cover",
      slug: "hong-kong-tourism-board-x-ram-charan-esquire-india-cover",
      bannerImage: "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784620883/b6d6mh1u7ie4kkd7evev.png",
      caption: "A destination cover story shot on location. ~10X ROI on HKTB's investment and $2.5M in earned media value.",
    },
  },
};

const SERVICE_CARD_ALT_TEXT = {
  "singapore-tourism-board-isthisevensingapore":
    "Singapore skyline with Marina Bay Sands and Esplanade for the #IsThisEvenSingapore tourism board influencer marketing campaign",
  "hong-kong-tourism-board-herhongkong":
    "Four women taking a selfie against the Hong Kong skyline for the #HerHongKong campaign with Cleartrip",
  "dharma-productions-x-singapore-tourism-board-jigra":
    "Jigra film shoot in Singapore graphic for the Dharma Productions x Singapore Tourism Board partnership - Film Tourism",
  "singapore-tourism-board-x-divine-saucy-music-video":
    "Saucy music video graphic featuring DIVINE and Mouni Roy, a Singapore Tourism Board branded content IP Film Tourism",
  "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1789710108/dzr088ftu02tfbcjqij4.png":
    "Riyadh skyline with Kingdom Centre for the mall activation campaign for Saudi Arabia Tourism",
  "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784615253/i5bja9epdkwkmty3w92c.png":
    "Zambia Tourism Board at OTM Mumbai 2026 collage with Victoria Falls, booth performers and delegates",
  "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1789723131/iufyjxfwguwllsjub9pd.png":
    "Visitor taking a selfie with traditional Zambian performers, showcasing Zambia's entry at OTM Mumbai",
  "resorts-world-sentosa-go-bananas-in-minion-land":
    "Resorts World Sentosa Go Bananas in Minion Land campaign graphic with Minion characters at the theme park",
  "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1786617757/cgqyaqyagvgw1vjrl2db.png":
    "Resorts World Sentosa Go Bananas in Minion Land campaign graphic with Minion characters at the theme park",
  "hong-kong-tourism-board-x-ram-charan-esquire-india-cover":
    "Hong Kong Tourism Board Marketing x Ram Charan Esquire India cover shoot on a junk boat, a travel PR case study",
  "https://res.cloudinary.com/dbhrpsnzg/image/upload/v1784620883/b6d6mh1u7ie4kkd7evev.png":
    "Hong Kong Tourism Board Marketing x Ram Charan Esquire India cover shoot on a junk boat, a travel PR case study",
};

export function getServiceCardAltText(card) {
  return SERVICE_CARD_ALT_TEXT[card?.bannerImage] || SERVICE_CARD_ALT_TEXT[card?.slug] || card?.title || "";
}

export function applyCaseStudySeo(card) {
  const caseSeo = CASE_STUDY_SEO[card?.slug];
  if (!caseSeo) return card;
  const caption =
    caseSeo.cardCaption || card.serviceCaption || card.intro || card.caption || "";
  return {
    ...card,
    title: caseSeo.displayTitle || card.title,
    caption,
    serviceCaption: caption,
  };
}

/**
 * Resolves service slots by combining:
 * 1. Explicit slot assignments from Firestore `settings/service_cards`
 * 2. Any case study in `caseStudiesList` with `showOnService === true` and matching `serviceId` / `serviceSlot`
 * 3. Default card definitions from `DEFAULT_SERVICE_CARDS`
 * 4. Enriches every slot with live details (title, bannerImage, caption, slug) from `caseStudiesList`
 */
export function resolveServiceSlots(serviceId, settings, caseStudiesList = null) {
  const defaults = DEFAULT_SERVICE_CARDS[serviceId];
  if (!defaults) return [];

  const custom = settings?.[serviceId];
  let slot1 =
    custom && custom.slot1 !== undefined && custom.slot1 !== null
      ? { ...custom.slot1 }
      : defaults.slot1 ? { ...defaults.slot1 } : null;
  let slot2 =
    custom && custom.slot2 !== undefined && custom.slot2 !== null
      ? { ...custom.slot2 }
      : defaults.slot2 ? { ...defaults.slot2 } : null;

  // If live case studies from Firestore are provided, check for active serviceSlot flags
  if (Array.isArray(caseStudiesList) && caseStudiesList.length > 0) {
    for (const cs of caseStudiesList) {
      if (cs.showOnService && cs.serviceId === serviceId) {
        const slotData = {
          id: cs.id,
          title: cs.title,
          slug: cs.slug,
          bannerImage: cs.bannerImage,
          caption: (cs.serviceCaption || cs.intro || cs.caption || "").trim(),
        };
        if (Number(cs.serviceSlot) === 1) {
          slot1 = slotData;
        } else if (Number(cs.serviceSlot) === 2) {
          slot2 = slotData;
        }
      }
    }

    // Enrich existing slot cards with live case study details if matching by id or slug
    const enrichSlot = (slot) => {
      if (!slot) return null;
      const match = caseStudiesList.find(
        (cs) => (slot.id && cs.id === slot.id) || (slot.slug && cs.slug === slot.slug)
      );
      if (match) {
        return {
          ...slot,
          id: match.id || slot.id,
          title: match.title || slot.title,
          slug: match.slug || slot.slug,
          bannerImage: match.bannerImage || slot.bannerImage,
          caption: (match.serviceCaption || match.intro || match.caption || slot.caption || "").trim(),
        };
      }
      return slot;
    };

    if (slot1) slot1 = enrichSlot(slot1);
    if (slot2) slot2 = enrichSlot(slot2);
  }

  return [slot1, slot2].filter(Boolean).map(applyCaseStudySeo);
}
