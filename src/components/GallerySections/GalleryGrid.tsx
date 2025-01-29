import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import React from "react";

interface GalleryProps {
  galleryData?: {
    __typename?: "Asset" | undefined;
    url: string;
    caption?: string | null;
  }[];
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

export default function GalleryGrid({ galleryData }: GalleryProps) {
  if (!galleryData) return <></>;

  const gallery = galleryData;

  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;

  return (
    <div className="my-0 magic-grid block h-full">
      <div className="block px-4 max-w-8xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <Fade triggerOnce cascade damping={0.05} direction="up">
            {finalImages.map((finalImage, index) => (
              <div
                key={finalImage}
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
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
}
