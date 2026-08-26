import React, { useEffect, useState } from "react";
import { Footer, Navbar, Navbar2 } from "../layout";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  ai,
  explore,
  head1,
  head2,
  Img5k,
  lable1a,
  lable2a,
  lable2b,
  lable3a,
  lable3b,
  lable4a,
  lable4b,
  lable5a,
  whatWePack,
  ani1,
  ani2,
  ani3,
  ani4,
  inf1,
  inf4,
  inf3,
  inf2,
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo5,
  logo5Png,
  logo6,
  logo7,
  logo8,
  logo9,
  map,
  mapPointer,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9,
  cl10,
  cl11,
  cl12,
  cl13,
  cl14,
  cl15,
  cl16,
} from "../../assets/itp";
import {
  Ai5K,
  ClientLogo,
  ExpandSec,
  Header,
  MapSection,
  Media,
  MelangeMethod,
  ServicesMel,
} from "../ItbPage";

const ItbTourism = () => {
  return (
    <div className="overflow-hidden">
      <Navbar2 />
      <Header />
      <ServicesMel />
      <MelangeMethod />
      <ExpandSec />
      <Ai5K />
      <Media />
      <MapSection />
      <ClientLogo />
      <Footer />
    </div>
  );
};

export default ItbTourism;
