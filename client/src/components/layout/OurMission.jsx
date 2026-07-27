import React from "react";
import { ourMission } from "../../assets/newImages";

const OurMission = () => {
  return (
    <div className="lg:px-20 px-5 lg:pb-[20px] pb-[80px] lg:pt-10 pt-20 font-bricolage max-container">
      <div className="flex lg:flex-row flex-col-reverse item-center justify-center lg:space-x-20">
        <div className="lg:w-[40%] lg:mt-0 mt-10">
          <img src={ourMission} alt="" />
        </div>
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h2 className="font-bold lg:text-[48px] text-[40px] lg:leading-[57px] leading-[48px] ">
            Our <span className="text-[#D940FF]">Mission</span> &{" "}
            <span className="text-[#3858FF]">Vision</span>{" "}
          </h2>

          <p className="lg:text-[19px] text-[16px] lg:leading-[26px] leading-[26px] mt-6">
            We're here to fuel digital transformation through creativity and
            innovation. By focusing on brands and startups, we help them seize
            new opportunities, drive growth, and make their mark in the digital
            world.
            <br /> <div className="h-2"></div>
            Our vision? To be the digital partner that empowers businesses to
            thrive, while also promoting sustainability and long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
