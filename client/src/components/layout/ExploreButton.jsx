import React from "react";
import { rightArrow } from "../../assets/images";

const ExploreButton = () => {
  return (
    <div className="my-3">
      <button className="explore-button  first-letter:font-raleway flex items-center ">
        <span className="explore-text font-medium text-[#ffffff] ">
          Explore More
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
  );
};

export default ExploreButton;
