import React from "react";
import { mail, phone, location, cancelform } from "../../assets/images";
import Form from "./Form";
import MapButton from "./MapButton";

const Form3 = ({ onClose }) => {
  return (
    <div className="fixed  font-nunito bg-white left-[0%] z-50 right-[0%] top-[0%] h-screen overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-8 lg:top-[5%] right-[5%]"
      >
        <img src={cancelform} alt="Cancel" />
      </button>

      <div className="py-24 md:py-32 px-6 md:px-16 lg:px-28 lg:py-24 sm:py-16 flex flex-col min-h-screen md:flex-row justify-between items-center font-nunito">
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-left font-bold w-auto lg:w-[70%]">
            Let's connect to build something memorable for your{" "}
            <span className="multiverse-text font-extrabold text-2xl md:text-4xl">
              Brand!
            </span>
          </h1>
          <div className="mt-16 mb-6">
            <p className="flex items-center mt-3">
              <img src={mail} alt="Mail" className="w-6 h-6" />
              <span className="ml-3 font-semibold">
                <a href="mailto:hello@melangedigital.co">
                  hello@melangedigital.co
                </a>
              </span>
            </p>
            <p className="flex items-center my-4 md:my-2">
              <img src={phone} alt="Phone" className="w-6 h-6" />
              <span className="ml-3 font-semibold">
                <a href="tel:+919372567722">+91 93725 67722</a>
              </span>
            </p>
            <p className="flex items-center">
              <img src={location} alt="Location" className="w-6 h-6" />
              <span className="ml-3 text-left font-semibold">
                <a
                  href="https://www.google.com/maps/place/The+Trees/@19.0922401,72.9212571,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7c9e30858db:0x776c22b666023b89!8m2!3d19.0922401!4d72.9212571!16s%2Fg%2F11bx5682nq?entry=ttu"
                  target="_blank"
                >
                  L-302, The Trees Godrej, Vikhroli East Mumbai-400079
                </a>
              </span>
            </p>
          </div>
          <div className="mt-6">
            <MapButton />
          </div>
        </div>
        <div className="h-0.5 lg:h-[30rem] w-[20rem] lg:w-0.5 bg-black"></div>
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Form3;
