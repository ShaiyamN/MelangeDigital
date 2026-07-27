import React from "react";
import { Footer, Navbar, Navbar2 } from "../layout";
import {
  BetterResult,
  EcommerceModal,
  FAQ,
  Header,
  LogosSection,
  Part4,
  Revenue,
  Solutions,
  TestimonialSlider,
} from "../Performance";

const PerformanceLandingPage = () => {
  return (
    <div>
      <EcommerceModal />
      <Navbar />
      <Header />
      <LogosSection />
      <Part4 />
      <Solutions />
      <Revenue />
      <BetterResult />
      <TestimonialSlider />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PerformanceLandingPage;
