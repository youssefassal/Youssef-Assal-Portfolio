import React from "react";
import { education } from "../Data/constants.js";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* section title */}
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col lg:flex-row items-center mb-16 relative w-full ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Experience Circle */}
            <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full lg:max-w-md p-6 lg:p-8 rounded-2xl border border-purple-500 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                ml-12 lg:ml-0 ${index % 2 === 0 ? "lg:mr-0 lg:pr-8" : "lg:ml-0 lg:pl-8"} 
                ${index % 2 === 0 ? "lg:translate-x-[4rem]" : "lg:translate-x-[-4rem]"}
                lg:mx-44 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex Container for image and text */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                {/* school logo */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Degree, school, date */}
                <div className="flex flex-col">
                  <h3 className="text-lg lg:text-2xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm lg:text-base text-gray-300 font-medium">
                    {edu.school}
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <p className="text-purple-400 font-bold text-sm lg:text-base">
                  Grade: {edu.grade}
                </p>
                <p className="text-gray-400 mt-2 text-sm lg:text-base leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
