import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { v1, v2, v3, v4 } from "../../../../../assets/images";
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

const Videography = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Videography",
      url: "/services/content-marketing/video-graphy",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Elevate your Brand with Our Video Graphy Service"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Get our video-graphy services to enhance your content strategy and engage your customers effectively."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Elevate your Brand with Our Video Graphy Service"
        ></meta>
        <meta
          property="og:description"
          content="Get our video-graphy services to enhance your content strategy and engage your customers effectively."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/video-graphy"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Elevate Your Brand with Video Marketing
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            With the rise in consumption of video content, brands have an
            unprecedented opportunity to captivate their audience's attention
            like never before through the power of visual storytelling.
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
              <img src={v1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-5">
                Purpose
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We start by defining a purpose of the video - is it to create
                awareness, to promote a product or service, to engage with the
                audience ? This is followed by an audience v/s platform study to
                choose the right visuals and messaging for your respective
                target audiences.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={v2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-5">
                The Big Idea
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                A strong concept and compelling story are crucial for creating
                an impactful video. As you content marketing agency, we work
                closely with you to develop a unique and engaging idea that
                brings your message to life.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={v3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-5">
                Format
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                From brand films to viral & shareable social media videos to TV
                commercials, our experts can handle it all. We carefully
                consider the platforms where your video will be showcased,
                allowing us to determine the ideal length, frequency, and
                placement.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={v4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-5">
                Storyboarding and Script Development
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Once the format is defined, our team dives into crafting a
                compelling storyboard and script. We meticulously plan each
                scene, shot, and transition to bring your big idea to life. The
                script is carefully crafted to convey your message effectively.
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

export default Videography;
