import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface GalleryProps {
  imgs: string[];
}

export default function GalleryRotate({ imgs }: GalleryProps) {
  return (
    <section className="px-2 mx-0 overflow-hidden">
      <section className="py-16 md:py-36 mx-auto">
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
            {imgs.map((finalImage) => (
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
      </section>
    </section>
  );
}
