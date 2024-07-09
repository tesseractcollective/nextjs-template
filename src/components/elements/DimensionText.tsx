import React, { useEffect } from "react";
import "./DimensionText.scss";
import useViewport from "@/app/hooks/useViewport";

type DimensionTextProps = {
  text: string;
};
const DimensionText: React.FC<DimensionTextProps> = ({ text }) => {
  const { isMobile } = useViewport();
  if (isMobile) return <></>;
  return (
    <div className="flex dimension-text-wrapper">
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
