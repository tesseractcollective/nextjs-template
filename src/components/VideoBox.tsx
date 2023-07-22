import Vimeo from "@u-wave/react-vimeo";
// import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

interface VideoBoxProps {
  videoTitle?: string;
  youtubeVideoId?: string;
  vimeoVideoId?: string;
  youtubePlaylistId?: string;
  youtubeApiKey?: string | null;
}

export default function VideoBox({
  videoTitle,
  youtubeVideoId,
  vimeoVideoId,
  youtubePlaylistId,
  youtubeApiKey,
}: VideoBoxProps) {
  return (
    <section className="container mx-auto dark-section my-8">
      <div className="mx-auto">
        {!!videoTitle && (
          <h3 className="text-lg font-semibold leading-7 text-white text-center mb-4">
            {videoTitle}
          </h3>
        )}
        {!!youtubeVideoId && (
          <div className="px-4 mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-0 w-full overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
              width="560"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        )}
        {!!vimeoVideoId && (
          <div className="w-full">
            <Vimeo video={vimeoVideoId} />
          </div>
        )}
        {/* {!!youtubePlaylistId && youtubeApiKey && (
          <YouTubePlaylist
            apiKey={youtubeApiKey}
            playlistId={youtubePlaylistId}
            uniqueName={`${youtubePlaylistId}`}
          />
        )} */}
      </div>
    </section>
  );
}
