import React from "react";
import { SkillsInfo } from "../Data/constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* section title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mb-8 "
      >
        <h2 className="text-3xl sm:text-4xl font-bold title-shimmer">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>
      </motion.div>
      {/* Skills Categories */}
      <div className="flex flex-wrap justify-center gap-1 lg:gap-5 py-10">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-purple-500/20 shadow-[0_0_15px_rgba(130,69,236,0.15)] transition-all duration-300 hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skills Items - 3 per row on larger screens */}
            <Tilt
              key={category.title}
              tiltEnable={true}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-3 gap-3 w-full">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.05 + 0.1 }}
                    className="flex flex-col items-center justify-start gap-2 py-2 px-1 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-xs md:text-sm text-gray-300 leading-tight break-words w-full">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
