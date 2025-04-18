import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import parse from "html-react-parser";
import type { CallToActionFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "../LinkItem";

interface PageHeaderProps {
  pageHeaderTitleProp?: string;
  pageHeaderSubtitleProp?: string;
  pageHeaderWrapperCssClassProp?: string;
  pageHeaderImageProp?: string;
  pageWidthStyle?: string | null | undefined;
  hideHeader?: boolean;
  pageCallToAction?: CallToActionFieldsFragment[];
}

export default function PageHeaderMoon({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  pageWidthStyle,
  hideHeader,
  pageCallToAction,
}: PageHeaderProps) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (hideHeader === true) return null;

  const cssClass = pageHeaderWrapperCssClassProp || "";

  return (
    <Fade triggerOnce className="relative">
      <div
        className={`relative block transition-all duration-500 ${
          scroll ? "" : "bg-primary"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-[65vh] relative z-40">
          <div className="py-2 mx-auto relative w-full text-color items-center flex justify-center flex-col">
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-6xl xl:text-7xl  mt-0 mb-1 py-0 text-center font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="my-0 py-0 text-center uppercase tracking-widest font-bold text-xl opacity-100 text-overlay max-w-lg mx-auto">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
              {!!pageCallToAction && pageCallToAction?.length > 0 && (
                <div className="flex items-center flex-row justify-center gap-x-4 text-center mx-auto">
                  {pageCallToAction.map(
                    (callToActionItem) =>
                      callToActionItem?.ctaLink && (
                        <div
                          key={callToActionItem.ctaLink}
                          className="text-center mx-auto"
                        >
                          <LinkItem
                            link={callToActionItem.ctaLink}
                            label={callToActionItem.ctaLabel}
                            cssClass={
                              callToActionItem?.ctaClass
                                ? callToActionItem.ctaClass
                                : `${
                                    callToActionItem.ctaPrimary
                                      ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl bg-secondary !rounded-md"
                                      : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !border !rounded-md"
                                  } mr-2 max-w-max`
                            }
                          />
                        </div>
                      )
                  )}
                </div>
              )}
            </Fade>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-tertiary opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <Zoom triggerOnce>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  from-secondary to-tertiary opacity-50  sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </Zoom>
        {pageHeaderImageProp && (
          <div
            className={`relative w-full mx-auto block h-full transition-all overflow-hidden rounded-full aspect-1 duration-700 ${
              scroll
                ? "max-w-[1880px] max-h-[1880px] rotate-180"
                : "max-w-[1440px] max-h-[1440px] rotate-0"
            }`}
          >
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100%"
              src={pageHeaderImageProp}
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
        )}
      </div>
    </Fade>
  );
}
