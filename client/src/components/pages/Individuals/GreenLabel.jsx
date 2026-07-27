import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Navbar,
  Footer,
  BreadCrumbs,
  WorkSummaryForServicesPage,
} from "../../layout";
import { designCaseStudy } from "../../../constants";

import greenLabelBanner from "../../../assets/images/greenLabel.png";
const bannerSrc = greenLabelBanner;

const rightImages = [
  { src: "/influencer_marketing/img/project/9.PNG", pos: "center 20%" },
  { src: "/influencer_marketing/img/project/8.PNG", pos: "center 20%" },
  { src: "/influencer_marketing/img/project/10.PNG", pos: "center 20%" },
];

const GreenLabel = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Work", url: "/work" },
    { displayName: "Green Label", url: "/work/green-label" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Helmet>
        <title>Green Label – #AsliRichAndSmooth | Melange Digital</title>
        <meta
          name="description"
          content="How we made Maharashtra fall in love with Green Label through #AsliRichAndSmooth — a compliant, creator-led influencer campaign celebrating everyday wins."
        />
        <meta
          property="og:title"
          content="Green Label – #AsliRichAndSmooth | Melange Digital"
        />
        <meta
          property="og:description"
          content="How we made Maharashtra fall in love with Green Label through #AsliRichAndSmooth"
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/work/green-label"
        />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        /* ── Banner ── */
        .gl-banner-wrapper {
          padding-top: 112px;
        }
        @media (max-width: 768px) {
          .gl-banner-wrapper { padding-top: 80px; }
        }

        .gl-banner {
          width: 100%;
          min-height: 520px;
          background-image: url(${bannerSrc});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .gl-banner { min-height: 320px; }
        }
        @media (max-width: 480px) {
          .gl-banner { min-height: 220px; }
        }

        /* ── Main content wrapper ── */
        .gl-page {
          font-family: 'Nunito', sans-serif;
          background: #fff;
          padding-bottom: 80px;
        }

        .gl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ── Breadcrumb ── */
        .gl-breadcrumb {
          padding: 32px 20px 0;
          max-width: 1200px;
          margin: 0 auto;
          font-size: 16px;
        }
        @media (min-width: 1024px) {
          .gl-breadcrumb { padding: 40px 80px 0; }
        }

        /* ── Hero title ── */
        .gl-hero-title {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 0;
        }
        @media (min-width: 1024px) {
          .gl-hero-title { padding: 40px 80px 0; }
        }
        .gl-hero-title h1 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.2;
          color: #000144;
          margin: 0;
        }

        /* ── Intro + Stats + Services row ── */
        .gl-intro-row {
          max-width: 1200px;
          margin: 48px auto 0;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .gl-intro-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0 80px;
            gap: 60px;
          }
        }

        .gl-intro-text {
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.95;
          color: #111;
          margin: 0;
        }
        .gl-intro-text + .gl-intro-text { margin-top: 18px; }

        /* ── Stat cards ── */
        .gl-stats {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .gl-stat-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          padding: 12px 16px;
          background: linear-gradient(to left, #bfdbfe, #e9d5ff, #f5d0fe);
        }
        @media (min-width: 1024px) {
          .gl-stat-card { width: 160px; height: 85px; }
        }
        @media (max-width: 1023px) {
          .gl-stat-card { flex: 1; padding: 10px 8px; }
        }
        .gl-stat-value {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800;
          color: #111;
          line-height: 1;
        }
        .gl-stat-label {
          font-size: clamp(10px, 1vw, 13px);
          color: #111;
          text-align: center;
          margin-top: 4px;
          line-height: 1.3;
        }

        /* Services list */
        .gl-services-label {
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          margin-bottom: 10px;
          margin-top: 0;
        }
        .gl-service-item {
          font-size: clamp(14px, 1.3vw, 17px);
          font-weight: 600;
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        /* ── Section wrapper ── */
        .gl-section {
          max-width: 1200px;
          margin: 64px auto 0;
          padding: 0 20px;
        }
        @media (min-width: 1024px) {
          .gl-section { margin-top: 80px; padding: 0 80px; }
        }

        /* ── Section heading ── */
        .gl-section-heading {
          font-weight: 900;
          font-size: clamp(28px, 3.5vw, 40px);
          color: #000144;
          margin: 0 0 24px;
          line-height: 1.1;
        }
        .gl-section-heading span {
          background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Numbered heading (01. 02. etc) ── */
        .gl-num-heading {
          font-weight: 900;
          font-size: clamp(22px, 2.5vw, 32px);
          color: #111;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        /* ── Body text ── */
        .gl-body {
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
          margin: 0;
        }

        /* ── List ── */
        .gl-list {
          margin: 14px 0 0;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
        }
        .gl-list li { margin-bottom: 6px; }

        /* ── Two column grid ── */
        .gl-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .gl-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        /* ── Right images stack ── */
        .gl-right-images {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        @media (max-width: 1100px) {
          .gl-right-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .gl-right-img-wrap { height: 200px !important; }
        }
        @media (max-width: 640px) {
          .gl-right-images { grid-template-columns: 1fr !important; }
          .gl-right-img-wrap { height: 220px !important; }
        }

        /* ── Step row (execution) ── */
        .gl-step-row {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 64px;
        }
        @media (min-width: 1024px) {
          .gl-step-row {
            flex-direction: row;
            gap: 48px;
            align-items: flex-start;
          }
        }
        .gl-step-img {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 18px 60px rgba(0,0,0,0.10);
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .gl-step-img { width: 420px; }
        }
        .gl-step-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          min-height: 280px;
        }

        /* ── Results bullets ── */
        .gl-results-list {
          margin: 0 0 32px;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
        }
        .gl-results-list li { margin-bottom: 10px; }

        /* ── Nav ── */
        .gl-nav {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        @media (min-width: 1024px) {
          .gl-nav { padding: 0 80px; }
        }
        .gl-nav a {
          font-weight: 800;
          text-decoration: none;
          color: #111;
          font-size: clamp(14px, 1.3vw, 16px);
          transition: opacity 0.2s;
        }
        .gl-nav a:hover { opacity: 0.6; }
      `}</style>

      <Navbar />

      {/* ── Banner: full-width image, sits below fixed navbar ── */}

      <div className="pt-28 md:pt-32 font-nunito pb-14 transition-scrolling max-container">
              {/* Breadcrumb */}
              <div className="font-nunito text-[16px] lg:text-[18px] lg:px-20 px-5 lg:mb-[40px] mb-6">
                <BreadCrumbs breadcrumbs={breadcrumbs} />
              </div>

        {/* ── Hero Title ── */}
        <div className="gl-hero-title">
          <h1>
            Making Maharashtra Fall in Love with Green Label Through Authentic
            Creator Storytelling
          </h1>
        </div>
        <img
          src={bannerSrc}
          alt="Zambia Tourism Campaign"
          className="w-[90%] mx-auto mt-10 mb-10 lg:rounded-[20px] rounded-[8px] object-cover"
        />
        {/* ── Intro + Stats + Services ── */}
        <div className="gl-intro-row">
          {/* Intro text */}
          <div style={{ flex: 1 }}>
            <p className="gl-intro-text">
              When your product can't speak for itself, your story has to do the
              heavy lifting. For Green Label, we had to create desire without
              ever showing indulgence and make Maharashtra fall in love with the
              feeling of smooth, not just the drink.
            </p>
            <p className="gl-intro-text" style={{ marginTop: 18 }}>
              #AsliRichAndSmooth became our way in. A campaign that celebrated
              everyday wins, local voices, and that effortless swagger you can't
              fake. And just like that, a compliance brief turned into a
              cultural moment worth toasting.
            </p>
          </div>

          {/* Stats + Services */}
          <div style={{ flexShrink: 0 }}>
            {/* Stat cards */}
            <div className="gl-stats" style={{ marginBottom: 32 }}>
              {[
                { value: "5.5L+", label: "Organic Views" },
                { value: "476K+", label: "Reach" },
                { value: "100%", label: "Compliance" },
              ].map(({ value, label }) => (
                <div key={label} className="gl-stat-card">
                  <div className="gl-stat-value">{value}</div>
                  <div className="gl-stat-label">{label}</div>
                </div>
              ))}
            </div>

            {/* Services */}
            <p className="gl-services-label">Services</p>
            {[
              "Influencer Marketing",
              "Content Strategy",
              "Compliance Consulting",
              "Creator Management",
            ].map((s) => (
              <p key={s} className="gl-service-item">
                {s}
              </p>
            ))}
          </div>
        </div>

        {/* ── Insight & Strategy ── */}
        <div className="gl-section">
          <p className="gl-section-heading">
            Insight & <span>Strategy</span>
          </p>
          <p className="gl-body">
            Our approach was built on a fundamental understanding of compliant
            alcohol marketing. Without the ability to show the product directly,
            the brand had to live inside the moments people already
            loved—everyday achievements, local pride, and the quiet confidence
            of success. We focused on:
          </p>
          <ul className="gl-list" style={{ marginTop: 20 }}>
            <li>
              <strong>Keeping the bottle in the background</strong> and letting
              authentic human moments do the talking—new jobs, new cars,
              promotions, milestones that real Maharashtra audiences recognized.
            </li>
            <li>
              <strong>Selecting creators with cultural roots</strong>, not just
              follower counts, ensuring the campaign felt local and genuine
              rather than paid and polished.
            </li>
            <li>
              <strong>Building platform-safe scripts</strong> for every creator
              that felt like natural storytelling, never forced advertising,
              keeping creativity intact while staying fully compliant.
            </li>
            <li>
              <strong>Targeting a precise demographic</strong>—male, 25–34,
              Maharashtra-based—with geo-targeted creator selections across
              Mumbai, Pune, Nagpur, and Nashik.
            </li>
          </ul>
        </div>

        {/* ── Execution ── */}
        <div className="gl-section">
          <p className="gl-section-heading">
            <span>Execution</span>
          </p>

          <div style={{ marginTop: 8 }}>
            {/* Step 1 */}
            <div className="gl-step-row">
              <div style={{ flex: 1 }}>
                <p className="gl-num-heading">01. The Challenge</p>
                <p className="gl-body">
                  Green Label wanted to build brand love in Maharashtra by
                  celebrating everyday wins without breaking strict platform
                  guidelines around alcohol marketing. We were tasked to make
                  this whiskey synonymous with life's smoothest moments while
                  staying fully compliant. Not easy—but we love a "Difficult Pro
                  Max" challenge.
                </p>
                <ul className="gl-list">
                  <li>
                    Platform restrictions meant the product itself couldn't be
                    the hero—requiring a story-first, product-second creative
                    approach.
                  </li>
                  <li>
                    The brand needed to build genuine affinity in a market
                    saturated with both local and international whiskey brands.
                  </li>
                  <li>
                    Any misstep on compliance would risk the entire campaign
                    being pulled, making every script and integration a
                    high-stakes creative decision.
                  </li>
                </ul>
              </div>
              <div className="gl-step-img" style={{ height: 320 }}>
                <img
                  src="/influencer_marketing/img/project/9.PNG"
                  alt="Green Label Challenge"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="gl-step-row">
              <div style={{ flex: 1 }}>
                <p className="gl-num-heading">
                  02. Creator Selection & Collaboration
                </p>
                <p className="gl-body">
                  Collaborated with{" "}
                  <strong>10 top Maharashtra-based creators</strong> (micro to
                  macro) who had a deep cultural connection with the target
                  audience:
                </p>
                <ul className="gl-list">
                  <li>
                    <strong>Micro to macro creator mix</strong> ensuring both
                    broad reach and deep community engagement across different
                    Maharashtra cities.
                  </li>
                  <li>
                    <strong>Local language storytelling</strong>—creators shared
                    authentic stories in Marathi and Hindi, making the brand
                    feel genuinely rooted in the culture.
                  </li>
                  <li>
                    <strong>Personalized scripts</strong> crafted for each
                    creator, ensuring content felt native to their voice and
                    audience rather than templated advertising.
                  </li>
                  <li>
                    <strong>Platform-safe integrations</strong> reviewed and
                    approved at every stage, maintaining 100% compliance without
                    losing creative impact.
                  </li>
                </ul>
              </div>
              <div className="gl-step-img" style={{ height: 320 }}>
                <img
                  src="/influencer_marketing/img/project/8.PNG"
                  alt="Creator Collaboration"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="gl-step-row">
              <div style={{ flex: 1 }}>
                <p className="gl-num-heading">
                  03. Content Strategy & Real-Time Storytelling
                </p>
                <p className="gl-body">
                  Every piece of content was engineered to feel organic while
                  delivering measurable brand recall:
                </p>
                <ul className="gl-list">
                  <li>
                    <strong>Celebration-first narratives</strong>—stories of
                    everyday wins (new job, new car, promotion) that naturally
                    wove the #AsliRichAndSmooth sentiment into real life
                    moments.
                  </li>
                  <li>
                    <strong>Short-form Reels and Stories</strong> optimized for
                    Instagram's algorithm, maximizing organic reach without paid
                    amplification.
                  </li>
                  <li>
                    <strong>Comment and DM engagement</strong> managed in
                    real-time, building community around the hashtag and turning
                    viewers into advocates.
                  </li>
                  <li>
                    <strong>Geo-targeted distribution</strong> ensuring content
                    surfaced prominently to Mumbai, Pune, Nagpur, and Nashik
                    audiences who were the core market.
                  </li>
                </ul>
              </div>
              <div className="gl-step-img" style={{ height: 320 }}>
                <img
                  src="/influencer_marketing/img/project/10.PNG"
                  alt="Content Strategy"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="gl-section">
          <p className="gl-section-heading">
            <span>Results</span>
          </p>

          <p className="gl-body" style={{ marginBottom: 16 }}>
            The results poured in smooth as the whiskey itself. The
            #AsliRichAndSmooth campaign transformed Green Label from a product
            bound by restrictions into a cultural badge of everyday achievement
            across Maharashtra:
          </p>

          <ul className="gl-results-list">
            <li>
              <strong>5.5L+ Organic Views</strong> — highest-performing campaign
              in the brand's Maharashtra influencer history.
            </li>
            <li>
              <strong>476K+ Reach</strong> across 10 creator profiles, entirely
              organic without paid media boosting.
            </li>
            <li>
              <strong>15K+ Likes</strong> and <strong>320+ Comments</strong>{" "}
              demonstrating active audience engagement, not passive viewing.
            </li>
            <li>
              <strong>100% Compliance</strong> — zero platform violations across
              all 10 creator integrations, setting a benchmark for alcohol
              marketing done right.
            </li>
          </ul>

          <p className="gl-body" style={{ fontWeight: 700, marginBottom: 12 }}>
            Audience & Demographics:
          </p>
          <ul className="gl-results-list">
            <li>
              <strong>73.7% Male audience</strong> with{" "}
              <strong>56.7% aged 25–34</strong>—precisely the target demographic
              reached.
            </li>
            <li>
              <strong>100% Maharashtra-based reach</strong>, with Mumbai, Pune,
              Nagpur, and Nashik leading engagement.
            </li>
            <li>
              Creators' audiences showed strong brand affinity signals—saves,
              shares, and repeat engagement—indicating genuine connection beyond
              surface metrics.
            </li>
          </ul>

          <p className="gl-body" style={{ marginTop: 16 }}>
            By keeping the product in the background and the people in the
            foreground, we didn't just run a compliant campaign—we created a
            cultural moment. #AsliRichAndSmooth became shorthand for the feeling
            Green Label wanted to own: smooth confidence, local pride, and the
            quiet satisfaction of a life well lived. Maharashtra noticed, and
            the numbers proved it.
          </p>
        </div>

        {/* ── Prev / Next ── */}
        <div className="gl-nav">
          <a href="/siam-malls">‹ Previous post</a>
          <a href="/ganga-fashion">Next post ›</a>
        </div>
      </div>

      <WorkSummaryForServicesPage works={designCaseStudy} />
      <Footer />
    </div>
  );
};

export default GreenLabel;
