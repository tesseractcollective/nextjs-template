import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
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

const SpotifyDisplayStacked: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <div>
      <section className="px-2 mx-0">
        <section className="container py-5 feature-album-slider-wrapper mx-auto relative z-20">
          <div className="my-16">
            <Swiper
              className="!pb-10 px-4 md:max-w-3xl no-shadow-swiper"
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {spotifyAlbumsData.map((albumItem) => (
                <SwiperSlide key={albumItem.external_urls.spotify} className="">
                  {!!albumItem.external_urls.spotify &&
                    albumItem.images[0]?.url && (
                      <a
                        href={albumItem.external_urls.spotify}
                        onClick={() =>
                          ReactGA.event({
                            category: "Link",
                            action: `Visit ${albumItem.name}`,
                            label: albumItem.name || "",
                          })
                        }
                        className="max-w-max block no-underline album-item mx-auto relative p-1 group transition-all"
                      >
                        <Image
                          src={albumItem.images[0].url}
                          alt={(albumItem.name && albumItem.name) || ""}
                          className="mx-auto mb-2 w-full block box-shadow-small border-round grayscale-0 hover:grayscale group-hover:grayscale group-focus:grayscale transition-all"
                          height={400}
                          width={400}
                          style={{
                            maxHeight: "400px",
                            maxWidth: "400px",
                            objectFit: "cover",
                            aspectRatio: 1,
                          }}
                        />
                      </a>
                    )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SpotifyDisplayStacked;
