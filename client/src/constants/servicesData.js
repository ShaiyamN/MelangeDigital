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
        "People travel because someone they trust made a place <span class=\"svc-highlight\">worth seeing</span>.<br class=\"svc-lead-break\" /> That's the power of influencer marketing for travel brands and tourism boards.",
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
          description: "Put a destination in front of a completely new audience.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-launch.png",
          title: "LAUNCH",
          description: "Build demand before a destination, hotel or resort opens.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-amplify.png",
          title: "AMPLIFY",
          description: "Turn seasonal campaigns into lasting cultural moments.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/inf-expand.png",
          title: "EXPAND",
          description: "Open new source markets through creators who shape them.",
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
            "We match creators to the subculture and passion point, not the follower count and reach.",
          image: "/destination-marketing-agency/images/services/approach/approach-inf-cast.png",
        },
        {
          id: "data-before-deals",
          step: "02",
          title: "DATA BEFORE DEALS",
          description:
            "We run due diligence and culture matchmaking before engaging any creator.",
          image: "/destination-marketing-agency/images/services/approach/approach-inf-data.png",
        },
        {
          id: "one-team-not-four",
          step: "03",
          title: "ONE TEAM, NOT FOUR",
          description:
            "Sourcing, strategy, production and reporting run under one roof, not four vendors.",
          image: "/destination-marketing-agency/images/services/approach/approach-inf-team.png",
        },
        {
          id: "community-not-reach",
          step: "04",
          title: "COMMUNITY, NOT JUST REACH",
          description:
            "Our campaigns build creator communities that outlast the campaign.",
          image: "/destination-marketing-agency/images/services/approach/approach-inf-community.png",
        },
      ],
    },
    process: {
      eyebrow: "FROM BRIEF TO BRAND MOMENTUM",
      titlePart1: "From Brief to",
      titleAccent: "Brand Momentum",
      description: "Managed as one connected campaign, not a string of individual bookings.",
      steps: [
        { number: "01", title: "Celebrity & Creator Identification & Vetting" },
        { number: "02", title: "Talent Negotiation & Contracting" },
        { number: "03", title: "Campaign Strategy & Narrative Building" },
        { number: "04", title: "Content Direction & Production Oversight" },
        { number: "05", title: "Community & Fandom Engagement" },
        { number: "06", title: "Performance Tracking & Reporting" },
      ],
    },
    caseStudies: {
      titlePart1: "Work That Moved",
      titleAccent: "Arrivals",
    },
    faqs: {
      titlePart1: "",
      titleAccent: "FAQs",
      titlePart2: "",
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
    name: "Branded Content & IP's",
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
        "Films. Music. Editorials. OTT",
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
        "People skip ads. They don't skip the stories they <span class=\"svc-highlight\">love</span>.<br class=\"svc-lead-break\" /> That's the power of film tourism for travel brands and tourism boards.",
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
          description: "Position a destination as a sought-after hub for film productions.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-music.png",
          title: "MUSIC",
          description: "Embed a destination into releases built around a specific culture.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-editorial.png",
          title: "EDITORIAL",
          description: "Create credible moments through trusted publishers and platforms.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/brd-culture.png",
          title: "CULTURE",
          description: "Build cultural associations that outlast a single campaign.",
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
          title: "We secure the IP's",
          description: "We identify and secure the production of the track.",
          image: "/destination-marketing-agency/images/services/approach/approach-brd-ips.png",
          icon: "/destination-marketing-agency/images/services/icon-cast.svg",
        },
        {
          id: "story-first",
          step: "02",
          title: "Story First",
          description: "The destination lives inside the narrative, never bolted on top.",
          image: "/destination-marketing-agency/images/services/approach/approach-brd-story.png",
          icon: "/destination-marketing-agency/images/services/icon-data.svg",
        },
        {
          id: "access-not-outreach",
          step: "03",
          title: "ACCESS, NOT OUTREACH",
          description: "Our film and music video network gets a destination cast, not just pitched.",
          image: "/destination-marketing-agency/images/services/approach/approach-brd-access.png",
          icon: "/destination-marketing-agency/images/services/icon-team.svg",
        },
        {
          id: "earned-reach",
          step: "04",
          title: "BUILT FOR EARNED REACH",
          description: "Every asset is designed to travel past the paid media budget and EMV",
          image: "/destination-marketing-agency/images/services/approach/approach-brd-reach.png",
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
        { number: "03", title: "Film, IP & Music Video Integration" },
        { number: "04", title: "Editorial & Publisher Partnerships" },
        { number: "05", title: "Script & Story Development" },
        { number: "06", title: "Distribution & Amplification" },
      ],
    },
    caseStudies: {
      titlePart1: "Work That Moved",
      titleAccent: "Arrivals",
    },
    faqs: {
      titlePart1: "",
      titleAccent: "FAQs",
      titlePart2: "",
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
        "Trade Shows. Roadshows. Retail Activations",
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
        "People remember what they <span class=\"svc-highlight\">experience</span>, not just what they see.<br class=\"svc-lead-break\" /> That's the power of experiential marketing for travel brands and tourism boards.",
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
          description: "Make a new destination, route or hotel impossible to ignore.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-connect.png",
          title: "CONNECT",
          description: "Bring destinations to life for trade and consumers alike.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-engage.png",
          title: "ENGAGE",
          description: "Turn trade shows and retail spaces into real brand moments.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/exp-convert.png",
          title: "CONVERT",
          description: "Capture qualified enquiries that move beyond the activation.",
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
            "A first-time entrant can win the floor without the biggest budget.",
          image: "/destination-marketing-agency/images/services/approach/approach-exp-destination.png",
          icon: "/destination-marketing-agency/images/services/icon-cast.svg",
        },
        {
          id: "built-to-be-experienced",
          step: "02",
          title: "BUILT TO BE EXPERIENCED",
          description:
            "Our team designs, fabricates and executes the activation end to end.",
          image: "/destination-marketing-agency/images/services/approach/approach-exp-experience.png",
          icon: "/destination-marketing-agency/images/services/icon-data.svg",
        },
        {
          id: "one-team-end-to-end",
          step: "03",
          title: "ONE TEAM, END TO END",
          description:
            "We build physical, shareable moments that go beyond a scroll.",
          image: "/destination-marketing-agency/images/services/approach/approach-exp-team.png",
          icon: "/destination-marketing-agency/images/services/icon-team.svg",
        },
        {
          id: "designed-to-deliver",
          step: "04",
          title: "Designed to Deliver",
          description:
            "Every activation is engineered to capture a qualified enquiry, not just a photo.",
          image: "/destination-marketing-agency/images/services/approach/approach-exp-deliver.png",
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
    },
    faqs: {
      titlePart1: "",
      titleAccent: "FAQs",
      titlePart2: "",
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
      titleAccent: "Experience.",
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
        "People believe a place when someone they trust has <span class=\"svc-highlight\">actually been</span>.<br class=\"svc-lead-break\" /> That's the power of travel PR for travel brands and tourism boards.",
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
          description: "Build credibility around a new destination, proposition or entry.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-experience.png",
          title: "EXPERIENCE",
          description: "Host journalists, creators and trade to experience it firsthand.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-connect.png",
          title: "CONNECT",
          description: "Build relationships with publishers and trade who shape discovery.",
        },
        {
          icon: "/destination-marketing-agency/images/services/pillars/fam-protect.png",
          title: "PROTECT",
          description: "Manage sensitive moments with the local presence reputation needs.",
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
          title: "EARNED CREDIBILITY",
          description:
            "An editorial cover story lands harder than a media buy ever could.",
          image: "/destination-marketing-agency/images/services/approach/approach-fam-credibility.png",
          icon: "/destination-marketing-agency/images/services/icon-cast.svg",
        },
        {
          id: "on-the-ground",
          step: "02",
          title: "ON THE GROUND",
          description:
            "Our regional teams host, curate, negotiate and execute every PR campaign.",
          image: "/destination-marketing-agency/images/services/approach/approach-fam-ground.png",
          icon: "/destination-marketing-agency/images/services/icon-data.svg",
        },
        {
          id: "dignitary-ready",
          step: "03",
          title: "DIGNITARY READY",
          description:
            "We've run trade floors built for dignitaries, ministers and not just visitors.",
          image: "/destination-marketing-agency/images/services/approach/approach-fam-dignitary.png",
          icon: "/destination-marketing-agency/images/services/icon-team.svg",
        },
        {
          id: "long-term-relationships",
          step: "04",
          title: "Long-Term Relationships",
          description:
            "Our publisher and journalist network is built over years, not rented per campaign.",
          image: "/destination-marketing-agency/images/services/approach/approach-fam-relationships.png",
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
    },
    faqs: {
      titlePart1: "",
      titleAccent: "FAQs",
      titlePart2: "",
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

export const SERVICE_COLLAGE_TILES = {
  "influencer-marketing": [
    { src: "/assets/services/influencer-marketing/%23karankundrra.jpg", position: "center 18%" },
    { src: "/assets/services/influencer-marketing/Hebah%20Patel.jpg", position: "center 20%" },
    { src: "/assets/services/influencer-marketing/KASHIKA-KAPOOR.jpg", position: "center 22%" },
    { src: "/assets/services/influencer-marketing/Kanika.jpg", position: "center 20%" },
    { src: "/assets/services/influencer-marketing/Oh%2C%20so%20rare!%20You're%20one%20of%20a%20kind%F0%9F%8C%A0.jpg", position: "center 25%" },
    { src: "/assets/services/influencer-marketing/devdutt%20padikkal%20%E2%9D%A4%EF%B8%8F.jpg", position: "center 20%" },
    { src: "/assets/services/influencer-marketing/divine.jpg", position: "center 30%" },
    { src: "/assets/services/influencer-marketing/download.jpg", position: "center 25%" },
  ],
  "branded-content-ips": [
    { src: "/assets/services/branded-content-ips/tile-1.jpg", position: "center 45%" },
    { src: "/assets/services/branded-content-ips/AP.jpg", position: "center 28%" },
    { src: "/assets/services/branded-content-ips/Divine.jpg", position: "center 35%" },
    { src: "/assets/services/branded-content-ips/Manish-Paul.png", position: "center 22%" },
    { src: "/assets/services/branded-content-ips/Mouni.jpg", position: "center 25%" },
    { src: "/assets/services/branded-content-ips/tile-6.jpg", position: "center 65%" },
    { src: "/assets/services/branded-content-ips/pratik.jpg", position: "center 20%" },
    { src: "/assets/services/branded-content-ips/riar.jpg", position: "center 25%" },
  ],
  "experiential-marketing": [
    { src: "/assets/services/experiential-marketing/tile-1.jpg", position: "center 30%" },
    { src: "/assets/services/experiential-marketing/tile-2.jpg", position: "center center" },
    { src: "/assets/services/experiential-marketing/tile-3.jpg", position: "center 45%" },
    { src: "/assets/services/experiential-marketing/tile-4.jpg", position: "center 32%" },
    { src: "/assets/services/experiential-marketing/tile-5.jpg", position: "center 55%" },
    { src: "/assets/services/experiential-marketing/tile-6.jpg", position: "center 38%" },
    { src: "/assets/services/experiential-marketing/tile-7.jpg", position: "center 45%" },
    { src: "/assets/services/experiential-marketing/tile-8.jpg", position: "center 55%" },
  ],
  "fam-trips-pr": [
    { src: "/assets/services/fam-trips-pr/tile-1.jpg", position: "center 22%" },
    { src: "/assets/services/fam-trips-pr/AP.jpg", position: "center 28%" },
    { src: "/assets/services/fam-trips-pr/Aanchal.jpg", position: "center 22%" },
    { src: "/assets/services/fam-trips-pr/tile-4.jpg", position: "center 28%" },
    { src: "/assets/services/fam-trips-pr/tile-5.jpg", position: "center 35%" },
    { src: "/assets/services/fam-trips-pr/Ram%20Charan.jpg", position: "center 30%" },
    { src: "/assets/services/fam-trips-pr/samiksha%20sud.jpg", position: "center 28%" },
    { src: "/assets/services/fam-trips-pr/tile-8.jpg", position: "center 45%" },
  ],
};

