// CookiePolicy.js

import React from "react";
import { Footer, Navbar } from "../layout";

const CookiePolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container font-nunito mx-auto text-[#1a1a1a] xxl:px-[100px] bg-white pt-[100px] lg:pt-[120px] pb-[50px] lg:pb-[100px] px-4  lg:px-[80px]">
        <h1 className="text-[28px] lg:text-[40px] font-semibold mb-6 multiverse-text">
          Cookie Policy
        </h1>

        <p className="mb-6 text-[18px] lg:text-[20px]">
          Welcome to Mélange Digital! This Cookie Policy is designed to inform
          you about our use of cookies on our website.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          1. What are Cookies?
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Cookies are small text files that are placed on your computer or
          device when you visit a website. They are widely used to enhance your
          browsing experience by remembering your preferences and activities.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          2. Types of Cookies We Use:
        </h2>

        <li className="text-xl font-semibold mb-2 list-disc">
          Essential Cookies:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Necessary for the basic functionality of our website. <br /> Examples:
          Session cookies, authentication cookies.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Analytical Cookies:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Help us analyze and improve the performance of our website. <br />{" "}
          Examples: Google Analytics cookies.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Functional Cookies:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Enhance the user experience by remembering preferences. <br />{" "}
          Examples: Language preferences, region settings.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Marketing Cookies:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Used for targeted advertising and promotional purposes. <br />{" "}
          Examples: Facebook Pixel, Google AdWords.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          3. How We Use Cookies:
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold list-disc mb-2">
            Performance Improvement:
          </li>{" "}
          Cookies help us analyze and improve the performance of our website.
        </p>

        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold list-disc mb-2">Personalization:</li> We
          use cookies to remember your preferences and provide a personalized
          experience.
        </p>

        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold list-disc mb-2">
            Marketing and Advertising:
          </li>{" "}
          Cookies enable us to deliver targeted advertisements based on your
          interests.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          4. Third-Party Cookies:
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We may use third-party services that also use cookies. These
          third-party services have their own privacy and cookie policies that
          govern the use of information collected through cookies.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          5. Cookie Consent:
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          By using our website, you consent to the use of cookies in accordance
          with this Cookie Policy. You can manage your cookie preferences
          through your browser settings.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          6. Managing Cookies:
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          You can control and/or delete cookies as you wish. For details, please
          visit{" "}
          <a
            href="https://www.allaboutcookies.org/manage-cookies"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org/manage-cookies
          </a>
          .
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          7. Changes to Cookie Policy:
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Mélange Digital reserves the right to update this Cookie Policy. Any
          changes will be posted on our website. Continued use of our website
          after such changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">8. Contact Us:</h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          If you have any questions or concerns about our Cookie Policy, please
          contact us at{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="text-blue-500 hover:underline"
          >
            hello@melangedigital.in
          </a>
          .
        </p>

        <p className="text-[20px] lg:text-[24px]">
          Thank you for choosing Mélange Digital!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
