import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { b1, b2, b3, b4 } from "../../../../../assets/images";
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

const B2bMarketing = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "B2B Marketing",
      url: "/services/content-marketing/b2b-marketing",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="B2B Marketing Agency Services"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our specialised content marketing services can help you achieve B2B success. Drive business development and engagement."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="B2B Marketing Agency Services"
        ></meta>
        <meta
          property="og:description"
          content="Our specialised content marketing services can help you achieve B2B success. Drive business development and engagement."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/b2b-marketing"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-body md:px-16 lg:pt-32 font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Your Digital B2B Marketing Agency
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            With the ever-changing business landscape, the laser-sharp focus has
            shifted from costs and profits to buyer journey and quality lead
            generation. Leveraging our extensive B2B experience & expertise, we
            create strategies that act like a blueprint for your business's
            success.
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
              <img src={b1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Whitepapers
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                As your content marketing agency, we create whitepapers that
                delve deep into your industry's challenges and solutions. With
                well-researched reports, we position your brand as a thought
                leader attracting the attention of key decision-makers.
              </p>
            </div>
            <div className="bg-white shadow-xl p-6 md:p-10">
              <img src={b2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Thought Leadership Articles
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We help you showcase your expertise, and provide valuable
                insights through thought-provoking articles, LinkedIn marketing,
                and newsletters. We position your brand at the forefront of your
                industry, and solidify your reputation as a trusted authority.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={b3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Industry Reports
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We deep dive into research to create comprehensive reports that
                offer valuable insights and actionable recommendations. By
                presenting data-driven reports, we enhance your brand's
                reputation, attracting new clients and fostering long-term
                partnerships.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={b4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Email Marketing Campaigns
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Cultivate and captivate B2B leads through tailored email
                campaigns. Our strategies, from personalized drip sequences to
                newsletters, intricately guide leads on their buyer's journey,
                fostering meaningful engagement and propelling conversions.
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

export default B2bMarketing;
