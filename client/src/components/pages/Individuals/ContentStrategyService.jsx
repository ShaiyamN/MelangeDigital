import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer, WorkSummaryForServicesPage } from "../../layout";
import { contentStrategyServiceCaseStudy } from "../../../constants";

const ContentStrategyService = () => {
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
      frontTitle: "Content Strategy\n& SEO Optimization",
      image:
        "/influencer_marketing/img/images/Content_Strategy_SEO_Optimization.png",
      emoji: "📈",
      title: "Content Strategy & SEO Optimization",
      desc: "Strategic planning meets SEO best practices for maximum impact",
      list: [
        "Complete content inventory and assessment",
        "Content gap identification and opportunity mapping",
        "Keyword research and strategic integration",
        "Search intent-driven content planning",
        "On-page SEO optimization techniques",
        "Strategic roadmap for content improvement",
      ],
    },
    {
      frontTitle: "Social Media &\nVideo Content",
      image: "/influencer_marketing/img/images/Social_Media_Video_Content.jpg",
      emoji: "🎬",
      title: "Social Media & Video Content",
      desc: "Platform-specific content that builds community and drives engagement",
      list: [
        "Tailored content strategy per platform",
        "Engagement-focused post planning and scheduling",
        "Trend-leveraging content creation",
        "Concept development and scriptwriting",
        "Professional video production and editing",
        "Platform-native format optimization",
      ],
    },
    {
      frontTitle: "Long & Short-Form\nContent Creation",
      image:
        "/influencer_marketing/img/images/Long_Short_Form_Content_Creation.png",
      emoji: "✍️",
      title: "Long & Short-Form Content Creation",
      desc: "Versatile content that meets your audience where they are",
      list: [
        "In-depth long-form articles and guides",
        "Snackable short-form content for quick consumption",
        "SEO-optimized blog posts and articles",
        "Thought leadership content development",
        "Authority-building editorial calendars",
        "Value-driven content that educates and entertains",
      ],
    },
    {
      frontTitle: "Visual Content\n& Copywriting",
      image: "/influencer_marketing/img/images/Visual_Content_Copywriting.png",
      emoji: "🎨",
      title: "Visual Content & Copywriting",
      desc: "Compelling narratives and eye-catching visuals that inspire action",
      list: [
        "Custom graphics and social media assets",
        "Infographic design and data visualization",
        "Brand-aligned visual content creation",
        "Brand voice development and refinement",
        "Conversion-focused copywriting",
        "Copy that builds brand loyalty and recognition",
      ],
    },
  ];
  const active = activeCard !== null ? cards[activeCard] : null;

  const [key, setKey] = useState(0);
  const resetComponent = () => setKey((prevKey) => prevKey + 1);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Content Strategy & Production Services | Mélange Digital</title>
        <meta
          name="description"
          content="Content strategy and production for travel and tourism brands. From destination stories to campaign assets, Mélange Digital plans and produces work that converts."
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
          href="https://melangedigital.co/services/content-strategy-and-production"
        />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://melangedigital.co/services/content-strategy-and-production#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://melangedigital.co/services" },
          { "@type": "ListItem", "position": 3, "name": "Content Strategy & Production", "item": "https://melangedigital.co/services/content-strategy-and-production" }
        ]
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://melangedigital.co/services/content-strategy-and-production#webpage",
        "url": "https://melangedigital.co/services/content-strategy-and-production",
        "name": "Content Strategy & Production Services | Mélange Digital",
        "description": "Content strategy and production for travel and tourism brands from Mélange Digital.",
        "isPartOf": { "@type": "WebSite", "@id": "https://melangedigital.co/#website" },
        "breadcrumb": { "@id": "https://melangedigital.co/services/content-strategy-and-production#breadcrumb" },
        "inLanguage": "en-US"
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://melangedigital.co/services/content-strategy-and-production#service",
        "name": "Content Strategy & Production Services",
        "url": "https://melangedigital.co/services/content-strategy-and-production",
        "description": "Mélange Digital plans and produces content for tourism boards, hospitality, and travel brands.",
        "provider": {
          "@type": "Organization",
          "name": "Mélange Digital",
          "url": "https://melangedigital.co",
          "logo": "https://melangedigital.co/logo.png",
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
          "name": "Content Strategy & Production Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Strategy", "description": "Editorial and campaign content planning for travel and tourism brands." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Production", "description": "Photo, video, and written production for destinations and travel campaigns." } }
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
      <section
  style={{
    position: "relative",
    overflow: "hidden",
    background: "#ffffff",
    fontFamily: '"Bricolage Grotesque", sans-serif',
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,900&display=swap');

    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroZoomIn {
      from { opacity: 0; transform: scale(0.94); }
      to   { opacity: 1; transform: scale(1); }
    }

    #cs-grid {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background-image:
        linear-gradient(to right, rgba(180,160,210,.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(180,160,210,.4) 1px, transparent 1px);
      background-size: 46px 46px;
    }
    #cs-arc1 {
      position: absolute; top: -85px; left: -85px;
      width: 270px; height: 270px; border-radius: 50%;
      border: 30px solid #7c3aed; z-index: 1; pointer-events: none;
    }
    #cs-arc2 {
      position: absolute; top: -35px; left: -15px;
      width: 210px; height: 210px; border-radius: 50%;
      border: 28px solid #4361ee; z-index: 1; pointer-events: none;
    }
    #cs-tr-circle {
      position: absolute; top: -55px; right: -55px;
      width: 170px; height: 170px; border-radius: 50%;
      background: linear-gradient(145deg, #e040fb, #7c3aed);
      z-index: 1; pointer-events: none;
    }
    #cs-stripe-oval {
      position: absolute; bottom: 20px; left: 35%;
      width: 148px; height: 96px; border-radius: 50%;
      background: repeating-linear-gradient(135deg, #4361ee 0px, #4361ee 4px, transparent 4px, transparent 13px);
      z-index: 1; pointer-events: none;
    }

    .cs-bubble {
      position: absolute;
      border-radius: 50% !important;
      overflow: hidden;
      border: 5px solid #ffffff;
      box-shadow: 0 4px 24px rgba(0,0,0,0.12);
      flex-shrink: 0;
    }
    .cs-bubble img {
      width: 100%; height: 100%;
      object-fit: cover; display: block; border-radius: 0;
    }

    .cs-gradient-text {
      background: linear-gradient(90deg, #d946ef 0%, #a855f7 40%, #3b82f6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    /* ── DESKTOP LAYOUT ── */
    #cs-main-row {
      position: relative; z-index: 2;
      width: 100%; max-width: 1500px;
      margin: 0 auto;
      padding: 0 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    #cs-right-wrap {
      position: relative;
      flex: 0 0 660px;
      height: 580px;
      animation: heroZoomIn 1s ease-out both;
    }

    /* ── MOBILE LAYOUT ── */
    #cs-mobile-layout { display: none; }

    @media (max-width: 768px) {

      /* Section: auto height, block */
      section {
        min-height: unset !important;
        height: auto !important;
        display: block !important;
        align-items: unset !important;
      }

      /* Hide all desktop children */
      #cs-grid, #cs-arc1, #cs-arc2, #cs-tr-circle,
      #cs-stripe-oval, #cs-main-row {
        display: none !important;
      }

      /* Show mobile layout */
      #cs-mobile-layout {
        display: block !important;
        position: relative;
        z-index: 2;
        background: #ffffff;
        padding-bottom: 36px;
      }

      /* Grid bg for mobile */
      #cs-mobile-layout::before {
        content: '';
        position: absolute; inset: 0; z-index: 0; pointer-events: none;
        background-image:
          linear-gradient(to right, rgba(180,160,210,.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(180,160,210,.4) 1px, transparent 1px);
        background-size: 46px 46px;
      }

      /* Top-left arcs on mobile (smaller) */
      #cs-mobile-layout .m-arc1 {
        position: absolute; top: -45px; left: -45px;
        width: 150px; height: 150px; border-radius: 50%;
        border: 18px solid #7c3aed; z-index: 1; pointer-events: none;
      }
      #cs-mobile-layout .m-arc2 {
        position: absolute; top: -18px; left: -8px;
        width: 118px; height: 118px; border-radius: 50%;
        border: 16px solid #4361ee; z-index: 1; pointer-events: none;
      }
      /* Top-right circle (smaller) */
      #cs-mobile-layout .m-tr-circle {
        position: absolute; top: -30px; right: -30px;
        width: 90px; height: 90px; border-radius: 50%;
        background: linear-gradient(145deg, #e040fb, #7c3aed);
        z-index: 1; pointer-events: none;
      }

      /* ── TEXT ── */
      .m-text {
        position: relative;
        z-index: 2;
        text-align: center;
        padding: 72px 20px 28px;
        font-family: 'Bricolage Grotesque', sans-serif;
      }
      .m-text .m-sub {
        font-weight: 900;
        font-size: clamp(0.75rem, 3.5vw, 1rem);
        line-height: 1.1;
        text-transform: uppercase;
        letter-spacing: -0.3px;
        color: #111111;
        margin-bottom: 4px;
      }
      .m-text .m-big {
        font-weight: 900;
        font-size: clamp(3rem, 14vw, 4.5rem);
        line-height: 0.92;
        text-transform: uppercase;
        letter-spacing: -2px;
      }

      /* ── BUBBLE GRID ── */
      /* 2×2 grid of circular bubbles — fixed size, centered */
      .m-bubble-grid {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding: 0 28px;
        justify-items: center;
      }

      .m-bubble-cell {
        width: 100%;
        aspect-ratio: 1;
        max-width: 155px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid #fff;
        box-shadow: 0 4px 20px rgba(0,0,0,0.13);
        position: relative;
      }
      .m-bubble-cell img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
      }

      /* Decorative ring behind grid */
      .m-grid-ring {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 85vw; height: 85vw;
        max-width: 340px; max-height: 340px;
        border-radius: 50%;
        border: 22px solid transparent;
        background:
          linear-gradient(#fff, #fff) padding-box,
          linear-gradient(135deg, #d946ef, #4361ee) border-box;
        pointer-events: none;
        z-index: 1;
      }

      /* Bottom stripe oval */
      .m-stripe-oval {
        width: 100px; height: 60px;
        border-radius: 50%;
        background: repeating-linear-gradient(135deg, #4361ee 0px, #4361ee 4px, transparent 4px, transparent 13px);
        margin: 20px auto 0;
        position: relative;
        z-index: 2;
      }
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      #cs-main-row {
        flex-direction: column !important;
        padding: 110px 28px 80px !important;
        gap: 60px !important;
        align-items: flex-start !important;
      }
      #cs-right-wrap {
        width: 100% !important;
        height: 500px !important;
      }
    }
  `}</style>

  <div id="cs-grid" />
  <div id="cs-arc1" />
  <div id="cs-arc2" />
  <div id="cs-tr-circle" />
  <div id="cs-stripe-oval" />

  {/* ── DESKTOP MAIN ROW (untouched) ── */}
  <div id="cs-main-row">

    {/* LEFT TEXT */}
    <div style={{ flex: "0 0 auto", animation: "heroFadeUp .85s ease-out both" }}>
      <div style={{
        fontFamily: '"Bricolage Grotesque", sans-serif',
        fontWeight: 900,
        fontSize: "clamp(1.4rem, 2.4vw, 2.8rem)",
        lineHeight: 1.1,
        textTransform: "uppercase",
        letterSpacing: "-0.3px",
        color: "#111111",
        whiteSpace: "nowrap",
        marginBottom: "0px",
      }}>
        TURNING EVERY STORY INTO
      </div>
      <div className="cs-gradient-text" style={{
        fontFamily: '"Bricolage Grotesque", sans-serif',
        fontWeight: 900,
        fontSize: "clamp(3.5rem, 7.5vw, 8.5rem)",
        lineHeight: 0.95,
        textTransform: "uppercase",
        letterSpacing: "-3px",
        whiteSpace: "nowrap",
      }}>
        STRATEGY
      </div>
    </div>

    {/* RIGHT CLUSTER */}
    <div id="cs-right-wrap">
      {/* OUTER RING */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-38%, -50%)",
        width: "520px", height: "520px", borderRadius: "50%",
        background: "linear-gradient(135deg, #d946ef 0%, #9333ea 50%, #4361ee 100%)",
        zIndex: 2, pointerEvents: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "460px", height: "460px", borderRadius: "50%",
          background: "#ffffff",
          backgroundImage: "linear-gradient(to right, rgba(180,160,210,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,160,210,.4) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }} />
      </div>
      {/* INNER RING */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-28%, -50%)",
        width: "390px", height: "390px", borderRadius: "50%",
        background: "linear-gradient(135deg, #d946ef 0%, #9333ea 50%, #4361ee 100%)",
        zIndex: 2, pointerEvents: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "342px", height: "342px", borderRadius: "50%",
          background: "#ffffff",
          backgroundImage: "linear-gradient(to right, rgba(180,160,210,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,160,210,.4) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }} />
      </div>

      <div className="cs-bubble" style={{ width: "165px", height: "165px", top: "70px", left: "60px", zIndex: 5 }}>
        <img src="/influencer_marketing/img/images/content1.jpg" alt="Content 1" />
      </div>
      <div className="cs-bubble" style={{ width: "185px", height: "185px", top: "10px", right: "170px", zIndex: 5 }}>
        <img src="/influencer_marketing/img/images/content2.jpg" alt="Content 2" />
      </div>
      <div className="cs-bubble" style={{ width: "205px", height: "205px", bottom: "55px", left: "40px", zIndex: 5 }}>
        <img src="/influencer_marketing/img/images/content3.jpg" alt="Content 3" />
      </div>
      <div className="cs-bubble" style={{ width: "320px", height: "320px", bottom: "25px", right: "90px", zIndex: 5, border: "6px solid #ffffff" }}>
        <img src="/influencer_marketing/img/images/content4.jpg" alt="Content 4" />
      </div>
    </div>
  </div>

  {/* ── MOBILE LAYOUT ── */}
  <div id="cs-mobile-layout">
    <div className="m-arc1" />
    <div className="m-arc2" />
    <div className="m-tr-circle" />

    {/* Text */}
    <div className="m-text">
      <div className="m-sub">Turning every story into</div>
      <div className="cs-gradient-text m-big">STRATEGY</div>
    </div>

    {/* 2×2 bubble grid with decorative ring */}
    <div style={{ position: "relative", padding: "0 20px" }}>
      <div className="m-grid-ring" />
      <div className="m-bubble-grid">
        <div className="m-bubble-cell">
          <img src="/influencer_marketing/img/images/content1.jpg" alt="Content 1" />
        </div>
        <div className="m-bubble-cell">
          <img src="/influencer_marketing/img/images/content2.jpg" alt="Content 2" />
        </div>
        <div className="m-bubble-cell">
          <img src="/influencer_marketing/img/images/content3.jpg" alt="Content 3" />
        </div>
        <div className="m-bubble-cell">
          <img src="/influencer_marketing/img/images/content4.jpg" alt="Content 4" />
        </div>
      </div>
    </div>

    <div className="m-stripe-oval" />
  </div>

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
              The Complete Content Production Suite
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
              Why Brands Trust Us With Their Content
            </h2>
          </div>
          <div id="features-grid">
            {[
              {
                gif: "/influencer_marketing/img/cashback.gif",
                title: "Strategy Before a Single Word Is Written",
                text: "We don't start writing and hope it works. Every content piece begins with strategy, audience research, competitive analysis, SEO planning, and a heavy amount of research that will make your content go viral. Our content isn't just well-written; it's strategically designed to achieve your business goals.",
              },
              {
                gif: "/influencer_marketing/img/processing-speed.gif",
                title: "SEO Expertise That Doesn't Sacrifice Storytelling",
                text: "We balance search optimization with compelling narratives. Our content ranks on Google and resonates with humans. Keywords are integrated naturally, not stuffed awkwardly. Your audience gets value, and search engines reward you with visibility.",
              },
              {
                gif: "/influencer_marketing/img/quick-idea.gif",
                title: "Cross-Industry Content Intelligence",
                text: "From tourism campaigns generating millions of views to D2C brand storytelling driving conversions, we've created content across industries and platforms. This diverse experience means we bring proven strategies tailored to your unique needs.",
              },
              {
                gif: "/influencer_marketing/img/puzzle.gif",
                title: "Complete Content Ecosystem, Not Just Blog Posts",
                text: "We deliver comprehensive content strategies: audits, calendars, guidelines, SEO frameworks, visual assets, and ongoing optimization. You don't just get content; you get a complete system for sustained content marketing success.",
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
          works={contentStrategyServiceCaseStudy}
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

export default ContentStrategyService;