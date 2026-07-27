import React from "react";
import { Link } from "react-router-dom";
import { rightArrow } from "../../assets/images";

const ViewAll = () => {
  return (
    <div className="viewAll-button">
      <Link to="/work">
        <button className="view-button font-nunito">
          <span className="viewbutton-text font-bold text-[#0f0330] text-[18px]">
            View All
          </span>
          <span className="arrow-container">
            <img
              src={rightArrow}
              alt="Arrow"
              className="w-5  h-6 mt-0.5 mr-0.5 arrow-image"
            />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ViewAll;
