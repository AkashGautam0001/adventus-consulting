import React from "react";
import {
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaBullhorn,
  FaCog,
  FaBuilding,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const servicesData = {
    section: "Services",
    content: {
      coreServices: {
        title: "Our Core Services",
        services: [
          {
            name: "Concept Development & Incubation",
            icon: <FaLightbulb className="text-secondary text-3xl mb-4" />,
            details: [
              "Creating hospitality assets from scratch, tailored to market demand.",
              "Designing properties aligned with brand positioning and long-term commercial viability.",
            ],
          },
          {
            name: "Financial Structuring & Funding Support",
            icon: <FaChartLine className="text-secondary text-3xl mb-4" />,
            details: [
              "Leveraging investor networks and funding models to enable large-scale developments.",
              "Structuring deals to optimize returns for all stakeholders.",
            ],
          },
          {
            name: "Operating Partner Selection",
            icon: <FaHandshake className="text-secondary text-3xl mb-4" />,
            details: [
              "International & Domestic partnerships.",
              "Curating soft brand partnerships that align with asset positioning.",
              "Developing white-label solutions that offer operational flexibility and market differentiation.",
            ],
          },
          {
            name: "Sales & Marketing for Standalone Assets",
            icon: <FaBullhorn className="text-secondary text-3xl mb-4" />,
            details: [
              "Building unique brand identities for independently owned hotels.",
              "Digital marketing, corporate partnerships, and revenue-driven strategies.",
            ],
          },
          {
            name: "Revenue Management & Tech Integration",
            icon: <FaCog className="text-secondary text-3xl mb-4" />,
            details: [
              "Smart pricing, dynamic revenue strategies, and tech-enabled efficiencies.",
            ],
          },
          {
            name: "Transactions & Asset Monetization",
            icon: <FaBuilding className="text-secondary text-3xl mb-4" />,
            details: [
              "Operator search, deal structuring, and asset repositioning for maximum valuation.",
            ],
          },
        ],
      },
      precisionTools: {
        title: "Precision Tools for Success",
        tools: [
          "AI Insights: Predictive analytics for demand and personalization (20-30% revenue lift).",
          "Smart Tech: IoT for energy savings (30-40%) and guest control.",
          "Green Suite: LEED/IGBC compliance tools + carbon tracking.",
          "Revenue Science: Dynamic pricing and RevPAG optimization (15-25% gains).",
          "Waste Reduction: F&B analytics cutting waste by 25%.",
        ],
      },
    },
  };

  const { coreServices, precisionTools } = servicesData.content;

  return (
    <div className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Core Services Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-heading text-secondary mb-8">
            {coreServices.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {coreServices.services.map((service, index) => (
              <div
                key={index}
                className="bg-secondary border-b-2 bg-opacity-20 rounded-xl shadow-lg backdrop-blur-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-opacity-30"
              >
                <div className="flex flex-col text-left">
                  {service.icon}
                  <h3 className="font-subheading text-xl text-white mt-2">
                    {service.name}
                  </h3>
                  <ul className="text-gray-300 text-sm mt-3 ">
                    {service.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="leading-relaxed font-subheading text-sm"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-white mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Precision Tools Section */}
        <section className="">
          <h2 className="text-5xl font-heading text-secondary mb-8">
            {precisionTools.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {precisionTools.tools.map((tool, index) => (
              <div
                key={index}
                className="border-l-2 border-b-2 border-white flex items-start gap-2 font-subheading bg-white bg-opacity-10 rounded-lg shadow-md p-6 text-gray-200 text-lg transition-all duration-300 hover:scale-105 hover:bg-opacity-20"
              >
                <FaTools className="text-2xl text-secondary mb-2" />
                {tool}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
