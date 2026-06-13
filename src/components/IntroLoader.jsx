import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const IntroLoader = ({ onComplete }) => {
  const lenis = useLenis();

  useEffect(() => {
    // Lock scrolling
    if (lenis) lenis.stop();
    document.body.style.overflow = "hidden";

    // Unmount and resume scrolling after completion
    const timer = setTimeout(() => {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer);
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    };
  }, [lenis, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100vh",
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[99999] bg-[#050414] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#8245ec] opacity-10 blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative flex flex-col items-center select-none">
        {/* Animated Name Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-6 flex items-center gap-1 font-sans"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#8245ec]"
          >
            &lt;
          </motion.span>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            Youssef
            <span className="text-[#8245ec]">/</span>
            Assal
          </motion.span>
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#8245ec]"
          >
            &gt;
          </motion.span>
        </motion.div>

        {/* Small subtitle indicator */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-sm tracking-[0.3em] uppercase text-gray-300 font-light pl-[0.3em]"
        >
          Portfolio
        </motion.p>

        {/* Premium thin animated progress bar */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mt-8 relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: 0,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;
