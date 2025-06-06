import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface AnimateParagraphProps {
  animateParagraph: string;
}

export default function AnimateParagraph({
  animateParagraph,
}: AnimateParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container as React.RefObject<HTMLElement>,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = animateParagraph.split(" ");
  return (
    <div
      className="animate-paragraph-wrapper items-center justify-center mx-auto flex relative z-10"
      data-nosnippet
      aria-hidden
    >
      <p
        ref={container}
        className="animate-paragraph text-center bg-glass glass-dark"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

interface AnimateWordProps {
  children: any;
  progress: any;
  range: any;
}

const Word = ({ children, progress, range }: AnimateWordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="animate-word">
      <span className="animate-word-shadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
