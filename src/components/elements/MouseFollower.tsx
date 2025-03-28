import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MouseFollower = () => {
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Use motion values for smooth animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring physics for smoother following
  const springConfig = { damping: 50, stiffness: 300 };
  const followX = useSpring(mouseX, springConfig);
  const followY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values with current mouse position
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if mouse is over an anchor tag
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setIsHoveringLink(element?.tagName.toLowerCase() === "a");
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      {...{
        className: `
        fixed pointer-events-none z-[1001] rounded-full
        transition-colors duration-150 border-primary border w-6 h-6 mix-blend-difference opacity-0 md:opacity-100
        ${isHoveringLink ? "bg-tertiary scale-150" : "bg-bg scale-100"}
      `,
      }}
      style={{
        x: followX,
        y: followY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHoveringLink ? 1.5 : 1,
      }}
      transition={{
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 200,
        },
      }}
    />
  );
};

export default MouseFollower;
