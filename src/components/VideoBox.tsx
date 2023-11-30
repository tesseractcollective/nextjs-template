import Vimeo from "@u-wave/react-vimeo";

interface VideoBoxProps {
  videoTitle?: string;
  youtubeVideoId?: string;
  vimeoVideoId?: string;
  thumbnail?: string;
  thumbnailType?: string;
  videoDisplayLayout?: string;
}

export default function VideoBox({
  videoTitle,
  youtubeVideoId,
  vimeoVideoId,
  thumbnail,
  thumbnailType,
  videoDisplayLayout,
}: VideoBoxProps) {
  return (
    <section className="max-w-8xl w-full mx-auto my-8 px-4">
      {videoTitle && (
        <h3 className="text-lg font-bold leading-7 text-text-color text-center mb-4 px-4">
          {videoTitle}
        </h3>
      )}
      {(youtubeVideoId || vimeoVideoId) && (
        <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-0 w-full overflow-hidden">
          {youtubeVideoId && (
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
          )}
          {vimeoVideoId && <Vimeo video={vimeoVideoId} />}
        </div>
      )}
    </section>
  );
}
