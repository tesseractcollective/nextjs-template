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

export default function PageHeaderContent({
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
    <section
      className={`relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8' ${cssClass}`}
    >
      {(pageHeaderTitleProp || pageHeaderSubtitleProp) && (
        <div className="relative w-full mx-auto p-4 my-8">
          <div className="flex flex-col md:flex-col items-center justify-center md:justify-start w-full gap-y-2">
            {!!pageHeaderTitleProp && (
              <Fade direction="left" triggerOnce>
                <h1 className="text-3xl md:text-7xl xl:text-8xl my-0 py-0 text-center text-primary font-bold w-full mx-auto">
                  {pageHeaderTitleProp}
                </h1>
              </Fade>
            )}
            {!!pageHeaderSubtitleProp && (
              <Fade direction="right" triggerOnce>
                <h2 className="my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80 w-full">
                  {pageHeaderSubtitleProp}
                </h2>
              </Fade>
            )}
            {!!pageCallToAction && pageCallToAction?.length > 0 && (
              <div>
                <div className="text-center mx-auto md:mx-0">
                  {pageCallToAction.map(
                    (callToActionItem) =>
                      callToActionItem?.ctaLink && (
                        <div
                          key={callToActionItem.ctaLink}
                          className="text-center mx-auto"
                        >
                          <LinkItem
                            link={callToActionItem.ctaLink}
                            label={callToActionItem.ctaLabel}
                            cssClass={
                              callToActionItem?.ctaClass
                                ? callToActionItem.ctaClass
                                : `${
                                    callToActionItem.ctaPrimary
                                      ? "border-primary text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl !rounded-full border"
                                      : "text-text-color px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !rounded-full border-primary border"
                                  }`
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
      )}
      <Fade direction="up" triggerOnce>
        <div aria-hidden="true" className="relative">
          {!!pageHeaderImageProp && (
            <Image
              src={pageHeaderImageProp}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="h-auto pb-[56.25] w-full object-cover object-center mb-8"
            />
          )}
        </div>
      </Fade>
    </section>
  );
}
