import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const BlogCatg = ({ handleCategorySelect }) => {
  const tags = [
    { label: "All", filter: "all" },
    { label: "Brand Strategy", filter: "brand-strategy" },
    { label: "Influencer Marketing", filter: "influencer-marketing" },
    { label: "Design & Development", filter: "design-dev" },
    { label: "Content Strategy ", filter: "content-strategy" },
    { label: "Storytelling", filter: "storytelling" },
    { label: "IPs & PR", filter: "pr" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    handleCategorySelect(filter === "all" ? null : filter);
    setShowMobileFilters(false); // Hide mobile filter after selection
    window.scrollTo(0, 0); // Scroll to the top
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters((prev) => !prev);
  };

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

  return (
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
      <div className="hidden">
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
  );
};

export default BlogCatg;
