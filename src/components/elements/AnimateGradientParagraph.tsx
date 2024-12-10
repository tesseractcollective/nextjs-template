import React from "react";
import Fade from "react-awesome-reveal";

interface AnimateGradientParagraphProps {
  animateGradientParagraph: string;
}

export default function AnimateGradientParagraph({
  animateGradientParagraph,
}: AnimateGradientParagraphProps) {
  return (
    <div className="animate-gradient-paragraph-wrapper items-center justify-center mx-auto flex relative z-10">
      <Fade triggerOnce>
        <h3 className="animate-gradient-paragraph text-center">
          {animateGradientParagraph}
        </h3>
      </Fade>
    </div>
  );
}
