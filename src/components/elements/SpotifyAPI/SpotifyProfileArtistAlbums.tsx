import { useState, useEffect } from "react";
import axios from "axios";
import SpotifyDisplayDiscography from "./SpotifyDisplayDiscography";

interface Album {
  name: string;
  id: string;
  album_group: string;
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

interface SpotifyArtistInfoProps {
  spotifyClientId: string;
  spotifyClientSecret: string;
  artistNames: string[];
}

const SpotifyProfileArtistAlbums: React.FC<SpotifyArtistInfoProps> = ({
  spotifyClientId,
  spotifyClientSecret,
  artistNames,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: `${spotifyClientId}`,
            client_secret: `${spotifyClientSecret}`,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchAccessToken();
  }, [spotifyClientId, spotifyClientSecret]);

  useEffect(() => {
    if (accessToken) {
      const fetchData = async () => {
        const allAlbums: Album[] = [];
        try {
          for (const artistName of artistNames) {
            const artistResponse = await axios.get(
              `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );

            const artist = artistResponse.data.artists?.items[0];
            if (artist) {
              const albumsResponse = await axios.get(
                `https://api.spotify.com/v1/artists/${artist.id}/albums?limit=50`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );

              const artistAlbums = albumsResponse.data.items;
              if (artistAlbums.length > 0) {
                const sortedAlbums = [...artistAlbums]
                  .sort((a, b) => {
                    const dateA = new Date(a.release_date);
                    const dateB = new Date(b.release_date);
                    return dateB.getTime() - dateA.getTime();
                  })
                  .filter((album) => album.album_group !== "appears_on");

                allAlbums.push(sortedAlbums[0]); // Add the most recent album
              }
            }
          }
          setAlbums(allAlbums);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [accessToken, artistNames]);

  if (!albums || albums.length === 0) return null;

  return <SpotifyDisplayDiscography spotifyAlbumsData={albums} />;
};

export default SpotifyProfileArtistAlbums;
