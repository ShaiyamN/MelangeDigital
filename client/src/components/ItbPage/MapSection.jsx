import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../layout";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  ai,
  explore,
  head1,
  head2,
  Img5k,
  lable1a,
  lable2a,
  lable2b,
  lable3a,
  lable3b,
  lable4a,
  lable4b,
  lable5a,
  whatWePack,
  ani1,
  ani2,
  ani3,
  ani4,
  inf1,
  inf4,
  inf3,
  inf2,
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo5,
  logo5Png,
  logo6,
  logo7,
  logo8,
  logo9,
  map,
  mapPointer,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9,
  cl10,
  cl11,
  cl12,
  cl13,
  cl14,
  cl15,
  cl16,
} from "../../assets/itp";

const MapSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const isInViewClinetLogo = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const collaborations = [
    {
      title: "Cultural Collaborations",
      logos: [
        "/images/row1-logo1.png",
        "/images/row1-logo2.png",
        "/images/row1-logo3.png",
      ],
      moreText: "...and more",
    },
    {
      title: "Music & Event Partnerships",
      logos: [
        "/images/row2-logo1.png",
        "/images/row2-logo2.png",
        "/images/row2-logo3.png",
        "/images/row2-logo4.png",
      ],
    },
    {
      title: "Tech & Platform Integrations",
      logos: [
        "/images/row3-logo1.png",
        "/images/row3-logo2.png",
        "/images/row3-logo3.png",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.4 } // Triggers when 30% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <section className="w-full lg:px-20 lg:py-12 py-8 md:pt-20 font-bricolage max-container">
      <h2 className="text-[#791FF0] lg:text-[50px] text-[30px] lg:px-0 px-5 lg:leading-[60px] leading-[40px] lg:mb-0 mb-20">
        OUR GLOBAL <br />
        FOOTPRINT
      </h2>

      <div className="relative">
        <img src={map} alt="" />

        <div ref={ref} className="absolute lg:-top-[35%] -top-[55%] left-[45%]">
          <p className="lg:text-[16px] text-[12px]">London</p>
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "250px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:block hidden"
          />
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "100px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          />
        </div>

        <div ref={ref} className="absolute lg:-top-[15%] -top-[25%] lg:left-[65%] left-[63%]">
          <p className="lg:text-[16px] text-[12px]">Sharjah</p>
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "250px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:h-[250px] h-[100px] lg:block hidden"
          />
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "100px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          />
        </div>

        <div ref={ref} className="absolute -top-[10%] left-[70%]">
          <p className="lg:text-[16px] text-[12px]">Goa, Mumbai & Delhi</p>
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "250px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:block hidden"
          />
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "100px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          />
        </div>

        <div ref={ref} className="absolute lg:top-[0%] top-[5%] lg:right-[12%] right-[2%]">
          <p className="lg:text-[16px] text-[12px]">Singapore</p>
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "250px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:block hidden"
          />
          <motion.img
            src={mapPointer}
            alt=""
            initial={{ height: 0 }}
            animate={{ height: isInView ? "100px" : "0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
