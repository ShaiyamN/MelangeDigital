import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { whiteArrw } from "../../assets/images";
import {
  brand1,
  brand2,
  brand3,
  content1,
  content2,
  content3,
  design1,
  design2,
  design3,
  inf1,
  inf2,
  inf3,
  pr1,
  pr2,
  pr3,
  story1,
  story2,
  story3,
} from "../../assets/servicesImages";

const NewServices = () => {
  const [activeService, setActiveService] = useState(
    "Brand Strategy & Planning",
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Define images for each service
  const imagesByService = {
    "Brand Strategy & Planning": [brand1, brand2, brand3],
    "Influencer Marketing ": [inf1, inf2, inf3],
    "Immersive Brand Storytelling": [story1, story2, story3],
    "Design & Development": [design1, design2, design3],
    "Content Strategy & Production": [content1, content2, content3],
    "PR, IPs & Outreach": [pr1, pr2, pr3],
  };

  const serviceImages = imagesByService[activeService];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex(
        (prevIndex) => (prevIndex + 1) % serviceImages.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceImages.length, activeService]);

  const renderServiceContent = () => {
    const descriptions = {
      "Brand Strategy & Planning":
        "Want to bring your brand to life?  We capture its essence and create strategies that resonate. Let's make your brand memorable from vision to execution. Join us to cut through the noise!",

      "Influencer Marketing ":
        "Got the right product? We’ve got the right people. From relatable creators to big-shot influencers, we match your brand with voices that spark conversations and drive impact.",

      "Immersive Brand Storytelling":
        "Why just tell a story when you can create a whole experience? We shape journeys that spark emotions, make your brand part of the culture, and leave a lasting impression that drives action.",

      "Design & Development":
        "Websites as smooth as your best one-liners. We create fast, stylish sites that look great and rank well on Google, ensuring your digital home is the place everyone wants to be!",

      "Content Strategy & Production":
        "Content that’s not just scroll-stopping, but jaw-dropping. From strategy to production, we ensure every piece tells your story and hits the mark, turning scrolls into clicks.",

      "PR, IPs & Outreach":
        " Good PR isn’t just about getting featured it’s about making the right noise in the right places at the right time. We don’t just get coverage we spark conversations that make you talk of the town.",
    };

    const links = {
      "Brand Strategy & Planning": "/services/brand-strategy",
      "Influencer Marketing ": "/services/influencer-marketing",
      "Immersive Brand Storytelling": "/services/immersive-brand-storytelling",
      "Design & Development": "/services/design-and-development",
      "Content Strategy & Production":
        "/services/content-strategy-and-production",
      "PR, IPs & Outreach": "/services/pr-and-outreach",
      
    };

    return (
      <div className="font-bricolage">
        <div className="flex space-x-3 max-w-[550px]">
          <p className="text-left text-[16px] leading-[22px] text-[#1A1A1A]">
            {descriptions[activeService]}
          </p>
          {(
            <Link to={links[activeService]}>
              <div className="circle-cta min-w-[32px] h-[32px] bg-[#141414] rounded-full flex items-center justify-center">
                <img
                  src={whiteArrw}
                  alt="arrow"
                  className="w-[14px] rotate-img"
                />
              </div>
            </Link>
          )}
        </div>
        <div className="mt-5">
          <div className="relative h-[300px] flex justify-center items-center">
            {serviceImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={` absolute top-5 transition-all duration-1000 ease-in-out ${
                  index === activeImageIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-24"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const leftSideRef = React.useRef(null);
  const rightSideRef = React.useRef(null);
  const isLeftInView = useInView(leftSideRef, { once: true });
  const isRightInView = useInView(rightSideRef, { once: true });

  return (
    <div className="lg:flex hidden">
      <motion.div
        className="w-[50%] min-h-[820px] service-bg flex items-start justify-center font-bricolage"
        ref={leftSideRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2.8, ease: "easeOut" }}
      >
        <div className="text-white font-extrabold text-display space-y-[18px] text-center section-y">
          <span className="text-[33px] font-bold text-[#DDDDDD]">
            What We Do
          </span>
          {Object.keys(imagesByService).map((service) => (
            <div key={service} className="flex items-center justify-center">
              <p
                onClick={() => setActiveService(service)}
                className={`cursor-pointer transition-all duration-300 mb-4 ${
                  activeService === service ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
              >
                {service}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="w-[50%] min-h-[820px] bg-white flex items-start justify-center text-white border-b-0 border-gray-400 pt-[100px]"
        ref={rightSideRef}
        initial={{ opacity: 0, x: 100 }}
        animate={isRightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center text-[24px] font-medium px-[40px] transition-opacity duration-500 ease-in-out">
          {renderServiceContent()}
        </div>
      </motion.div>
    </div>
  );
};

export default NewServices;
