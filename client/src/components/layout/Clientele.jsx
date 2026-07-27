import React from "react";
// import { clients } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Client = ({ icon }) => {
  return (
    <div className="bg-[#fff] blocks shadow-lg">
      <div className="flex justify-center items-center h-28 md:h-36 w-40 md:w-40">
        <img
          src={icon}
          alt="clientele"
          className="w-24 md:w-24 h-auto invert"
        />
      </div>
    </div>
  );
};

const Clientele = ({ clients }) => {
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="font-bricolage pb-[85px]  partners-bg">
      <div className="">
        <div className="px-5  pt-20 pb-6 lg:px-20 max-container">
          <h2 className="text-[#fff] text-[40px]  lg:text-[48px] font-bold leading-[48px]">
          Featured Clientele
          </h2>
        </div>
        <div className="px-0 md:px-0  lg:px-0">
          <div className="marquee">
            <div className="marqueeGroup">
              {clients.slice(0, 10).map((el, index) => (
                <div key={index} className="imageGroup2">
                  <img src={el} className="imaGe3 " alt="images" />
                </div>
              ))}
            </div>
            <div className="marqueeGroup ">
              {clients.slice(0, 10).map((el, index) => (
                <div key={index} className="imageGroup2">
                  <img src={el} className="imaGe3 " alt="images" />
                </div>
              ))}
            </div>
          </div>
          <div className="marquee py-0">
            <div className="marqueeGroup2">
              {clients.slice(11, 23).map((el, index) => (
                <div key={index} className="imageGroup2">
                  <img src={el} className="imaGe3" alt="images" />
                </div>
              ))}
            </div>
            <div className="marqueeGroup2">
              {clients.slice(11, 23).map((el, index) => (
                <div key={index} className="imageGroup2">
                  <img src={el} className="imaGe3" alt="images" />
                </div>
              ))}
            </div>
          </div>
          <div className="marquee">
            <div className="marqueeGroup">
              {clients.slice(24).map((el, index) => (
                <div key={index} className="imageGroup2">
                  <img src={el} className="imaGe3" alt="images" />
                </div>
              ))}
            </div>
            <div className="marqueeGroup">
              {clients.slice(24).map((el, index) => (
                <div key={index} className="imageGroup2">
                  <img src={el} className="imaGe3 " alt="images" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientele;
