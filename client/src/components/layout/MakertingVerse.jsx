import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Import motion for animations
import Logo from "./Logo";
import ContactButton from "./ContactButton";

const CountingNumber = ({ value, duration }) => {
  const [count, setCount] = useState(value);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(value / (duration * 60));
      setCount(0); // reset to 0 right as animation begins — intentional count-up effect

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value); // snap to exact final value
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const MakertingVerse = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Calculate the width of the text to set the distance for scrolling
    const distance = marqueeElement.scrollWidth / 2;

    // GSAP Timeline for infinite scroll
    gsap.to(marqueeElement, {
      x: -distance,
      duration: 10, // Adjust the duration as needed
      ease: "linear",
      repeat: -1, // Infinite looping
      modifiers: {
        // Ensure smooth looping by wrapping the translateX value
        x: gsap.utils.unitize((x) => parseFloat(x) % distance),
      },
    });
  }, []);

  // Define animation variants for the number cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="md:px-0 md:pt-0 md:pb-20 pb-10 bg-white font-bricolage ">
      <div className="w-full">
        <div
          className="relative overflow-hidden"
          style={{ width: "100%", whiteSpace: "nowrap" }}
        >
          <div className="flex" ref={marqueeRef}>
            {/* Duplicated text to create a seamless scroll effect */}
            <motion.h2
              className="multiverse-text lg:text-[164px] text-[84px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Success Isn’t Just Talk It’s Our Track Record!&nbsp;
            </motion.h2>
            <motion.h2
              className="multiverse-text lg:text-[164px] text-[84px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Success Isn’t Just Talk It’s Our Track Record!&nbsp;
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-7 lg:gap-x-10 max-container ">
         
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            As an award-winning digital marketing agency, we don’t just talk the
            talk—we walk the walk! With over 70 valued clients and $20M media
            spending, our results truly speak for themselves. Our expert team
            blends cutting-edge technology with innovative strategies, making
            waves in the industry.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We take pride in earning top honours that reflect our commitment to
            excellence. Let’s turn your vision into a success story together!
            From boosting brand visibility to driving growth, we deliver results
            that matter. Join forces with us and experience the power of
            data-driven, creative marketing at its finest!
          </motion.p>
        </div>

        {/* Animation Numbers */}
        <div className="font-bricolage  max-container overflow-y-hidden">
          <div className=" lg:grid  flex  lg:space-x-0 space-x-10 lg:overflow-x-hidden overflow-x-scroll overflow-y-hidden lg:grid-cols-5 grid-cols-2 lg:gap-x-[30px] lg:px-20 px-5 lg:pt-[50px] pt-[20px]">
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
              <div className="px-0 flex items-center justify-center" >
                <motion.div
                  className="text-center py-5 rounded-[10px] lg:w-[150px] w-[140px]"
                  key={index}
                  variants={cardVariants}
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
                  <p className="font-bold lg:text-[22px] text-[17px] lg:leading-[30px] leading-[24px]">
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

export default MakertingVerse;