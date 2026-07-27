import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { gsap } from "gsap";
import { arrowblack, qts } from "../../assets/images";
import { Link } from "react-router-dom";
import {
  mmtTest,
  costaTest,
  kalonTest,
  duvonTest,
  dhruvakTest,
  blkArr,
} from "../../assets/newImages";
import { motion, useInView } from "framer-motion";

// Raise from bottom animation
const raiseFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Testimonials = () => {
  const [reviews] = useState([
    {
      id: 1,
      icon: mmtTest, // Replace with your image paths
      name: "Raspreet Sakaria ",
      title: "Senior Manager - Make My Trip Holidays",
      review:
        "Partnering with Melange was a game-changer! Their marketing and social media strategy helped us achieve 1.3 Crores in revenue for MakeMyTrip Holidays. The team's dedication and creativity made all the difference!",
      link: "/work/make-my-trip",
    },
    {
      id: 2,
      icon: dhruvakTest,
      name: "Jitendra Joshi",
      title: "Founder & CEO- Dhruvak",
      review:
        "In three months, our traffic tripled, and subscriptions doubled, thanks to their strategy and performance marketing. Their social media and web expertise felt like an extension of our team.",
      link: "/work/dhruvak",
    },
    {
      id: 3,
      icon: costaTest,
      name: "Vasundhara Gupta",
      title: "Head - Costa Cruises",
      review:
        "Their data-driven campaigns helped us exceed INR 3 Crores in sales. From strategy to web development and engaging content, they truly made a difference. We felt supported throughout, and their creativity brought our vision to life!",
      link: "/work/costa-cruises",
    },
    {
      id: 4,
      icon: kalonTest,
      name: "Vidya Pandit",
      title: "Co-founder- Kalon Organics",
      review:
        "Their expert social media tactics, stunning product photography, and seamless website development perfectly captured our vision. We felt like a priority every step of the way!",
      link: "/work/kalon",
    },
    {
      id: 5,
      icon: duvonTest,
      name: "Khushboo Shah",
      title: "Business Head - Duvon Disney",
      review:
        "In just three months, their strategies and website development boosted our e-commerce sales to 3 Lakhs. They understood our brand and delivered solutions that resonated. We're excited for the future!",
      link: "/work/duvon",
    },
   
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => nextReview(),
    onSwipedRight: () => previousReview(),
  });

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef, { threshold: 0.5 });

  // Auto-scroll when in view
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(nextReview, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  // GSAP animation for sliding reviews
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const reviewWidth = container.firstChild.getBoundingClientRect().width;
      gsap.to(container, {
        x: `-${currentIndex * (reviewWidth + 16)}px`,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [currentIndex]);

  // Utility function to calculate marginLeft for the first review
  const calculateMarginLeft = () => {
    const maxContainerWidth = 1440;
    const windowWidth = window.innerWidth;
    const marginLeft = (windowWidth - maxContainerWidth) / 2;
    return windowWidth > maxContainerWidth ? marginLeft : 0; // Apply margin only when viewport is wider than max width
  };

  return (
    <div ref={testimonialsRef} className="px-0 py-[90px] relative bg-white font-bricolage">
      <div className="max-container lg:px-20 px-5 flex items-center justify-between">
        {" "}
        {/* Apply max-container */}
        <h2 className="font-bold font-bricolage lg:text-[48px] text-[40px] pb-10 leading-[48px]">
          Hear from Our <span className="multiverse-text"> Clients</span>
        </h2>
        {/* Navigation Buttons */}
        <div className="hidden space-x-4 lg:mt-0 mt-6 lg:mb-5 mb-0 mr-4">
          <img
            src={blkArr}
            alt=""
            className="cursor-pointer lg:w-[24px] w-[20px]"
            onClick={previousReview}
          />
          <img
            src={blkArr}
            alt=""
            className="rotate-180 cursor-pointer lg:w-[24px] w-[20px]"
            onClick={nextReview}
          />
        </div>
      </div>

      <div className="overflow-hidden" {...handleSwipe}>
        <div
          className="flex transition-transform ease-linear"
          ref={containerRef}
          style={{ minWidth: "100%", width: "100%", display: "flex" }}
        >
          {reviews.map((review, index) => (
            <InViewReview
              review={review}
              index={index}
              key={index}
              marginLeft={index === 0 ? calculateMarginLeft() : 0} // Pass calculated margin to the first review
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Component for handling individual testimonial animation based on in-view
const InViewReview = ({ review, marginLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="lg:min-w-[45%] min-w-[100%] bg-[#E1E6FF] p-6 mx-4 rounded-[14.5px] shadow-lg"
      style={{
        flex: "0 0 45%",
        marginLeft: marginLeft ? `${marginLeft + 80}px` : "0px", // Apply dynamic marginLeft
      }}
      variants={raiseFromBottom}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex items-start flex-col">
        <img
          src={qts}
          alt="comma"
          className="lg:w-10 lg:h-8 w-[31px] "
        />
        <div>
          <p className="lg:mt-4 mt-3 text-[#1A1A1A] lg:text-[19px] text-[11px] pb-3">
            {review.review}
          </p>
          <Link
            to={review.link}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <p className="text-[#1A1A1A] lg:text-[19px] text-[11px] font-bold hover:text-blue-600">
              Case Study
            </p>
            <img src={arrowblack} alt="" />
          </Link>
        </div>
      </div>

      <div className="flex lg:mt-[32px] mt-[20px] space-x-5 items-center">
        <div className="">
          <img src={review.icon} alt="logo" />
        </div>
        <div className="">
          <h3 className="font-bold lg:text-22px] text-[13px]">{review.name}</h3>
          <p className=" lg:text-[19px] text-[11px]">{review.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
