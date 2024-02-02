import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumSkewSection({ albums }: FeatureAlbumProps) {
  return (
    <section className="px-2 mx-0 overflow-hidden">
      <Zoom triggerOnce>
        <section className="py-16 md:py-36 mx-auto">
          <div className="flex flex-row flex-wrap items-start justify-center my-4 md:my-8 rotate-[10deg] skew-x-6 w-[120%] -ml-16 feature-album-slider-wrapper">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
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
              {albums.map((albumItem) => (
                <SwiperSlide
                  key={albumItem.albumSlug}
                  className="mx-auto !animate-col-width w-28 sm:w-32 md:w-72"
                >
                  {!!albumItem.albumSlug && albumItem.albumCover?.url && (
                    <Link
                      href={`/music/${albumItem.albumSlug}`}
                      onClick={() =>
                        ReactGA.event({
                          category: "Link",
                          action: `Visit ${albumItem.title}`,
                          label: albumItem.title || "",
                        })
                      }
                      className="block no-underline album-item mx-auto relative group transition-all hover:skew-x-[-2deg] hover:rotate-[-2deg]"
                    >
                      <Fade direction="down">
                        <Image
                          src={albumItem.albumCover.url}
                          alt={(albumItem.title && albumItem.title) || ""}
                          className="mx-auto my-8 w-full block box-shadow border-round grayscale hover:grayscale-0 group-hover:grayscale-0 group-focus:grayscale transition-all"
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
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Zoom>
    </section>
  );
}
