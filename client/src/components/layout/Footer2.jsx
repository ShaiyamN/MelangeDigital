import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { linkedin, instagram } from "../../assets/caseImages";

const Footer2 = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const serviceLinks = [
    { to: "/services/brand-strategy", text: "Brand Strategy & Planning" },
    { to: "/services/influencer-marketing", text: "Influencer Marketing" },
    {
      to: "/services/immersive-brand-storytelling",
      text: "Immersive brand storytelling",
    },
    { to: "/services/design-and-development", text: "Design & Development" },
    {
      to: "/services/content-strategy-and-production",
      text: "Content Strategy & Production",
    },
    { to: "/services/pr-and-outreach", text: "PR, IPs & Outreach" },
  ];

  const companyLinks = [
    { to: "/about", text: "About Us" },
    { to: "/work", text: "Our Work" },
    { to: "/blogs", text: "Blogs" },
    { to: "/careers", text: "Careers" },
  ];

  // const locations = [
  //   {
  //     title: "Mumbai, India",
  //     address: "302 The Trees Godrej Vikhroli East Mumbai 400079",
  //     mapLink:
  //       "https://www.google.co.uk/maps/place/The+Trees,+Godrej+Properties,+Mumbai/@19.0922452,72.9186822,17z",
  //   },
  //   {
  //     title: "Delhi, India",
  //     address: "B54, Block B, Sector 51, Noida, Uttar Pradesh 201303",
  //     mapLink:
  //       "https://www.google.co.uk/maps/place/B-54,+Block+B,+Sector+51,+Noida",
  //   },
  //   {
  //     title: "London",
  //     address: "22-6 Millennium Drive, London, E14 3GF.",
  //     mapLink:
  //       "https://www.google.co.uk/maps/place/6+Millennium+Dr,+London+E14+3GF",
  //   },
  //   {
  //     title: "Singapore",
  //     address: "380 Jln Besar, Singapore 209000",
  //     mapLink:
  //       "https://www.google.co.uk/maps/place/380+Jln+Besar,+Singapore+209000",
  //   },
  //   {
  //     title: "Dubai",
  //     address:
  //       "Sharjah Media City, 201, Al Messaned - Al Mitsannid - Sharjah - United Arab Emirates",
  //     mapLink: "https://www.google.co.uk/maps/place/Sharjah+Media+City",
  //   },
  // ];

  // Split "Let's Talk" into individual characters
  const letsTalkText = "Let's Talk".split("");

  return (
    <div className="bg-[#1a1a1a] text-white font-bricolage ">
      <footer className="max-container">
        {/* Let's Talk Section with Character Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="relative"
        >
          <div className="lg:px-20 px-5 py-10">
            <div className="lg:flex justify-between items-end">
              <motion.div
                variants={staggerChildren}
                className="flex flex-wrap overflow-hidden"
              >
                {letsTalkText.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    className="text-white text-[73px] md:text-[224px] font-normal leading-none"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="contact-btn-footer mb-10 lg:mt-0 mt-7 w-[177px] h-[56px] flex items-center justify-center rounded-2xl cursor-pointer bg-[#ffffff]"
                  >
                    <span className="font-medium text-[#1a1a1a] text-[17px]">
                      Get in Touch
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer Content with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={staggerChildren}
          className="footer-items max-w-[1440px] mx-auto lg:px-20 px-5 pt-0 w-full flex-grow bg-[#1a1a1a]"
        >
          <motion.div className="w-[100%] lg:flex block justify-between">
            {/* Social Links Section */}
            <div className="flex mt-7 justify-between lg:mt-0 pb-10  w-full">
              <div className="w-[100%] lg:w-[100%] lg:mt-0 mb-6 lg:mb-0 lg:ml-0">
                <h2 className="font-normal text-lg md:text-[24px]  ">
                  Follow us
                </h2>
                <div className="flex mt-1">
                  <a
                    href="https://www.linkedin.com/company/melangedigital/"
                    className=" "
                    target="_blank"
                  >
                    <img src={linkedin} alt="linkedin" className="w-[20px] lg:w-[30px]" />
                  </a>
                  <a
                    href="https://www.instagram.com/melangedigital.in/"
                    className="ml-3 "
                    target="_blank"
                  >
                    <img src={instagram} alt="instagram" className="w-[20px] lg:w-[30px]" />
                  </a>
                </div>
              </div>
              <div className="w-[40%] lg:w-[15%] ">
                <h2 className="font-normal text-lg md:text-[24px] mb-0 md:mb-0">
                  Email Us
                </h2>
                <a
                  href="mailto:hello@melangedigital.co"
                  className="text-base whitespace-nowrap md:text-lg mb-2 md:mb-0 md:mt-2 text-[#DDDDDD]"
                >
                  careers@melangedigital.co
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer2;
