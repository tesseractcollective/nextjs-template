import Image from "next/image";
import React from "react";

interface GalleryProps {
  imgs: string[];
}

export default function GalleryFullscreen({ imgs }: GalleryProps) {
  return (
    <div className="relative">
      {imgs.map((finalImage, index) => (
        <section key={index} className="h-100vh bg-bg top-0 sticky">
          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat duration-[400ms] bg-fixed"></div>
          {finalImage && (
            <Image
              src={finalImage}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-full object-cover absolute inset-0 z-0 h-100vh"
            />
          )}
        </section>
      ))}
    </div>
  );
}
