import React from "react";
import { linkedin, instagram } from "../../assets/caseImages";
import { Link } from "react-router-dom";

const CopyrightFooter = () => {
  return (
    <div>
      {/* Copyright Section */}
      <div className="mt-0">
        <div className="h-0.5 bg-[#564f4f]"></div>
        <div className="text-[#DDDDDD] pt-3 lg:flex justify-between items-center">
          <div className="flex lg:flex-row flex-col lg:space-x-10 mb-4 lg:mb-0">
            <Link
              to="/terms-of-service"
              className="text-sm md:text-base mb-2 lg:mb-0"
            >
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="text-sm md:text-base">
              Privacy Policy
            </Link>
          </div>
          <div className="flex lg:flex-row flex-col lg:space-x-10">
            <Link
              to="/cancellation-and-refund-policy"
              className="text-sm md:text-base mb-2 lg:mb-0"
            >
              Cancellation & Refund Policy
            </Link>
            <Link
              to="/cookie-policy"
              className="text-sm md:text-base mb-2 lg:mb-0"
            >
              Cookie Policy
            </Link>
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Mélange Digital. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
