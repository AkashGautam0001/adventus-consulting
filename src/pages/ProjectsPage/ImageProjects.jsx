import React from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../../assets/images/services/index";
const ImageProjects = () => {
  const projects = [
    {
      name: "Gurgaon - 240-Key Upscale Luxury Hotel",
      scale: "Part of a 1.8 million sq. ft. mixed-use development",
      concept:
        "Positioned as a flagship luxury asset with premium business and leisure offerings",
      image: image1,
    },
    {
      name: "Sahibabad - 750-Key Mega Hospitality Project",
      scale: "Integrated into a 1.3 million sq. ft. mixed-use development",
      highlight:
        "One of the largest banqueting facilities in North India, catering to corporate and wedding segments",
      image: image2,
    },
    {
      name: "Meghalaya - Luxury Eco-Resort & Spa",
      concept:
        "A high-end eco-retreat that integrates sustainability with experiential luxury",
      highlight:
        "Designed to showcase local heritage while offering five-star amenities",
      image: image3,
    },
    {
      name: "Chail - Villas & Senior Living Hospitality Model",
      concept:
        "A resort-led senior living model that balances investment returns with long-term livability",
      highlight: "Designed as a sustainable, community-driven development",
      image: image4,
    },
    {
      name: "Chennai - Resort & Leisure Hybrid Hotel",
      concept:
        "Repositioning a midscale hotel into a high-performance upscale brand",
      image: image5,
    },
    {
      name: "Jewar Airport Mega Project (Pitching Stage)",
      vision:
        "Creating a landmark airport hospitality hub catering to transit passengers, business travelers, and MICE demand",
      opportunity:
        "Potential to be one of the most commercially significant hospitality investments near India's new international aviation hub",
      image: image6,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-6xl font-heading text-secondary mb-12 text-center">
          Flagship Greenfield Projects & Live Developments
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group border-white border-2 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Image with Dark Overlay */}
              <div className="relative w-full h-56">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-50 transition-all duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6  bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300">
                <h3 className="text-xl font-subheading font-semibold text-secondary mb-2">
                  {project.name}
                </h3>
                {project.scale && (
                  <p className="text-sm font-body text-gray-300">
                    📏 {project.scale}
                  </p>
                )}
                {project.concept && (
                  <p className="text-sm font-body text-gray-300">
                    💡 {project.concept}
                  </p>
                )}
                {project.highlight && (
                  <p className="text-sm font-body text-gray-300">
                    ✨ {project.highlight}
                  </p>
                )}
                {project.vision && (
                  <p className="text-sm font-body text-gray-300">
                    🌍 {project.vision}
                  </p>
                )}
                {project.opportunity && (
                  <p className="text-sm font-body text-gray-300">
                    💰 {project.opportunity}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageProjects;
