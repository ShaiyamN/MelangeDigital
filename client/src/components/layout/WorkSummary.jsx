import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { whiteArrw } from "../../assets/images";

gsap.registerPlugin(ScrollTrigger);

const raiseFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Work = ({ icon, tag1, tag2, tag3, title, path, services }) => {
  return (
    <motion.div className="relative lg:w-[420px] lg:min-w-[420px] shrink-0 lg:mr-8 mb-4 lg:mb-0">
      <Link to={path}>
        <div className="service-wrapper relative overflow-hidden rounded-[30px]">
          <div className="overlay-services absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
            <div className="w-[72px] h-[72px] bg-[#141414] rounded-full flex items-center justify-center">
              <img src={whiteArrw} alt="" />
            </div>
          </div>

          <img
            src={icon}
            alt={title || "Case study"}
            className="work-card-media w-full h-auto block"
            loading="eager"
            decoding="async"
          />
        </div>
      </Link>

      <div className="flex flex-wrap py-1 text-[#1A1A1A] font-bold text-body lg:pt-3 pt-2 gap-x-3 gap-y-2">
        {services && services.length > 0 ? (
          services.slice(0, 3).map((service, idx) => (
            <p key={idx}>{service}</p>
          ))
        ) : (
          <>
            {tag1 && <p>{tag1}</p>}
            {tag2 && <p>{tag2}</p>}
            {tag3 && <p>{tag3}</p>}
          </>
        )}
      </div>

      <Link to={path}>
        <motion.h2
          className="font-bold text-title text-[#141F59] mt-1"
          variants={raiseFromBottom}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </motion.h2>
      </Link>
    </motion.div>
  );
};

const WorkSummary = ({ worksData, ready = true }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const displayWorks = worksData?.length > 0 ? worksData : [];

  useLayoutEffect(() => {
    if (!ready || !displayWorks.length) return;

    const container = containerRef.current;
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !track || !wrapper) return;

    let tween;
    let cancelled = false;

    const setup = () => {
      if (cancelled || !container || !track || !wrapper) return;

      if (tween) {
        tween.scrollTrigger?.kill();
        tween.kill();
        tween = null;
      }
      gsap.set(wrapper, { clearProps: "transform" });

      const totalWidth = wrapper.scrollWidth;
      const viewportWidth = track.clientWidth || window.innerWidth;
      const scrollDistance = Math.max(0, totalWidth - viewportWidth);

      if (scrollDistance <= 0) {
        ScrollTrigger.refresh();
        return;
      }

      tween = gsap.to(wrapper, {
        x: -scrollDistance,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    };

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    const imgs = Array.from(wrapper.querySelectorAll("img"));
    let pending = 0;

    const done = () => {
      pending -= 1;
      if (pending <= 0 && !cancelled) {
        requestAnimationFrame(() => {
          requestAnimationFrame(setup);
        });
      }
    };

    imgs.forEach((img) => {
      if (!img.complete) {
        pending += 1;
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    });

    if (pending === 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(setup);
      });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      if (tween) {
        tween.scrollTrigger?.kill();
        tween.kill();
      }
      gsap.set(wrapper, { clearProps: "transform" });
      ScrollTrigger.refresh();
    };
  }, [ready, displayWorks.length]);

  if (!ready || !displayWorks.length) {
    return null;
  }

  return (
    <div className="lg:px-0 px-5 lg:pt-section-y pt-10 pb-section-y bg-white font-bricolage">
      <div className="flex items-end justify-between pb-6 lg:px-20 max-container">
        <h2 className="font-bold text-display text-[#141F59]">
          Stories in <span className="multiverse-text">Action</span>
        </h2>

        <div className="hidden lg:block">
          <Link to="/work">
            <div className="w-[162px] h-[55px] view-all text-body font-bold border rounded-[40px] mb-2 flex items-center justify-center">
              View All
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop track only — pin/center cards without touching the header */}
      <div
        ref={containerRef}
        className="relative hidden lg:flex items-center min-h-[calc(100vh-140px)]"
      >
        <div ref={trackRef} className="w-full overflow-hidden px-10">
          <div
            ref={wrapperRef}
            className="flex gap-8 items-start"
            style={{ willChange: "transform" }}
          >
            {displayWorks.map((work, index) => (
              <Work key={work.path || work.title || index} {...work} />
            ))}
            <div className="min-w-[80px] shrink-0" />
          </div>
        </div>
      </div>

      <div className="mt-0 lg:hidden grid grid-cols-1 gap-2">
        {displayWorks.slice(0, 4).map((work, index) => (
          <Work key={work.path || work.title || index} {...work} />
        ))}
      </div>

      <div className="lg:hidden block">
        <Link to="/work">
          <div className="w-full h-[55px] view-all text-body font-bold border rounded-[40px] mt-8 flex items-center justify-center">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkSummary;
