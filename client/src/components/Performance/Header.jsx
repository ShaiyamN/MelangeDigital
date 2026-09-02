import React from "react";
import {
  grpPics,
  header1,
  header2,
  VectorSpread,
} from "../../assets/performancePage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:px-20 px-5 pt-44 relative text-white overflow-hidden font-bricolage max-container">
      <img src={header1} alt="" className="lg:block hidden" />
      <img src={header2} alt="" className="lg:hidden w-full" />

      <div className="absolute lg:left-[120px] top-[16rem] ">
        <p className="font-bricolage font-bold text-display px-5 lg:px-0">
          We help Brands add ₹600M+ <br className="lg:block hidden" /> in Annual
          Revenue through <br className="lg:block hidden" /> Ads that Perform &{" "}
          <br className="lg:block hidden" /> Creatives that Convert
        </p>

        <div className="hidden gap-x-2 absolute lg:left-[555px] lg:top-[12rem] top-[14rem] left-5">
          <img src={grpPics} alt="" className="w-[130px] h-[50px]" />
          <div className="">
            <p className="text-[32px] leading-[32px] font-semibold">205+</p>
            <p className="text-[13px] whitespace-nowrap">Expert Team</p>
          </div>
        </div>

        <div className="lg:pt-[120px] pt-[200px] px-5 lg:px-5">
          <p className="whitespace-normal text-[13px] lg:text-[18px]">
            We’re a new-age digital marketing & creative performance agency for
            growth-focused brands. <br className="lg:block hidden" /> Our
            campaigns have helped clients generate over ₹120M in online revenue.
          </p>

          <div className="flex items-center mt-7 z-50">
            <span className="bg-white rounded-full h-[40px] w-[140px] text-[10px] flex items-center justify-center py-2 text-black">
              See How We Do It!
            </span>
            <Link to="/work">
              <button className="cursor-pointer   w-[40px] h-[40px] flex items-center justify-center gap-0 bg-white hover:bg-white/80 text-black font-semibold rounded-full px-0 py-0 transition-colors duration-300 group mt-0">
                <FaArrowRight size={10} />
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="">
          <img
            src={VectorSpread}
            alt=""
            className="absolute -left-[40px] -top-[100px] w-[700px] "
          />
        </div>*/}
      </div>
    </div>
  );
};

export default Header;
