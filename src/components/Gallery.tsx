import Image from "next/image";
import Slider from "react-slick";
import MagicGrid from "react-magic-grid";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface GalleryProps {
  elements: ElementsType;
}

export default function Gallery({ elements }: GalleryProps) {
  if (!elements) return <></>;

  const gallery = elements.gallery;
  const galleryLayout = elements.galleryLayout;

  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;
  if (galleryLayout === "grid" && gallery.length >= 1) {
    return (
      <div className="my-16 magic-grid block h-full">
        <div className="block px-4 max-w-5xl mx-auto">
          <MagicGrid items={finalImages.length} gutter={25} center>
            {finalImages.map((finalImage, index) => (
              <div
                key={finalImage}
                className="max-w-[300px] max-h-[440px] block mx-auto"
                id={`gallery-${index}`}
              >
                <Image
                  src={finalImage}
                  alt={`Gallery Image: ${index}`}
                  className="object-cover block mx-auto h-full"
                  sizes="100%"
                  width={300}
                  height={440}
                />
              </div>
            ))}
          </MagicGrid>
        </div>
      </div>
    );
  }

  if (gallery.length >= 1) {
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
              alt={image.url}
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

  return null; // No gallery items to render
}
