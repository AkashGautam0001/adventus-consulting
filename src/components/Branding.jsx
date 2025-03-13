import React from "react";
import * as BrandImages from "../assets/images/branding/index.js";

const BrandPage = () => {
  const imageList = Object.values(BrandImages);

  return (
    <div className="container mx-auto py-16 px-6 my-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
          Brand Connects
        </h2>
        <p className="text-lg font-subheading text-gray-600 max-w-2xl mx-auto">
          Trusted by top brands, ensuring excellence and reliability.
        </p>
      </section>

      {/* Brand Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {imageList.map((image, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden flex justify-center items-center p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="w-24 h-24 object-contain transition-opacity duration-300 group-hover:opacity-90"
              // onError={(e) => {
              //   e.target.onerror = null;
              //   e.target.src = "/images/placeholder.png";
              // }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
