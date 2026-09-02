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
import { immersiveCaseStudy } from "../../../constants";
import { immIns1, immIns2, immIns3 } from "../../../assets/newImages";

const ImmersiveBrandStorytelling = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Immersive Brand Storytelling",
      url: "/services/immersive-brand-storytelling",
    },
  ];

  const brandIdentityContent = [
    {
      title: "Branded Experiences (AR/VR)",
      description:
        "Create immersive branded experiences using AR and VR technologies. We design engaging environments that captivate audiences and enhance brand interactions for lasting impact.",
    },
    {
      title: "Experiential Marketing Campaigns",
      description:
        "Design experiential marketing campaigns that create memorable connections with your audience. We focus on immersive experiences that drive engagement.",
    },
    {
      title: "Storyboard & Script Writing",
      description:
        "Craft compelling storyboards and scripts that bring your vision to life. Our team ensures narratives resonate with your audience, creating engaging content for various platforms.",
    },
    {
      title: "User-Generated Content Campaigns",
      description:
        "Encourage authentic engagement with user-generated content campaigns. We strategize and manage initiatives that empower your audience to creatively share their brand experiences.",
    },
    {
      title: "Visual Storytelling (Video & Graphics)",
      description:
        "Utilise video and graphics to convey your brand’s message through powerful visual storytelling. We create eye-catching content that captures attention and communicates effectively.",
    },
    {
      title: "Cross-platform Story Integration",
      description:
        "Seamlessly integrate your brand story across multiple platforms. We ensure a cohesive narrative that resonates with diverse audiences, maximising reach and engagement.",
    },
    {
      title: "Audio Branding & Podcasts",
      description:
        "Develop a distinctive audio identity through branding and podcasts. We help create memorable soundscapes and engaging podcast content that enhances brand recognition.",
    },
    {
      title: "Immersive Event Marketing",
      description:
        "Elevate your events with immersive marketing strategies that engage attendees. We create unforgettable experiences that enhance brand visibility and foster deeper connections.",
    },
  ];

  const approachContent = [
    {
      step: "01",
      title: "Engaging Branded Experiences",
      description:
        "Immersive AR and VR experiences are created that attract people, translating your brand's story into meaningful encounters that resonate deeply.",
    },
    {
      step: "02",
      title: "Compelling Narrative Development",
      description:
        "Appealing storyboards and scripts are created to ensure your brand's message is engaging and personalised, reaching people across multiple media.",
    },
    {
      step: "03",
      title: "Integrated Marketing Strategies",
      description:
        "Campaigns are built that combine visual narrative, audio branding, and user-generated content to increase your brand's visibility across channels.",
    },
  ];

  const insightsData = [
    {
      title: "How to Use Video Marketing to Enhance Performance Campaigns?",
      date: "Performance Marketing - June 17, 2024",
      image: immIns1,
      link: "/blogs/how-to-use-video-marketing-to-enhance-performance-campaigns",
    },
    {
      title: "Hack the Newsfeed: How to Get Your News Seen in 2024",
      date: "Website Development & SEO - June 24, 2024",
      image: immIns2,
      link: "/blogs/hack-the-newsfeed-how-to-get-your-news-seen-in-2024",
    },
    {
      title: "Advanced Targeting Techniques",
      date: "Performance Marketing - June 17, 2024",
      image: immIns3,
      link: "/blogs/advanced-targeting-techniques",
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
          content="Brand Engagement through Immersive Experiences - Melange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Storytelling is an art—experiences are an impact. We don’t just tell your brand’s story; we create immersive experiences that engage, inspire, and leave a lasting imprint. Become part of the culture and make your audience feel, think, and act. Let’s create a narrative that matters."
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/immersive-brand-storytelling"
        />
      </Helmet>
      <Helmet>
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        />
        <meta
          property="og:title"
          content="Brand Engagement through Immersive Experiences - Melange Digital"
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
            Brand Engagement through Immersive Experiences
          </h2>
        </div>
        <p className="text-lg md:text-xl w-auto lg:mt-[17px] mt-[16px]">
          Storytelling is an art—experiences are an impact. We don’t just tell
          your brand’s story; we create immersive experiences that engage,
          inspire, and leave a lasting imprint. Become part of the culture and
          make your audience feel, think, and act. Let’s create a narrative that
          matters.
        </p>
        <img
          src={storytelling}
          alt="Brand Strategy service"
          className="w-full my-5 md:my-10 lg:rounded-[20px] rounded-lg"
        />

        <motion.div {...fadeInUp}>
          <h2 className="text-display text-[#000144] font-bold mt-20">
            Bringing Your{" "}
            <span className="multiverse-text"> Brand’s Story to Life </span>
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

      <WorkSummaryForServicesPage key={key} works={immersiveCaseStudy} />
      <Footer customInsights={insightsData} />
    </div>
  );
};

export default ImmersiveBrandStorytelling;
