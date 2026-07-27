import React from "react";
import { Part_bg, Part_bg_M, VectorSpread2 } from "../../assets/performancePage";

const Part4 = () => {
  return (
    <div className="">
      <div className="font-bricolage relative">
        <img src={Part_bg} alt="" className="w-full lg:block hidden" />
        <img src={Part_bg_M} alt="" className="w-full lg:hidden h-[750px]" />

        <div className="absolute lg:top-16 top-16 lg:left-1/2 transform lg:-translate-x-1/2 text-white max-container">
          <p className="font-bricolage font-bold text-[26px] leading-[32px] lg:text-center px-5 lg:px-0">
            The 4-Part System Behind Predictable, <br />
            Scalable Brand Growth
          </p>

          <div className="lg:px-20 px-5 lg:space-y-[30px] space-y-5 lg:pt-14 pt-10 lg:w-auto w-[250px] ">
            <div className="lg:flex items-center lg:space-x-[13rem] lg:space-y-0 space-y-5 ">
              <div className="flex space-x-5 items-center relative">
                <p className="text-[60px] leading-[100px] min-w-[33px]">1</p>
                <div className="">
                  <p className="text-[16px] leading-[21px] mb-2 font-bold">
                    Clarifying Your Value & Messaging
                  </p>
                  <p className="text-[10px] lg:w-[400px] w-[250px]">
                    Before scaling, we refine. We dig deep into what makes your
                    brand stick and turn that into messaging that hooks
                    attention and drives conversions.
                  </p>
                </div>

                <img
                  src={VectorSpread2}
                  alt=""
                  className="absolute w-[500px] -left-40"
                />
              </div>

              <div className="flex space-x-5 items-center relative">
                <p className="text-[60px] leading-[100px] min-w-[33px]">2</p>
                <div className="">
                  <p className="text-[16px] leading-[21px] mb-2 font-bold">
                    Building the Right Infrastructure
                  </p>
                  <p className="text-[10px] lg:w-[400px] w-[250px]">
                    We set up the backend systems, data pipelines, attribution
                    models and creative testing processes so scaling isn’t a
                    gamble but a formula.
                  </p>
                </div>

                <img
                  src={VectorSpread2}
                  alt=""
                  className="absolute w-[500px] -left-48"
                />
              </div>
            </div>

            <div className=" lg:flex items-center lg:space-x-[9rem] lg:pl-32 lg:space-y-0 space-y-5">
              <div className="flex space-x-5 items-center relative">
                <p className="text-[60px] leading-[100px] min-w-[33px]">3</p>
                <div className="">
                  <p className="text-[16px] leading-[21px] mb-2 font-bold">
                    Launching & Scaling Profitably
                  </p>
                  <p className="text-[10px] lg:w-[400px] w-[250px]">
                    We launch media with ROAS in mind, not just reach. Through
                    granular targeting, creative science and sharp optimization,
                    we unlock scalable growth.
                  </p>
                </div>

                <img
                  src={VectorSpread2}
                  alt=""
                  className="absolute w-[500px] -left-48"
                />
              </div>

              <div className="flex space-x-5 items-center relative">
                <p className="text-[60px] leading-[100px] min-w-[33px]">4</p>
                <div className="">
                  <p className="text-[16px] leading-[21px] mb-2 font-bold">
                    Full Ownership & Strategic Control
                  </p>
                  <p className="text-[10px] lg:w-[400px] w-[250px]">
                    We don’t just hand you reports. We empower you with
                    dashboards, insights and control to scale or pause based on
                    business realities. Every rupee is accounted for.
                  </p>
                </div>
                <img
                  src={VectorSpread2}
                  alt=""
                  className="absolute w-[500px] -left-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;
