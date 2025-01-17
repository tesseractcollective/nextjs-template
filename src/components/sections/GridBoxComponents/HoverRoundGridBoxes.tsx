import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

const ExpandingCircleLinks = ({ gridBoxData }: GridBoxProps) => {
  return (
    <div className="w-full">
      {gridBoxData.map((item) => (
        <ExpandingCircleLink key={item.id} gridBox={item} />
      ))}
    </div>
  );
};

interface SingleGridBoxProps {
  gridBox: GridBoxFieldsFragment;
}

const ExpandingCircleLink = ({ gridBox }: SingleGridBoxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for different properties
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Safely handle nullable fields
  const imageUrl = gridBox.boxImage?.url ?? "";
  const title = gridBox.boxTitle ?? "";
  const link = gridBox.boxLink ?? "#";

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden"
    >
      <motion.a
        href={link}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          scale,
          borderRadius,
        }}
      >
        {/* Background Image Container */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale,
            borderRadius,
          }}
          initial={{ scale: 0.5 }}
          aria-label={title}
        />

        {/* Text Overlay */}
        <motion.div className="relative z-10 text-center px-4">
          <motion.h2
            className="text-6xl font-bold text-white mb-4"
            style={{ opacity }}
            initial={{ opacity: 0 }}
          >
            {title}
          </motion.h2>

          {gridBox.boxDescription && (
            <motion.div
              className="text-white text-xl"
              style={{ opacity }}
              initial={{ opacity: 0 }}
              dangerouslySetInnerHTML={{ __html: gridBox.boxDescription.html }}
            />
          )}
        </motion.div>
      </motion.a>
    </div>
  );
};

export default ExpandingCircleLinks;
