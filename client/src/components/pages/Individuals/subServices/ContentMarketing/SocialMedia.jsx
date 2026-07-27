import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { sm1, sm2, sm3, sm4 } from "../../../../../assets/images";
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

const SocialMedia = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Social Media",
      url: "/services/content-marketing/social-media",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Social Media Marketing for Businesses"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="With our dynamic social media content marketing services, you can boost your brand's visibility. Effectively engage your audience today!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Social Media Marketing for Businesses"
        ></meta>
        <meta
          property="og:description"
          content="With our dynamic social media content marketing services, you can boost your brand's visibility. Effectively engage your audience today!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/social-media"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Social Media Marketing for your Businesses
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[82%]">
            As your social media marketing agency, trust us to infuse your
            brand's social media profile with sophistication and sass, capturing
            the attention and admiration of your followers
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
              <img src={sm1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Reels Marketing
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We curate interactive, relatable and shareable video content by
                leveraging trending topics and challenges. Be it awareness,
                consideration or engagement, our team creates compelling reels
                keeping the objectives and audience journey in mind.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={sm2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Campaigns
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team conducts thorough research, identifies the most
                effective strategies, and implements compelling content and
                visuals. Whether it's a product launch, brand awareness
                campaign, or promotional offer, we ensure your campaigns deliver
                tangible results.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={sm3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Social Media Management
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our social media experts handle content creation, scheduling,
                community management, and performance tracking. With our
                expertise and insights, we ensure your social media channels are
                consistently active, engaging, and driving results.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={sm4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Social Listening and Insights
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Unlock the potential of data-driven decisions. Our team monitors
                real-time social conversations, gauges sentiment, and delivers
                actionable insights. This empowers you to fine-tune strategies,
                anticipating trends and maintaining a competitive edge.
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

export default SocialMedia;
