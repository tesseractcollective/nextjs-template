import Image from "next/image";
import React from "react";
import "./GalleryInfinite.scss";

interface GalleryProps {
  galleryData?: {
    __typename?: "Asset" | undefined;
    url: string;
    caption?: string | null;
  }[];
}

export default function GalleryInfinite({ galleryData }: GalleryProps) {
  if (!galleryData) return <></>;

  const finalImages = galleryData.map((image) => image.url).filter(Boolean);
  if (!finalImages.length) return <></>;

  // Double the images for seamless looping
  const slidingImages = [...finalImages, ...finalImages];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="animate-image-marquee flex w-[fit-content]">
        {slidingImages.map((imageUrl, index) => (
          <div
            key={`${imageUrl}-${index}`}
            className="relative h-[150px] w-[150px] flex-shrink-0 md:h-[200px] md:w-[200px]"
          >
            <Image
              src={imageUrl}
              alt=""
              className="object-cover"
              fill
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
