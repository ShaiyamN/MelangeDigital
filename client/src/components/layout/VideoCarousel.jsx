import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { reelArrow } from "../../assets/images";

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const touchStartX = useRef(0);
  const isNavigating = useRef(false); // Prevents rapid navigation
  const videoList = Array.isArray(videos) ? videos : []; // Validate videos array

  // Autoplay and mute logic
  useEffect(() => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current.forEach((video, index) => {
        if (index === currentIndex) {
          video.play();
          video.muted = isMuted;
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [currentIndex, isMuted]);

  // Prevent rapid navigation
  const navigateCarousel = useCallback(
    (direction) => {
      if (isNavigating.current) return;

      isNavigating.current = true;

      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % videoList.length;
        } else {
          return (prevIndex - 1 + videoList.length) % videoList.length;
        }
      });

      setTimeout(() => {
        isNavigating.current = false;
      }, 500); // Navigation cooldown
    },
    [videoList.length]
  );

  const handleNext = () => navigateCarousel("next");
  const handlePrev = () => navigateCarousel("prev");

  // Mute/Unmute toggle
  const toggleMute = () => setIsMuted((prev) => !prev);

  // Touch swipe logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDifference = touchStartX.current - touchEndX;

    if (Math.abs(touchDifference) > 50) {
      if (touchDifference > 0) {
        handleNext(); // Swipe left
      } else {
        handlePrev(); // Swipe right
      }
    }
  };

  if (videoList.length === 0) {
    return <div className="text-center text-gray-500">No videos available</div>;
  }

  return (
    <div
      className="relative flex items-center justify-between w-full lg:h-[600px] h-[550px] bg-transparent overflow-hidden rounded-xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Left Arrow */}
      <button
        className="absolute lg:left-4 left-0 z-10 bg-transparent   bg-opacity-50 p-2 rounded-full scale-75 lg:scale-100"
        onClick={handlePrev}
      >
        <img src={reelArrow} alt="Previous" />
      </button>

      {/* Video Display */}
      <div className="relative flex justify-center items-center w-full h-full">
        {videoList.map((video, index) => (
          <div
            key={index}
            className={`absolute lg:w-[300px] w-[243px] aspect-[9/16] rounded-2xl transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 z-10 opacity-100"
                : index < currentIndex
                ? "-translate-x-full z-0 opacity-0"
                : "translate-x-full z-0 opacity-0"
            }`}
          >
            <video
              src={video}
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover rounded-2xl bg-gray-300"
              muted={isMuted}
              loop
            />
           
            {/* Mute/Unmute Button */}
            <button
              className="absolute lg:bottom-4 bottom-4 right-4 bg-black bg-opacity-50 p-[6px] rounded-full cursor-pointer"
              onClick={toggleMute}
            >
              {isMuted ? (
                <FaVolumeMute className="text-white text-[12px]" />
              ) : (
                <FaVolumeUp className="text-white text-[12px]" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute lg:right-4 right-0 z-10 bg-transparent bg-opacity-50 p-2 rounded-full scale-75 lg:scale-100"
        onClick={handleNext}
      >
        <img src={reelArrow} alt="Next" className="rotate-180" />
      </button>
    </div>
  );
};

export default VideoCarousel;
