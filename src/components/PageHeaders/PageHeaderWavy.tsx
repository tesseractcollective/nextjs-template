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

export default function PageHeaderWavy({
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

  // - angled √
  // - Content √
  // - diagonal √
  // - fixed
  // - Full
  // - gradient √
  // - modern √
  // - moon √
  // - motion
  // - netflix √
  // - overlap √
  // - page
  // - parallax √
  // - power √
  // - sharp √
  // - split √
  // - square
  // - techno
  // - video √
  // - wavy

  return (
    <Zoom triggerOnce>
      <section className="pt-44 pb-44 relative bg-[#000]">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
          style={{
            backgroundImage: `url(${pageHeaderImageProp})`,
          }}
        ></div>
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
      </section>
    </Zoom>
  );
}
