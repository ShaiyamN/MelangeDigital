import React, { useState, useEffect } from "react";
import { rightArrow } from "../../../assets/images";
import { Link } from "react-router-dom";

const ReadMore = () => {
  return (
    <div className="my-3 -ml-3">
      <div>
        <button className="expand-button font-nunito">
          <span className="button-text font-bold text-[#0f0330] text-[16px] md:text-[18px]">
            Read more
          </span>
          <span className="arrow-container">
            <img
              src={rightArrow}
              alt="Arrow"
              className="w-5  h-6 mt-0.5 mr-0.5 arrow-image"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
