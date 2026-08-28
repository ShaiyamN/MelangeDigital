import React from "react";
import { mail, phone, location } from "../../assets/images";
import Form from "./Form";
import MapButton from "./MapButton";

const ContactForm = () => {
  return (
    <div className="pb-24 md:pb-32 px-5 md:px-16 lg:px-20 lg:pb-24  sm:pb-16 flex flex-col md:flex-row justify-between items-start font-nunito">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold w-auto lg:w-[70%]">
          Let's connect to build something memorable for your{" "}
          <span className="multiverse-text font-extrabold text-2xl md:text-4xl">
            Brand!
          </span>
        </h1>
        <div className="mt-16 mb-6">
          <p className="flex items-center mt-3">
            <img src={mail} alt="mail" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a href="mailto:hello@melangedigital.co">
                hello@melangedigital.co
              </a>
            </span>
          </p>
          <p className="flex items-center my-4 md:my-2">
            <img src={phone} alt="phone" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a href="tel:+919372567722">+91 93725 67722</a>
            </span>
          </p>
          <p className="flex items-center">
            <img src={location} alt="location" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a
                href="https://www.google.com/maps/place/The+Trees/@19.0922452,72.9186822,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7c9e30858db:0x776c22b666023b89!8m2!3d19.0922401!4d72.9212571!16s%2Fg%2F11bx5682nq?entry=ttu"
                target="_blank"
              >
                L-302, The Trees Godrej, Vikhroli East Mumbai-400079
              </a>
            </span>
          </p>
          <p className="font-semibold mt-5 ml-1 ">
            <a
              className="hover:underline"
              href="https://www.designrush.com/agency/profile/melange-digital"
              target="_blank"
            >
              View Our Profile on Designrush
            </a>
          </p>
        </div>
        <div className="mt-6">
          <MapButton />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
