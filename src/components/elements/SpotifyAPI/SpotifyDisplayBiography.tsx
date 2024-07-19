import Moment from "react-moment";

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

const SpotifyDisplayBiography: React.FC<SpotifyDataProps> = ({
  spotifyAlbumsData,
}) => {
  return (
    <section className="mb-8">
      <ul className="">
        {spotifyAlbumsData.map((album) => (
          <li key={album.external_urls.spotify} className="mb-2">
            <p className="capatalize">
              <span>{album.name}</span>
              <span className="">
                <Moment format=" (YYYY)">{album.release_date}</Moment>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SpotifyDisplayBiography;
