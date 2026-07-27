import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextRevealMobile = () => {
  const textRef = useRef(null);
  const [gsapReady, setGsapReady] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const letters = textElement.querySelectorAll(".letter");

    // Set initial state via GSAP FIRST before making visible
    gsap.set(letters, { opacity: 0.2, y: 30 });

    // Now safe to show
    setGsapReady(true);

    gsap.to(letters, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      stagger: 0.03,
      duration: 1,
      scrollTrigger: {
        trigger: textElement,
        start: "top 85%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const splitText = (text) =>
    text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="letter">
            {char}
          </span>
        ))}
        <span>&nbsp;</span>
      </span>
    ));

  return (
    <>
      <style>{`
        .mobile-text-wrapper {
          visibility: hidden;
        }
        .mobile-text-wrapper.gsap-ready {
          visibility: visible;
        }
        .letter {
          display: inline-block;
          will-change: opacity, transform;
        }
      `}</style>

      <div className={`lg:hidden py-20 px-5 bg-white font-bricolage mobile-text-wrapper${gsapReady ? " gsap-ready" : ""}`}>
        <div className="text-center text-[#141F59] font-bold text-[32px] leading-[1.3]">
          <p ref={textRef} className="inline-block">
            {splitText("We do the heavy lifting of Cracking The Algorithms and User Habits - While You Take The Spotlight")}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextRevealMobile;