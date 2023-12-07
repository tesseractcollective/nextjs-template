import { Disclosure, Transition } from "@headlessui/react";
import parse from "html-react-parser";
import { MinusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type {
  AccordionFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import VideoBox from "@/components/VideoBox";

interface AccordionProps {
  accordionData: AccordionFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Accordion({
  accordionData,
  siteLibrary,
}: AccordionProps) {
  if (!siteLibrary) return <></>;
  if (accordionData?.length === 0) return <></>;
  return (
    <div className="w-full px-4 py-8 h-full flex items-center mx-auto max-h-max">
      <div className="mx-auto w-full rounded-2xl max-w-[800px] p-2">
        {accordionData.map((item) => {
          return (
            <Disclosure key={item.contentHeader?.html}>
              {({ open }) => (
                <div className="border-b border-primary block rounded-md">
                  {!!item.contentHeader?.html && (
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-md text-left text-xs md:text-sm font-medium text-indigo-500 hover:text-text-color focus-visible:text-text-color hover:bg-indigo-800 focus:outline-none focus-visible:ring focus-visible:ring-indigo-900 focus-visible:ring-opacity-75 transition-all duration-400 bg-bg-secondary overflow-hidden relative px-4 cursor-pointer">
                      <div className="ml-3 !text-primary all-text-primary font-bold text-base md:text-xl py-4 w-[90%] accordion-heade">
                        {parse(item.contentHeader?.html)}
                      </div>
                      <div
                        className={`relative text-text-color h-6 w-6 rounded-[100%] transition-all ${
                          open
                            ? "bg-gradient-to-tr from-primary to-secondary bg-opacity-100"
                            : "bg-gradient-to-tr from-transparent to-transparent bg-opacity-0"
                        }`}
                      >
                        <MinusIcon
                          className={`absolute w-6 h-6 transition-all duration-400 ${
                            open ? "" : "rotate-180 transform"
                          }`}
                        />
                        <MinusIcon
                          className={`absolute w-6 h-6 transition-all duration-400 ${
                            open ? "" : "rotate-90 transform"
                          }`}
                        />
                      </div>
                    </Disclosure.Button>
                  )}
                  <Transition
                    show={open}
                    enter="transition-all duration-400 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition-all duration-400 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    {!!item.contentDescription?.html && (
                      <Disclosure.Panel
                        static
                        className="px-6 py-6 text-sm text-text-color opacity-80 block"
                      >
                        {!!item.contentImage?.url && (
                          <div className="relative">
                            <Image
                              src={item.contentImage.url}
                              alt=""
                              priority
                              className="mx-auto block object-contain"
                              width={0}
                              height={0}
                              sizes="100%"
                              style={{
                                width: "auto",
                                height: "auto",
                                margin: "0 auto",
                              }}
                            />
                          </div>
                        )}
                        {parse(item.contentDescription?.html)}
                        {!!item.videoBox && (
                          <div key={Math.random()}>
                            {item.videoBox?.youtubePlaylistId ? (
                              <VideoPlaylistBox
                                videoTitle={
                                  item.videoBox?.videoTitle || undefined
                                }
                                youtubePlaylistId={
                                  item.videoBox.youtubePlaylistId
                                }
                                youtubeApiKey={siteLibrary.youtubeApiKey}
                              />
                            ) : (
                              <VideoBox
                                videoTitle={
                                  item.videoBox?.videoTitle || undefined
                                }
                                vimeoVideoId={
                                  item.videoBox?.vimeoVideoId || undefined
                                }
                                youtubeVideoId={
                                  item.videoBox?.youtubeVideoId || undefined
                                }
                                thumbnail={
                                  item.videoBox?.thumbnail?.url || undefined
                                }
                                thumbnailType={
                                  item.videoBox?.thumbnailType || undefined
                                }
                                videoDisplayLayout={
                                  item.videoBox?.videoDisplayLayout || undefined
                                }
                              />
                            )}
                          </div>
                        )}
                      </Disclosure.Panel>
                    )}
                  </Transition>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
