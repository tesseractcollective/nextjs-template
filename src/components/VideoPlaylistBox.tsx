"use client";
// import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

interface VideoBoxProps {
  videoTitle?: string;
  youtubePlaylistId: string;
  youtubeApiKey: string;
}

export default function VideoBox({
  videoTitle,
  youtubePlaylistId,
  youtubeApiKey,
}: VideoBoxProps) {
  console.log("youtubePlaylistId", youtubePlaylistId);
  console.log("youtubeApiKey", youtubeApiKey);

  return (
    <section className="container mx-auto dark-section my-8 playlist-box">
      <div className="mx-auto">
        {!!videoTitle && (
          <h3 className="text-lg font-semibold leading-7 text-white text-center mb-4">
            {videoTitle}
          </h3>
        )}
        {/* <h2>{`youtubeApiKey: ${youtubeApiKey}`}</h2>
        <h2>{`youtubePlaylistId: ${youtubePlaylistId}`}</h2> */}
        {/* <YouTubePlaylist
          apiKey={youtubeApiKey}
          playlistId='PLPZMiBBzqLb0MrkNOy93YQmoQ1Nb2mkZO'
          uniqueName='sr-only'
        /> */}
        {/* <YouTubePlaylist
          apiKey={youtubeApiKey}
          playlistId={youtubePlaylistId}
          uniqueName={youtubePlaylistId}
        /> */}
      </div>
    </section>
  );
}
