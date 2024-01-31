import { useEffect, useState } from "react";

interface Album {
  id: string;
  name?: string;
  // Add more album properties here
}

const SpotifyAlbums = ({ artistId }: { artistId: string }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistAlbums = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${artistId}/albums`,
          {
            headers: {
              Authorization: `code`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAlbums(data.items);
          setLoading(false);
        } else {
          // Handle errors here
          console.error("Error fetching artist albums");
        }
      } catch (error) {
        // Handle network errors here
        console.error("Network error:", error);
      }
    };

    fetchArtistAlbums();
  }, [artistId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Albums by the Artist</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyAlbums;
