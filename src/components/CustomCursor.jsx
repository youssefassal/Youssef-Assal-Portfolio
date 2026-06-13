import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position of mouse relative to viewport
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for outer ring
  const outerX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const outerY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  // Springs for inner dot (slightly faster, less lag)
  const innerX = useSpring(mouseX, { stiffness: 800, damping: 35 });
  const innerY = useSpring(mouseY, { stiffness: 800, damping: 35 });

  useEffect(() => {
    // Only enable custom cursor for devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const addHoverEvents = () => {
      const targets = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .cursor-pointer'
      );
      targets.forEach((target) => {
        // Prevent adding multiple duplicate listeners
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
        
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial attach
    addHoverEvents();

    // Use MutationObserver to observe dynamic changes to the DOM and attach listeners
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();

      const targets = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .cursor-pointer'
      );
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#8245ec] pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(130, 69, 236, 0.15)" : "rgba(130, 69, 236, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 rounded-full bg-[#a855f7] pointer-events-none z-[9999] shadow-[0_0_8px_#a855f7]"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
