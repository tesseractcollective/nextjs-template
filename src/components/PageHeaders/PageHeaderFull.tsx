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

export default function PageHeaderFull({
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
    <section className={`relative "w-full pb-4 h-[30rem] ${cssClass}`}>
      <div aria-hidden="true" className="relative overflow-hidden">
        {!!pageHeaderImageProp && (
          <Fade direction="up" triggerOnce>
            <Image
              src={pageHeaderImageProp}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="h-[30rem] w-full object-cover object-center"
            />
          </Fade>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark section-fade-invert" />
      </div>
      <div className="absolute bottom-1/3 left-0 right-0 w-full mx-auto max-w-8xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <Fade direction="up" triggerOnce>
          {!!pageHeaderTitleProp && (
            <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
              {pageHeaderTitleProp}
            </h1>
          )}
          {!!pageHeaderSubtitleProp && (
            <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
              {pageHeaderSubtitleProp}
            </h2>
          )}
        </Fade>
      </div>
    </section>
  );
}
