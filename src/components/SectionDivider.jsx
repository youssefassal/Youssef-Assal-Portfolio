import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative w-full flex items-center justify-center my-6 py-2 overflow-hidden select-none pointer-events-none">
      {/* Expanding Glow Line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-[1.5px] max-w-5xl bg-gradient-to-r from-transparent via-[#8245ec]/40 to-transparent"
        style={{ transformOrigin: "center" }}
      />
      {/* Center Glow Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute w-2 h-2 rounded-full bg-[#a855f7] blur-[1px] shadow-[0_0_10px_#a855f7] opacity-80"
      />
    </div>
  );
};

export default SectionDivider;
