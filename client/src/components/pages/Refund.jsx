// CancellationRefundPolicy.js

import React from "react";
import { Footer, Navbar } from "../layout";
import { Link } from "react-router-dom";

const Refund = () => {
  return (
    <>
      <Navbar />
      <div className="container font-nunito mx-auto text-[#1a1a1a] xxl:px-[100px] bg-white pt-[100px] lg:pt-[120px] pb-[50px] lg:pb-[100px] px-4 lg:px-[80px]">
        <h1 className="text-[28px] lg:text-[40px] whitespace-nowrap font-semibold mb-6 multiverse-text">
          Cancellation & Refund Policy
        </h1>

        <h2 className="text-xl font-bold mb-2 text-black">
          1. Cancellation Policy
        </h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold mb-2 list-disc">
            Notice of Cancellation:
          </li>{" "}
          Clients must provide a written notice of cancellation to{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="hover:underline text-blue-500"
          >
            hello@melangedigital.in
          </a>
          . Cancellation requests will be processed within 7 business days.
        </p>

        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold mb-2 list-disc">Prorated Charges:</li>{" "}
          For monthly subscription services, charges will be prorated based on
          the cancellation date.
        </p>

        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold mb-2 list-disc">
            Non-cancellable Services:
          </li>{" "}
          Some services, such as domain registrations or third-party software
          licenses, may be non-cancellable.
        </p>

        <h2 className="text-xl font-bold mb-2 text-black">2. Refund Policy</h2>
        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold mb-2 list-disc">
            Eligibility for Refund:
          </li>{" "}
          Refunds may be requested within 30 days of the initial payment. To be
          eligible for a refund, the client must provide a valid reason for
          dissatisfaction with the services.
        </p>

        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold mb-2 list-disc">Refund Process:</li> To
          request a refund, clients must contact our customer support team at{" "}
          <a
            href="mailto:hello@melangedigital.in"
            className="text-blue-500 hover:underline"
          >
            hello@melangedigital.in
          </a>
          . Refunds will be processed within 14 days of the request being
          approved.
        </p>

        <p className="mb-9 text-[18px] lg:text-[20px]">
          <li className="font-semibold mb-2 list-disc">
            Non-refundable Services:
          </li>{" "}
          Certain services, such as one-time consultations or custom development
          work, may not be eligible for a refund.
        </p>

        <p className="text-[20px] lg:text-[24px]">
          Terms of Service URL: <br />
          <Link
            to="/terms-of-service"
            className="text-blue-500  hover:underline"
          >
            https://www.melangedigital.co/terms-of-service
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Refund;
