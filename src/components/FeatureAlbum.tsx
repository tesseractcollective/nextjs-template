import React from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Fade, Slide } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import type {
  AlbumFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";

export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  displayFeaturedMusic?: boolean;
  displayAllMusic?: boolean;
}

export default function FeatureAlbum({
  albums,
  siteLibrary,
  displayFeaturedMusic,
  displayAllMusic,
}: FeatureAlbumProps) {
  if (!siteLibrary) return <></>;
  const { isSpanish } = siteLibrary;
  if (!albums) return <></>;

  return (
    <>
      {!!displayFeaturedMusic && (
        <>
          {albums
            .filter((album) => album.featureHomePage === true)
            .map((albumItem) => (
              <section
                className="gradient-bkg px-2 mx-0"
                key={albumItem.albumSlug}
              >
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
      {!!displayAllMusic && (
        <section className="px-2 mx-0">
          <section className="container py-5 feature-album-slider-wrapper mx-auto">
            <h2 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center">
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
                      className="max-w-max block no-underline album-map-grid-item mx-auto relative"
                    >
                      {!!albumItem.albumCover?.url && (
                        <Image
                          src={albumItem.albumCover.url}
                          alt={(albumItem.title && albumItem.title) || ""}
                          className="mx-auto mb-2 w-full block box-shadow border-round"
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
                    </Link>
                  )}
                  <h3 className="text-xs mt-0 mb-4 text-center uppercase">
                    {albumItem.title}
                  </h3>
                </Fade>
              ))}
            </div>
          </section>
        </section>
      )}
    </>
  );
}
