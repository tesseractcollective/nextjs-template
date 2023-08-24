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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  if (!elements) return <></>;
  const finalImages = elements.gallery.map((image) => image.url);
  return (
    <>
      {!!elements?.galleryLayout && elements.galleryLayout === "grid" ? (
        <div className="my-16 magic-grid block h-full">
          {!!elements?.gallery && elements?.gallery.length >= 1 && (
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
                      className="h-full w-full object-cover max-w-[300px] max-h-[440px] block mx-auto"
                      sizes="100%"
                      width={0}
                      height={0}
                    />
                  </div>
                ))}
              </MagicGrid>
            </div>
          )}
        </div>
      ) : (
        <>
          {!!elements?.gallery && elements?.gallery.length >= 1 && (
            <Slider {...settings} className="">
              {elements?.gallery.map((image) => (
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
          )}
        </>
      )}
    </>
  );
}
