import React, { useState } from "react";
import { motion } from "framer-motion";

const WhatsAppWidget = () => {
  const [isChatVisible, setIsChatVisible] = useState(true); // Controls visibility of "Chat With Us"
  const phoneNumber = "919372567722"; // Replace with your WhatsApp number
  const message = "Hello! I'd like to know more about your services."; // Default message

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\s/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Entrance animation: starts off-screen
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8, // Animation duration
        delay: 0.5, // Delay for the widget to pop up
        ease: "easeOut", // Smooth easing
      }}
      className="fixed bottom-5 right-5 z-50"
    >
      {/* Outer container to handle transitions */}
      <motion.div
        animate={{
          height: isChatVisible ? "auto" : "60px", // Shrinks when "Chat With Us" is hidden
        }}
        transition={{
          duration: 0.5, // Smooth transition duration
          ease: "easeOut", // Smooth easing
        }}
        className="flex flex-col items-center space-y-1 font-bricolage"
      >
        {/* "Chat With Us" Section */}
        {isChatVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Starts invisible and slightly smaller
            animate={{ opacity: 1, scale: 1 }} // Becomes fully visible and normal size
            transition={{
              duration: 1, // Animation duration
              delay: 0.5, // Delay for the entrance
              ease: "easeOut", // Smooth easing
            }}
            whileHover={{ scale: 1.05 }} // Slight scaling on hover
            className="flex items-center justify-between bg-black text-white rounded-full px-4 py-2 shadow-lg cursor-pointer w-full"
            onClick={openWhatsApp}
          >
            {/* Left Section */}
            <div className="flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm font-medium">Chat With Us</span>
            </div>

            {/* Close Button */}
            <button
              className="ml-3 -mt-1 text-white text-lg font-bold hover:text-green-400 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the WhatsApp link
                setIsChatVisible(false); // Hide the "Chat With Us" section
              }}
            >
              ×
            </button>
          </motion.div>
        )}

        {/* WhatsApp Icon Section */}
        <motion.div
          initial={{ scale: 0 }} // Icon pops in from nothing
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} // Delay for the icon
          className="flex justify-center cursor-pointer"
          onClick={openWhatsApp}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-[60px] h-[60px] hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppWidget;
