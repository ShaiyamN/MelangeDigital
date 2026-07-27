import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { whiteArrw } from "../../assets/images";

gsap.registerPlugin(ScrollTrigger);

const Work = ({ icon, tag1, tag2, tag3, title, path }) => {
  return (
    <div className="work relative bg-white group">
      <Link to={path}>
        <div className="service-wrapper relative overflow-hidden">
          <div className="overlay-services absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <div className="circle-cta w-[72px] h-[72px] bg-[#141414] rounded-full flex items-center justify-center">
              <img src={whiteArrw} alt="" />
            </div>
          </div>
          <img
            src={icon}
            alt="Icon"
            className="w-full lg:h-[497px] h-[330px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex py-1 text-[#1A1A1A] font-bold lg:text-[15px] text-[12px] lg:pt-[15px] pt-2">
        <p>{tag1}</p>
        <p className="mx-3">{tag2}</p>
        <p>{tag3}</p>
      </div>

      <Link to={path}>
        <h2 className="font-bold lg:text-[50px] text-[36px] text-[#141F59] whitespace-nowrap">
          {title}
        </h2>
      </Link>
    </div>
  );
};

const WorkSummaryForServicesPage = ({ works }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (window.innerWidth < 1024) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let tween;

    const init = () => {
      const totalScrollWidth = track.scrollWidth - section.offsetWidth;

      // If content does not overflow, keep it at start and don't animate
      if (totalScrollWidth <= 0) {
        gsap.set(track, { x: 0 });
        return;
      }

      tween = gsap.to(track, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      init();
    });

    return () => {
      cancelAnimationFrame(raf);
      if (tween) tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [works]);

  return (
    // IMPORTANT: No overflow:hidden on this wrapper — it breaks GSAP pin
    <div className="bg-white font-bricolage">
      {/* ── DESKTOP ── */}
      <div ref={sectionRef} className="hidden lg:block w-full bg-white">
        <div className="pt-[0px] pb-[80px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-10 px-20 max-container">
            <h2 className="font-bold text-[#000144] text-[48px]">
              Case <span className="multiverse-text">Studies</span>
            </h2>
            <Link to="/work">
              <div className="w-[162px] h-[55px] flex items-center justify-center text-[19px] font-bold border rounded-[40px]">
                View All
              </div>
            </Link>
          </div>

          {/* Horizontal scroll track — width must be max-content so GSAP measures correctly */}
          <div
            ref={trackRef}
            className="flex gap-10 px-20 will-change-transform"
            style={{ width: "max-content" }}
          >
            {works.map((work, index) => (
              <div key={index} className="w-[500px] flex-shrink-0">
                <Work {...work} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden px-5 pt-10 pb-[80px]">
        <div className="flex items-center justify-between pb-10">
          <h2 className="font-bold text-[#000144] text-[40px]">
            Case <span className="multiverse-text">Studies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {works.slice(0, 4).map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Work {...work} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/work">
            <div className="w-[162px] h-[55px] flex items-center justify-center text-[19px] font-bold border rounded-[40px]">
              View All
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkSummaryForServicesPage;
