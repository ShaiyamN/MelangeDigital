import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { works } from "../../constants";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { whiteArrw } from "../../assets/images";

gsap.registerPlugin(ScrollTrigger);

// Animation variant
const raiseFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Work Card
const Work = ({ icon, tag1, tag2, tag3, title, path }) => {
  return (
    <motion.div className="relative lg:min-w-[500px] lg:mr-10 mb-7">
      <Link to={path}>
        <div className="service-wrapper relative overflow-hidden">
          <div className="overlay-services absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
            <div className="w-[72px] h-[72px] bg-[#141414] rounded-full flex items-center justify-center">
              <img src={whiteArrw} alt="" />
            </div>
          </div>

          <img
            src={icon}
            alt="Icon"
            className="w-full lg:h-[450px] h-[330px] object-cover"
          />
        </div>
      </Link>

      <div className="flex py-1 text-[#1A1A1A] font-bold lg:text-[17px] text-[12px] lg:pt-[15px] pt-2">
        <p>{tag1}</p>
        <p className="mx-3">{tag2}</p>
        <p>{tag3}</p>
      </div>

      <Link to={path}>
        <motion.h2
          className="font-bold lg:text-[45px] text-[36px] text-[#141F59] whitespace-nowrap"
          variants={raiseFromBottom}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </motion.h2>
      </Link>
    </motion.div>
  );
};

const WorkSummary = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: -scrollDistance,
        ease: "none", // IMPORTANT for smooth scroll
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="lg:px-0 px-5 lg:pt-[150px] pt-10 pb-[80px] overflow-hidden bg-white font-bricolage">
      {/* Header */}
      <div className="flex items-end justify-between pb-10 lg:px-20 max-container">
        <h2 className="font-bold text-[#141F59] lg:text-[120px] text-[40px] lg:leading-[133px] leading-[40px]">
          Stories in <span className="multiverse-text">Action</span>
        </h2>

        <div className="hidden lg:block">
          <Link to="/work">
            <div className="w-[162px] h-[55px] view-all text-[19px] font-bold border rounded-[40px] mb-5 flex items-center justify-center">
              View All
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div
        ref={containerRef}
        className="relative hidden lg:block overflow-hidden p-10 pt-20"
      >
        <div
          ref={wrapperRef}
          className="flex gap-10"
        >
          {works.map((work, index) => (
            <Work key={index} {...work} />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mt-0 lg:hidden grid grid-cols-1">
        {works.slice(0, 4).map((work, index) => (
          <Work key={index} {...work} />
        ))}
      </div>

      <div className="lg:hidden block">
        <Link to="/work">
          <div className="w-full h-[55px] view-all text-[19px] font-bold border rounded-[40px] mt-10 flex items-center justify-center">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkSummary;
