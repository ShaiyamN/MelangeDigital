import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pri1, pri2, pri3, pri4, pri5, pri6 } from "../../assets/newImages";

const CountingNumber = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(value / (duration * 60));

      const timer = setInterval(() => {
        if (start >= value) {
          clearInterval(timer);
        } else {
          setCount(start);
          start += increment;
        }
      }, 1000 / 60);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const OurPrinciples = () => {
  // Left to right variant
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Right to left variant
  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="lg:py-[120px] py-20 px-6 md:px-16 lg:px-24 font-bricolage max-container">
      <div className="">
        <h2 className="lg:text-[48px] text-[40px] font-bold mb-0">
          Our <span className="multiverse-text">Principles</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-x-[30px] gap-y-12 mt-10">
          <motion.div
            className="space-y-[12px]"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={pri1} alt="" className="w-16" />
            <p className="font-semibold lg:text-[24px] text-[23px] leading-[28px]">
              Devil is in the Details
            </p>
            <p className="lg:text-[19px] text-[16px] lg:leading-[30px] leading-[22px]">
              Every detail matters; small touches create big impacts. We create
              strategies that drive impact.
            </p>
          </motion.div>

          <motion.div
            className="space-y-[12px]"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={pri2} alt="" className="w-16" />
            <p className="font-semibold lg:text-[24px] text-[23px] leading-[28px]">
              Start From Scratch
            </p>
            <p className="lg:text-[19px] text-[16px] lg:leading-[30px] leading-[22px]">
              A creative environment is fostered where ideas flourish,
              transforming scribbles into groundbreaking campaigns.
            </p>
          </motion.div>

          <motion.div
            className="space-y-[12px]"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={pri3} alt="" className="w-16" />
            <p className="font-semibold lg:text-[24px] text-[23px] leading-[28px]">
              Learning is the Only Constant
            </p>
            <p className="lg:text-[19px] text-[16px] lg:leading-[30px] leading-[22px]">
              Continuous learning drives our success. We welcome change, staying
              ahead of industry trends to refine our strategies.
            </p>
          </motion.div>

          <motion.div
            className="space-y-[12px]"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={pri4} alt="" className="w-16" />
            <p className="font-semibold lg:text-[24px] text-[23px] leading-[28px]">
              Building Tomorrow, Today
            </p>
            <p className="lg:text-[19px] text-[16px] lg:leading-[30px] leading-[22px]">
              We design flexible strategies that anticipate tomorrow's
              challenges, ensuring you're a step ahead.
            </p>
          </motion.div>

          <motion.div
            className="space-y-[12px]"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={pri5} alt="" className="w-16" />
            <p className="font-semibold lg:text-[24px] text-[23px] leading-[28px]">
              Numbers Teach Us Best
            </p>
            <p className="lg:text-[19px] text-[16px] lg:leading-[30px] leading-[22px]">
              We analyse metrics for our approach, ensuring every move is
              data-driven, leading to smart decisions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-[12px]"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={pri6} alt="" className="w-16" />
            <p className="font-semibold lg:text-[24px] text-[23px] leading-[28px]">
              Technology is the Future
            </p>
            <p className="lg:text-[19px] text-[16px] lg:leading-[30px] leading-[22px]">
              By integrating the latest advancements, we create solutions that
              resonate with modern consumers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Counting Section */}
      <div className="lg:pt-[120px] pt-[40px]">
        <div className="font-bricolage max-container overflow-y-hidden">
          <div className="lg:grid flex lg:space-x-0 space-x-10 overflow-x-scroll overflow-y-hidden no-scrollbar lg:grid-cols-5 grid-cols-2 lg:gap-x-[30px]">
            {[
              { value: 71, label: "Valued Clients", duration: 2 },
              { value: 12, label: "Industry Honors", duration: 4 },
              {
                value: 21,
                label: "Media Spending",
                prefix: "$",
                suffix: "M",
                duration: 2,
              },
              { value: 5, label: "Countries Operations", duration: 2 },
              {
                value: 201,
                label: "Campaigns Delivered",
                duration: 3,
                suffix: "+",
              },
            ].map((item, index) => (
              <div className="px-0 flex items-center justify-center">
                <motion.div
                  className="py-5 rounded-[10px] flex flex-col items-center justify-center w-[140px]"
                  key={index}
                  variants={index % 2 === 0 ? rightVariant : leftVariant} // Alternate for counting section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h2 className="font-bold lg:text-[58px] text-[48px] multiverse-text">
                    {item.prefix && <span>{item.prefix}</span>}
                    <CountingNumber
                      value={item.value}
                      duration={item.duration}
                    />
                    {item.suffix && <span>{item.suffix}</span>}
                  </h2>
                  <p className="font-bold lg:text-[22px] text-[17px] lg:leading-[30px] leading-[24px] text-center">
                    {item.label.split(" ").map((text, i) => (
                      <span key={i}>
                        {text} <br />
                      </span>
                    ))}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrinciples;
