import React, { useState, useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { useBtnAnim } from "../../layout/MelangeCta";
import { SERVICES_DATA, SERVICE_COLLAGE_TILES } from "../../../constants/servicesData";
import { resolveServiceSlots } from "../../../constants/serviceCards";
import "./serviceDetail.css";

const CTA_ARROW = "/destination-marketing-agency/images/services/cta-arrow.svg";
const CTA_ARROW_GHOST = "/destination-marketing-agency/images/services/cta-arrow-ghost.svg";
/* The frame specifies a single WHERE IT WORKS backdrop for every service page.
   servicesData pointed three of them at case-study banners, whose baked-in
   campaign lettering fights the overlay and the card labels. */
const BAND_BG = "/destination-marketing-agency/images/services/where-it-works-bg.png";

/* Likewise the closing band: only the influencer entry carried a bgImage, so
   the other three rendered as a blank white strip. */
const CTA_BG = "/destination-marketing-agency/images/services/arrivals-banner-bg.png";

/* Hero collage: 8 Figma slots plus two hand-tuned maps. Photos stay on
   their tile; every 5s they slide into a different slot. */
const COLLAGE_BASE = "/destination-marketing-agency/images/services/collage";
const HERO_TILES = [1, 2, 3, 4, 5, 6, 7, 8];
const COLLAGE_IDENTITY = [0, 1, 2, 3, 4, 5, 6, 7];

const COLLAGE_LAYOUTS = [
  [
    { left: 1.75, top: 8.79, width: 28.59, height: 31.01, rotate: 0.1 },
    { left: 37.46, top: 0, width: 29.2, height: 31.19, rotate: 0.34 },
    { left: 21.26, top: 26.64, width: 26.7, height: 27.58, rotate: 0.43 },
    { left: 72.43, top: 28.57, width: 27.63, height: 30.38, rotate: -0.36 },
    { left: 40.94, top: 36.99, width: 34.43, height: 30.19, rotate: 0.12 },
    { left: 0, top: 48.53, width: 27.25, height: 32.95, rotate: 0 },
    { left: 23.73, top: 67.22, width: 27.75, height: 32.78, rotate: 0 },
    { left: 61.73, top: 65.02, width: 28.27, height: 30.29, rotate: 0.36 },
  ],
  [
    { left: 69.66, top: 8.79, width: 28.59, height: 31.01, rotate: -0.1 },
    { left: 33.34, top: 0, width: 29.2, height: 31.19, rotate: -0.34 },
    { left: 52.04, top: 26.64, width: 26.7, height: 27.58, rotate: -0.43 },
    { left: 0, top: 28.57, width: 27.63, height: 30.38, rotate: 0.36 },
    { left: 24.63, top: 36.99, width: 34.43, height: 30.19, rotate: -0.12 },
    { left: 72.75, top: 48.53, width: 27.25, height: 32.95, rotate: 0 },
    { left: 48.52, top: 67.22, width: 27.75, height: 32.78, rotate: 0 },
    { left: 10, top: 65.02, width: 28.27, height: 30.29, rotate: -0.36 },
  ],
  [
    { left: 1.75, top: 60.2, width: 28.59, height: 31.01, rotate: 0.1 },
    { left: 37.46, top: 68.81, width: 29.2, height: 31.19, rotate: 0.34 },
    { left: 21.26, top: 45.78, width: 26.7, height: 27.58, rotate: 0.43 },
    { left: 72.43, top: 41.05, width: 27.63, height: 30.38, rotate: -0.36 },
    { left: 40.94, top: 32.82, width: 34.43, height: 30.19, rotate: 0.12 },
    { left: 0, top: 18.52, width: 27.25, height: 32.95, rotate: 0 },
    { left: 23.73, top: 0, width: 27.75, height: 32.78, rotate: 0 },
    { left: 61.73, top: 4.69, width: 28.27, height: 30.29, rotate: 0.36 },
  ],
];

const shuffle = (arr) => {
  const next = arr.slice();
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};

const slotStyle = (slot) => ({
  left: `${slot.left}%`,
  top: `${slot.top}%`,
  width: `${slot.width}%`,
  height: `${slot.height}%`,
  transform: `rotate(${slot.rotate}deg) scale(0.9)`,
});

function PillarIcon({ src }) {
  if (!src) return null;
  return <img className="svc-pillar-icon" src={src} alt="" />;
}

function AnimCta({ to, className, arrowSrc, children }) {
  const ref = useRef(null);
  useBtnAnim(ref);
  return (
    <Link ref={ref} to={to} className={`${className} btn-anim`}>
      <span className="btn-anim__label">{children}</span>
      <span className="svc-pill-btn__arrow btn-anim__icon" aria-hidden="true">
        <img src={arrowSrc} alt="" width="36" height="34" />
      </span>
    </Link>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES_DATA[slug];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqCollapsed, setFaqCollapsed] = useState(true);

  const [activeApproachIndex, setActiveApproachIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [collage, setCollage] = useState({ layout: 0, order: COLLAGE_IDENTITY });
  const collagePaused = useRef(false);

  const serviceKey =
    slug === "influencer-marketing"
      ? "influencer"
      : slug === "branded-content-ips" || slug === "branded-content-ip"
      ? "branded"
      : slug === "experiential-marketing"
      ? "experiential"
      : slug === "fam-trips-pr"
      ? "fam"
      : null;

  const serviceFolder =
    slug === "branded-content-ip" ? "branded-content-ips" : slug;

  const collageTiles =
    SERVICE_COLLAGE_TILES[serviceFolder] ||
    HERO_TILES.map((n) => ({
      src: `/assets/services/${serviceFolder}/tile-${n}.jpg`,
      position: "center 25%",
    }));

  const [cards, setCards] = useState(() => resolveServiceSlots(serviceKey));

  useEffect(() => {
    setActiveApproachIndex(0);
    setActiveStep(0);
    setOpenFaqIndex(0);
    setFaqCollapsed(true);
  }, [serviceKey]);

  useEffect(() => {
    if (!serviceKey) {
      setCards([]);
      return;
    }
    setCards(resolveServiceSlots(serviceKey));
    let active = true;
    getDoc(doc(db, "settings", "service_cards"))
      .then((snap) => {
        if (snap.exists() && active) {
          setCards(resolveServiceSlots(serviceKey, snap.data()));
        }
      })
      .catch((err) => {
        console.warn("Could not load dynamic service cards for detail:", err);
      });
    return () => {
      active = false;
    };
  }, [serviceKey]);

  useEffect(() => {
    if (!service?.process?.steps?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const n = service.process.steps.length;
    let wrapTimer;
    const id = setInterval(() => {
      setActiveStep((i) => {
        if (i === n - 1) {
          wrapTimer = setTimeout(() => setActiveStep(0), 320);
          return -1;
        }
        return i + 1;
      });
    }, 3000);
    return () => {
      clearInterval(id);
      clearTimeout(wrapTimer);
    };
  }, [service]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (document.hidden || collagePaused.current) return;
      setCollage((prev) => ({
        layout: (prev.layout + 1) % COLLAGE_LAYOUTS.length,
        order: shuffle(prev.order),
      }));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // If slug doesn't match any known service, fallback to services index
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const approachCards = service.approach?.cards || [];
  const activeApproach = approachCards[activeApproachIndex];
  const handleNextApproach = () => {
    if (approachCards.length > 0) {
      setActiveApproachIndex((prev) => (prev + 1) % approachCards.length);
    }
  };
  const handlePrevApproach = () => {
    if (approachCards.length > 0) {
      setActiveApproachIndex(
        (prev) => (prev - 1 + approachCards.length) % approachCards.length
      );
    }
  };

  const manifesto = service.manifesto || {};
  const heroLines = service.hero.subtitleLines || service.hero.descriptionLines || null;

  // Schema.org structured data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seo.description,
    provider: {
      "@type": "Organization",
      name: "Mélange Digital",
      url: "https://melangedigital.co",
    },
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: approachCards.map((card) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: card.title,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="svc-detail-page">
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <link rel="canonical" href={`https://melangedigital.co/services/${(service.slug || "").replace(/\/+$/, "")}`} data-rh="true" />
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <meta property="og:url" content={`https://melangedigital.co/services/${(service.slug || "").replace(/\/+$/, "")}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hidden coded H1 for strict SEO compliance as requested in spec */}
        {service.seo.h1 && <h1 className="svc-seo-h1 visually-hidden">{service.seo.h1}</h1>}

        {/* 1. HERO */}
        <section className="svc-hero-section svc-container" aria-label="Service Hero">
          <div className="svc-hero-grid">
            <div className="svc-hero-left">
              <span className="svc-eyebrow">{service.hero.badge}</span>
              <h2 className="svc-hero-title">
                {service.hero.titlePart1}{" "}
                <span className="svc-accent">{service.hero.titleAccent}</span>
              </h2>

              {heroLines && (
                <div className="svc-hero-desc-stack">
                  {heroLines.map((line, idx) => (
                    <p key={idx} className="svc-hero-desc-line">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              <div className="svc-hero-cta-wrap">
                <AnimCta to={service.hero.ctaLink || "/contact"} className="svc-pill-btn" arrowSrc={CTA_ARROW}>
                  {service.hero.ctaText || "Get in Touch"}
                </AnimCta>
              </div>
            </div>

            {/* Scattered creator collage */}
            <div className="svc-hero-right" aria-hidden="true">
              <div
                className={`svc-collage svc-collage--${serviceFolder}`}
                onMouseEnter={() => {
                  collagePaused.current = true;
                }}
                onMouseLeave={() => {
                  collagePaused.current = false;
                }}
              >
                {collageTiles.map((tile, i) => (
                    <div
                      key={`${serviceFolder}-${i}`}
                      className={`svc-collage__tile svc-collage__tile--${i + 1}`}
                      style={slotStyle(COLLAGE_LAYOUTS[collage.layout][collage.order[i]])}
                    >
                      <img
                        src={tile.src}
                        alt=""
                        loading={i < 4 ? "eager" : "lazy"}
                        decoding="async"
                        style={{
                          objectPosition: tile.position || "center 25%",
                        }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `${COLLAGE_BASE}/tile-${(i % 8) + 1}.jpg`;
                        }}
                      />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="svc-rule" />

        {/* 2. MANIFESTO + WHERE IT WORKS */}
        <section id="philosophy" className="svc-philosophy-section" aria-label="Philosophy and Where It Works">
          <div className="svc-philosophy-top svc-container">
            <div className="svc-philosophy-top-left">
              <span className="svc-eyebrow">{manifesto.eyebrow}</span>
              <h2 className="svc-philosophy-title">
                <span className="svc-philosophy-title-line">{manifesto.titlePart1}</span>
                <span className="svc-accent">{manifesto.titleAccent}</span>
              </h2>
            </div>

            <div className="svc-philosophy-top-right">
              {/* Copy is authored in servicesData and may carry a
                  <span class="svc-highlight"> to tint a phrase. */}
              {manifesto.paragraph ? (
                <p
                  className="svc-philosophy-lead"
                  dangerouslySetInnerHTML={{ __html: manifesto.paragraph }}
                />
              ) : (
                manifesto.lines?.map((line, idx) => (
                  <p
                    key={idx}
                    className="svc-philosophy-lead"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))
              )}
            </div>
          </div>

          {/* WHERE IT WORKS band */}
          <div
            className="svc-philosophy-banner"
            style={{ backgroundImage: `url(${BAND_BG})` }}
          >
            <div className="svc-philosophy-overlay" aria-hidden="true" />
            <div className="svc-philosophy-banner-inner">
              <h3 className="svc-pillars-label">{service.philosophy.eyebrow}</h3>
              <div className="svc-pillars-grid">
                {service.philosophy.pillars.map((pillar, idx) => (
                  <div key={idx} className="svc-pillar-card">
                    <PillarIcon src={pillar.icon} />
                    <h4 className="svc-pillar-title">{pillar.title}</h4>
                    <p className="svc-pillar-desc">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR APPROACH — stacked card deck */}
        <section className="svc-approach-section svc-container" aria-label="Our Approach">
          <div className="svc-approach-header">
            {service.approach.eyebrow && (
              <span className="svc-eyebrow">{service.approach.eyebrow}</span>
            )}
            <h2 className="svc-approach-title">
              {service.approach.titlePart1}{" "}
              <span className="svc-accent">{service.approach.titleAccent}</span>
            </h2>
            {service.approach.heading && (
              <p className="svc-approach-heading">{service.approach.heading}</p>
            )}
          </div>

          <div className="svc-approach-deck-container">
            {/* Dark card offset behind the active one */}
            <div className="svc-approach-card-shadow" aria-hidden="true" />

            {activeApproach && (
              <div className="svc-approach-card-active">
                <div className="svc-approach-media">
                  <img src={activeApproach.image} alt="" loading="lazy" />
                </div>
                <div className="svc-approach-text-col">
                  <h3 className="svc-approach-card-title">{activeApproach.title}</h3>
                  <p className="svc-approach-card-desc">{activeApproach.description}</p>
                  <div className="svc-approach-arrows">
                    <button
                      type="button"
                      className="svc-approach-arrow-btn svc-approach-arrow-btn--prev"
                      onClick={handlePrevApproach}
                      aria-label={`Show the previous approach point (${
                        activeApproachIndex + 1
                      } of ${approachCards.length})`}
                    >
                      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                        <path d="M15.5 5.5L9 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="svc-approach-arrow-btn svc-approach-arrow-btn--next"
                      onClick={handleNextApproach}
                      aria-label={`Show the next approach point (${
                        activeApproachIndex + 1
                      } of ${approachCards.length})`}
                    >
                      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                        <path d="M8.5 5.5L15 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <hr className="svc-rule" />

        {/* 4. PROCESS STEPPER */}
        <section className="svc-process-section svc-container" aria-label="Process Workflow">
          <div className="svc-process-header">
            <div>
              <h2 className="svc-process-title">
                {service.process.titlePart1}{" "}
                <span className="svc-accent">{service.process.titleAccent}</span>
              </h2>
            </div>
            <p className="svc-process-desc">{service.process.description}</p>
          </div>

          <div
            className="svc-stepper-container"
            style={{ "--svc-steps": service.process.steps.length }}
          >
            <div className="svc-stepper-line" aria-hidden="true" />
            {service.process.steps.map((step, idx) => (
              <div key={idx} className={`svc-step-node${idx === activeStep ? " is-active" : ""}`}>
                <div className="svc-step-badge">{step.number}</div>
                <div className="svc-step-content">
                  <h3 className="svc-step-title">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="svc-rule" />

        {/* 5. WORK THAT MOVED / CASE STUDIES */}
        <section className="svc-work-section svc-container" aria-label="Featured Work">
          <h2 className="svc-work-title">
            {service.caseStudies.titlePart1}{" "}
            <span className="svc-accent">{service.caseStudies.titleAccent}</span>
          </h2>

          <div className="svc-projects">
            {cards.map((cs) => {
              const rawHref = cs.slug || "";
              const href = rawHref.startsWith("/") ? rawHref : `/work/${rawHref}`;

              return (
                <Link key={cs.id || cs.slug} to={href} className="svc-project">
                  <div className="svc-project__media">
                    <img
                      alt={cs.title}
                      src={cs.bannerImage}
                      width="1060"
                      height="530"
                      loading="lazy"
                    />
                  </div>
                  <div className="svc-project__bar">
                    <h3 className="svc-project__title">{cs.title}</h3>
                    <p className="svc-project__caption">{cs.caption}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="svc-work-more-cta">
            <AnimCta to="/work" className="svc-ghost-btn" arrowSrc={CTA_ARROW_GHOST}>
              View all Projects
            </AnimCta>
          </div>
        </section>

        <hr className="svc-rule" />

        {/* Same section-8 accordion as Home / Services index */}
        <section className="section-8 svc-container" id="faq" aria-label="Frequently Asked Questions">
          <h2 className="heading-20 svc-faq-title">FAQs</h2>

          <div
            className="faq-list"
            data-faq-collapsed={faqCollapsed && service.faqs.items.length > 3 ? "true" : "false"}
          >
            {service.faqs.items.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`accordian-item${isOpen ? " is-open" : ""}${idx >= 3 ? " faq-item--extra" : ""}`}
                >
                  <button
                    type="button"
                    className="accordion-toggle"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-block-30">{item.question}</h3>
                    <span className="accordian-icon w-icon-dropdown-toggle" aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="dropdown-list">
                      <div className="text-block-34">{item.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
            {service.faqs.items.length > 3 && (
              <button
                type="button"
                className="faq-more-btn"
                aria-expanded={!faqCollapsed}
                onClick={() => setFaqCollapsed((v) => !v)}
              >
                <span className="faq-more-btn__label">
                  {faqCollapsed ? "Show all questions" : "Show fewer questions"}
                </span>
                <span className="faq-more-btn__icon" aria-hidden="true" />
              </button>
            )}
          </div>
        </section>

        {/* 7. BOTTOM CTA BAND */}
        <section className="svc-bottom-cta-section" aria-label="Call to Action">
          <div
            className="svc-bottom-cta-bg"
            style={{ backgroundImage: `url(${service.bottomCta.bgImage || CTA_BG})` }}
            aria-hidden="true"
          />
          <div className="svc-bottom-cta-inner">
            <h2 className="svc-bottom-cta-title">
              {service.bottomCta.titlePart1}
              {service.bottomCta.titlePart2 ? ` ${service.bottomCta.titlePart2}` : ""}{" "}
              <span className="svc-accent">{service.bottomCta.titleAccent}</span>
            </h2>
            <div className="svc-bottom-cta-btn-wrap">
              <AnimCta to={service.bottomCta.buttonLink || "/contact"} className="svc-pill-btn" arrowSrc={CTA_ARROW}>
                {service.bottomCta.buttonText || "Get in Touch"}
              </AnimCta>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
