import React from "react";
import { Footer, Navbar } from "../layout";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container font-nunito mx-auto text-[#1a1a1a] xxl:px-[100px] bg-white pt-[100px] lg:pt-[120px] pb-[50px] lg:pb-[100px] px-4 lg:px-[80px]">
        <h1 className="text-[28px] lg:text-[40px] font-semibold mb-6 multiverse-text">
          Privacy Policy
        </h1>

        <p className="mb-6 text-[18px] lg:text-[20px] w-auto lg:w-[1012px]">
          Welcome to Mélange Digital's Privacy Policy. We are committed to
          protecting your privacy and ensuring the security of your personal
          information. Please read this policy carefully to understand how we
          collect, use, disclose, and safeguard your information.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          1. Information Collected
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We may collect the following types of information:
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Personal Information:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Name, contact details, and other identifying information provided
          during inquiries or sign-up processes.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Usage Information:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Data related to your interaction with our website, such as IP address,
          browser type, pages visited, and referral sources.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">Client Data:</li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Information related to client accounts, including project details,
          communication history, and payment information.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">2. Purpose of Use</h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We collect and use your information for the following purposes:
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Service Delivery:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          To provide and improve our digital marketing services, tailored to
          your needs.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">Communication:</li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          To respond to inquiries, provide updates on services, and communicate
          relevant information.
        </p>
        <li className="text-xl font-semibold mb-2 list-disc">Analytics:</li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          To analyse website usage, optimise user experience, and improve our
          services.
        </p>
        <li className="text-xl font-semibold mb-2 list-disc">
          Legal Compliance:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          To comply with legal obligations and respond to lawful requests from
          authorities.
        </p>

        {/* Continue with the Privacy Policy content as provided */}

        <h2 className="text-xl font-bold mb-2 text-black">
          3. Disclosure of Information
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We may disclose your information to the following parties:
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Third-Party Service Providers:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          External partners involved in service delivery, such as payment
          processors and hosting providers.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Legal Requirements:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          When required by law or to protect our rights, property, or safety.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Business Transfers:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          In the event of a merger, acquisition, or sale of assets, your
          information may be transferred as part of the transaction.
        </p>

        {/* Continue with the Privacy Policy content as provided */}

        <h2 className="text-xl font-bold mb-2 text-black">
          4. Security Practices
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We implement reasonable security practices to protect your
          information:
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Data Encryption:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Sensitive data, such as payment information, is transmitted using
          secure encryption protocols.
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Access Controls:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Access to personal information is restricted to authorized personnel
          only.
        </p>
        <li className="text-xl font-semibold mb-2 list-disc">
          Regular Audits:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We conduct regular security audits to identify and address potential
          vulnerabilities.
        </p>
        <li className="text-xl font-semibold mb-2 list-disc">
          Employee Training:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Our staff is trained on data protection and privacy best practices.
        </p>

        {/* Continue with the Privacy Policy content as provided */}

        <h2 className="text-xl font-bold mb-2 text-black">5. Your Choices</h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          You have the following choices regarding your information:
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Access and Correction:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          You may request access to, correction, or deletion of your personal
          information by contacting us at{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="hover:underline text-blue-500"
          >
            hello@melangedigital.in
          </a>
          .
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">Opt-Out:</li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          You can opt-out of receiving marketing communications by following the
          instructions provided in the communication.
        </p>

        {/* Continue with the Privacy Policy content as provided */}

        <h2 className="text-xl font-bold mb-2 text-black">
          6. Changes to Privacy Policy
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Mélange Digital reserves the right to update this Privacy Policy. Any
          changes will be communicated through our website. Continued use of our
          services after such changes constitutes acceptance of the updated
          policy.
        </p>

        <p className="mb-9 text-[20px] lg:text-[22px]">
          If you have questions or concerns about this Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="text-blue-500 hover:underline"
          >
            hello@melangedigital.in
          </a>
          .
        </p>

        <p className="text-[20px] lg:text-[22px]">
          Thank you for trusting Mélange Digital with your privacy.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
