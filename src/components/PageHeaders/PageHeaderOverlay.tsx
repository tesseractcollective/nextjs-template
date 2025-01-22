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

export default function PageHeader({
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
    <div className="relative overflow-hidden">
      <div className="flex flex-col relative h-full w-full">
        <Fade
          direction="up"
          triggerOnce
          className="absolute z-30 bottom-[-5px] h-full inset-0"
        >
          {!!pageHeaderImageProp && (
            <Image
              src={pageHeaderImageProp}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="h-full w-full object-cover md:object-contain object-center"
            />
          )}
        </Fade>
        <div className="flex flex-row">
          <section className="relative flex z-0 bg-secondary all-text-white h-80vh w-[50vw]">
            <div className="flex flex-col items-center md:items-start justify-start md:justify-start md:w-full px-4 absolute mb-0 z-20 mx-auto md:mr-16 xl:ml-[17rem] text-center md:text-left bottom-0">
              {!!pageHeaderTitleProp && (
                <Fade
                  direction="left"
                  triggerOnce
                  className="text-center mx-auto md:text-left md:mx-0"
                >
                  <h1 className="text-3xl md:text-7xl xl:text-14xl my-0 py-0 text-center sm:text-left text-white font-bold w-full mx-auto uppercase">
                    {pageHeaderTitleProp}
                  </h1>
                </Fade>
              )}
            </div>
          </section>
          <section className="h-80vh w-[50vw] bg-text-color flex"></section>
        </div>
        <div className="flex flex-row">
          <section className="h-[20vh] w-[50vw] bg-text-color flex">
            {!!pageHeaderSubtitleProp && (
              <Fade
                direction="left"
                triggerOnce
                className="text-center mx-auto md:text-left md:mx-0"
              >
                <h2 className="my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80 md:text-left mx-auto md:ml-4 md:mr-0 w-full text-text-overlay">
                  {pageHeaderSubtitleProp}
                </h2>
              </Fade>
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
          </section>
          <section className="relative flex z-0 bg-secondary h-[20vh] w-[50vw]"></section>
        </div>
      </div>
    </div>
  );
}
