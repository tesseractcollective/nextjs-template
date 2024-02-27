import React from "react";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

interface Album {
  name: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  release_date: string;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyDataProps {
  spotifyAlbumsData: Album[];
}

export default function SpotifyDisplayRecord({
  spotifyAlbumsData,
}: SpotifyDataProps) {
  return (
    <section className="px-2 mx-0">
      <section className="container py-5 overflow-hidden mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mx-auto max-w-8xl gap-y-0 md:gap-y-8">
          {spotifyAlbumsData.map((albumItem) => (
            <a
              href={albumItem.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                ReactGA.event({
                  category: "Link",
                  action: `Visit ${albumItem.name}`,
                  label: albumItem.name || "",
                })
              }
              className="vinyl-wrap transition-all group"
              key={albumItem.external_urls.spotify}
            >
              <FontAwesomeIcon
                icon={faSpotify as IconProp}
                className="fa-fw h-5 w-5 flex aspect-1 absolute z-40 text-text-color transition-all group-hover:text-[#52ce52] top-2 left-2"
              />
              <div className="vinyl-album">
                <div
                  className="vinyl-cover"
                  style={{
                    backgroundImage: `url(${albumItem.images[0].url})`,
                  }}
                >
                  <div className="vinyl-print"></div>
                </div>
                <div
                  className="vinyl-thumb group-hover:spin-infinite"
                  style={{
                    backgroundImage: `url(${albumItem.images[0].url})`,
                  }}
                ></div>
                <div className="vinyl">
                  <div className="print"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
