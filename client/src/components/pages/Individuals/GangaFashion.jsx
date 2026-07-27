// GangaFashion.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar, Footer } from "../../layout";

const GangaFashion = () => {
  const bannerImg = "/influencer_marketing/img/project/GangaBanner.png";

  const rightImages = [
    { src: "/influencer_marketing/img/project/11.PNG", fit: "contain", pos: "50% 50%", bg: "#ffffff" },
    { src: "/influencer_marketing/img/project/12.PNG", fit: "contain", pos: "50% 50%", bg: "#ffffff" },
    { src: "/influencer_marketing/img/project/13.PNG", fit: "contain", pos: "50% 50%", bg: "#ffffff" },
  ];

  return (
    <div style={{ overflowX: "hidden", background: "#fff" }}>
      <Helmet>
        <title>Ganga Fashion – We Put the 'Soul' in Ganga Fashions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        .ganga-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          margin-top: 10%;
        }

        @media (max-width: 768px) {
          .ganga-banner-img {
            margin-top: 70px;
          }
        }

        .ganga-project-grid {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 60px;
          align-items: start;
          margin-top: 50px;
        }

        @media (max-width: 1100px) {
          .ganga-project-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .ganga-right-images {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        @media (max-width: 1100px) {
          .ganga-right-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .ganga-right-img-wrap {
            height: 200px !important;
            margin-bottom: 0 !important;
          }
        }

        @media (max-width: 640px) {
          .ganga-right-images {
            grid-template-columns: 1fr !important;
          }
          .ganga-right-img-wrap {
            height: 220px !important;
          }
        }

        .ganga-section-padding {
          padding: 70px 0 90px;
        }

        @media (max-width: 768px) {
          .ganga-section-padding {
            padding: 44px 0 60px;
          }
        }

        @media (max-width: 480px) {
          .ganga-section-padding {
            padding: 32px 0 48px;
          }
        }

        .ganga-intro-text {
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.9;
          color: #111;
        }

        .ganga-heading {
          margin: 0 0 14px 0;
          font-weight: 900;
          font-size: clamp(24px, 2.6vw, 44px);
          letter-spacing: -0.5px;
          color: #111;
        }

        .ganga-body-text {
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.95;
          color: #111;
        }

        .ganga-list {
          margin: 0 0 38px 0;
          padding-left: 22px;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 2.0;
          color: #111;
        }

        @media (max-width: 480px) {
          .ganga-list {
            padding-left: 16px;
          }
        }
      `}</style>

      <Navbar />

      {/* HERO BANNER */}
      <section style={{ width: "100%", position: "relative", background: "#fff" }}>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={bannerImg}
            alt="Ganga Fashion banner"
            className="ganga-banner-img"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="ganga-section-padding" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 22px" }}>

          {/* Intro */}
          <div style={{ maxWidth: 980 }}>
            <p className="ganga-intro-text" style={{ margin: "0 0 18px 0" }}>
              Ganga had the looks, the product, and the plan. But somewhere between the fabric and
              the feed, the feeling got lost. The brand needed more than visibility, and it needed
              soul. Something real enough for modern Indian women to not just wear, but believe in.
            </p>
            <p className="ganga-intro-text" style={{ margin: 0 }}>
              So we stopped selling outfits and started shaping identity. From poetry stages to
              purpose-led collaborations, Ganga's story turned into a movement, one that proved
              emotions will always outlast algorithms.
            </p>
          </div>

          {/* Grid */}
          <div className="ganga-project-grid">

            {/* LEFT */}
            <div>
              <h2 className="ganga-heading">01. The Challenge</h2>
              <p className="ganga-body-text" style={{ margin: "0 0 38px 0" }}>
                Ganga, a premium D2C ethnic wear brand, had the product, the aesthetics, and even an
                influencer strategy in place. But growth had plateaued. Engagement was slipping. The
                audience wasn't connecting emotionally. The challenge? To transform Ganga from just
                another ethnic wear label into a cultural force that modern Indian women could see
                themselves in.
              </p>

              <h2 className="ganga-heading">02. Our Approach</h2>
              <p className="ganga-body-text" style={{ margin: "0 0 16px 0" }}>
                We knew the answer wasn't more clothes, more posts, or more influencers. It was deeper:
                a lifestyle, a movement, a voice. So, we rebuilt Ganga's influencer marketing from the
                inside out.
              </p>

              <ul className="ganga-list">
                <li style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 900 }}>The Ganga Woman Show:</span> Partnered with Spill Poetry to
                  launch a spoken word event celebrating the many shades of modern womanhood, featuring
                  India's top poets and storytellers. The event sold out The Habitat, reached 14M
                  people, and gave Ganga 10K new followers overnight.
                </li>
                <li style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 900 }}>Festive Campaigns:</span> Leveraged Karwa Chauth with the
                  #SaasBahuGoals giveaway, tapping into Northern India and reaching 3.6M with 90K
                  profile interactions.
                </li>
                <li style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 900 }}>On-Ground Activations:</span> At Nykaa Land, Ganga's booth
                  turned heads with tarot readings, fashion-forward activities, and a crowd-sourced wall
                  on modernity that became a social media hit.
                </li>
                <li style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 900 }}>Influencer Evolution:</span> We expanded beyond fashion
                  bloggers, collaborating with dancers, plus-size influencers, TED speakers and more
                  positioning clothes as a frame for women's individuality.
                </li>
                <li style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 900 }}>Dil Se Sherni Campaign:</span> Partnered with the Chhanv
                  Foundation, spotlighting acid attack survivors as models in a powerful collection
                  launch. Backed with a 10% revenue pledge, the campaign sparked nationwide media
                  coverage and reached 4M, proving that fashion can be activism.
                </li>
              </ul>

              <h2 className="ganga-heading">03. The Impact</h2>
              <p className="ganga-body-text" style={{ margin: "0 0 12px 0" }}>
                In just 3 months, Ganga didn't just bounce back, it broke through.
              </p>

              <ul className="ganga-list" style={{ marginBottom: 18 }}>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>21M+ Reach</span> in one quarter</li>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>14M+ Views</span> across campaigns</li>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>10K+ New Instagram Followers</span></li>
                <li style={{ marginBottom: 10 }}><span style={{ fontWeight: 900 }}>90K+ Profile Interactions</span></li>
                <li style={{ marginBottom: 10 }}>Nationwide media buzz and cultural conversations ignited</li>
              </ul>

              <p className="ganga-body-text" style={{ margin: 0 }}>
                By weaving stories instead of just selling clothes, Ganga became more than a brand. It
                became a symbol of modern womanhood, resilient, stylish, and unapologetically powerful.
              </p>

            </div>

            {/* RIGHT */}
            <div className="ganga-right-images">
              {rightImages.map((img, idx) => (
                <div
                  key={img.src}
                  className="ganga-right-img-wrap"
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
                    background: img.bg || "#f2f2f2",
                    height: idx === 0 ? 280 : 220,
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Ganga project ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: img.fit || "cover",
                      objectPosition: img.pos || "50% 50%",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>

          </div>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
            <a href="/green-label" style={{ color: "#111", fontWeight: 800, textDecoration: "none", fontSize: "clamp(14px,1.3vw,16px)" }}>
              <span style={{ marginRight: 6 }}>‹</span> Previous post
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GangaFashion;
