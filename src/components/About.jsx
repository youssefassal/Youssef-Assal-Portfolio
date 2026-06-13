import React from "react";
import profileImage from "../assets/Personal circle.png";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayers, FiZap } from "react-icons/fi";

function About() {
  const lenis = useLenis();

  const handleMenuItemClick = (sectionId) => {
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const bentoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const bentoItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const capabilities = [
    {
      icon: <FiCode className="text-2xl text-purple-400" />,
      title: "Frontend Architecture",
      desc: "React 19, Vite, and Tailwind CSS. Crafting smooth, fluid, state-managed applications using Redux Toolkit and Zustand.",
    },
    {
      icon: <FiServer className="text-2xl text-purple-400" />,
      title: "Backend Engineering",
      desc: "Robust REST APIs using Node.js, Express, and MongoDB. Securely hardened with JWT auth and role-based access controls.",
    },
    {
      icon: <FiLayers className="text-2xl text-purple-400" />,
      title: "DevOps & Hardening",
      desc: "Deploying secure, optimized environments with Docker containerization, caching layers, and automated deployment pipelines.",
    },
    {
      icon: <FiZap className="text-2xl text-purple-400" />,
      title: "AI & Integrations",
      desc: "Creating intelligent systems using FastAPI, chatbots, recommendation engines, real-time Socket.io, and payment gateways.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* section title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold title-shimmer">About Me</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          I bridge the gap between frontend experiences and solid, cloud-scalable backend infrastructures.
        </p>
      </motion.div>

      {/* about content */}
      <div className="flex flex-col xl:flex-row gap-12 items-start justify-between">
        {/* Left Side: Profile Card & Quick Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="w-full xl:w-1/3 flex flex-col gap-6"
        >
          {/* Main Card */}
          <div className="w-full bg-gray-900/80 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-[0_0_15px_rgba(130,69,236,0.15)] p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]">
            <div className="relative mb-6">
              <img
                src={profileImage}
                alt="Youssef Assal profile"
                className="w-36 h-36 rounded-full border-4 border-purple-500/30 object-cover shadow-xl"
              />
              <span className="absolute bottom-2 right-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Youssef Assal</h3>
            <p className="text-purple-400 text-sm font-semibold mb-6">Full-Stack & DevOps Engineer</p>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 mb-6 select-none">
              Active & Open to Work
            </span>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-gray-800">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white">15+</span>
                <span className="text-xs text-gray-500 font-medium">Projects Done</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white">20+</span>
                <span className="text-xs text-gray-500 font-medium">Tools Mastered</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Paragraphs & Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="w-full xl:w-2/3 flex flex-col"
        >
          {/* Main Bio Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
            I’m a developer who enjoys building reliable, secure, and production-ready applications. I specialize in designing and scaling end-to-end software solutions—combining smooth interfaces with containerized and hardened cloud operations. I focus on clean system design, maintainable codebase structures, and robust security workflows.
          </p>

          {/* Bento Grid */}
          <motion.div
            variants={bentoContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                variants={bentoItem}
                className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/10 shadow-[0_0_15px_rgba(130,69,236,0.05)] transition-all duration-300 hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(130,69,236,0.4)] flex flex-col gap-3 group"
              >
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl w-fit group-hover:bg-[#8245ec]/20 group-hover:border-[#a855f7]/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10 pt-8 border-t border-gray-800/50">
            <p className="text-gray-400 text-sm font-medium max-w-md">
              Interested in building something secure and scalable? Explore my work or let's connect.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMenuItemClick("contact")}
              className="text-gray-300 hover:text-[#8245ec] border-2 border-[#8245ec] px-6 py-2.5 rounded-full cursor-pointer transition-colors duration-300 font-semibold text-sm whitespace-nowrap self-stretch sm:self-auto text-center"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
