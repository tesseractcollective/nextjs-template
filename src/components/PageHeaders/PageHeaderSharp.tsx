import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import type { CallToActionFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "../LinkItem";
import "./PageHeaderSharp.scss";

interface PageHeaderProps {
  pageHeaderTitleProp?: string;
  pageHeaderSubtitleProp?: string;
  pageHeaderWrapperCssClassProp?: string;
  pageHeaderImageProp?: string;
  pageWidthStyle?: string | null | undefined;
  hideHeader?: boolean;
  pageCallToAction?: CallToActionFieldsFragment[];
}

export default function PageHeaderSharp({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  hideHeader,
  pageCallToAction,
}: PageHeaderProps) {
  if (hideHeader === true) return null;

  const cssClass = pageHeaderWrapperCssClassProp || "";

  return (
    <div className={`${cssClass}`}>
      <section className="pt-44 pb-44 h-full relative h-90vh flex items-center justify-center flex-col sharp-header">
        <div className="bg-[#000] w-full h-full absolute inset-0">
          <div
            className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-60 bg-fixed "
            style={{
              backgroundImage: `url(${pageHeaderImageProp})`,
            }}
          ></div>
        </div>
        <Fade direction="up" triggerOnce className="mx-auto max-w-4xl w-full">
          {!!pageHeaderTitleProp && (
            <h1 className="text-2xl md:text-4xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
              {pageHeaderTitleProp}
            </h1>
          )}
          {!!pageHeaderSubtitleProp && (
            <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
              {pageHeaderSubtitleProp}
            </h2>
          )}
          {!!pageCallToAction && pageCallToAction?.length > 0 && (
            <div className="text-center mx-aut flex items-center justify-center">
              {pageCallToAction.map(
                (callToActionItem) =>
                  callToActionItem?.ctaLink && (
                    <div
                      key={callToActionItem.ctaLink}
                      className="text-center mx-auto gap-2"
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
                              } max-w-max`
                        }
                      />
                    </div>
                  )
              )}
            </div>
          )}
        </Fade>
      </section>
    </div>
  );
}
