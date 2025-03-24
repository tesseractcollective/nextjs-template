"use client";
import React, { useEffect, useCallback, RefObject } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";
import "./StickyCursor.scss";

interface IndexProps {
  stickyElement?: RefObject<HTMLElement | null>;
}

export default function StickyCursor({ stickyElement }: IndexProps) {
  const cursorSize = 15;
  const mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  } = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);

      // Check if the cursor is over the sticky element
      if (stickyElement && stickyElement.current) {
        const rect = stickyElement.current.getBoundingClientRect();
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          // If over the sticky element, set the cursor to the center of the element
          mouse.x.set(rect.left + rect.width / 2 - cursorSize / 2);
          mouse.y.set(rect.top + rect.height / 2 - cursorSize / 2);
        }
      }
    },
    [mouse.x, mouse.y, cursorSize, stickyElement]
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);

  return (
    <div className="cursorContainer">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        {...{ className: "cursor" }}
      ></motion.div>
    </div>
  );
}
