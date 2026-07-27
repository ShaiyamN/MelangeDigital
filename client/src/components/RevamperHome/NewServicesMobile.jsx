import React, { useState, useEffect, useMemo } from "react";
import {
  brand1,
  brand2,
  brand3,
  content1,
  content2,
  content3,
  design1,
  design2,
  design3,
  inf1,
  inf2,
  inf3,
  pr1,
  pr2,
  pr3,
  story1,
  story2,
  story3,
} from "../../assets/servicesImages";
import { Link } from "react-router-dom";

const FAQItem = ({ title, content, images, isOpen, onClick, path }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const loadedImages = useMemo(() => images, [images]);

  useEffect(() => {
    if (isOpen) {
      const imageInterval = setInterval(() => {
        setImageOpacity(0); // Fade out current image
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setImageOpacity(1); // Fade in next image
        }, 300);
      }, 3000);

      return () => clearInterval(imageInterval);
    }
  }, [isOpen, images.length]);

  return (
    <div
      className={`border-b border-gray-200 py-4 mb-5 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-50"
      }`}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <span
          className={`font-bold ${
            isOpen ? "text-[24px]" : "text-[20px]"
          } leading-[28px] transition-all duration-300`}
        >
          {title}
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M6.18125 11.5437L6.29375 11.675L14.7937 21.4562C15.0813 21.7875 15.5125 21.9937 15.9937 21.9937C16.475 21.9937 16.9062 21.7812 17.1938 21.4562L25.6875 11.6938L25.8312 11.5313C25.9375 11.375 26 11.1875 26 10.9875C26 10.4438 25.5375 10 24.9625 10L7.0375 10C6.4625 10 6 10.4438 6 10.9875C6 11.1938 6.06875 11.3875 6.18125 11.5437Z"
            fill="#ffffff"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-white">
          <p>{content}</p>
          <Link to={path}>
            <div className="my-4 cursor-pointer">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="white" />
                <g clipPath="url(#clip0_214_1590)">
                  <path
                    d="M11 18H25M25 18L19.75 12M25 18L19.75 24"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_214_1590">
                    <rect
                      width="16"
                      height="14"
                      fill="white"
                      transform="translate(10 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <div className="mt-4 min-h-[400px] rounded-[16px] relative overflow-hidden">
            {loadedImages.length > 0 && (
              <img
                src={loadedImages[currentImageIndex]}
                alt={`${title} image ${currentImageIndex + 1}`}
                className="w-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out"
                style={{ opacity: imageOpacity }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const NewServicesMobile = () => {
  const [openIndex, setOpenIndex] = useState(0); // Initially open "Brand Strategy & Planning"

  const faqItems = [
    {
      title: "Brand Strategy & Planning",
      content:
        "Want to bring your brand to life? We capture its essence and create strategies that resonate. Let's make your brand memorable from vision to execution. Join us to cut through the noise!",
      images: [brand1, brand2, brand3],
      path: "/services/brand-strategy",
    },
    {
      title: "Influencer Marketing",
      content:
        "Got the right product? We’ve got the right people. From relatable creators to big-shot influencers, we match your brand with voices that spark conversations and drive impact.",
      images: [inf1, inf2, inf3],
      path: "/services/influencer-marketing",
    },
    {
      title: "Immersive Brand Storytelling",
      content:
        "Why just tell a story when you can create a whole experience? We shape journeys that spark emotions, make your brand part of the culture, and leave a lasting impression that drives action.",
      images: [story1, story2, story3],
      path: "/services/immersive-brand-storytelling",
    },
    {
      title: "Design & Development",
      content:
        "Websites as smooth as your best one-liners. We create fast, stylish sites that look great and rank well on Google, ensuring your digital home is the place everyone wants to be!",
      images: [design1, design2, design3],
      path: "/services/design-and-development",
    },
    {
      title: "Content Strategy & Production",
      content:
        "Content that’s not just scroll-stopping, but jaw-dropping. From strategy to production, we ensure every piece tells your story and hits the mark, turning scrolls into clicks.",
      images: [content1, content2, content3],
      path: "/services/content-strategy-and-production",
    },
    {
      title: "PR, IPs & Outreach",
      content:
        "Good PR isn’t just about getting featured it’s about making the right noise in the right places at the right time. We don’t just get coverage we spark conversations that make you talk of the town.",
      images: [pr1, pr2, pr3],
      path: "/services/pr-and-outreach",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-[#1A1A1A] py-[80px] px-5 text-white lg:hidden block font-bricolage">
      <h2 className="text-[24px] leading-[24px] font-bold mb-[48px]">
        What We Do
      </h2>
      {faqItems.map((item, index) => (
        <FAQItem
          key={item.title}
          title={item.title}
          content={item.content}
          images={item.images}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index)}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default NewServicesMobile;
