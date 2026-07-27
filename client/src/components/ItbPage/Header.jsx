import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { headBlue, headPink } from "../../assets/itp";

const Header = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:flex items-start lg:px-20 px-5 font-bricolage lg:pt-[150px] pt-[120px] gap-x-20 max-container lg:pb-20 pb-10"
    >
      {/* Image Section */}
      <div className="lg:w-[40%] flex lg:-space-x-48 -space-x-28 mb-10 lg:mb-0">
        <motion.img
          src={headBlue}
          alt=""
          className="z-0 lg:w-[350px] w-[220px] lg:h-[350px] h-[220px]"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
        <motion.img
          src={headPink}
          alt=""
          className="spinAnimation z-10 lg:w-[350px] w-[220px] lg:h-[350px] h-[220px]"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="lg:w-[55%] text-[#791FF0] lg:text-[38px] text-[24px] lg:leading-[52px] leading-[28px]"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-2 font-semibold">
          <span className="whitespace-nowrap">No one</span>
          <span className="lg:block hidden">
            <svg
              width="240"
              height="2"
              viewBox="0 0 240 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M239.49 0.0800781H0.380127V2.31009H239.49V0.0800781Z"
                fill="#791FF0"
              />
            </svg>
          </span>

          <span className="lg:hidden">
            <svg
              width="80"
              height="3"
              viewBox="0 0 240 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M239.49 0.0800781H0.380127V2.31009H239.49V0.0800781Z"
                fill="#791FF0"
              />
            </svg>
          </span>
          <span>understands</span>
        </div>

        <div className="flex items-center space-x-2 font-semibold">
          <span className=" whitespace-nowrap">travel & tourism</span>
          <span className="lg:block hidden">
            <svg
              width="72"
              height="71"
              viewBox="0 0 72 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.0603 70.8098C36.0603 39.1698 32.5902 35.6999 0.950195 35.6999C32.5902 35.6999 36.0603 32.2298 36.0603 0.589844C36.0603 32.2298 39.5303 35.6999 71.1703 35.6999C39.5303 35.6999 36.0603 39.1698 36.0603 70.8098Z"
                fill="#791FF0"
              />
            </svg>
          </span>

          <span className="lg:hidden">
            <svg
              width="40"
              height="51"
              viewBox="0 0 72 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.0603 70.8098C36.0603 39.1698 32.5902 35.6999 0.950195 35.6999C32.5902 35.6999 36.0603 32.2298 36.0603 0.589844C36.0603 32.2298 39.5303 35.6999 71.1703 35.6999C39.5303 35.6999 36.0603 39.1698 36.0603 70.8098Z"
                fill="#791FF0"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-end space-x-2 lg:pl-80 pl-52 font-semibold lg:mt-2 ">
          <span className="whitespace-nowrap"> like we do</span>
        </div>

        <motion.div
          className="flex items-start justify-end lg:space-x-4 mt-4"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="w-1/2 pt-2 lg:block hidden">
            <svg
              width="300"
              height="2"
              viewBox="0 0 430 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M0 0H300V3H0Z"
            fill="#791FF0"
          />
            </svg>
          </div>
          <div className="lg:w-[60%] lg:pl-0 pl-[80px] w-[100%] lg:text-[16px] text-[13px] leading-[16px] lg:leading-[19px] text-[#000000]">
            With over{" "}
            <span className="text-[#791FF0]"> 15 years of experience </span>
            <br className="lg:block hidden" />
            across the{" "}
            <span className="text-[#791FF0]">
              {" "}
              UK, GCC, Southeast Asia, and South Asia,{" "}
            </span>
            we know what moves travelers.
            <br className="lg:block hidden" />
            <br className="lg:block hidden" />
            Our deep insights into{" "}
            <span className="text-[#791FF0]">
              {" "}
              geographies, traveler personas help us decode category trends,{" "}
            </span>
            cross-pollinate findings and{" "}
            <span className="text-[#791FF0]"> create strategies that </span>
            make destinations memorable.
            <p className="mt-1 lg:mt-[8px] text-[15px] lg:text-[18px] text-[#791FF0] leading-[18px]">
              {" "}
              Let’s bring the world to your shores.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Header;
