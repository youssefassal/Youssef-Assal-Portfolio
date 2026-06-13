import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.4)] border border-[#a855f7]/30 cursor-pointer hover:bg-[#a855f7] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:border-white/20 transition-all duration-300 flex items-center justify-center"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-xl stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
