import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { cd1, cd2, cd3, cd4, cd5, cd6 } from "../../../../../assets/images";
import { Link } from "react-router-dom";
import {
  relate10,
  relate2,
  relate3,
  relate4,
  relate5,
  relate6,
  relate8,
  relate9,
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const CommDesign = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Brand Strategy", url: "/services/brand-strategy" },
    {
      displayName: " Communication Design",
      url: "/services/brand-strategy/communication-design",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Visual Communication Design Agency"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Transform ideas into compelling visuals. Our communication design services amplify brand messages effectively. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        ></meta>
        <meta
          property="og:title"
          content="Visual Communication Design Agency"
        ></meta>
        <meta
          property="og:description"
          content="Transform ideas into compelling visuals. Our communication design services amplify brand messages effectively. Contact us today!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy/communication-design"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-base md:text-lg px-6 md:px-16 lg:px-28 font-semibold pt-24  md:pt-16 lg:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Visual Communication Design Service
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            Effective communication lies at the core of a successful brand
            strategy. It goes beyond conveying just information; it's about
            forging deeper connections and inspiring action.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h2 className="text-xl lg:leading-9 md:text-[32px] w-auto lg:w-[68%] font-semibold multiverse-text mb-2">
            We build strong brands by focusing on the following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cd1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Multichannel Integration
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                In a multi-platform world, we ensure consistent and impactful
                brand messaging across all channels. From websites to social
                media, email marketing to print collateral, we create a seamless
                and integrated brand experience.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cd2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Voice
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We craft a strategic voice that resonates with your target
                audience. With a coherent and captivating voice, we infuse your
                brand's communication with clarity, consistency, and
                authenticity, ensuring that every message commands attention.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cd3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Logo
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We craft visually captivating logos that capture your brand's
                essence, embody its values, and serve as a visual beacon for
                your identity. Every element, including colors, and visual
                elements, is guided by your brand's essence.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cd4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Design Guidelines
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                As your branding agency, we create detailed design guidelines,
                establishing a framework for consistency in visual elements such
                as typography, color schemes, logo guidelines, and imagery. This
                ensures your brand's visual language remains cohesive and
                impactful.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cd5} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Key Visual
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Through compelling key visuals, we weave stories that engage and
                captivate your audience. These visuals are designed to evoke
                powerful narratives, spark curiosity and build a lasting
                connection with your brand.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cd6} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Packaging Design
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We elevate your brand's physical presence with innovative and
                visually appealing packaging designs, delivering an enchanting
                experience. From the first glimpse, we craft a sensory journey
                that evokes delight, leaving customers enamored with your brand.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold ">
            Brand Strategy Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-4 pb-4 lg:pb-20">
            <Link to="/work/sportz-village-xp" className="my-4 md:my-0">
              <img src={relate2} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-sm">
                <p className="whitespace-nowrap">Thought Leadership</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Sportz Village XP
              </h2>
            </Link>
            <Link to="/work/dhruvak" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate3} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-sm">
                <p>B2C Launch</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Dhruvak
              </h2>
            </Link>
            <Link to="/work/costa-cruises" className="my-4 md:my-0">
              <img src={relate10} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-sm ">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Web Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Costa Cruises
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Brand Audit"} />
      <Footer />
    </div>
  );
};

export default CommDesign;
