import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Opportunity from "./Opportunity";
import Features from "./Features";
import IncubationSteps from "./IncubationSteps";
import IndustryLegacy from "./IndustryLegacy";
import Advantages from "./Advantages";
import Hospitality from "./Hospitality";
import BrandPage from "../../components/Branding";
import LastBackGroundImage from "./LastBackGroundImage";
const Home = () => {
  return (
    <div className="">
      <div className="bg-primary">
        <Hero />
      </div>
      <Hero2 />
      <div className="bg-primary">
        <Hero3 />
      </div>
      <Opportunity />
      <Advantages />
      <Hospitality />
      <Features />
      <IncubationSteps />
      <IndustryLegacy />
      <BrandPage />
      <LastBackGroundImage />
    </div>
  );
};

export default Home;
