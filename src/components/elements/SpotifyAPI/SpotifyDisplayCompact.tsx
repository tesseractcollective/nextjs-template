import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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

const SpotifyDisplayCompact: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <section className="py-16">
      <div className="flex flex-col flex-wrap w-full mx-auto items-center justify-center max-w-8xl gap-y-2 px-4">
        {spotifyAlbumsData.map((album) => (
          <a
            href={album.external_urls.spotify}
            key={album.external_urls.spotify}
            tabIndex={0}
            className="flex flex-row max-h-max group mx-auto w-full bg-text-color hover:bg-secondary p-4 rounded items-center justify-start gap-x-4 relative"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              sizes="100%"
              src={album.images[0].url}
              alt={album.name}
              width={0}
              height={0}
              className="transition-all object-cover overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale relative z-10 duration-[400ms] group-hover:saturate-0 saturate-1 w-24 h-24"
            />

            <p className="text-dark group-hover:text-text-color font-bold my-0 py-0">
              {album.name}
            </p>
            <div className="ml-auto group-hover:opacity-100 opacity-0 transition-opacity flex flex-row absolute right-10">
              <FontAwesomeIcon
                icon={faSpotify as IconProp}
                className="fa-fw my-0 py-0 h-4 w-4 text-[#52ce52]"
              />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare as IconProp}
                className="fa-fw my-0 py-0 h-4 w-4 text-text-color"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SpotifyDisplayCompact;
