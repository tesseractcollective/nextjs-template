import { useState, useEffect } from "react";
import axios from "axios";
import SpotifyDisplayAll from "./SpotifyDisplayAll";
import SpotifyDisplayCD from "./SpotifyDisplayCD";
import SpotifyDisplayCompact from "./SpotifyDisplayCompact";
import SpotifyDisplayFeatured from "./SpotifyDisplayFeatured";
import SpotifyDisplayGrid from "./SpotifyDisplayGrid";
import SpotifyDisplayMyspace from "./SpotifyDisplayMyspace";
import SpotifyDisplayPostcard from "./SpotifyDisplayPostcard";
import SpotifyDisplayRecord from "./SpotifyDisplayRecord";
import SpotifyDisplaySlider from "./SpotifyDisplaySlider";
import SpotifyDisplaySkew from "./SpotifyDisplaySkew";
import SpotifyDisplayStacked from "./SpotifyDisplayStacked";
import SpotifyDisplayVinyl from "./SpotifyDisplayVinyl";
import SpotifyDisplayDiscography from "./SpotifyDisplayDiscography";
import SpotifyDisplayBiography from "./SpotifyDisplayBiography";
import SpotifyDisplayMinimal from "./SpotifyDisplayMinimal";

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
  artistName: string;
  spotifyClientId: string;
  spotifyClientSecret: string;
  spotifyAlbumDisplay: string;
  artistNames?: string[];
}

const SpotifyArtistAlbums: React.FC<SpotifyArtistInfoProps> = ({
  artistName,
  spotifyClientId,
  spotifyClientSecret,
  spotifyAlbumDisplay,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [artistInfo, setArtistInfo] = useState<ArtistInfo | null>(null);
  const [albums, setAlbums] = useState<Album[] | null>(null);

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
        try {
          const artistResponse = await axios.get(
            `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setArtistInfo(artistResponse.data.artists?.items[0]);

          const albumsResponse = await axios.get(
            `https://api.spotify.com/v1/artists/${artistResponse.data.artists?.items[0].id}/albums?limit=50`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setAlbums(albumsResponse.data.items);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [accessToken, artistName]);

  if (!albums) return null;
  if (!artistInfo) return null;
  const sortedAlbums = [...albums]
    .sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateB.getTime() - dateA.getTime();
    })
    .filter((album) => album.album_group !== "appears_on");

  if (spotifyAlbumDisplay === "cd")
    return <SpotifyDisplayCD spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "discography")
    return <SpotifyDisplayDiscography spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "biography")
    return <SpotifyDisplayBiography spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "compact")
    return <SpotifyDisplayCompact spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "featured")
    return <SpotifyDisplayFeatured spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "minimal")
    return <SpotifyDisplayMinimal spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "grid")
    return <SpotifyDisplayGrid spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "myspace")
    return (
      <SpotifyDisplayMyspace
        spotifyAlbumsData={sortedAlbums}
        spotifyArtistInfo={artistInfo}
      />
    );
  if (spotifyAlbumDisplay === "postcard")
    return <SpotifyDisplayPostcard spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "record")
    return <SpotifyDisplayRecord spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "slider")
    return <SpotifyDisplaySlider spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "skew")
    return <SpotifyDisplaySkew spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "stacked")
    return <SpotifyDisplayStacked spotifyAlbumsData={sortedAlbums} />;
  if (spotifyAlbumDisplay === "vinyl")
    return <SpotifyDisplayVinyl spotifyAlbumsData={sortedAlbums} />;

  return <SpotifyDisplayAll spotifyAlbumsData={sortedAlbums} />;
};

export default SpotifyArtistAlbums;
