import React, { useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

interface Props {
  flags: string[];
}

const CountryFlags: React.FC<Props> = ({ flags }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const duration = scrollWidth / 50; // Adjust this value to change the speed

      container.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${scrollWidth - clientWidth}px)` },
        ],
        {
          duration: duration * 1000, // Convert to milliseconds
          iterations: Infinity,
          easing: "linear",
        }
      );
    }
  }, [flags]);

  return (
    <div className="relative max-w-8xl mx-auto overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-bg-bg to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-bg-bg to-transparent z-10"></div>
      <motion.div
        ref={containerRef}
        className="flex py-4"
        style={{ width: "fit-content" }}
      >
        {flags.concat(flags).map((flag, index) => (
          <ReactCountryFlag
            key={index}
            countryCode={flag}
            svg
            style={{
              fontSize: "4em",
              lineHeight: "4em",
              marginRight: "0.5em",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CountryFlags;
