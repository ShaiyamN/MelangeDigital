import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, WorkPage, CTAButton, Footer, BreadCrumbs } from "../layout";
import { Helmet } from "react-helmet-async";
import "./career.css";

const ARROW = "/about/arrow-top-right-purple.svg";

const Works = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Work", url: "/work" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Our Work | Case Studies | Melange Digital</title>
        <meta
          name="description"
          content="See how Melange turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike."
        />
        <link rel="canonical" href="https://melangedigital.co/work" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Libre+Baskerville:ital@1&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melangedigital.co/work" />
        <meta property="og:title" content="Our Work | Case Studies | Melange Digital" />
        <meta property="og:description" content="See how Melange turns cultural insight into arrivals and sales, for tourism boards, cruise lines, travel brands and global consumer brands alike." />
        <meta property="og:image" content="https://melangedigital.co/og-work.jpg" />

        {/* Schema Markup - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://melangedigital.co"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Work",
                  "item": "https://melangedigital.co/work"
                }
              ]
            }
          `}
        </script>

        {/* Schema Markup - WebPage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": "https://melangedigital.co/work#webpage",
              "url": "https://melangedigital.co/work",
              "name": "Our Work and Portfolio - Melange Digital",
              "description": "Explore our inspiring project journey. Know how Melange Digital's creativity and expertise brought ideas to life.",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://melangedigital.co/#website"
              },
              "breadcrumb": {
                "@id": "https://melangedigital.co/work#breadcrumb"
              },
              "inLanguage": "en-US"
            }
          `}
        </script>

        {/* Schema Markup - ItemList of Case Studies */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Mélange Digital Portfolio",
              "description": "Award-winning digital marketing campaigns and case studies by Mélange Digital",
              "numberOfItems": 27,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Akbar Travels",
                    "url": "https://melangedigital.co/work/akbar-travels",
                    "image": "https://melangedigital.co/assets/Saudi-e54f089a.png",
                    "description": "Experiential Marketing, Kiosk Design and Fabrication, Radio Campaign Production, Lead Generation Strategy",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Navi Savi",
                    "url": "https://melangedigital.co/work/navi-savi",
                    "image": "https://melangedigital.co/assets/NaviSavi-77420b57.jpg",
                    "description": "Brand Strategy, Communication Architecture, Sales Enablement, Lead Generation",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Her Hong Kong",
                    "url": "https://melangedigital.co/work/her-hk",
                    "image": "https://melangedigital.co/assets/hk1-f807e484.png",
                    "description": "Influencer Marketing, Content Creation, Storytelling",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Is This Even Singapore? - Singapore Tourism Board",
                    "url": "https://melangedigital.co/work/singapore-tourism-board",
                    "image": "https://melangedigital.co/assets/stb-a67878ee.png",
                    "description": "Influencer Marketing, Content Creation, Storytelling",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Ganga Fashions",
                    "url": "https://melangedigital.co/work/ganga-fashions",
                    "image": "https://melangedigital.co/assets/gangaWork-ce940397.png",
                    "description": "Brand Strategy, Social Media, PR IPs and Outreach",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Resorts World Cruises",
                    "url": "https://melangedigital.co/work/resorts-world-cruises",
                    "image": "https://melangedigital.co/assets/rwcWork-4544e70a.png",
                    "description": "Social Media, Performance Marketing, Influencer PR",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Jewel Houze",
                    "url": "https://melangedigital.co/work/jewel-houze",
                    "image": "https://melangedigital.co/assets/jewelWork-10180de3.png",
                    "description": "Design, Performance Marketing",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Healthy Mithai Co.",
                    "url": "https://melangedigital.co/work/healthy-mithai",
                    "image": "https://melangedigital.co/assets/healthyWork-9e99827a.png",
                    "description": "Performance Marketing",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 9,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "NeoTrader",
                    "url": "https://melangedigital.co/work/neotraders",
                    "image": "https://melangedigital.co/assets/neoWork-e3a12e50.png",
                    "description": "Design, Brand Strategy, Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 10,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "DevBoost",
                    "url": "https://melangedigital.co/work/devboost",
                    "image": "https://melangedigital.co/assets/devBoostWork-6abad868.png",
                    "description": "Design, Brand Strategy, Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 11,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Versailles Dental Clinic",
                    "url": "https://melangedigital.co/work/versailles-dental-clinic",
                    "image": "https://melangedigital.co/assets/verWork-2f775c0a.png",
                    "description": "Performance Marketing",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 12,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Rock Highland",
                    "url": "https://melangedigital.co/work/rock-highland",
                    "image": "https://melangedigital.co/assets/rockWork-da7c37fd.svg",
                    "description": "Brand Strategy, Social Media, Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 13,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Costa Cruises",
                    "url": "https://melangedigital.co/work/costa-cruises",
                    "image": "https://melangedigital.co/assets/costa-ebda63fc.jpg",
                    "description": "Brand Strategy, Social Media, Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 14,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Singapore Tourism",
                    "url": "https://melangedigital.co/work/singapore-tourism-board",
                    "image": "https://melangedigital.co/assets/singapore-837acb05.png",
                    "description": "Content Marketing, Performance Marketing",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 15,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Kalon Organics",
                    "url": "https://melangedigital.co/work/kalon",
                    "image": "https://melangedigital.co/assets/kalon-9943e7bd.png",
                    "description": "Brand Strategy, Social Media, E-Commerce",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 16,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Zee5",
                    "url": "https://melangedigital.co/work/zee5",
                    "image": "https://melangedigital.co/assets/zee5-e5362684.svg",
                    "description": "B2B, Performance Marketing, Social Media",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 17,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Duvon Disney",
                    "url": "https://melangedigital.co/work/duvon",
                    "image": "https://melangedigital.co/assets/duvon-36eb730b.png",
                    "description": "Social Media, Website Development, E-Commerce",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 18,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "MMT Holidays MakeMyTrip",
                    "url": "https://melangedigital.co/work/make-my-trip",
                    "image": "https://melangedigital.co/assets/makemytrip-fd6246a6.png",
                    "description": "B2B, Activations, Performance Marketing",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 19,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "GenVR",
                    "url": "https://melangedigital.co/work/genvr",
                    "image": "https://melangedigital.co/assets/GenVRwork-748d1695.svg",
                    "description": "Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 20,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Aartech Solonics",
                    "url": "https://melangedigital.co/work/aartech-solonics",
                    "image": "https://melangedigital.co/assets/aarWork-5a9a8a04.svg",
                    "description": "Brand Strategy, Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 21,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Enerqual",
                    "url": "https://melangedigital.co/work/enerqual",
                    "image": "https://melangedigital.co/assets/enerWork-2c61257b.svg",
                    "description": "Website Development",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 22,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Proportunity",
                    "url": "https://melangedigital.co/work/proportunity",
                    "image": "https://melangedigital.co/assets/proportunityImage-062c0371.jpeg",
                    "description": "Performance Marketing, Website Development, Design Solutions",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 23,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Sportz Village",
                    "url": "https://melangedigital.co/work/sportz-village",
                    "image": "https://melangedigital.co/assets/proportunity-57b2e909.png",
                    "description": "Brand Strategy, Website Development, Design Solutions",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 24,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Travel Stop",
                    "url": "https://melangedigital.co/work/travel-stop",
                    "image": "https://melangedigital.co/assets/travelstop2-757f2828.png",
                    "description": "Design Solutions",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 25,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Active Club",
                    "url": "https://melangedigital.co/work/active-club",
                    "image": "https://melangedigital.co/assets/activeclub-ec32e926.png",
                    "description": "Social Media, Performance Marketing, Influencer Marketing",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 26,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Kunal Rathod",
                    "url": "https://melangedigital.co/work/kunal-rathod",
                    "image": "https://melangedigital.co/assets/kunalrathod-7638baf1.svg",
                    "description": "Website Development, SEO, SEM",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 27,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Dhruvak",
                    "url": "https://melangedigital.co/work/dhruvak",
                    "image": "https://melangedigital.co/assets/dhruvak-de1270cd.png",
                    "description": "E-Commerce, Website Development, Social Media",
                    "creator": { "@type": "Organization", "name": "Mélange Digital" }
                  }
                }
              ]
            }
          `}
        </script>
        {/* End of Schema Markup */}
      </Helmet>

      <Navbar />
      <div>
        <div className="font-bricolage text-[16px] lg:text-[18px] lg:px-20 px-5 lg:pt-[155px] pt-[120px] pb-8 max-container">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <WorkPage />
        <div className="career-page">
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
              Want Your Campaign
              <br />
              on This Page Next?
            </h2>
            <Link to="/contact" className="career-cta">
              <span>Get In Touch</span>
              <span className="career-cta__icon" aria-hidden="true">
                <img src={ARROW} width="12" height="12" alt="" />
              </span>
            </Link>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
