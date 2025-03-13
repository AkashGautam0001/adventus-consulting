import React from "react";
import image4 from "../../assets/images/home/4.png";

const Opportunity = () => {
  return (
    <div className="py-12 px-4 md:my-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-6xl font-bold font-heading text-primary">
            The Opportunity
          </h1>

          <div className=" p-4 rounded-lg text-primary font-subheading space-y-4">
            <p className="text-lg">
              <span className="font-semibold">India:</span> ~215,000 branded
              rooms for <b>1.43B people</b>
              <span className="text-secondary">
                {" "}
                (0.15 rooms per 1,000 people).
              </span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Comparison:</span>
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <span className="font-semibold">Dubai:</span> ~150,000 rooms
                <b>(43 per 1,000 people)</b>
              </li>
              <li>
                <span className="font-semibold">London:</span> ~130,000 rooms
                <b>(14 per 1,000 people)</b>
              </li>
              <li>
                <span className="font-semibold">Las Vegas:</span> ~150,000 rooms
                <b>(65 per 1,000 people)</b>
              </li>
            </ul>

            <p className="text-lg">
              India’s growth potential is massive— <b>113,000 new rooms</b> by
              2029, signaling a <b>$5B+ market</b>
            </p>

            <p className="text-lg font-semibold">
              <span className="text-secondary">
                Technology & sustainability
              </span>{" "}
              can <b>triple this growth</b>, and
              <span className="text-secondary"> Adventus</span> is leading the
              way.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={image4}
            alt="Opportunity Graph"
            className="w-full object-cover rounded-lg shadow-lg shadow-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
