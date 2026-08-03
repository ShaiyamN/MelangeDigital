import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { whiteArrw } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Work = ({ icon, tag1, tag2, tag3, tag4, title, description, path, services }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const raiseFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="work cursor-pointer relative lg:mr-6 mb-12">
      <Link to={path} className="work">
        <div className="service-wrapper">
          <div className="overlay-services">
            <div className="circle-cta w-[72px] h-[72px] bg-[#141414] rounded-full flex items-center justify-center">
              <img src={whiteArrw} alt="" className="rotate-img" />
            </div>
          </div>
          <motion.img
            src={icon}
            alt={title || "Case study"}
            className="work-card-media w-full h-auto block transition-all duration-300 transform-gpu"
          />
        </div>
      </Link>
      <div className="flex flex-wrap py-1 text-[#1A1A1A] font-bold lg:text-[15px] text-[12px] lg:pt-[26px] lg:pb-3 pt-2 gap-x-7 gap-y-2">
        {services && services.length > 0 ? (
          services.slice(0, 4).map((service, idx) => (
            <p key={idx}>{service}</p>
          ))
        ) : (
          <>
            {tag1 && <p>{tag1}</p>}
            {tag2 && <p>{tag2}</p>}
            {tag3 && <p>{tag3}</p>}
            {tag4 && <p>{tag4}</p>}
          </>
        )}
      </div>
      <Link to={path} className="cursor-pointer">
        <motion.h2
          className="font-bold lg:text-[36px] lg:leading-[1.2] text-[28px] leading-[1.2] text-[#141F59] break-words line-clamp-2 overflow-hidden mt-2"
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

const   WorkSummary = () => {
  const [works, setWorks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    getDocs(collection(db, "casestudies"))
      .then((snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          icon: doc.data().bannerImage,
          path: `/work/${doc.data().slug}`,
          filter: doc.data().filters?.length
            ? doc.data().filters
            : (doc.data().categories || (doc.data().category ? [doc.data().category] : [])),
        }));
        // Sort by admin-defined sortOrder, then createdAt as fallback
        list.sort((a, b) => {
          if (a.sortOrder !== undefined && b.sortOrder !== undefined) return a.sortOrder - b.sortOrder;
          if (a.sortOrder !== undefined) return -1;
          if (b.sortOrder !== undefined) return 1;
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });
        setWorks(list);
      })
      .catch((error) => console.error("Error loading case studies:", error));
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Handler for selecting a filter
  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setShowMobileFilters(false);
    window.scrollTo(0, 0);
  };

  // Define the filter options and their corresponding labels
  const tags = [
    { label: "All", filter: "all" },
    { label: "Brand Strategy", filter: "filter1" },
    { label: "Influencer Marketing", filter: "filter2" },
    { label: "Design & Development", filter: "filter3" },
    { label: "Content Strategy", filter: "filter4" },
    { label: "Storytelling", filter: "filter5" },
    { label: "IPs & PR", filter: "filter6" },
    { label: "AEO & SEO", filter: "filter7" },
  ];

  const filteredWorks =
    selectedFilter === "all"
      ? works
      : works.filter((work) => work.filter.includes(selectedFilter));

  return (
    <div className="font-bricolage lg:px-20 px-5 pb-[40px] max-container relative ">
      {/*Heading*/}
      <div className="  pb-10 sm:pb-[0px]">
        <h2 className="font-bold text-[#141F59] lg:text-[124px] text-[40px] lg:leading-[124px] leading-[40px] font-bricolage">
          Stories in <span className="multiverse-text">Action</span>
        </h2>
      </div>

      {/*Filters Mobile/ Desktop*/}
      <div
        className={`sticky lg:top-[90vh] shadow-2xl max-h-0 z-20 lg:w-[1100px] mx-auto flex items-end justify-center ${
          !showMobileFilters ? "top-[92vh] " : "top-[92vh]"
        }`}
      >
        {/* Mobile View */}
        <div className="lg:hidden flex justify-center items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showMobileFilters ? (
              <motion.button
                key="show-filters"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={toggleMobileFilters}
                className="w-[210px] h-[56px] border border-gray-400 bg-white text-[20px] rounded-[40px] py-2 px-4 flex items-center justify-center font-medium gap-2"
              >
                <RiMenu3Line size={20} />
                <span>Show Filters</span>
              </motion.button>
            ) : (
              <motion.div
                key="filter-container"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="bg-[#1a1a1a] w-[265px] h-[520px] rounded-[40px] p-6 space-y-4"
              >
                <div className="space-y-4">
                  {tags.map((tag, index) => (
                    <motion.button
                      key={tag.filter}
                      custom={index}
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      className={`block py-2 px-4 rounded-full text-left text-[16px] font-bold
                     ${
                       selectedFilter === tag.filter
                         ? "bg-purple-500 text-white"
                         : "bg-white text-black"
                     }`}
                      onClick={() => handleFilterSelect(tag.filter)}
                    >
                      {tag.label}
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={toggleMobileFilters}
                  className="w-full h-[56px] bg-white text-[20px] rounded-[40px] py-2 px-4 flex items-center justify-center font-medium space-x-3"
                >
                  <RiCloseLine size={20} />
                  <span>Hide Filters</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex flex-row px-[30px] py-4 glsMorph space-x-4">
            {tags.map((tag) => (
              <button
                key={tag.filter}
                className={`py-2 px-4 whitespace-nowrap text-[14px] font-bold rounded-[50px] border
               ${
                 selectedFilter === tag.filter
                   ? "submit-bg border-none text-white"
                   : "text-black bg-white"
               }`}
                onClick={() => handleFilterSelect(tag.filter)}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/*Work Showcasing in grid*/}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[30px] mb-20 lg:mt-[50px] mt-[10px]">
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            className={`col-span-1 ${
              index % 2 === 0 ? "sm:h-auto" : "sm:h-auto"
            }`}
          >
            <Work key={`work-${index}`} {...work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSummary;
