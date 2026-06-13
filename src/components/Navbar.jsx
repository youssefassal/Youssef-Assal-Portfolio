import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = [
      "hero",
      "about",
      "skills",
      "experience",
      "work",
      "education",
      "certifications",
      "contact",
    ];

    const detectActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let currentActive = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          currentActive = id;
          break;
        }
      }

      // Handle the bottom of the page edge case (usually for contact section)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;
      if (isAtBottom) {
        currentActive = "contact";
      }

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    };

    const observer = new IntersectionObserver(detectActiveSection, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", detectActiveSection, { passive: true });
    window.addEventListener("resize", detectActiveSection, { passive: true });

    // Initial check
    detectActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", detectActiveSection);
      window.removeEventListener("resize", detectActiveSection);
      observer.disconnect();
    };
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (sectionId === "hero") {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (lenis) {
        lenis.scrollTo(`#${sectionId}`);
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certs" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition duration-300 px-[4vw] md:px-[4vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center gap-2">
        {/* Logo */}
        <div
          onClick={() => handleMenuItemClick("hero")}
          className="text-base lg:text-lg font-semibold cursor-pointer shrink-0"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Youssef</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Assal</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 lg:space-x-6 text-gray-300 text-base">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
              className={`cursor-pointer hover:text-[#8245ec] whitespace-nowrap ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center shrink-0">
          <div className="hidden md:flex space-x-4">
            <motion.a
              href="https://github.com/youssefassal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yousef-assal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex ml-3 lg:ml-4">
            <motion.button
              onClick={() => handleMenuItemClick("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base whitespace-nowrap cursor-pointer transition-all duration-300 ${
                activeSection === "contact"
                  ? "bg-[#8245ec] text-white border-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                  : "text-gray-300 hover:text-[#8245ec] border-[#8245ec]"
              }`}
            >
              Contact Me
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[#8245ec] 
                  ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/youssefassal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yousef-assal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
