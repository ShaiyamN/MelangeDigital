import React, { useState } from "react";
import { ani1, ani2, ani3, ani4 } from "../../assets/itp";

const ExpandSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      title: "Data-Backed Insights",
      description:
        "Data-backed insights on consumer psychology, sales behavior & audience interests.",
      image: ani1,
    },
    {
      title: "Social Media",
      description:
        "Social media listening, cultural trend decoding & expert insights",
      image: ani2,
    },
    {
      title: "Category Analysis",
      description:
        "Category analysis using cutting-edge research & credible reports",
      image: ani3,
    },
    {
      title: "Positioning & Creative Strategy",
      description:
        "Differentiated positioning & creative strategy tailored to industry trends",
      image: ani4,
    },
  ];

  return (
    <section className="lg:px-20 px-5 font-bricolage lg:pt-20 pt-10 max-container">
      <div className="lg:flex gap-4 justify-between flex-col lg:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`mb-4 lg:mb-0 relative overflow-hidden transition-all duration-500 ease-in-out rounded-2xl cursor-pointer 
              ${activeIndex === index ? "lg:w-[543px]" : "lg:w-[310px]"}
              w-full sm:max-w-full lg:h-[400px] h-[300px]`} // Full width on mobile
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 ${
                activeIndex === index ? "bg-black/70" : "bg-black/50"
              } transition-all duration-300`}
            />
            <div
              className={`absolute lg:block hidden ${
                activeIndex === index ? "top-5" : "bottom-5"
              }  left-5 text-white`}
            >
              <h3 className="text-[25px] leading-[32px] font-bold">
                {card.title}
              </h3>
            </div>
            <div className={`absolute lg:hidden top-5 left-5 text-white`}>
              <h3 className="text-[25px] leading-[32px] lg:font-bold font-semibold w-[80%] lg:w-[100%]">
                {card.title}
              </h3>
            </div>
            <div className="absolute bottom-4 left-4 text-white lg:block hidden">
              {activeIndex === index && (
                <p className="text-sm mt-2">{card.description}</p>
              )}
            </div>

            <div className="absolute bottom-4 px-4 text-white lg:hidden block">
            <p className="text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpandSec;
