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
  servicesImage,
  servicesImage4,
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
const DesignSolutions = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Design Solutions", url: "/services/designsolutions" },
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
      let startThreshold = 1300;
      let endThreshold = 2050;
      if (window.innerWidth < 768) {
        startThreshold = 1000;

        endThreshold = 2700;
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
          content="	Graphic Design Services - Hire us today!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our solutions blend creativity and strategy to shape captivating visuals that reflect your brand's essence."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/4-9fda439d.png"
        ></meta>
        <meta
          property="og:title"
          content="Get a Quality Design Services - Hire us today!"
        ></meta>
        <meta
          property="og:description"
          content="Our solutions blend creativity and strategy to shape captivating visuals that reflect your brand's essence."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/design-solutions"
        />
      </Helmet>
      <Navbar />
      <div className="pt-28 md:pt-32  font-nunito font-semibold text-[16px] lg:text-[18px] ml-7 lg:ml-28  mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div
        className={`px-6 md:px-16 lg:px-28 font-nunito transition-scrolling ${
          isScrolled ? "bg-[#1a1a1a] text-white" : ""
        }`}
      >
        <div className="">
          <div>
            <h1 className="text-3xl md:text-4xl w-auto font-semibold">
              Get your Design done with our Design Solutions
            </h1>

            <img
              src={servicesImage4}
              alt="Design solution agency"
              className="w-auto my-5 lg:my-10"
            />
          </div>
        </div>
        <p className="my-10 text-lg md:text-xl font-semibold w-full md:w-[95%]">
          Design is vital in shaping your brand's personality. Creativity,
          colours, fonts, aesthetics and an underlying story tying it - it all
          matters!
        </p>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold multiverse-text">
            Our Design Solutions Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-48 gap-y-2 lg:gap-y-10 mt-2 lg:mt-6">
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Branding</h3>
              <p className="text-base md:text-lg">
                As your design agency, we build your brand's personality and
                experience - beyond just logos, colours, typeface.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%]"
                to="/services/design-solutions/branding"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Graphic Design</h3>
              <p className="text-base md:text-lg">
                Translating ideas into visually stunning graphics that
                communicate your message effectively.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%]"
                to="/services/design-solutions/graphic-design"
              >
                <ReadMore />
              </Link>
            </div>
            {/* <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">UI/UX</h3>
              <p className="text-base md:text-lg">
                Combining aesthetics with functionality to create user-centric
                designs that enhance interactions and drive conversions.
              </p>
               <div className="w-[50%] lg:w-[29.9%]">
                <ReadMore />
              </div> 
            </div> */}
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">
                Data Visualization
              </h3>
              <p className="text-base md:text-lg">
                Transforming complex data into easily digestible visual formats
                to uncover insights, communicate information and make informed
                decisions.
              </p>
              <Link
                className="w-[50%] lg:w-[29.9%]"
                to="/services/design-solutions/data-visualization"
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
            <h2 className="font-bold text-lg  my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-6 lg:pr-16">
              Understanding your vision and audience
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                We craft purposeful designs by deeply understanding your brand,
                values, and objectives. With insights into your identity,
                audience, and trends, our designs resonate, differentiate, and
                stay relevant.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="text-lg font-bold">02</p>
            <h2 className="text-lg  font-bold my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-28 lg:pr-[165px]">
              Creating compelling designs
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Our designers let their imagination run wild, starting with
                hand-drawn concepts that evolve into stunning masterpieces. Our
                experts then adapt and optimize them flawlessly for any medium,
                preserving their impact and effectiveness.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">03</p>
            <h2 className="font-bold text-lg my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-20 lg:pr-[142px]">
              Making your brands recognized
            </h2>
            <div className="w-full md:w-[50%]">
              <p className="text-base md:text-lg">
                Our marketing designs are strategic masterpieces. Every color,
                illustration, image, and message is purposefully chosen to drive
                action. We create visually compelling designs that amplify brand
                recognition and deeply engage your target audience.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
        </div>
        <div>
          <h2 className="mt-10 lg:mt-20 text-2xl md:text-3xl font-semibold multiverse-text">
            Design Solutions Case Studies
          </h2>
          <div className="flex flex-col justify-between md:flex-row mt-2 space-x-0 lg:space-x-10  lg:pb-10">
            <Link to="/work/kalon" className="my-4 md:my-0 ">
              <img src={relate8} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>E-commerce</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Kalon</h2>
            </Link>
            <Link to="/work/proportunity" className="my-4 md:my-0">
              <img
                src={relate4}
                alt=""
                className="m-auto md:h-[73%] lg:h-auto"
              />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p className="">Website Development</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Design</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Proportunity</h2>
            </Link>
            <Link to="/work/sportz-village" className="my-4 md:my-0 ">
              <img src={relate11} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Design</p>
                <p>Website Development</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl">Sportz Village</h2>
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
              {/* <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white ml-1 lg:ml-8 shadow-xl">
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
                    to="/services/designsolutions"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div> */}
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
              <div className="absolute hidden lg:block lg:top-[3120px] 2xl:top-[3160px] left-1/2 transform -translate-x-1/2">
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

      <CTAButton buttonName={"Request a Design Audit"} />
      <Footer />
    </div>
  );
};

export default DesignSolutions;
