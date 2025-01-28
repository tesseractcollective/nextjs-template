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
    <div className="my-16 magic-grid block h-full">
      <div className="flex px-4 max-w-8xl mx-auto">
        <LightGallery
          speed={500}
          download={false}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="flex flex-wrap flex-row w-full gap-4 mx-auto items-center justify-center"
        >
          {gallery.map((finalImage, index) => (
            <a
              href={finalImage.url}
              key={finalImage.url}
              className="relative flex flex-wrap h-32 md:h-64 w-32 md:w-64 aspect-1 transition-all hover:cursor-pointer"
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
              {/* <span className="h-full w-full object-cover absolute inset-0">
            {finalImage.caption}
          </span> */}
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
