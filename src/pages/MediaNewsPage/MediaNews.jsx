import React from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
} from "../../assets/images/about/index";

import {
  image1 as img1,
  image2 as img2,
  image3 as img3,
  image4 as img4,
  image5 as img5,
} from "../../assets/images/media/index";
const MediaNews = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section 1: Career Milestone */}
        <div className="mb-12 ">
          <h2 className="text-5xl font-heading font-bold mb-6 text-center text-gray-800">
            Career Milestone
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src={image12}
              alt="Career Milestone 1"
              className="rounded-lg shadow-md"
            />
            <img
              src={image13}
              alt="Career Milestone 2"
              className="rounded-lg shadow-md"
            />
            <img
              src={image14}
              alt="Career Milestone 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 2: Industry Connect */}
        <div className="mb-12 mt-20">
          <h2 className="text-5xl font-heading  font-bold mb-6 text-center text-gray-800">
            Industry Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img
              src={image2}
              alt="Industry Connect 1-1"
              className="rounded-lg shadow-md"
            />
            <img
              src={image3}
              alt="Industry Connect 1-2"
              className="rounded-lg shadow-md"
            />
            <img
              src={image4}
              alt="Industry Connect 1-3"
              className="rounded-lg shadow-md"
            />
            <img
              src={image1}
              alt="Industry Connect 1-3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 3: Media Connect */}
        <div className="mb-12 mt-20">
          <h2 className="text-5xl font-heading font-bold mb-6 text-center text-gray-800">
            Media Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src={img1}
              alt="Media Connect 1"
              className="rounded-lg shadow-md"
            />
            <img
              src={img2}
              alt="Media Connect 2"
              className="rounded-lg shadow-md"
            />
            <img
              src={img3}
              alt="Media Connect 3"
              className="rounded-lg shadow-md"
            />
            <img
              src={img4}
              alt="Media Connect 4"
              className="rounded-lg shadow-md"
            />
            <img
              src={img5}
              alt="Media Connect 5"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 4: Industry Connects */}
        <div className="mb-12 mt-20">
          <h2 className="text-5xl font-heading  font-bold mb-6 text-center text-gray-800">
            Industry Connects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src={image6}
              alt="Industry Connect 2-1"
              className="rounded-lg shadow-md"
            />
            <img
              src={image7}
              alt="Industry Connect 2-2"
              className="rounded-lg shadow-md"
            />
            <img
              src={image8}
              alt="Industry Connect 2-3"
              className="rounded-lg shadow-md"
            />
            <img
              src={image9}
              alt="Industry Connect 2-4"
              className="rounded-lg shadow-md"
            />
            <img
              src={image10}
              alt="Industry Connect 2-5"
              className="rounded-lg shadow-md"
            />
            <img
              src={image11}
              alt="Industry Connect 2-6"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaNews;
