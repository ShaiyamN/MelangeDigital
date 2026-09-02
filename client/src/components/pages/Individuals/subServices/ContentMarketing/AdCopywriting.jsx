import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { ad1, ad2, ad3, ad4 } from "../../../../../assets/images";
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

const AdCopywriting = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Ad Copywriting",
      url: "/services/content-marketing/ad-copywriting",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Professional Copywriting Services | Increase Audience Engagement"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Improve your brand with attention-grabbing ad text. Our expert writers create compelling content to increase engagement and achieve better outcomes. Find out more!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Professional Copywriting Services | Increase Audience Engagement"
        ></meta>
        <meta
          property="og:description"
          content="Improve your brand with attention-grabbing ad text. Our expert writers create compelling content to increase engagement and achieve better outcomes. Find out more!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/ad-copywriting"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Get a Ad Copywriting that Converts
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            When done right, ads can solve business problems and create new
            opportunities for your brands. Even industry giants like Coca Cola
            and Cadbury invest millions of dollars in advertising to promote
            their brands and stay ahead.
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
              <img src={ad1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                It all starts with an idea
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                As your content marketing agency, we tirelessly search for that
                one exceptional concept, a USP, or insight that can
                revolutionize your strategy. With this idea as our foundation,
                we craft winning campaigns that capture attention and drive
                results.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ad2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Choosing the right platforms
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We tailor ad copies to maximize impact and engage your audience
                across print, digital, and other platforms. Whether it's a TV
                commercial or an online video ad, we weave together persuasive
                narratives and dialogues that leave a lasting impression.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ad3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                A/B Testing and Optimization
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We go beyond just writing copies for advertisements. We conduct
                A/B testing to refine ad copy, fine-tune elements for highest
                impact. This process ensures the copy continuously evolves for
                optimal performance and delivers the desired results.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ad4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                SEO Optimization
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                To ensure your digital ads stand out and reach the right
                audience, we ensure that the copy is optimized for search
                engines to improve visibility and reach. Our copywriters
                seamlessly integrate relevant keywords to enhance your ad's
                online performance.
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

export default AdCopywriting;
