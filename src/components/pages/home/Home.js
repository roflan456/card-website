import React from "react";
import HeroSection from "../../heroSection/HeroSection";
import Pricing from "../../pricing/Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";


export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <Pricing />
    </>
  );
}
