import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
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

export default function PageHeaderAngled({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  pageWidthStyle,
  hideHeader,
  pageCallToAction,
}: PageHeaderProps) {
  const cssClass = pageHeaderWrapperCssClassProp || "";

  return (
    <div className={`bg-bg relative ${cssClass}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl bg-bg">
          <div className="relative z-10 pt-14 w-full lg:max-w-4xl xl:max-w-2xl">
            <svg
              className="block absolute bottom-0 h-72 w-full transform fill-bg lg:hidden"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="100 15, 100 100,0 100,0 39" />
            </svg>
            <svg
              className="hidden lg:absolute inset-y-0 lg:-left-[50%] xl:left-0 h-full w-full translate-x-1/2 transform fill-bg lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-8 py-56 pr-0">
              <Fade triggerOnce direction="down">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  {!!pageHeaderTitleProp && (
                    <h1 className="text-4xl font-bold tracking-tight text-text-color sm:text-6xl">
                      {pageHeaderTitleProp}
                    </h1>
                  )}
                  {!!pageHeaderSubtitleProp && (
                    <p className="mt-6 text-lg leading-8 text-text-color">
                      {parse(pageHeaderSubtitleProp)}
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
                                            ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                            : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
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
              </Fade>
            </div>
          </div>
        </div>
        {!!pageHeaderImageProp && (
          <Fade
            triggerOnce
            direction="right"
            className="absolute inset-y-0 right-0 w-full lg:w-2/3 xl:w-1/2 z-0"
          >
            <Image
              className="aspect-[3/2] object-cover aspect-auto h-full w-full"
              src={pageHeaderImageProp}
              alt=""
              sizes="100%"
              width={0}
              height={0}
            />
          </Fade>
        )}
      </div>
    </div>
  );
}
