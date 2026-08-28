import { useState } from "react";
import { Link } from "react-router-dom";
import NetworkSphere from "./NetworkSphere";
import "./about.css";

const IMG = "/about";
const TEAM = "/destination-marketing-agency/images/team";
const ARROW = `${IMG}/arrow-top-right-purple.svg`;
const LINKEDIN = "/destination-marketing-agency/images/linkedin.png";

const LEADERS = [
  {
    name: "Sanket Bolinjkar",
    title: "Founder & CEO",
    img: `${TEAM}/sanket-bolinjkar-framed.png`,
    linkedin: "https://www.linkedin.com/in/sanket-bolinjkar-743ba224",
  },
  {
    name: "Ekaterina Bolinjkar",
    title: "Head of HR & Finance",
    img: `${TEAM}/ekaterina-bolinjkar-framed.webp?v=20260828b`,
    linkedin: "https://www.linkedin.com/in/ekaterina-bolinjkar-8bb33720/",
  },
  {
    name: "Jason Dias",
    title: "Director of Growth & Strategy",
    img: `${TEAM}/jason-dias-framed.webp?v=20260826c`,
    linkedin: "https://www.linkedin.com/in/jasondias01/",
  },
  {
    name: "Kaustubh Shetye",
    title: "Director Creative Strategy & Operations",
    img: `${TEAM}/kaustubh-shetye-framed.png`,
    linkedin: "https://linkedin.com/in/kaustubhshetye",
  },
  {
    name: "Julien Cordon",
    title: "Regional Director, GCC",
    img: `${TEAM}/julien-cordon-framed.webp?v=20260826c`,
    linkedin: "https://www.linkedin.com/in/julien-r-r-cordon-0a5204ba/",
  },
  {
    name: "Maria Masiri",
    title: "Regional Director, Africa",
    img: `${TEAM}/maria-masiri-framed.png`,
    linkedin: "https://www.linkedin.com/in/maria-masiri-3b883934/",
  },
];

function Cta({ to, href, children }) {
  const inner = (
    <>
      <span>{children}</span>
      <span className="about-cta__icon" aria-hidden="true">
        <img src={ARROW} width="12" height="12" alt="" />
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className="about-cta">
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className="about-cta">
      {inner}
    </a>
  );
}

const DMA_IMG = "/destination-marketing-agency/images";
const REPORT_COVER = `${DMA_IMG}/report/report-desk-cover.png?v=20260821d`;
const REPORT_ARROW = `${DMA_IMG}/arrow-top-right-purple.svg`;

const REPORT_SLIDES = [
  {
    title: "The Indian Outbound Inspiration Report 2026",
    bullets: [
      "The full India Outbound Inspiration Report 2026, 4,200 respondents, 12 cities, T1 through T3",
      "Which inspiration channels move Indian travellers to consider new destinations",
      "Which of the six Indian traveller cohorts is most likely to choose your destination",
      "A follow-up from the Mélange team if you want to talk through the implications",
    ],
    href: "/indian-outbound-tourism-report",
    cta: "Download the Report",
  },
  {
    title: "Next report — coming soon",
    bullets: [
      "Full report download once it goes live",
      "Audience and market findings for a new travel brief",
      "Cohort and channel takeaways boards can act on",
      "A follow-up from the Mélange team when you're ready",
    ],
    cta: "Coming soon",
    placeholder: true,
  },
];

function ReportPromo() {
  const [slide, setSlide] = useState(0);
  const show = (n) => setSlide((n + REPORT_SLIDES.length) % REPORT_SLIDES.length);

  return (
    <section className="about-report" id="report">
      <div className="about-wrap">
        <header className="report-promo-header">
          <h2 className="report-promo-heading">
            India Outbound <span className="about-accent">Travel Marketing</span> Specialists
          </h2>
          <p className="report-promo-desc">
            India&apos;s OTM is set to nearly triple by 2033, and most boards still get India wrong.
            <br />
            Here&apos;s our India Outbound Inspiration Report 2026 telling you why India needs a multi-level cultural strategy.
          </p>
        </header>
        <div className="report-promo-carousel">
          <div className="report-promo-slides">
            {REPORT_SLIDES.map((item, index) => (
              <article className="report-promo-card" key={item.title} hidden={index !== slide}>
                <div className="report-promo-grid">
                  <div className="report-promo-copy">
                    <h3 className="report-promo-card__title">{item.title}</h3>
                    <ul className="report-promo-benefits__list">
                      {item.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    {item.href ? (
                      <a className="about-cta report-promo-download" href={item.href}>
                        <span>{item.cta}</span>
                        <span className="about-cta__icon" aria-hidden="true">
                          <img src={REPORT_ARROW} width="12" height="12" alt="" />
                        </span>
                      </a>
                    ) : (
                      <button className="about-cta report-promo-download" type="button" disabled>
                        <span>{item.cta}</span>
                        <span className="about-cta__icon" aria-hidden="true">
                          <img src={REPORT_ARROW} width="12" height="12" alt="" />
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="report-promo-visual">
                    <div className="report-promo-stack">
                      <div className="report-promo-stack__frame">
                        <span className="report-promo-stack__layer report-promo-stack__layer--grey" aria-hidden="true" />
                        <span className="report-promo-stack__layer report-promo-stack__layer--purple" aria-hidden="true" />
                        {item.placeholder ? (
                          <div
                            className="report-promo-stack__photo report-promo-stack__photo--placeholder"
                            role="img"
                            aria-label="Second report coming soon"
                          >
                            Coming soon
                          </div>
                        ) : (
                          <img
                            className="report-promo-stack__photo"
                            src={REPORT_COVER}
                            alt="The Indian Outbound Inspiration Report 2026 on a desk"
                            width="440"
                            height="400"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            className="work-carousel-nav work-carousel-nav--prev"
            type="button"
            aria-label="Previous report"
            onClick={() => show(slide - 1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="M15.5 5.5L9 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="work-carousel-nav work-carousel-nav--next"
            type="button"
            aria-label="Next report"
            onClick={() => show(slide + 1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="M8.5 5.5L15 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const AboutBody = () => (
  <div className="about-page">
    <section className="about-hero">
      <div className="about-wrap about-hero__inner">
        <div className="about-hero__copy">
          <p className="about-hero__eyebrow">India's destination marketing agency for tourism boards.</p>
          <h1 className="about-h1">
            We cracked
            <br />
            the world's biggest
            <br />
            <span className="about-accent">Travel Market</span>
          </h1>
          <p className="about-lede about-hero__lede">
            India's Outbound Travel Market is worth $61.7B. And with the right cultural narratives, we help DMOs and NTOs tap into it.
          </p>
          <ul className="about-hero__stats">
            <li>
              <strong>10+</strong>
              <span>National Brands</span>
            </li>
            <li>
              <strong>5</strong>
              <span>Countries</span>
            </li>
            <li>
              <strong>15+</strong>
              <span>Years</span>
            </li>
          </ul>
          <Cta to="/contact">Book a strategy call</Cta>
        </div>
      </div>
      <div className="about-hero__visual">
        <img
          src={`${IMG}/hero-collage.png`}
          alt="Landmarks from destinations Melange markets, including London, Dubai, and Singapore"
          width="757"
          height="574"
          fetchPriority="high"
        />
      </div>
    </section>

    <section className="about-vm" aria-label="Vision and mission">
      <div className="about-wrap about-vm__grid">
        <article className="about-vm__card about-vm__card--vision">
          <h2 className="about-h2">
            Our
            <br />
            <span className="about-accent">Vision</span>
          </h2>
          <p className="about-body">Making the world irresistible to Indian travellers.</p>
          <img className="about-vm__icon" src={`${IMG}/icon-vision.png`} width="114" height="114" alt="" loading="lazy" />
        </article>
        <article className="about-vm__card about-vm__card--mission">
          <img className="about-vm__icon" src={`${IMG}/icon-mission.png`} width="114" height="114" alt="" loading="lazy" />
          <p className="about-body">We turn desire into arrivals, and arrivals into livelihoods</p>
          <h2 className="about-h2">
            Our
            <br />
            <span className="about-accent">Mission</span>
          </h2>
        </article>
      </div>
    </section>

    <section className="about-trust">
      <div className="about-wrap about-trust__grid">
        <div>
          <h2 className="about-h2">
            The reason boards <span className="about-accent">trust</span> us
          </h2>
          <p className="about-lede about-trust__copy">
            Our leadership has worked in Tourism boards of Singapore, Sharjah, and the world's largest ad networks.
          </p>
        </div>
        <div className="about-trust__photo">
          <img
            src={`${IMG}/trust-team.png`}
            alt="Melange leadership: Sanket Bolinjkar, Ekaterina Bolinjkar, and Jason Dias"
            width="573"
            height="314"
            loading="lazy"
          />
        </div>
        <p className="about-lede about-trust__aside">
          It's why boards trust us with mandates most agencies never see: budgets, approval chains, and outcomes mentioned in ministerial reports.
        </p>
      </div>
    </section>

    <section className="about-global about-wrap">
      <h2 className="about-h2">
        <span className="about-accent">Travel marketing</span> across five countries
      </h2>
      <p className="about-lede">
        We started in 2021 with a small team and a belief in building on culture, not media spend. And within four years, we were global.
      </p>
      <figure className="global-reach-visual">
        <img
          className="global-reach-map"
          src="/destination-marketing-agency/images/global/world-map-reach.png?v=20260826i"
          alt="Melange offices in India, United Kingdom, Portugal, United Arab Emirates, Singapore, and Zambia"
          width="2800"
          height="958"
          loading="lazy"
        />
      </figure>
    </section>

    <section className="about-voices">
      <div className="about-wrap network-layout">
        <div className="network-layout__copy">
          <h2 className="about-h2">
            Access India's biggest <span className="about-accent">Cultural Voices</span>
          </h2>
          <p className="about-lede">
            Spanning Bollywood, Regional Cinema, OTT, Hip-hop, Cricket, Comedy, Fashion, Food, Travel, Tech — from India's metros and Tier 2 &amp; 3, to the GCC, UK &amp; Europe, Southeast Asia, Russia &amp; CIS, West &amp; South Africa.
          </p>
          <ul className="about-voices__stats">
            <li>
              <strong>5,000+</strong>
              <span>creators and celebs</span>
            </li>
            <li>
              <strong>62.3%</strong>
              <span>average authentic-audience score across markets</span>
            </li>
          </ul>
        </div>
        <NetworkSphere />
      </div>
    </section>

    <ReportPromo />

    <section className="about-lead about-wrap">
      <h2 className="about-h2">
        <span className="about-accent">Leadership</span> that moves the needle
      </h2>
      <ul className="about-lead__grid">
        {LEADERS.map((person) => (
          <li className="about-lead__card" key={person.name}>
            <img
              className="about-lead__photo"
              src={person.img}
              alt=""
              width="360"
              height="450"
              loading="lazy"
            />
            <strong>{person.name}</strong>
            <span>{person.title}</span>
            <a
              className="about-lead__in"
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
            >
              <img src={LINKEDIN} alt="" width="20" height="20" />
            </a>
          </li>
        ))}
      </ul>
    </section>

    <section className="about-wander">
      <img
        className="about-wander__bg"
        src={`${IMG}/wanderlust.jpg`}
        alt=""
        width="1437"
        height="290"
        loading="lazy"
      />
      <h2 className="about-h2">
        Let's create <span className="about-accent">wanderlust</span> together
      </h2>
      <Cta to="/contact">Book a strategy call</Cta>
    </section>
  </div>
);

export default AboutBody;
