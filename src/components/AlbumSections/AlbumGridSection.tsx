import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumGridSection({ albums }: FeatureAlbumProps) {
  if (!albums) return <></>;

  return (
    <div className="flex flex-row flex-wrap w-full mx-0 transition">
      {albums.map((album) => (
        <div
          key={album.albumSlug}
          tabIndex={0}
          className="block w-2/4 md:w-1/3 lg:w-2/4 transition-all relative"
        >
          {!!album.albumCover?.url && (
            <div className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%]">
              <div className="profile-overlay absolute inset-0 overflow-hidden">
                {album.albumSlug && (
                  <Link
                    href={`/music/${album.albumSlug}`}
                    tabIndex={0}
                    className="relative aspect-1 group mx-auto w-full"
                  >
                    {album.albumCover?.url && (
                      <Image
                        sizes="100%"
                        src={album.albumCover?.url}
                        alt={album.title || ""}
                        width={0}
                        height={0}
                        className="transition-all object-cover h-full w-full overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale relative z-10 duration-[400ms] group-hover:saturate-0 saturate-1"
                      />
                    )}
                    <p className="opacity-0 absolute z-40 top-[25%] group-focus:top-[50%] group-hover:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-0 m-0 font-bold uppercase text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-center group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] delay-200 text-text-color text-shadow rotate-0 group-hover:rotate-6 group-focus:rotate-6">
                      {album.title}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
