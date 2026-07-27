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
  servicesImage23,
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

const ContentMarketing = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/Content Marketing" },
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

    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, totalSlides - 3));
  };

  const totalSlides = 5;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let startThreshold = 1650;
      let endThreshold = 2500;
      if (window.innerWidth < 768) {
        startThreshold = 2050;

        endThreshold = 4000;
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
          content="Content Marketing Solutions - Melange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Boost engagement and reach with our powerful content marketing solutions and connect with your audience effectively."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Content Marketing Solutions -  Melange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Boost engagement and reach with our powerful content marketing solutions and connect with your audience effectively."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito font-semibold text-[16px] pt-28 md:pt-32 lg:text-[18px] ml-7 lg:ml-[114px] mb-6 ">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div
        className={` px-6 md:px-16 lg:px-28 font-nunito transition-scrolling ${
          isScrolled ? "bg-[#1a1a1a] text-white" : ""
        }`}
      >
        <div className="">
          <h1 className="text-3xl md:text-4xl  font-semibold">
            Get Strategic Content Marketing Service
          </h1>
          {/* <p className="font-bold multiverse-text text-lg md:text-2xl w-auto mt-1">
            Crafting conversations to drive conversions.
          </p> */}

          <img
            src={servicesImage23}
            alt="Content Marketing Service"
            className="w-full my-5 md:my-10"
          />
        </div>
        <p className="my-10 text-lg md:text-xl font-semibold w-full md:w-[95%]">
          Communication has the power to create an impact. And by striking a
          harmonious symphony of right words, channels and timing, we strive to
          achieve the same for your brands!
        </p>
        <div>
          <h2 className="text-2xl  md:text-3xl font-bold multiverse-text">
            Our Content Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-48 gap-y-2 lg:gap-y-10 mt-2 lg:mt-6">
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Social Media</h3>
              <p className="text-base md:text-lg">
                Strategically leveraging social platforms to create and
                distribute engaging content, fostering meaningful connections
                and increasing brand visibility.
              </p>
              <Link
                to="/services/content-marketing/social-media"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">
                Influencer Marketing
              </h3>
              <p className="text-base md:text-lg">
                Connecting your brands with the right influencers to amplify you
                brand's message and make the noise on social media.
              </p>
              <Link
                to="/services/content-marketing/influencer-marketing"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Videography</h3>
              <p className="text-base md:text-lg">
                Weaving compelling visuals into a story that leaves a lasting
                impact on your audience.
              </p>
              <Link
                to="/services/content-marketing/video-graphy"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Photography</h3>
              <p className="text-base md:text-lg">
                Capturing stunning & captivating images that showcase the
                essence of your brand.
              </p>
              <Link
                to="/services/content-marketing/photo-graphy"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Motion Graphics</h3>
              <p className="text-base md:text-lg">
                Infusing creativity and dynamic visuals to create engaging
                animated content that grabs attention and enhances your brand's
                messaging.
              </p>
              <Link
                to="/services/content-marketing/motion-graphics"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Articles</h3>
              <p className="text-base md:text-lg">
                Crafting informative and engaging written content that educates,
                entertains and positions your brand as a thought leader in the
                industry.
              </p>
              <Link
                to="/services/content-marketing/articles"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>

            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">B2B Marketing</h3>
              <p className="text-base lg:text-lg">
                Implementing tailored strategies and content that effectively
                communicate your brand's value proposition, building trust and
                driving business growth in the B2B space.
              </p>
              <Link
                to="/services/content-marketing/b2b-marketing"
                className="w-[50%] lg:w-[29.9%]"
              >
                <ReadMore />
              </Link>
            </div>
            <div className="my-1">
              <h3 className="font-bold text-lg md:text-xl">Ad Copywriting</h3>
              <p className="text-base md:text-lg">
                Crafting persuasive and thumb-stopping ad copies that captures
                attention, resonates with your audience and drives desired
                actions.
              </p>
              <Link
                to="/services/content-marketing/ad-copywriting"
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
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 d:pr-8 lg:pr-16">
              Understanding your content objectives
            </h2>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg">
                Through comprehensive knowledge of your industry, target
                audience, needs, and challenges, our team aligns efforts with
                your objectives, building a strong foundation for a compelling
                content strategy.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="text-lg font-bold">02</p>
            <h2 className="text-lg font-bold my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-16 lg:pr-48">
              Breaking through the clutter
            </h2>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg">
                Leveraging strategy and creativity, we craft impactful words
                that resonate with your audience. We showcase your brand's
                masterpiece on the right platform, at the right time.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          <div className="flex flex-col md:flex-row justify-start">
            <p className="font-bold text-lg md:text-xl">03</p>
            <h2 className="font-bold text-lg md:text-xl my-2 md:my-0 pl-0 md:pl-8 lg:pl-24 pr-0 md:pr-24 lg:pr-64">
              Measuring success
            </h2>
            <div className="w-full lg:w-[50%]">
              <p className="text-base md:text-lg">
                We track and analyze key metrics, leveraging advanced analytics
                tools to measure campaign success and gain valuable insights on
                audience engagement, conversions, and performance.
              </p>
            </div>
          </div>
          <div className="my-10 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
        </div>
        <div>
          <h2 className="mt-10 lg:mt-20 text-2xl md:text-3xl font-semibold multiverse-text">
            Content Marketing Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between lg:mt-2 lg:pb-10">
            <Link to="/work/duvon" className="my-4 md:my-0">
              <img src={relate5} alt="Duvon" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[13px]">
                <p className="whitespace-nowrap">Social Media</p>
                <p className="mx-2 lg:mx-3">E-commerce</p>
                <p>Website Development</p>
              </div>
              <h2 className="font-bold text-lg lg:text-xl">Duvon Disney</h2>
            </Link>
            <Link to="/work/active-club" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate6} alt="Active Club" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[12px]">
                <p>Performance Marketing</p>
                <p className="mx-2 ">Social Media</p>
                <p>Influencer Marketing</p>
              </div>
              <h2 className="font-bold text-lg lg:text-xl">Active Club</h2>
            </Link>
            <Link to="/work/make-my-trip" className="my-4 md:my-0">
              <img src={relate1} alt="MakemyTrip" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[13px]">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Activations</p>
              </div>
              <h2 className="font-bold text-lg lg:text-xl">
                MakeMyTrip Holidays
              </h2>
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
                <img src={othr5} alt="Other 5" />
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
                      <img src={arrowblack} alt="Arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] ml-1 bg-white shadow-xl">
                <img src={other1} alt="Other 1" />
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
                      <img src={arrowblack} alt="Melange Digital" />
                    </span>
                  </Link>
                </div>
              </div>
              {/* <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-5">
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
                    to="/services/contentmarketing"
                  >
                    Read More{" "}
                    <span className="ml-3 ">
                      <img src={arrowblack} alt="" />
                    </span>
                  </Link>
                </div>
              </div> */}
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white ml-1 lg:ml-8 shadow-xl">
                <img src={other3} alt="Other 3" />
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
                      <img src={arrowblack} alt="Melange Digital" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-10">
                <img src={other4} alt="Other 4" />
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
                      <img src={arrowblack} alt="black arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-auto lg:w-80 h-[30.5rem] lg:h-[28rem] bg-white shadow-xl ml-1 lg:ml-12">
                <img src={other6} alt="Other 6" />
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
                      <img src={arrowblack} alt="Arrow Black" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute hidden lg:block lg:top-[3580px] 2xl:top-[3620px] left-1/2 transform -translate-x-1/2">
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

      <CTAButton buttonName={"Request a Content Audit"} />
      <Footer />
    </div>
  );
};

export default ContentMarketing;
