import React from "react";

const IndustryLegacy = () => {
  const strengths = [
    {
      title: "End-to-End Hospitality Incubation:",
      points: [
        "Concept development, planning, and branding",
        "Financial structuring and investor alignment",
        "Selection of international soft brands and white-label positioning",
      ],
    },
    {
      title: "Extensive Network:",
      points: [
        "Worked with 10 Hotel Banners with almost 200+ hotel brands under them",
        "Deep-rooted relationships with global operators, investors, and developers",
      ],
    },
    {
      title: "Expert Team:",
      points: [
        "300+ years of expertise across design, marketing, sales, revenue management, and asset monetization",
      ],
    },
  ];

  return (
    <section
      className="relative bg-primary bg-cover bg-center py-24 my-12"
      // style={{
      //   backgroundImage: `url('/path-to-background-image.jpg')`,
      // }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-primary bg-opacity-40"></div> */}

      <div className="relative container mx-auto px-4 text-white">
        {/* Title */}
        <h2 className="text-6xl font-heading font-bold text-center mb-8">
          OUR INDUSTRY LEGACY{" "}
          <div className="text-secondary mt-3">& STRENGTHS</div>
        </h2>

        {/* Strengths Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-secondary to-white text-gray-800 rounded-lg shadow-white shadow-sm p-6 border-b-2 border-white"
            >
              <h3 className="text-xl font-bold font-subheading mb-4">
                {strength.title}
              </h3>
              <ul className="space-y-2">
                {strength.points.map((point, idx) => (
                  <li key={idx} className="text-black font-body">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryLegacy;
