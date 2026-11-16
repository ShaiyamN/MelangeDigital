import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <>
      <Navbar />

      <main
        className="flex flex-col justify-center items-center text-center px-6 font-nunito"
        style={{
          minHeight: "calc(100vh - 64px)",        /* mobile: just main navbar */
          paddingTop: "64px",                      /* mobile offset */
        }}
      >
        {/* Override for desktop with global bar */}
        <style>{`
          @media (min-width: 640px) {
            .error-main {
              min-height: calc(100vh - 123px) !important;
              padding-top: 123px !important;
            }
          }
        `}</style>

        <Helmet>
          <title>Page Not Found | Mélange Digital</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>

        {/* Heading */}
        <h1 className="text-[3rem] md:text-[4rem] font-bold multiverse-text mb-4">
          404
        </h1>

        {/* Sub heading */}
        <h2 className="text-[1.5rem] md:text-[2rem] font-semibold text-black mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="max-w-[600px] text-gray-600 text-[1rem] md:text-[1.1rem]">
          The page you're looking for doesn't exist or has been moved. Check
          the address, or head back to the homepage.
        </p>

        {/* Button */}
        <div className="mt-10 mb-16">
          <Link
            to="/"
            className="bg-black hover:bg-[#d940ff] transition-colors duration-300 text-white py-3 px-8 rounded-full font-semibold uppercase tracking-wide"
          >
            Back to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Error;