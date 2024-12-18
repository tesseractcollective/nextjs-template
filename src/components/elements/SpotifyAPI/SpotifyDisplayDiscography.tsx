import Moment from "react-moment";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import Image from "next/image";

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
  artists: {
    id: string;
    name: string;
    type: "artist";
    uri: string;
    external_urls: {
      spotify: string;
    };
  }[];
}

interface SpotifyDataProps {
  spotifyAlbumsData: Album[];
}

const SpotifyDisplayDiscography: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <section className="bg-[#000]">
      {spotifyAlbumsData.map((album) => (
        <section
          className="h-100vh relative overflow-hidden flex items-center justify-center border-y border-primary"
          key={album.external_urls.spotify}
        >
          <section className="px-4 mx-auto max-w-6xl relative z-10 w-full flex flex-row items-center justify-between">
            <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row  gap-y-4 gap-x-10 mx-auto w-full">
              <div className="relative flex flex-col">
                <Fade direction="left" triggerOnce>
                  <time
                    dateTime={album.release_date}
                    className="uppercase text-[10px] tracking-wider bg-[black] rounded-lg max-w-max opacity-70 py-1 px-2 backdrop-blur-md mb-4 font-semibold mx-auto text-text-color text-center flex"
                  >
                    {new Date(album.release_date).toLocaleDateString("en-US", {
                      timeZone: "UTC",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <p className="text-center text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 max-w-lg">
                    {album.name}
                  </p>
                  <p className="text-center text-2xl mb-4 max-w-lg">
                    {album.artists[0]?.name}
                  </p>

                  {!!album.external_urls.spotify && (
                    <a
                      href={album.external_urls.spotify}
                      onClick={() =>
                        ReactGA.event({
                          category: "Link",
                          action: `Visit ${album.name}`,
                          label: album.name || "",
                        })
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="bg-secondary border-dark border py-2 px-4 mx-auto max-w-max block no-underline tracking-wide text-text-color uppercase hover:bg-primary focus:bg-primary transition-all font-bold text-2xl"
                    >
                      Stream
                    </a>
                  )}
                </Fade>
              </div>
              <Fade direction="right" triggerOnce>
                <a
                  href={album.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: album.name || "",
                      label: album.name || "",
                    })
                  }
                  className="flex items-center justify-center relative mx-auto no-underline floating max-w-max cursor-pointer"
                >
                  <Image
                    src={album.images[0].url}
                    alt={(album.name && album.name) || ""}
                    className="mx-auto mb-0 w-full block featured-shadow border-round min-w-[280px] lg:min-h-[320px] aspect-1 object-cover max-w-xl"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </a>
              </Fade>
            </div>
          </section>
          <Image
            src={album.images[0].url}
            alt={(album.name && album.name) || ""}
            className="mx-auto m-0 p-0 w-full aspect-1 object-cover absolute h-full inset-0 z-0 opacity-[15%] blur-md"
            width={0}
            height={0}
            sizes="100%"
          />
        </section>
      ))}
    </section>
  );
};

export default SpotifyDisplayDiscography;
