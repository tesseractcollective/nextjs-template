import React from "react";
import Link from "next/link";
import ReactGA from "react-ga4";
import type { AlbumFieldsFragment } from "@/graphql/generated/graphql";
import "@/styles/albums.scss";
export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
}

export default function AlbumRecordSection({ albums }: FeatureAlbumProps) {
  return (
    <section className="px-2 mx-0">
      <section className="container py-5 overflow-hidden mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mx-auto max-w-8xl gap-y-0 md:gap-y-8">
          {albums.map((albumItem) => (
            <Link
              href={`/music/${albumItem.albumSlug}`}
              onClick={() =>
                ReactGA.event({
                  category: "Link",
                  action: `Visit ${albumItem.title}`,
                  label: albumItem.title || "",
                })
              }
              className="vinyl-wrap transition-all group"
              key={albumItem.albumSlug}
            >
              <div className="vinyl-album">
                <div
                  className="vinyl-cover"
                  style={{
                    backgroundImage: `url(${albumItem.albumCover?.url})`,
                  }}
                >
                  <div className="vinyl-print"></div>
                </div>
                <div
                  className="vinyl-thumb group-hover:spin-infinite"
                  style={{
                    backgroundImage: `url(${albumItem.albumCover?.url})`,
                  }}
                ></div>
                <div className="vinyl">
                  <div className="print"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
