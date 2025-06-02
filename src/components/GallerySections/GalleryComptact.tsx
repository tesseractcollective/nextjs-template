import React from "react";
import Image from "next/image";
import Slider from "react-slick";

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

export default function GalleryComptact({ galleryData }: GalleryProps) {
  if (!galleryData) return <></>;

  const gallery = galleryData;
  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;
  if (finalImages.length === 0) return null;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3, // Desktop: 3 slides
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // 2 slides on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="gallery-slider">
      {gallery.map((image) => (
        <div className="gallery-slide" key={image.url}>
          <Image
            className="h-144 w-144 aspect-1 block"
            src={image.url}
            alt=""
            width={0}
            height={0}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              aspectRatio: "1/1", // Perfect square
            }}
          />
        </div>
      ))}
    </Slider>
  );
}
