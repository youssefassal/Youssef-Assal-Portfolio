import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../assets/Personal circle.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="hero"
      className="py-4 mb-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          {/* Greeting */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight"
          >
            Hi, I am
          </motion.h1>
          {/* Name */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight text-shimmer"
          >
            Youssef Assal
          </motion.h2>
          {/* Availability badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/40 text-green-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for hire
            </span>
          </motion.div>
          {/* Skills heading with typing effect */}
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight"
          >
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.h3>
          {/* About me paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
          >
            Full-Stack &amp; DevOps Engineer specializing in secure,
            high-performance web platforms. I build production-ready systems
            end-to-end — from React 19 frontends to hardened Node.js/MongoDB
            backends with RBAC, real-time features, and cloud deployment
            pipelines. I don&apos;t just write code — I architect, secure, and
            ship reliable digital products.
          </motion.p>

          {/* Resume button */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1H42kG35bKq8U0K9WZ3HwvTdbpksoMezg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>
        {/* right side */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center md:justify-end "
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Youssef Assal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              fetchPriority="high"
              decoding="sync"
            />
          </Tilt>
        </motion.div>
      </div>

      {/* GitHub Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
      >
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=youssefassal&theme=tokyonight&count_private=true"
          alt="Youssef Assal GitHub Stats"
          className="w-full sm:w-1/2 max-w-md rounded-xl border border-purple-500/30 shadow-[0_0_20px_1px_rgba(130,69,236,0.15)]"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <img
          src="https://streak-stats.demolab.com/?user=youssefassal&theme=tokyonight&hide_border=true&background=050414&ring=a855f7&fire=8245ec&currStreakLabel=a855f7&sideLabels=9ca3af&dates=9ca3af&stroke=8245ec"
          alt="Youssef Assal GitHub Streak"
          className="w-full sm:w-1/2 max-w-md rounded-xl border border-purple-500/30 shadow-[0_0_20px_1px_rgba(130,69,236,0.15)]"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>
    </section>
  );
};

export default About;
