import React from "react";
import bgImage from "../../assets/images/home/1.png";
const Advantages = () => {
  const features = [
    {
      icon: "🔗", // Replace with actual icons or images
      title: "Greenfield Expertise",
      description: "We don’t just advise; we create projects from scratch.",
    },
    {
      icon: "🏛️", // Replace with actual icons or images
      title: "Financial Structuring & Investor Access",
      description:
        "A proven track record in securing funding for large-scale developments.",
    },
    {
      icon: "🤝", // Replace with actual icons or images
      title: "Brand Positioning & Soft Brand Partnerships",
      description:
        "A deep understanding of matching the right brand with the right asset.",
    },
    {
      icon: "📈", // Replace with actual icons or images
      title: "End-to-End Execution",
      description:
        "From design and planning to revenue optimization and asset monetization.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${bgImage})`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative container mx-auto px-4 text-white">
        {/* Title */}
        <h2 className="text-6xl font-heading font-bold text-center mb-4">
          The Adventus Advantage
        </h2>
        <p className="text-2xl text-center font-subheading mb-8">
          Why Developers & Investors Trust Us
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start bg-white text-gray-800 rounded-lg shadow-lg p-10"
            >
              {/* Icon */}
              <div className="text-blue-600 text-3xl mr-4">{feature.icon}</div>
              {/* Text Content */}
              <div>
                <h3 className="font-bold font-subheading text-2xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
