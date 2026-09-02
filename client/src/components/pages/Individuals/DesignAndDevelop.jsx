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
  dgnAndDev,
  infMain,
  servicesImage1,
  storytelling,
} from "../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

import { Insights } from "../../RevamperHome";
import { motion } from "framer-motion";
import { designCaseStudy } from "../../../constants";
import { desiIns1, desiIns2, desiIns3, } from "../../../assets/newImages";

const DesignAndDevelop = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Design & Development",
      url: "/services/design-and-development",
    },
  ];

  const brandIdentityContent = [
    {
      title: "Creative Conceptualization",
      description:
        "Transform ideas into innovative concepts that resonate with your audience. We collaborate to develop creative solutions that align with your brand’s vision and goals.",
    },
    {
      title: "Visual Identity Design",
      description:
        "Craft a strong visual identity that reflects your brand’s essence. We develop logos, colour schemes, and typography that communicate your values and resonate with your audience.",
    },
    {
      title: "Prototyping & Wireframing",
      description:
        "Create functional prototypes and wireframes to visualise your project. Our process allows for early testing and feedback, ensuring a user-centred approach in design.",
    },
    {
      title: "Mobile-first Design Solutions",
      description:
        "Implement mobile-first design solutions that prioritise user experience on mobile devices. We create responsive designs that enhance accessibility and engagement on all platforms.",
    },
    {
      title: "UI/UX Design & Testing",
      description:
        "Enhance user experience with intuitive UI/UX design. We conduct thorough testing to ensure usability, resulting in designs that engage users and drive satisfaction.",
    },
    {
      title: "Motion Graphics & Animations",
      description:
        "Bring your ideas to life with captivating motion graphics and animations. We create dynamic visuals that engage audiences and effectively communicate your brand’s message.",
    },
    {
      title: "Web & App Design",
      description:
        "Design stunning and functional websites and apps that elevate your brand. We focus on aesthetics and performance to create seamless digital experiences for users.",
    },
    {
      title: "Product & Packaging Design",
      description:
        "Develop innovative product and packaging designs that stand out on the shelf. Our approach combines aesthetics and functionality to create memorable and appealing products.",
    },
  ];

  const approachContent = [
    {
      step: "01",
      title: "Innovative Concept Development",
      description:
        "Your ideas are turned into concepts through close collaboration to develop solutions that align with your brand's vision and captivate your target audience.",
    },
    {
      step: "02",
      title: "User-Centric Design Process",
      description:
        "Designs are ensured to be functional, intuitive, and personalised to enhance user satisfaction through prototyping, wireframing, and extensive UI/UX testing.",
    },
    {
      step: "03",
      title: "Holistic Visual Identity",
      description:
        "Visual identities are built, from logos to mobile-first designs, to ensure that your brand communicates effectively across platforms and interacts with your audience.",
    },
  ];

  const insightsData = [
    {
      title: "What is the Role of User Intent in SEO?",
      date: "Website Development & SEO - July 08, 2024",
      image: desiIns1,
      link: "/blogs/what-is-the-role-of-user-intent-in-seo",
    },
    {
      title: "How to Use Customer Journeys to Enhance Performance Marketing?",
      date: "Website Development & SEO - June 24, 2024",
      image: desiIns2,
      link: "/blogs/how-to-use-customer-journeys-to-enhance-performance-marketing",
    },
    {
      title: "What is the Impact of Core Web Vitals on SEO",
      date: "Website Development & SEO - July 15, 2024",
      image: desiIns3,
      link: "/blogs/what-is-the-impact-of-core-web-vitals-on-seo",
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <meta
          name="title"
          content="Design Innovative Digital and Visual Experiences - Melange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Your website deserves to be more than just functional—it should be sensational. We design sleek, user-friendly, and fast-loading sites that not only impress visually but also perform beautifully on Google. Your digital presence is your home—make sure it’s one worth visiting."
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/design-and-development"
        />
      </Helmet>
      <Helmet>
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        />
        <meta
          property="og:title"
          content="Design Innovative Digital and Visual Experiences - Melange Digital"
        />
        <meta
          property="og:description"
          content="Your website deserves to be more than just functional—it should be sensational. We design sleek, user-friendly, and fast-loading sites that not only impress visually but also perform beautifully on Google. Your digital presence is your home—make sure it’s one worth visiting."
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
            Design Innovative Digital and Visual Experiences
          </h2>
        </div>
        <p className="text-lg md:text-xl w-auto lg:mt-[17px] mt-[16px]">
          Your website deserves to be more than just functional—it should be
          sensational. We design sleek, user-friendly, and fast-loading sites
          that not only impress visually but also perform beautifully on Google.
          Your digital presence is your home—make sure it’s one worth visiting.
        </p>
        <img
          src={dgnAndDev}
          alt="Brand Strategy service"
          className="w-full my-5 md:my-10 lg:rounded-[20px] rounded-lg"
        />

        <motion.div {...fadeInUp}>
          <h2 className="text-display text-[#000144] font-bold mt-20">
            Transforming Concepts into{" "}
            <span className="multiverse-text"> Experiences </span>
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

      <WorkSummaryForServicesPage key={key} works={designCaseStudy} />
      <Footer customInsights={insightsData} />
    </div>
  );
};

export default DesignAndDevelop;
