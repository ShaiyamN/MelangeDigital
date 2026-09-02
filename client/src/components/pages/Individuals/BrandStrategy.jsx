import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  CTAButton,
  BreadCrumbs,
  Footer,
  WorkSummary,
  WorkSummaryForServicesPage,
} from "../../layout";
import {
  infMain,
  servicesImage1,
  storytelling,
} from "../../../assets/caseImages";
import { Helmet } from "react-helmet-async";
import { Insights } from "../../RevamperHome";
import { motion } from "framer-motion";
import { brandCaseStudy } from "../../../constants";
import { brandIns1, brandIns2, brandIns3, ins1, ins2, ins3 } from "../../../assets/newImages";

const ImmersiveBrandStorytelling = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Brand Strategy & Planning",
      url: "/services/brandstrategy",
    },
  ];

  const brandIdentityContent = [
    {
      title: "Brand Positioning",
      description:
        "Create a distinctive identity that emotionally resonates with your target audience. We define your brand’s values and craft a narrative to stand out in a marketplace.",
    },
    {
      title: "Target Market Identification",
      description:
        "Identify ideal customers and tailor marketing strategies to meet their needs. We segment your audience based on demographics and behaviors for maximum engagement and conversions.",
    },
    {
      title: "Brand Architecture",
      description:
        "Organise your brand's offerings into a clear structure to enhance client understanding. We help define relationships between products, ensuring consistency across all touchpoints.",
    },
    {
      title: "Brand Guidelines Creation",
      description:
        "Develop guidelines for consistent messaging and visual identity across platforms. Our comprehensive approach ensures every communication aligns with your brand’s identity.",
    },
    {
      title: "Competitive Landscape Analysis",
      description:
        "Gain insights into your industry's dynamics with our analysis. We evaluate competitors and market trends to identify opportunities, refining your strategies for a competitive edge.",
    },
    {
      title: "Consumer Insight Research",
      description:
        "Conduct research to understand consumer behaviours and preferences. We analyse data to provide actionable insights that enhance strategies, driving customer satisfaction and loyalty.",
    },
  ];

  const approachContent = [
    {
      step: "01",
      title: "Strategic Positioning",
      description:
        "Your brand's values and distinct personality are developed, creating a position that emotionally connects with your target audience and sets you apart in the market.",
    },
    {
      step: "02",
      title: "Market Analysis",
      description:
        "Extensive competitive and audience research is performed to find useful insights, allowing for the customization of strategies that increase your brand's relevance.",
    },
    {
      step: "03",
      title: "Consistency Guidelines",
      description:
        "Clear brand rules are designed to ensure consistent messaging and visual identity across all channels, thereby increasing brand awareness and customer loyalty.",
    },
  ];

  const insightsData = [
    {
      title:
        "10 Easy Steps: A Complete Guide to Mastering Your Marketing Strategy",
      date: "Brand Strategy - April 09, 2024",
      image: brandIns1,
      link: "/blogs/10-easy-steps-a-complete-guide-to-mastering-your-marketing-strategy",
    },
    {
      title:
        "9 Essential Online Tools for In-Depth Market Research",
      date: "Market Research - April 09, 2024",
      image: brandIns2,
      link: "/blogs/9-essential-online-tools-for-in-depth-market-research",
    },
    {
      title: "Why Every Business Needs to Invest in Online Presence?",
      date: "Brand Strategy - April 09, 2024",
      image: brandIns3,
      link: "/blogs/why-every-business-needs-to-invest-in-online-presence",
    },
  ];

  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const [key, setKey] = useState(0);

  const resetComponent = () => setKey((prevKey) => prevKey + 1);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const hasReloaded = sessionStorage.getItem('hasReloaded');

  //   if (!hasReloaded) {
  //     sessionStorage.setItem('hasReloaded', 'true');
  //     window.location.reload();
  //   }
  // }, []);

  // Framer Motion animation configuration
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <meta
          name="title"
          content="Brand Strategy & Planning Services | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Storytelling is an art—experiences are an impact. We don’t just tell your brand’s story; we create immersive experiences that engage, inspire, and leave a lasting imprint. Become part of the culture and make your audience feel, think, and act. Let’s create a narrative that matters."
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy"
        />
      </Helmet>
      <Helmet>
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        />
        <meta
          property="og:title"
          content="Brand Strategy & Planning Services | Mélange Digital"
        />
        <meta
          property="og:description"
          content="Storytelling is an art—experiences are an impact. We don’t just tell your brand’s story; we create immersive experiences that engage, inspire, and leave a lasting imprint. Become part of the culture and make your audience feel, think, and act. Let’s create a narrative that matters."
        />
      </Helmet>
      <Navbar />

      <motion.div
        {...fadeInUp}
        className="font-nunito font-semibold text-[16px] lg:text-[18px] lg:px-20 px-5  pt-28 md:pt-32 mb-6 max-container"
      >
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="px-5 md:px-16 lg:px-20 font-bricolage max-container"
      >
        <div className="lg:mt-[50px] mt-10">
          <h2 className="text-hero font-display font-semibold">
            Shaping Your Brand’s Future Now
          </h2>
        </div>
        <p className="text-lg md:text-xl w-auto lg:mt-[17px] mt-[16px]">
          Passionate about learning everything that distinguishes your
          brand—from your target audience and rivals to your brand’s purpose and
          story. This deep understanding allows us to create strategies that
          truly resonate, build lasting connections, and drive impactful growth.
        </p>
        <img
          src={servicesImage1}
          alt="Brand Strategy service"
          className="w-full my-5 md:my-10 lg:rounded-[20px] rounded-lg"
        />

        <motion.div {...fadeInUp}>
          <h2 className="text-display text-[#000144] font-bold mt-20">
            Refine Your{" "}
            <span className="multiverse-text"> Brand Identity </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-36 gap-y-4 lg:gap-y-10 mt-2 lg:mt-6">
            {brandIdentityContent.map((item, index) => (
              <div className="my-1" key={index}>
                <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
                <p className="text-base md:text-lg mt-2 lg:leading-[26px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp}>
          <h2 className="mt-20 lg:mt-20 text-[#000144] lg:pb-0 text-display font-bold">
            Our <span className="multiverse-text"> Approach </span>
          </h2>
          <div className="lg:my-10 my-5 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
          {approachContent.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-start justify-start">
                <div className="lg:flex items-center lg:space-x-20 lg:w-[50%] w-full">
                  <p className="font-bold text-lg md:text-xl">{item.step}</p>
                  <h2 className="font-bold text-lg md:text-xl lg:my-0 my-2">
                    {item.title}
                  </h2>
                </div>
                <div className="w-full lg:w-[50%]">
                  <p className="text-base md:text-lg">{item.description}</p>
                </div>
              </div>
              <div className="lg:my-10 my-5 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600"></div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <WorkSummaryForServicesPage key={key} works={brandCaseStudy} />
      <Footer customInsights={insightsData} />
    </div>
  );
};

export default ImmersiveBrandStorytelling;