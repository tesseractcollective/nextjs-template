import Image from "next/image";
import Slider from "react-slick";
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
import { Fade, Zoom } from "react-awesome-reveal";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface GalleryProps {
  galleryData?: { __typename?: "Asset" | undefined; url: string }[];
  galleryLayoutData?: string;
}

export default function GallerySection({
  galleryData,
  galleryLayoutData,
}: GalleryProps) {
  if (!galleryData || !galleryLayoutData) return <></>;

  const gallery = galleryData;
  const galleryLayout = galleryLayoutData;

  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;

  if (galleryLayout === "grid" && gallery.length >= 1) {
    return (
      <div className="my-0 magic-grid block h-full">
        <div className="block px-4 max-w-8xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <Fade triggerOnce cascade damping={0.05} direction="up">
              {finalImages.map((finalImage, index) => (
                <div
                  key={finalImage}
                  className=" aspect-1 block mx-auto overflow-hidden"
                  id={`gallery-${index}`}
                >
                  <Image
                    src={finalImage}
                    alt={`Gallery Image: ${index}`}
                    className="object-cover block mx-auto h-full w-full aspect-1"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    );
  }

  if (galleryLayout === "lightbox" && gallery.length >= 1) {
    return (
      <div className="my-16 magic-grid block h-full">
        <div className="flex px-4 max-w-8xl mx-auto">
          <LightGallery
            speed={500}
            download={false}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex flex-wrap flex-row w-full gap-4 mx-auto items-center justify-center"
          >
            {finalImages.map((finalImage, index) => (
              <a
                href={finalImage}
                key={finalImage}
                className="flex flex-wrap max-w-[280px] aspect-1 transition-all hover:cursor-pointer"
              >
                <Image
                  src={finalImage}
                  alt={`Gallery Image: ${index + 1}`}
                  sizes="100%"
                  width={0}
                  height={0}
                  className="h-full w-full object-cover"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    );
  }

  if (galleryLayout === "rotate" && gallery.length >= 1) {
    return (
      <section className="px-2 mx-0 overflow-hidden">
        <section className="py-16 md:py-36 mx-auto">
          {finalImages.length > 0 && (
            <div className="flex flex-row flex-wrap items-start justify-center my-4 md:my-8 rotate-[10deg] skew-x-6 w-[120%] -ml-16 feature-album-slider-wrapper">
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mx-0"
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              >
                {finalImages.map((finalImage) => (
                  <SwiperSlide
                    key={finalImage}
                    className="mx-auto !animate-col-width w-28 sm:w-32 md:w-72"
                  >
                    {!!finalImage && (
                      <div className="block no-underline album-item mx-auto relative group transition-all hover:skew-x-[-2deg] hover:rotate-[-2deg]">
                        <Fade direction="down">
                          <Image
                            src={finalImage}
                            alt=""
                            className="mx-auto my-8 w-full block box-shadow border-round"
                            height={400}
                            width={400}
                            priority
                            style={{
                              maxHeight: "450px",
                              maxWidth: "450px",
                              objectFit: "cover",
                              aspectRatio: 1,
                            }}
                          />
                        </Fade>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </section>
      </section>
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
