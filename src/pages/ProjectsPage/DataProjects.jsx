import React from "react";
import {
  image1,
  image2,
  image3,
  image4,
} from "../../assets/images/services/index";
const DataProjects = () => {
  const projectsData = {
    section: "Projects",
    content: {
      flagshipProjects: {
        title: "Flagship Greenfield Projects",
        projects: [
          {
            name: "Gurgaon - 240-Key Upscale Luxury Hotel",
            description:
              "Part of a 1.8 million sq. ft. mixed-use development. Positioned as a flagship luxury asset with premium business and leisure offerings.",
            image: image1,
          },
          {
            name: "Meghalaya - Luxury Eco-Resort & Spa",
            description:
              "A high-end eco-retreat that integrates sustainability with experiential luxury. Designed to showcase local heritage while offering five-star amenities.",
            image: image2,
          },
          {
            name: "Chail - Villas & Senior Living Hospitality Model",
            description:
              "A resort-led senior living model that balances investment returns with long-term livability. Designed as a sustainable, community-driven development.",
            image: image3,
          },
          {
            name: "Jewar Airport Mega Project (Pitching Stage)",
            description:
              "Creating a landmark airport hospitality hub catering to transit passengers, business travelers, and MICE demand. Potential to be one of the most commercially significant hospitality investments near India's new international aviation hub.",
            image: image4,
          },
        ],
      },
    },
  };

  const { flagshipProjects } = projectsData.content;

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-6xl font-heading text-secondary mb-12 text-center">
          {flagshipProjects.title}
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {flagshipProjects.projects.map((project, index) => (
            <div
              key={index}
              className="relative border-2 border-white group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Image with Overlay */}
              <div className="relative w-full h-56">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-50 transition-all duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataProjects;
