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

export default function PageHeaderDiagonal({
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
        </Fade>
      </section>
    </Zoom>
  );
}
