import React, { useState, useEffect, useCallback } from "react";
import parse from "html-react-parser";

interface PixelCursorTrailingProps {
  text: string;
  theme: string;
  background: string;
}

export default function PixelCursorTrailing({
  text,
  theme,
  background,
}: PixelCursorTrailingProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBlocks = () => {
    const blockSize = windowWidth * 0.05;
    const numOfBlocks = Math.ceil(window.innerHeight / blockSize);

    return Array.from({ length: numOfBlocks }, (_, index) => index);
  };

  const colorize = useCallback(
    (el: HTMLElement) => {
      el.style.backgroundColor = `var(--${theme})`;
      setTimeout(() => {
        el.style.backgroundColor = "transparent";
      }, 300);
    },
    [theme]
  );

  useEffect(() => {
    let index = 0;
    const blockElements = document.querySelectorAll(
      ".pixel-cursor-trailing-column div"
    );

    const interval = setInterval(() => {
      if (blockElements[index]) {
        colorize(blockElements[index] as HTMLElement);
        index++;

        // Reset index when it reaches the end
        if (index === blockElements.length) {
          index = 0;
        }
      }
    }, 50); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, [colorize, windowWidth]);

  return (
    <div
      className={`pixel-cursor-trailing-wrapper relative flex min-h-[60vh] md:h-100vh items-center justify-center bg-${background}`}
    >
      <div className="pixel-cursor-trailing-body">
        <p className={`text-${theme}`}>{parse(text)}</p>
      </div>
      <div className="pixel-cursor-trailing-grid flex h-full w-full overflow-hidden inset-0 absolute">
        {windowWidth > 0 &&
          Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="pixel-cursor-trailing-column">
              {getBlocks().map((blockIndex) => (
                <div
                  key={blockIndex}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    colorize(e.currentTarget);
                  }}
                ></div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
