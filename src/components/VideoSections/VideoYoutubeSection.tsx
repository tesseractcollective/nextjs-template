import Vimeo from "@u-wave/react-vimeo";
import Image from "next/image";
import { Fragment, useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Dialog, Transition } from "@headlessui/react";
import ReactGA from "react-ga4";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface VideoStandardSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoYoutubeSection({
  videoData,
}: VideoStandardSectionProps) {
  console.log(videoData);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedVideo, setSelctedVideo] = useState<VideoBoxFieldsFragment>();
  const videoDataLength = videoData.length === 1;
  const swiperRef = useRef<SwiperType>();
  const handleClosePopup = () => {
    setOpen(false);
    ReactGA.event({
      category: "Link",
      action: "Close Video Popup",
      label: "Close Video Popup",
    });
    stopVideos();
  };
  const stopVideos = () => {
    var videos = document.querySelectorAll("iframe, video");
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === "video") {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  };

  return (
    <section className="relative w-full mx-auto my-8 overflow-hidden max-w-8xl px-4">
      {videoData.map((video, index) => (
        <div
          key={`${video?.videoTitle}-${index}`}
          className="w-full h-full gap-y-4 flex flex-col items-center justify-center"
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
                className="absolute top-0 left-0 w-full h-full z-10  overflow-hidden rounded-xl"
              />
            )}
            {selectedVideo?.vimeoVideoId && (
              <Vimeo video={selectedVideo?.vimeoVideoId} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
