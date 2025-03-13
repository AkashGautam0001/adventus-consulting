import React from "react";
import heroImage from "../../assets/images/heroimage.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto py-10">
      <div className="w-1/2 md:p-7 flex-col items-center justify-center">
        <h1 className="text-7xl text-secondary font-heading font-bold">
          The Hospitality INCUBATOR
        </h1>
        <p className="text-6xl border-l-amber-600 border-l-8 pl-2 text-white my-3 font-body font-bold">
          POWERED BY ADVENTUS CONSULTING
        </p>
      </div>
      <div className="w-1/2 ">
        <img
          src={heroImage}
          alt=""
          className="rounded-3xl shadow-white shadow-md "
        />
      </div>
    </div>
  );
};

export default Hero;
