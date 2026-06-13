import React from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const lenis = useLenis();

  const handleScroll = (sectionId) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-purple-500/10 mt-12 bg-[#050414]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Youssef Assal</h2>
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Certifications", id: "certifications" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/youssefassal" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/yousef-assal/",
            },
            { icon: <FaTwitter />, link: "https://x.com/youssefassal1_" },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/youssef_asssal/",
            },
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/youssef.assal.936675/",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl hover:text-purple-500 transition-colors cursor-pointer"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Youssef Assal. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
