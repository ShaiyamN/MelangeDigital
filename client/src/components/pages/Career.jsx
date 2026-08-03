import React, { useState, useEffect, useRef } from "react";
import {
  CareersFooter as Footer,
  BreadCrumbs,
  ContactButton,
  Navbar,
  CareerForm,
  OpeningPositions,
} from "../layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  blankImg,
  c1,
  c2,
  c3,
  c4,
  careerMain,
  mCareer1,
  mCareer2,
  mCareer3,
  mCareer4,
} from "../../assets/images";
import CFormExtra from "../layout/CFormExtra";

const Career = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Careers", url: "/careers" },
  ];

  const isMobile = window.innerWidth <= 768;

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth - 30;
      const scale = Math.min(1 + scrollY * 0.0002);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
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
        <meta property="og:image" content=""></meta>
        <link rel="canonical" href="https://melangedigital.co/careers" />

        {/* Schema Markup - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://melangedigital.co/careers#breadcrumb",
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
                  "name": "Careers",
                  "item": "https://melangedigital.co/careers"
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
              "@type": "WebPage",
              "@id": "https://melangedigital.co/careers#webpage",
              "url": "https://melangedigital.co/careers",
              "name": "Careers: Join Our Global Team | Mélange Digital",
              "description": "Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team.",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://melangedigital.co/#website"
              },
              "breadcrumb": {
                "@id": "https://melangedigital.co/careers#breadcrumb"
              },
              "inLanguage": "en-US"
            }
          `}
        </script>

        {/* End of Schema Markup */}
      </Helmet>

      <Navbar />
      <div
        className={`pt-28 md:pt-32 font-bricolage pb-14 transition-scrolling  ${
          isScrolled ? "bg-[#1a1a1a] text-white" : ""
        }`}
      >
        <div className="flex flex-col md:flex-col max-w-[1440px] mx-auto ">
          <div className="font-bricolage text-[16px] lg:text-[18px] ml-[30px] lg:ml-28 lg:mb-[40px] mb-7">
            <BreadCrumbs breadcrumbs={breadcrumbs} />
          </div>
          <div className="flex flex-col md:flex-row justify-between px-5 md:px-16 lg:px-28 items-start md:items-center">
            <div className="mb-8 md:mb-0 mx-2 md:mx-0">
              <h1 className="font-semibold text-2xl  md:text-5xl lg:w-[100%] lg:leading-[57.60px] leading-[32px] multiverse-text">
                Join a Culture of Creativity and Collaboration!
              </h1>
              <p className="md:text-[22px] text-[16px] lg:w-[100%] lg:leading-[30px] leading-[21px] md:mt-5 mt-3">
                We believe collaboration drives innovation. At Mélange Digital,
                every voice matters, and every idea counts. Work with a diverse
                team, spark creativity in shared brainstorming, and enjoy an
                environment where creativity is celebrated.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] h-auto lg:my-[100px] my-[40px] lg:py-[100px] py-20 lg:px-28 px-5 text-[#FFFFFF]">
          <div className="max-w-[1440px] mx-auto">
            <div className="lg:flex items-start lg:space-x-6 ">
              <div className="lg:w-[50%] font-bricolage font-semibold lg:text-[36px] lg:leading-[44px] text-[24px] leading-[30px]">
                Delivering Integrated <br /> Marketing Solutions Driven by{" "}
                <br /> Cultural Insight and <br /> Technology.
              </div>
              <div className="lg:w-[50%] font-bricolage font-normal lg:text-[20px] lg:leading-[30px] text-[16px] leading-[24px] lg:mt-0 mt-7">
                Every brand has its unique story, and we're here to help tell it
                in a way that clicks with your audience. We mix creativity with
                data-driven strategies to build meaningful connections and stay
                ahead of trends, delivering results that matter.
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-4 lg:gap-x-6 mt-[70px] lg:overflow-visible overflow-x-scroll flex lg:space-x-0 space-x-6">
              <img src={mCareer1} alt="Career1" className="lg:min-w-auto min-w-[270px]" />
              <img src={mCareer2} alt="Career2" className="lg:min-w-auto min-w-[270px]" />
              <img src={mCareer3} alt="Career3" className="lg:min-w-auto min-w-[270px]" />
              <img src={mCareer4} alt="Career4" className="lg:min-w-auto min-w-[270px]" />
            </div>
          </div>
        </div>

        <div className="lg:px-28 px-5 mt-10 lg:mb-20 md:mt-24 max-w-[1440px] mx-auto lg:pb-0 pb-20">
          <h2 className="md:text-[40px] lg:text-[40px] lg:leading-[48px] text-[24px] leading-[30px] font-semibold">
            Why Build a Career with Mélange Digital?
          </h2>

          <div className="lg:flex items-center justify-between lg:mt-8 mt-6">
            <div className="lg:w-[40%]">
              <img src={careerMain} alt="" />
            </div>
            <div className="lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-0 mt-6">
              <div className="bg-white box-shadow p-6 md:p-4 rounded-[10px]">
                <img src={c1} alt="" className="md:w-[40px] w-[45px]" />
                <h3 className="font-bold text-[22px] lg:leading-[34px] leading-[29px] mt-1 mb-2 lg:text-[20px] lg:mt-3 lg:mb-1 multiverse-text">
                  Learning and Development:
                </h3>
                <p className="text-[18px] md:text-[16px] lg:leading-[22px] leading-[25px] w-auto lg:w-[100%]">
                  We invest in our employees' growth, offering a training budget
                  of 10,000 onwards to upskill employees.
                </p>
              </div>
              <div className="bg-white box-shadow p-6 md:p-4 rounded-[10px]">
                <img src={c2} alt="" className="md:w-[40px] w-[45px]" />
                <h3 className="font-bold text-[22px] lg:leading-[26px] leading-[29px] mt-1 mb-2 lg:text-[20px] lg:mt-3 lg:mb-1 multiverse-text">
                  Innovative Work Environment:
                </h3>
                <p className="text-[18px] md:text-[16px] lg:leading-[22px] leading-[25px] w-auto lg:w-[100%]">
                  We work on the latest trends and technologies in digital
                  marketing with a AI first approach.
                </p>
              </div>
              <div className="bg-white box-shadow p-6 md:p-4 rounded-[10px]">
                <img src={c3} alt="" className="md:w-[40px] w-[45px]" />
                <h3 className="font-bold text-[22px] lg:leading-[34px] leading-[29px] mt-1 mb-2 lg:text-[20px] lg:mt-3 lg:mb-1 multiverse-text">
                  Impactful Work:
                </h3>
                <p className="text-[18px] md:text-[16px] lg:leading-[22px] leading-[25px] w-auto lg:w-[100%]">
                  Make a real difference by working on projects that drive
                  success for our clients.
                </p>
              </div>
              <div className="bg-white box-shadow p-6 md:p-4 rounded-[10px]">
                <img src={c4} alt="" className="md:w-[40px] w-[45px]" />
                <h3 className="font-bold text-[22px] lg:leading-[34px] leading-[29px] mt-1 mb-2 lg:text-[20px] lg:mt-3 lg:mb-1 multiverse-text">
                  Work-Life Balance:
                </h3>
                <p className="text-[18px] md:text-[16px] lg:leading-[22px] leading-[25px] w-auto lg:w-[100%]">
                  We offer remote work options and a supportive environment that
                  prioritizes your well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
        <OpeningPositions scrollToForm={scrollToForm} onApply={setSelectedPosition} />
        <CareerForm ref={formRef} selectedPosition={selectedPosition} />
      </div>

      <Footer />
    </div>
  );
};

export default Career;