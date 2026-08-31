import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Footer, Navbar, CareerForm, OpeningPositions } from "../layout";
import CareerBenefits from "./CareerBenefits";
import CareerBehindTheScenes from "./CareerBehindTheScenes";
import CareerInterview from "./CareerInterview";
import "./career-clay.css";
import "./career.css";

const IMG = "/careers";
const ARROW = "/about/arrow-top-right-purple.svg";

function WhyCard({ n, title, body, cls }) {
  return (
    <article className={`career-why__card ${cls}`}>
      <p className="career-why__n">{n}</p>
      <p className="career-why__t">{title}</p>
      <p className="career-why__b">{body}</p>
    </article>
  );
}

function Cta({ to, onClick, children, className = "" }) {
  const inner = (
    <>
      <span>{children}</span>
      <span className="career-cta__icon" aria-hidden="true">
        <img src={ARROW} width="12" height="12" alt="" />
      </span>
    </>
  );
  const cls = `career-cta ${className}`.trim();
  if (onClick) {
    return (
      <button type="button" className={cls} onClick={onClick}>
        {inner}
      </button>
    );
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

const Career = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (el) => {
    if (!el) return;
    if (window.__melangeLenis) window.__melangeLenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => scrollTo(formRef.current);

  const scrollToOpenings = () => scrollTo(document.getElementById("open-positions"));

  return (
    <div>
      <Helmet>
        <title>Careers: Join Our Global Team | Mélange Digital</title>
        <meta
          name="title"
          content="Careers: Join a Culture of Creativity and Collaboration!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team."
        />
        <meta property="og:image" content="https://melangedigital.co/logo.png" />
        <link rel="canonical" href="https://melangedigital.co/careers" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Libre+Baskerville:ital@1&family=Lato:wght@400;700;800&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://melangedigital.co/careers#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
              { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://melangedigital.co/careers" }
            ]
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://melangedigital.co/careers#webpage",
            "url": "https://melangedigital.co/careers",
            "name": "Careers: Join Our Global Team | Mélange Digital",
            "description": "Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team.",
            "isPartOf": { "@type": "WebSite", "@id": "https://melangedigital.co/#website" },
            "breadcrumb": { "@id": "https://melangedigital.co/careers#breadcrumb" },
            "inLanguage": "en-US"
          }`}
        </script>
      </Helmet>

      <Navbar />
      <main id="main-content" className="career-page pt-24 sm:pt-[6.75rem]">
        <section className="career-why">
          <div className="career-wrap">
            <div className="career-why__row career-why__row--1">
              <div className="career-why__copy">
                <nav className="career-crumb" aria-label="Breadcrumb">
                  <Link to="/">Home</Link>
                  {" > "}
                  <span>Careers</span>
                </nav>
                <h1 className="career-h1">
                  Why build a career with
                  <br />
                  <span className="career-italic">Melange Digital?</span>
                </h1>
              </div>
              <div className="career-why__pair">
                <div className="career-why__photo">
                  <img src={`${IMG}/why-01.png`} alt="" width="321" height="246" />
                </div>
                <WhyCard
                  n="01"
                  title="Learning and Development"
                  body="You'll work across tourism boards, cruise lines and global travel brands, not one account. Every project builds a different skill, with senior support close by."
                  cls="career-why__card--1"
                />
              </div>
            </div>
            <div className="career-why__row career-why__row--2">
              <div className="career-why__pair career-why__pair--rtl">
                <WhyCard
                  n="02"
                  title="Innovative Work Environment"
                  body="We've worked with Bollywood directors, hip-hop artists and tourism boards, often in the same month. Unusual ideas get tried here, not shelved."
                  cls="career-why__card--2"
                />
                <div className="career-why__photo">
                  <img src={`${IMG}/why-02.jpg`} alt="" width="341" height="246" />
                </div>
              </div>
            </div>
            <div className="career-why__row career-why__row--3">
              <WhyCard
                n="03"
                title="Impactful Work"
                body="Our work has moved arrival numbers for tourism boards and filled cabins on cruise launches. What you make here is measurable, not just portfolio filler."
                cls="career-why__card--3"
              />
              <div className="career-why__photo career-why__photo--solo">
                <img src={`${IMG}/why-03.jpg`} alt="" width="380" height="246" />
              </div>
              <WhyCard
                n="04"
                title="Work-Life Balance"
                body="We run lean teams on purpose, so no one's stuck covering someone else's backlog for months. Take your time off. We mean it."
                cls="career-why__card--4"
              />
            </div>
          </div>
        </section>

        <CareerBenefits />
        <CareerBehindTheScenes />
        <CareerInterview onSeeJobs={scrollToOpenings} />
        <OpeningPositions scrollToForm={scrollToForm} onApply={setSelectedPosition} />
        <CareerForm ref={formRef} selectedPosition={selectedPosition} />

        <section className="career-wander">
          <img
            className="career-wander__bg"
            src="/about/wanderlust.jpg"
            alt=""
            width="1437"
            height="290"
            loading="lazy"
          />
          <h2 className="career-h2">
            Your Next Role <span className="career-italic">Starts Here.</span>
          </h2>
          <Cta onClick={scrollToOpenings}>View Open Positions</Cta>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
