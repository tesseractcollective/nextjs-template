import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import VideoYoutubeSection from "./VideoYoutubeSection";

interface VideoStandardSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoRecordSection({
  videoData,
}: VideoStandardSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const ovalHeight = useTransform(scrollYProgress, [0, 0.5], ["20vh", "200vh"]);
  const ovalWidth = useTransform(scrollYProgress, [0, 0.5], ["25%", "400%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full bg-bg-secondary overflow-hidden">
        <VideoYoutubeSection videoData={videoData} />
        <motion.div
          className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 bg-primary rounded-[100%]"
          style={{
            width: ovalWidth,
            height: ovalHeight,
          }}
        />
      </div>
      <div className="relative h-screen"></div>
    </div>
  );
}
