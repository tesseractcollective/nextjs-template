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

export default function PageHeaderModern({
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
    <div className="bg">
      <div className="relative isolate pt-14">
        <Zoom triggerOnce>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </Zoom>
        <div className="py-24 sm:py-32 lg:pb-40 relative z-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Zoom triggerOnce>
              <div className="mx-auto max-w-2xl text-center">
                {!!pageHeaderTitleProp && (
                  <h1 className="text-4xl font-bold tracking-tight text-text-color sm:text-6xl">
                    {pageHeaderTitleProp}
                  </h1>
                )}
                {!!pageHeaderSubtitleProp && (
                  <p className="mt-6 text-lg leading-8 text-text-color">
                    {pageHeaderSubtitleProp}
                  </p>
                )}
                {!!pageCallToAction && pageCallToAction?.length > 0 && (
                  <div>
                    <div className="text-center mx-auto md:text-left md:mx-0">
                      {pageCallToAction.map(
                        (callToActionItem) =>
                          callToActionItem?.ctaLink && (
                            <div
                              key={callToActionItem.ctaLink}
                              className="text-center mx-auto md:text-left md:mx-0"
                            >
                              <LinkItem
                                link={callToActionItem.ctaLink}
                                label={callToActionItem.ctaLabel}
                                cssClass={
                                  callToActionItem?.ctaClass
                                    ? callToActionItem.ctaClass
                                    : `${
                                        callToActionItem.ctaPrimary
                                          ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl !rounded-full"
                                          : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !rounded-full"
                                      } mr-2 max-w-max`
                                }
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Zoom>

            {!!pageHeaderImageProp && (
              <Fade triggerOnce direction="up">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg p-2 ring-1 ring-inset ring-primary lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      src={pageHeaderImageProp}
                      alt={pageHeaderTitleProp || ""}
                      width={2432}
                      height={1442}
                      className="rounded-md shadow-2xl ring-1 ring-secondary"
                    />
                  </div>
                </div>
              </Fade>
            )}
          </div>
        </div>
        <Zoom triggerOnce>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}
