import Image from "next/image";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryInfinite from "./GallerySections/GalleryInfinite";
import GalleryCarousel from "@/components/GallerySections/GalleryCarousel";
import GalleryMixSection from "@/components/GallerySections/GalleryMixSection";
import GallerySliderSection from "@/components/GallerySections/GallerySliderSection";
import React from "react";
import GalleryLightbox from "./GallerySections/GalleryLightbox";
import GalleryGrid from "./GallerySections/GalleryGrid";

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

export default function GallerySection({
  galleryData,
  galleryLayoutData,
}: GalleryProps) {
  if (!galleryData || !galleryLayoutData) return <></>;

  const gallery = galleryData;
  const galleryLayout = galleryLayoutData;

  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;

  if (galleryLayout === "fullScreen" && gallery.length >= 1) {
    return (
      <div className="relative">
        {finalImages.map((finalImage, index) => (
          <section key={finalImage} className="h-100vh bg-bg top-0 sticky">
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
  if (galleryLayout === "card" && finalImages.length >= 1) {
    return <GalleryCarousel imgs={finalImages} />;
  }
  if (galleryLayout === "shelf" && gallery.length >= 1) {
    return (
      <div className="my-0 magic-grid block h-full">
        <div className="block mx-auto">
          <div className="grid grid-cols-3 gap-1">
            <Fade triggerOnce cascade damping={0.25} direction="up">
              {finalImages.map((finalImage, index) => (
                <div
                  key={finalImage}
                  className=" aspect-1 block mx-auto overflow-hidden"
                  id={`gallery-${index}`}
                >
                  <Image
                    src={finalImage}
                    alt=""
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
  if (galleryLayout === "grid" && gallery.length >= 1) {
    return <GalleryGrid galleryData={gallery} />;
  }
  if (galleryLayout === "infinite" && finalImages.length >= 1) {
    return <GalleryInfinite galleryData={gallery} />;
  }
  if (galleryLayout === "mason" && finalImages.length >= 1) {
    return (
      <div className="my-0 magic-grid block h-full">
        <div className="block px-4 max-w-8xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <Fade triggerOnce cascade damping={0.05} direction="up">
              {finalImages.map((finalImage, index) => (
                <div
                  key={finalImage}
                  className="block mx-auto overflow-hidden"
                  id={`gallery-${index}`}
                >
                  <Image
                    src={finalImage}
                    alt=""
                    className={`rounded-lg object-cover block mb-6 mx-auto h-full w-full ${
                      index % 2 == 0 ? "aspect-square" : "aspect-video"
                    }`}
                    sizes="100%"
                    width={0}
                    aria-hidden
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
    return <GalleryLightbox galleryData={gallery} />;
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
                className="mx-0"
                loop={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
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
                        <Fade direction="down" triggerOnce>
                          <Image
                            src={finalImage}
                            alt=""
                            className="mx-auto my-8 w-full block box-shadow border-round"
                            height={400}
                            width={400}
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
  if (galleryLayout === "compact" && gallery.length >= 1) {
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
  if (galleryLayout === "mix" && gallery.length >= 1) {
    return <GalleryMixSection galleryData={gallery} />;
  }
  if (galleryLayout === "slider" && gallery.length >= 2) {
    return (
      <GallerySliderSection
        beforeImage={gallery[0].url}
        afterImage={gallery[1].url}
      />
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

  return null; // No gallery items to render
}
