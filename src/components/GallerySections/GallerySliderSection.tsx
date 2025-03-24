import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

const GallerySliderSection: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDragging.current) {
        handleMove(event.clientX);
      }
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (isDragging.current) {
        handleMove(event.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchMove]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleContainerMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) {
        handleMove(event.clientX);
      }
    };

    container.addEventListener("mousemove", handleContainerMouseMove);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousemove", handleContainerMouseMove);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
    handleMove,
  ]);

  return (
    <div className="relative my-16 px-2">
      <div
        className="gallery-slider-section relative w-full overflow-hidden select-none max-w-8xl px-4 mx-auto"
        ref={containerRef}
        style={{
          minHeight: "28vh", // Primary height control
          height: "100%", // Ensures visibility on small screens
          maxHeight: "70vh", // Ensures visibility on small screens
          aspectRatio: "16/9", // Fallback aspect ratio
        }}
        onMouseDown={() => {
          isDragging.current = true;
        }}
        onTouchStart={() => {
          isDragging.current = true;
        }}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Slider Handle */}
        <motion.div
          {...{
            className:
              "absolute top-0 bottom-0 w-4 bg-transparent cursor-ew-resize touch-pan-x",
          }}
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(_, info) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const percentage = Math.min(
              Math.max(((info.point.x - rect.left) / rect.width) * 100, 0),
              100
            );
            setSliderPosition(percentage);
          }}
        >
          <div className="w-1 h-full bg-white mx-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-8 md:h-8 bg-primary rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <ArrowLeftIcon className="w-5 h-5 md:w-4 md:h-4 text-gray-400" />
              <ArrowRightIcon className="w-5 h-5 md:w-4 md:h-4 text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-primary text-text-color px-2 py-1 rounded text-xs md:text-sm">
          Before
        </div>
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-primary text-text-color px-2 py-1 rounded text-xs md:text-sm">
          After
        </div>
      </div>
    </div>
  );
};

export default GallerySliderSection;
