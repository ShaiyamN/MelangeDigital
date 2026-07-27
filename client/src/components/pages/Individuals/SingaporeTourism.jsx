import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer } from "../../layout";

const SingaporeTourism = () => {
  const bannerImg = "/influencer_marketing/img/project/SingaporeBanner.png";

  const rightImages = [
    { src: "/influencer_marketing/img/project/1.jpg", pos: "50% 50%" },
    { src: "/influencer_marketing/img/project/2.jpg", pos: "50% 0%" },
    { src: "/influencer_marketing/img/project/4.jpg", pos: "50% 40%" },
  ];

  return (
    <div style={{ overflowX: "hidden", background: "#fff" }}>
      <Helmet>
        <title>Singapore Tourism Board – "Is This Even Singapore"</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        .sg-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          margin-top: 10%;
        }

        @media (max-width: 768px) {
          .sg-banner-img { margin-top: 70px; }
        }

        .sg-section {
          padding: 70px 0 90px;
          background: #fff;
        }

        @media (max-width: 768px) { .sg-section { padding: 50px 0 60px; } }
        @media (max-width: 480px) { .sg-section { padding: 36px 0 48px; } }

        .sg-intro {
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.9;
          color: #111;
        }

        .sg-grid {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 60px;
          align-items: start;
          margin-top: 50px;
        }

        @media (max-width: 1100px) {
          .sg-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .sg-heading {
          margin: 0 0 14px;
          font-weight: 900;
          font-size: clamp(24px, 2.6vw, 44px);
          letter-spacing: -0.5px;
          color: #111;
        }

        .sg-heading-spaced { margin-top: 48px; }
        @media (max-width: 768px) { .sg-heading-spaced { margin-top: 36px; } }

        .sg-body {
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
          margin: 0;
        }

        .sg-list {
          margin: 0 0 38px;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 2.0;
          color: #111;
        }

        @media (max-width: 480px) { .sg-list { padding-left: 16px; } }

        .sg-right-images {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        @media (max-width: 1100px) {
          .sg-right-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .sg-right-img-wrap {
            height: 200px !important;
          }
        }

        @media (max-width: 640px) {
          .sg-right-images { grid-template-columns: 1fr !important; }
          .sg-right-img-wrap { height: 220px !important; }
        }
      `}</style>

      <Navbar />

      {/* HERO BANNER */}
      <section style={{ width: "100%", position: "relative", background: "#fff" }}>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={bannerImg}
            alt="Singapore Tourism Board banner"
            className="sg-banner-img"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="sg-section">
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 22px" }}>

          {/* Intro */}
          <div style={{ maxWidth: 980 }}>
            <p className="sg-intro" style={{ margin: "0 0 18px" }}>
              Singapore was tired of being everyone's postcard. Glossy skylines,
              fancy malls, predictable itineraries, it was time to break the
              loop. The Singapore Tourism Board aimed to reframe how young
              Indians perceived the country: not just as a stopover, but as a
              vibe. Something you'd live, not just visit.
            </p>
            <p className="sg-intro" style={{ margin: 0 }}>
              So we did what every play-it-safe campaign wouldn't — handed over
              the mic. "Is This Even Singapore?" became a cultural experiment
              powered by creators, chaos, and curiosity. What followed
              completely flipped the script on tourism storytelling.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="sg-grid">

            {/* LEFT */}
            <div>
              <h2 className="sg-heading">01. The Challenge</h2>
              <p className="sg-body" style={{ marginBottom: 38 }}>
                The Singapore Tourism Board wanted to reimagine how young
                Indians see Singapore. The task was to break past the clichés of
                "luxury shopping and city skylines" and instead unlock a fresh,
                youth-led narrative. The challenge? To make Singapore culturally
                relevant, exciting, and relatable to Gen Z and millennials in India.
              </p>

              <h2 className="sg-heading sg-heading-spaced">02. Our Approach</h2>
              <p className="sg-body" style={{ marginBottom: 16 }}>
                We flipped the traditional playbook. Instead of telling India
                about Singapore, we let India show Singapore through its own lens.
              </p>
              <ul className="sg-list">
                <li style={{ marginBottom: 12 }}>Launched a nationwide creator contest "Is This Even Singapore" inviting Indian creators to co-author Singapore's story.</li>
                <li style={{ marginBottom: 12 }}>Blended short-form, high-engagement content (Reels, Stories) with longer storytelling formats (Carousels, YouTube vlogs).</li>
                <li style={{ marginBottom: 12 }}>Activated a diverse influencer mix: emerging creators for authenticity, and mega Indian celebrities with 1–4M+ followers for scale and credibility.</li>
                <li style={{ marginBottom: 12 }}>Designed the contest page with an integrated form link on Instagram, making participation seamless and buzz-worthy.</li>
              </ul>

              <h2 className="sg-heading sg-heading-spaced">03. The Impact</h2>
              <p className="sg-body" style={{ marginBottom: 12 }}>
                The campaign shattered expectations within just 60 days:
              </p>
              <ul className="sg-list" style={{ marginBottom: 18 }}>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>100M+ Views</span> (vs. projected 50–55M)</li>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>80M+ Reach</span> (vs. projected 35–40M)</li>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>2.33M+ Likes</span></li>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>13.1K+ Comments</span></li>
              </ul>
              <p className="sg-body">
                Not only did the campaign exceed every KPI, it created a
                cultural moment. By letting young Indians tell the story,
                Singapore became more than a destination; it became a shared
                experience, resonating deeply with a whole new generation.
              </p>

            </div>

            {/* RIGHT IMAGES */}
            <div className="sg-right-images">
              {rightImages.map((img, idx) => (
                <div
                  key={img.src}
                  className="sg-right-img-wrap"
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
                    background: "#f2f2f2",
                    height: idx === 0 ? 320 : 220,
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Singapore project ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.pos, display: "block" }}
                  />
                </div>
              ))}
            </div>

          </div>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
            <a href="/siam-malls" style={{ color: "#111", fontWeight: 800, textDecoration: "none", fontSize: "clamp(14px,1.3vw,16px)" }}>
              Next post <span style={{ marginLeft: 6 }}>›</span>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SingaporeTourism;
