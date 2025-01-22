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

export default function PageHeaderSquare({
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
    <div className="w-full p-2">
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
              className="w-full h-full object-cover rounded-4xl"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute bg-gradient-to-t from-[#000] rounded-4xl z-20 h-32 opacity-70 left-0 right-0 bottom-0" />

          {/* Content */}
          <div className="absolute z-30 inset-0 p-4 md:p-8 lg:p-12 flex flex-col justify-end items-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-overlay mb-2 md:mb-4 text-shadow text-center">
              {pageHeaderTitleProp}
            </h3>
            <p className="text-lg text-text-overlay max-w-prose text-shadow text-center">
              {pageHeaderSubtitleProp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
