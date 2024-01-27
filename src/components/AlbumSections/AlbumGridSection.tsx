import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumGridSection({ albums }: FeatureAlbumProps) {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  if (!albums) return <></>;

  return (
    <div className="flex flex-row flex-wrap w-full mx-0 transition">
      {albums.map((album, index) => {
        const isHovered =
          hoveredItemIndex !== null && hoveredItemIndex !== index;

        return (
          <Fade
            triggerOnce
            key={index}
            className="block w-2/4 md:w-1/3 lg:w-2/4 transition-all relative"
          >
            {!!album.albumCover?.url && (
              <div className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%] relative">
                <div className="profile-overlay absolute inset-0 overflow-hidden">
                  {album.albumSlug && (
                    <Link
                      href={`/music/${album.albumSlug}`}
                      tabIndex={0}
                      onMouseEnter={() => setHoveredItemIndex(index)}
                      onMouseLeave={() => setHoveredItemIndex(null)}
                      className={`relative aspect-1 group mx-auto w-full transition-all`}
                    >
                      {album.albumCover?.url && (
                        <Image
                          sizes="100%"
                          src={album.albumCover?.url}
                          alt={album.title || ""}
                          width={0}
                          height={0}
                          className={`transition-all object-cover h-full w-full overflow-hidden relative z-10 duration-[400ms] ${
                            isHovered ? "grayscale" : ""
                          }`}
                        />
                      )}
                      <p className="opacity-50 group-hover:opacity-100 lg:opacity-0 absolute bottom-2 left-2 lg:bottom-[initial] z-40 lg:top-[25%] lg:group-focus:top-[50%] lg:group-hover:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 p-0 m-0 font-bold uppercase text-xs lg:text-4xl text-left lg:text-center lg:group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] flex flex-row items-center justify-start group-hover:text-shadow">
                        {album.title}
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </Fade>
        );
      })}
    </div>
  );
}
