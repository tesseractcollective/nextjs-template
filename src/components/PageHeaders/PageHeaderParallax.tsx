import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
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

export default function PageHeaderParallax({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  hideHeader,
  pageCallToAction,
}: PageHeaderProps) {
  if (hideHeader === true) return null;

  return (
    <section
      className={`relative bg-black w-full parallax-header-wrapper ${pageHeaderWrapperCssClassProp}`}
    >
      {/* Aspect ratio container */}
      <div className="relative w-full">
        {/* This div maintains 16:9 aspect ratio */}
        <div className="pb-[70%] md:pb-[56.25%] relative w-full">
          {/* Background image container */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed opacity-60"
            style={{
              backgroundImage: `url(${pageHeaderImageProp})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          />
          {/* Content container with proper centering */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 md:px-4">
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl text-shadow-large py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}

              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow py-0 text-center uppercase tracking-widest font-bold text-base sm:text-lg text-text-overlay max-w-2xl mx-auto w-full">
                  {pageHeaderSubtitleProp}
                </h2>
              )}

              {!!pageCallToAction && pageCallToAction?.length > 0 && (
                <div className="w-full max-w-xl mx-auto mt-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {pageCallToAction.map(
                      (callToActionItem) =>
                        callToActionItem?.ctaLink && (
                          <div
                            key={callToActionItem.ctaLink}
                            className="w-full sm:w-auto"
                          >
                            <LinkItem
                              link={callToActionItem.ctaLink}
                              label={callToActionItem.ctaLabel}
                              cssClass={
                                callToActionItem?.ctaClass
                                  ? callToActionItem.ctaClass
                                  : `${
                                      callToActionItem.ctaPrimary
                                        ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button block no-underline my-2 font-bold text-xl sm:text-2xl !rounded-full bg-primary hover:bg-secondary transition-all w-full sm:w-auto"
                                        : "text-text-color border-0 px-4 md:px-6 py-2 theme-button block no-underline my-2 text-xl sm:text-2xl !rounded-full w-full sm:w-auto"
                                    } mx-auto duration-[400ms]`
                              }
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
