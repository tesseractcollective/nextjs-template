import React from "react";
import Image from "next/image";
import Slider from "react-slick";

interface GalleryProps {
  galleryData?: {
    __typename?: "Asset" | undefined;
    url: string;
    caption?: string | null;
  }[];
  galleryLayoutData?: string;
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

export default function GalleryDefault({ galleryData }: GalleryProps) {
  if (!galleryData) return <></>;

  const gallery = galleryData;
  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;
  if (finalImages.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="">
      {gallery.map((image) => (
        <div
          className="relative h-70vh md:h-screen max-h-[80vh]"
          key={image.url}
        >
          <Image
            src={image.url}
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Slider>
  );
}
