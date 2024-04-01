import Image from "next/image";
import "./SpotifyDisplayMyspace.scss";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ArtistInfo from "@/components/ArtistInfo";

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

interface ArtistInfo {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface SpotifyDataProps {
  spotifyAlbumsData: Album[];
  spotifyArtistInfo: ArtistInfo;
}

const SpotifyDisplayMyspace: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
  spotifyArtistInfo,
}) => {
  return (
    <section className="max-w-4xl px-4 my-16 mx-auto w-full">
      <div className="music_player_container py-2 flex flex-col rounded-md">
        <a
          href={spotifyArtistInfo.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center justify-center gap-x-4 music_player_play_button_wrapper"
        >
          <div className="music_player_play">
            <div className="music_player_play_button">
              <FontAwesomeIcon
                icon={faSpotify as IconProp}
                className="fa-fw h-5 w-5 flex aspect-1 z-40 text-text-color transition-all group-hover:text-[#52ce52]"
              />
            </div>
          </div>
          <h2 className="font-bold transition-color text-primary group-hover:text-secondary uppercase">
            {spotifyArtistInfo.name}
          </h2>
        </a>
        <div className="music_player_body rounded-md">
          <div className="music_player_body_text flex flex-col rounded-md">
            {spotifyAlbumsData.map((album) => (
              <a
                key={album.external_urls.spotify}
                href={album.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col w-full p-4 group"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: `Visit ${album.name}`,
                    label: album.name || "",
                  })
                }
              >
                <div className="music_player_body_text_track flex flex-row items-center justify-start gap-x-4 h-full relative">
                  <Image
                    sizes="100%"
                    src={album.images[0].url}
                    alt={album.name}
                    width={0}
                    height={0}
                    className="transition-all object-cover overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale relative z-10 duration-[400ms] group-hover:saturate-0 saturate-1 h-32 w-32 aspect-1 block"
                  />
                  <div className="max-w-[200px]">
                    <h3 className="font-bold text-lg md:text-2xl uppercase max-w-[200px]">
                      {album.name}
                    </h3>
                    <time
                      dateTime={album.release_date}
                      className="uppercase text-[10px] tracking-wider bg-[black] rounded-lg max-w-max opacity-70 py-1 px-2 backdrop-blur-md mb-4 font-semibold"
                    >
                      {new Date(album.release_date).toLocaleDateString(
                        "en-US",
                        {
                          timeZone: "UTC",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </time>
                  </div>
                  <div className="ml-auto group-hover:opacity-100 opacity-0 transition-opacity flex flex-row absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faSpotify as IconProp}
                      className="fa-fw my-0 py-0 h-4 w-4 text-[#52ce52]"
                    />
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare as IconProp}
                      className="fa-fw my-0 py-0 h-4 w-4"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifyDisplayMyspace;
