import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LetsTalk = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null); // Reference to the entire section

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.textContent;
    
    // Clear original text and replace with spans
    textElement.innerHTML = text
      .split("") // Split text into individual characters
      .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
      .join(""); // Join them back with spans

    const chars = textElement.querySelectorAll(".char");

    // GSAP animation for each character
    gsap.fromTo(
      chars, // Target the split characters
      {
        opacity: 0,
        y: 50, // Start each character 50px lower
      },
      {
        opacity: 1,
        y: 0, // Move each character to its original position
        duration: 0.5, // Duration for each character
        stagger: 0.25, // Delay between each character
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current, // Trigger the animation when the section is in view
          start: "top center", // Start at the top of the viewport
          end: "+=100%", // Pin until the section scrolls through 100% of its height
          scrub: 1, // Enable scrubbing for smooth animation
          pin: true, // Pin the section in place while scrolling
          anticipatePin: 1, // Anticipate pinning for smooth experience
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#1a1a1a]">
      <div className="w-full top-[50px] h-[300px] max-w-[1440px] mx-auto lg:px-20 px-5 py-10 z-20">
        <div className="lg:flex justify-between items-end">
          {/* Text with GSAP character-by-character animation */}
          <p
            ref={textRef} // Reference to the text element
            className="text-white text-[73px] md:text-[224px] font-normal leading-none"
          >
            Let's Talk
          </p>
          <Link to="/contact">
            <div className="contact-btn-footer mb-10 lg:mt-0 mt-7 w-[177px] h-[56px] flex items-center justify-center rounded-2xl cursor-pointer bg-[#ffffff]">
              <span className="font-medium text-[#1a1a1a] text-[17px]">
                Get in Touch
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
