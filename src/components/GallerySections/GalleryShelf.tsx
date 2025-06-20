import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { duration } from "moment";

interface GalleryProps {
  imgs: string[];
}

export default function GalleryShelf({ imgs }: GalleryProps) {
  return (
    <div className="my-0 magic-grid block h-full">
      <div className="block mx-auto">
        <div className="grid grid-cols-3 gap-1">
          {imgs.map((finalImage, index) => (
            <div
              key={finalImage}
              className=" aspect-1 block mx-auto overflow-hidden relative h-full w-full"
              id={`gallery-${index}`}
            >
              <Image
                src={finalImage}
                alt=""
                className="object-cover block mx-auto h-full w-full aspect-1 absolute inset-0"
                sizes="100%"
                width={0}
                height={0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
