"use client";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

interface VideoBoxProps {
  videoTitle?: string;
  youtubePlaylistId: string;
  youtubeApiKey: string;
}

export default function VideoPlaylistBox({
  videoTitle,
  youtubePlaylistId,
  youtubeApiKey,
}: VideoBoxProps) {
  return (
    <section className="my-8 playlist-box px-4">
      <div className="mx-auto">
        {videoTitle && (
          <h3 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mb-4">
            {videoTitle}
          </h3>
        )}
        <YouTubePlaylist
          apiKey={youtubeApiKey}
          playlistId={youtubePlaylistId}
          uniqueName={youtubePlaylistId}
        />
      </div>
    </section>
  );
}
