import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import "./SpotifyDisplayCD.scss";
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

const SpotifyDisplayCD: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <section className="px-2 mx-0">
      <section className="container py-5 feature-album-slider-wrapper mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center my-16 w-full max-w-8xl gap-8 md:mx-auto px-4">
          {spotifyAlbumsData.map((album) => (
            <Fade
              key={album.external_urls.spotify}
              direction="up"
              triggerOnce
              cascade
              damping={0.1}
              className="-ml-8 md:mx-auto !animate-col-width w-32 md:w-64 transform group"
            >
              <a
                href={album.external_urls.spotify}
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: `Visit ${album.name}`,
                    label: album.name || "",
                  })
                }
                className="cd-case relative transition-all group-hover:rotate-6"
              >
                <FontAwesomeIcon
                  icon={faSpotify as IconProp}
                  className="fa-fw h-4 w-4 flex aspect-1 absolute z-40 text-text-color transition-all group-hover:text-[#52ce52] bottom-[0.5rem] left-[0.20rem]"
                />
                <div
                  className="album-art"
                  style={{
                    backgroundImage: `url(${album.images[0].url})`,
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
                  {album.name}
                </p>
              </a>
            </Fade>
          ))}
        </div>
      </section>
    </section>
  );
};

export default SpotifyDisplayCD;
