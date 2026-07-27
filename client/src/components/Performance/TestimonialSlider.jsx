import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  commas,
  Part_bg,
  star,
  testBg,
  testBgM,
} from "../../assets/performancePage";

const testimonials = [
  {
    name: "Raspreet Sakaria",
    role: "Senior Manager - Make My Trip Holidays",
    feedback:
      "Partnering with Melange was a game-changer! Their marketing and social media strategy helped us achieve 1.3 Crores in revenue for MakeMyTrip Holidays. The team's dedication and creativity made all the difference!",
  },
  {
    name: "Jitendra Joshi",
    role: "Founder & CEO- Dhruvak",
    feedback:
      "In three months, our traffic tripled, and subscriptions doubled, thanks to their strategy and performance marketing. Their social media and web expertise felt like an extension of our team.",
  },
  {
    name: "Vasundhara Gupta",
    role: "Head - Costa Cruises",
    feedback:
      "Their data-driven campaigns helped us exceed INR 3 Crores in sales. From strategy to web development and engaging content, they truly made a difference. We felt supported throughout, and their creativity brought our vision to life!",
  },
  {
    name: "Vidya Pandit",
    role: "Co-founder- Kalon Organics",
    feedback:
      "Their expert social media tactics, stunning product photography, and seamless website development perfectly captured our vision. We felt like a priority every step of the way!",
  },
];

const TestimonialSlider = () => {
  const scrollRef = useRef(null);

  const scrollByAmount = 320; // Adjust depending on card width + spacing

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="font-bricolage relative mb-60">
      <img src={testBg} alt="" className="w-full lg:block hidden" />
      <img src={testBgM} alt="" className="w-full lg:hidden h-[400px]" />

      {/* Absolute container */}
      <div className="absolute lg:top-20 top-10 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-7xl px-0 md:px-12">
        {/* Heading and Arrows */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-white lg:text-3xl text-[24px] lg:font-bold lg:text-center md:text-left mb-6 md:mb-0 px-5 lg:px-0">
            Real Brands. Real Impact.
            <br />
            Real Testimonials
          </h2>

          {/* Arrow Controls */}
          <div className="flex gap-4 justify-end md:justify-start px-5 lg:px-0">
            <button
              onClick={handleScrollLeft}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#5B2EFF] hover:bg-[#4723c2] flex items-center justify-center text-white transition-all duration-300"
            >
              <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleScrollRight}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#5B2EFF] hover:bg-[#4723c2] flex items-center justify-center text-white transition-all duration-300"
            >
              <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`snap-start w-[280px] shrink-0 bg-white p-6 rounded-xl shadow-xl outline-slate-800 ${
                i !== testimonials.length - 1 ? "mr-6" : "" // Only add margin-right if NOT last card
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card content */}
              <div className="flex items-center justify-between mb-7">
                {/*<div className="w-[50px] h-[50px] bg-gray-500 rounded-full"></div>*/}
                <img src={commas} alt="" className="w-[80px]" />
              </div>
              <div className="flex gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <img src={star} alt="" key={idx} className="w-3" />
                  ))}
              </div>
              <p className="text-sm text-gray-700 mb-6">{t.feedback}</p>
              <div className="font-semibold text-gray-800">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
