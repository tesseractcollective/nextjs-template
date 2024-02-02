import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
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
export default function SpotifyDisplayGrid({
  spotifyAlbumsData,
}: SpotifyDataProps) {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  if (!spotifyAlbumsData) return <></>;
  const totalAlbums = spotifyAlbumsData.length;
  return (
    <div className="flex flex-row flex-wrap w-full mx-0 transition">
      {spotifyAlbumsData.map((album, index) => {
        const isHovered =
          hoveredItemIndex !== null && hoveredItemIndex !== index;

        return (
          <Fade
            triggerOnce
            key={index}
            className={`block relative transition-all w-2/4 md:w-1/3 lg:w-1/${
              totalAlbums >= 3 ? "3" : "4"
            }`}
          >
            <div className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%] relative">
              <div className="profile-overlay absolute inset-0 overflow-hidden">
                <a
                  href={album.external_urls.spotify}
                  target="_blank"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredItemIndex(index)}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                  className={`relative aspect-1 group mx-auto w-full transition-all`}
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: `Visit ${album.name}`,
                      label: album.name || "",
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={faSpotify as IconProp}
                    className="fa-fw h-5 w-5 flex aspect-1 absolute z-40 text-text-color transition-all group-hover:text-[#52ce52] top-2 left-2"
                  />
                  {album.images[0].url && (
                    <Image
                      sizes="100%"
                      src={album.images[0].url}
                      alt={album.name || ""}
                      width={0}
                      height={0}
                      className={`transition-all object-cover h-full w-full overflow-hidden relative z-10 duration-[400ms] ${
                        isHovered ? "grayscale" : ""
                      }`}
                    />
                  )}
                  <p className="opacity-50 group-hover:opacity-100 lg:opacity-0 absolute bottom-2 left-2 right-0 z-40 p-0 m-0 font-bold uppercase text-xs lg:text-4xl text-left lg:group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] flex flex-row items-center justify-start group-hover:text-shadow w-full">
                    {album.name}
                  </p>
                </a>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}
