import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";

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

const SpotifyDisplayFeatured: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  const album = spotifyAlbumsData[0];
  return (
    <section className="py-16">
      <section
        className="px-4 mx-auto max-w-8xl"
        key={album.external_urls.spotify}
      >
        <div className="flex items-center justify-center flex-col lg:flex-row  gap-y-4 gap-x-4 max-w-max mx-auto">
          <Fade
            direction="up"
            triggerOnce
            className="flex items-center justify-center flex-col lg:flex-row  gap-y-4 gap-x-4 max-w-max mx-auto"
          >
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
              className="flex items-center justify-center relative mx-auto no-underline"
            >
              <Image
                src={album.images[0].url}
                alt={(album.name && album.name) || ""}
                className="mx-auto mb-0 w-full block box-shadow border-round min-w-[280px] lg:min-h-[320px] aspect-1 object-cover max-w-xl"
                width={0}
                height={0}
                sizes="100%"
              />
            </a>
            <div className="relative flex flex-col">
              <p className="text-center lg:text-left text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 max-w-max">
                {album.name}
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
                  className="bg-white border-dark border py-2 px-4 mx-auto lg:ml-0 lg:mr-auto max-w-max block no-underline text-md tracking-wide text-text-color uppercase hover:bg-primary focus:bg-primary transition-all"
                >
                  Stream
                </a>
              )}
            </div>
          </Fade>
        </div>
      </section>
    </section>
  );
};

export default SpotifyDisplayFeatured;
