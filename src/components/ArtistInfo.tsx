import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

interface ArtistInfoProps {
  clientId: string;
  artistId: string;
}

const ArtistInfo: React.FC<ArtistInfoProps> = ({ clientId, artistId }) => {
  const [artist, setArtist] = useState<any>();

  useEffect(() => {
    // Initialize the Spotify API client with your client ID
    spotifyApi.setAccessToken(clientId);

    // Fetch artist information
    spotifyApi
      .getArtist(artistId)
      .then((data) => {
        setArtist(data);
      })
      .catch((error) => {
        console.error("Error fetching artist information:", error);
      });
  }, [clientId, artistId]);

  return (
    <div>
      {artist && (
        <div>
          <h2>{artist.name}</h2>
          <p>Followers: {artist.followers.total}</p>
          {/* Add more artist information as needed */}
        </div>
      )}
    </div>
  );
};

export default ArtistInfo;
