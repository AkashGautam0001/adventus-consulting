import React from "react";
import heroImage from "../../assets/images/home/2.png";

const Hero3 = () => {
  return (
    <div className="flex max-w-7xl  items-start mx-auto py-10">
      <div className="w-1/3">
        <img
          src={heroImage}
          alt=""
          className="rounded-3xl shadow-white shadow-md "
        />
      </div>
      <div className="w-2/3 md:px-16 flex-col items-center justify-center">
        <h1 className="text-7xl text-white font-heading">
          THE ADVENTUS HOSPITALITY VISION
        </h1>
        <div className="mt-12">
          <h1 className="text-2xl text-secondary font-heading font-bold">
            Core Differentiator
          </h1>
          <p className="text-xl text-white my-3 font-body font-bold">
            "Every project in our portfolio is a Greenfield Development
            conceptualized, designed, and brought to life Adventus Hospitality"
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-secondary font-heading font-bold">
            Misson Statement:
          </h1>
          <p className="text-xl text-white my-3 font-body font-bold">
            We don’t just manage hotels—we create them. From concept to
            operations, we transform blank canvases into thriving hospitality
            assets.
          </p>
        </div>
        <h1 className="font-subheading text-white">
          "It’s one thing to operate a hotel. It’s another to bring a vision to
          life from the ground up— and make it a commercial success."
        </h1>
      </div>
    </div>
  );
};

export default Hero3;
