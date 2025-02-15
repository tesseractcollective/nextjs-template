import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import parse from "html-react-parser";
import type { CallToActionFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "../LinkItem";
import "./PageHeaderOverlap.scss";

interface PageHeaderProps {
  pageHeaderTitleProp?: string;
  pageHeaderSubtitleProp?: string;
  pageHeaderWrapperCssClassProp?: string;
  pageHeaderImageProp?: string;
  pageWidthStyle?: string | null | undefined;
  hideHeader?: boolean;
  pageCallToAction?: CallToActionFieldsFragment[];
}

export default function PageHeaderOverlap({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  pageWidthStyle,
  hideHeader,
  pageCallToAction,
}: PageHeaderProps) {
  if (hideHeader === true) return null;

  const cssClass = pageHeaderWrapperCssClassProp || "";

  return (
    <div className={`w-full p-2 page-header-overlap relative ${cssClass}`}>
      {/* 16:9 aspect ratio container */}
      <div className="my-16 page-header-overlap-large-horiz-interior">
        {/* Content container */}
        <div className="absolute inset-0 header-overlay">
          {!!pageHeaderImageProp && (
            <Image
              src={pageHeaderImageProp}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              quality={100}
              className="w-full h-full object-cover"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute bg-gradient-to-t from-[#000] z-20 h-32 opacity-70 left-0 right-0 bottom-0" />
        </div>
        {/* Content */}
        <div className="absolute -bottom-16 right-12 bg-bg p-8 max-w-max w-full mx-auto z-30 border border-secondary">
          <div className="z-30 flex flex-col justify-center items-start">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-color mb-2 md:mb-4 ">
              {pageHeaderTitleProp}
            </h3>
            <p className="text-lg text-text-color max-w-prose">
              {pageHeaderSubtitleProp}
            </p>
            {!!pageCallToAction && pageCallToAction?.length > 0 && (
              <div>
                <div className="text-center mx-auto md:text-left md:mx-0">
                  {pageCallToAction.map(
                    (callToActionItem) =>
                      callToActionItem?.ctaLink && (
                        <div
                          key={callToActionItem.ctaLink}
                          className="my-6 gap-4"
                        >
                          <LinkItem
                            link={callToActionItem.ctaLink}
                            label={callToActionItem.ctaLabel}
                            cssClass={
                              callToActionItem?.ctaClass
                                ? callToActionItem.ctaClass
                                : `${
                                    callToActionItem.ctaPrimary
                                      ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline font-bold w-full"
                                      : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline w-full"
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
        </div>
      </div>
    </div>
  );
}
