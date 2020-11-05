import React from "react";
import HeroSection from "../../heroSection/HeroSection";
import { homeObjOne } from "./Data";
import Pricing from "../../pricing/Pricing";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;
