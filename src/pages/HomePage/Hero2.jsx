import React from "react";
import image1 from "../../assets/images/home/1.png";

const Hero2 = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto my-20 py-10">
      {/* <div className="w-1/2 ">
        <img
          src={image1}
          alt=""
          className="rounded-3xl shadow-white shadow-md "
        />
      </div> */}
      <div className="w-full  max-w-5xl text-center md:p-7 flex-col items-center justify-center">
        <h1 className="text-7xl text-secondary font-heading font-bold">
          ADVENTUS CONSULTING
        </h1>
        <p className="text-6xl  text-primary my-3 font-body font-bold">
          Pioneering Hospitality's Future
        </p>
        <p className="text-3xl text-secondary  font-body tracking-widest">
          Where Art Meets Science for Sustainable Growth
        </p>
      </div>
    </div>
  );
};

export default Hero2;
