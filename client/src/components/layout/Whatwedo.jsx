import React, { useState, useEffect } from "react";
import Servicessummary from "./Servicessummary";
import { useMediaQuery } from "react-responsive";
import { image1, image2, image3, image4, image5, image6 } from "../../assets/images";

// Preload images function
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const Whatwedo = () => {
  const [bgImage, setBgImage] = useState(image1); // Initially load the first image
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  // Preload images when component mounts
  useEffect(() => {
    const imagesToPreload = [image1, image2, image3, image4, image5, image6];
    preloadImages(imagesToPreload);
  }, []);

  const handleLinkHover = (image) => {
    setBgImage(image);
    setIsLinkHovered(true);
  };

  const handleLinkMouseOut = () => {
    setIsLinkHovered(false);
  };

  return (
    <div
      className={`px-0 md:py-0 min-h-[80%] ${
        isLinkHovered ? "bg-none" : "bg-[#1a1a1a]"
      }`}
      style={{
        backgroundImage: isMobile ? "none" : `url(${bgImage})`,
        backgroundColor: isMobile ? "#1a1a1a" : "transparent",
        transition: "background-image 0.3s ease-in-out", // Smooth transition
      }}
      onMouseOut={handleLinkMouseOut}
    >
      <Servicessummary handleLinkHover={handleLinkHover} />
    </div>
  );
};

export default Whatwedo;
