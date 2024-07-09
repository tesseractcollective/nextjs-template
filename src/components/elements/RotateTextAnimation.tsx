import React from "react";
import "./RotateTextAnimation.scss";

type RotateTextAnimationProps = {
  text: string;
};

const RotateTextAnimation: React.FC<RotateTextAnimationProps> = ({ text }) => {
  return (
    <div className="rotate-text-animation-wrapper">
      <svg viewBox="0 0 150 150" className="rotate-text-animation-svg">
        <path
          id="rotate-text-animation-curve"
          fill="transparent"
          d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
        />
        <text className="rotate-text-animation-text">
          <textPath xlinkHref="#rotate-text-animation-curve">{text}</textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotateTextAnimation;
