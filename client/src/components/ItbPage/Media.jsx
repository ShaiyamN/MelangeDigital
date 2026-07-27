import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo5,
  logo5Png,
  logo6,
  logo7,
  logo8,
  logo9,
} from "../../assets/itp";

const Media = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { triggerOnce: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { triggerOnce: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { triggerOnce: true, threshold: 0.3 });

  return (
    <section className="w-full lg:px-20 px-5 lg:py-12 py-8 md:pt-20 pt-10 font-bricolage max-container">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Unparalleled Access to <br />
        <span className="lg:text-[35px] text-[27px] font-bold text-[#791FF0]">
          Entertainment & Media
        </span>
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-10 p-0 mt-[50px]">
        {/* Card 1 */}
        <motion.div
          ref={ref1}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView1 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full p-[2px] rounded-[60px] border-1 border-transparent bg-gradient-to-b from-[#791FF0] to-white"
        >
          <div className="p-6 rounded-[60px] bg-white lg:h-[590px]">
            <h3 className="text-xl font-semibold mb-4 w-[80%]">
              Cultural Collaborations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={logo1} alt="logo1" className="w-full h-auto" />
              <img src={logo2} alt="logo2" className="w-full h-auto" />
              
            </div>
            <img src={logo3} alt="logo3" className="w-full h-auto mt-4" />
            <p className="text-center mt-4">...and more</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={ref2}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView2 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full p-[2px] rounded-[60px] border-1 border-transparent bg-gradient-to-b from-[#791FF0] to-white"
        >
          <div className="p-6 rounded-[60px] bg-white lg:h-[590px]">
            <h3 className="text-xl font-semibold mb-4 w-[80%]">
              Music & Event Partnerships
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={logo4} alt="logo4" className="w-full h-auto" />
              <img src={logo5Png} alt="logo5Png" className="w-full h-auto" />
              <img src={logo5} alt="logo5" className="w-full h-auto" />
              <img src={logo6} alt="logo6" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          ref={ref3}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView3 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full p-[2px] rounded-[60px] border-1 border-transparent bg-gradient-to-b from-[#791FF0] to-white"
        >
          <div className="p-6 rounded-[60px] bg-white lg:h-[590px]">
            <h3 className="text-xl font-semibold mb-4 w-[80%]">
              Tech & Platform Integrations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={logo7} alt="logo7" className="w-full h-auto" />
              <img src={logo8} alt="logo8" className="w-full h-auto" />
              <img src={logo9} alt="logo9" className="w-full h-auto" />
              <img src={logo10} alt="logo10" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;
