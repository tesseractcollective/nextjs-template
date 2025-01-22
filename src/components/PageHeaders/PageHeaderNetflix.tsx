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

export default function PageHeaderNetflix({
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
    <Fade triggerOnce direction="down">
      <section className="h-100vh relative bg-bg">
        <div className="netflix-hero max-w-8xl px-4 py-20 mx-auto bottom-20 absolute z-40 w-full inset-x-0">
          <Fade direction="up" triggerOnce>
            {!!pageHeaderTitleProp && (
              <h1 className="text-3xl md:text-6xl xl:text-7xl text-shadow-large mt-0 mb-1 py-0 text-left text-text-overlay font-bold uppercase">
                {pageHeaderTitleProp}
              </h1>
            )}
            {!!pageHeaderSubtitleProp && (
              <h2 className="text-shadow my-0 py-0 text-left uppercase tracking-widest font-bold text-lg opacity-100 text-secondary max-w-md">
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
        </div>
        {pageHeaderImageProp && (
          <Image
            src={pageHeaderImageProp}
            alt=""
            width={0}
            height={0}
            sizes="100%"
            className={`absolute w-full h-full inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 object-cover ${
              scroll ? "opacity-20" : "opacity-80"
            } bg-fixed`}
          />
        )}
      </section>
    </Fade>
  );
}
