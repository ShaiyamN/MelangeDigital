import React, { useState, useRef, useEffect } from "react";
import { Navbar, CTAButton, BreadCrumbs, Footer } from "../../layout";
import {
  relate1,
  relate10,
  relate11,
  relate2,
  relate3,
  relate4,
  relate5,
  relate6,
  relate7,
  relate8,
  relate9,
  servicesImage,
  servicesImage6,
} from "../../../assets/caseImages";
import {
  other1,
  other2,
  other3,
  other4,
  othr5,
  other6,
  arrowblack,
} from "../../../assets/images";
import ReadMore from "./ReadMore";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WebDev = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Website Development & SEO",
      url: "/services/website-development-seo",
    },
  ];
  const sliderRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevClick = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= slider.offsetWidth;
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextClick = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += slider.offsetWidth;

    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, totalSlides - 2));
  };

  const totalSlides = 5;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let startThreshold = 1200;
      let endThreshold = 2500;
      if (window.innerWidth < 768) {
        startThreshold = 1350;
        endThreshold = 4150;
      }
      setIsScrolled(scrollY > startThreshold && scrollY < endThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <meta
          name="title"
          content="Get Our Website Development and SEO Service Today!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Creating engaging websites is what we do best. Our website development service and SEO focuses on delivering exceptional user experiences that yield successful outcomes."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/6-14ebd3d4.png"
        ></meta>
        <meta
          property="og:title"
          content="Get Our Website Development and SEO Service Today!"
        ></meta>
        <meta
          property="og:description"
          content="Creating engaging websites is what we do best. Our website development service and SEO focuses on delivering exceptional user experiences that yield successful outcomes."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/website-development-seo"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-[16px] lg:text-[18px] ml-7 lg:ml-28 pt-28 md:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div
        className={` px-6 md:px-16 lg:px-28 font-nunito transition-scrolling ${
          isScrolled ? "bg-[#1a1a1a] text-white" : ""
        }`}
      >
        <div className="">
          <div className="">
            <h2 className="text-hero font-display w-auto font-semibold">
              Crafting Digital Excellence: Website Development & SEO
            </h2>
            {/* <p className="font-bold multiverse-text text-lg md:text-2xl w-auto mt-1">
              Crafting digital spaces for seamless customer connections.
            </p> */}
            <img
              src={servicesImage6}
              alt="Web development service"
              className="w-auto my-5 md:my-10"
            />
          </div>
        </div>
        <p className="my-10 lg:my-14 text-lg md:text-xl font-semibold w-full md:w-[95%]">
          Your brand's first impression begins with your website. By
          understanding your brand identity and target audience, we create a
          digital presence that reflects your uniqueness and engages visitors
          from the first click.
        </p>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold multiverse-text">
            Our Website Development & SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-48 gap-y-2 lg:gap-y-10 mt-2 lg:mt-6">
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">
                Website Development
              </h3>
              <p className="text-base md:text-lg">
                We handle website creation, from wireframes to analytics,
                optimizing user experience for higher conversions.
              </p>
              <Link
                to="/services/website-development-seo/web-development"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Content</h3>
              <p className="text-base md:text-lg">
                We dive deep into competition benchmarking, keyword research, &
                SEO-friendly strategies to curate content that converts.
              </p>
              <Link
                to="/services/website-development-seo/content"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">UI/UX</h3>
              <p className="text-base md:text-lg">
                We enhance websites with compelling visuals, a consistent visual
                language, and a 'Mobile First' approach for seamless
                responsiveness across devices.
              </p>
              <Link
                to="/services/website-development-seo/ui-ux"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>

            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">SEO</h3>
              <p className="text-base lg:text-lg">
                We boost your organic traffic, visibility, and search rankings
                with our expertise in different types of SEO techniques.
              </p>
              <Link
                to="/services/website-development-seo/seo"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-10 lg:mt-20 text-3xl font-bold multiverse-text">
            Our Approach
          </h2>
          <div className="my-5 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">01</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 lg:pr-32">
              Research & Competition Analysis
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We start with extensive research into your product/services,
                target audience, industry trends, and competition analysis to
                create a strategic roadmap for developing a website that meets
                your business needs and goals.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="text-lg font-bold">02</p>
            <h2 className="text-lg font-bold my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-48 lg:pr-[339px]">
              Wireframes
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We specialize in developing a wireframe that outlines the
                website's structure, page hierarchy, and user flow that serves
                as the blueprint for the website's design, development &
                functionality.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">03</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-60 lg:pr-[380px]">
              UI/UX
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Our team of skilled designers combines aesthetics and
                functionality to craft a visually appealing and intuitive
                interface. We dive deep into understanding your target audience
                and business goals to ensure that every element of the design
                aligns perfectly with your brand identity.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">04</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-28 lg:pr-[232px]">
              Content Development
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Our content writers create compelling and engaging content for
                your website that resonates with your target audience and aligns
                with your brand's tone and voice while optimising it for search
                engines.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">05</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-64 lg:pr-[397px]">
              SEO
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Using the latest SEO techniques and best practices including
                keyword research, on-page optimization and link building, we
                improve your website's visibility and search engine rankings.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">06</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-[70px] lg:pr-[180px]">
              Automations & Integrations
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Before launching the website, end-to-end testing and quality
                assurance activities are done to ensure that the website is
                fully functional. We integrate the website with third-party
                tools and services to enhance its overall functionality and
                provide a seamless user experience.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
        </div>
        <div>
          <h2 className="mt-10 lg:mt-20 text-2xl md:text-3xl font-semibold multiverse-text">
            Website Development & SEO Case Studies
          </h2>
          <div className="flex flex-col justify-between md:flex-row mt-2 lg:pb-10 lg:space-x-6">
            <Link to="/work/kunal-rathod" className="my-4 md:my-0 ">
              <img src={relate7} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p>Website Development</p>
                <p className="mx-2 md:mx-3">SEO</p>
                <p>SEM</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Kunal Rathod</h2>
            </Link>
            <Link to="/work/proportunity" className="my-4 md:my-0">
              <img
                src={relate4}
                alt=""
                className="h-auto md:h-[73%] lg:h-auto"
              />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p className="lg:whitespace-nowrap">Website Development</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Design</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Proportunity</h2>
            </Link>
            <Link to="/work/duvon" className="my-4 md:my-0 ">
              <img src={relate5} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p className="whitespace-nowrap">E-commerce</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Website Development</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Duvon Disney</h2>
            </Link>
          </div>
          <div className="h-[172rem] lg:h-auto lg:mb-12">
            <h2 className="multiverse-text font-semibold mb-2 mt-2 lg:mt-6 text-[28px]">
              Other Related Services
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-6 lg:gap-x-96 gap-y-14 lg:gap-y-0 lg:overflow-x-hidden h-[30rem] "
              ref={sliderRef}
            >
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl">
                <img src={othr5} alt="" />
                <div className="px-2">
                  <h3 className="text-[18px] multiverse-text font-bold mt-2">
                    Brand Strategy
                  </h3>
                  <p className="text-[14px] text-[rgba(145, 140, 140, 1)] min-h-20 opacity-60 my-4">
                    We're passionate about understanding every aspect that makes
                    them unique - your audience, your competitors, your brand's
                    purpose, and its story.
                  </p>
                  <Link
                    className="flex items-center mb-2"
                    to="/services/brand-strategy"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] ml-1 bg-white shadow-xl">
                <img src={other1} alt="" />
                <div className="px-2">
                  <h3 className="text-[18px] multiverse-text font-bold mt-2">
                    E-Commerce Management
                  </h3>
                  <p className="text-[14px] text-[rgba(145, 140, 140, 1)] opacity-60 my-4">
                    We handle all the aspects of e-commerce, from inventory
                    management to website optimization and customer experience.
                    You can focus on growing your business while we take .....
                  </p>
                  <Link
                    className="flex items-center mb-2"
                    to="/services/ecommerce"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-5">
                <img src={other2} alt="" />
                <div className="px-2">
                  <h3 className="text-[18px] multiverse-text font-bold mt-2">
                    Content Marketing
                  </h3>
                  <p className="text-[14px] text-[rgba(145, 140, 140, 1)] min-h-20 opacity-60 my-4">
                    Communication has the power to create an impact. And by
                    striking a harmonious symphony of right words, channels and
                    timing, we strive to achieve the same for your brands!
                  </p>
                  <Link
                    className="flex items-center mb-2"
                    to="/services/content-marketing"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white ml-1 lg:ml-8 shadow-xl">
                <img src={other3} alt="" />
                <div className="px-2">
                  <h3 className="text-[18px] multiverse-text font-bold mt-2">
                    Design Solutions
                  </h3>
                  <p className="text-[14px] text-[rgba(145, 140, 140, 1)] h-[5.2rem] opacity-60 my-4">
                    Design is vital in shaping your brand's personality.
                    Creativity, colours, fonts, aesthetics and an underlying
                    story tying it - it all matters!
                  </p>
                  <Link
                    className="flex items-center mb-2"
                    to="/services/design-solutions"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-10">
                <img src={other4} alt="" />
                <div className="px-2">
                  <h3 className="text-[18px] multiverse-text font-bold mt-2">
                    Performance Marketing
                  </h3>
                  <p className="text-[14px] text-[rgba(145, 140, 140, 1)] min-h-20 opacity-60 my-4">
                    Our team of certified experts is dedicated to optimizing
                    your campaigns, ensuring maximum return on investment, and
                    driving scalable growth for your business....
                  </p>
                  <Link
                    className="flex items-center mb-2"
                    to="/services/performance-marketing"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
              {/* <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-12">
                <img src={other6} alt="" />
                <div className="px-2">
                  <h3 className="text-[18px] multiverse-text font-bold mt-2">
                    Website Development & SEO
                  </h3>
                  <p className="text-[14px] text-[rgba(145, 140, 140, 1)] min-h-20 opacity-60 my-4">
                    Your brand's first impression begins with your website. By
                    understanding your brand identity and target audience, we
                    create a digital presence that reflects your uniqueness....
                  </p>
                  <Link
                    className="flex items-center mb-2"
                    to="/services/websitedevelopment"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div> */}
              <div className="absolute hidden lg:block lg:top-[3740px] 2xl:top-[3780px] left-1/2 transform -translate-x-1/2">
                <button
                  className={`w-3 h-1 mx-1 rounded-full bg-gray-500 hover:bg-blue-500 transition ${
                    activeSlide === 0 ? "bg-blue-500 w-8 " : ""
                  }`}
                  onClick={handlePrevClick}
                ></button>
                <button
                  className={`w-3 h-1 mx-1 rounded-full bg-gray-500 hover:bg-blue-500 transition ${
                    activeSlide === totalSlides - 3 ? "bg-blue-500 w-8" : ""
                  }`}
                  onClick={handleNextClick}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTAButton buttonName={"Request a Website Audit"} />
      <Footer />
    </div>
  );
};

export default WebDev;
