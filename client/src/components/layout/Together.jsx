import React from "react";
import ContactButton from "./ContactButton";

const Together = () => {
  return (
    <div className="bg-[#1a1a1a] relative py-32  font-nunito h-[100%] pb-6">
      <div className="absolute w-[90%] -mt-[16rem] ml-5 md:ml-10 lg:ml-16 z-0 py-24 shadow-md together mx-2 text-center">
        <div className="flex flex-col items-center justify-end">
          <h2 className="font-extrabold text-2xl md:text-3xl lg:ml-[700px] z-10 opacity-100 multiverse-text">
            Let's work together!
          </h2>
        </div>
      </div>
      <div className="absolute top-0 z-50 left-[30%] lg:ml-[550px] 2xl:ml-[600px]">
        <ContactButton />
      </div>
    </div>
  );
};

export default Together;
