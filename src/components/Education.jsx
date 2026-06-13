import React from "react";
import { education } from "../Data/constants.js";
import { motion } from "framer-motion";

const Education = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* section title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mb-16 "
      >
        <h2 className="text-4xl font-bold title-shimmer">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative">
        {/* vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"
        ></motion.div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col lg:flex-row items-center mb-16 relative w-full ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Experience Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10"
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className={`w-full lg:max-w-md p-6 lg:p-8 rounded-2xl border border-purple-500/20 bg-gray-900 backdrop-blur-md shadow-[0_0_15px_rgba(130,69,236,0.15)] 
                ml-12 lg:ml-0 ${index % 2 === 0 ? "lg:mr-0 lg:pr-8" : "lg:ml-0 lg:pl-8"} 
                ${index % 2 === 0 ? "lg:translate-x-[4rem]" : "lg:translate-x-[-4rem]"}
                lg:mx-44 transform transition-all duration-300 hover:scale-[1.02] hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]`}
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
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
