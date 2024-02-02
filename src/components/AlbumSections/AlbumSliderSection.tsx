import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
  isSpanish?: boolean;
}

export default function FeatureAlbum({ albums, isSpanish }: FeatureAlbumProps) {
  const { isMobile } = useViewport();
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="max-w-8xl w-full p-4 feature-album-slider-wrapper mx-auto">
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 max-w-8xl mx-auto">
        <h2 className="text-2xl md:text-4xl mx-auto md:mx-0 opacity-90 uppercase text-center md:text-left font-bold mb-4">
          {isSpanish ? "Música" : "Music"}
        </h2>
        <div className="flex flex-row">
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color mr-4 hover:rotate-6"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon
              icon={faChevronLeft as IconProp}
              className="fa-fw my-0 text-xl h-8 w-8"
            />
            <span className="sr-only">Move Blog Rotation Back</span>
          </button>
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color hover:-rotate-6"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon
              icon={faChevronRight as IconProp}
              className="fa-fw my-0 text-xl h-8 w-8"
            />
            <span className="sr-only">Move Blog Rotation Next</span>
          </button>
        </div>
      </div>
      <Swiper
        className="!pb-10"
        grabCursor
        loop
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
      >
        {albums.map((albumItem) => (
          <SwiperSlide
            key={albumItem.albumSlug}
            className="mx-auto !animate-col-width"
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
                className="max-w-max block no-underline album-item mx-auto relative py-1 px-0 group transition-all"
              >
                <Fade direction="down" triggerOnce>
                  <Image
                    src={albumItem.albumCover.url}
                    alt={(albumItem.title && albumItem.title) || ""}
                    className="mx-auto mb-2 w-full block box-shadow border-round grayscale-0 hover:grayscale group-hover:grayscale group-focus:grayscale transition-all px-0"
                    height={400}
                    width={400}
                    style={{
                      maxHeight: "420px",
                      maxWidth: "420px",
                      objectFit: "cover",
                      aspectRatio: 1,
                    }}
                  />
                </Fade>
                <Fade direction="up" triggerOnce>
                  <p className="text-sm font-semibold mt-0 mb-4 text-center uppercase group-hover:text-primary group-focus:text-primary transition-all px-0 mx-0">
                    {albumItem.title}
                  </p>
                </Fade>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
