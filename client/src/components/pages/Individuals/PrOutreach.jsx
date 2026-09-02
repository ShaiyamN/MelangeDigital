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
  pr,
  servicesImage1,
  storytelling,
} from "../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

import { Insights } from "../../RevamperHome";
import { motion } from "framer-motion";
import { prCaseStudy } from "../../../constants";
import { prIns1, prIns2, prIns3 } from "../../../assets/newImages";

const PrOutreach = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "PR, IPs & Outreach",
      url: "/services/pr-and-outreach",
    },
  ];

  const brandIdentityContent = [
    {
      title: "Media Relations & Digital PR",
      description:
        "Build and maintain strong relationships with media outlets. We craft tailored strategies to enhance your brand’s visibility and credibility in the digital landscape.",
    },
    {
      title: "Event Publicity & Management",
      description:
        "Execute successful event publicity and management strategies. We handle logistics and promotion, ensuring your event generates buzz and maximises audience engagement.",
    },
    {
      title: "Press Release Writing & Distribution",
      description:
        "Create impactful press releases that effectively communicate your news. We handle distribution to ensure maximum reach, generating buzz and engagement for your brand.",
    },
    {
      title: "IP Development & Licensing",
      description:
        "Develop and manage intellectual properties that enhance brand value. We provide strategic guidance on licensing opportunities to help you capitalize on your creative assets.",
    },
    {
      title: "Online Reputation Management",
      description:
        "Protect and enhance your brand's online reputation. We monitor feedback, address concerns, and implement strategies to foster a positive image across digital platforms.",
    },
    {
      title: "Sponsorship Strategy",
      description:
        "Create effective sponsorship strategies that align with your brand goals. We identify suitable partners and manage relationships to enhance visibility and engagement.",
    },
    {
      title: "Influencer & Celebrity PR",
      description:
        "Leverage influencer and celebrity partnerships to amplify your brand's message. We identify and engage key figures that align with your values, driving awareness and engagement.",
    },
    {
      title: "Media Monitoring & Analytics",
      description:
        "Track and analyse media coverage to gain insights into your brand's performance. We provide reports that inform strategies and help optimise future media efforts.",
    },
  ];

  const approachContent = [
    {
      step: "01",
      title: "Strategic Media Relations",
      description:
        "Solid relationships with media outlets are developed, creating unique public relations campaigns that increase your brand's visibility and leave a lasting impression in the digital landscape.",
    },
    {
      step: "02",
      title: "Comprehensive Reputation Management",
      description:
        "Your online presence is monitored, feedback is managed, and strategies are implemented to protect and enhance your brand's image across digital platforms.",
    },
    {
      step: "03",
      title: "Engaging Campaign Execution",
      description:
        "Press releases, event publicity, and influencer partnerships are handled to ensure your brand message reaches the right audience and maximises engagement.",
    },
  ];

  const insightsData = [
    {
      title: "AI Tools 101: Building Your Online Presence Made Easy",
      date: "Brand Strategy - April 09, 2024",
      image: prIns1,
      link: "/blogs/ai-tools-101-building-your-online-presence-made-easy",
    },
    {
      title:
        "How Working with a Digital Marketing Agency Can Transform Your Business?",
      date: "Design Solutions - March 28, 2024",
      image: prIns2,
      link: "/blogs/how-working-with-a-digital-marketing-agency-can-transform-your-business",
    },
    {
      title: "Cracking the Code: How to Excel in the D2C Arena",
      date: "E-commerce Management - April 29, 2024",
      image: prIns3,
      link: "/blogs/cracking-the-code-how-to-excel-in-the-d2c-arena",
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
          content="Strategic Media Relations and Digital PR Solutions - Melange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Good PR gets you noticed; great PR makes you unforgettable. It’s not just about being featured—it’s about making an impact. We craft campaigns that get your message in the right places at the right time, ensuring your brand is always part of the conversation."
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/pr-and-outreach"
        />
      </Helmet>
      <Helmet>
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        />
        <meta
          property="og:title"
          content="Strategic Media Relations and Digital PR Solutions - Melange Digital"
        />
        <meta
          property="og:description"
          content="Good PR gets you noticed; great PR makes you unforgettable. It’s not just about being featured—it’s about making an impact. We craft campaigns that get your message in the right places at the right time, ensuring your brand is always part of the conversation. "
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
            Strategic Media Relations and Digital PR Solutions
          </h2>
        </div>
        <p className="text-lg md:text-xl w-auto lg:mt-[17px] mt-[16px]">
          Good PR gets you noticed; great PR makes you unforgettable. It’s not
          just about being featured—it’s about making an impact. We craft
          campaigns that get your message in the right places at the right time,
          ensuring your brand is always part of the conversation. Ready to make
          headlines?
        </p>
        <img
          src={pr}
          alt="Brand Strategy service"
          className="w-full my-5 md:my-10 lg:rounded-[20px] rounded-lg"
        />

        <motion.div {...fadeInUp}>
          <h2 className="text-display text-[#000144] font-bold mt-20">
            Boost Your
            <span className="multiverse-text"> Brand's Credibility </span>
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

      <WorkSummaryForServicesPage key={key} works={prCaseStudy} />
      <Footer customInsights={insightsData} />
    </div>
  );
};

export default PrOutreach;
