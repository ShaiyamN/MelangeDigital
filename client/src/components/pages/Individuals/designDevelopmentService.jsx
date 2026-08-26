import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer, WorkSummaryForServicesPage } from "../../layout";
import { designDevelopmentServiceCaseStudy } from "../../../constants";

const designDevelopmentService = () => {
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
      frontTitle: "UI/UX Design\n& Development",
      image: "/influencer_marketing/img/images/UI_UX Design & Development.png",
      emoji: "🎨",
      title: "UI/UX Design & Development",
      desc: "Design and development that engages users and maximizes conversions",
      list: [
        "Intuitive user interface design systems",
        "Comprehensive user experience optimization",
        "A/B testing and usability research",
        "Conversion-focused design decisions",
        "Custom website and application development",
        "Responsive and mobile-optimized builds",
        "Fast-loading, performance-optimized code",
        "Seamless user experience across all devices",
        "SEO-friendly architecture and structure",
        "Accessibility compliance and best practices",
      ],
    },
    {
      frontTitle: "Visual Identity\n& Brand Design",
      image:
        "/influencer_marketing/img/images/Visual Identity & Brand Design.jpg",
      emoji: "🧩",
      title: "Visual Identity & Brand Design",
      desc: "Craft a visual language that speaks volumes about your brand",
      list: [
        "Logo design and brand mark creation",
        "Color palette and typography systems",
        "Visual style guides and brand standards",
        "Cohesive brand asset development",
        "Print and digital identity adaptation",
        "Scalable visual system architecture",
        "Product and packaging design solutions",
        "Motion graphics and brand animations",
        "Shelf-impact packaging that sells",
        "Brand-aligned physical experiences",
      ],
    },
    {
      frontTitle: "Prototyping & Creative\nConceptualization",
      image:
        "/influencer_marketing/img/images/Prototyping & Creative Conceptualization.jpg",
      emoji: "💡",
      title: "Prototyping & Creative Conceptualization",
      desc: "Transform your vision into validated, market-ready concepts",
      list: [
        "Collaborative ideation and brainstorming sessions",
        "Brand vision alignment and goal setting",
        "Innovative concept development and exploration",
        "Interactive prototype development and testing",
        "User flow mapping and journey visualization",
        "Low and high-fidelity wireframe creation",
        "Early-stage feedback integration and iteration",
        "User-centered design validation",
        "Risk mitigation through pre-development testing",
        "Strategic creative direction and execution planning",
      ],
    },
    {
      frontTitle: "Mobile-First &\nMotion Design",
      image:
        "/influencer_marketing/img/images/Mobile-First & Motion Design.png",
      emoji: "📱",
      title: "Mobile-First & Motion Design",
      desc: "Mobile-optimized experiences with captivating motion design",
      list: [
        "Mobile-first responsive design approach",
        "Touch-optimized interface elements",
        "Progressive web app (PWA) development",
        "Cross-device consistency and performance",
        "Mobile conversion optimization",
        "Captivating motion graphics and animations",
        "Micro-interactions and UI animations",
        "Explainer video animations",
        "Brand animation and motion identity",
        "Social media animated content",
      ],
    },
  ];

  const active = activeCard !== null ? cards[activeCard] : null;

  const [key, setKey] = useState(0);
  const resetComponent = () => setKey((prevKey) => prevKey + 1);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Design & Development Services | Mélange Digital</title>
        <meta
          name="description"
          content="Website, UI/UX, and brand design for travel and tourism. Mélange Digital builds high-performing digital experiences for tourism boards and travel brands."
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
          href="https://melangedigital.co/services/design-and-development"
        />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://melangedigital.co/services/design-and-development#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://melangedigital.co/services" },
          { "@type": "ListItem", "position": 3, "name": "Design & Development", "item": "https://melangedigital.co/services/design-and-development" }
        ]
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://melangedigital.co/services/design-and-development#webpage",
        "url": "https://melangedigital.co/services/design-and-development",
        "name": "Design & Development Services | Mélange Digital",
        "description": "Website, UI/UX, and brand design for travel and tourism from Mélange Digital.",
        "isPartOf": { "@type": "WebSite", "@id": "https://melangedigital.co/#website" },
        "breadcrumb": { "@id": "https://melangedigital.co/services/design-and-development#breadcrumb" },
        "inLanguage": "en-US"
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://melangedigital.co/services/design-and-development#service",
        "name": "Design & Development Services",
        "url": "https://melangedigital.co/services/design-and-development",
        "description": "Mélange Digital designs and develops websites and digital products for tourism boards, hospitality, and travel brands.",
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
          "name": "Design & Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design", "description": "Data-backed interface and experience design for travel and tourism websites." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Custom websites and digital products for tourism boards and travel brands." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Design", "description": "Visual identity and brand systems for destinations and travel companies." } }
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
     
     



     <section className="ds-section">
  <div className="ds-grid-bg" />

  {/* Top-left purple blob */}
  <div className="ds-blob-tl" />

  {/* Bottom-left decorative elements */}
  <div className="ds-bl-ring ds-bl-ring-1" />
  <div className="ds-bl-ring ds-bl-ring-2" />
  <div className="ds-bl-dot" />

  {/* Bottom-center striped circle */}
  <div className="ds-stripe-bc" />

  <div className="ds-inner">

    {/* ── LEFT: Text ── */}
    <div className="ds-text">
      <p className="ds-sub">GREAT DESIGN MEETS</p>
      <h1 className="ds-heading">
        <span>FLAWLES</span>
        <span>FUNCTION</span>
      </h1>
    </div>

    {/* ── RIGHT: Visual ── */}
    <div className="ds-visual">
      {/*
        ══════════════════════════════════════════
        SVG viewBox 750×750

        RING 1 (purple, large):  cx=460, cy=410, r=220, stroke=22
        RING 2 (blue, offset):   cx=500, cy=440, r=200, stroke=22

        MAIN IMAGE center = ring1 center = (460, 410)
          size 340px → left=460-170=290, top=410-170=240

        TOP-RIGHT image @ 325° on ring1 (r=220):
          cos(325°)=0.819, sin(325°)=-0.574
          cx=460+220×0.819=640, cy=410-220×0.574=284
          size 170px → left=640-85=555, top=284-85=199

        BOTTOM-RIGHT image @ 38° on ring2 (r=200, center 500,440):
          cos38°=0.788, sin38°=0.616
          cx=500+200×0.788=658, cy=440+200×0.616=563
          size 170px → left=658-85=573, top=563-85=478

        SVG rendered at width=700px, left=-20px
        Scale = 700/750 = 0.933
        SVG top = 50% - 350px

        Visual coords:
          Main:        left=-20+460×0.933-170 = -20+429-170 = 239,  top=calc(50%+(410-375)×0.933-170)=calc(50%-137px)
          Top-right:   left=-20+640×0.933-85  = -20+597-85  = 492,  top=calc(50%+(284-375)×0.933-85) =calc(50%-170px)
          Bottom-right:left=-20+658×0.933-85  = -20+614-85  = 509,  top=calc(50%+(563-375)×0.933-85) =calc(50%+91px)
        ══════════════════════════════════════════
      */}
      <svg
        className="ds-rings-svg"
        viewBox="0 0 750 750"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="460" cy="410" r="220" fill="none" stroke="#c42ef5" strokeWidth="22" />
        <circle cx="500" cy="440" r="200" fill="none" stroke="#3b5cff" strokeWidth="22" />
      </svg>

      {/* Main center image */}
      <div className="ds-img-main">
        <img src="/influencer_marketing/img/images/design1.jpg" alt="Design 1" />
      </div>

      {/* Top-right image */}
      <div className="ds-img-top">
        <img src="/influencer_marketing/img/images/design2.jpg" alt="Design 2" />
      </div>

      {/* Bottom-right image */}
      <div className="ds-img-bottom">
        <img src="/influencer_marketing/img/images/design3.jpg" alt="Design 3" />
      </div>
    </div>
  </div>

  <style>{`
    .ds-section {
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

    .ds-grid-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background-image:
        linear-gradient(to right, rgba(205,200,210,0.6) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(205,200,210,0.6) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* Top-left purple blob */
    .ds-blob-tl {
      position: absolute;
      top: -30px;
      left: 180px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, #d84ef0, #a020e0);
      z-index: 1;
    }

    /* Bottom-left rings */
    .ds-bl-ring {
      position: absolute;
      border-radius: 50%;
      background: transparent;
      z-index: 1;
    }
    .ds-bl-ring-1 {
      width: 280px;
      height: 280px;
      left: -80px;
      bottom: -80px;
      border: 22px solid #c030f5;
    }
    .ds-bl-ring-2 {
      width: 200px;
      height: 200px;
      left: -40px;
      bottom: -100px;
      border: 22px solid #3b5cff;
    }

    /* Bottom-left small filled dot */
    .ds-bl-dot {
      position: absolute;
      width: 60px;
      height: 60px;
      left: 120px;
      bottom: 60px;
      border-radius: 50%;
      background: #c030f5;
      z-index: 1;
    }

    /* Bottom-center striped circle */
    .ds-stripe-bc {
      position: absolute;
      bottom: 30px;
      left: 38%;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      z-index: 1;
      background: repeating-linear-gradient(
        135deg,
        #3d5cff 0px,
        #3d5cff 4px,
        transparent 4px,
        transparent 18px
      );
    }

    /* ── INNER LAYOUT ── */
    .ds-inner {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: clamp(32px, 5vw, 90px);
    }

    /* ── LEFT TEXT ── */
    .ds-text {
      flex: 0 0 44%;
      max-width: 620px;
    }

    .ds-sub {
      margin: 0 0 6px;
      padding: 0;
      color: #171717;
      font-weight: 900;
      font-size: clamp(1.4rem, 2vw, 2.8rem);
      line-height: 1.1;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }

    .ds-heading {
      margin: 0;
      font-weight: 900;
      font-size: clamp(3.5rem, 6.2vw, 7.5rem);
      line-height: 0.88;
      letter-spacing: -3px;
      text-transform: uppercase;
      background: linear-gradient(90deg, #cc2ef5 0%, #7040ff 50%, #2f63ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
    .ds-heading span { display: block; }

    /* ── RIGHT VISUAL ── */
    .ds-visual {
      flex: 1 1 0;
      position: relative;
      height: 100%;
    }

    .ds-rings-svg {
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      width: min(700px, 95%);
      height: auto;
      z-index: 2;
      overflow: visible;
    }

    .ds-img-main {
      position: absolute;
      left: 100px;
      top: calc(60% - 137px);
      width: 340px;
      height: 340px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 4;
    }

    .ds-img-top {
      position: absolute;
      left: 492px;
      top: calc(50% - 170px);
      width: 170px;
      height: 170px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 5;
    }

    .ds-img-bottom {
      position: absolute;
      left: 509px;
      top: calc(50% + 91px);
      width: 170px;
      height: 170px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 5;
    }

    .ds-img-main img,
    .ds-img-top img,
    .ds-img-bottom img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    /* ── Responsive 1300px ── */
    @media (max-width: 1300px) {
      .ds-rings-svg { width: min(620px, 92%); left: -10px; }
      .ds-img-main  { left: 191px; top: calc(50% - 125px); width: 310px; height: 310px; }
      .ds-img-top   { left: 439px; top: calc(50% - 155px); width: 155px; height: 155px; }
      .ds-img-bottom{ left: 454px; top: calc(50% + 75px);  width: 155px; height: 155px; }
    }

    /* ── Responsive 1024px ── */
    @media (max-width: 1024px) {
      .ds-section { height: auto; min-height: 100vh; max-height: none; }
      .ds-inner {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 100px 24px 60px;
        gap: 32px;
        height: auto;
      }
      .ds-text { flex: none; width: 100%; max-width: 100%; text-align: center; }
      .ds-visual { flex: none; width: 100%; height: 580px; }
      .ds-rings-svg { left: 50%; transform: translate(-52%, -50%); width: 560px; }
      .ds-img-main  { left: 50%; transform: translateX(-50%); }
      .ds-img-top   { left: auto; right: 4%; }
      .ds-img-bottom{ left: auto; right: 2%; }
    }

    /* ── Mobile ── */
    @media (max-width: 640px) {
      .ds-section { height: auto; }
      .ds-inner { padding: 80px 16px 48px; gap: 24px; }
      .ds-sub { font-size: clamp(1.1rem, 5vw, 1.8rem); }
      .ds-heading { font-size: clamp(2.8rem, 11vw, 4rem); letter-spacing: -1.5px; }
      .ds-visual {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .ds-rings-svg, .ds-stripe-bc { display: none; }
      .ds-img-main, .ds-img-top, .ds-img-bottom {
        position: relative;
        inset: auto; left: auto; top: auto;
        transform: none;
        width: 100%; height: auto;
        border-radius: 18px;
      }
      .ds-img-main { grid-column: 1/-1; aspect-ratio: 1.1/1; }
      .ds-img-top, .ds-img-bottom { aspect-ratio: 1/1; }
      .ds-blob-tl  { width: 90px; height: 90px; top: -20px; left: 80px; }
      .ds-bl-ring-1{ width: 160px; height: 160px; left: -80px; bottom: -80px; border-width: 14px; }
      .ds-bl-ring-2{ width: 120px; height: 120px; left: -40px; bottom: -60px; border-width: 14px; }
      .ds-bl-dot   { width: 40px; height: 40px; left: 70px; bottom: 40px; }
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
              The Complete Design & Development Toolkit
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
              Design That Goes Beyond Beautiful
            </h2>
          </div>
          <div id="features-grid">
            {[
              {
                gif: "/influencer_marketing/img/cashback.gif",
                title: "Data-Backed UX, Not Assumptions",
                text: "We don’t design based on aesthetics alone, we design based on performance. Every UI decision is tested, every UX flow is validated. The result is design that is both visually compelling and driven by real user behavior and conversion data.",
              },
              {
                gif: "/influencer_marketing/img/processing-speed.gif",
                title: "Fast, Functional & Future-Proof",
                text: "Beautiful design means nothing without performance. We build websites and applications optimized for speed, SEO, and scalability, ensuring your digital presence not only impresses today but continues to perform as your brand grows.",
              },
              {
                gif: "/influencer_marketing/img/quick-idea.gif",
                title: "Design That Scales Across Industries",
                text: "From global tourism platforms to high-converting D2C experiences, we bring cross-industry design expertise that adapts to your needs. Whether enterprise-grade or boutique, your digital presence is built to stand out.",
              },
              {
                gif: "/influencer_marketing/img/puzzle.gif",
                title: "Complete Design Ecosystem",
                text: "Beyond just a website, we deliver full design systems, visual identity, prototypes, user testing insights, and ongoing optimization strategies. Everything you need to maintain design excellence as your business evolves.",
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
          works={designDevelopmentServiceCaseStudy}
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

export default designDevelopmentService;