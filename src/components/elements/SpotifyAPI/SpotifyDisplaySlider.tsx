import React, { useRef } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";

interface Album {
  name: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  release_date: string;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyDataProps {
  spotifyAlbumsData: Album[];
}

export default function FeatureAlbum({ spotifyAlbumsData }: SpotifyDataProps) {
  const { isMobile } = useViewport();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="max-w-8xl w-full p-4 feature-album-slider-wrapper mx-auto spotify-slider-wrapper">
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 max-w-8xl mx-auto">
        <h2 className="text-2xl md:text-4xl mx-auto md:mx-0 opacity-90 uppercase text-center md:text-left font-bold mb-4">
          Music
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
        {spotifyAlbumsData.map((albumItem) => (
          <SwiperSlide
            key={albumItem.external_urls.spotify}
            className="mx-auto !animate-col-width"
          >
            <a
              href={albumItem.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                ReactGA.event({
                  category: "Link",
                  action: `Visit ${albumItem.name}`,
                  label: albumItem.name || "",
                })
              }
              className="max-w-max block no-underline album-item mx-auto relative py-1 px-0 group transition-all"
            >
              <FontAwesomeIcon
                icon={faSpotify as IconProp}
                className="fa-fw h-5 w-5 flex aspect-1 absolute z-40 text-text-color transition-all group-hover:text-[#52ce52] top-2 left-2"
              />
              <Fade direction="down" triggerOnce>
                <Image
                  src={albumItem.images[0].url}
                  alt={(albumItem.name && albumItem.name) || ""}
                  className="mx-auto mb-2 w-full block box-shadow border-round grayscale-0 hover:grayscale group-hover:grayscale group-focus:grayscale transition-all px-0"
                  height={400}
                  width={400}
                  style={{
                    maxHeight: "600px",
                    maxWidth: "600px",
                    objectFit: "cover",
                    aspectRatio: 1,
                  }}
                />
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="text-sm font-semibold mt-0 mb-4 text-center uppercase group-hover:text-primary group-focus:text-primary transition-all px-0 mx-0">
                  {albumItem.name}
                </p>
              </Fade>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
