import React from "react";
import image1 from "../../assets/images/partners/1.png";
import image2 from "../../assets/images/partners/2.png";
import image3 from "../../assets/images/partners/3.png";
import image4 from "../../assets/images/partners/4.png";
import image5 from "../../assets/images/partners/5.png";

const AboutUs = () => {
  const aboutUsData = {
    section: "About Us",
    content: {
      vision: {
        title: "The Adventus Hospitality Vision",
        missionStatement:
          "We don’t just manage hotels—we create them. From concept to operations, we transform blank canvases into thriving hospitality assets.",
        coreDifferentiator:
          "Every project in our portfolio is a Greenfield Development conceptualized, designed, and brought to life by Adventus Hospitality.",
      },
      legacyStrengths: {
        title: "Our Industry Legacy & Strengths",
        network:
          "Worked with 10 Hotel Banners with almost 200+ hotel brands under them.",
        teamExpertise:
          "300+ years of expertise across design, marketing, sales, revenue management, and asset monetization.",
      },
      leadership: {
        title: "Our Leadership",
        team: [
          {
            name: "Sameer Singh",
            role: "Founder",
            bio: "25 years of strategic leadership. Specializes in Business Development and Operations with a history of building successful businesses.",
            image: image2,
          },
          {
            name: "Tarun Sobti",
            role: "Co-Founder",
            bio: "Hospitality professional with over 30 years in leading roles at Oberoi Hotels, Taj Hotels, and ITC Hotels.",
            image: image3,
          },
          {
            name: "Viraj Taneja",
            role: "Co-Founder | Strategic Growth & Transactions Expert",
            bio: "Seasoned professional with 20+ years of experience in structuring and closing high-value transactions in real estate and luxury brands.",
            image: image1,
          },
          {
            name: "Basav Mukherjee",
            role: "Independent Director",
            bio: "20+ years in leadership roles across real estate, hospitality, club development, and brand consulting.",
            image: image4,
          },
          {
            name: "Dr. Chef Parvinder Singh Bali",
            role: "Independent Director",
            bio: "Culinary expert with a global career, including launching ITC Sonar and promoting Indian cuisine worldwide.",
            image: image5,
          },
        ],
      },
    },
  };

  const { vision, legacyStrengths, leadership } = aboutUsData.content;

  return (
    <div className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Vision Section */}
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-heading text-secondary mb-6">
            {vision.title}
          </h2>
          <p className="text-xl font-subheading text-gray-300 mb-4 max-w-3xl mx-auto">
            {vision.missionStatement}
          </p>
          <p className="text-xl font-subheading text-gray-300 max-w-3xl mx-auto">
            {vision.coreDifferentiator}
          </p>
        </section>

        {/* Legacy & Strengths Section */}
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-heading text-secondary mb-6">
            {legacyStrengths.title}
          </h2>
          <p className="text-xl font-subheading text-gray-300 mb-4">
            {legacyStrengths.network}
          </p>
          <p className="text-xl font-subheading text-gray-300">
            {legacyStrengths.teamExpertise}
          </p>
        </section>

        {/* Leadership Section */}
        <section>
          <h2 className="text-4xl font-subheading text-secondary text-center mb-10">
            {leadership.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {leadership.team.map((member, index) => (
              <div
                key={index}
                className="bg-secondary bg-opacity-20 border-white border-b-2 rounded-xl shadow-lg backdrop-blur-lg p-6 text-center transition-all duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full border-4 border-secondary shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.png";
                  }}
                />
                <h3 className="font-subheading text-lg text-white mt-4">
                  {member.name}
                </h3>
                <p className="text-white font-bold font-body">{member.role}</p>
                <p className="text-white text-sm font-body mt-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
