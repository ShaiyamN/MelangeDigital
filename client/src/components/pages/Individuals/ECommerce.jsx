import React, { useState, useRef, useEffect } from "react";
import { Navbar, CTAButton, BreadCrumbs, Footer } from "../../layout";
import {
  relate1,
  relate10,
  relate2,
  relate3,
  relate4,
  relate5,
  relate6,
  relate8,
  relate9,
  servicesImage,
  servicesImage3,
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

const ECommerce = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "E-commerce Management", url: "/services/ecommerce" },
    // {
    //   displayName: "Market Research",
    //   url: "/services/brandstrategy/marketResearch",
    // },
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
      let startThreshold = 1250;
      let endThreshold = 2300;
      if (window.innerWidth < 768) {
        startThreshold = 1300;
        endThreshold = 2850;
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
          content="Your E-commerce Solution Partner!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Get our comprehensive ecommerce services from design to optimization, we help your online store thrive. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/3-86d73e66.png"
        ></meta>
        <meta
          property="og:title"
          content="Your E-commerce Solution Partner!"
        ></meta>
        <meta
          property="og:description"
          content="Get our comprehensive ecommerce services from design to optimization, we help your online store thrive. Contact us today!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/ecommerce"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito font-semibold text-[16px] lg:text-[18px] ml-7 lg:ml-28 mb-6 pt-28 md:pt-32">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div
        className={`px-6 md:px-16 lg:px-28 font-nunito transition-scrolling ${
          isScrolled ? "bg-[#1a1a1a] text-white" : ""
        }`}
      >
        <div className="">
          <div className="">
            <h1 className="text-2xl md:text-4xl w-auto font-semibold">
              Solution for your Online Shop with Our Ecommerce Services
            </h1>
            {/* <p className="font-bold multiverse-text text-lg md:text-2xl w-auto  mt-3">
              Accelerating Your Online Store's Growth
            </p> */}

            <img
              src={servicesImage3}
              alt="Ecommerce services"
              className="w-auto my-5 md:my-10"
            />
            <p className="mt-2 text-lg md:text-xl font-semibold w-full ">
              We handle all the aspects of e-commerce, from inventory management
              to website optimization and customer experience. You can focus on
              growing your business while we take care of the behind-the-scenes
              work
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold multiverse-text pt-10 lg:pt-20">
            Our E-commerce Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-48 gap-y-2 lg:gap-y-10 mt-2 md:mt-6">
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Market Research</h3>
              <p className="text-base md:text-lg">
                Maximize e-commerce success through in-depth research of your
                target audience, competitors, and data-driven insights for
                strategic execution.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%] "
                to="/services/ecommerce/market-research"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">
                Marketplace Management
              </h3>
              <p className="text-base lg:text-lg">
                Optimise your e-commerce presence through the strategic listing,
                promotions & performance tracking.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%] "
                to="/services/ecommerce/marketplace-management"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">D2C</h3>
              <p className="text-base md:text-lg">
                Eliminate intermediaries & build a direct connection with your
                audience through a proven D2C model.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%] "
                to="/services/ecommerce/d2c"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Paid Campaigns</h3>
              <p className="text-base md:text-lg">
                Enhance your brand visibility and boost sales by promoting your
                products across multiple platforms.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%] "
                to="/services/ecommerce/paid-campaigns"
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
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-12 lg:pr-60">
              Market Segmentation
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We personalize your brand's offerings, messaging, and marketing
                strategies based on each market segment's preferences and pain
                points to foster customer acquisition.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="text-lg font-bold">02</p>
            <h2 className="text-lg font-bold my-2 md:my-0 pl-0 md:pl-8  lg:pl-24 pr-0 md:pr-28 lg:pr-44">
              Effective Branding & Messaging
            </h2>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg">
                We create brand affinity and loyalty through distinctive
                branding. Leveraging data and storytelling, we drive conversions
                with compelling messages and identities.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">03</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 lg:whitespace-nowrap md:pr-24 lg:pr-40">
              Personalized User Experiences
            </h2>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg">
                Using preferences and buying behavior data, we tailor the online
                shopping journey. Our focus: personalized product
                recommendations, pricing, content, and consistent experiences
                across channels and devices.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">04</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 lg:whitespace-nowrap pl-0 md:pl-8 lg:pl-24 md:pr-[7.5rem] lg:pr-52">
              Assessment & Evaluation
            </h2>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg">
                As your e commerce agency, we continuously analyze your
                e-commerce business, examining sales, conversion rates, customer
                satisfaction, and trends. With these insights, we adapt
                marketing strategies, ensuring a competitive edge in an
                ever-evolving landscape.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
        </div>
        <div>
          <h2 className="mt-10 lg:mt-20 text-2xl md:text-3xl font-semibold multiverse-text">
            E-commerce Management Case Studies
          </h2>
          <div className="flex flex-col md:flex-row mt-2 lg:pb-10">
            <Link to="/work/duvon" className="my-4 md:my-0">
              <img src={relate5} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[13px]">
                <p className="whitespace-nowrap">Social Media</p>
                <p className="mx-2 md:mx-3">E-commerce</p>
                <p>Website Development</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Duvon Disney</h2>
            </Link>
            <Link to="/work/kalon" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate8} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[13px]">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>E-commerce</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Kalon</h2>
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
              {/* <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] ml-1 bg-white shadow-xl">
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
              </div> */}
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
              <div className="absolute hidden lg:block lg:top-[3380px] 2xl:top-[3440px] left-1/2 transform -translate-x-1/2">
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

      <CTAButton buttonName={"Request an E-commerce Strategy"} />
      <Footer />
    </div>
  );
};

export default ECommerce;
