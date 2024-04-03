import AlbumCdSection from "@/components/AlbumSections/AlbumCdSection";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

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

const SpotifyDisplayPostcard: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto max-w-8xl">
        {spotifyAlbumsData.map((album) => (
          <a
            key={album.external_urls.spotify}
            href={album.external_urls.spotify}
            tabIndex={0}
            target="_blank"
            rel="noreferrer"
            className="mx-auto flex items-center justify-center flex-col w-full transition-all rotate-0 hover:rotate-6 focus-visible:rotate-6 group max-w-max hover:outline-bg-secondary outline outline-none h-full bg-text-color"
          >
            <div className="animate-col-width mx-auto md:mx-0 w-full bg-text-color">
              {!!album.images[0].url && (
                <Image
                  sizes="100%"
                  src={album.images[0].url}
                  alt={album.name}
                  width={0}
                  height={0}
                  className="w-[240px] h-[240px] object-cover mx-auto border-8 border-text-color group-hover:border-[16px] group-focus:border-[16px] transition-all"
                />
              )}

              <div className="flex flex-col items-center justify-center text-center py-2 px-4 relative z-10 overflow-hidden">
                <Fade triggerOnce direction="left">
                  {!!album.name && (
                    <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-bg mt-0 text-center group-hover:tracking-widest group-focus:tracking-widest transition-all max-w-[200px]">
                      {album.name}
                    </h3>
                  )}
                </Fade>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SpotifyDisplayPostcard;
