import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer, WorkSummaryForServicesPage } from "../../layout";
import { immersiveBrandStoryServiceCaseStudy } from "../../../constants";

const ImmersiveBrandStorytellingService = () => {
  const CounterItem = ({ number, suffix, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1200;
      const increment = number / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [number]);

    return (
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800,
            margin: 0,
            color: "#7a1ef1",
          }}
        >
          {count}
          <span
            style={{ fontSize: "clamp(18px, 3vw, 32px)", marginLeft: "6px" }}
          >
            {suffix}
          </span>
        </h3>
        <p
          style={{
            marginTop: "10px",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontWeight: 500,
            color: "#333",
          }}
        >
          {label}
        </p>
      </div>
    );
  };

  const [activeCard, setActiveCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openCard = (idx) => {
    setActiveCard(idx);
    setIsFlipped(false);
    setTimeout(() => setIsFlipped(true), 60);
  };

  const closeCard = () => {
    setIsFlipped(false);
    setTimeout(() => setActiveCard(null), 260);
  };

  const onZohoSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const cards = [
    {
      frontTitle: "Branded Experiences\n(AR/VR)",
      image: "/influencer_marketing/img/images/Branded_Experiences_(AR_VR).png",
      emoji: "🧠",
      title: "Branded Experiences (AR/VR)",
      desc: "Transform passive audiences into immersive brand participants",
      list: [
        "Immersive AR and VR environment design",
        "Interactive brand experiences and virtual showrooms",
        "Augmented reality product try-ons and demos",
        "Virtual event spaces and digital activations",
        "Multi-sensory brand storytelling experiences",
        "Memorable interactions that drive advocacy",
      ],
    },
    {
      frontTitle: "Experiential Marketing\nCampaigns",
      image:
        "/influencer_marketing/img/images/Experiential_Marketing_Campaigns.jpeg",
      emoji: "🎯",
      title: "Experiential Marketing Campaigns",
      desc: "Create buzz-driven experiences that build loyalty and engagement",
      list: [
        "Multi-sensory campaign design and execution",
        "Pop-up experiences and interactive installations",
        "Immersive brand activations and events",
        "Shareable moments designed for social amplification",
        "Physical-digital hybrid experience design",
        "Engagement strategies that build lasting loyalty",
      ],
    },
    {
      frontTitle: "Visual Storytelling\n(Video & Graphics)",
      image:
        "/influencer_marketing/img/images/Visual_Storytelling_(Video_Graphics).jpeg",
      emoji: "🎬",
      title: "Visual Storytelling (Video & Graphics)",
      desc: "High-impact visuals that communicate instantly and convert deeply",
      list: [
        "Cinematic brand films and visual narratives",
        "Motion graphics and animated storytelling",
        "Social-first video content optimization",
        "Strategic frame-by-frame narrative design",
        "Emotion-driven visual communication",
        "Conversion-focused creative production",
      ],
    },
    {
      frontTitle: "Cross-Platform Story\nIntegration",
      image:
        "/influencer_marketing/img/images/Cross-Platform_Story_Integration.jpg",
      emoji: "🔗",
      title: "Cross-Platform Story Integration",
      desc: "Seamless storytelling across every customer touchpoint",
      list: [
        "Platform-specific narrative adaptation and optimization",
        "Cohesive story architecture across all channels",
        "Instagram to TikTok to podcast integration",
        "AR to live event narrative continuity",
        "Multi-touchpoint customer journey design",
        "Unified brand storytelling ecosystems",
      ],
    },
  ];

  const active = activeCard !== null ? cards[activeCard] : null;

  const [key, setKey] = useState(0);
  const resetComponent = () => setKey((prevKey) => prevKey + 1);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Immersive Brand Storytelling Services | Mélange Digital</title>
        <meta
          name="description"
          content="Amplify your brand with Mélange Digital's AEO and SEO services. Be cited by AI assistants, rank in search, and build authority across modern answer engines."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/immersive-brand-storytelling"
        />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://melangedigital.co/services/aeo-seo#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://melangedigital.co/services" },
          { "@type": "ListItem", "position": 3, "name": "AEO & SEO", "item": "https://melangedigital.co/services/aeo-seo" }
        ]
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://melangedigital.co/services/aeo-seo#webpage",
        "url": "https://melangedigital.co/services/aeo-seo",
        "name": "AEO & SEO Services | Mélange Digital",
        "description": "Be found in search and be cited in AI answers with Mélange Digital's AEO and SEO services.",
        "isPartOf": { "@type": "WebSite", "@id": "https://melangedigital.co/#website" },
        "breadcrumb": { "@id": "https://melangedigital.co/services/aeo-seo#breadcrumb" },
        "inLanguage": "en-US"
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://melangedigital.co/services/aeo-seo#service",
        "name": "AEO & SEO Services",
        "url": "https://melangedigital.co/services/aeo-seo",
        "description": "Mélange Digital helps brands improve visibility across traditional search engines and AI answer platforms like ChatGPT, Google AI Overviews, Perplexity, and Bing Copilot.",
        "provider": {
          "@type": "Organization",
          "name": "Mélange Digital",
          "url": "https://melangedigital.co",
          "logo": "https://melangedigital.co/assets/mainLogo-8756aff9.png",
          "telephone": "+919372567722",
          "email": "hello@melangedigital.co",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B12, 7th Floor, Silvio Heights, St. Inez Road, Santa Inez",
            "addressLocality": "Panaji",
            "addressRegion": "Goa",
            "postalCode": "403001",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Africa" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO & SEO Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Visibility Audit & Strategy", "description": "Understand your brand's visibility across AI assistants and answer engines with a detailed strategic roadmap." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Answer-Optimized Content Creation", "description": "Build content designed to earn citations, featured snippets, and AI-driven answer visibility." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical AEO Implementation", "description": "Deploy structured data, AI-friendly content architecture, and technical optimization to improve discoverability." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Continuous AI Performance Tracking", "description": "Track your brand's presence across AI systems and refine your visibility strategy continuously." } }
          ]
        }
      }
    `}
        </script>
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        #counter-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; text-align: center; }
        @media (max-width: 768px) { #counter-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
        @media (max-width: 400px) { #counter-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }

        #about-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 60px; align-items: start; }
        @media (max-width: 992px) { #about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 576px) { #about h2 { font-size: 36px !important; } }

        #service-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 1200px) { #service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 576px) { #service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; } }
        @media (max-width: 576px) { #service h2 { font-size: 32px !important; } }

        .service-card { height: 420px; }
        @media (max-width: 576px) { .service-card { height: 280px; } }

        .popup-inner { width: min(90vw, 600px); height: min(85vh, 700px); perspective: 1400px; }
        @media (max-width: 576px) { .popup-inner { width: 95vw; height: 90vh; } }

        #project-body-grid { display: grid; grid-template-columns: 1fr 500px; gap: 40px; }
        @media (max-width: 900px) { #project-body-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 576px) { #project h2 { font-size: 38px !important; } }

        #features-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 1100px) { #features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 576px) { #features-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1100px) { #features h2 { font-size: 42px !important; } }
        @media (max-width: 768px) { #features h2 { font-size: 34px !important; } }

        #contact-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 40px; align-items: start; }
        @media (max-width: 1024px) { #contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 576px) { #contact h2 { font-size: 36px !important; } }

        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }

        @media (max-width: 1024px) { #testi p { max-width: 320px !important; font-size: 17px !important; } }
        @media (max-width: 640px) { #testi p { max-width: 340px !important; font-size: 16px !important; } }
      `}</style>

      <Navbar />

      {/* ─── HERO ─── */}
      <section className="bsm-section">
        <div className="bsm-grid-bg" />

        {/* Top-right corner purple blob */}
        <div className="bsm-corner-blob" />

        {/* Bottom-left partial rings */}
        <div className="bsm-bl-ring bsm-bl-ring-1" />
        <div className="bsm-bl-ring bsm-bl-ring-2" />

        <div className="bsm-inner">
          {/* ── LEFT: Text ── */}
          <div className="bsm-text">
            <p className="bsm-sub">
              <span>TRANSFORMING</span>
              <span>PASSIVE VIEWERS INTO</span>
            </p>
            <h1 className="bsm-heading">
              <span>ACTIVE</span>
              <span>PARTICIPANTS</span>
            </h1>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="bsm-visual">
            {/*
        ══════════════════════════════════════════
        LAYOUT MATH  (all coords = px from .bsm-visual top-left)
        .bsm-visual is 52vw wide, 100vh tall

        At 1440px viewport:
          visual width  ≈ 748px
          visual height ≈ 900px (100vh minus nav ~80px gives content ~820px)

        RING 1 (purple, large):
          We want it centered around (460, 410) in visual
          radius = 220, stroke = 22
          → top-left of bounding box: (240, 190) → size 440×440

        RING 2 (blue, slightly smaller, offset right+down):
          center (500, 440), radius = 200, stroke = 22
          → top-left: (300, 240) → size 400×400

        These rings overlap — purple top-left, blue bottom-right.

        MAIN IMAGE (circle, large):
          Centered on ring1 center (460,410), size 340px
          left = 460-170 = 290, top = 410-170 = 240

        TOP-RIGHT IMAGE (circle, small):
          On ring1 circumference at 325° (upper-right)
          cos(325°)=cos(-35°)=0.819, sin(325°)=sin(-35°)=-0.574
          cx = 460 + 220×0.819 = 460+180 = 640
          cy = 410 + 220×(-0.574) = 410-126 = 284
          size = 170px → left=640-85=555, top=284-85=199

        BOTTOM-RIGHT IMAGE (circle, small):
          On ring2 circumference at 38° (lower-right)
          Ring2 center (500,440)
          cos(38°)=0.788, sin(38°)=0.616
          cx = 500+200×0.788 = 500+158 = 658
          cy = 440+200×0.616 = 440+123 = 563
          size = 170px → left=658-85=573, top=563-85=478

        STRIPED CIRCLE:
          Upper-center of visual, above rings
          center ≈ (300, 120), size 160px
          left=300-80=220, top=120-80=40
        ══════════════════════════════════════════
      */}

            {/* SVG rings */}
            <svg
              className="bsm-rings-svg"
              viewBox="0 0 750 750"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Purple ring */}
              <circle
                cx="460"
                cy="410"
                r="220"
                fill="none"
                stroke="#c42ef5"
                strokeWidth="22"
              />
              {/* Blue ring */}
              <circle
                cx="500"
                cy="440"
                r="200"
                fill="none"
                stroke="#3b5cff"
                strokeWidth="22"
              />
            </svg>

            {/* Striped decorative circle */}
            <div className="bsm-stripe" />

            {/* Main center image */}
            <div className="bsm-img-main">
              <img
                src="/influencer_marketing/img/images/story (1).jpg"
                alt=""
              />
            </div>

            {/* Top-right image */}
            <div className="bsm-img-top">
              <img
                src="/influencer_marketing/img/images/story (2).jpg"
                alt=""
              />
            </div>

            {/* Bottom-right image */}
            <div className="bsm-img-bottom">
              <img
                src="/influencer_marketing/img/images/story (3).jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <style>{`
    /* ─────────────────────────────────────────
       SECTION
    ───────────────────────────────────────── */
    .bsm-section {
      position: relative;
      width: 100%;
      height: 100vh;
      min-height: 600px;
      max-height: 960px;
      overflow: hidden;
      background: #f7f6f7;
      display: flex;
      align-items: stretch;
      font-family: "Bricolage Grotesque", sans-serif;
    }

    /* Grid */
    .bsm-grid-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background-image:
        linear-gradient(to right, rgba(205,200,210,0.6) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(205,200,210,0.6) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* Top-right corner purple blob */
    .bsm-corner-blob {
      position: absolute;
      top: -60px;
      right: -60px;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, #d84ef0, #a020e0);
      z-index: 10;
    }

    /* Bottom-left partial rings */
    .bsm-bl-ring {
      position: absolute;
      border-radius: 50%;
      background: transparent;
      z-index: 1;
    }
    .bsm-bl-ring-1 {
      width: 280px;
      height: 280px;
      left: -140px;
      bottom: -140px;
      border: 22px solid #c030f5;
    }
    .bsm-bl-ring-2 {
      width: 430px;
      height: 430px;
      left: 0px;
      bottom: -270px;
      border: 22px solid #3b5cff;
    }

    /* ─────────────────────────────────────────
       INNER LAYOUT
    ───────────────────────────────────────── */
    .bsm-inner {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: clamp(32px, 5vw, 90px);
    }

    /* ─────────────────────────────────────────
       LEFT — TEXT
    ───────────────────────────────────────── */
    .bsm-text {
      flex: 0 0 44%;
      max-width: 620px;
    }

    .bsm-sub {
      margin: 0 0 8px;
      padding: 0;
      color: #171717;
      font-weight: 900;
      font-size: clamp(1.6rem, 2.2vw, 3.2rem);
      line-height: 1.1;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }
    .bsm-sub span { display: block; }

    .bsm-heading {
      margin: 0;
      font-weight: 900;
      font-size: clamp(3.5rem, 6vw, 7.2rem);
      line-height: 0.88;
      letter-spacing: -3px;
      text-transform: uppercase;
      background: linear-gradient(90deg, #cc2ef5 0%, #7040ff 50%, #2f63ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
    .bsm-heading span { display: block; }

    /* ─────────────────────────────────────────
       RIGHT — VISUAL
    ───────────────────────────────────────── */
    .bsm-visual {
      flex: 1 1 0;
      position: relative;
      height: 100%;
      /* All child positions are absolute within this */
    }

    /*
      SVG fills the visual area.
      viewBox 750×750 maps to the visual container.
      Rings drawn at the coords calculated above.
    */
    .bsm-rings-svg {
      position: absolute;
      /* Shift slightly right so rings are partially off right edge — matching reference */
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      width: min(700px, 95%);
      height: auto;
      z-index: 2;
      overflow: visible;
    }

    /*
      For the image positions, we use the same coordinate system
      as the SVG viewBox (750×750) but scaled.
      
      SVG rendered width ≈ 700px → scale = 700/750 = 0.933
      SVG left=-20px, SVG top = 50% - (700/2)px = 50% - 350px

      In CSS we use calc() to stay anchored to the SVG center:
        Visual center X = -20 + 700/2 = 330px  (fixed)
        Visual center Y = 50%

      Image positions relative to visual top-left:
        SVG cx=460 → visual left = -20 + 460×0.933 = -20+429 = 409px
        SVG cy=410 → visual top  = 50% + (410-375)×0.933 = 50% + 32.7px
      
      Main image (340px), center on ring1 (460,410):
        left = 409 - 170 = 239px
        top  = calc(50% + 33px - 170px) = calc(50% - 137px)

      Top-right image (170px), center on (640,284):
        svgX=640 → visual left = -20+640×0.933 = -20+597 = 577px
        svgY=284 → visual top  = 50% + (284-375)×0.933 = 50% - 84.9px
        img left = 577-85 = 492px
        img top  = calc(50% - 85px - 85px) = calc(50% - 170px)... 
        
      Easier: just use fixed px matched to the visual at 1440px wide.
      visual width at 1440px ≈ 1440×0.56 = 806px
      SVG rendered at 700px, left=-20px
      Scale = 700/750 = 0.933

      SVG origin in visual: x=−20, y = (806_height/2 − 350) — we just use vh since height=100vh
      At 900px height: svg top = 450−350 = 100px
      
      Ring1 center in visual at 900px height:
        x = −20 + 460×0.933 = 409px
        y = 100 + 410×0.933 = 100+383 = 483px  (but this is viewport-dependent)

      Best approach: use CSS custom properties driven by the SVG's actual rendered position.
      Since we can't do that purely in CSS, we'll use percentage-based approximations
      tied to the visual container dimensions.
    */

    /* Striped circle — upper area, between text and rings */
    .bsm-stripe {
      position: absolute;
      left: 14%;
      top: 8%;
      width: clamp(120px, 14vw, 190px);
      height: clamp(120px, 14vw, 190px);
      border-radius: 50%;
      z-index: 6;
      background: repeating-linear-gradient(
        135deg,
        #3d5cff 0px,
        #3d5cff 4px,
        transparent 4px,
        transparent 18px
      );
    }

    /* Main image */
    .bsm-img-main {
      position: absolute;
      /*
        Center = SVG ring1 center mapped to visual:
        x: -20 + 460*(700/750) = -20+429 = 409 → left = 409 - 170 = 239
        y: 50% + (410 - 375)*(700/750) = 50% + 32.6 → top = 50% + 33 - 170 = 50% - 137
      */
      left: 100px;
      top: calc(60% - 137px);
      width: 340px;
      height: 340px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 4;
    }

    /* Top-right small image */
    .bsm-img-top {
      position: absolute;
      /*
        SVG coords (640, 284):
        x: -20 + 640*(700/750) = -20+597 = 577 → left = 577-85 = 492
        y: 50% + (284-375)*(700/750) = 50% - 84.9 → top = 50% - 85 - 85 = 50% - 170
      */
      left: 492px;
      top: calc(50% - 170px);
      width: 170px;
      height: 170px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 5;
    }

    /* Bottom-right small image */
    .bsm-img-bottom {
      position: absolute;
      /*
        SVG coords (658, 563):
        x: -20 + 658*(700/750) = -20+614 = 594 → left = 594-85 = 509
        y: 50% + (563-375)*(700/750) = 50% + 175.5 → top = 50% + 176 - 85 = 50% + 91
      */
      left: 509px;
      top: calc(50% + 91px);
      width: 170px;
      height: 170px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 5;
    }

    .bsm-img-main img,
    .bsm-img-top img,
    .bsm-img-bottom img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    /* ─────────────────────────────────────────
       RESPONSIVE
    ───────────────────────────────────────── */
    @media (max-width: 1300px) {
      .bsm-rings-svg { width: min(620px, 92%); left: -10px; }
      /* scale = 620/750 = 0.827 */
      .bsm-img-main {
        left: calc(-10px + 460px*0.827 - 155px);  /* ≈ 191px */
        top: calc(50% + (410px - 375px)*0.827 - 155px); /* ≈ 50%-126px */
        width: 310px; height: 310px;
      }
      .bsm-img-top {
        left: calc(-10px + 640px*0.827 - 80px);  /* ≈ 439px */
        top: calc(50% + (284px - 375px)*0.827 - 80px); /* ≈ 50%-155px */
        width: 160px; height: 160px;
      }
      .bsm-img-bottom {
        left: calc(-10px + 658px*0.827 - 80px);  /* ≈ 454px */
        top: calc(50% + (563px - 375px)*0.827 - 80px); /* ≈ 50%+75px */
        width: 160px; height: 160px;
      }
    }

    @media (max-width: 1024px) {
      .bsm-section { height: auto; min-height: 100vh; max-height: none; }
      .bsm-inner {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px 24px 60px;
        gap: 32px;
        height: auto;
      }
      .bsm-text { flex: none; width: 100%; max-width: 100%; text-align: center; }
      .bsm-visual { flex: none; width: 100%; height: 580px; }
      .bsm-rings-svg { left: 50%; transform: translate(-52%, -50%); width: 560px; }
      .bsm-stripe { left: 20%; top: 6%; }
      .bsm-img-main { left: 50%; transform: translateX(-50%); }
      .bsm-img-top { left: auto; right: 4%; }
      .bsm-img-bottom { left: auto; right: 2%; }
    }

    @media (max-width: 640px) {
      .bsm-section { height: auto; }
      .bsm-inner { padding: 80px 16px 48px; gap: 24px; }
      .bsm-sub { font-size: clamp(1.2rem, 5.5vw, 2rem); }
      .bsm-heading { font-size: clamp(2.8rem, 11vw, 4rem); letter-spacing: -1.5px; }
      .bsm-visual {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .bsm-rings-svg, .bsm-stripe { display: none; }
      .bsm-img-main, .bsm-img-top, .bsm-img-bottom {
        position: relative;
        inset: auto; left: auto; top: auto;
        transform: none;
        width: 100%; height: auto;
        border-radius: 18px;
      }
      .bsm-img-main { grid-column: 1/-1; aspect-ratio: 1.1/1; }
      .bsm-img-top, .bsm-img-bottom { aspect-ratio: 1/1; }
      .bsm-corner-blob { width: 110px; height: 110px; top: -40px; right: -40px; }
      .bsm-bl-ring-1 { width: 160px; height: 160px; left: -80px; bottom: -80px; border-width: 14px; }
      .bsm-bl-ring-2 { width: 240px; height: 240px; left: 0; bottom: -150px; border-width: 14px; }
    }
  `}</style>
      </section>

      {/* ─── COUNTER ─── */}
      <section
        id="counter-section"
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          background: "#ffffff",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div id="counter-grid">
            <CounterItem number={500} suffix="M+" label="Reach" />
            <CounterItem number={50} suffix="+" label="Trusted Clients" />
            <CounterItem number={100} suffix="+" label="Creators Engaged" />
            <CounterItem number={10} suffix="+" label="Languages" />
          </div>
        </div>
      </section>

      {/* ─── MARQUEE 1 ─── */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          background: "#F8F8F8",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 25s linear infinite",
            fontSize: "clamp(16px,2.5vw,28px)",
            fontWeight: 700,
            gap: "60px",
          }}
        >
          {[
            "Digital Solution",
            "Development",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Branding",
            "Idea",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Creative Agency",
            "Design",
            "Solution",
            "Branding",
            "Idea",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Digital Solution",
            "Development",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Branding",
            "Idea",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
          ].map((item, i) => (
            <span style={{ color: "#0f032f" }} key={i}>
              {item}{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ─── MARQUEE 2 ─── */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          background: "#7a1ef1",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marqueeReverse 22s linear infinite",
            fontSize: "clamp(16px,2.5vw,28px)",
            fontWeight: 700,
            color: "#fff",
            gap: "60px",
          }}
        >
          {[
            "Digital Solution",
            "Development",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Branding",
            "Idea",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Digital Solution",
            "Development",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
            "Branding",
            "Idea",
            "Strategy",
            "Creative Agency",
            "Design",
            "Solution",
          ].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      {/* <section
        id="about"
        style={{
          position: "relative",
          padding: "100px 0 40px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "45%",
            width: "55%",
            height: "420px",
            backgroundImage:
              "url(/influencer_marketing/img/shapes/about-dot-shape.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            backgroundSize: "contain",
            opacity: 1,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div id="about-grid">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    width: "38px",
                    height: "6px",
                    borderRadius: "999px",
                    background: "#7a1ef1",
                    display: "inline-block",
                  }}
                />
                <h4
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    letterSpacing: "1px",
                    fontWeight: 800,
                    color: "#111",
                  }}
                >
                  ABOUT OUR COMPANY
                </h4>
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(32px,4vw,56px)",
                  lineHeight: 1.05,
                  fontWeight: 900,
                  color: "#7a1ef1",
                  fontFamily:
                    "Bricolage Grotesque, system-ui, -apple-system, Segoe UI",
                }}
              >
                Built for the New Era of
                <br />
                Search
              </h2>
              <p
                style={{
                  marginTop: "26px",
                  fontSize: "clamp(15px,1.4vw,17px)",
                  lineHeight: 1.9,
                  color: "#222",
                  maxWidth: "720px",
                }}
              >
                While most agencies are still figuring out basic keyword
                strategies, we're already positioning brands to be cited by
                ChatGPT, featured in Google AI Overviews, and recommended by
                Perplexity. We don't just help you rank, we make you the
                authoritative answer AI systems trust and quote. We merge the
                technical precision of SEO with the conversational intelligence
                of AEO to create search strategies that capture traffic, build
                authority, and drive conversions across every platform your
                audience uses. We don't believe in one-size-fits-all. Every
                strategy is custom-built, data-informed, and optimized for the
                way real people search today, whether they're typing keywords
                into Google or asking full questions to an AI assistant.
              </p>
              <a
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "170px",
                  height: "54px",
                  marginTop: "34px",
                  background: "#7a1ef1",
                  color: "#fff",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 12px 26px rgba(122,30,241,0.25)",
                }}
              >
                View More
              </a>
            </div>

            <div style={{ position: "relative", paddingBottom: "30px" }}>
              <div
                style={{
                  width: "100%",
                  height: "520px",
                  overflow: "hidden",
                  background: "#f3f3f3",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src="/influencer_marketing/img/images/About.jpg"
                  alt="About"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ─── SERVICES ─── */}
      <section
        id="service"
        style={{
          position: "relative",
          paddingBottom: "130px",
          paddingTop: "50px",
          overflow: "hidden",
          background: "#f7f7fb",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
          <img
            src="/influencer_marketing/img/shapes/service-shape-1.png"
            alt="shape"
            style={{ width: "420px", opacity: 0.25 }}
          />
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h4
              style={{
                margin: 0,
                fontSize: "14px",
                letterSpacing: "1px",
                fontWeight: 800,
                color: "#111",
                textTransform: "uppercase",
              }}
            >
              What We Offer For You
            </h4>
            <h2
              style={{
                marginTop: "14px",
                marginBottom: 0,
                fontSize: "clamp(32px,4.5vw,54px)",
                fontWeight: 900,
                color: "#7a1ef1",
                fontFamily:
                  "Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial",
              }}
            >
              How We Make Your Story Unforgettable
            </h2>
          </div>

          <div id="service-grid">
            {cards.map((c, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => openCard(idx)}
                style={{
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div
                  className="service-card"
                  style={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                    background: "#000",
                  }}
                >
                  {/* Image background instead of gradient */}
                  <img
                    src={c.image}
                    alt={c.frontTitle}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />
                  {/* Dark overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
                      zIndex: 2,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      zIndex: 4,
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "clamp(15px,1.5vw,20px)",
                      lineHeight: 1.15,
                      whiteSpace: "pre-line",
                      maxWidth: "90%",
                      textShadow: "0 8px 22px rgba(0,0,0,0.35)",
                    }}
                  >
                    {c.frontTitle}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      zIndex: 4,
                      padding: "8px 12px",
                      background: "rgba(255,255,255,0.16)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      borderRadius: "999px",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 700,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    Tap to explore
                  </div>
                </div>
              </button>
            ))}
          </div>

          {active && (
            <div
              role="presentation"
              onMouseDown={closeCard}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 999999,
                background: "rgba(0,0,0,0.65)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <div
                onMouseDown={(e) => e.stopPropagation()}
                className="popup-inner"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.65s ease",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "18px",
                      overflow: "hidden",
                      backfaceVisibility: "hidden",
                      background: "#000",
                      boxShadow: "0 40px 110px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: active.bg,
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-60px",
                        right: "-20px",
                        width: "220px",
                        height: "220px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        zIndex: 2,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "-10px",
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        zIndex: 2,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.28)",
                        zIndex: 3,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "26px",
                        bottom: "26px",
                        zIndex: 4,
                        color: "#fff",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(28px,4vw,42px)",
                          marginBottom: "10px",
                        }}
                      >
                        {active.emoji}
                      </div>
                      <div
                        style={{
                          fontSize: "clamp(26px,3.5vw,44px)",
                          fontWeight: 900,
                          lineHeight: 1.12,
                        }}
                      >
                        {active.title}
                      </div>
                      <div
                        style={{
                          marginTop: "12px",
                          display: "inline-flex",
                          padding: "10px 12px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.16)",
                          border: "1px solid rgba(255,255,255,0.22)",
                          fontWeight: 800,
                          fontSize: "clamp(12px,1.2vw,14px)",
                        }}
                      >
                        Flipping to details…
                      </div>
                    </div>
                  </div>
                  {/* Back */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "18px",
                      overflow: "hidden",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "#0b0b0f",
                      color: "#fff",
                      boxShadow: "0 40px 110px rgba(0,0,0,0.5)",
                      padding: "clamp(18px,3vw,28px)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontSize: "clamp(28px,4vw,44px)" }}>
                      {active.emoji}
                    </div>
                    <h3
                      style={{
                        margin: "10px 0 12px",
                        fontSize: "clamp(22px,3vw,36px)",
                        fontWeight: 900,
                      }}
                    >
                      {active.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "#d5d5d5",
                        fontSize: "clamp(14px,1.4vw,16px)",
                        lineHeight: 1.95,
                      }}
                    >
                      {active.desc}
                    </p>
                    <div style={{ marginTop: "18px" }}>
                      <div style={{ fontWeight: 900, marginBottom: "8px" }}>
                        Includes
                      </div>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: "18px",
                          lineHeight: 2,
                        }}
                      >
                        {active.list.map((li, i) => (
                          <li
                            key={i}
                            style={{
                              color: "#eaeaea",
                              fontSize: "clamp(13px,1.3vw,15px)",
                            }}
                          >
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                      <button
                        type="button"
                        onClick={closeCard}
                        style={{
                          width: "100%",
                          padding: "14px 16px",
                          borderRadius: "14px",
                          border: "1px solid rgba(255,255,255,0.22)",
                          background: "rgba(255,255,255,0.08)",
                          color: "#fff",
                          fontWeight: 900,
                          cursor: "pointer",
                        }}
                      >
                        Click anywhere to close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section
        id="features"
        style={{
          paddingTop: "20px",
          paddingBottom: "60px",
          background: "#fff",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <h4
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 900,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "#111",
              }}
            >
              Why Brands Choose Us
            </h4>
            <h2
              style={{
                marginTop: "14px",
                marginBottom: 0,
                fontSize: "clamp(32px,4.5vw,54px)",
                fontWeight: 900,
                color: "#7a1ef1",
                fontFamily:
                  "Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial",
              }}
            >
              What Makes Our Stories Different
            </h2>
          </div>
          <div id="features-grid">
            {[
              {
                gif: "/influencer_marketing/img/cashback.gif",
                title: "Technology Meets Narrative Craft",
                text: "We merge cutting-edge AR/VR capabilities with world-class storytelling. Our experiences are not just visually impressive, they are emotionally compelling. Your audience connects with the story, not just the innovation, driving real impact.",
              },
              {
                gif: "/influencer_marketing/img/processing-speed.gif",
                title: "Platform-Native, Brand-Consistent",
                text: "We reimagine content for every platform instead of repurposing it. From vertical storytelling for social media to audio-first narratives for podcasts, each format is optimized while maintaining a unified brand story.",
              },
              {
                gif: "/influencer_marketing/img/quick-idea.gif",
                title: "Stories That Travel Across Industries",
                text: "From tourism boards to retail destinations and D2C brands, we create immersive narratives that resonate globally while staying locally authentic. Our cross-industry storytelling ensures your brand connects across cultures.",
              },
              {
                gif: "/influencer_marketing/img/puzzle.gif",
                title: "Measurement Built Into Every Experience",
                text: "We embed analytics into every experience, tracking AR engagement, VR session time, UGC participation, and cross-platform journeys. You don’t just get powerful storytelling, you get data that proves performance.",
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  padding: "24px",
                  background: "#fff",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minHeight: "200px",
                }}
              >
                <img
                  src={card.gif}
                  alt={card.title}
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "contain",
                  }}
                />
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 900,
                    fontSize: "clamp(16px,1.6vw,20px)",
                    color: "#111",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(14px,1.4vw,18px)",
                    lineHeight: 1.7,
                    color: "#2b2b2b",
                  }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section
        id="project"
        style={{
          paddingTop: "50px",
          paddingBottom: "100px",
          background: "#fff",
        }}
      >
        <WorkSummaryForServicesPage
          key={key}
          works={immersiveBrandStoryServiceCaseStudy}
        />
      </section>

      {/* ─── TESTIMONIAL MARQUEE ─── */}
      <div
        style={{
          overflow: "hidden",
          background: "#7a1ef1",
          padding: "20px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "fit-content",
            animation: "marquee 22s linear infinite",
            whiteSpace: "nowrap",
            gap: "100px",
            fontWeight: 900,
            fontSize: "clamp(36px,6vw,72px)",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#ffffff" }}>Customer Testimonial .</span>
          <span style={{ color: "#000000" }}>Client Feedbacks</span>
          <span style={{ color: "#ffffff" }}>Customer Testimonial .</span>
          <span style={{ color: "#000000" }}>Client Feedbacks</span>
        </div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <section
        id="testi"
        style={{
          paddingTop: "110px",
          paddingBottom: "120px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {(() => {
          const slides = [
            {
              name: "Mandira Bedi",
              img: "/influencer_marketing/img/testi/Mandira.png",
              text: "I've collaborated with Mélange across multiple shoots, and it has always been a smooth, collaborative, and comfortable process.",
            },
            {
              name: "Karan Kundra",
              img: "/influencer_marketing/img/testi/Karan.jpeg",
              text: "Honestly, it felt more like a vacation with friends than a shoot.",
            },
            {
              name: "Tejasswi Prakash",
              img: "/influencer_marketing/img/testi/Tejasswi.jpeg",
              text: "There is always a moment of laughter with the team.",
            },
            {
              name: "Hebah Patel",
              img: "/influencer_marketing/img/testi/Hebah.jpeg",
              text: "Everything was so thoughtfully planned, and the energy is always fun, and I never realized when the shoot days got over.",
            },
            {
              name: "Dheeraj Dhoopar",
              img: "/influencer_marketing/img/testi/Dheeraj.jpeg",
              text: "Unlike other work here there's always room to explore, improvise, and add my own touch.",
            },
            {
              name: "Pooja Raut",
              img: "/influencer_marketing/img/testi/Pooja.png",
              text: "It's always been a pleasure working with Mélange. They delivered nearly double our campaign targets, driven by meticulous research and a spot-on selection of creators.",
            },
            {
              name: "Puneet Kumar",
              img: "/influencer_marketing/img/testi/Puneet.png",
              text: "It's really fun to work with an agency that doesn't just understand the brief but truly gets the depth behind it.",
            },
            {
              name: "Prabindar Singh",
              img: "/influencer_marketing/img/testi/Prabindar.png",
              text: "In a country where i had to make sweets a healthier option the team got the vision right from the start and they delivered the best work and helped bring in a brand face that just fit in the brand message perfectly.",
            },
          ];
          const [perView, setPerView] = useState(3);
          const [activeSlide, setActiveSlide] = useState(0);
          const [hovered, setHovered] = useState(false);

          useEffect(() => {
            const update = () => {
              const w = window.innerWidth;
              if (w < 640) setPerView(1);
              else if (w < 1024) setPerView(2);
              else setPerView(3);
            };
            update();
            window.addEventListener("resize", update);
            return () => window.removeEventListener("resize", update);
          }, []);

          useEffect(() => {
            if (hovered) return;
            const t = setInterval(
              () => setActiveSlide((a) => (a + 1) % slides.length),
              3500,
            );
            return () => clearInterval(t);
          }, [hovered, slides.length]);

          const maxActive = Math.max(0, slides.length - perView);
          const safeActive = Math.min(activeSlide, maxActive);
          const translatePct = safeActive * (100 / perView);
          const dotCount = 6;
          const activeDot =
            Math.round(
              (Math.min(activeSlide, maxActive) / (maxActive || 1)) *
                (dotCount - 1),
            ) || 0;

          return (
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 24px",
              }}
            >
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ position: "relative" }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div
                    style={{
                      display: "flex",
                      transform: `translateX(-${translatePct}%)`,
                      transition: "transform 900ms ease",
                      willChange: "transform",
                    }}
                  >
                    {slides.map((s, i) => (
                      <div
                        key={i}
                        style={{
                          flex: `0 0 ${100 / perView}%`,
                          padding: "0 18px",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            padding: "10px 0",
                            minHeight: "360px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "26px",
                          }}
                        >
                          <div
                            style={{
                              width: "clamp(100px,14vw,160px)",
                              height: "clamp(100px,14vw,160px)",
                              borderRadius: "999px",
                              overflow: "hidden",
                              border: "10px solid #111",
                              background: "#fff",
                              boxSizing: "border-box",
                            }}
                          >
                            <img
                              src={s.img}
                              alt={s.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                          <p
                            style={{
                              margin: 0,
                              maxWidth: "360px",
                              fontSize: "clamp(14px,1.5vw,18px)",
                              lineHeight: 1.9,
                              color: "#111",
                            }}
                          >
                            {s.text}
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontWeight: 900,
                              fontSize: "clamp(14px,1.3vw,16px)",
                              color: "#7a1ef1",
                              letterSpacing: "0.3px",
                            }}
                          >
                            — {s.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "30px",
                  }}
                >
                  {Array.from({ length: dotCount }).map((_, i) => {
                    const target =
                      maxActive === 0
                        ? 0
                        : Math.round((i / (dotCount - 1)) * maxActive);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveSlide(target)}
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "999px",
                          border: "none",
                          cursor: "pointer",
                          background: i === activeDot ? "#1e90ff" : "#000",
                          opacity: i === activeDot ? 1 : 0.9,
                          transform:
                            i === activeDot ? "scale(1.1)" : "scale(1)",
                          transition: "all 180ms ease",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        style={{
          paddingTop: "0px",
          paddingBottom: "130px",
          background: "#fff",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          <div id="contact-grid">
            <div>
              <div style={{ marginBottom: "26px" }}>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 900,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#111",
                  }}
                >
                  Contact Us
                </h4>
                <h2
                  style={{
                    marginTop: "14px",
                    marginBottom: "12px",
                    fontSize: "clamp(32px,4vw,52px)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    color: "#111",
                    fontFamily:
                      "Bricolage Grotesque, system-ui, -apple-system, Segoe UI, Arial",
                  }}
                >
                  Let's work together
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(15px,1.4vw,18px)",
                    lineHeight: 1.8,
                    color: "#2b2b2b",
                  }}
                >
                  Thank you for your interest in Mélange. We're excited to hear
                  from you and will get back to you soon.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {[
                  {
                    icon: "/influencer_marketing/img/icon/gps.png",
                    label: "Our Address",
                    content: (
                      <p
                        style={{
                          marginTop: "6px",
                          marginBottom: 0,
                          fontSize: "16px",
                          lineHeight: 1.75,
                          color: "#2b2b2b",
                        }}
                      >
                        B12, 7th Floor, Silvio Heights,
                        <br />
                        St. Inez Road, Santa Inez,
                        <br />
                        Panaji, Goa-403001, India
                      </p>
                    ),
                  },
                  {
                    icon: "/influencer_marketing/img/icon/mail.png",
                    label: "Contact",
                    content: (
                      <a
                        href="mailto:hello@melangedigital.co"
                        style={{
                          display: "block",
                          marginTop: "6px",
                          fontSize: "16px",
                          color: "#7a1ef1",
                          textDecoration: "none",
                          fontWeight: 800,
                        }}
                      >
                        hello@melangedigital.co
                      </a>
                    ),
                  },
                  {
                    icon: "/influencer_marketing/img/icon/clock.png",
                    label: "Hours of Operation",
                    content: (
                      <div
                        style={{
                          marginTop: "6px",
                          fontSize: "16px",
                          color: "#2b2b2b",
                        }}
                      >
                        Monday - Friday: 10:00 - 19:00
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        flexShrink: 0,
                        borderRadius: "12px",
                        background: "#f3ecff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          width: "22px",
                          height: "22px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "18px",
                          fontWeight: 900,
                          color: "#111",
                        }}
                      >
                        {item.label}
                      </h4>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: "18px",
                background: "#fff",
                boxShadow: "0 18px 55px rgba(0,0,0,0.12)",
                padding: "26px",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  marginBottom: "16px",
                  color: "#111",
                }}
              >
                Get in Touch with Our Team
              </div>
              {submitted && (
                <div
                  style={{
                    background: "#eefbf3",
                    border: "1px solid #bfe7cc",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    color: "#0f5132",
                    fontWeight: 800,
                    marginBottom: "14px",
                  }}
                >
                  ✅ Thanks! Your response has been submitted. We'll reach out
                  soon.
                </div>
              )}
              {errorMsg && (
                <div
                  style={{
                    background: "#fff0f0",
                    border: "1px solid #ffcccc",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    color: "#8a1f1f",
                    fontWeight: 800,
                    marginBottom: "14px",
                  }}
                >
                  {errorMsg}
                </div>
              )}
              <form
                id="webform823188000003621001"
                action="https://crm.zoho.in/crm/WebToLeadForm"
                method="POST"
                acceptCharset="UTF-8"
                onSubmit={onZohoSubmit}
              >
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="xnQsjsdp"
                  value="d0afa95d6951e308dc4962f718b07538dd447dc9619956b507a91551ffa2a713"
                  readOnly
                />
                <input
                  type="hidden"
                  name="zc_gad"
                  id="zc_gad"
                  defaultValue=""
                />
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="xmIwtLD"
                  value="a28bd82e599c4370550a44dfa7f34e63128c98319d025047dfae5bbe21ba787a01911914bc8deebfc75fd77f0c85bf07"
                  readOnly
                />
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="actionType"
                  value="TGVhZHM="
                  readOnly
                />
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="returnURL"
                  value="null"
                  readOnly
                />
                <input type="hidden" name="aG9uZXlwb3Q" value="" />
                {[
                  {
                    label: "First Name",
                    name: "First Name",
                    id: "First_Name",
                    required: true,
                    max: 40,
                  },
                  {
                    label: "Last Name",
                    name: "Last Name",
                    id: "Last_Name",
                    required: true,
                    max: 80,
                  },
                  {
                    label: "Company",
                    name: "Company",
                    id: "Company",
                    required: true,
                    max: 200,
                  },
                  {
                    label: "Mobile",
                    name: "Mobile",
                    id: "Mobile",
                    required: true,
                    max: 30,
                  },
                  {
                    label: "Email",
                    name: "Email",
                    id: "Email",
                    required: true,
                    max: 100,
                    type: "email",
                  },
                ].map((f) => (
                  <div key={f.id} style={{ marginBottom: "14px" }}>
                    <label
                      htmlFor={f.id}
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 900,
                        color: "#111",
                        marginBottom: "6px",
                      }}
                    >
                      {f.label}{" "}
                      {f.required ? (
                        <span style={{ color: "red" }}>*</span>
                      ) : null}
                    </label>
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type || "text"}
                      maxLength={f.max}
                      aria-required={f.required ? "true" : "false"}
                      style={{
                        width: "100%",
                        height: "48px",
                        borderRadius: "12px",
                        border: "1px solid rgba(0,0,0,0.12)",
                        padding: "0 14px",
                        fontSize: "15px",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: "18px" }}>
                  <label
                    htmlFor="Description"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#111",
                      marginBottom: "6px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="Description"
                    name="Description"
                    style={{
                      width: "100%",
                      minHeight: "120px",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.12)",
                      padding: "12px 14px",
                      fontSize: "15px",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      height: "46px",
                      padding: "0 22px",
                      borderRadius: "12px",
                      border: "none",
                      background: submitting ? "#b79af7" : "#7a1ef1",
                      color: "#fff",
                      fontWeight: 900,
                      cursor: submitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                  <button
                    type="reset"
                    style={{
                      height: "46px",
                      padding: "0 22px",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.18)",
                      background: "#fff",
                      color: "#111",
                      fontWeight: 900,
                      cursor: "pointer",
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImmersiveBrandStorytellingService;