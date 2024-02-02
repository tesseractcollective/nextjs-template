import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumAllSection({ albums }: FeatureAlbumProps) {
  return (
    <section className="px-2 mx-0">
      <section className="container py-5 feature-album-slider-wrapper mx-auto">
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
  );
}
