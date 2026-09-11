import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const categoryMap = {
  "content-marketing": "Content Marketing",
  "brand-strategy": "Brand Strategy",
  "ecommerce-management": "E-commerce Management",
  "design-solutions": "Design Solutions",
  "performance-marketing": "Performance Marketing",
  "website-development-seo": "Website Development & SEO",
  "influencer-marketing": "Influencer Marketing",
  "design-development": "Design & Development",
  "design-dev": "Design & Development",
  "content-strategy": "Content Strategy",
  "storytelling": "Storytelling",
  "ips-pr": "PR, IPs & Outreach",
  "pr": "IPs & PR",
  "aeo-seo": "AEO & SEO",
  "ecommerce": "E-Commerce",
};

const formatCategory = (cat) => {
  if (!cat) return "";
  return (
    categoryMap[cat] ||
    cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

const BlogCatg = ({
  categories = [],
  handleCategorySelect,
  activeCategory = null,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(activeCategory || "all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setSelectedFilter(activeCategory || "all");
  }, [activeCategory]);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    handleCategorySelect(filter === "all" ? null : filter);
    setShowMobileFilters(false);
    if (window.__melangeLenis) {
      window.__melangeLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters((prev) => !prev);
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  const tags = [
    { label: "All", filter: "all" },
    ...categories.map((cat) => ({
      label: formatCategory(cat),
      filter: cat,
    })),
  ];

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
    <div className="w-fit max-w-[92vw] mx-auto flex items-center justify-center">
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
              className="w-[210px] h-[56px] border border-gray-400 bg-white text-[20px] rounded-[40px] py-2 px-4 flex items-center justify-center font-medium gap-2 shadow-lg"
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
              className="bg-[#1a1a1a] w-[265px] max-h-[520px] overflow-y-auto rounded-[40px] p-6 space-y-4 shadow-2xl"
            >
              <div className="space-y-4">
                {tags.map((tag, index) => (
                  <motion.button
                    key={tag.filter}
                    custom={index}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    className={`block w-full py-2 px-4 rounded-full text-left text-[16px] font-bold transition-colors ${
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

      {/* Desktop View: Original floating glassmorphic dock */}
      <div className="hidden lg:block">
        <div className="flex flex-row px-[30px] py-3.5 glsMorph space-x-3 items-center">
          {tags.map((tag) => (
            <button
              key={tag.filter}
              className={`py-2 px-5 whitespace-nowrap text-[14px] font-bold rounded-[50px] border transition-all cursor-pointer ${
                selectedFilter === tag.filter
                  ? "submit-bg border-none text-white shadow-md scale-105"
                  : "text-black bg-white border-transparent hover:bg-white/95"
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
