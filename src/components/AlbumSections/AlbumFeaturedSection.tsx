import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumFeaturedSection({ albums }: FeatureAlbumProps) {
  if (!albums) return <></>;
  const album = albums[0];
  return (
    <section className="h-100vh relative overflow-hidden flex items-center justify-center">
      <section
        className="px-4 mx-auto max-w-8xl relative z-10"
        key={album.albumBuyLink}
      >
        <div className="flex items-center justify-center flex-col lg:flex-row  gap-y-4 gap-x-10 max-w-max mx-auto">
          <div className="relative flex flex-col">
            <Fade direction="left" triggerOnce>
              <p className="text-center text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 max-w-max">
                {album.title}
              </p>

              {!!album.albumBuyLink && (
                <a
                  href={album.albumBuyLink}
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: `Visit ${album.title}`,
                      label: album.title || "",
                    })
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border-dark border py-2 px-4 mx-auto max-w-max block no-underline tracking-wide text-text-color uppercase hover:bg-primary focus:bg-primary transition-all font-bold text-2xl"
                >
                  Stream
                </a>
              )}
            </Fade>
          </div>
          <Fade direction="right" triggerOnce>
            {album?.albumBuyLink && (
              <a
                href={album.albumBuyLink}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: album.title || "",
                    label: album.title || "",
                  })
                }
                className="flex items-center justify-center relative mx-auto no-underline floating max-w-max cursor-pointer"
              >
                {album.albumCover?.url && (
                  <Image
                    src={album.albumCover.url}
                    alt={(album.title && album.title) || ""}
                    className="mx-auto mb-0 w-full block featured-shadow border-round min-w-[280px] lg:min-h-[320px] aspect-1 object-cover max-w-2xl"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
              </a>
            )}
          </Fade>
        </div>
      </section>
      {album?.albumCover?.url && (
        <Image
          src={album.albumCover.url}
          alt={(album.title && album.title) || ""}
          className="mx-auto m-0 p-0 w-full aspect-1 object-cover absolute h-full inset-0 z-0 opacity-30 blur-md"
          width={0}
          height={0}
          sizes="100%"
        />
      )}
    </section>
  );
}
