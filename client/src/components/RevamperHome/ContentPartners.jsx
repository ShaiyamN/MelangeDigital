import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView
import { contentArr } from "../../assets/newImages";

// Define animation variants
const raiseFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContentPartners = ({ images }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 }); // Trigger when 30% of the section is visible

  return (
    <div>
      {/* Partner Logos Section */}
      <div className="pt-10 pb-[90px] bg-white" ref={sectionRef}>
        <motion.div
          className=""
          variants={raiseFromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img src={contentArr} alt="" />
        </motion.div>

        <motion.div
          className="marquee"
          variants={raiseFromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="marqueeGroup3">
            {images.map((el, index) => (
              <motion.div
                key={index}
                className="imageGroup2"
                variants={raiseFromBottom}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img src={el} className="imaGe2" alt="partner logos" />
              </motion.div>
            ))}
          </div>

          {/* Duplicate for continuous scrolling effect */}
          <div className="marqueeGroup3">
            {images.map((el, index) => (
              <motion.div
                key={index}
                className="imageGroup2"
                variants={raiseFromBottom}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img src={el} className="imaGe2" alt="partner logos" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentPartners;
