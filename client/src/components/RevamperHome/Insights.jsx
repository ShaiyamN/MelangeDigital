import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants for staggered fade-ins
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Insights = ({ insightsData }) => {
  return (
    <div className="z-20 bg-slate-50 dark:bg-[#080812] py-16 lg:py-24 transition-colors">
      <div className="lg:px-20 px-5 max-container">
        <h2 className="font-bricolage lg:text-[56px] text-[40px] font-bold lg:mb-[60px] mb-[40px] text-slate-900 dark:text-white">
          Current <span className="multiverse-text">Insights</span>
        </h2>

        {/* List Container */}
        <motion.div 
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {insightsData.map((insight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={insight.link} className="block group">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8 rounded-[32px] bg-white dark:bg-[#111122] border border-black/5 dark:border-white/5 hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-2xl dark:hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)] transition-all duration-500">
                  
                  {/* Image Section */}
                  <div className="w-full md:w-[35%] shrink-0 overflow-hidden rounded-[24px]">
                    <div className="relative aspect-video md:aspect-[4/3] w-full">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full md:w-[65%] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                      <h3 className="font-bricolage text-[22px] md:text-[28px] lg:text-[32px] leading-snug md:leading-tight font-semibold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-300">
                        {insight.title}
                      </h3>
                      <p className="font-nunito text-[15px] md:text-[17px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                        {insight.date}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <div className="shrink-0 hidden md:flex w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-500 group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5H9M19 5V15" />
                      </svg>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Insights;
