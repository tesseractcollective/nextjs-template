// components/SpinningText.tsx
import React, { useEffect } from "react";
import "./DimensionText.scss";

type DimensionTextProps = {
  text: string;
};

const DimensionText: React.FC<DimensionTextProps> = ({ text }) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPos = e.pageX - window.innerWidth / 2;
      const yPos = e.pageY - window.innerHeight / 2;

      const xPosPercent = (e.pageX / window.innerWidth) * 100;
      const yPosPercent = (e.pageY / window.innerHeight) * 100;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dimension-text-wrapper">
      <div className="dimension-text-scene">
        <div className="dimension-text-carousel">
          {text.split("").map((char, index) => (
            <div
              key={index}
              className="dimension-text-carouselCell"
              style={{
                transform: `rotateY(${index * 24}deg) translateZ(494px)`,
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DimensionText;
