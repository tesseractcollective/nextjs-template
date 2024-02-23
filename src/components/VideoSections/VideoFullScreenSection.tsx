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

interface VideoOffsetSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoOffsetSection({
  videoData,
}: VideoOffsetSectionProps) {
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
    <section className="relative w-full mx-auto my-0 overflow-hidden">
      <div className="relative flex flex-row items-center justify-center w-full z-40 mx-auto">
        {!videoDataLength && (
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all duration-[400ms] opacity-80 hover:opacity-100 text-text-color absolute z-50 left-0"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon
              icon={faChevronLeft as IconProp}
              className="fa-fw my-0 text-xl h-6 md:h-12 w-6 md:w-12"
            />
            <span className="sr-only">Move Video Rotation Back</span>
          </button>
        )}
        <Swiper
          className="w-full flex px-4"
          grabCursor
          loop
          modules={[Navigation, Pagination, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={`${video?.videoTitle}-${index}`}>
              <button
                type="button"
                id="popup-trigger"
                className="relative h-100vh group w-full"
                onClick={() => {
                  setOpen(true);
                  setSelctedVideo(video);
                  ReactGA.event({
                    category: "Link",
                    action: "Open Video Popup",
                    label: "Open Video Popup",
                  });
                }}
              >
                {(video?.youtubeVideoId || video.thumbnail?.url) && (
                  <Image
                    sizes="100%"
                    src={
                      video.thumbnail?.url ||
                      `https://img.youtube.com/vi/${video.youtubeVideoId}/maxresdefault.jpg`
                    }
                    alt={video.videoTitle || ""}
                    width={0}
                    height={0}
                    className="transition-all object-cover h-full w-full overflow-hidden opacity-70 grayscale-0 group-hover:grayscale group-focus:grayscale absolute inset-0 z-10 duration-[400ms] group-hover:saturate-0 saturate-1"
                  />
                )}
                {!!video?.videoTitle && (
                  <p className="absolute z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-0 m-0 font-bold uppercase text-4xl text-center transition-all duration-[400ms] delay-200 text-text-color group-hover:text-primary">
                    <PlayCircleIcon
                      className="h-12 w-12 relative z-40 p-0 m-0 font-bold uppercase text-4xl mx-auto"
                      aria-hidden="true"
                    />
                    <span>{parse(video.videoTitle)}</span>
                  </p>
                )}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        {!videoDataLength && (
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all duration-[400ms] opacity-80 hover:opacity-100 text-text-color absolute z-50 right-0"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon
              icon={faChevronRight as IconProp}
              className="fa-fw my-0 text-xl h-6 md:h-12 w-6 md:w-12"
            />
            <span className="sr-only">Move Video Rotation Next</span>
          </button>
        )}
      </div>
      {selectedVideo && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-[#000000c7] opacity-90 backdrop-blur-xl"
                aria-hidden="true"
              />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto w-full">
              <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-y-full blur-xs"
                  enterTo="-translate-y-0 blur-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-y-0 blur-0"
                  leaveTo="translate-y-full blur-xs"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all max-w-5xl sm:p-0 w-full flex-col flex">
                    {(selectedVideo?.youtubeVideoId ||
                      selectedVideo?.vimeoVideoId) && (
                      <>
                        <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-0 w-full">
                          {selectedVideo?.youtubeVideoId && (
                            <LiteYouTubeEmbed
                              params="rel=0&modestbranding=1"
                              id={selectedVideo?.youtubeVideoId}
                              title={selectedVideo.videoTitle || ""}
                            />
                          )}
                          {selectedVideo?.vimeoVideoId && (
                            <Vimeo video={selectedVideo?.vimeoVideoId} />
                          )}
                        </div>
                        <button
                          type="button"
                          className="m-1 inline-flex items-center justify-center rounded-md p-2 text-text-color outline transition-all outline-text-color hover:outline-primary ml-auto max-w-max uppercase text-xs"
                          onClick={handleClosePopup}
                        >
                          <span>Close Video</span>
                          <FontAwesomeIcon
                            icon={faXmark as IconProp}
                            className="fa-fw my-0 py-0 ml-2 h-4 w-4"
                          />
                        </button>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </section>
  );
}
