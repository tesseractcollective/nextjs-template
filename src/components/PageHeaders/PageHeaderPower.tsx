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

export default function PageHeaderPower({
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
    <Zoom triggerOnce>
      <section className="h-90vh relative bg-bg flex items-center justify-center">
        <div
          className={`absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${
            scroll ? "opacity-20" : "opacity-80"
          } bg-fixed`}
          style={{
            backgroundImage: `url(${pageHeaderImageProp})`,
          }}
        ></div>
        <div className="py-2 mx-auto relative w-full bg-text-color backdrop-blur-md">
          <Fade direction="up" triggerOnce>
            {!!pageHeaderTitleProp && (
              <h1 className="text-3xl md:text-6xl xl:text-7xl  mt-0 mb-1 py-0 text-center text-bg font-bold uppercase">
                {pageHeaderTitleProp}
              </h1>
            )}
          </Fade>
        </div>
        <div className="absolute bottom-20 w-full inset-x-0 z-50">
          <div className="mx-auto w-full max-w-8xl px-4 flex flex-col lg:flex-row justify-between items-center">
            {!!pageHeaderSubtitleProp && (
              <h2 className="text-shadow my-0 py-0 text-center md:text-left uppercase tracking-widest font-bold text-xl opacity-100 text-primary max-w-md mx-auto lg:ml-0 lg:mr-auto text-shadow-large">
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
        </div>
      </section>
    </Zoom>
  );
}
