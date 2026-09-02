import React, { useState } from "react";
import { motion } from "framer-motion";
import { awardsL1, plusCross } from "../../assets/images";
import {
  awd1,
  awd2,
  awd3,
  awd4,
  awd5,
  awd6,
  awd2024,
  awd2024_a,
  awd2024_b,
} from "../../assets/newImages";

const AwardsAndReco = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State for current slide
  const [showAll, setShowAll] = useState(false); // State for showing all awards

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
      title: "Best Branded Content Campaign 2023",
      description:
        "Celebrated for creating branded content that resonated with audiences and met client goals.",
      icon: awd4,
    },
    {
      id: 5,
      title: "Digital Transformation Award for MSMEs 2022",
      description:
        "Acknowledged for spearheading digital transformation in MSMEs with innovative marketing technology solutions.",
      icon: awd5,
    },
    {
      id: 6,
      title: "Best Influencer Marketing Campaign 2022",
      description:
        "Honored for effectively leveraging influencers to boost brand awareness and drive consumer engagement.",
      icon: awd6,
    },
  ];

  // Function to change the current slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Function to handle swipe (drag end) and loop through awards
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

  return (
    <div className="pb-0 md:pb-5 font-bricolage text-white partners-bg">
      <div className="px-5 pt-20 lg:pb-20 pb-10 md:px-16 lg:px-24 max-container">
        <div>
          <motion.h2
            className="font-bold text-display leading-[48px] text-[#ffffff]"
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
        <div className="md:hidden mt-10">
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
              className={`flex cursor-pointer justify-between mt-3 items-start ${
                openIndex === currentIndex ? "border-b-0" : "border-b"
              }`}
              onClick={() => toggleVisibility(currentIndex)}
            >
              <p className={`font-bold text-[17px] w-[80%]`}>
                {awards[currentIndex].title}
              </p>
              <motion.img
                src={plusCross}
                alt="toggle icon"
                className={`transition-transform duration-300 mt-2 ${
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

          {/* Pagination dots */}
          <div className="flex justify-center mt-5">
            {awards.map((_, index) => (
              <div
                key={index}
                className={`lg:w-3 w-[8px] lg:h-3 h-[8px] mx-1 mt-20 rounded-full ${
                  currentIndex === index
                    ? "bg-white border-white border"
                    : "border-white border"
                } cursor-pointer`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-[60px] gap-y-[95px] mt-20">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={award.icon} alt={award.title} className="" />
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
      </div>
    </div>
  );
};

export default AwardsAndReco;
