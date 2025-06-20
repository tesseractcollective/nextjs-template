import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import ReactGA from "react-ga4";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import useViewport from "@/app/hooks/useViewport";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Fade } from "react-awesome-reveal";
import VimeoPlayer from "./VimeoPlayer";

interface VideoGridSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoGridClipSection({
  videoData,
}: VideoGridSectionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedVideo, setSelctedVideo] = useState<VideoBoxFieldsFragment>();
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const { isTablet } = useViewport();

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
      <Fade direction="up" triggerOnce>
        <div className="flex flex-row flex-wrap w-full mx-0 transition">
          {videoData.map((videoItem, index) => {
            const isHovered =
              hoveredItemIndex !== null && hoveredItemIndex !== index;
            return (
              <button
                key={index}
                type="button"
                className={`w-2/4 md:w-1/3 lg:w-2/4 block relative group overflow-hidden transition-all ${
                  isHovered ? "grayscale" : ""
                }`}
                onMouseEnter={() => setHoveredItemIndex(index)}
                onMouseLeave={() => setHoveredItemIndex(null)}
                onClick={() => {
                  setOpen(true);
                  setSelctedVideo(videoItem);
                  ReactGA.event({
                    category: "Link",
                    action: "Open Video Popup",
                    label: "Open Video Popup",
                  });
                }}
              >
                {isTablet ? (
                  <>
                    {!!videoItem.mobileThumbnail?.url && (
                      <Image
                        sizes="100%"
                        src={videoItem.mobileThumbnail?.url}
                        alt={videoItem.videoTitle || ""}
                        width={0}
                        height={0}
                        className="transition-all object-cover h-full w-full overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale"
                      />
                    )}
                  </>
                ) : (
                  <>
                    {!!videoItem.thumbnail?.url && (
                      <video
                        className="object-cover h-full w-full overflow-hidden relative z-10"
                        onMouseOver={(event) => event.currentTarget.play()}
                        onMouseOut={(event) => event.currentTarget.pause()}
                        muted
                        poster={videoItem?.mobileThumbnail?.url}
                        title={videoItem.videoTitle || ""}
                        playsInline
                        loop
                        autoPlay={false}
                        preload="metadta"
                      >
                        <source src={`${videoItem.thumbnail?.url}`} />
                      </video>
                    )}
                  </>
                )}
                {!!videoItem?.videoTitle && (
                  <p className="opacity-50 group-hover:opacity-100 md:opacity-0 absolute bottom-1 md:bottom-[initial] z-40 md:top-[25%] md:group-focus:top-[50%] md:group-hover:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 p-0 m-0 font-bold uppercase text-xs md:text-4xl text-left md:text-center md:group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] flex flex-row items-center justify-start group-hover:text-shadow">
                    <PlayCircleIcon
                      className="h-6 w-6 mr-1 z-40 text-text-color block md:hidden transition-all duration-[400ms]"
                      aria-hidden="true"
                    />
                    <span>{parse(videoItem.videoTitle)}</span>
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </Fade>
      {selectedVideo && (
        <Transition show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
            <TransitionChild
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
            </TransitionChild>

            <div className="fixed inset-0 z-10 overflow-y-auto w-full">
              <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild
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
                            <VimeoPlayer videoId={selectedVideo.vimeoVideoId} />
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
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </section>
  );
}
