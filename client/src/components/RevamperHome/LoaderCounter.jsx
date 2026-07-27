import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useSpring } from 'framer-motion';

const LoaderCounter = () => {
  const [counter, setCounter] = useState(0);
  const controls = useAnimation();

  // Use a spring to smoothly transition the count value
  const springCounter = useSpring(0, { stiffness: 100, damping: 10 });

  useEffect(() => {
    // Animate to 100 over 4 seconds
    controls.start({
      count: 100,
      transition: { duration: 4.0, ease: "easeInOut" }
    });

    // Update the counter using the spring animation
    springCounter.onChange((latest) => {
      setCounter(Math.round(latest));
    });

    // Cleanup
    return () => springCounter.stop();
  }, [controls, springCounter]);

  useEffect(() => {
    // Animate spring counter to 100
    springCounter.set(100);
  }, [springCounter]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="text-6xl font-bold text-blue-600"
        animate={controls}
      >
        {counter}%
      </motion.div>
    </div>
  );
};

export default LoaderCounter;
