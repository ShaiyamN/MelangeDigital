import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeHero = () => {
  const textRef = useRef(null);

  // Animation variants for Framer Motion
  const textVariant = {
    hidden: { opacity: 0, y: 80, scale: 0.9 }, // Initial state
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Final state
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 2.5,
        staggerChildren: 0.1,
      },
    },
  };

  const charVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.3,
        duration: 1,
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.5,
        duration: 1,
      },
    },
  };

  // Function to split the text into spans
  const splitText = (text) =>
    text.split("").map((char, index) => (
      <motion.span key={index} className="char" variants={charVariant}>
        {char}
      </motion.span>
    ));

  return (
    <div>
    <div className="w-full bg-black h-[100px] lg:hidden"></div>
      <div className="w-[100%] lg:px-20 px-5 lg:pt-[220px] pt-[70px] pb-[80px] heroBG z-50">
        <div className="max-container flex items-center">
          <div className="lg:w-[60%] text-[#F8ECFF] font-bricolage">
            {/* Hero Text with Framer Motion animation */}
            <motion.h1
              className="lg:text-[84px] text-[64px] font-bold lg:leading-[84px] leading-[64px] lg:mt-12"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              {splitText("Step into the Real")}
              <br />
              <div className="multiverse-text">
                {splitText("Marketing Matrix")}
              </div>
            </motion.h1>

            {/* Paragraph with animation */}
            <motion.p
              className="lg:text-[23px] text-[20px] lg:leading-[32px] leading-[24px] lg:mt-[28px] mt-[20px] lg:w-[90%] w-[100%]"
              initial="hidden"
              animate="visible"
              variants={paragraphVariant}
            >
              Experience Integrated Marketing Solutions Powered{" "}
              <br className="lg:block hidden" /> by Cultural Understanding and
              Technology.
            </motion.p>

            {/* Contact button with animation */}
            <Link to="/contact">
              <motion.div
                className="contact-btn-footer mt-[39px] w-[177px] font-bold h-[56px] flex items-center justify-center rounded-2xl cursor-pointer bg-[#1A1A1A] text-[17px]"
                initial="hidden"
                animate="visible"
                variants={buttonVariant}
              >
                <span>Book a Call</span>
              </motion.div>
            </Link>
          </div>
          <div className="lg:w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
