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
    <div className="relative max-w-8xl mx-auto overflow-hidden w-full">
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
