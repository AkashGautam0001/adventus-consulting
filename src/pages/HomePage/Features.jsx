import React from "react";
import image5 from "../../assets/images/home/6.png";
const Features = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="text-5xl font-bold font-heading text-white">
                We’re the premier hospitality incubator, merging creativity
                (art) with analytics and sustainability (science).
              </li>

              {[
                "Backed by 300 years of hardcore hospitality experience across our board and KMPs.",
                "Powered by a cutting-edge toolkit and SME network for tech and green solutions.",
                "Art + Science: Toolkit blends guest-centric design with AI, IoT, and green tech.",
                "SME Power: Specialists in AI, sustainability, and certifications (LEED, IGBC).",
              ].map((text, index) => (
                <li
                  key={index}
                  className="text-2xl font-subheading text-secondary"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={image5}
              alt="Building & Analytics"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
