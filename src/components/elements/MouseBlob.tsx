import React, { useState, useEffect, memo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import "./MouseBlob.scss";

const MouseBlob = memo(() => {
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
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);

        // More efficient link detection
        const isLink =
          e.target instanceof HTMLAnchorElement ||
          e.target instanceof HTMLButtonElement;
        setIsHoveringLink(isLink);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`mouse-blob ${isHoveringLink ? "is-blob-hovering" : ""}`}
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
});

MouseBlob.displayName = "MouseBlob";

export default MouseBlob;
