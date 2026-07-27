import React from "react";
import { motion } from "framer-motion";
import {
  explore,
  lable1a,
  lable2a,
  lable2b,
  lable3a,
  lable3b,
  lable4a,
  lable4b,
  lable5a,
  whatWePack,
  arrow,
  mSer2,
  mSer3,
  mSer4,
  mSer5,
  mSer1,
} from "../../assets/itp";
import { Link } from "react-router-dom";
const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const ServicesMel = () => {
  const services = [
    {
      sr: "01",
      title: "CELEBRITIES & INFLUENCER CAMPAIGNS",
      description:
        "Amplify your destination’s appeal with credible KOLs and celebrity voices. We connect you with vetted creators who drive real engagement and inspire travel. ",
      image: mSer1, // Replace with actual path
      paths: "https://melangedigital.co/services/influencer-marketing",
    },
    {
      sr: "02",
      title: "Website Development",
      description:
        "Seamless, stunning, and built for conversions. Our web solutions create interactive digital experiences that captivate and convert travelers.",
      image: mSer2,
      paths: "https://melangedigital.co/services/design-and-development",
    },
    {
      sr: "03",
      title: "Positioning & Social Media",
      description:
        "Stand out in a crowded market with a strong brand presence and data-driven content strategies tailored to inspire action.",
      image: mSer3,
      paths: "https://melangedigital.co/services/brand-strategy",
    },
    {
      sr: "04",
      title: "Intellectual Property",
      description:
        "Leverage PR, media relations, and digital IPs to maximize visibility and cultural impact.",
      image: mSer4,
      paths: "https://melangedigital.co/services/pr-and-outreach",
    },
    {
      sr: "05",
      title: "Branded Content",
      description:
        "Leverage PR, media relations, and digital IPs to maximize visibility and cultural impact.",
      image: mSer5,
      paths: "https://melangedigital.co/services/immersive-brand-storytelling",
    },
  ];
  return (
    <div className="font-bricolage">
      <div className=" lg:block hidden">
        <section className="px-20 font-bricolage border-t-4 py-20 border-[#791FF0] relative">
          <div className="">
            <img src={whatWePack} alt="" />
          </div>

          <div className="absolute top-[60%] left-[10%]">
            <p className="w-[161px] text-[14px] leading-[16px]">
              We offer a wide range of custom-made services tailored to bring
              you the footfalls you need.
            </p>
            <div className="">
              <img src={arrow} alt="" className="w-[50%] mt-3" />
            </div>
          </div>
        </section>
        <section className="pb-20 font-bricolage mt-20">
          <div className="01 flex items-center justify-between gap-x-20 ml-20 xxl:ml-40">
            <motion.div
              className="01 w-[20%]"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[27px] ">01</p>
              <div className="">
                <svg
                  width="89"
                  height="2"
                  viewBox="0 0 89 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.5201 0.540039H0.00012207V1.64001H88.5201V0.540039Z"
                    fill="#791FF0"
                  />
                </svg>
              </div>

              <p className="text-[34px] leading-[41px] pt-6">
                CELEBRITIES & INFLUENCER CAMPAIGNS
              </p>

              <p className="text-[14px] leading-[16px] mt-2">
                Amplify your destination’s appeal with credible KOLs and
                celebrity voices. We connect you with vetted creators who drive
                real engagement and inspire travel.
              </p>

              <a
                href="https://melangedigital.co/services/influencer-marketing"
                target="_blank"
              >
                <motion.div
                  className="flex items-center space-x-2 pt-10 group"
                  whileHover={{ x: 5 }} // Moves the whole group slightly on hover
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <p className="text-[14px] leading-[16px] transition-colors group-hover:text-[#791FF0]">
                    EXPLORE
                  </p>
                  <motion.span
                    className="transition-transform"
                    whileHover={{ scale: 1.1, rotate: 10 }} // Applies effect when hovering on the whole group
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={explore} alt="" />
                  </motion.span>
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              className="w-[80%] flex items-end justify-end"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={lable1a} alt="lg:h-[170px] xxxl:h-[190px]" />
            </motion.div>
          </div>

          <div className="02 flex items-center justify-between gap-x-20 mt-20">
            <motion.div
              className="w-[30%]"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable2a}
                alt=""
                className="lg:h-[170px] xxxl:h-[220px]"
              />
            </motion.div>
            <div className=" w-[20%]">
              <p className="text-[27px] ">02</p>
              <div className="">
                <svg
                  width="89"
                  height="2"
                  viewBox="0 0 89 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.5201 0.540039H0.00012207V1.64001H88.5201V0.540039Z"
                    fill="#791FF0"
                  />
                </svg>
              </div>

              <p className="text-[34px] leading-[41px] pt-6">
                WEBSITE DEVELOPMENT
              </p>

              <p className="text-[14px] leading-[16px] mt-2">
                Seamless, stunning, and built for conversions. Our web solutions
                create interactive digital experiences that captivate and
                convert travelers.
              </p>

              <a
                href="https://melangedigital.co/services/design-and-development"
                target="_blank"
              >
                <motion.div
                  className="flex items-center space-x-2 pt-10 group"
                  whileHover={{ x: 5 }} // Moves the whole group slightly on hover
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <p className="text-[14px] leading-[16px] transition-colors group-hover:text-[#791FF0]">
                    EXPLORE
                  </p>
                  <motion.span
                    className="transition-transform"
                    whileHover={{ scale: 1.1, rotate: 10 }} // Applies effect when hovering on the whole group
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={explore} alt="" />
                  </motion.span>
                </motion.div>
              </a>
            </div>

            <motion.div
              className="w-[50%] flex items-center justify-end"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable2b}
                alt=""
                className="lg:h-[170px] xxxl:h-[220px]"
              />
            </motion.div>
          </div>

          <div className="03 flex items-center gap-x-10 mt-20">
            <motion.div
              className="w-[50%]"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable3a}
                alt=""
                className="lg:h-[170px] xxxl:h-[220px]"
              />
            </motion.div>
            <div className=" w-[20%]">
              <p className="text-[27px] ">03</p>
              <div className="">
                <svg
                  width="89"
                  height="2"
                  viewBox="0 0 89 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.5201 0.540039H0.00012207V1.64001H88.5201V0.540039Z"
                    fill="#791FF0"
                  />
                </svg>
              </div>

              <p className="text-[34px] leading-[41px] pt-6">
                Positioning & Social Media
              </p>

              <p className="text-[14px] leading-[16px] mt-2">
                Stand out in a crowded market with a strong brand presence and
                data-driven content strategies tailored to inspire action.
              </p>

              <a
                href="https://melangedigital.co/services/brand-strategy"
                target="_blank"
              >
                <motion.div
                  className="flex items-center space-x-2 pt-10 group"
                  whileHover={{ x: 5 }} // Moves the whole group slightly on hover
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <p className="text-[14px] leading-[16px] transition-colors group-hover:text-[#791FF0]">
                    EXPLORE
                  </p>
                  <motion.span
                    className="transition-transform"
                    whileHover={{ scale: 1.1, rotate: 10 }} // Applies effect when hovering on the whole group
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={explore} alt="" />
                  </motion.span>
                </motion.div>
              </a>
            </div>

            <motion.div
              className="w-[50%] flex items-center justify-end"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable3b}
                alt=""
                className=" lg:h-[170px] xxxl:h-[220px]"
              />
            </motion.div>
          </div>

          <div className="04 flex items-center gap-x-10 mt-20">
            <motion.div
              className="w-[70%]"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable4a}
                alt=""
                className="lg:h-[170px] xxxl:h-[220px]"
              />
            </motion.div>
            <div className=" w-[20%]">
              <p className="text-[27px] ">04</p>
              <div className="">
                <svg
                  width="89"
                  height="2"
                  viewBox="0 0 89 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.5201 0.540039H0.00012207V1.64001H88.5201V0.540039Z"
                    fill="#791FF0"
                  />
                </svg>
              </div>

              <p className="text-[34px] leading-[41px] pt-6">
                INTELLECTUAL PROPERTY
              </p>

              <p className="text-[14px] leading-[16px] mt-2">
                Leverage PR, media relations, and digital IPs to maximize
                visibility and cultural impact.
              </p>

              <a
                href="https://melangedigital.co/services/pr-and-outreach"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="flex items-center space-x-2 pt-10 group"
                  whileHover={{ x: 5 }} // Moves the whole group slightly on hover
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <p className="text-[14px] leading-[16px] transition-colors group-hover:text-[#791FF0]">
                    EXPLORE
                  </p>
                  <motion.span
                    className="transition-transform"
                    whileHover={{ scale: 1.1, rotate: 10 }} // Applies effect when hovering on the whole group
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={explore} alt="" />
                  </motion.span>
                </motion.div>
              </a>
            </div>

            <motion.div
              className="w-[30%] flex items-center justify-end"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable4b}
                alt=""
                className="lg:h-[170px] xxxl:h-[220px] mt-0"
              />
            </motion.div>
          </div>

          <div className="05 flex items-center gap-x-10 mt-20">
            <motion.div
              className="w-[70%]"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={lable5a}
                alt=""
                className="lg:h-[170px] xxxl:h-[220px]"
              />
            </motion.div>
            <motion.div
              className=" w-[20%]"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[27px] ">05</p>
              <div className="">
                <svg
                  width="89"
                  height="2"
                  viewBox="0 0 89 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.5201 0.540039H0.00012207V1.64001H88.5201V0.540039Z"
                    fill="#791FF0"
                  />
                </svg>
              </div>

              <p className="text-[34px] leading-[41px] pt-6">BRANDED CONTENT</p>

              <p className="text-[14px] leading-[16px] mt-2">
                Transform your brand into an experience through immersive
                narratives and engaging content.
              </p>

              <a
                href="https://melangedigital.co/services/immersive-brand-storytelling"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="flex items-center space-x-2 pt-10 group"
                  whileHover={{ x: 5 }} // Moves the whole group slightly on hover
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <p className="text-[14px] leading-[16px] transition-colors group-hover:text-[#791FF0]">
                    EXPLORE
                  </p>
                  <motion.span
                    className="transition-transform"
                    whileHover={{ scale: 1.1, rotate: 10 }} // Applies effect when hovering on the whole group
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={explore} alt="" />
                  </motion.span>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="lg:hidden">
        <section className="py-10 px-5">
          <div className="relative">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-6 mb-12 pl-0 relative"
              >
                {/* Image */}

                {/* Text Content */}
                <div className=" relative">
                  <p className="text-[10px] mb-1">{service.sr}</p>
                  <h3
                    className={`text-[20px] leading-[25px] font-semibold w-[45%] ${
                      index === 0 ? "absolute top-[20px] left-[0px]" : ""
                    }`}
                  >
                    {service.title}
                  </h3>
                  <div className="border-b-4 border-[#791FF0] flex items-center justify-end -mt-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`${index === 0 ? "w-[60%]" : ""}`}
                    />
                  </div>
                  <p className="text-[12px] leading-[14px] mt-2">
                    {service.description}
                  </p>

                  <a href={service.paths} target="_blank">
                    <div className="flex items-center space-x-2 pt-8">
                      <p className="text-[10px] leading-[10px]">EXPLORE </p>
                      <span>
                        <img src={explore} alt="" className="w-[70%]" />
                      </span>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesMel;
