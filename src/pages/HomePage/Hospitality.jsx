import React from "react";
import bgImage from "../../assets/images/home/7.png";
const Hospitality = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Images */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={bgImage} // Replace with your image path
              alt="Eco-friendly property"
              className=""
            />
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="/path-to-image2.jpg" // Replace with your image path
              alt="Modern property"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/path-to-image3.jpg" // Replace with your image path
              alt="Futuristic property"
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>

        {/* Right Section: Text Content */}
        <div>
          <h2 className="text-7xl font-heading font-bold text-secondary mb-6">
            GAPS IN HOSPITALITY INNOVATION
          </h2>
          <ul className="space-y-4 font-subheading text-gray-700 text-lg pr-20">
            <li>
              • Traditional incubators lack data-driven precision and green
              focus.
            </li>
            <li>
              • New ventures struggle with scalability, tech adoption, and
              sustainability.
            </li>
            <li>
              • India’s branded assets miss global benchmarks (e.g., Dubai's
              eco-tech edge).
            </li>
            <li>
              • Visual: Image of an outdated hotel vs. a futuristic green
              property.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hospitality;
