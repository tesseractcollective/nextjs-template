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
    <section className="h-100vh relative overflow-hidden flex items-center justify-center">
      <section
        className="px-4 mx-auto max-w-8xl relative z-10"
        key={album.external_urls.spotify}
      >
        <div className="flex items-center justify-center flex-col lg:flex-row  gap-y-4 gap-x-10 max-w-max mx-auto">
          <div className="relative flex flex-col mx-auto items-center">
            <Fade
              direction="left"
              triggerOnce
              className="w-full mx-auto text-center flex items-center justify-center"
            >
              <p className="text-center text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 max-w-max mx-0">
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
                  className="bg-white border-dark border py-2 px-4 mx-auto max-w-max block no-underline tracking-wide text-text-color uppercase hover:bg-primary focus:bg-primary transition-all font-bold text-2xl w-full"
                >
                  Stream
                </a>
              )}
            </Fade>
          </div>
          <Fade
            direction="right"
            triggerOnce
            className="mx-auto w-full text-center"
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
              className="flex items-center justify-center relative mx-auto no-underline floating max-w-max cursor-pointer w-full"
            >
              <Image
                src={album.images[0].url}
                alt={(album.name && album.name) || ""}
                className="mx-auto mb-0 w-full block featured-shadow border-round min-w-[280px] lg:min-h-[320px] aspect-1 object-cover max-w-2xl"
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
        className="mx-auto m-0 p-0 w-full aspect-1 object-cover absolute h-full inset-0 z-0 opacity-30 blur-md"
        width={0}
        height={0}
        sizes="100%"
      />
    </section>
  );
};

export default SpotifyDisplayFeatured;
