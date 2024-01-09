"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryInfiniteProps {
  finalImages: string[];
}

export default function GalleryInfinite({ finalImages }: GalleryInfiniteProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const img3 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const img4 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const img5 = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const img6 = useTransform(scrollYProgress, [0, 1], [0, -650]);
  const img7 = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const img8 = useTransform(scrollYProgress, [0, 1], [0, -850]);
  const img9 = useTransform(scrollYProgress, [0, 1], [0, -950]);
  const img10 = useTransform(scrollYProgress, [0, 1], [0, -1050]);

  const images = [
    {
      src: finalImages[0],
      y: 0,
    },
    {
      src: finalImages[1],
      y: lg,
    },
    {
      src: finalImages[2],
      y: md,
    },
    {
      src: finalImages[3],
      y: img3,
    },
    {
      src: finalImages[4],
      y: img4,
    },
    {
      src: finalImages[5],
      y: img5,
    },
    {
      src: finalImages[6],
      y: img6,
    },
    {
      src: finalImages[7],
      y: img7,
    },
    {
      src: finalImages[8],
      y: img8,
    },
    {
      src: finalImages[9],
      y: img9,
    },
    {
      src: finalImages[10],
      y: img10,
    },
  ];

  return (
    <div ref={container} className="infinite-gallery overflow-hidden">
      <div className="infinite-gallery-images">
        {images.map(({ src, y }, i) => {
          return (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className="infinite-gallery-images-container"
            >
              <Image src={src} alt="image" fill />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
