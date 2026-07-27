import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer } from "../../layout";

const SiamMalls = () => {
  const bannerSrc = "/influencer_marketing/img/project/SiamBanner.png";

  const rightImages = [
    { src: "/influencer_marketing/img/project/5.PNG", pos: "center 20%" },
    { src: "/influencer_marketing/img/project/6.PNG", pos: "center 20%" },
    { src: "/influencer_marketing/img/project/7.jpg", pos: "center 20%" },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Helmet>
        <title>Siam Malls – #ShopBangkokWithSiamMalls | Melange Digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        .sm-banner {
          width: 100%;
          min-height: 420px;
          background-image: url(${bannerSrc});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 70px 0 55px;
          margin-top: 10%;
        }

        @media (max-width: 768px) {
          .sm-banner { min-height: 280px; margin-top: 70px; padding: 40px 0 36px; }
        }
        @media (max-width: 480px) {
          .sm-banner { min-height: 200px; padding: 28px 0 24px; }
        }

        .sm-banner h1 {
          margin: 0;
          font-size: clamp(22px, 4vw, 44px);
          font-weight: 900;
          color: #fff;
          text-shadow: 0 10px 30px rgba(0,0,0,0.45);
          line-height: 1.15;
        }

        .sm-section {
          padding: 80px 0 90px;
          background: #fff;
        }
        @media (max-width: 768px) { .sm-section { padding: 50px 0 60px; } }
        @media (max-width: 480px) { .sm-section { padding: 36px 0 48px; } }

        .sm-intro {
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.95;
          color: #111;
        }

        .sm-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 1100px) {
          .sm-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }

        .sm-heading {
          font-weight: 900;
          font-size: clamp(24px, 3vw, 44px);
          color: #111;
          margin: 0 0 14px;
        }

        .sm-heading-spaced { margin-top: 60px; }
        @media (max-width: 768px) { .sm-heading-spaced { margin-top: 40px; } }

        .sm-body {
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
          margin: 0;
        }

        .sm-list {
          margin: 18px 0 0;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
        }
        @media (max-width: 480px) { .sm-list { padding-left: 16px; } }

        .sm-right-images {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        @media (max-width: 1100px) {
          .sm-right-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .sm-right-img-wrap { height: 200px !important; }
        }

        @media (max-width: 640px) {
          .sm-right-images { grid-template-columns: 1fr !important; }
          .sm-right-img-wrap { height: 220px !important; }
        }

        .sm-nav {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .sm-nav a {
          font-weight: 800;
          text-decoration: none;
          color: #111;
          font-size: clamp(14px, 1.3vw, 16px);
        }
      `}</style>

      <Navbar />

      {/* Banner */}
      <section className="sm-banner">
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
       
        </div>
      </section>

      {/* Content */}
      <section className="sm-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

          {/* Intro */}
          <div style={{ maxWidth: 980, margin: "0 auto 40px" }}>
            <p className="sm-intro" style={{ margin: 0 }}>
              Bangkok's streets have stories, but its malls deserve a spotlight.
              Siam Malls had everything from luxury, fashion, and experience, yet
              somehow stayed off the radar for Indian travelers. We saw the gap,
              and more importantly, the opportunity to turn a shopping
              destination into a cultural flex.
            </p>
            <p className="sm-intro" style={{ margin: "18px 0 0" }}>
              #ShopBangkokWithSiamMalls became our runway. A campaign that blurred
              lines between travel and style, creators and consumers, aspiration
              and access. And once the cameras started rolling, the results are
              seen below.
            </p>
          </div>

          {/* Grid */}
          <div className="sm-grid">

            {/* LEFT */}
            <div>
              <h2 className="sm-heading">01. The Challenge</h2>
              <p className="sm-body">
                In 2024, over 2.2 million Indian tourists visited Thailand. But
                while Bangkok's nightlife and street markets topped itineraries,
                the city's premium malls like Siam Malls were often overlooked.
                The challenge was clear: make Siam Malls a must-stop destination
                for style-conscious Indian travellers.
              </p>

              <h2 className="sm-heading sm-heading-spaced">02. Our Approach</h2>
              <p className="sm-body">We didn't just market a mall, we built a cultural moment.</p>
              <ul className="sm-list">
                <li>Partnered with 20 of India's top fashion &amp; lifestyle creators, including 10 mega and macro influencers with premium audiences.</li>
                <li>Crafted the campaign #ShopBangkokWithSiamMalls, showcasing the mall's premium shopping experience through influencer Reels, Stories, and Carousels.</li>
                <li>Focused on Indian women aged 25–34 from metro cities with direct Bangkok flights (Mumbai, Delhi, Ahmedabad, Guwahati, Bengaluru) — an audience already primed to shop on vacation.</li>
                <li>Delivered content that felt aspirational yet relatable, turning Siam Malls into an experience, not just a retail stop.</li>
              </ul>

              <h2 className="sm-heading sm-heading-spaced">03. The Impact</h2>
              <p className="sm-body">
                The campaign exceeded industry benchmarks and proved the power of the right creators telling the right story:
              </p>
              <ul className="sm-list">
                <li><span style={{ fontWeight: 900 }}>7.7M+ Views</span></li>
                <li><span style={{ fontWeight: 900 }}>6.9M+ Reach</span></li>
                <li><span style={{ fontWeight: 900 }}>101K+ Likes</span></li>
                <li><span style={{ fontWeight: 900 }}>1.7K+ Comments</span></li>
                <li><span style={{ fontWeight: 900 }}>Engagement Rate: 1.6%</span> (above industry average)</li>
              </ul>

              <p className="sm-body" style={{ marginTop: 18 }}>Beyond numbers, the campaign shifted perception:</p>
              <ul className="sm-list">
                <li><span style={{ fontWeight: 900 }}>54% of audiences felt excited</span> about Siam Malls.</li>
                <li><span style={{ fontWeight: 900 }}>46% felt curious</span> to explore it themselves.</li>
              </ul>

              <p className="sm-body" style={{ marginTop: 18 }}>
                Today, Siam Malls is no longer just a shopping center in Bangkok, it's a must-visit destination for thousands of Indian travellers.
              </p>

            </div>

            {/* RIGHT IMAGES */}
            <div className="sm-right-images">
              {rightImages.map((img, idx) => (
                <div
                  key={img.src}
                  className="sm-right-img-wrap"
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
                    background: "#f2f2f2",
                    height: idx === 0 ? 260 : 220,
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Siam project ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.pos, display: "block" }}
                  />
                </div>
              ))}
            </div>

          </div>

          {/* NAV — full width, truly centered */}
          <div className="sm-nav">
            <a href="/singapore-tourism"><span style={{ marginRight: 6 }}>‹</span> Previous post</a>
            <a href="/green-label">Next post <span style={{ marginLeft: 6 }}>›</span></a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiamMalls;
