import Image from "next/image";
import Slider from "react-slick";
import MagicGrid from "react-magic-grid";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";
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

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface GalleryProps {
  elements: ElementsType;
}

export default function GallerySection({ elements }: GalleryProps) {
  // const [index, setIndex] = React.useState(-1);
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
                className="w-[280px] h-[280px] block mx-auto overflow-hidden"
                id={`gallery-${index}`}
              >
                <Image
                  src={finalImage}
                  alt={`Gallery Image: ${index}`}
                  className="object-cover block mx-auto h-full w-full"
                  sizes="100%"
                  width={0}
                  height={0}
                />
              </div>
            ))}
          </MagicGrid>
        </div>
      </div>
    );
  }

  if (galleryLayout === "lightbox" && gallery.length >= 1) {
    return (
      <div className="my-16 magic-grid block h-full">
        <div className="flex px-4 max-w-5xl mx-auto">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex flex-wrap flex-row w-full gap-4 mx-auto items-center justify-center"
          >
            {finalImages.map((finalImage, index) => (
              <a href={finalImage} key={finalImage} className="flex flex-wrap">
                <Image
                  src={finalImage}
                  alt={`Gallery Image: ${index + 1}`}
                  // className="object-cover block mx-auto h-full"
                  sizes="100%"
                  width={300}
                  height={300}
                />
              </a>
            ))}
          </LightGallery>
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
