import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumStackedSection({ albums }: FeatureAlbumProps) {
  if (!albums) return <></>;

  return (
    <div>
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
                        style={{
                          maxHeight: "400px",
                          maxWidth: "400px",
                          objectFit: "cover",
                          aspectRatio: 1,
                        }}
                      />
                    </Link>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </div>
  );
}
