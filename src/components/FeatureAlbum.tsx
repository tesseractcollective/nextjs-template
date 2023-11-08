import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type {
  AlbumFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
import { EffectCards } from "swiper/modules";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  albumDisplayType: string;
}

export default function FeatureAlbum({
  albums,
  siteLibrary,
  albumDisplayType,
}: FeatureAlbumProps) {
  const { isMobile } = useViewport();
  const swiperRef = useRef<SwiperType>();
  if (!siteLibrary) return <></>;
  const { isSpanish } = siteLibrary;
  if (!albums) return <></>;

  return (
    <>
      {albumDisplayType === "featured" && (
        <>
          {albums
            .filter((album) => album.featureHomePage === true)
            .map((albumItem) => (
              <section className="px-2 mx-0" key={albumItem.albumSlug}>
                <section className="container py-5 mx-auto">
                  <div className="grid">
                    <div className="col-12">
                      {!!albumItem?.title && (
                        <Slide className="w-12" direction="up" triggerOnce>
                          <h3 className="text-3xl md:text-6xl mt-0 mb-4 text-center uppercase">
                            {albumItem.title}
                          </h3>
                        </Slide>
                      )}
                    </div>
                    <div className="w-12 md:w-8/12 mx-auto">
                      {!!albumItem?.albumSlug && albumItem?.title && (
                        <Link
                          href={`/music/${albumItem.albumSlug}`}
                          onClick={() =>
                            ReactGA.event({
                              category: "Link",
                              action: albumItem.title || "",
                              label: albumItem.title || "",
                            })
                          }
                          className="mx-auto max-w-max block no-underline"
                        >
                          {!!albumItem.albumCover?.url && (
                            <Slide
                              className="w-full"
                              direction="up"
                              triggerOnce
                            >
                              <Image
                                src={albumItem.albumCover.url}
                                alt={(albumItem.title && albumItem.title) || ""}
                                className="mx-auto mb-0 w-full block box-shadow border-round"
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{
                                  maxHeight: "400px",
                                  maxWidth: "400px",
                                  objectFit: "cover",
                                  aspectRatio: 1,
                                }}
                              />
                            </Slide>
                          )}
                        </Link>
                      )}
                    </div>
                    <div className="col-12 md:col-8 mx-auto my-auto">
                      {!!albumItem.description && (
                        <div className="parse-block track-list text-center">
                          {parse(albumItem.description.html)}
                        </div>
                      )}
                      {!!albumItem.albumBuyLink && (
                        <a
                          href={albumItem.albumBuyLink}
                          onClick={() =>
                            ReactGA.event({
                              category: "Link",
                              action: `Visit ${albumItem.title}`,
                              label: albumItem.title || "",
                            })
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white border-dark border px-8 md:px-4 theme-button mx-auto max-w-max block no-underline"
                        >
                          {isSpanish ? "Escucha" : "Listen"}
                        </a>
                      )}
                    </div>
                  </div>
                </section>
              </section>
            ))}
        </>
      )}
      {albumDisplayType === "all" && (
        <section className="px-2 mx-0">
          <section className="container py-5 feature-album-slider-wrapper mx-auto">
            <h2 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mb-4">
              {isSpanish ? "Música" : "Music"}
            </h2>
            <div
              className={`flex flex-row flex-wrap items-start justify-center my-16`}
            >
              {albums.map((albumItem) => (
                <Fade
                  key={albumItem.albumSlug}
                  direction="up"
                  triggerOnce
                  cascade
                  damping={0.1}
                  className="mx-auto !animate-col-width w-28 sm:w-32 md:w-64"
                >
                  {!!albumItem.albumSlug && (
                    <Link
                      href={`/music/${albumItem.albumSlug}`}
                      onClick={() =>
                        ReactGA.event({
                          category: "Link",
                          action: `Visit ${albumItem.title}`,
                          label: albumItem.title || "",
                        })
                      }
                      className="max-w-max block no-underline album-item mx-auto relative p-1 group transition-all cursor-pointer"
                    >
                      {!!albumItem.albumCover?.url && (
                        <Image
                          src={albumItem.albumCover.url}
                          alt={(albumItem.title && albumItem.title) || ""}
                          className="mx-auto mb-2 w-full block box-shadow border-round grayscale-0 hover:grayscale group-hover:grayscale group-focus:grayscale transition-all"
                          height={400}
                          width={400}
                          style={{
                            maxHeight: "400px",
                            maxWidth: "400px",
                            objectFit: "cover",
                            aspectRatio: 1,
                          }}
                        />
                      )}
                      <p className="text-sm font-semibold mt-0 mb-4 text-center uppercase group-hover:text-primary group-focus:text-primary transition-all">
                        {albumItem.title}
                      </p>
                    </Link>
                  )}
                </Fade>
              ))}
            </div>
          </section>
        </section>
      )}
      {albumDisplayType === "record" && (
        <section className="px-2 mx-0">
          <section className="container py-5 overflow-hidden mx-auto">
            <h2 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mb-4">
              {isSpanish ? "Música" : "Music"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-8xl gap-y-0 md:gap-y-8">
              {albums.map((albumItem) => (
                <Link
                  href={`/music/${albumItem.albumSlug}`}
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: `Visit ${albumItem.title}`,
                      label: albumItem.title || "",
                    })
                  }
                  className="vinyl-wrap transition-all group"
                  key={albumItem.albumSlug}
                >
                  <div className="vinyl-album">
                    <div
                      className="vinyl-cover"
                      style={{
                        backgroundImage: `url(${albumItem.albumCover?.url})`,
                      }}
                    >
                      <div className="vinyl-print"></div>
                    </div>
                    <div
                      className="vinyl-thumb group-hover:spin-infinite"
                      style={{
                        backgroundImage: `url(${albumItem.albumCover?.url})`,
                      }}
                    ></div>
                    <div className="vinyl">
                      <div className="print"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      )}
      {albumDisplayType === "cd" && (
        <section className="px-2 mx-0">
          <section className="container py-5 feature-album-slider-wrapper mx-auto">
            <h2 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mb-4">
              {isSpanish ? "Música" : "Music"}
            </h2>
            <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center my-16 w-full max-w-8xl gap-8 md:mx-auto">
              {albums.map((albumItem) => (
                <Fade
                  key={albumItem.albumSlug}
                  direction="up"
                  triggerOnce
                  cascade
                  damping={0.1}
                  className="-ml-8 md:mx-auto !animate-col-width w-32 md:w-64 rotate-nth"
                >
                  {!!albumItem.albumSlug && (
                    <Link
                      href={`/music/${albumItem.albumSlug}`}
                      onClick={() =>
                        ReactGA.event({
                          category: "Link",
                          action: `Visit ${albumItem.title}`,
                          label: albumItem.title || "",
                        })
                      }
                      id={albumItem.albumSlug}
                      className="cd-case relative transition-all"
                    >
                      <div
                        className="album-art bg-cover transition-all"
                        style={{
                          backgroundImage: `url(${albumItem.albumCover?.url})`,
                        }}
                      >
                        <div className="sup pos-tl"></div>
                        <div className="sup pos-tr"></div>
                        <div className="sup pos-bl"></div>
                        <div className="sup pos-br"></div>
                      </div>
                      <div className="spine"></div>
                      <p
                        style={{ writingMode: "vertical-rl" }}
                        className="text-text-color text-[8px] text-center line-clamp-1 m-0 p-0 max-w-[34ch] absolute top-0 bottom-0 block uppercase px-[5px] py-0 z-[40] opacity-100"
                      >
                        {albumItem.title}
                      </p>
                    </Link>
                  )}
                </Fade>
              ))}
            </div>
          </section>
        </section>
      )}
      {albumDisplayType === "slider" && (
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
                        priority
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
      )}
      {albumDisplayType === "skew" && (
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
                              priority
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
      )}
      {albumDisplayType === "stacked" && (
        <section className="px-2 mx-0">
          <section className="container py-5 feature-album-slider-wrapper mx-auto relative z-20">
            <div className="my-16">
              <Swiper
                className="!pb-10 px-4 md:max-w-3xl no-shadow-swiper"
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                {albums.map((albumItem) => (
                  <SwiperSlide key={albumItem.albumSlug} className="">
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
                        className="max-w-max block no-underline album-item mx-auto relative p-1 group transition-all"
                      >
                        <Image
                          src={albumItem.albumCover.url}
                          alt={(albumItem.title && albumItem.title) || ""}
                          className="mx-auto mb-2 w-full block box-shadow-small border-round grayscale-0 hover:grayscale group-hover:grayscale group-focus:grayscale transition-all"
                          height={400}
                          width={400}
                          // placeholder="blur"
                          // blurDataURL="/assets/square-placeholder.jpg"
                          priority
                          style={{
                            maxHeight: "400px",
                            maxWidth: "400px",
                            objectFit: "cover",
                            aspectRatio: 1,
                          }}
                        />

                        {/* <p className="text-sm font-semibold mt-0 mb-4 text-center uppercase group-hover:text-primary group-focus:text-primary transition-all">
                          {albumItem.title}
                        </p> */}
                      </Link>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
