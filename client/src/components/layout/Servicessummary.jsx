import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  arrow,
} from "../../assets/images";

const ServiceSummary = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  // Define linksData before useState
  const linksData = [
    {
      id: 0,
      label: "Brand Strategy",
      para: "We set the foundation for your brand's marketing right with extensive brand audit, market research & competitor analysis. We curate custom branding strategy to drive business growth & beat competition.",
      imageSrc: image1,
      path: "/services/brand-strategy",
    },
    {
      id: 1,
      label: "Content Marketing",
      para: "Content is the king! And we make sure you rule the content marketing space with articles, social media posts & influencer collaborations that connect & convert.",
      imageSrc: image2,
      path: "/services/content-marketing",
    },
    {
      id: 2,
      label: "E-commerce Management",
      para: "As your e-commerce agency, we utilize platform & product strategies, optimize listings, leverage reviews, and analyze data to drive impressive ROI in a competitive marketplace.",
      imageSrc: image3,
      path: "/services/ecommerce",
    },
    {
      id: 3,
      label: "Design Solutions",
      para: "Aesthetics rule the current world! Through our design services, we evoke emotions, ensuring your visual branding is on point, relevant, consistent, and leaves a lasting impact.",
      imageSrc: image4,
      path: "/services/design-solutions",
    },
    {
      id: 4,
      label: "Performance Marketing",
      para: "As your performance marketing agency, we rigorously analyze data, strategically allocate your budget, and employ goal-driven ad structures to deliver measurable results through meticulously planned and optimized campaigns.",
      imageSrc: image5,
      path: "/services/performance-marketing",
    },
    {
      id: 5,
      label: "Website Development & SEO",
      para: "Crafting sharp and efficient websites through SEO copywriting and sleek UI/UX design, we ensure full functionality with integrated SEO analytics for optimized user experiences.",
      imageSrc: image6,
      path: "/services/website-development-seo",
    },
  ];

  // Set initial state to the first item in the list
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [bgImage, setBgImage] = useState(linksData[0].imageSrc);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
    setBgImage(linksData[index].imageSrc);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null); // Reset only when no hovering over any item
  };

  return (
    <div
      className={`relative min-h-[80%] bg-cover bg-center py-4 font-nunito max-h-[80%] overflow-hidden`}
      style={{
        backgroundImage: isMobile ? "none" : `url(${bgImage})`,
        backgroundColor: isMobile ? "#1a1a1a" : "transparent",
      }}
    >
      <div className="text-white z-9 relative pt-14 lg:px-24 max-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-2">
          A Digital Marketing Agency For Today
        </h2>
        <p className="font-light text-base md:mb-2 hidden md:text-lg">
          Just like a multiverse where different worlds collide and create
          something extraordinary.
        </p>
        <p className="font-light text-base md:text-lg w-[95%] hidden sm:w-auto">
          Melange brings the diverse realms of marketing to create something
          bigger and better for your brands.
        </p>
      </div>

      <div className="flex flex-col mt-4 md:mt-2 2xl:mt-10 max-container">
        <ul className="md:mr-8 z-0 lg:px-24 ">
          {linksData.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer mt-5 mb-9 text-[#686868] font-bold text-xl md:text-xl leading-10"
              onMouseOver={() => handleMouseOver(link.id)}
              // onMouseOut={handleMouseOut}
            >
              <Link to={link.path}>
                <span
                  className={`flex items-center ${
                    hoveredIndex === link.id ? "text-[#fff]" : "text-[#686868]"
                  }`}
                >
                  {link.label}
                  {hoveredIndex === link.id && (
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="relative top-3 -right-8 transform -translate-y-1/2 filter brightness-0 invert sepia saturate-10000 hue-rotate-180"
                      style={{ width: "40px", height: "20px" }}
                    />
                  )}
                </span>
              </Link>

              {hoveredIndex === link.id && !isMobile && (
                <motion.p
                  className={`text-[17px] font-normal text-white mt-3 ${
                    link.id === 3 || link.id === 2 ? "w-[39%]" : "w-[40%]"
                  }`}
                  initial={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.para}
                </motion.p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSummary;
