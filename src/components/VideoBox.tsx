import type { LayoutQuery } from "@/graphql/generated/graphql";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import VimeoPlayer from "@/components/VideoSections/VimeoPlayer";
import "@/styles/videobox.scss";
interface VideoBoxProps {
  videoTitle?: string;
  youtubeVideoId?: string;
  vimeoVideoId?: string;
  thumbnail?: string;
  thumbnailType?: string;
  videoDisplayLayout?: string;
}

// *thumbnailType
// expand
// image
// video
// youtube

// *videoDisplayLayout
// cardLink
// cardModal
// grid
// offset
// record
// slider
// team
// universal
// vertical
// basic
// mason
// blob
// wavy

export default function VideoBox({
  videoTitle,
  youtubeVideoId,
  vimeoVideoId,
  thumbnail,
  thumbnailType,
  videoDisplayLayout,
}: VideoBoxProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClosePopup = () => {
    setOpen(false);
    ReactGA.event({
      category: "Link",
      action: "Close Popup",
      label: "Close Popup",
    });
  };

  if (videoDisplayLayout === "offset")
    return (
      <section className="max-w-6xl w-full mx-auto my-8 px-4 overflow-hidden">
        {videoTitle && (
          <h3 className="text-2xl uppercase font-bold leading-7 text-text-color text-center mb-4 px-4">
            {videoTitle}
          </h3>
        )}
        {(youtubeVideoId || vimeoVideoId) && (
          <div className="realative">
            <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-0 w-full z-50">
              {youtubeVideoId && (
                <LiteYouTubeEmbed
                  id={youtubeVideoId}
                  title={videoTitle || ""}
                />
              )}
              {vimeoVideoId && <VimeoPlayer videoId={vimeoVideoId} />}
              <div className="absolute border border-secondary w-full h-full -left-4 -top-4 -z-10"></div>
              <div className="absolute border border-primary w-full h-full left-4 top-4 -z-10"></div>
            </div>
          </div>
        )}
      </section>
    );

  if (videoDisplayLayout === "grid")
    return (
      <section className="max-w-6xl w-full mx-auto my-8 px-4 overflow-hidden">
        {videoTitle && (
          <h3 className="text-2xl uppercase font-bold leading-7 text-text-color text-center mb-4 px-4">
            {videoTitle}
          </h3>
        )}
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
                className="fixed inset-0 bg-[#000000c7] opacity-80 backdrop-blur-xl"
                aria-hidden="true"
              />
            </TransitionChild>

            <div className="fixed inset-0 z-10 overflow-y-auto w-full">
              <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-y-full blur-xs"
                  enterTo="-translate-y-0 blur-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-y-0 blur-0"
                  leaveTo="translate-y-full blur-xs"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-5xl sm:p-6 w-full bg-invert flex-col flex">
                    {(youtubeVideoId || vimeoVideoId) && (
                      <>
                        <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-0 w-full">
                          {youtubeVideoId && (
                            <LiteYouTubeEmbed
                              id={youtubeVideoId}
                              title={videoTitle || ""}
                            />
                          )}
                          {vimeoVideoId && (
                            <VimeoPlayer videoId={vimeoVideoId} />
                          )}
                          <div className="absolute border border-secondary w-full h-full -left-4 -top-4 z-0"></div>
                          <div className="absolute border border-primary w-full h-full left-4 top-4 z-0"></div>
                        </div>
                      </>
                    )}
                    <button
                      type="button"
                      className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline transition-all outline-text-color hover:outline-primary mx-auto max-w-max uppercase text-xs"
                      onClick={handleClosePopup}
                    >
                      <span>Close menu</span>
                      <FontAwesomeIcon
                        icon={faXmark as IconProp}
                        className="fa-fw my-0 py-0 ml-2 h-4 w-4"
                      />
                    </button>
                  </Dialog.Panel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
        <button
          type="button"
          className={`rounded-md p-2 text-md font-semibold text-text-color hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 fixed left-8 bottom-8 z-[100] bg-primary`}
          onClick={() => {
            setOpen(true);
            ReactGA.event({
              category: "Link",
              action: "Open Popup",
              label: "Open Popup",
            });
          }}
        >
          <span className="max-w-max text-left">Open</span>
        </button>
      </section>
    );

  return (
    <section className="max-w-8xl w-full mx-auto my-8 px-4">
      {videoTitle && (
        <h3 className="text-lg font-bold leading-7 text-text-color text-center mb-4 px-4">
          {videoTitle}
        </h3>
      )}
      {(youtubeVideoId || vimeoVideoId) && (
        <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-0 w-full overflow-hidden z-50">
          {youtubeVideoId && (
            <LiteYouTubeEmbed id={youtubeVideoId} title={videoTitle || ""} />
          )}
          {vimeoVideoId && <VimeoPlayer videoId={vimeoVideoId} />}
        </div>
      )}
    </section>
  );
}
