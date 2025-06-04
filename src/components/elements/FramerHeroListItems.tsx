import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FramerHeroItemsProps {
  framerHeroListItems: {
    title: string;
    items: string[];
  }[];
}

export default function FramerHeroListItems({
  framerHeroListItems,
}: FramerHeroItemsProps) {
  if (!framerHeroListItems) return <></>;

  return (
    <div className="relative bg-bg flex flex-col items-center justify-center">
      {framerHeroListItems.map((item, index) => (
        <div key={index} className="relative h-80vh lg:h-100vh w-full">
          <h3 className="text-4xl lg:text-6xl font-bold text-white sticky z-50 left-0 top-1/4 lg:top-1/2 opacity-100 h-20">
            {item.title}
          </h3>
          <ul className="flex items-center flex-col justify-center">
            {item.items.map((listItem, itemIndex) => {
              const ItemComponent = () => {
                const targetRef = useRef(null);
                const { scrollYProgress } = useScroll({
                  target: targetRef,
                  offset: ["start end", "end start"],
                });
                const scale = useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0, 1, 0]
                );
                const opacity = useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0, 1, 0]
                );
                // Blur effect
                const blur = useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [10, 0, 0, 10]
                );

                // Background glow
                const glowOpacity = useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0, 0.8, 0]
                );

                return (
                  <motion.li
                    ref={targetRef}
                    className="text-[10vw] lg:text-[8vw] text-center flex items-center px-8 h-[30vh] py-32"
                    style={{ scale, opacity }}
                  >
                    <motion.span
                      className="font-bold transition-all ease-in-out inline-block text-shadow-[tertiary]"
                      style={{
                        filter: useTransform(
                          blur,
                          (value) => `blur(${value}px)`
                        ),
                        color: useTransform(
                          scrollYProgress,
                          [0, 0.8, 1, 0.3],
                          [
                            "var(--secondary)",
                            "var(--primary)",
                            "var(--primary)",
                            "var(--secondary)",
                          ]
                        ),
                        textShadow: glowOpacity,
                      }}
                    >
                      {listItem}
                    </motion.span>
                  </motion.li>
                );
              };

              return <ItemComponent key={itemIndex} />;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
