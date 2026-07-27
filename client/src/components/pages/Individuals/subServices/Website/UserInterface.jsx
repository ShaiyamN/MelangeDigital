import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { ui1, ui2, ui3, ui4 } from "../../../../../assets/images";
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

const Ui = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Website Development & SEO",
      url: "/services/website-development-seo",
    },
    {
      displayName: "UI/UX",
      url: "/services/website-development-seo/ui-ux",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Get Seamless Website UI/UX Service | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Create user-centric websites with our UI/UX design services. Elevate user experience and engagement with Mélange Digital."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/6-14ebd3d4.png"
        ></meta>
        <meta
          property="og:title"
          content="Get Seamless Website UI/UX Service | Mélange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Create user-centric websites with our UI/UX design services. Elevate user experience and engagement with Mélange Digital."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/website-development-seo/ui-ux"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            UI/UX Development Services
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            In the realm of UI/UX design, aesthetics are just the tip of the
            iceberg. The true power lies in crafting seamless and intuitive
            experiences that prioritize user needs.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-6 md:py-10">
          <h2 className="text-xl md:text-[32px] w-auto lg:w-[65%] font-semibold lg:leading-9 multiverse-text pb-2">
            We elevate brand's online presence by focusing on the following key
            areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ui1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Research
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We begin with comprehensive research to gain deep insights into
                your target audience, their preferences, pain points, and
                website behavior. This research forms the backbone of our
                website strategy, enabling us to create user-centric interfaces.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ui2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Strategy
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We meticulously craft the user journey on your website and
                strategically position engaging content and compelling CTAs to
                drive conversions. Our data-driven approach ensures that every
                step of the user experience is to achieve your business goal.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ui3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Figma Mockups
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                As your new-age web development agency, we use Figma which is a
                powerful design tool to create interactive and realistic
                mockups. It showcases the user flow, and visual elements of your
                UI/UX design in a collaborative and accessible manner.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ui4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Responsive and Adaptive Design
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We craft responsive and adaptive layouts that retain visual
                appeal and functionality, whether users access your website on a
                desktop, tablet, or smartphone.This consistency fosters brand
                recognition, irrespective of how they access your website.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Website Development Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
            <Link to="/work/kunal-rathod" className="my-4 md:my-0">
              <img src={relate7} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px] ">
                <p>Website Development</p>
                <p className="mx-2 md:mx-3">SEO</p>
                <p>SEM</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Kunal Rathod
              </h2>
            </Link>
            <Link to="/work/proportunity" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate4} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p>Website Development</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Design</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Proportunity
              </h2>
            </Link>

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
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Website Audit"} />
      <Footer />
    </div>
  );
};

export default Ui;
