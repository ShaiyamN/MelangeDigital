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
  content,
  dgnAndDev,
  infMain,
  servicesImage1,
  storytelling,
} from "../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

import { Insights } from "../../RevamperHome";
import { motion } from "framer-motion";
import { contentCaseStudy } from "../../../constants";
import {  conIns1, conIns2, conIns3, } from "../../../assets/newImages";

const ContentStrategy = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Content Strategy & Production",
      url: "/services/content-strategy-and-production",
    },
  ];

  const brandIdentityContent = [
    {
      title: "Content Audit & Gap Analysis",
      description:
        "Evaluate your existing content to identify strengths and weaknesses. We conduct a thorough analysis to highlight gaps and opportunities, ensuring your content strategy is effective.",
    },
    {
      title: "Long & Short-form Content Creation",
      description:
        "Craft engaging long and short-form content that meets your audience's needs. Our versatile approach ensures your message is communicated effectively across various platforms.",
    },
    {
      title: "SEO-Optimised Content Creation",
      description:
        "Create content that drives traffic and engagement through SEO best practices. We focus on keyword integration and compelling narratives to enhance your online visibility.",
    },
    {
      title: "Blog & Article Writing",
      description:
        "Write informative and engaging blogs and articles that establish your authority in your industry. We focus on relevant topics that resonate with your audience and drive traffic.",
    },
    {
      title: "Social Media Content Strategy",
      description:
        "Develop a tailored social media content strategy that resonates with your audience. We create engaging posts and campaigns that enhance brand awareness and foster community.",
    },
    {
      title: "Visual Content Creation",
      description:
        "Design eye-catching visual content that enhances your brand’s messaging. We create graphics, infographics, and visuals that capture attention and effectively communicate ideas.",
    },
    {
      title: "Video Content Production",
      description:
        "Produce high-quality video content that captivates your audience. From concept to execution, we ensure your videos align with your brand and effectively convey your message.",
    },
    {
      title: "Copywriting & Storytelling",
      description:
        "Develop compelling copy and narratives that engage and inspire. Our storytelling approach connects emotionally with your audience, enhancing brand loyalty and recognition.",
    },
  ];

  const approachContent = [
    {
      step: "01",
      title: "Strategic Content Planning",
      description:
        "Purposeful content strategies are crafted to capture attention and drive conversions, ensuring your brand’s message is compelling from concept to production.",
    },
    {
      step: "02",
      title: "Comprehensive Content Analysis",
      description:
        "Content audits are conducted to identify strengths and gaps, enabling the development of an effective strategy that enhances your online visibility and audience engagement.",
    },
    {
      step: "03",
      title: "Diverse Content Creation",
      description:
        "SEO optimised, engaging content is produced across formats—blogs and visuals—ensuring that your brand resonates across platforms and fosters lasting connections.",
    },
  ];

  const insightsData = [
    {
      title: "The Role of Interactive Content in Driving Performance Marketing Results",
      date: "Performance Marketing - August 19, 2024",
      image: conIns1,
      link: "/blogs/the-role-of-interactive-content-in-driving-performance-marketing-results",
    },
    {
      title: "Copywriting for E-commerce: Driving Sales with Compelling Product Copy",
      date: "Content Marketing - May 13, 2024",
      image: conIns2,
      link: "/blogs/copywriting-for-e-commerce-driving-sales-with-compelling-product-copy",
    },
    {
      title: "Copywriting Tools and Resources Every Marketer Should Know About",
      date: "Content Marketing - May 13, 2024",
      image: conIns3,
      link: "/blogs/copywriting-tools-and-resources-every-marketer-should-know-about",
    },
  ];

  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  const [key, setKey] = useState(0);

  const resetComponent = () => setKey((prevKey) => prevKey + 1);

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
          content="Content Strategy & Production - Melange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Content should stop the scroll—and spark the click. Our approach ensures that every piece of content is crafted with purpose, bringing your brand’s message to life in a way that captures attention and converts. From concept to production, we make sure your story gets told and heard."
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-strategy-and-production"
        />
      </Helmet>
      <Helmet>
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        />
        <meta
          property="og:title"
          content="Strategies for Your Audience - Melange Digital"
        />
        <meta
          property="og:description"
          content="Content should stop the scroll—and spark the click. Our approach ensures that every piece of content is crafted with purpose, bringing your brand’s message to life in a way that captures attention and converts. From concept to production, we make sure your story gets told and heard."
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
            Strategies for Your Audience
          </h2>
        </div>
        <p className="text-lg md:text-xl w-auto lg:mt-[17px] mt-[16px]">
          Content should stop the scroll—and spark the click. Our approach
          ensures that every piece of content is crafted with purpose, bringing
          your brand’s message to life in a way that captures attention and
          converts. From concept to production, we make sure your story gets
          told and heard.
        </p>
        <img
          src={content}
          alt="Brand Strategy service"
          className="w-full my-5 md:my-10 lg:rounded-[20px] rounded-lg"
        />

        <motion.div {...fadeInUp}>
          <h2 className="text-display text-[#000144] font-bold mt-20">
            Amplify Your
            <span className="multiverse-text"> Brand's Voice </span>
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

      <WorkSummaryForServicesPage key={key} works={contentCaseStudy} />
      <Footer customInsights={insightsData} />
    </div>
  );
};

export default ContentStrategy;
