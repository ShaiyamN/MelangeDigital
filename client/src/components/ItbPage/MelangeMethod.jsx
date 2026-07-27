import React from "react";
import { motion } from "framer-motion";
import { head2 } from "../../assets/itp";

const MelangeMethod = () => {
  return (
    <section className="lg:px-20 lg:mb-0 mb-20 lg:pt-10  px-5 lg:flex justify-between max-container font-bricolage">
      {/* Left Content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-[#791FF0] lg:text-[80px] text-[60px] lg:leading-[80px] leading-[60px] font-bold">
          <p>The</p>
          <p className="ml-20">Melange</p>
          <p>Method</p>
        </div>
        <div className="ml-40 py-5 lg:block hidden">
          <svg
            width="2"
            height="212"
            viewBox="0 0 2 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 0.47998V211.06" stroke="black" stroke-miterlimit="10" />
          </svg>
        </div>
        <div className="flex space-x-5">
          <p className="font-semibold">RESEARCH-DRIVEN</p>
          <p className="text-[#791FF0] font-semibold">
            {" "}
            <span className="text-[30px]">4Cs</span> APPROACH
          </p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="lg:w-1/2 lg:mt-0 mt-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={head2} alt="Melange Method" className="w-[500px]" />
      </motion.div>
    </section>
  );
};

export default MelangeMethod;
