import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Fade, Slide } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type {
  AlbumFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
// import Skeleton from "react-loading-skeleton";

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
  const [isLoading, setIsLoading] = useState(true);
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
                      className="max-w-max block no-underline album-item mx-auto relative p-1 group transition-all"
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
      {albumDisplayType === "slider" && (
        <section className="px-2 mx-0">
          <section className="container py-5 feature-album-slider-wrapper mx-auto">
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
                    icon={faArrowLeft as IconProp}
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
                    icon={faArrowRight as IconProp}
                    className="fa-fw my-0 text-xl h-8 w-8"
                  />
                  <span className="sr-only">Move Blog Rotation Next</span>
                </button>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-center mb-16">
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
                    className="mx-auto !animate-col-width w-28 sm:w-32 md:w-64"
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
                        className="max-w-max block no-underline album-item mx-auto relative p-1 group transition-all"
                      >
                        {/* {isLoading 
                        ?
                        <Skeleton    height={400}
                        width={400}/>
                        } */}
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

                        <p className="text-sm font-semibold mt-0 mb-4 text-center uppercase group-hover:text-primary group-focus:text-primary transition-all">
                          {albumItem.title}
                        </p>
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
