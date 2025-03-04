import Image from "next/image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import React from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

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

export default function GallerySection({ galleryData }: GalleryProps) {
  if (!galleryData) return <></>;

  const gallery = galleryData;

  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;

  return (
    <div className="my-8 magic-grid block h-full">
      <div className="flex max-w-8xl mx-auto px-2 w-full">
        <LightGallery
          speed={500}
          download={false}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="flex flex-wrap flex-row w-full gap-0 lg:gap-2 mx-auto items-center justify-center"
        >
          {gallery.map((finalImage, index) => (
            <a
              href={finalImage.url}
              key={finalImage.url}
              className="relative flex flex-wrap h-36 lg:h-64 w-36 lg:w-64 aspect-1 transition-all hover:cursor-pointer group"
              data-sub-html={finalImage.caption}
            >
              <Image
                src={finalImage.url}
                alt=""
                sizes="100%"
                width={0}
                height={0}
                className="h-full w-full object-cover absolute inset-0"
              />
              <MagnifyingGlassCircleIcon className="h-6 md:h-8 w-6 md:w-8 text-gray-400 transition-all duration-300 group-hover:opacity-100 opacity-80 lg:opacity-50 absolute bottom-2 lg:bottom-4 right-2 lg:right-4 z-1 text-[white]" />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
