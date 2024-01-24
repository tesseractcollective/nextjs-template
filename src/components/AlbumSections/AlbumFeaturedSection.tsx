import React from "react";
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
  isSpanish?: boolean;
}

export default function AlbumFeaturedSection({
  albums,
  isSpanish,
}: FeatureAlbumProps) {
  if (!albums) return <></>;

  return (
    <div>
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
    </div>
  );
}
