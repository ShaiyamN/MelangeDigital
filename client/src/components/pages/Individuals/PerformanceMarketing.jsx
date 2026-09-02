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
  relate8,
  relate9,
  servicesImage5,
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

const PerformanceMarketing = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Performance Marketing",
      url: "/services/performancemarketing",
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
      let endThreshold = 2300;
      if (window.innerWidth < 768) {
        startThreshold = 1350;
        endThreshold = 3900;
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
          content="Maximize your ROI with Our Performance Marketing Service"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Drive results with data-driven performance marketing. Unlock growth, maximize ROI, and connect with your audience effectively."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/5-f184ff01.png"
        ></meta>
        <meta
          property="og:title"
          content="Maximize your ROI with Our Performance Marketing Service"
        ></meta>
        <meta
          property="og:description"
          content="Drive results with data-driven performance marketing. Unlock growth, maximize ROI, and connect with your audience effectively."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/performance-marketing"
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
              Ignite Your Success with Performance Marketing
            </h2>
            {/* <p className="font-bold multiverse-text text-lg md:text-2xl w-full  mt-1">
              Achieving ROI targets through precision targeting.
            </p> */}
            <img
              src={servicesImage5}
              alt="Best Performance marketing agency"
              className="w-auto my-5 lg:my-10"
            />
          </div>
        </div>
        <p className="my-5 lg:my-10 text-lg md:text-xl font-semibold w-auto">
          Our team of certified experts is dedicated to optimizing your
          campaigns, ensuring maximum return on investment, and driving scalable
          growth for your business. Let's accelerate your business growth with
          our tried and tested approach!
        </p>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold multiverse-text">
            Our Performance Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-48 gap-y-2 lg:gap-y-10 mt-2 md:mt-6">
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Ads</h3>
              <p className="text-base md:text-lg">
                Drive brand success with performance marketing. We execute data
                driven campaigns that drive conversions & boost your ROI.
              </p>
              <Link
                to="/services/performance-marketing/ads"
                className="w-[50%]  lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Automation</h3>
              <p className="text-base md:text-lg">
                We integrate CRMs, WhatsApp, and email marketing, streamlining
                repetitive tasks to deliver impactful results while reducing
                costs.
              </p>
              <Link
                to="/services/performance-marketing/automation"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">
                Media Buying & Planning
              </h3>
              <p className="text-base md:text-lg">
                We analyze your target audience & market trends to select the
                media platforms. Our industry connections help you secure
                valuable placements at competitive prices.
              </p>
              <Link
                to="/services/performance-marketing/media-buying-planning"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Analytics</h3>
              <p className="text-base md:text-lg">
                Through thorough KPI tracking, ROI measurement, and A/B testing,
                we ensure highly effective campaigns with desired outcomes.
              </p>
              <Link
                to="/services/performance-marketing/analytics"
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
          <div className="flex flex-col md:flex-row justify-items-start">
            <p className="font-bold text-lg md:text-xl">01</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-36 lg:pr-[221px]">
              Goal & KPI Setting
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We begin with defining clear goals and KPIs, to build a solid
                and clear foundation for executing ROI-driven and successful
                campaigns to meet your business objectives.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="text-lg font-bold">02</p>
            <h2 className="text-lg font-bold my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-32 lg:pr-[193px]">
              Identify Target Audience
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We identify the target audience for your products/services and
                deep dive into understanding their needs, interests, and
                behaviors to create targeted campaigns that resonate with them.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">03</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-36 lg:pr-[218px]">
              Campaign Strategy
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Based on the goals and target audience, we develop a
                comprehensive strategy that outlines the tactics to be used,
                channels to be leveraged, and messaging to be communicated.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">04</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-40 lg:pr-[235px]">
              Content Creation
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We craft compelling content that includes high-quality visuals,
                copy, and calls-to-action that aligns with the campaign strategy
                and inspires your target audience to take the desired action.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">05</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-36 lg:pr-56">
              Launch & Optimise
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We continuously optimise campaigns once they are initiated. This
                entails monitoring performance metrics, experimenting with
                various strategies, and modifying them when necessary.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start ">
            <p className="font-bold text-lg md:text-xl">06</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-56 lg:pr-80">
              Analysis
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Our performance marketing services don't end at ad campaign
                launch, we measure and analyse campaign results against defined
                goals and KPIs to refine existing and future campaigns,
                maximising results within your marketing budget.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
        </div>
        <div>
          <h2 className="mt-10 lg:mt-20 text-2xl md:text-3xl font-semibold multiverse-text">
            Performance Marketing Case Studies
          </h2>
          <div className="flex flex-col justify-between md:flex-row mt-2 lg:space-x-6 lg:pb-10">
            <Link to="/work/make-my-trip" className="my-4 md:my-0 ">
              <img src={relate1} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Activations</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl whitespace-nowrap">
                MakeMyTrip Holdiays
              </h2>
            </Link>
            <Link to="/work/duvon" className="my-4 md:my-0">
              <img src={relate5} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p className="">E-commerce</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Website Development</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Duvon Disney</h2>
            </Link>
            <Link to="/work/zee5" className="my-4 md:my-0">
              <img src={relate9} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] lg:text-[12px]">
                <p>B2C</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Zee5</h2>
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
              {/* <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-10">
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
                    to="/services/performancemarketing"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div> */}
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-12">
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
                    to="/services/website-development-seo"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute hidden lg:block lg:top-[3620px] 2xl:top-[3660px] left-1/2 transform -translate-x-1/2">
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

      <CTAButton buttonName={"Request an Ad Audit"} />
      <Footer />
    </div>
  );
};

export default PerformanceMarketing;
