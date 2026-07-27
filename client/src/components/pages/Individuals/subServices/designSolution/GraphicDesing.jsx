import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import {
  gdesign1,
  gdesign2,
  gdesign3,
  gdesign4,
} from "../../../../../assets/images";
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
  relate11,
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const GraphicDesign = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Design Solutions", url: "/services/designsolutions" },
    {
      displayName: "Graphic Design",
      url: "/services/designsolutions/graphic-design",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Graphic Design Services - Hire us today!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="With our experienced graphic design services, you can turn your ideas into compelling graphics. Increase the visual impact of your brand."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/4-9fda439d.png"
        ></meta>
        <meta
          property="og:title"
          content="Graphic Design Services - Hire us today!"
        ></meta>
        <meta
          property="og:description"
          content="With our experienced graphic design services, you can turn your ideas into compelling graphics. Increase the visual impact of your brand."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/design-solutions/graphic-design"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Graphic Design Service
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            Graphic design transcends colors and visuals; it is the art of
            narrating stories through captivating imagery and compelling
            visuals. At Mélange, embrace the influential potential of design to
            inspire, engage, and make a lasting impression on your audience.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h2 className="text-xl lg:leading-9 md:text-[32px] w-auto lg:w-[70%] font-semibold multiverse-text mb-2">
            We build strong visual identities for brands by focusing on the
            following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={gdesign1}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Animations
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our animators bring your ideas to life with fluid motions,
                seamless transitions, and stunning visual effects. Whether it's
                a promotional video, explainer animation, or motion graphics, we
                create animations that enhance your brand's presence.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={gdesign2}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Illustrations
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                As your design agency, we create custom illustrations that are
                as unique as your business. Whether it's for your website,
                marketing materials, or packaging, our illustrations add a touch
                of creativity and authenticity to your brand.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={gdesign3}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Social Media
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our approach to social media design emphasizes the visual and
                shareability aspects to build content that not only drives
                engagement but also builds a strong brand presence. We design
                graphics that spark conversations and meet your business goals.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={gdesign4}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Advertisements
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our team blends strategic thinking with creative expertise to
                create ads that connect with your audience. Whether it's print
                ads, digital or video ads, native ads, or outdoor signage, we
                craft visually stunning and persuasive advertisements.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Design Solutions Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-4 pb-4 lg:pb-20">
            <Link to="/work/kalon" className="my-4 md:my-0">
              <img src={relate8} alt="" />
              <div className="flex font-semibold  my-2 multiverse-text text-xs md:text-sm">
                <p className="whitespace-nowrap">Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p className="mx-2 md:mx-3">E-commerce</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Kalon
              </h2>
            </Link>

            <Link to="/work/proportunity" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate4} alt="" />
              <div className="flex font-semibold  my-2 multiverse-text text-xs md:text-sm">
                <p className="mx-2 md:mx-1">Website Development</p>
                <p>Performance Marketing</p>
                <p>Design</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Proportunity
              </h2>
            </Link>
            <Link to="/work/sportz-village" className="my-4 md:my-0">
              <img src={relate11} alt="" />
              <div className="flex font-semibold  my-2 multiverse-text text-xs md:text-sm">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Design</p>
                <p>Web Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Sportz Village
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Design Audit"} />
      <Footer />
    </div>
  );
};

export default GraphicDesign;
