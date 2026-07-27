import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Import motion for animations
import {
  creativity,
  zoom,
  rotatearrow,
  book,
  people,
  computer,
  nums,
  techHand,
  time,
} from "../../assets/images";

const AboutHeadNew = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="pb-0 md:pb-24 font-bricolage max-container">
      <div className="px-5 lg:px-20 lg:flex ">
        <div className="w-auto  lg:px-0 lg:w-[50%]">
          <h1 className="text-[44px] leading-[52px] md:text-[68px] font-bold lg:leading-[76px] multiverse-text">
            Your Anchor In A <br />
            Sea Of Change
          </h1>
        </div>
        <div className="w-auto  lg:px-4 lg:w-[50%] lg:mt-0 mt-6">
          <p className="text-[19px] leading-[26px] md:text-[20px] lg:leading-[30px] text-[#1A1A1A]">
            The digital world is a sea of ever-shifting trends, platforms, and
            algorithms. It’s tough to keep up. So let us guide you through it.{" "}
            <br />
            With a deep understanding of human behavior, AI-powered insights,
            and data-driven strategies, we craft emotionally resonant campaigns
            that cut through the noise and deliver real results. <br />
            You’ve put time, effort, and resources into building your brand.
            Now, it’s time to take it further. <br /> 
            Don’t stress. We’ve got your back.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-20 lg:mt-20 lg:py-0 py-20 hidden">
        <div className="">
          <ReactPlayer
            url="https://youtu.be/xmoZepORbQM?feature=shared"
            controls
            width="100%"
            height="535px"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeadNew;
