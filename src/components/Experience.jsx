import React from "react";
import { experience } from "../Data/constants";
import { motion } from "framer-motion";

const Experience = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* section title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mb-16 "
      >
        <h2 className="text-4xl font-bold title-shimmer">Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </motion.div>

      {/* Experience Timeline */}
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

        {/* Experience Entries */}
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className={`flex items-center mb-16 relative w-full ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Experience Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-20"
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Content Section Container */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
              className={`w-full lg:w-1/2 flex ml-12 lg:ml-0 ${
                index % 2 === 0
                  ? "lg:justify-start lg:pr-2"
                  : "lg:justify-end lg:pl-4"
              }`}
            >
              <div className="w-full max-w-lg p-6 lg:p-8 rounded-2xl border border-purple-500/20 bg-gray-900 backdrop-blur-md shadow-[0_0_15px_rgba(130,69,236,0.15)] transform transition-all duration-300 hover:scale-[1.02] hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]">
                {/* Flex Container for image and text */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* company logo */}
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Role, Company, Date */}
                  <div className="flex flex-col">
                    <h3 className="text-lg lg:text-2xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm lg:text-base text-gray-300 font-medium">
                      {exp.company}
                    </h4>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1">
                      {exp.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mt-4 text-sm lg:text-base leading-relaxed">
                  {exp.desc}
                </p>

                {exp.skills && (
                  <div className="mt-4">
                    <h5 className="font-semibold text-white text-sm lg:text-base">
                      Skills:
                    </h5>
                    <ul className="flex flex-wrap mt-2 gap-2">
                      {exp.skills.map((skill, skillIdx) => (
                        <li
                          key={skillIdx}
                          className="bg-[#8245ec]/20 text-purple-300 px-3 py-1 text-[10px] lg:text-xs rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.credential && (
                  <div className="mt-6">
                    <button
                      onClick={() =>
                        window.open(exp.credential, "_blank")
                      }
                      className="text-gray-300 hover:text-white hover:bg-[#8245ec] border-2 border-[#8245ec] px-4 py-2 rounded-full w-full transition-all duration-300 text-sm font-semibold cursor-pointer"
                    >
                      Show credential
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
