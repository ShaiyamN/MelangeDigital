import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { mg1, mg2, mg3, mg4 } from "../../../../../assets/images";
import { Link } from "react-router-dom";
import {
  relate1,
  relate10,
  relate2,
  relate3,
  relate4,
  relate5,
  relate6,
  relate7,
  relate8,
  relate9,
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const MotionGraphics = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Motion Graphics",
      url: "/services/content-marketing/motion-graphics",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Motion Graphics Design Services"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Step up your content game with motion graphics. Our motion graphics service make your brand story pop with visually engaging narratives."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Motion Graphics Design Services"
        ></meta>
        <meta
          property="og:description"
          content="Step up your content game with motion graphics. Our motion graphics service make your brand story pop with visually engaging narratives."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/motion-graphics"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-body md:px-16 lg:pt-32 font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6  pb-3 md:px-16 md:pb-16  lg:px-28 lg:pb-4 ">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Captivate your Audience with Our Motion Graphic Service
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            Unleash the power of motion graphics for your brands - simplify
            complexity, captivate your audience, and leave a lasting impression.
            In today's digital realm, where attention is scarce and information
            is overwhelming, these dynamic videos present information in an
            easily digestible format while engaging your audience.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-6 md:py-10">
          <h2 className="text-xl md:text-[32px] w-auto lg:w-[75%] font-semibold lg:leading-9 multiverse-text pb-2">
            We build brands & narratives by focusing on the following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mg1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Explainer Videos
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We create explainer videos that demystify intricate ideas and
                concepts. By blending engaging graphics, informative narration,
                and seamless animations, we ensure your audience grasps and
                retains crucial information about your products or services.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mg2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Emotive Videos
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We craft videos that go beyond mere visuals, they tell stories
                that resonate deeply with your audience. Our approach involves a
                meticulous blend of visuals, music, and motion graphics to evoke
                specific emotions, creating a lasting connection.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mg3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Instructional Videos
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We craft videos that go beyond mere visuals, they tell stories
                that resonate deeply with your audience. Our approach involves a
                meticulous blend of visuals, music, and motion graphics to evoke
                specific emotions, creating a lasting connection.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mg4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Animated Ads
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Capture your audience's attention with animated ads that convey
                your message in a memorable way. Ads are crafted to build a
                unique connection with your audience. Leverage motion graphics
                to cut through the noise and leave a lasting impact.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Content Marketing Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
            <Link to="/work/duvon" className="my-4 md:my-0">
              <img src={relate5} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p className="whitespace-nowrap">Social Media</p>
                <p className="whitespace-nowrap mx-2 md:mx-3">E-commerce</p>
                <p className="">Website Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Duvon Disney
              </h2>
            </Link>
            <Link to="/work/active-club" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate6} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Influencer Marketing</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Active Club
              </h2>
            </Link>
            <Link to="/work/make-my-trip" className="my-4 md:my-0">
              <img src={relate1} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px] ">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Activations</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                MakeMyTrip Holidays
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Content Audit"} />
      <Footer />
    </div>
  );
};

export default MotionGraphics;
