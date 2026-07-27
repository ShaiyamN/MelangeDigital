import React from "react";
import { Footer, Navbar } from "../layout";

const TermsofService = () => {
  return (
    <>
      <Navbar />
      <div className="container font-nunito mx-auto text-[#1a1a1a] xxl:px-[100px] bg-white pt-[100px] lg:pt-[120px] pb-[50px] lg:pb-[100px] px-4 lg:px-[80px]">
        <h1 className="text-[28px] lg:text-[40px] font-semibold mb-6 multiverse-text">
          Terms of Service
        </h1>

        <p className="mb-6 text-[18px] lg:text-[20px]">
          Welcome to Mélange Digital! Please carefully read the following terms
          and conditions before using our services.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black ">
          1. Acceptance of Terms
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          By accessing or using Mélange Digital's services, you agree to comply
          with and be bound by these Terms of Service. If you do not agree with
          any part of these terms, please do not use our services.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          2. Services Overview
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Mélange Digital is an integrated digital marketing agency providing a
          range of services, including but not limited to social media
          management, search engine optimization, content creation, and digital
          advertising.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">3. Refund Policy</h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          We strive to provide excellent services, but we understand that
          situations may arise where a refund is necessary. Our refund policy is
          as follows:
        </p>

        <li className="text-xl font-semibold mb-2 list-disc">
          Eligibility for Refund:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Refunds may be requested within 30 days of the initial payment. To be
          eligible for a refund, the client must provide a valid reason for
          dissatisfaction with the services.
        </p>

        <li className="text-xl list-disc font-semibold mb-2">
          Refund Process:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          To request a refund, clients must contact our customer support team at{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="hover:underline text-blue-500"
          >
            hello@melangedigital.in
          </a>
          . Refunds will be processed within 14 days of the request being
          approved.
        </p>

        <li className="text-xl list-disc font-semibold mb-2">
          Non-refundable Services:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Certain services, such as one-time consultations or custom development
          work, may not be eligible for a refund.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          4. Cancellation Policy
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Clients have the right to cancel services at any time. The
          cancellation policy is outlined below:
        </p>

        <li className="text-xl font-semibold list-disc mb-2">
          Notice of Cancellation:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Clients must provide a written notice of cancellation to{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="hover:underline text-blue-500"
          >
            hello@melangedigital.in
          </a>
          . Cancellation requests will be processed within 7 business days.
        </p>

        <li className="text-xl list-disc font-semibold mb-2">
          Prorated Charges:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          For monthly subscription services, charges will be prorated based on
          the cancellation date.
        </p>

        <li className="text-xl list-disc font-semibold mb-2">
          Non-cancellable Services:
        </li>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Some services, such as domain registrations or third-party software
          licenses, may be non-cancellable.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          5. Intellectual Property
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Mélange Digital retains ownership of all intellectual property
          associated with our services, including but not limited to logos,
          designs, and content created during the provision of services.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          6. Limitation of Liability
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Mélange Digital is not liable for any indirect, incidental, special,
          or consequential damages arising out of or in connection with the use
          of our services.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">7. Governing Law</h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          These Terms of Service are governed by the laws of India. Any disputes
          arising from or in connection with these terms shall be subject to the
          exclusive jurisdiction of the courts in India.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">
          8. Changes to Terms
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          Mélange Digital reserves the right to modify or update these terms at
          any time. Clients will be notified of any changes, and continued use
          of our services constitutes acceptance of the revised terms.
        </p>

        <p className="pt-[20px] lg:pt-[30px] text-[20px] lg:text-[22px]">
          If you have any questions or concerns regarding these terms, please
          contact us at{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className=" font-semibold text-blue-500 hover:underline"
          >
            hello@melangedigital.in
          </a>
          .
        </p>

        <p className="pt-[16px] text-[20px] lg:text-[22px]">
          Thank you for choosing Mélange Digital for your integrated digital
          marketing needs!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsofService;
