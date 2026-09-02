import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { whiteArrw } from "../../assets/images";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

gsap.registerPlugin(ScrollTrigger);

// Animation variant
const raiseFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Work Card (match homepage card layout)
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

const WorkSummary = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [displayWorks, setDisplayWorks] = useState([]);
  const [worksReady, setWorksReady] = useState(false);

  // Pull the same "Stories in Action" items as the homepage
  // (homepage uses casestudies + showOnHome flag).
  useEffect(() => {
    const fetchData = async () => {
      try {
        const worksQuery = query(
          collection(db, "casestudies"),
          where("showOnHome", "==", true)
        );
        const worksSnapshot = await getDocs(worksQuery);

        const fetchedWorks = worksSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            icon: data.bannerImage,
            tag1: data.services?.[0] || "",
            tag2: data.services?.[1] || "",
            tag3: data.services?.[2] || "",
            title: data.title,
            path: `/work/${data.slug}`,
            createdAt: data.createdAt || 0,
          };
        });

        fetchedWorks.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setDisplayWorks(fetchedWorks);
      } catch (err) {
        console.error("Error fetching services page data:", err);
      } finally {
        setWorksReady(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!worksReady || !displayWorks.length) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: -scrollDistance,
        ease: "none", // IMPORTANT for smooth scroll
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [worksReady, displayWorks.length]);

  if (!worksReady || !displayWorks.length) return null;

  return (
    <div className="lg:px-0 px-5 lg:pt-section-y pt-10 pb-section-y overflow-hidden bg-white font-bricolage">
      {/* Header */}
      <div className="flex items-end justify-between pb-10 lg:px-20 max-container">
        <h2 className="font-bold text-display text-[#141F59]">
          Stories in <span className="multiverse-text">Action</span>
        </h2>

        <div className="hidden lg:block">
          <Link to="/work">
            <div className="w-[162px] h-[55px] view-all text-body font-bold border rounded-[40px] mb-5 flex items-center justify-center">
              View All
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div
        ref={containerRef}
        className="relative hidden lg:block overflow-hidden p-10 pt-20"
      >
        <div
          ref={wrapperRef}
          className="flex gap-10"
        >
          {displayWorks.map((work, index) => (
            <Work key={index} {...work} />
          ))}
          <div className="min-w-[80px] shrink-0" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mt-0 lg:hidden grid grid-cols-1">
        {displayWorks.slice(0, 4).map((work, index) => (
          <Work key={index} {...work} />
        ))}
      </div>

      <div className="lg:hidden block">
        <Link to="/work">
          <div className="w-full h-[55px] view-all text-body font-bold border rounded-[40px] mt-10 flex items-center justify-center">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkSummary;
