import React from "react";
import { FaGithub, FaLinkedin , FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">
          Youssef Assal
        </h2>
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" }
          ].map((item , index) => (
            <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/youssefassal" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yousef-assal/" },
            { icon: <FaTwitter />, link: "https://x.com/youssefassal1_" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/youssef_asssal/" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/youssef.assal.936675/" }
          ].map((item , index) => (
            <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Youssef Assal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;