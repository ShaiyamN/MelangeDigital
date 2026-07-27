import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const [gsapReady, setGsapReady] = useState(false);

  // ── Detect prerender environment ──────────────────────────────────────────
  const isPrerendering =
    typeof window !== "undefined" && window.__PRERENDERING__ === true;

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const letters = textElement.querySelectorAll(".letter");

    // ── If prerendering: snap everything to final visible state immediately ──
    if (isPrerendering) {
      gsap.set(letters, { opacity: 1, y: 0 });
      setGsapReady(true);
      return; // skip ALL ScrollTrigger / animation setup
    }

    // ── Normal browser: run animation as usual ───────────────────────────────
    gsap.set(letters, { opacity: 0.2, y: 30 });
    setGsapReady(true);

    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
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
        .text-reveal-wrapper {
          visibility: hidden;
        }
        .text-reveal-wrapper.gsap-ready {
          visibility: visible;
        }
        .letter {
          display: inline-block;
          will-change: opacity, transform;
        }
      `}</style>

      <div className="lg:block hidden">
        <div
          ref={sectionRef}
          className={`pin-section text-reveal-wrapper${gsapReady ? " gsap-ready" : ""}`}
        >
          <div className="flex justify-center items-center lg:py-[132px] py-[80px] lg:px-10 px-5 bg-white font-bricolage">
            <p
              ref={textRef}
              className="font-bold lg:text-[60px] text-[32px] lg:leading-[67px] text-center text-[#141F59]"
            >
              {splitText("We do the heavy lifting of Cracking The")}
              <br className="lg:block hidden" />
              {splitText("Algorithms and User Habits -")}
              <br className="lg:block hidden" />
              {splitText("While You Take The Spotlight")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextReveal;