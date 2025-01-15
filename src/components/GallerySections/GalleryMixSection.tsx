import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

interface GalleryProps {
  galleryData?: {
    __typename?: "Asset" | undefined;
    url: string;
    caption?: string | null;
  }[];
}

export default function GalleryMixSection({ galleryData }: GalleryProps) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const initialOffset = 400;

  const handleScroll = useCallback(() => {
    let ticking = false;

    return () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = 500;
          const scrollRatio = Math.min(window.pageYOffset / maxScroll, 1);
          const maxOffset = 500;

          setScrollOffset(scrollRatio * maxOffset);
          ticking = false;
        });

        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const scrollHandler = handleScroll();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  if (!galleryData) return null;

  const finalImages = galleryData.map((image) => image.url);

  return (
    <div className="w-full relative overflow-hidden hidden lg:block">
      <div
        className="flex gap-4 will-change-transform"
        style={{
          transform: `translate3d(${initialOffset - scrollOffset}px, 0, 0)`,
          marginLeft: "auto",
        }}
      >
        {finalImages.map((finalImage, index) => (
          <div
            key={finalImage}
            className="aspect-1 block overflow-hidden"
            id={`gallery-${index}`}
          >
            <Image
              src={finalImage}
              alt=""
              className="object-cover block aspect-1 w-144 h-144"
              sizes="100%"
              width={0}
              height={0}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
