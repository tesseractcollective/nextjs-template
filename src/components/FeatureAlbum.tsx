import React from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Fade, Slide } from "react-awesome-reveal";
import useViewport from "@/hooks/useViewport";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import ReactGA from "react-ga4";
import type {
  AlbumFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  albumMap?: boolean;
}

export default function FeatureAlbum({
  albums,
  siteLibrary,
  albumMap,
}: FeatureAlbumProps) {
  const { isMobile } = useViewport();
  if (!siteLibrary) return <></>;
  const { isSpanish } = siteLibrary;
  if (!albums) return <></>;

  return (
    <>
      {albums
        .filter((album) => album.featureHomePage === true)
        .map((albumItem) => (
          <section className="gradient-bkg px-2 mx-0" key={albumItem.albumSlug}>
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
                      prefetch
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
                        <Slide className="w-full" direction="up" triggerOnce>
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
      {!!albumMap && (
        <section className="px-2 mx-0">
          <section className="container py-5 feature-album-slider-wrapper mx-auto">
            <h2 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center">
              {isSpanish ? "Música" : "Music"}
            </h2>
            {isMobile ? (
              <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                }}
                pagination
                modules={[EffectCoverflow, Pagination]}
                className="album-swiper"
              >
                {albums.map((albumItem) => (
                  <SwiperSlide key={albumItem.albumSlug}>
                    <Link
                      href={`/music/${albumItem.albumSlug}`}
                      prefetch
                      onClick={() =>
                        ReactGA.event({
                          category: "Link",
                          action: `Visit ${albumItem.title}`,
                          label: albumItem.title || "",
                        })
                      }
                      className="max-w-max no-underline"
                    >
                      {!!albumItem.albumCover?.url && (
                        <Image
                          src={albumItem.albumCover.url}
                          width={0}
                          height={0}
                          sizes="100%"
                          alt={(albumItem.title && albumItem.title) || ""}
                          className="mx-auto mb-0 block border-round w-[20rem]"
                          style={{
                            maxHeight: "400px",
                            objectFit: "cover",
                            aspectRatio: 1,
                          }}
                        />
                      )}
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div
                className={`flex flex-row flex-wrap items-start justify-center my-16`}
              >
                {albums.map((albumItem) => (
                  <div
                    className="mx-auto animate-col-width w-64"
                    key={albumItem.albumSlug}
                  >
                    {!!albumItem.albumSlug && (
                      <Link
                        href={`/music/${albumItem.albumSlug}`}
                        prefetch
                        onClick={() =>
                          ReactGA.event({
                            category: "Link",
                            action: `Visit ${albumItem.title}`,
                            label: albumItem.title || "",
                          })
                        }
                        className="max-w-max block no-underline album-map-grid-item"
                      >
                        {!!albumItem.albumCover?.url && (
                          <Image
                            src={albumItem.albumCover.url}
                            alt={(albumItem.title && albumItem.title) || ""}
                            className="mx-auto mb-2 w-full block box-shadow border-round"
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
                        )}
                      </Link>
                    )}
                    <h3 className="text-xs mt-0 mb-4 text-center uppercase">
                      {albumItem.title}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>
      )}
    </>
  );
}
