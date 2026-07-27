import React from "react";
import { upLeftArr } from "../../assets/images";

const AboutNews = () => {
  return (
    <div className="font-nunito pb-20 px-6 md:px-16 lg:px-24">
      <h2 className="font-bold text-3xl mt-[50px] lg:mt-[100px] mb-12 md:text-4xl lg:text-[40px]">
        News
      </h2>
      <div className="">
        <div className="flex justify-between border-b border-[#1a1a1a] pb-5 newsSection cursor-pointer opacity-90 hover:opacity-100">
          <h3 className="text-[24px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra felis dui.
          </h3>
          <img src={upLeftArr} alt="" className="newsArr" />
        </div>
        <div className="flex justify-between border-b border-[#1a1a1a] pb-5 newsSection cursor-pointer opacity-90 hover:opacity-100 mt-10">
          <h3 className="text-[24px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra felis dui.
          </h3>
          <img src={upLeftArr} alt="" className="newsArr" />
        </div>
        <div className="flex justify-between border-b border-[#1a1a1a] pb-5 newsSection cursor-pointer opacity-90 hover:opacity-100 mt-10">
          <h3 className="text-[24px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra felis dui.
          </h3>
          <img src={upLeftArr} alt="" className="newsArr" />
        </div>
        <div className="flex justify-between border-b border-[#1a1a1a] pb-5 newsSection cursor-pointer opacity-90 hover:opacity-100 mt-10">
          <h3 className="text-[24px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra felis dui.
          </h3>
          <img src={upLeftArr} alt="" className="newsArr" />
        </div>
        <div className="flex justify-between border-b border-[#1a1a1a] pb-5 newsSection cursor-pointer opacity-90 hover:opacity-100 mt-10">
          <h3 className="text-[24px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Pharetra felis dui.
          </h3>
          <img src={upLeftArr} alt="" className="newsArr" />
        </div>
      </div>
    </div>
  );
};

export default AboutNews;
