import React from "react";

import { Link } from "react-router-dom";
import { labels } from "../../constants";
import { servicearrow, whiteArrw } from "../../assets/images";

const Labels = ({ title, description, links, path }) => {
  return (
    <div className="my-10 lg:mt-24  ">
      <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center">
      
          <Link to={path}>
            <h2 className="text-bg whitespace-nowrap font-extrabold text-[1.3rem] label-heading lg:text-3xl mb-3 flex cursor-pointer items-center border-none lg:mb-3">
              {title}
            </h2>
          </Link>
      

        <Link to={path}>
          <div className="lg:flex hidden items-center space-x-3 ">
            <p className="text-[20px] expBtn">Explore more</p>
            <div className="gradient-circle">
              <img src={whiteArrw} alt="" className="w-4" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <p className={`text-[15px] lg:text-xl mb-8 mt-4`}>{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 font-extrabold">
        {Object.values(links).map((link, index) => (
          <p
            key={index}
            className={`flex text-[16px] md:text-[18px] w-auto items-center  `}
          >
            <Link to="" className="whitespace-nowrap cursor-default">
              {link.text}
            </Link>
            {/* <span className="cursor-pointer hover:ml-3">
              <img
                src={servicearrow}
                alt="service"
                className="ml-3 w-3 h-3 fill service-arrow"
              />
            </span>*/}
          </p>
        ))}
      </div>

      <Link to={path}>
        <div className="flex items-center space-x-3 lg:hidden pt-[30px]">
          <p className="text-[16px] expBtn">Explore more</p>
          <div className="gradient-circle">
            <img src={whiteArrw} alt="" className="w-4" />
          </div>
        </div>
      </Link>
    </div>
  );
};

const ServiceLabeling = () => {
  return (
    <div
      className={`font-bricolage px-5  pb-0 lg:pb-14 lg:pt-[140px] lg:px-20 transition-opacity duration-1000 max-container`}
      // Set opacity based on inView status
    >
      <h2 className={`font-bold text-2xl md:text-3xl lg:text-4xl lg:pb-5`}>
        What We Offer
      </h2>
      <div className="space-y-20 md:space-y-8">
        {labels.map((label, index) => {
          return (
            <div className="lg:-mt-16">
              <Labels key={index} {...label} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceLabeling;
