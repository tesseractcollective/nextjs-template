import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";

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

interface Artist {
  name: string;
  latestAlbum: Album | null;
}

interface SpotifyDataProps {
  artistNames: string[];
}

const SpotifyProfileFeatured: React.FC<SpotifyDataProps> = ({
  artistNames,
}) => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchLatestAlbum = async (
      artistName: string
    ): Promise<Album | null> => {
      try {
        const token = await fetchSpotifyToken();
        const searchResponse = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            artistName
          )}&type=artist`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const searchData = await searchResponse.json();
        const artistId = searchData.artists.items[0]?.id;

        if (!artistId) {
          return null;
        }

        const albumsResponse = await fetch(
          `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=1&offset=0`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const albumsData = await albumsResponse.json();
        return albumsData.items[0] || null;
      } catch (error) {
        console.error("Error fetching data from Spotify API", error);
        return null;
      }
    };

    const fetchSpotifyToken = async (): Promise<string> => {
      const response = await fetch("/api/getSpotifyToken");
      const data = await response.json();
      return data.token;
    };

    const fetchAllArtists = async () => {
      const artistPromises = artistNames.map(async (name) => {
        const latestAlbum = await fetchLatestAlbum(name);
        return { name, latestAlbum };
      });
      const fetchedArtists = await Promise.all(artistPromises);
      setArtists(fetchedArtists);
    };

    fetchAllArtists();
  }, [artistNames]);

  return (
    <section className="h-100vh relative overflow-hidden flex items-center justify-center flex-col">
      {artists.map((artist, index) => {
        const album = artist.latestAlbum;
        if (!album) {
          return <div key={index}>No latest album found for {artist.name}</div>;
        }
        return (
          <section
            className="px-4 mx-auto max-w-8xl relative z-10"
            key={album.external_urls.spotify}
          >
            <div className="flex items-center justify-center flex-col lg:flex-row gap-y-4 gap-x-10 max-w-max mx-auto">
              <div className="relative flex flex-col">
                <Fade direction="left" triggerOnce>
                  <p className="text-center text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 max-w-max">
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
                      className="bg-white border-dark border py-2 px-4 mx-auto max-w-max block no-underline tracking-wide text-text-color uppercase hover:bg-primary focus:bg-primary transition-all font-bold text-2xl"
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
                    alt={album.name || ""}
                    className="mx-auto mb-0 w-full block featured-shadow border-round min-w-[280px] lg:min-h-[320px] aspect-1 object-cover max-w-2xl"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </a>
              </Fade>
            </div>
            <Image
              src={album.images[0].url}
              alt={album.name || ""}
              className="mx-auto m-0 p-0 w-full aspect-1 object-cover absolute h-full inset-0 z-0 opacity-30 blur-md"
              width={0}
              height={0}
              sizes="100%"
            />
          </section>
        );
      })}
    </section>
  );
};

export default SpotifyProfileFeatured;
