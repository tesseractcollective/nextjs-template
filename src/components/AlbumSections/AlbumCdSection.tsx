import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumCdSection({ albums }: FeatureAlbumProps) {
  return (
    <section className="px-2 mx-0">
      <section className="container py-5 feature-album-slider-wrapper mx-auto">
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
  );
}
