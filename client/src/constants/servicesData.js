/**
 * Comprehensive service pages dataset for Melange Digital.
 * Contains verbatim copy, metadata, structured schema, and assets
 * for all 4 core services based on the official design & copy document.
 */

export const SERVICES_DATA = {
  "influencer-marketing": {
    slug: "influencer-marketing",
    name: "Influencer & Celebrity Marketing",
    seo: {
      title: "Travel Influencer Marketing Agency for tourism boards| Mélange Digital",
      description:
        "Mélange casts influencers & celebrities for tourism boards, DMOs, travel brands by trust, not follower count. Connect now for travel influencer marketing.",
      canonical: "https://melangedigital.co/services/influencer-marketing",
      h1: "Travel Influencer Marketing for Tourism Boards",
    },
    hero: {
      badge: "INFLUENCER & CELEBRITY MARKETING IN TRAVEL & TOURISM",
      titlePart1: "We Cast for Credibility,",
      titleAccent: "Not Follower Count.",
      subtitleLines: [
        "Creators. Celebrities. Communities.",
        "The people audiences choose to listen to.",
        "We put destinations inside the conversation through influencer and celebrity marketing.",
      ],
      ctaText: "Get In Touch",
      ctaLink: "/contact",
      collageImages: [
        { src: "/destination-marketing-agency/images/services/hero-creators-collage.png", alt: "Creators in Travel & Tourism" },
      ],
    },
    manifesto: {
      eyebrow: "INFLUENCE THAT TRAVELS FURTHER",
      titlePart1: "Reach Doesn't Book a Trip.",
      titleAccent: "Trust Does.",
      paragraph:
        "People travel because someone they trust made a place <span class=\"svc-highlight\">worth seeing</span>. That's the power of influencer marketing for travel brands and tourism boards.",
      linkText: "Scroll Down",
      linkHref: "#philosophy",
    },
    philosophy: {
      eyebrow: "WHERE IT WORKS",
      titlePart1: "Reach Doesn't Book a Trip.",
      titleAccent: "Trust Does.",
      description:
        "People travel because someone they trust made a place worth seeing. That's the power of influencer marketing for travel brands and tourism boards.",
      bgImage: "/destination-marketing-agency/images/services/where-it-works-bg.png",
      pillars: [
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-reposition.png",
          title: "REPOSITION",
          description: "Put a destination in front of a new audience.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-launch.png",
          title: "LAUNCH",
          description: "Build demand before a destination, hotel or resort opens.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-amplify.png",
          title: "AMPLIFY",
          description: "Turn seasonal campaigns into cultural moments.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-expand.png",
          title: "EXPAND",
          description: "Open new source markets through the creators already shaping them.",
        },
      ],
    },
    approach: {
      eyebrow: null,
      titlePart1: "Our",
      titleAccent: "Approach",
      cards: [
        {
          id: "cast-for-credibility",
          step: "01",
          title: "CAST FOR CREDIBILITY",
          description:
            "We match creators to the subculture, not the follower count. Selected for audience trust, niche authority and storytelling ability, so the endorsement actually carries weight.",
          image: "/destination-marketing-agency/images/services/approach-laptop.png",
        },
        {
          id: "data-before-deals",
          step: "02",
          title: "DATA BEFORE DEALS",
          description:
            "We check the data behind every creator before signing a contract: audience geography, engagement quality, authenticity, prior brand fit. Decisions backed by evidence, not instinct.",
          image: "/destination-marketing-agency/images/work/her-hong-kong-hktb.webp",
        },
        {
          id: "one-team-not-four",
          step: "03",
          title: "ONE TEAM, NOT FOUR",
          description:
            "Casting, negotiation, content and reporting run under one roof, not four vendors. That's what a travel influencer marketing agency means, One point of accountability from brief to final report.",
          image: "/destination-marketing-agency/images/work/her-hong-kong-hktb.png",
        },
        {
          id: "community-not-reach",
          step: "04",
          title: "COMMUNITY, NOT JUST REACH",
          description:
            "Our campaigns build creator communities that outlast the campaign. Participation and advocacy that keep working after the spend stops.",
          image: "/destination-marketing-agency/images/services/banner-rws.webp",
        },
      ],
    },
    process: {
      eyebrow: "FROM BRIEF TO BRAND MOMENTUM",
      titlePart1: "From Brief to",
      titleAccent: "Brand Momentum",
      description: "Managed as one connected campaign, not a string of individual bookings.",
      steps: [
        { number: "01", title: "Celebrity & Creator Identification and Vetting" },
        { number: "02", title: "Talent Negotiation and Contracting" },
        { number: "03", title: "Campaign Strategy and Casting" },
        { number: "04", title: "Content Direction and Production Oversight" },
        { number: "05", title: "Community and Fandom Engagement" },
        { number: "06", title: "Performance Tracking and Reporting" },
      ],
    },
    caseStudies: {
      titlePart1: "Work That Moved",
      titleAccent: "Arrivals",
      cards: [
        {
          id: "singapore-tourism-board-isthisevensingapore",
          title: 'Singapore Tourism Board: "Is This Even Singapore?"',
          caption:
            "21 creators across five youth subcultures. 190M views. +18% YOY arrivals from India's under-35 cohort.",
          bannerImage: "/destination-marketing-agency/images/services/banner-stb.webp",
          slug: "/work/singapore-tourism-board-isthisevensingapore",
        },
        {
          id: "resorts-world-sentosa-go-bananas-in-minion-land",
          title: "Universal Studios Singapore — Go Bananas in Minion Land",
          caption:
            "Five regional-language creators on ShareChat and Moj. 56M views. +6.8% lift in consideration to visit.",
          bannerImage: "/destination-marketing-agency/images/services/banner-rws.webp",
          slug: "/work/resorts-world-sentosa-go-bananas-in-minion-land",
        },
      ],
    },
    faqs: {
      titlePart1: "",
      titleAccent: "Answered",
      titlePart2: "before you ask",
      items: [
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
          question: "What can Mélange as an per expert Travel influencer Marketing agency do?",
          answer:
            "Mélange run celebrity destination campaigns as well as creator campaigns. Both, often in the same campaign. Our network spans mega-follower celebrities through to regional-language creators on platforms like ShareChat and Moj, cast by fit rather than tier.",
        },
        {
          question: "Can influencer marketing actually be measured against arrivals?",
          answer:
            "Yes, when it is set up for it. We agree the arrivals or consideration metric with the tourism board at brief stage and report against it, alongside standard reach and engagement data.",
        },
      ],
    },
    bottomCta: {
      titlePart1: "Every Creator.",
      titlePart2: "One Outcome:",
      titleAccent: "Arrivals.",
      buttonText: "Get In Touch",
      buttonLink: "/contact",
      bgImage: "/destination-marketing-agency/images/services/arrivals-banner-bg.png",
    },
  },

  "branded-content-ips": {
    slug: "branded-content-ips",
    name: "Branded Content & IP",
    seo: {
      title: "Film Tourism Marketing & Branded Content | Mélange Digital",
      description:
        "Mélange secures film, music and editorial IP, the core of film tourism marketing, so destinations live inside stories audiences choose to watch.",
      canonical: "https://melangedigital.co/services/branded-content-ips",
      h1: "Film Tourism Marketing and Branded Content for Destinations",
    },
    hero: {
      badge: "FILM TOURISM MARKETING & BRANDED CONTENT",
      titlePart1: "We Secure the IP,",
      titleAccent: "Not Just a Placement.",
      descriptionLines: [
        "Films. Music. Editorial.",
        "The cultural spaces audiences choose to spend time in.",
        "We put destinations inside the story through film tourism and travel branding",
      ],
      ctaText: "Get In Touch",
      ctaLink: "/contact",
      collageImages: [
        { src: "/destination-marketing-agency/images/services/banner-jigra.webp", alt: "Jigra Film Feature" },
        { src: "/destination-marketing-agency/images/services/banner-divine.webp", alt: "DIVINE Saucy Music Video" },
        { src: "/destination-marketing-agency/images/work/jigra.webp", alt: "Jigra Set" },
        { src: "/destination-marketing-agency/images/services/banner-stb.webp", alt: "Singapore Destination" },
        { src: "/destination-marketing-agency/images/creators/hk-1.png", alt: "Brand IP Feature" },
        { src: "/destination-marketing-agency/images/creators/ites-1.png", alt: "Cultural Integration" },
        { src: "/destination-marketing-agency/images/creators/ites-2.png", alt: "Media Storytelling" },
        { src: "/destination-marketing-agency/images/creators/ites-3.png", alt: "Entertainment Production" },
        { src: "/destination-marketing-agency/images/creators/ites-4.png", alt: "Celebrity Partnership" },
        { src: "/destination-marketing-agency/images/creators/ites-5.png", alt: "Soundtrack Placement" },
        { src: "/destination-marketing-agency/images/creators/ites-6.png", alt: "Broadcast Media" },
        { src: "/destination-marketing-agency/images/creators/ites-7.png", alt: "Global Reach" },
      ],
    },
    manifesto: {
      eyebrow: "STORIES THAT TRAVEL FURTHER",
      titlePart1: "Culture Doesn't Run Ads.",
      titleAccent: "It Runs Stories.",
      paragraph:
        "People skip ads. They don't skip the stories they <span class=\"svc-highlight\">love</span>. That's the power of film tourism for travel brands and tourism boards.",
      linkText: "Scroll Down",
      linkHref: "#philosophy",
    },
    philosophy: {
      eyebrow: "WHERE IT WORKS",
      titlePart1: "Culture Doesn't Run Ads.",
      titleAccent: "It Runs Stories.",
      description:
        "People skip ads. They don't skip the stories they love. That's the power of film tourism for travel brands and tourism boards.",
      bgImage: "/destination-marketing-agency/images/services/banner-jigra.webp",
      pillars: [
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-film.png",
          title: "FILM",
          description: "Position a destination as a filming hub.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-music.png",
          title: "MUSIC",
          description: "Embed a destination into releases built around a specific culture.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-editorial.png",
          title: "EDITORIAL",
          description: "Create credible moments through publishers and platforms people trust.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-culture.png",
          title: "CULTURE",
          description: "Build associations that outlast the campaign.",
        },
      ],
    },
    approach: {
      eyebrow: null,
      titlePart1: "Our",
      titleAccent: "Approach",
      cards: [
        {
          id: "secure-ips",
          step: "01",
          title: "We Secure the IPs",
          description: "We land the production or the track, not just a placement inside it.",
          image: "/destination-marketing-agency/images/services/banner-jigra.webp",
          icon: "/destination-marketing-agency/images/services/icon-cast.svg",
        },
        {
          id: "story-first",
          step: "02",
          title: "Story First",
          description: "The destination lives inside the narrative, never bolted on top.",
          image: "/destination-marketing-agency/images/services/banner-divine.webp",
          icon: "/destination-marketing-agency/images/services/icon-data.svg",
        },
        {
          id: "access-not-outreach",
          step: "03",
          title: "Access, Not Outreach",
          description: "Our film and music network gets a destination cast, not just pitched.",
          image: "/destination-marketing-agency/images/services/banner-stb.webp",
          icon: "/destination-marketing-agency/images/services/icon-team.svg",
        },
        {
          id: "earned-reach",
          step: "04",
          title: "Built for Earned Reach",
          description: "Every asset is designed to travel past the paid media budget.",
          image: "/destination-marketing-agency/images/services/banner-rws.webp",
          icon: "/destination-marketing-agency/images/services/icon-community.svg",
        },
      ],
    },
    process: {
      eyebrow: "FROM BRIEF TO BRAND MOMENTUM",
      titlePart1: "From Brief to",
      titleAccent: "Brand Momentum",
      description: "One Partnership - From First Conversation to Final Release.",
      steps: [
        { number: "01", title: "Brand Strategy & Positioning" },
        { number: "02", title: "Content Strategy & Production" },
        { number: "03", title: "Film & Music Integration" },
        { number: "04", title: "Editorial & Publisher Partnerships" },
        { number: "05", title: "Script & Story Development" },
        { number: "06", title: "Distribution & Amplification" },
      ],
    },
    caseStudies: {
      titlePart1: "Work That Moved",
      titleAccent: "Arrivals",
      cards: [
        {
          id: "dharma-productions-x-singapore-tourism-board-jigra",
          title: "Dharma Productions × Singapore Tourism Board — Jigra",
          caption:
            "Over 50% of the film shot in Singapore across seven landmarks. Six-plus follow-on production conversations generated.",
          bannerImage: "/destination-marketing-agency/images/services/banner-jigra.webp",
          slug: "/work/dharma-productions-x-singapore-tourism-board-jigra",
        },
        {
          id: "singapore-tourism-board-x-divine-saucy-music-video",
          title: "Singapore Tourism Board × DIVINE — Saucy",
          caption:
            "A destination woven into hip-hop's biggest release of the year. +21pts youth-cohort travel affinity.",
          bannerImage: "/destination-marketing-agency/images/services/banner-divine.webp",
          slug: "/work/singapore-tourism-board-x-divine-saucy-music-video",
        },
      ],
    },
    faqs: {
      titlePart1: "",
      titleAccent: "Answered",
      titlePart2: "before you ask",
      items: [
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
      ],
    },
    bottomCta: {
      titlePart1: "Every Story.",
      titlePart2: "One Outcome:",
      titleAccent: "Arrivals.",
      buttonText: "Get In Touch",
      buttonLink: "/contact",
    },
  },

  "experiential-marketing": {
    slug: "experiential-marketing",
    name: "Experiential Marketing",
    seo: {
      title: "Tourism Experiential Marketing Agency | Mélange Digital",
      description:
        "Mélange runs tourism experiential marketing: trade show booths, roadshows and mall activations built to capture qualified leads, not footfall.",
      canonical: "https://melangedigital.co/services/experiential-marketing",
      h1: "Experiential Marketing for Tourism Boards and Travel Brands",
    },
    hero: {
      badge: "EXPERIENTIAL MARKETING IN TRAVEL & TOURISM",
      titlePart1: "Presence That",
      titleAccent: "Outperforms.",
      descriptionLines: [
        "Trade Shows. Roadshows. Retail.",
        "The physical spaces where audiences experience a destination.",
        "We deliver experiential marketing for travel and tourism, putting destinations into the real world through experiences built to engage audiences and drive commercial impact.",
      ],
      ctaText: "Get In Touch",
      ctaLink: "/contact",
      collageImages: [
        { src: "/destination-marketing-agency/images/services/banner-saudi.webp", alt: "Saudi Mall Kiosk" },
        { src: "/destination-marketing-agency/images/services/banner-zambia.webp", alt: "Zambia Tourism Booth" },
        { src: "/destination-marketing-agency/images/services/banner-rws.webp", alt: "Experiential Roadshow" },
        { src: "/destination-marketing-agency/images/work/singapore-stb.webp", alt: "Interactive Experience" },
        { src: "/destination-marketing-agency/images/creators/hk-2.png", alt: "On-ground Activation" },
        { src: "/destination-marketing-agency/images/creators/ites-7.png", alt: "Audience Interaction" },
        { src: "/destination-marketing-agency/images/creators/ites-8.png", alt: "Exhibition Pavillion" },
        { src: "/destination-marketing-agency/images/creators/ites-9.png", alt: "VR & AR Showcase" },
        { src: "/destination-marketing-agency/images/creators/ites-10.png", alt: "Visitor Engagement" },
        { src: "/destination-marketing-agency/images/creators/ites-11.png", alt: "Trade Connection" },
        { src: "/destination-marketing-agency/images/creators/ites-12.png", alt: "Brand Pop-up" },
        { src: "/destination-marketing-agency/images/creators/ites-13.png", alt: "Live Event" },
      ],
    },
    manifesto: {
      eyebrow: "EXPERIENCE THAT TRAVELS FURTHER",
      titlePart1: "Footfall Doesn't Build Demand.",
      titleAccent: "Experience Does.",
      paragraph:
        "People remember what they <span class=\"svc-highlight\">experience</span>, not just what they see. That's the power of experiential marketing for travel brands and tourism boards.",
      linkText: "Scroll Down",
      linkHref: "#philosophy",
    },
    philosophy: {
      eyebrow: "WHERE IT WORKS",
      titlePart1: "Footfall Doesn't Build Demand.",
      titleAccent: "Experience Does.",
      description:
        "People remember what they experience, not just what they see. That's the power of experiential marketing for travel brands and tourism boards.",
      bgImage: "/destination-marketing-agency/images/services/banner-saudi.webp",
      pillars: [
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-launch.png",
          title: "LAUNCH",
          description: "Make a new destination, route, hotel or proposition impossible to ignore.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-connect.png",
          title: "CONNECT",
          description: "Bring destinations to life for the trade and consumers in priority markets.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-engage.png",
          title: "ENGAGE",
          description: "Turn trade shows, roadshows and retail spaces into meaningful brand experiences.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-convert.png",
          title: "CONVERT",
          description: "Capture qualified enquiries and connections that move beyond the activation.",
        },
      ],
    },
    approach: {
      eyebrow: null,
      titlePart1: "Our",
      titleAccent: "Approach",
      cards: [
        {
          id: "destination-first",
          step: "01",
          title: "Destination First",
          description:
            "Every activation starts with the destination, audience and commercial objective. The experience is designed around what needs to be remembered, felt and acted upon.",
          image: "/destination-marketing-agency/images/services/banner-saudi.webp",
          icon: "/destination-marketing-agency/images/services/icon-cast.svg",
        },
        {
          id: "built-to-be-experienced",
          step: "02",
          title: "Built to Be Experienced",
          description:
            "We combine physical storytelling with technology, performance and interaction — from VR and AR to gamification and interactive installations.",
          image: "/destination-marketing-agency/images/services/banner-zambia.webp",
          icon: "/destination-marketing-agency/images/services/icon-data.svg",
        },
        {
          id: "one-team-end-to-end",
          step: "03",
          title: "One Team, End to End",
          description:
            "Strategy, design, fabrication, staffing and execution run under one roof. One connected process, one point of accountability from concept to activation.",
          image: "/destination-marketing-agency/images/services/banner-rws.webp",
          icon: "/destination-marketing-agency/images/services/icon-team.svg",
        },
        {
          id: "designed-to-deliver",
          step: "04",
          title: "Designed to Deliver",
          description:
            "We measure what happens beyond the crowd: qualified enquiries, trade connections, engagement and campaign results. Because footfall is an input. A qualified lead is the output.",
          image: "/destination-marketing-agency/images/work/singapore-stb.webp",
          icon: "/destination-marketing-agency/images/services/icon-community.svg",
        },
      ],
    },
    process: {
      eyebrow: "FROM BRIEF TO BRAND MOMENTUM",
      titlePart1: "From Brief to",
      titleAccent: "Brand Momentum",
      description: "Managed as one connected activation, not a string of separate suppliers.",
      steps: [
        { number: "01", title: "Experiential Strategy & Campaign Planning" },
        { number: "02", title: "Booth Design, Fabrication & Installation" },
        { number: "03", title: "Roadshows & Mall Activations" },
        { number: "04", title: "Interactive Technology & Performance" },
        { number: "05", title: "On-Ground Staffing & Execution" },
        { number: "06", title: "Lead Capture, Tracking & Reporting" },
      ],
    },
    caseStudies: {
      titlePart1: "Work That Moved",
      titleAccent: "Arrivals",
      cards: [
        {
          id: "akbar-travels",
          title: "Saudi Tourism Authority × Akbar Travels",
          caption:
            "A four-day immersive kiosk at Phoenix Marketcity. 400+ walk-ins and 1,200+ e-visa enquiries in four days.",
          bannerImage: "/destination-marketing-agency/images/services/banner-saudi.webp",
          slug: "/work/akbar-travels",
        },
        {
          id: "zambia-tourism-otm-mumbai-2026",
          title: "Zambia Tourism Agency × OTM Mumbai 2026",
          caption:
            "A first-time entrant's booth built for experience, not just visibility. 500+ qualified trade connections and a Most Promising Destination award.",
          bannerImage: "/destination-marketing-agency/images/services/banner-zambia.webp",
          slug: "/work/zambia-tourism-otm-mumbai-2026",
        },
      ],
    },
    faqs: {
      titlePart1: "",
      titleAccent: "Answered",
      titlePart2: "before you ask",
      items: [
        {
          question: "What does experiential marketing for a tourism board include?",
          answer:
            "Experiential marketing for tourism boards includes trade show booths and kiosks, roadshows, mall activations, destination launches, interactive technology such as AR and VR, live performance and on-ground staffing. It can also include lead capture and qualification, so the activation is measured against enquiries and trade connections, not just footfall.",
        },
        {
          question: "Do you design and build the trade show booth, or only the concept?",
          answer:
            "Both. Strategy, design, fabrication, installation, staffing and execution can all run through one team. This keeps the destination experience consistent from the first concept through to the final activation.",
        },
        {
          question: "Which travel trade shows in India should a tourism board attend?",
          answer:
            "OTM Mumbai and SATTE are major platforms for reaching the Indian travel trade, while roadshows and other targeted activations can reach specific trade networks and consumer audiences. The right mix depends on whether the objective is trade relationships, market entry, consumer demand or lead generation.",
        },
        {
          question: "How do you measure the return on a trade show or mall activation?",
          answer:
            "We measure against the outcomes agreed at brief stage: qualified enquiries, trade connections, engagement and campaign results. Footfall matters, but it is an input. The real output is meaningful interaction that can move towards consideration, conversion or arrivals.",
        },
      ],
    },
    bottomCta: {
      titlePart1: "Every Activation.",
      titlePart2: "One Outcome:",
      titleAccent: "Arrivals.",
      buttonText: "Get In Touch",
      buttonLink: "/contact",
    },
  },

  "fam-trips-pr": {
    slug: "fam-trips-pr",
    name: "FAM Trips + PR",
    seo: {
      title: "Travel PR Agency & FAM Trip Management | Mélange Digital",
      description:
        "Mélange runs familiarisation trips & destination PR for tourism boards: journalist and creator FAMs, trade hosting and much more across the GCC.",
      canonical: "https://melangedigital.co/services/fam-trips-pr",
      h1: "Travel PR Agency and FAM Trip Management for Destinations",
    },
    hero: {
      badge: "FAM TRIPS + PR IN TRAVEL & TOURISM",
      titlePart1: "Where Trust Is Built",
      titleAccent: "Firsthand.",
      descriptionLines: [
        "Journalists. Creators. Publishers.",
        "The voices audiences trust to discover what comes next.",
        "We put destinations into the conversation through travel PR and the people who shape it.",
      ],
      ctaText: "Get In Touch",
      ctaLink: "/contact",
      collageImages: [
        { src: "/destination-marketing-agency/images/services/banner-hktb.webp", alt: "Esquire Ram Charan Cover" },
        { src: "/destination-marketing-agency/images/services/banner-costa.webp", alt: "Costa Cruises Maiden Voyage" },
        { src: "/destination-marketing-agency/images/work/her-hong-kong-hktb.png", alt: "Hong Kong PR Delegation" },
        { src: "/destination-marketing-agency/images/services/banner-stb.webp", alt: "Singapore FAM Experience" },
        { src: "/destination-marketing-agency/images/creators/hk-3.png", alt: "Media Hosting" },
        { src: "/destination-marketing-agency/images/creators/ites-1.png", alt: "Travel Press Feature" },
        { src: "/destination-marketing-agency/images/creators/ites-2.png", alt: "Destination Article" },
        { src: "/destination-marketing-agency/images/creators/ites-3.png", alt: "Editorial Layout" },
        { src: "/destination-marketing-agency/images/creators/ites-4.png", alt: "Press Conference" },
        { src: "/destination-marketing-agency/images/creators/ites-5.png", alt: "Journalist Delegation" },
        { src: "/destination-marketing-agency/images/creators/ites-6.png", alt: "Trade Networking" },
        { src: "/destination-marketing-agency/images/creators/ites-7.png", alt: "Earned Editorial" },
      ],
    },
    manifesto: {
      eyebrow: "TRUST THAT TRAVELS FURTHER",
      titlePart1: "Coverage Doesn't Earn Trust.",
      titleAccent: "Firsthand Does.",
      paragraph:
        "People believe a place when someone they trust has <span class=\"svc-highlight\">actually been</span>. That's the power of travel PR for travel brands and tourism boards.",
      linkText: "Scroll Down",
      linkHref: "#philosophy",
    },
    philosophy: {
      eyebrow: "WHERE IT WORKS",
      titlePart1: "Coverage Doesn't Earn Trust.",
      titleAccent: "Firsthand Does.",
      description:
        "People believe a place when someone they trust has actually been. That's the power of travel PR for travel brands and tourism boards.",
      bgImage: "/destination-marketing-agency/images/services/banner-hktb.webp",
      pillars: [
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-launch.png",
          title: "LAUNCH",
          description: "Build credibility around a new destination, proposition or market entry.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-experience.png",
          title: "EXPERIENCE",
          description: "Host journalists, creators and travel trade so they can experience the destination firsthand.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-connect.png",
          title: "CONNECT",
          description: "Build relationships with publishers, media and trade partners who shape destination discovery.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-protect.png",
          title: "PROTECT",
          description: "Manage sensitive moments with the local presence and relationships destination reputation requires.",
        },
      ],
    },
    approach: {
      eyebrow: null,
      titlePart1: "Our",
      titleAccent: "Approach",
      cards: [
        {
          id: "earned-credibility",
          step: "01",
          title: "Earned Credibility",
          description:
            "We build relationships with the publishers, journalists and creators who matter in each market, creating opportunities for destinations to be experienced and talked about authentically.",
          image: "/destination-marketing-agency/images/services/banner-hktb.webp",
          icon: "/destination-marketing-agency/images/services/icon-cast.svg",
        },
        {
          id: "on-the-ground",
          step: "02",
          title: "On the Ground",
          description:
            "Our regional teams manage hosting, negotiations and execution in person, giving every FAM, media engagement and destination activation the local detail it needs.",
          image: "/destination-marketing-agency/images/services/banner-costa.webp",
          icon: "/destination-marketing-agency/images/services/icon-data.svg",
        },
        {
          id: "dignitary-ready",
          step: "03",
          title: "Dignitary Ready",
          description:
            "From trade floors to ministerial engagements, we understand the precision and protocol behind high-profile destination representation.",
          image: "/destination-marketing-agency/images/services/banner-stb.webp",
          icon: "/destination-marketing-agency/images/services/icon-team.svg",
        },
        {
          id: "long-term-relationships",
          step: "04",
          title: "Long-Term Relationships",
          description:
            "The strongest media, creator and trade relationships continue beyond a single campaign. We build connections that keep creating opportunities after the FAM or placement is over.",
          image: "/destination-marketing-agency/images/work/her-hong-kong-hktb.png",
          icon: "/destination-marketing-agency/images/services/icon-community.svg",
        },
      ],
    },
    process: {
      eyebrow: "FROM BRIEF TO BRAND MOMENTUM",
      titlePart1: "From Brief to",
      titleAccent: "Brand Momentum",
      description: "Managed as one connected relationship-led campaign, not a string of individual bookings.",
      steps: [
        { number: "01", title: "Press & Media Outreach" },
        { number: "02", title: "Editorial & Magazine Placements" },
        { number: "03", title: "Journalist & Creator FAM Trips" },
        { number: "04", title: "Travel Trade FAMs & Trade Shows" },
        { number: "05", title: "Reputation & Crisis Communications" },
        { number: "06", title: "Coverage, Value & Campaign Reporting" },
      ],
    },
    caseStudies: {
      titlePart1: "Work That Moved",
      titleAccent: "Arrivals",
      cards: [
        {
          id: "hong-kong-tourism-board-x-ram-charan-esquire-india-cover",
          title: "Hong Kong Tourism Board × Ram Charan + Esquire India",
          caption:
            "A destination cover story shot on location. ~10X ROI on HKTB's investment and $2.5M in earned media value.",
          bannerImage: "/destination-marketing-agency/images/services/banner-hktb.webp",
          slug: "/work/hong-kong-tourism-board-x-ram-charan-esquire-india-cover",
        },
        {
          id: "costa-cruises",
          title: "Costa Cruise",
          caption:
            "40+ creators hosted onboard a maiden voyage. 9,000+ qualified booking enquiries.",
          bannerImage: "/destination-marketing-agency/images/services/banner-costa.webp",
          slug: "/work/costa-cruises",
        },
      ],
    },
    faqs: {
      titlePart1: "",
      titleAccent: "Answered",
      titlePart2: "before you ask",
      items: [
        {
          question: "What is a FAM trip in tourism marketing?",
          answer:
            "A FAM trip, short for familiarisation trip, hosts journalists, travel trade partners or creators in a destination so they can experience it firsthand and describe it in their own words. For tourism boards, it is a high-trust way to generate earned coverage, creator content and trade advocacy around a destination.",
        },
        {
          question: "What is the difference between a media FAM trip and a travel trade FAM trip?",
          answer:
            "A media FAM hosts journalists and creators to generate editorial coverage and content. A travel trade FAM hosts tour operators and travel agents so they can experience and sell the destination confidently to their customers. Media FAMs build demand. Trade FAMs build distribution. Many destinations need both.",
        },
        {
          question: "Does a travel PR agency handle crisis communications for a destination?",
          answer:
            "Yes. Reputation management and crisis communications can form part of destination PR, particularly when sensitive situations require coordination across local, regional and ministerial communication lines. Our regional teams provide the on-ground presence required to manage these moments carefully.",
        },
        {
          question: "How is earned media value measured for a destination campaign?",
          answer:
            "We measure secured coverage against the agreed media valuation framework, alongside reach, publication authority and audience fit. The measurement basis is established with the tourism board before the campaign begins.",
        },
        {
          question: "How does public relations in travel and tourism help a tourism board?",
          answer:
            "Public relations in travel and tourism earns a tourism board trust that paid advertising cannot buy. It creates coverage because journalists and creators experienced the destination, not simply because a campaign paid for exposure — turning firsthand experience into credibility and conversation.",
        },
      ],
    },
    bottomCta: {
      titlePart1: "Every Story.",
      titlePart2: "One Outcome:",
      titleAccent: "Arrivals.",
      buttonText: "Get In Touch",
      buttonLink: "/contact",
    },
  },
};

// Aliases for alternate URLs
SERVICES_DATA["branded-content-ip"] = SERVICES_DATA["branded-content-ips"];
