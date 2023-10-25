import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import VideoBox from "@/components/VideoBox";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";

interface VideoSectionProps {
  videoData: VideoBoxFieldsFragment[];
  youtubeApiKey: string;
}

export default function VideoSection({
  videoData,
  youtubeApiKey,
}: VideoSectionProps) {
  const videoDataLength = videoData.length === 1;
  const swiperRef = useRef<SwiperType>();
  return (
    <section className="container mx-auto z-20 w-10/12">
      {videoData?.map((video) => (
        <div key={Math.random()}>
          {video?.youtubePlaylistId ? (
            <VideoPlaylistBox
              videoTitle={video?.videoTitle || undefined}
              youtubePlaylistId={video.youtubePlaylistId}
              youtubeApiKey={youtubeApiKey}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
      <>
        <>
          {videoDataLength ? (
            <>
              {videoData[0].youtubePlaylistId === undefined && (
                <VideoBox
                  videoTitle={videoData[0]?.videoTitle || undefined}
                  vimeoVideoId={videoData[0]?.vimeoVideoId || undefined}
                  youtubeVideoId={videoData[0]?.youtubeVideoId || undefined}
                />
              )}
            </>
          ) : (
            <div className="relative flex flex-row items-center justify-center w-full gap-x-2 z-40">
              <button
                type="button"
                className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft as IconProp}
                  className="fa-fw my-0 text-xl h-5 md:h-8 w-5 md:w-8"
                />
                <span className="sr-only">Move Video Rotation Back</span>
              </button>
              <Swiper
                className="!pb-10 max-w-5xl mx-auto w-full flex px-4"
                grabCursor
                loop
                modules={[Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                autoplay
                slidesPerView={1}
                spaceBetween={30}
              >
                {videoData.map((video) => (
                  <SwiperSlide key={video?.videoTitle}>
                    <VideoBox
                      videoTitle={video?.videoTitle || undefined}
                      vimeoVideoId={video?.vimeoVideoId || undefined}
                      youtubeVideoId={video?.youtubeVideoId || undefined}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                type="button"
                className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FontAwesomeIcon
                  icon={faArrowRight as IconProp}
                  className="fa-fw my-0 text-xl h-5 md:h-8 w-5 md:w-8"
                />
                <span className="sr-only">Move Video Rotation Next</span>
              </button>
            </div>
          )}
        </>
      </>
    </section>
  );
}
