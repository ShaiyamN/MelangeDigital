import React from "react";
import { motion } from "framer-motion";
import { ai, Img5k, inf1, inf4, inf3, inf2, Img5kMob } from "../../assets/itp";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Ai5K = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative w-full lg:px-20 px-5 lg:py-12 py-8 md:pt-20 pt-20 font-bricolage max-container"
    >
      {/* Top Section */}
      <motion.div
        variants={fadeInUp}
        className="grid md:grid-cols-2 gap-6 items-center"
      >
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold lg:block hidden">
            Advanced AI <br />
            Influencer Tools
          </h2>
          <div className="">
            <h2 className="text-2xl md:text-3xl font-semibold lg:hidden block mb-5">
              Advanced AI
            </h2>
            <motion.div
              variants={fadeInUp}
              className="relative lg:hidden block"
            >
              <motion.img
                src={ai}
                alt="AI Tools"
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <h2 className="text-2xl text-right md:text-3xl font-semibold lg:hidden block mb-5">
              Influencer Tools
            </h2>
          </div>
          <div className="py-5 lg:block hidden">
            <svg
              width="2"
              height="150"
              viewBox="0 0 2 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.19019 0.410156V203.74"
                stroke="#781FF0"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <p className="text-sm md:text-base leading-relaxed ">
            AI-driven tools provide deep insights beyond basic metrics,
            uncovering fake followers, sentiment trends, engagement depth, past
            brand affiliations, and audience demographics.
          </p>
        </div>

        {/* Right Side - AI Image */}
        <motion.div variants={fadeInUp} className="relative lg:block hidden">
          <motion.img
            src={ai}
            alt="AI Tools"
            className="w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* Influencer Access Section */}
      <motion.div
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-12 items-center mt-12"
      >
        {/* Left Side - 5000+ Influencers */}
        <motion.div variants={fadeInUp}>
          <h3 className="lg:text-[35px] text-2xl font-semibold text-gray-900">
            Access To
          </h3>
          <img src={Img5k} alt="5000 Influencers" className="lg:block hidden" />
          <img src={Img5kMob} alt="5000 Influencers" className="lg:hidden" />
          <h3 className="lg:text-[35px] text-2xl font-semibold text-gray-900 text-right">
            Influencers
          </h3>
          <p className="text-base font-semibold lg:leading-relaxed leading-[18px] lg:mt-0 mt-3">
            Connect with Influencers from networks across <br className="lg:block hidden" />
            <span className="text-[#791FF0]">
              {" "}
              GCC, UK, US, Europe, India & Asia,{" "}
            </span>{" "}
            <br className="lg:block hidden" />
            to amplify your campaigns with region-specific authenticity.
          </p>
        </motion.div>

        {/* Right Side - Image Stack */}
        <motion.div className="relative lg:flex hidden justify-center items-center -space-x-32 h-[500px]">
          {/* Image 1 */}
          <motion.img
            src={inf1}
            alt="Influencer 1"
            className="w-[200px] h-[400px] mt-[0px] z-30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            whileHover={{ scale: 1.1 }}
          />

          {/* Image 2 */}
          <motion.img
            src={inf2}
            alt="Influencer 2"
            className="w-[200px] h-[400px] mt-[60px] z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            whileHover={{ scale: 1.1 }}
          />

          {/* Image 3 */}
          <motion.img
            src={inf3}
            alt="Influencer 3"
            className="w-[200px] h-[400px] mt-[90px] z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            whileHover={{ scale: 1.1 }}
          />

          {/* Image 4 */}
          <motion.img
            src={inf4}
            alt="Influencer 4"
            className="w-[200px] h-[400px] mt-[150px] z-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ai5K;
