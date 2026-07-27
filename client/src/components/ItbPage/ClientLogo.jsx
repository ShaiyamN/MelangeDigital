import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9,
  cl10,
  cl11,
  cl12,
  cl13,
  cl14,
  cl15,
  cl16,
} from "../../assets/itp";

const ClientLogo = () => {
  const clientImg = [
    cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8,
    cl9, cl10, cl11, cl12, cl13, cl14, cl15, cl16,
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full lg:px-20 px-5 lg:py-12 py-8 md:pt-20 font-bricolage max-container"
    >
      <h2 className="text-[#791FF0] lg:text-[50px] text-[30px] leading-[60px]">CLIENT WALL</h2>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mt-10">
        {clientImg.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.8 }} // Start from lower and zoomed-out
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="lg:w-[300px] lg:h-[200px] flex justify-center items-center"
          >
            <img
              src={img}
              alt={`client-${index + 1}`}
              className="w-[60%] object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogo;
