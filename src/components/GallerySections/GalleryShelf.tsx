import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { duration } from "moment";

interface GalleryProps {
  imgs: string[];
}

// grid √
// infinite √
// lightbox √
// mason √
// rotate √
// fullScreen √
// shelf √
// card
// chevron
// compact
// mix
// polaroid
// slider
// stack
// twohundredvh
// circle

export default function GalleryShelf({ imgs }: GalleryProps) {
  return (
    <div className="my-0 magic-grid block h-full">
      <div className="block mx-auto">
        <div className="grid grid-cols-3 gap-1">
          {imgs.map((finalImage, index) => (
            <motion.div
              key={finalImage}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className=" aspect-1 block mx-auto overflow-hidden"
              id={`gallery-${index}`}
            >
              <Image
                src={finalImage}
                alt=""
                className="object-cover block mx-auto h-full w-full aspect-1"
                sizes="100%"
                width={0}
                height={0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
