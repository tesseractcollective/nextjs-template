import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import React from "react";

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

export default function GalleryChevron({ imgs }: GalleryProps) {
  return (
    <div className="my-0 magic-grid block h-full">
      <div className="block mx-auto">
        <div className="grid grid-cols-3 gap-1">
          <Fade triggerOnce cascade damping={0.15} direction="up">
            {imgs.map((finalImage, index) => (
              <div
                key={finalImage}
                className=" aspect-[9/16] block mx-auto overflow-hidden"
                id={`gallery-${index}`}
              >
                <Image
                  src={finalImage}
                  alt=""
                  className="object-cover block mx-auto h-full w-full aspect-[9/16]"
                  sizes="100%"
                  width={0}
                  height={0}
                />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
}
