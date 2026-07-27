import React, { useState, useEffect } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/logo";

const Logo = () => {
  const [currentImages, setCurrentImages] = useState([image1, image2]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImages[0] === image1 && currentImages[1] === image2) {
        setCurrentImages([image3, image4]);
      } else if (currentImages[0] === image3 && currentImages[1] === image4) {
        setCurrentImages([image5, image6]);
      } else if (currentImages[0] === image5 && currentImages[1] === image6) {
        setCurrentImages([image1, image2]);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentImages]);

  return (
    <div className="container mx-4 md:mx-8">
      <div className="flex flex-col md:w-[80%]  items-center">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image Logo`}
            className="max-h-56 my-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
