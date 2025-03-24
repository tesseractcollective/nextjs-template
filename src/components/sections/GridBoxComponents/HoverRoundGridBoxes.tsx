import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

const ExpandingCircleLinks = ({ gridBoxData }: GridBoxProps) => {
  return (
    <div className="w-full">
      {gridBoxData.map((item, index) => (
        <ExpandingCircleLink
          key={item.id}
          gridBox={item}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

interface SingleGridBoxProps {
  gridBox: GridBoxFieldsFragment;
  isEven: boolean;
}

const ExpandingCircleLink = ({ gridBox, isEven }: SingleGridBoxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef as React.RefObject<Element>, {
    amount: 0.2,
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });

  // Calculate animation progress based on inView state
  const animationProgress = useTransform(
    scrollYProgress,
    (value) => (isInView ? Math.min(1, value * 3) : 0) // Compress animation to 3 seconds
  );

  // Transform values for different properties
  const scale = useTransform(
    animationProgress,
    [0, 0.7, 1], // Adjust timing for circle-to-fullscreen
    [0.3, 0.7, 1]
  );

  // Start with perfect circle (equal border radius) then animate to full screen
  const borderRadius = useTransform(
    animationProgress,
    [0, 0.7, 1],
    ["50% 50%", "50% 50%", "0% 0%"]
  );

  // Simplified opacity transform - just fade in and stay visible
  const opacity = useTransform(animationProgress, [0, 0.2], [0, 1]);

  // Transform x position from offset to center during expansion
  const xOffset = isEven ? -200 : 200;
  const translateX = useTransform(
    animationProgress,
    [0, 0.5, 1],
    [xOffset, xOffset / 2, 0]
  );

  // Transform dimensions for the circle-to-fullscreen animation
  const width = useTransform(
    animationProgress,
    [0, 0.7, 1],
    ["min(100vh, 100vw)", "min(100vh, 100vw)", "100vw"]
  );

  const height = useTransform(
    animationProgress,
    [0, 0.7, 1],
    ["min(100vh, 100vw)", "min(100vh, 100vw)", "100vh"]
  );

  // Safely handle nullable fields
  const imageUrl = gridBox.boxImage?.url ?? "";
  const title = gridBox.boxTitle ?? "";
  const link = gridBox.boxLink ?? "#";

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden flex items-center justify-center"
    >
      {/* Centered Text Container */}
      <div className="absolute z-20 text-center">
        <h2
          className="text-6xl px-4 lg:text-8xl font-bold text-[white] mix-blend-difference
                 [text-shadow:1px_1px_0_#000,2px_2px_0_#000,3px_3px_0_#000,4px_4px_0_#000,5px_5px_0_#000,6px_6px_0_#000]"
        >
          {title}
        </h2>
      </div>
      {gridBox.boxDescription && (
        <div
          className="text-white text-xl"
          dangerouslySetInnerHTML={{ __html: gridBox.boxDescription.html }}
        />
      )}

      {/* Animated Circle/Image Container */}
      <LinkItem link={link} parentCssClass="w-full">
        <motion.div
          {...{
            className: "absolute inset-0 flex items-center justify-center",
          }}
          style={{
            scale,
            borderRadius,
            x: translateX,
            opacity,
            width,
            height,
            margin: "auto",
            aspectRatio: animationProgress.get() >= 0.7 ? "auto" : "1", // Remove aspect ratio constraint during final expansion
          }}
        >
          <motion.div
            {...{ className: "absolute inset-0 w-full h-full bg-black/50" }}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scale,
              borderRadius,
            }}
            initial={{ scale: 0.3 }}
            aria-label={title}
          />
        </motion.div>
      </LinkItem>
    </div>
  );
};

export default ExpandingCircleLinks;
