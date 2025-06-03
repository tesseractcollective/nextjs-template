import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import parse from "html-react-parser";
import type { CallToActionFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "../LinkItem";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageHeaderProps {
  pageHeaderTitleProp?: string;
  pageHeaderSubtitleProp?: string;
  pageHeaderWrapperCssClassProp?: string;
  pageHeaderImageProp?: string;
  pageWidthStyle?: string | null | undefined;
  hideHeader?: boolean;
  pageCallToAction?: CallToActionFieldsFragment[];
}

export default function PageHeaderFull({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  pageWidthStyle,
  hideHeader,
  pageCallToAction,
}: PageHeaderProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end 35%", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 32]);
  if (hideHeader === true) return null;
  const cssClass = pageHeaderWrapperCssClassProp || "";

  return (
    <>
      <motion.div
        className={`w-full overflow-hidden ${cssClass}`}
        ref={targetRef}
        style={{ scale, borderRadius }}
      >
        {/* 16:9 aspect ratio container */}
        <div className="relative w-full h-0 pb-[56.25%]">
          {/* Content container */}
          <div className="absolute inset-0 header-overlay topper">
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
            {/* <div className="absolute bg-gradient-to-t from-[#000] z-20 h-32 opacity-70 left-0 right-0 bottom-0" /> */}

            {/* Content */}
            <div className="absolute hidden lg:flex z-30 left-0 bottom-1/4 px-8 py-4 flex-col justify-center items-start w-full max-w-max max-h-max bg-glass glass-darker !rounded-bl-none !rounded-tl-none gap-y-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-shadow text-center text-primary">
                {pageHeaderTitleProp}
              </h3>
              <p className="text-xl text-text-overlay text-shadow text-center max-w-md">
                {pageHeaderSubtitleProp}
              </p>
              {!!pageCallToAction && pageCallToAction?.length > 0 && (
                <div className="text-center my-2 flex flex-row gap-y-2 gap-x-4 items-center justify-start">
                  {pageCallToAction.map(
                    (callToActionItem) =>
                      callToActionItem?.ctaLink && (
                        <div key={callToActionItem.ctaLink} className="gap-2">
                          <LinkItem
                            link={callToActionItem.ctaLink}
                            label={callToActionItem.ctaLabel}
                            cssClass={
                              callToActionItem?.ctaClass
                                ? callToActionItem.ctaClass
                                : `${
                                    callToActionItem.ctaPrimary
                                      ? "drop-shadow-button-primary rounded-lg"
                                      : "drop-shadow-button-bg rounded-lg"
                                  } max-w-max`
                            }
                          />
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative flex lg:hidden mx-auto my-8 px-8 py-4 flex-col justify-center items-center w-full max-w-max max-h-max bg-glass glass-primary gap-y-1">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-shadow text-center text-primary">
          {pageHeaderTitleProp}
        </h3>
        <p className="text-xl text-text-overlay text-shadow text-center max-w-md">
          {pageHeaderSubtitleProp}
        </p>
        {!!pageCallToAction && pageCallToAction?.length > 0 && (
          <div className="text-center my-2 flex flex-row gap-y-2 gap-x-4 items-center justify-start">
            {pageCallToAction.map(
              (callToActionItem) =>
                callToActionItem?.ctaLink && (
                  <div key={callToActionItem.ctaLink} className="gap-2">
                    <LinkItem
                      link={callToActionItem.ctaLink}
                      label={callToActionItem.ctaLabel}
                      cssClass={
                        callToActionItem?.ctaClass
                          ? callToActionItem.ctaClass
                          : `${
                              callToActionItem.ctaPrimary
                                ? "drop-shadow-button-primary rounded-lg"
                                : "drop-shadow-button-bg rounded-lg"
                            } max-w-max`
                      }
                    />
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}
