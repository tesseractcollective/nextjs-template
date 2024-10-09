import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

type ScrollPathTextProps = {
  text: string;
};

const ScrollPathText: React.FC<ScrollPathTextProps> = ({ text }) => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<SVGTextPathElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value: number) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", `${-40 + i * 40 + value * 40}%`);
      });
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={container}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="text-[6px] uppercase fill-primary"
          // style={{ fill: "text-primary" }}
        >
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref: SVGTextPathElement | null) => {
                if (ref) paths.current[i] = ref;
              }}
              startOffset={`${i * 40}%`}
              href="#curve"
            >
              {text}
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
};

export default ScrollPathText;
