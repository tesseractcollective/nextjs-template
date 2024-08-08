import Vimeo from "@u-wave/react-vimeo";
import parse from "html-react-parser";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";

interface VideoStandardSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoYoutubeSection({
  videoData,
}: VideoStandardSectionProps) {
  return (
    <section className="relative w-full mx-auto py-8 overflow-hidden max-w-8xl px-4">
      {videoData.map((video, index) => (
        <div
          key={`${video?.videoTitle}-${index}`}
          className="w-full gap-y-4 flex flex-col items-center justify-center"
        >
          {!!video?.videoTitle && (
            <h3 className="text-text-color text-center font-bold text-3xl">
              {parse(video.videoTitle)}
            </h3>
          )}
          <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-full w-full">
            {video?.youtubeVideoId && (
              <iframe
                src={`https://www.youtube.com/embed/${video?.youtubeVideoId}?rel=0&modestbranding=1&vq=hd1080`}
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="video"
                className="absolute top-0 left-0 w-full h-full z-10  overflow-hidden rounded-2xl"
              />
            )}
            {video?.vimeoVideoId && <Vimeo video={video.vimeoVideoId} />}
          </div>
        </div>
      ))}
    </section>
  );
}
