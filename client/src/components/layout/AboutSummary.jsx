import React, { useEffect, useRef, useState } from "react";
import ContactButton from "./ContactButton";
import Logo from "./Logo";
import { mainBanner } from "../../assets/video";
import { unmute, mute } from "../../assets/images";

const AboutSummary = () => {
  const words = ["Performance", "Video", "Influencer"];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  useEffect(() => {
    const word = words[index];

    if (isDeleting) {
      if (letterIndex > 0) {
        const backspaceTimeout = setTimeout(() => {
          setCurrentWord((prev) => prev.slice(0, -1));
          setLetterIndex(letterIndex - 1);
        }, 100); // Adjust backspacing speed here
        return () => clearTimeout(backspaceTimeout);
      } else {
        setIsDeleting(false);
        setIndex((index + 1) % words.length);
      }
    } else {
      if (letterIndex < word.length) {
        const typingTimeout = setTimeout(() => {
          setCurrentWord((prev) => prev + word[letterIndex]);
          setLetterIndex(letterIndex + 1);
        }, 150); // Adjust typing speed here
        return () => clearTimeout(typingTimeout);
      } else {
        const pauseBeforeDeleteTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Pause before starting the backspace
        return () => clearTimeout(pauseBeforeDeleteTimeout);
      }
    }
  }, [letterIndex, isDeleting, index, words]);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // Mute the video when it's out of the viewport
          if (!video.muted) {
            video.muted = true;
            setIsMuted(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust this as needed
    });

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className="max-container">
      <div className="flex flex-col lg:flex-row justify-between items-start md:space-x-[40px] md:pt-[150px] pt-20 md:pb-20 md:px-28 px-5">
        <div className="w-full lg:w-[50%]">
          <div>
            {/*<h1 className=" text-2xl md:text-[43px] md:leading-[56px] mt-4 sm:mt-0  font-nunito font-normal">
              Excellence in{" "}
              <span className="multiverse-text font-bold">{currentWord}</span>{" "}
              <br /> Marketing, SEO, and More!
            </h1>*/}
            <h1 className=" text-2xl md:text-[41px] md:leading-[56px] mt-4 sm:mt-0  font-nunito font-bold">Powering Growth Through <br />
            <span className="multiverse-text font-bold"> Creativity </span> & <span className="multiverse-text font-bold"> Strategy </span></h1>
          </div>
          <p className="pt-3  font-nunito font-normal  text-[16px] leading-[26px] text-[#0f0330]">
            Welcome to Melange Digital, India's leading Digital Marketing Agency
            specialising in Performance Marketing, SEO, Video Marketing,
            Influencer Marketing, and E-commerce solutions. Our expert team uses
            an AI-first approach to craft innovative strategies that drive
            growth and enhance your online presence. With a focus on maximising
            your ROI, we deliver cutting-edge solutions tailored to your unique
            needs. Partner with us and experience the future of digital
            marketing—where creativity meets technology.
          </p>
          <div className="pt-3 w-40% lg:w-[34%]">
            <ContactButton />
          </div>
        </div>
        <div className="w-full lg:w-[55%] relative">
          <video
            ref={videoRef}
            className="object-cover w-full md:-mt-10"
            src={mainBanner}
            autoPlay
            loop
            playsInline
            muted={isMuted}
            preload="auto"
          ></video>

          <div
            onClick={toggleMute}
            className="flex items-center justify-center md:w-[35px] md:h-[35px] w-[32px] h-[32px] rounded-full bg-white absolute md:bottom-[70px] bottom-[46px] md:right-[100px] right-[63px] p-2 cursor-pointer"
          >
            <img
              src={isMuted ? mute : unmute}
              alt="Toggle sound"
              className="md:w-[20px] w-[18px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSummary;
