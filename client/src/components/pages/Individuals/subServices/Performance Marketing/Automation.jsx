import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { auto1, auto2, auto3, auto4 } from "../../../../../assets/images";
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

const Automation = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Performance Marketing",
      url: "/services/performance-marketing",
    },
    {
      displayName: "Automation",
      url: "/services/performance-marketing/automation",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Automating Performance Marketing | Boost Efficiency | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Streamline campaigns with performance marketing automation. Boost productivity and results. Discover more at Mélange Digital."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/5-f184ff01.png"
        ></meta>
        <meta
          property="og:title"
          content="Automating Performance Marketing | Boost Efficiency | Mélange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Streamline campaigns with performance marketing automation. Boost productivity and results. Discover more at Mélange Digital."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/performance-marketing/automation"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Business Process Automation Services
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            Automation is the key to staying ahead in the ever-evolving digital
            world. We are a performance marketing agency that leverage advance
            tools & technologies to automate repetitive tasks, so that the focus
            can be on the important strategies that drive tangible results.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-6 md:py-10">
          <h2 className="text-xl md:text-[32px] w-auto lg:w-[65%] font-semibold lg:leading-9 multiverse-text pb-2">
            We increase your ROI by focusing on the following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={auto1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                CRM
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We integrate your business with a user friendly CRM that
                entralizes all customer data, interactions, and communications.
                This helps your team to manage leads, track customer
                interactions, and automate key processes, streamlining your
                sales and marketing efforts.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={auto2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Email Marketing
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We craft compelling content that resonates with your audience
                and fosters strong customer relationships. By employing
                segmentation and automation to deliver targeted messages at the
                right time, we ensure maximum impact and improved conversion
                rates.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={auto3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                WhatsApp Marketing
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Instant & personalised messaging creates meaningful connections,
                and drive exceptional results for your business.We craft
                promotional offers, product updates, and customer support in
                real-time, fostering instant communication and building brand
                loyalty.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={auto4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Data Integration and Reporting
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We integrate data from various sources, to provide a holistic
                view of your performance marketing campaigns. We set up
                automated reporting systems with customized dashboards that
                deliver real-time insights, allowing you to make informed
                decisions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Performance Marketing Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
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
            <Link to="/work/zee5" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate9} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p>B2C</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Zee5
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
      <CTAButton buttonName={"Request an Ad Audit"} />
      <Footer />
    </div>
  );
};

export default Automation;
