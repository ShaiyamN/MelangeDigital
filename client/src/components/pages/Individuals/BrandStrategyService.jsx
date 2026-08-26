import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer, WorkSummaryForServicesPage } from "../../layout";
import { brandStrategyServiceCaseStudy } from "../../../constants";

const BrandStrategyService = () => {
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
      frontTitle: "Brand Positioning\n& Identity",
      image: "/influencer_marketing/img/images/Brand_Positioning_Identity.jpeg",
      emoji: "🎯",
      title: "Brand Positioning & Identity",
      desc: "Position your brand where competitors can't follow",
      list: [
        "Deep brand discovery and values identification",
        "Competitive analysis and market gap identification",
        "Emotional positioning that resonates viscerally",
        "Unique narrative architecture and story development",
        "Category leadership positioning frameworks",
        "Brand personality and voice definition",
      ],
    },
    {
      frontTitle: "Target Market &\nConsumer Intelligence",
      image:
        "/influencer_marketing/img/images/Target_Market_Consumer_Intelligence.png",
      emoji: "🧠",
      title: "Target Market & Consumer Intelligence",
      desc: "Data-driven insights that predict what your customers want next",
      list: [
        "Behavioral pattern analysis and purchase trigger identification",
        "Advanced audience segmentation and profiling",
        "Consumer journey mapping across all touchpoints",
        "Psychographic profiling beyond basic demographics",
        "Predictive insight research and trend forecasting",
        "Actionable audience intelligence that drives conversions",
      ],
    },
    {
      frontTitle: "Brand Architecture\n& Portfolio Strategy",
      image:
        "/influencer_marketing/img/images/Brand_Architecture_Portfolio_Strategy.jpeg",
      emoji: "🏗️",
      title: "Brand Architecture & Portfolio Strategy",
      desc: "Organize your offerings for maximum clarity and profitability",
      list: [
        "Brand portfolio hierarchy and relationship mapping",
        "Sub-brand positioning and differentiation strategy",
        "Naming conventions and nomenclature systems",
        "Product-to-brand architecture alignment",
        "Customer decision journey optimization",
        "Scalable expansion and growth frameworks",
      ],
    },
    {
      frontTitle: "Competitive Intelligence\n& Market Domination",
      image:
        "/influencer_marketing/img/images/Competitive_Intelligence_Market_Domination.png",
      emoji: "📡",
      title: "Competitive Intelligence & Market Domination",
      desc: "Strategic intelligence that turns market gaps into your opportunities",
      list: [
        "Comprehensive competitive landscape analysis",
        "SWOT analysis and positioning gap identification",
        "Market trend monitoring and opportunity spotting",
        "White space identification and exploitation strategy",
        "Differentiation frameworks that can't be replicated",
        "Strategic positioning that reshapes market dynamics",
      ],
    },
  ];

  const active = activeCard !== null ? cards[activeCard] : null;

  const [key, setKey] = useState(0);
  const resetComponent = () => setKey((prevKey) => prevKey + 1);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Brand Strategy Services | Mélange Digital</title>
        <meta
          name="description"
          content="Brand strategy for travel and tourism. Positioning, messaging, and go-to-market planning for tourism boards, hospitality, and travel brands."
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
          href="https://melangedigital.co/services/brand-strategy"
        />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Brand Strategy for Travel and Tourism",
        "name": "Brand Strategy and Planning for Travel and Tourism Brands",
        "description": "We build integrated brand strategies for travel brands, tourism boards, hospitality groups, and cruise lines — from market positioning and messaging frameworks to go-to-market planning and campaign execution across India, GCC, and global markets.",
        "url": "https://melangedigital.co/services/brand-strategy",
        "provider": {
          "@type": "Organization",
          "name": "Melange Digital",
          "url": "https://melangedigital.co"
        },
        "areaServed": [
          "India",
          "United Arab Emirates",
          "Singapore",
          "United Kingdom"
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://melangedigital.co/contact",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+91-9372567722"
          }
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Travel brands, tourism boards, hospitality groups, cruise lines, D2C travel startups, and destination marketing organisations"
        },
        "category": "Digital Marketing for Travel and Tourism"
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
    background: "#f6f5f7",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    fontFamily: '"Bricolage Grotesque", sans-serif',
  }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap');

    @keyframes bsFadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes bsZoomIn {
      from { opacity: 0; transform: scale(0.94); }
      to   { opacity: 1; transform: scale(1); }
    }

    .bs-bubble {
      position: absolute;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid #ffffff;
      box-shadow: 0 4px 24px rgba(0,0,0,0.13);
    }
    .bs-bubble img {
      width: 100%; height: 100%;
      object-fit: cover; display: block;
    }

    .bs-grad-text {
      background: linear-gradient(90deg, #d946ef 0%, #a855f7 40%, #4f46e5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      display: block;
    }

    .bs-ring {
      position: absolute;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .bs-ring-cut {
      border-radius: 50%;
      background: #f6f5f7;
      background-image:
        linear-gradient(to right, rgba(220,215,225,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(220,215,225,0.8) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    /* ── DESKTOP LAYOUT ── */
    .bs-main-row {
      position: relative; z-index: 2;
      width: 100%; max-width: 1550px;
      margin: 0 auto;
      padding: 90px 55px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .bs-left {
      flex: 0 0 44%;
      animation: bsFadeUp .85s ease-out both;
    }

    .bs-headline-small {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 800;
      font-size: clamp(1.4rem, 2.4vw, 2.7rem);
      letter-spacing: -0.5px;
      color: #1c1c22;
      text-transform: uppercase;
      white-space: nowrap;
      margin-bottom: 4px;
    }

    .bs-headline-big {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 900;
      font-size: clamp(4rem, 7vw, 8rem);
      line-height: 0.88;
      letter-spacing: -3px;
      text-transform: uppercase;
    }

    /* Desktop visual cluster — absolute positioned */
    .bs-right {
      position: relative;
      flex: 0 0 56%;
      height: 580px;
      animation: bsZoomIn 1s ease-out both;
    }

    .bs-cluster {
      position: relative;
      width: 690px;
      height: 580px;
    }

    /* ── MOBILE ── */
    @media (max-width: 768px) {
      .bs-main-row {
        flex-direction: column;
        padding: 56px 24px 72px;
        gap: 0px;
        align-items: center;
        text-align: center;
      }

      .bs-left {
        flex: none;
        width: 100%;
        margin-bottom: 24px;
      }

      .bs-headline-small {
        font-size: 3.2vw !important;
        white-space: normal !important;
        margin-bottom: 6px;
      }

      .bs-headline-big {
        font-size: 17vw !important;
        letter-spacing: -1.5px !important;
        line-height: 0.9 !important;
      }

      /* On mobile the visual is a self-contained SVG-like block */
      .bs-right {
        flex: none;
        width: 100%;
        /* We'll use a centered container with known aspect ratio */
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* Wrapper that scales the entire cluster proportionally */
      .bs-cluster-scaler {
        /* Original cluster is ~690 wide. On mobile viewport ~390,
           we want it to occupy ~100% of width so scale = 390/690 ≈ 0.565
           But we use vw-based sizing instead for fluid behaviour */
        width: min(390px, 95vw);
        aspect-ratio: 690 / 580;
        position: relative;
      }

      /* Scale the 690×580 cluster to fit inside bs-cluster-scaler */
      .bs-cluster {
        position: absolute;
        top: 0; left: 0;
        width: 690px;
        height: 580px;
        transform-origin: top left;
        /* scale = container-width / 690 — done via CSS scale trick */
        transform: scale(calc(min(390px, 95vw) / 690));
      }

      /* hide bottom-left deco on mobile */
      .bs-deco-bl-circle,
      .bs-deco-bl-arc {
        display: none;
      }

      .bs-deco-top-dot {
        width: 65px !important;
        height: 65px !important;
        top: -10px !important;
        left: 18% !important;
      }

      .bs-deco-bc-stripe {
        width: 90px !important;
        height: 48px !important;
        left: 32% !important;
      }
    }

    /* Very small phones */
    @media (max-width: 390px) {
      .bs-cluster-scaler {
        width: 95vw;
      }
      .bs-cluster {
        transform: scale(calc(95vw / 690));
      }
    }

    /* Desktop — no scaler needed */
    @media (min-width: 769px) {
      .bs-cluster-scaler {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
      }
      .bs-cluster {
        transform: none;
      }
    }
  `}</style>

  {/* GRID */}
  <div style={{
    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
    backgroundImage:
      "linear-gradient(to right, rgba(220,215,225,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,215,225,0.8) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  }} />

  {/* TOP-CENTER purple dot */}
  <div className="bs-deco-top-dot" style={{
    position: "absolute",
    top: "-25px", left: "26%",
    width: "130px", height: "130px",
    borderRadius: "50%",
    background: "#c026d3",
    zIndex: 1, pointerEvents: "none",
  }} />

  {/* BOTTOM-LEFT gradient filled circle */}
  <div className="bs-deco-bl-circle" style={{
    position: "absolute",
    bottom: "-90px", left: "-90px",
    width: "250px", height: "250px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #d946ef 0%, #7c3aed 100%)",
    zIndex: 2, pointerEvents: "none",
  }} />

  {/* BOTTOM-LEFT blue arc */}
  <div className="bs-deco-bl-arc" style={{
    position: "absolute",
    bottom: "-130px", left: "30px",
    width: "255px", height: "255px",
    borderRadius: "50%",
    border: "22px solid #4361ee",
    zIndex: 1, pointerEvents: "none",
  }} />

  {/* BOTTOM-CENTRE striped oval */}
  <div className="bs-deco-bc-stripe" style={{
    position: "absolute",
    bottom: "-10px", left: "36%",
    width: "170px", height: "90px",
    borderTopLeftRadius: "120px",
    borderTopRightRadius: "120px",
    background: "repeating-linear-gradient(135deg,#4d67ff 0 4px,transparent 4px 14px)",
    zIndex: 1, pointerEvents: "none",
  }} />

  {/* MAIN ROW */}
  <div className="bs-main-row">

    {/* LEFT TEXT */}
    <div className="bs-left">
      <div className="bs-headline-small">
        TURNING EVERY BRAND INTO A
      </div>
      <div className="bs-grad-text bs-headline-big">
        MARKET<br />LEADER
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="bs-right">
      <div className="bs-cluster-scaler">
        <div className="bs-cluster">

          {/* PINK RING */}
          <div
            className="bs-ring"
            style={{
              width: "480px", height: "480px",
              top: "50px", left: "100px",
              background: "linear-gradient(135deg, #f0abfc 0%, #e879f9 20%, #d946ef 60%, #c026d3 100%)",
              zIndex: 2,
            }}
          >
            <div className="bs-ring-cut" style={{ width: "424px", height: "424px" }} />
          </div>

          {/* BLUE RING */}
          <div
            className="bs-ring"
            style={{
              width: "480px", height: "480px",
              top: "60px", left: "190px",
              background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 20%, #6366f1 50%, #3b82f6 100%)",
              zIndex: 3,
            }}
          >
            <div className="bs-ring-cut" style={{ width: "424px", height: "424px" }} />
          </div>

          {/* brand1 */}
          <div className="bs-bubble" style={{
            width: "320px", height: "320px",
            top: "130px", left: "70px",
            zIndex: 6,
            border: "6px solid #fff",
          }}>
            <img src="/influencer_marketing/img/images/brand1.png" alt="Brand 1" />
          </div>

          {/* brand3 */}
          <div className="bs-bubble" style={{
            width: "190px", height: "190px",
            top: "35px", left: "505px",
            zIndex: 5,
          }}>
            <img src="/influencer_marketing/img/images/brand3.jpg" alt="Brand 3" />
          </div>

          {/* brand2 */}
          <div className="bs-bubble" style={{
            width: "200px", height: "200px",
            top: "370px", left: "500px",
            zIndex: 5,
          }}>
            <img src="/influencer_marketing/img/images/brand2.png" alt="Brand 2" />
          </div>

        </div>
      </div>
    </div>

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
              How We Build Brands That Last
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
              What Makes Our Brand Strategy Different
            </h2>
          </div>
          <div id="features-grid">
            {[
              {
                gif: "/influencer_marketing/img/cashback.gif",
                title: "Strategy First, Always. Design Second.",
                text: "We start with strategy, not aesthetics. Before any design, we immerse in your market, dissect the competition, and understand customer motivations. This foundation ensures every creative decision is strategic and drives performance.",
              },
              {
                gif: "/influencer_marketing/img/processing-speed.gif",
                title: "Data-Driven Creativity That Actually Converts",
                text: "Every positioning decision, messaging framework, and visual element is backed by consumer psychology and market research. Our strategists and creatives work together, ensuring your brand is emotionally resonant and commercially viable.",
              },
              {
                gif: "/influencer_marketing/img/quick-idea.gif",
                title: "From Mumbai Startups to Global Tourism Boards",
                text: "We've positioned local brands into household names and global organizations entering new markets. Cross-industry intelligence ensures your brand resonates locally authentic, globally relevant. Siam Malls, Singapore Tourism, Sharjah Tourism trusted us.",
              },
              {
                gif: "/influencer_marketing/img/puzzle.gif",
                title: "Complete Brand Ecosystem, Not Just a Logo Package",
                text: "We build complete brand ecosystems from positioning to implementation, research to launch strategy. You get frameworks, messaging architecture, visual systems, competitive intelligence, and roadmaps. Everything needed for market domination.",
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
          works={brandStrategyServiceCaseStudy}
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

export default BrandStrategyService;