import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { p1, p2, p3, p4 } from "../../../../../assets/images";
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

const Photography = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Photography",
      url: "/services/content-marketing/photo-graphy",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Best Photo Graphy Service In India"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our photography services brings your content strategy, establishing a visual connection with your audience."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Best Photo Graphy Service In India"
        ></meta>
        <meta
          property="og:description"
          content="Our photography services brings your content strategy, establishing a visual connection with your audience."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/photo-graphy"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-body md:px-16 lg:pt-32 font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Get a Perfect Photo with our Photography Service
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            With the advent of the social media age, everything is all about
            photos. Brands all over the world are leveraging the power of
            high-quality photography to forge emotional connections with their
            audience and drive digital growth .
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
              <img src={p1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Purpose
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Every photograph we capture serves a purpose - whether it's to
                showcase your products, highlight your brand's personality, or
                evoke an emotion. Through in-depth understanding of your brand,
                we ensure each photograph tells a unique story.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={p2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Building Moodboards
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We tailor our photography style to embody your brand's identity.
                Whether you seek clean and minimalist imagery, vibrant and
                energetic shots, or something unique and unconventional, we
                create moodboards around every theme.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={p3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Execution
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                From product photography to destination photography, our
                photographers create magic with their blend of creative and
                technical expertise. With an eye for composition and a keen
                sense of visual aesthetics, they bring out the beauty in every
                subject.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={p4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Platform Specific Adaptations
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                From websites and social media platforms to print materials and
                advertising campaigns, we understand the nuanced requirements of
                each platform. We ensure that the visuals seamlessly integrate
                with your content strategy and resonate with your target
                audience.
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

export default Photography;
