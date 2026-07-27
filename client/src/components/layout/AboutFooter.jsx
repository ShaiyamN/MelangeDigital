import React from "react";
import { melangeLogo2, certificate1, certificate2 } from "../../assets/images";

import { linkedin, instagram } from "../../assets/caseImages";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] lg:px-8 overflow-x-hidden text-white font-nunito">
      <div className="flex justify-between flex-col lg:flex-row text-white px-0 lg:px-14 ml-6 md:ml-0">
        <div className="flex flex-col justify-between">
          <Link to="/">
            <img
              src={melangeLogo2}
              alt="melange digital"
              className="mb-6 md:mb-0 w-24 h-24 lg:w-auto lg:h-auto"
            />
          </Link>
          <div className=" flex flex-row lg:flex-col mt-2 items-center lg:ml-0">
            <img
              src={certificate1}
              alt="certificate 1"
              className="mb-2 mt-0 -ml-2 "
            />
            <img
              src={certificate2}
              alt="certificate 2"
              className=" ml-5  lg:-ml-1 "
            />
          </div>
        </div>
        <div className="flex  translate-x-0 lg:translate-x-[43%] items-start flex-row mb-6 lg:mb-0 lg:flex-col">
          <div className="">
            <h2 className="font-bold text-lg md:text-xl mb-2 md:mb-0 ">
              Company
            </h2>
            <div className="flex flex-col ml-1 ">
              <Link to="/about" className=" text-[18px]">
                About Us
              </Link>
              <Link to="/work" className="text-[18px]">
                Our Work
              </Link>
              <Link to="/blogs" className="text-[18px]">
                Blogs
              </Link>
              <Link to="/careers" className="text-[18px]">
                Careers
              </Link>
            </div>
          </div>

          <div className="lg:mt-10 mb-6 lg:mb-0 ml-32 lg:ml-1">
            <h2 className="font-bold text-lg md:text-xl ">Follow us</h2>
            <div className="flex mt-1">
              <a
                href="https://www.linkedin.com/company/melangedigital/"
                className=" "
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/melangedigital.in/"
                className="ml-3 "
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="translate-x-0 mb-6 lg:mb-0 lg:translate-x-[58%]">
          <h2 className="font-bold text-lg md:text-xl mb-2 md:mb-0 ">
            Our Services
          </h2>
          <div className="flex flex-col ml-1 ">
            <Link to="/services/brand-strategy" className="mb-1 text-[18px]">
              Brand Strategy
            </Link>
            <Link to="/services/content-marketing" className="mb-1 text-[18px]">
              Content Marketing
            </Link>
            <Link to="/services/ecommerce" className="mb-1 text-[18px]">
              E-commerce Management
            </Link>
            <Link to="/services/design-solutions" className="mb-1 text-[18px]">
              Design Solutions
            </Link>
            <Link
              to="/services/performance-marketing"
              className="mb-1 text-[18px]"
            >
              Performance Marketing
            </Link>
            <Link
              to="/services/website-development-seo"
              className="mb-1 text-[18px]"
            >
              Website Development & SEO
            </Link>
          </div>
        </div>

        <div className="flex translate-x-0 lg:translate-x-[42%] w-[39%]  flex-col">
          <div className="mb-6 ">
            <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
              Call Us
            </h2>
            <a
              href="tel:+919372567722"
              className="text-base md:text-lg mb-2 md:mb-0 md:mt-2"
            >
              +91 9372567722
            </a>
          </div>
          <div className="mb-2 md:mb-0 ml-0">
            <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
              Email Us
            </h2>
            <a
              href="mailto:hello@melangedigital.co"
              className="text-base mt-2 underline md:text-lg"
            >
              hello@melangedigital.co
            </a>
          </div>
          <div className="my-4">
            <h2 className="font-bold text-lg md:text-xl ">Address</h2>
            <p className="w-64 md:w-full mt-2 text-base md:text-lg lg:transform lg:w-[60%]">
              <a
                href="https://www.google.com/maps/place/The+Trees/@19.0922452,72.9186822,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7c9e30858db:0x776c22b666023b89!8m2!3d19.0922401!4d72.9212571!16s%2Fg%2F11bx5682nq?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                L-302, The Trees Godrej, Vikhroli East, Mumbai - 400079
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Down links  */}
      <div className="mx-4 md:mx-12 h-0.5 bg-[#564f4f]"></div>
      <div className="mx-5 md:mx-14 text-white flex flex-col lg:flex-row justify-start lg:justify-end items-start lg:items-center lg:space-x-8 py-5 font-nunito  lg:text-right bg-[#1A1A1A]">
        <div className="lg:space-x-8 space-y-2 mb-2 lg:mb-0 lg:space-y-0 flex flex-col lg:flex-row">
          <Link to="/terms-of-service" className="text-sm md:text-base">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="text-sm md:text-base">
            Privacy Policy
          </Link>
          <Link to="/cancellation-and-refund-policy">
            Cancellation & Refund Policy
          </Link>
          <Link to="/cookie-policy" className="text-sm md:text-base">
            Cookie Policy
          </Link>
        </div>
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mélange Digital. All rights
          reserved.
        </p>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 767px) {
          .pt-44 {
            padding-top: 2rem;
          }
          .md:px-20 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .md:flex {
            display: block;
          }
          .md:items-center {
            align-items: start;
          }
          .md:flex-row {
            flex-direction: column;
          }
          .lg:-mt-[40%] {
            margin-top: -40%;
          }
          .lg:ml-32 {
            margin-left: 2rem;
          }
          .quick-links {
            transform: none;
            translate-x: 0;
            margin-top: 2rem;
          }
          .lg:translate-x-[32%] {
            transform: none;
            translate-x: 0;
          }
          .lg:pl-36 {
            padding-left: 2.25rem;
          }
          .md:w-1/2 {
            width: 100%;
          }
          .lg:items-end {
            align-items: start;
          }
          .lg:w-auto {
            width: 100%;
          }
          .lg:transform {
            transform: none;
          }
          .lg:translate-x-[-58%] {
            transform: none;
            translate-x: 0;
          }
          .lg:translate-x-[-16%] {
            transform: none;
            translate-x: 0;
          }
          .lg:translate-x-[-45%] {
            transform: none;
            translate-x: 0;
          }
          .lg:ml-[47%] {
            margin-left: 47%;
          }
          .lg:transform {
            transform: none;
          }
          .lg:translate-x-[80%] {
            transform: none;
            translate-x: 0;
          }
          .lg:w-[60%] {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
