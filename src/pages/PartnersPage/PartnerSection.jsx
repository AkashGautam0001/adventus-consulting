import React from "react";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
const PartnerSection = () => {
  const partnersData = {
    section: "Partners",
    content: {
      strategicAlliance: {
        title: "Strategic Alliance with Key Support Partners",
        partners: [
          {
            name: "Woke Life",
            details: "Hospitality, F&B, AUM",
            website: "woke-life.com",
            image: image1,
          },
          {
            name: "INSIGHT2ACTIVATE",
            image: image2,
          },
          {
            name: "Holistics Architecture",
            details: "holcons.com",
            image: image3,
          },
        ],
      },
      developmentPartners: {
        title: "Our Development Partners & Pipeline of Assets",
        partners: ["Iconic Sector 62, Noida"],
      },
    },
  };

  const { strategicAlliance, developmentPartners } = partnersData.content;

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Strategic Alliance Section */}
        <section className="mb-12">
          <h2 className="text-5xl font-bold text-secondary font-heading mb-8 text-center">
            {strategicAlliance.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAlliance.partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Partner Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-20 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.png";
                    }}
                  />
                </div>

                {/* Partner Details */}
                <h3 className="text-xl  font-semibold text-orange-400 text-center">
                  {partner.name}
                </h3>
                {partner.details && (
                  <p className="text-gray-300 text-center mt-2">
                    {partner.details}
                  </p>
                )}
                {partner.website && (
                  <div className="text-center mt-4">
                    <a
                      href={`https://${partner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                      {partner.website}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Development Partners Section */}
        <section>
          <h2 className="text-5xl font-heading font-bold text-secondary mb-6 text-center">
            {developmentPartners.title}
          </h2>
          <ul className="list-disc list-inside text-center text-gray-300">
            {developmentPartners.partners.map((partner, index) => (
              <li key={index} className="text-lg font-heading">
                {partner}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PartnerSection;
