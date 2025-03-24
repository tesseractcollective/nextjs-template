import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import SpotifyDisplayAll from "./SpotifyDisplayAll";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

interface Playlist {
  name: string;
  id: string;
  description: string;
  external_urls: {
    spotify: string;
  };
  images: {
    height: number;
    url: string;
    width: number;
  }[];
}

interface SpotifyUserPlaylistsProps {
  spotifyUserId: string;
  spotifyClientId: string;
  spotifyClientSecret: string;
}

const SpotifyUserPlaylists: React.FC<SpotifyUserPlaylistsProps> = ({
  spotifyUserId,
  spotifyClientId,
  spotifyClientSecret,
}) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

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
      const fetchUserPlaylists = async () => {
        try {
          const playlistsResponse = await axios.get(
            `https://api.spotify.com/v1/users/${spotifyUserId}/playlists?limit=50`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setPlaylists(playlistsResponse.data.items);
        } catch (error) {
          console.error("Error fetching playlists:", error);
        }
      };

      fetchUserPlaylists();
    }
  }, [accessToken, spotifyUserId]);

  if (!playlists) return null;
  const totalPlaylists = playlists.length;
  return (
    <div className="flex flex-row flex-wrap w-full mx-0 transition">
      {playlists.map((playlist, index) => {
        const isHovered =
          hoveredItemIndex !== null && hoveredItemIndex !== index;
        return (
          <Fade
            triggerOnce
            key={index}
            className={`block relative transition-all w-1/4 md:w-1/5 lg:w-1/${
              totalPlaylists >= 3 ? "3" : "4"
            }`}
          >
            <div className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%] relative">
              <div className="profile-overlay absolute inset-0 overflow-hidden">
                <a
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredItemIndex(index)}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                  className={`relative aspect-1 group mx-auto w-full transition-all`}
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: `Visit ${playlist.name}`,
                      label: playlist.name || "",
                    })
                  }
                >
                  <FontAwesomeIcon
                    icon={faSpotify as IconProp}
                    className="fa-fw h-5 w-5 flex aspect-1 absolute z-40 text-text-color transition-all group-hover:text-[#52ce52] top-2 left-2"
                  />
                  {playlist.images[0].url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    (<img
                      src={playlist.images[0].url}
                      alt={playlist.name || ""}
                      className={`transition-all object-cover h-full w-full overflow-hidden relative z-10 duration-[400ms] ${
                        isHovered ? "grayscale" : ""
                      }`}
                    />)
                  )}
                  <p className="opacity-50 group-hover:opacity-100 lg:opacity-0 absolute bottom-2 left-2 right-0 z-40 p-0 m-0 font-bold uppercase text-xs lg:text-4xl text-left lg:group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] flex flex-row items-center justify-start group-hover:text-shadow w-full">
                    {playlist.name}
                  </p>
                </a>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
};

export default SpotifyUserPlaylists;
