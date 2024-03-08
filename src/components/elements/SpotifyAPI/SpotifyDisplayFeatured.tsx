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
}

interface SpotifyDataProps {
  spotifyAlbumsData: Album[];
}

const SpotifyDisplayFeatured: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <section className="">
      <div className="flex flex-row flex-wrap w-full mx-auto items-center justify-center max-w-8xl transition gap-2">
        {spotifyAlbumsData.map((album) => (
          <div
            key={album.external_urls.spotify}
            tabIndex={0}
            className="block w-1/4 md:w-2/12 lg:w-2/12 transition-all relative"
          >
            {!!album.images[0].url && (
              <div className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%]">
                <div className="profile-overlay absolute inset-0 overflow-hidden">
                  {album.external_urls.spotify && (
                    <a
                      href={album.external_urls.spotify}
                      tabIndex={0}
                      className="relative aspect-1 group mx-auto w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        sizes="100%"
                        src={album.images[0].url}
                        alt={album.name}
                        width={0}
                        height={0}
                        className="transition-all object-cover h-full w-full overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale relative z-10 duration-[400ms] group-hover:saturate-0 saturate-1"
                      />

                      <p className="opacity-0 absolute z-40 top-[25%] group-focus:top-[50%] group-hover:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-0 m-0 font-bold uppercase text-md md:text-xl text-center group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] delay-200 text-primary text-shadow">
                        {album.name}
                      </p>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpotifyDisplayFeatured;
