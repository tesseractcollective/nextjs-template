import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import parse from "html-react-parser";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
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
  if (!siteLibrary || accordionData?.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-2">
        {accordionData.map((item) => (
          <Disclosure key={item.contentHeader?.html}>
            {({ open }) => (
              <div
                className={`overflow-hidden rounded-lg bg-bg backdrop-blur-lg outline transition-all ${
                  open ? "outline-primary" : "outline-none"
                }`}
              >
                {!!item.contentHeader?.html && (
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left transition-all duration-200 hover:bg-white/10">
                    <span className={`text-lg font-bold text-text-color`}>
                      {parse(item.contentHeader?.html)}
                    </span>
                    <ChevronUpIcon
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        open ? "rotate-180 transform" : ""
                      }`}
                    />
                  </Disclosure.Button>
                )}

                <Transition
                  show={open}
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform -translate-y-2 opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition-all duration-200 ease-in"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform -translate-y-2 opacity-0"
                >
                  <Disclosure.Panel static className="px-6 pb-6">
                    {!!item.contentImage?.url && (
                      <div className="relative my-4 overflow-hidden rounded-lg">
                        <Image
                          src={item.contentImage.url}
                          alt=""
                          className="w-full object-cover"
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                    )}

                    {item.contentDescription?.html && (
                      <div className="prose prose-invert max-w-none">
                        {parse(item.contentDescription?.html)}
                      </div>
                    )}

                    {!!item.videoBox && (
                      <div key={Math.random()}>
                        {item.videoBox?.youtubePlaylistId ? (
                          <VideoPlaylistBox
                            videoTitle={item.videoBox?.videoTitle || undefined}
                            youtubePlaylistId={item.videoBox.youtubePlaylistId}
                            youtubeApiKey={siteLibrary.youtubeApiKey}
                          />
                        ) : (
                          <VideoBox
                            videoTitle={item.videoBox?.videoTitle || undefined}
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
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
