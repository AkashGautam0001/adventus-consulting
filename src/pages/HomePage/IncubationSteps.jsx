import React from "react";

const IncubationSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Concept Development",
      description: "Vision to market fit with green design.",
    },
    {
      number: 2,
      title: "Advisory",
      description: "Strategic plans for tech and sustainability.",
    },
    {
      number: 3,
      title: "Operations",
      description: "Contactless tech and net-zero ops for soft brands.",
    },
    {
      number: 4,
      title: "Sales & Marketing",
      description: "AI-driven campaigns for standalone assets.",
    },
    {
      number: 5,
      title: "Revenue Management",
      description: "Data models maximizing profitability.",
    },
    {
      number: 6,
      title: "Tech Support",
      description: "Automation and IoT integration.",
    },
    {
      number: 7,
      title: "Sustainability",
      description:
        "Green certifications and community impact (15% occupancy boost).",
    },
  ];

  return (
    <section className="py-12 my-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-6xl font-bold text-center font-heading text-secondary mb-8">
          END-TO-END INCUBATION
        </h2>

        {/* Timeline */}
        <div className="flex items-center justify-between space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-64">
              {/* Step Number */}
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full mb-4">
                {step.number}
              </div>

              {/* Step Card */}
              <div className="bg-white shadow-md shadow-gray-500 rounded-lg p-4 border-b-black border-1">
                <h3 className="font-bold text-lg text-gray-800 mb-2 font-subheading">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncubationSteps;
