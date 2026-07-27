import React, { useState } from "react";
import { motion } from "framer-motion";
import { awardsL1, plusCross } from "../../assets/images";
import {
  awd1,
  awd2,
  awd2024,
  awd2024_a,
  awd2024_b,
  awd3,
  awd4,
  awd5,
  awd6,
} from "../../assets/newImages";
import { useMediaQuery } from "react-responsive";

const AwardsAndRecoAbout = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggleVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const awards = [
    {
      id: 1,
      title: "Best Creative Campaign in Digital Media 2024",
      description:
        "Recognized for creativity and innovation in a digital campaign that stood out and connected deeply with target audiences.",
      icon: awd2024,
    },
    {
      id: 2,
      title: "Best Use of AI in Marketing 2024",
      description:
        "In recognition of outstanding professional achievement and contribution towards nation building.",
      icon: awd2024_a,
    },
    {
      id: 3,
      title: "Brand Impact Award 2024",
      description:
        "Celebrates the innovative use of AI to enhance marketing strategies, from personalization to predictive analytics.",
      icon: awd2024_b,
    },
    {
      id: 4,
      title: "Social Media Agency of the Year 2023",
      description:
        "Recognized for exceptional social media marketing performance on platforms like Instagram, Facebook, and LinkedIn.",
      icon: awd3,
    },
    {
      id: 5,
      title: "Best Branded Content Campaign 2023",
      description:
        "Celebrated for creating branded content that resonated with audiences and met client goals.",
      icon: awd4,
    },
    {
      id: 6,
      title: "Best Use of Social Media for Campaigns 2023",
      description:
        "Awarded for developing engaging social media campaigns that achieved impressive reach and ROI.",
      icon: awd3,
    },
    {
      id: 7,
      title: "Best MSME Digital Marketing Agency 2022",
      description:
        "Honoured for supporting small and medium-sized businesses with innovative digital marketing solutions.",
      icon: awd1,
    },

    {
      id: 8,
      title: "Digital Transformation Award for MSMEs 2022",
      description:
        "Acknowledged for spearheading digital transformation in MSMEs with innovative marketing technology solutions.",
      icon: awd5,
    },
    {
      id: 9,
      title: "Best Influencer Marketing Campaign 2022",
      description:
        "Honored for effectively leveraging influencers to boost brand awareness and drive consumer engagement.",
      icon: awd6,
    },
    {
      id: 10,
      title: "Best Digital Campaign of the Year 2021",
      description:
        "Awarded for a high-impact digital campaign that boosted outstanding engagement and conversions.",
      icon: awd2,
    },
    {
      id: 11,
      title: "Best Use of Content in Digital Strategy 2021",
      description:
        "Recognized for effective content strategies that enhanced a successful digital marketing campaign",
      icon: awd2,
    },
    {
      id: 12,
      title: "Innovation in MSME Marketing 2021",
      description:
        "Awarded for innovative marketing solutions tailored to small and medium-sized enterprises, driving business growth.",
      icon: awd5,
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === awards.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? awards.length - 1 : prevIndex - 1
      );
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="pb-0 md:pb-20 font-bricolage text-white partners-bg">
      <div className="px-5 pt-20 lg:pb-20 pb-10 md:px-16 lg:px-24 max-container">
        <div>
          <motion.h2
            className="font-bold lg:text-[48px] text-[40px] leading-[48px] text-[#ffffff]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Accolades and Honors
          </motion.h2>
          <motion.p
            className="lg:text-[20px] text-[16px] lg:leading-[26px] leading-[22px] mt-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We bring services to a whole new level. The industry-defining awards
            below are proof.
          </motion.p>
        </div>

        {/* Carousel for mobile */}
        {isMobile && (
          <div className="mt-10 relative">
            <motion.div
              key={currentIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) {
                  handleSwipe("left");
                } else if (info.offset.x > 50) {
                  handleSwipe("right");
                }
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={awards[currentIndex].icon}
                alt={awards[currentIndex].title}
              />
              <div
                className={`flex cursor-pointer justify-between mt-3 border-b items-start ${
                  openIndex === currentIndex ? "border-b-0" : "border-b"
                }`}
                onClick={() => toggleVisibility(currentIndex)}
              >
                <p
                  className={`font-bold lg:text-[19px] text-[17px] lg:w-[80%]`}
                >
                  {awards[currentIndex].title}
                </p>
                <motion.img
                  src={plusCross}
                  alt="toggle icon"
                  className={`transition-transform duration-300 lg:mt-2 ${
                    openIndex === currentIndex ? "rotate-45" : "rotate-0"
                  }`}
                  animate={{ rotate: openIndex === currentIndex ? 45 : 0 }}
                />
              </div>
              {openIndex === currentIndex && (
                <motion.div
                  className="mt-3 border-b pb-5"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-[16px] leading-[22px]">
                    {awards[currentIndex].description}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-4">
              {awards.map((_, index) => (
                <div
                  key={index}
                  className={`lg:w-3 w-[8px] lg:h-3 h-[8px] mx-1 mt-10 rounded-full ${
                    currentIndex === index
                      ? "bg-white border-white border"
                      : "border-white border"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Grid layout for larger screens */}
        {!isMobile && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-[60px] gap-y-[95px] mt-20">
            {awards
              .slice(0, showAll ? awards.length : 6)
              .map((award, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src={award.icon} alt={award.title} />
                  <div
                    className={`flex cursor-pointer justify-between mt-3 border-b items-start ${
                      openIndex === index ? "border-b-0" : "border-b"
                    }`}
                    onClick={() => toggleVisibility(index)}
                  >
                    {award.id === 3 ? (
                      <p className="font-bold lg:text-[19px] text-[17px] lg:w-[70%]">
                        Brand Impact Award <br /> 2024
                      </p>
                    ) : (
                      <p className="font-bold lg:text-[19px] text-[17px] lg:w-[70%]">
                        {award.title}
                      </p>
                    )}
                    <motion.img
                      src={plusCross}
                      alt="toggle icon"
                      className={`transition-transform duration-300 mt-2 ${
                        openIndex === index ? "rotate-45" : "rotate-0"
                      }`}
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.div
                      className="mt-3 border-b pb-5"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-[16px] leading-[22px]">
                        {award.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </div>
        )}
      </div>

      {/* View More button */}
      {!isMobile && (
        <div className="flex justify-end mt-0 px-20 max-container">
          <motion.button
            onClick={() => setShowAll((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center rounded-[40px] w-[162px] h-[55px] border border-[#F4F5F4] text-[19px] font-medium"
          >
            {showAll ? "View Less" : "View More"}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default AwardsAndRecoAbout;
