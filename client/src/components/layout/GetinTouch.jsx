import React, { useState } from "react";
import { rightArrow } from "../../assets/images";
import Form2 from "./Form2";

const GetinTouch = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="my-3">
      <button className="expand-button font-nunito" onClick={handleOpenPopup}>
        <span className="button-text font-bold text-[#0f0330] text-[16px] md:text-[18px]">
          Get in touch
        </span>
        <span className="arrow-container">
          <img
            src={rightArrow}
            alt="Arrow"
            className="w-5  h-6 mt-0.5 mr-0.5 arrow-image"
          />
        </span>
      </button>
      {showPopup && <Form2 onClose={handleClosePopup} />}
    </div>
  );
};

export default GetinTouch;
