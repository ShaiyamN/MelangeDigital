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
      title: 'Singapore Tourism Board: "Is This Even Singapore?"',
      slug: "singapore-tourism-board-isthisevensingapore",
      bannerImage: "/destination-marketing-agency/images/services/banner-stb.webp",
      caption: "21 creators across five youth subcultures. 190M views. +18% YOY arrivals from India's under-35 cohort.",
    },
    slot2: {
      title: "Hong Kong Tourism Board: #HerHongKong",
      slug: "hong-kong-tourism-board-herhongkong",
      bannerImage: "/destination-marketing-agency/images/work/her-hong-kong-hktb.png",
      caption: "+22% YOY growth in South Indian female arrivals, driven by four actresses cast against real travel motivations.",
    },
  },
  branded: {
    id: "branded",
    name: "Branded Content & IPs",
    shortName: "Branded",
    slot1: {
      title: "Dharma Productions – Singapore Tourism Board: Jigra",
      slug: "dharma-productions-x-singapore-tourism-board-jigra",
      bannerImage: "/destination-marketing-agency/images/services/banner-jigra.webp",
      caption: "Over 50% of the film shot in Singapore across seven landmarks. Six-plus follow-on production conversations generated.",
    },
    slot2: {
      title: 'Singapore Tourism Board – DIVINE: "Saucy"',
      slug: "singapore-tourism-board-x-divine-saucy-music-video",
      bannerImage: "/destination-marketing-agency/images/services/banner-divine.webp",
      caption: "A destination woven into hip-hop's biggest release of the year. +21pts youth-cohort travel affinity.",
    },
  },
  experiential: {
    id: "experiential",
    name: "Experiential Marketing",
    shortName: "Experiential",
    slot1: {
      title: "Saudi Tourism Authority – Akbar Travels: Mall Activation",
      slug: "akbar-travels",
      bannerImage: "/destination-marketing-agency/images/services/banner-saudi.webp",
      caption: "A four-day immersive kiosk at Phoenix Marketcity. 400+ walk-ins and 1,200+ e-visa enquiries in four days.",
    },
    slot2: {
      title: "Zambia Tourism Authority: OTM Mumbai 2026",
      slug: "zambia-tourism-otm-mumbai-2026",
      bannerImage: "/destination-marketing-agency/images/services/banner-zambia.webp",
      caption: "A first-time entrant's booth built for experience, not just visibility. 500+ qualified trade connections and a Most Promising Destination award.",
    },
  },
  fam: {
    id: "fam",
    name: "FAM Trips + PR",
    shortName: "FAM + PR",
    slot1: {
      title: "Resorts World Sentosa: Go Bananas in Minion Land",
      slug: "resorts-world-sentosa-go-bananas-in-minion-land",
      bannerImage: "/destination-marketing-agency/images/services/banner-rws.webp",
      caption: "Five regional-language creators on ShareChat and Moj. 56M views. +6.8% lift in consideration to visit.",
    },
    slot2: {
      title: "Hong Kong Tourism Board – Ram Charan: Esquire Cover",
      slug: "hong-kong-tourism-board-x-ram-charan-esquire-india-cover",
      bannerImage: "/destination-marketing-agency/images/services/banner-hktb.webp",
      caption: "A destination cover story shot on location. ~10X ROI on HKTB's investment and $2.5M in earned media value.",
    },
  },
};
