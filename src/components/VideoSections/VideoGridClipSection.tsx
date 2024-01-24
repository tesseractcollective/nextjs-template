import Vimeo from "@u-wave/react-vimeo";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactGA from "react-ga4";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

interface VideoGridSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoGridClipSection({
  videoData,
}: VideoGridSectionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedVideo, setSelctedVideo] = useState<VideoBoxFieldsFragment>();
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
      <div className="flex flex-row flex-wrap w-full mx-0 transition">
        {videoData.map((videoItem, index) => {
          return (
            <button
              key={index * Math.random()}
              type="button"
              id="popup-trigger"
              className="block w-2/4 md:w-1/3 lg:w-2/4 transition-all relative group"
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
              {!!videoItem.thumbnail?.url && (
                <video
                  src={videoItem.thumbnail?.url}
                  className="transition-all object-cover h-full w-full overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale relative z-10 duration-[400ms] group-hover:saturate-0 saturate-1"
                  onMouseOver={(event) => event.currentTarget.play()}
                  onMouseOut={(event) => event.currentTarget.pause()}
                  muted
                />
              )}
              <PlayCircleIcon
                className="h-12 w-12 absolute bottom-5 left-5 z-40 text-text-color block opacity-100 lg:hidden group-hover:opacity-0 group-focus:opacity-0 transition-all duration-[400ms]"
                aria-hidden="true"
              />
              {!!videoItem?.videoTitle && (
                <p className="opacity-0 absolute z-40 top-[25%] group-focus:top-[50%] group-hover:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-0 m-0 font-bold uppercase text-4xl text-center group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms]">
                  {parse(videoItem.videoTitle)}
                </p>
              )}
            </button>
          );
        })}

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
                              <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo?.youtubeVideoId}?rel=0&modestbranding=1`}
                                width="560"
                                height="315"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="video"
                                className="absolute top-0 left-0 w-full h-full z-10"
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
      </div>
    </section>
  );
}
