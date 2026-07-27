// CTAButton.js
import React, { useState } from "react";
import { rightArrow } from "../../assets/images";
import Form2 from "./Form2";

const CTAButton = ({ buttonName }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed bottom-10  z-10 right-3 lg:right-28">
      <button
        className="submit-bg text-[#fff] shadow-2xl hover:text-black font-nunito px-5 py-4 rounded-[50px] 
        "
        onClick={handleOpenPopup}
      >
        <span className=" font-bold text-[16px] md:text-[18px]">
          {buttonName}
        </span>
      </button>
      {showPopup && <Form2 onClose={handleClosePopup} />}
    </div>
  );
};

export default CTAButton;
