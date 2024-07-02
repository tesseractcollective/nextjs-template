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

  return (
    <div>
      {albums
        .filter((album) => album.featureHomePage === true)
        .map((albumItem) => (
          <section className="px-4 mx-auto max-w-8xl" key={albumItem.albumSlug}>
            {!!albumItem?.albumBuyLink && albumItem?.title && (
              <div className="flex items-center justify-center flex-col lg:flex-row  gap-y-4 gap-x-4 max-w-max mx-auto">
                <Fade
                  direction="up"
                  triggerOnce
                  className="flex items-center justify-center flex-col lg:flex-row  gap-y-4 gap-x-4 max-w-max mx-auto"
                >
                  <a
                    href={albumItem.albumBuyLink}
                    onClick={() =>
                      ReactGA.event({
                        category: "Link",
                        action: albumItem.title || "",
                        label: albumItem.title || "",
                      })
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center relative mx-auto no-underline"
                  >
                    {!!albumItem.albumCover?.url && (
                      <Image
                        src={albumItem.albumCover.url}
                        alt={(albumItem.title && albumItem.title) || ""}
                        className="mx-auto mb-0 w-full block box-shadow border-round min-w-[280px] lg:min-h-[320px] aspect-1 object-cover max-w-2xl"
                        width={0}
                        height={0}
                        sizes="100%"
                      />
                    )}
                  </a>
                  <div className="relative flex flex-col">
                    {!!albumItem.title && (
                      <p className="text-center lg:text-left text-3xl lg:text-4xl xl:text-6xl font-bold mb-4">
                        {albumItem.title}
                      </p>
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
                        className="bg-white border-dark border py-2 px-4 mx-auto lg:ml-0 lg:mr-auto max-w-max block no-underline text-md tracking-wide text-text-color uppercase hover:bg-primary focus:bg-primary transition-all"
                      >
                        Stream
                      </a>
                    )}
                  </div>
                </Fade>
              </div>
            )}
          </section>
        ))}
    </div>
  );
}
