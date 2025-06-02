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

export default function GalleryMason({ imgs }: GalleryProps) {
  return (
    <div className="my-0 magic-grid block h-full">
      <div className="block px-4 max-w-8xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <Fade triggerOnce cascade>
            {imgs.map((finalImage, index) => (
              <div
                key={finalImage}
                className="block mx-auto overflow-hidden"
                id={`gallery-${index}`}
              >
                <Image
                  src={finalImage}
                  alt=""
                  className={`rounded-lg object-cover block mb-6 mx-auto h-full w-full ${
                    index % 2 == 0 ? "aspect-square" : "aspect-video"
                  }`}
                  sizes="100%"
                  width={0}
                  aria-hidden
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
