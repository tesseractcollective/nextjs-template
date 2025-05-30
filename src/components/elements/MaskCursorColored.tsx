"use client";
import { useState } from "react";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

interface MaskCursorProps {
  maskCursorText: string;
}

export default function MaskCursorColored({ maskCursorText }: MaskCursorProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  if (x === null || y === null) {
    return null;
  }

  return (
    <div className="mask-cursor-wrapper relative">
      <motion.div
        {...{ className: "mask" }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {parse(maskCursorText)}
        </p>
      </motion.div>

      <div className="mask-body gradient-text-element">
        <p>{parse(maskCursorText)}</p>
      </div>
    </div>
  );
}
