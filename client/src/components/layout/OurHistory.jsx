import React, { useState, useRef, useEffect } from "react";
import { image1, image3 } from "../../assets/images";
const yearsData = [
  {
    year: "2021- Where it all Began",
    text: "Our journey began with a vision to create a unique space where strategy, creativity, and performance unite. As a close-knit team, we set out to build meaningful campaigns that resonated with audiences and delivered exceptional results.",
    video: "/videos/history2021.mp4",
  },
  {
    year: "2022- First Stamp, Singapore",
    text: "Expanding our horizons, we established our first international presence in Singapore. This marked a significant milestone as we grew into a diverse team of 15, bringing innovative solutions to brands across the APAC region.",
    video: "/videos/history2022.mp4",
  },
  {
    year: "2023- Onboarding Dubai",
    text: "The vibrant landscape of UAE welcomed us next. With a team of 20 passionate professionals, we immersed ourselves in the local culture, delivering bold campaigns that captured the essence of the Middle Eastern market.",
    video: "/videos/history2023.mov",
  },
  {
    year: "2024- Hello London",
    text: "Our European adventure began in London. With a team of 30 creative minds, we focused on building distinctive creative systems that helped brands stand out in the competitive UK market.",
    video: "/videos/history2024.mp4",
  },
  {
    year: "2025- Stepping Into Zambia",
    text: "Embracing new challenges, we expanded into Zambia with enthusiasm and curiosity. We're committed to making every project matter, bringing our global expertise to this dynamic African market.",
    video: "/videos/history2025.mp4",
  }
];
const OurHistory = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);
  
  const handleClick = (index) => {
    setActiveYear(index);
  };

  // Check scroll position to determine which arrows to show
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Handle scroll events
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
      };
    }
  }, []);

  // Scroll functions for arrow buttons
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="pb-16 md:pb-28 font-bricolage partners-bg block z-0 relative">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent z-[-1]"></div>
      
      <div className="max-container">
        <div className="px-6 py-16 md:px-16 lg:px-24">
          <h2 className="font-semibold text-display text-[#ffffff] mb-12 tracking-tight">
            Our History
          </h2>
          
          {/* Timeline with mobile indicators */}
          <div className="relative mb-12 md:mb-24">
            {/* Left scroll indicator (mobile only) */}
            {canScrollLeft && (
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 md:hidden -ml-4"
                aria-label="Scroll left"
              >
                <div className="w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>
            )}
            
            {/* Right scroll indicator (mobile only) */}
            {canScrollRight && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 md:hidden -mr-4"
                aria-label="Scroll right"
              >
                <div className="w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            )}
            
            {/* Timeline content */}
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 md:space-x-8 justify-between overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide"
            >
              {yearsData.map((data, index) => (
                <div
                  key={index}
                  className="min-w-[140px] md:min-w-[160px] cursor-pointer group text-center flex-shrink-0"
                  onClick={() => handleClick(index)}
                >
                  <p
                    className={`text-center transition-all duration-300 ${
                      activeYear === index 
                        ? "text-blue-400 font-bold text-xl md:text-2xl" 
                        : "text-white/80 group-hover:text-blue-300 text-lg md:text-xl"
                    }`}
                  >
                    {data.year.split('-')[0]}
                  </p>
                  <div className="h-1 mt-3 bg-white/20 rounded-full relative overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 ease-in-out ${
                        activeYear === index ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="px-6 md:px-16 lg:px-24 text-[#ffffff]">
          {yearsData.map((data, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
                activeYear === index ? "opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  {/* Year number - hidden on mobile */}
                  <span className="font-bold text-display leading-[0.9] block tracking-tight hidden md:block">
                    {data.year.split('-')[0]}
                  </span>
                  {/* Subtitle text - visible on all screens */}
                  <span className="font-semibold text-[32px] md:text-[36px] leading-[1.2] text-white-300 mt-1 block">
                    {data.year.split('-').slice(1).join('-')}
                  </span>
                </div>
                <p className="text-[20px] md:text-[22px] leading-[1.6] text-white-300 font-light">
                  {data.text}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-[16px]  overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] w-full">
                  <video 
                    key={data.video}
                    src={data.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      console.error(`Error loading video for ${data.year}:`, e);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-64 bg-gray-800 items-center justify-center hidden">
                    <p className="text-white">Video unavailable</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};
export default OurHistory;