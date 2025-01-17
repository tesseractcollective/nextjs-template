import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import parse from "html-react-parser";
import type { CallToActionFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "./LinkItem";
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
    <>
      {pageWidthStyle === "angled" && (
        <div className={`bg-bg relative ${cssClass}`}>
          <div className="relative">
            <div className="mx-auto max-w-7xl bg-bg">
              <div className="relative z-10 pt-14 w-full lg:max-w-4xl xl:max-w-2xl">
                <svg
                  className="block absolute bottom-0 h-72 w-full transform fill-bg lg:hidden"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="100 15, 100 100,0 100,0 39" />
                </svg>
                <svg
                  className="hidden lg:absolute inset-y-0 lg:-left-[50%] xl:left-0 h-full w-full translate-x-1/2 transform fill-bg lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>

                <div className="relative px-8 py-56 pr-0">
                  <Fade triggerOnce direction="down">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                      {!!pageHeaderTitleProp && (
                        <h1 className="text-4xl font-bold tracking-tight text-text-color sm:text-6xl">
                          {pageHeaderTitleProp}
                        </h1>
                      )}
                      {!!pageHeaderSubtitleProp && (
                        <p className="mt-6 text-lg leading-8 text-text-color">
                          {parse(pageHeaderSubtitleProp)}
                        </p>
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
                  </Fade>
                </div>
              </div>
            </div>
            {!!pageHeaderImageProp && (
              <Fade
                triggerOnce
                direction="right"
                className="absolute inset-y-0 right-0 w-full lg:w-2/3 xl:w-1/2 z-0"
              >
                <Image
                  className="aspect-[3/2] object-cover aspect-auto h-full w-full"
                  src={pageHeaderImageProp}
                  alt=""
                  sizes="100%"
                  width={0}
                  height={0}
                />
              </Fade>
            )}
          </div>
        </div>
      )}
      {pageWidthStyle === "Full" && (
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
      )}
      {pageWidthStyle === "wavy" && (
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
      )}
      {pageWidthStyle === "overlap" && (
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
      )}
      {pageWidthStyle === "split" && (
        <div className="relative overflow-hidden">
          <Slide triggerOnce direction="left" className="relative">
            <section className="mb-20 md:mb-0 pt-44 pb-44 relative z-0 bg-primary all-text-white h-50vh md:h-70vh w-full md:w-[90vw] lg:w-[70vw]">
              <Fade
                direction="up"
                triggerOnce
                className="absolute z-30 -bottom-30 md:bottom-[-5px] md:h-full right-[25%] md:right-[-6%]"
              >
                {!!pageHeaderImageProp && (
                  <Image
                    src={pageHeaderImageProp}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-full w-full object-contain object-center"
                  />
                )}
              </Fade>
              <div className="flex flex-col items-center md:items-start justify-start md:justify-start md:w-full px-4 relative z-20 mx-auto md:mr-16 xl:ml-[17rem] text-center md:text-left -top-[7rem] md:top-0">
                {!!pageHeaderTitleProp && (
                  <Fade
                    direction="left"
                    triggerOnce
                    className="text-center mx-auto md:text-left md:mx-0"
                  >
                    <h1 className="text-3xl md:text-7xl xl:text-14xl my-0 py-0 text-center sm:text-left text-white font-bold w-full mx-auto">
                      {pageHeaderTitleProp}
                    </h1>
                  </Fade>
                )}
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
              </div>
            </section>
          </Slide>
        </div>
      )}
      {pageWidthStyle === "video" && (
        <section className="hero-media-slider video-wrapper transition-all flex items-center justify-center">
          <div className="absolute bg-gradient-to-b from-dark z-20 section-fade-invert h-32 opacity-70 left-0 right-0 top-0" />
          <div className="absolute bg-gradient-to-t from-dark z-20 section-fade-invert h-[12rem] bottom-0 left-0 right-0 w-full" />
          <div className="absolute w-full h-80vh top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed">
            <video
              src={pageHeaderImageProp}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="absolute inset-0 z-1 w-full h-full"
            />
          </div>
          <Fade direction="up" triggerOnce>
            <div className="relative z-50 px-4 max-w-4xl mx-auto w-full">
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
                  <div className="text-center mx-auto flex flex-row items-center justify-center flex-wrap gap-4">
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
                                        ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl !rounded-full"
                                        : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !rounded-full"
                                    } max-w-max`
                              }
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </section>
      )}
      {pageWidthStyle === "sharp" && (
        <div className="bg-text-color">
          <section className="pt-44 pb-44 h-full relative h-90vh flex items-center justify-center flex-col sharp-header">
            <div className="bg-[#000] w-full h-full absolute inset-0">
              <div
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-60 bg-fixed "
                style={{
                  backgroundImage: `url(${pageHeaderImageProp})`,
                }}
              ></div>
            </div>
            <Fade
              direction="up"
              triggerOnce
              className="mx-auto max-w-4xl w-full"
            >
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
                                      ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl !rounded-full"
                                      : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !rounded-full"
                                  } mr-2 max-w-max`
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
      )}
      {pageWidthStyle === "diagonal" && (
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
      )}
      {pageWidthStyle === "parallax" && (
        <Zoom triggerOnce>
          <section className="pt-60 pb-60 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-90 bg-fixed"
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
                  <div className="text-center mx-auto">
                    {pageCallToAction.map(
                      (callToActionItem) =>
                        callToActionItem?.ctaLink && (
                          <div
                            key={callToActionItem.ctaLink}
                            className="text-center mx-auto flex flex-row flex-wrap items-center justify-center gap-4"
                          >
                            <LinkItem
                              parentCssClass="mx-auto w-full"
                              link={callToActionItem.ctaLink}
                              label={callToActionItem.ctaLabel}
                              cssClass={
                                callToActionItem?.ctaClass
                                  ? callToActionItem.ctaClass
                                  : `${
                                      callToActionItem.ctaPrimary
                                        ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl !rounded-full bg-primary hover:bg-secondary transition-all"
                                        : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !rounded-full"
                                    } mx-auto duration-[400ms]`
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
      )}
      {pageWidthStyle === "motion" && (
        <Fade triggerOnce>
          <section className="pt-80 pb-80 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-60 bg-fixed"
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
                  <div className="text-center mx-auto">
                    {pageCallToAction.map(
                      (callToActionItem) =>
                        callToActionItem?.ctaLink && (
                          <div
                            key={callToActionItem.ctaLink}
                            className="text-center mx-auto flex flex-row flex-wrap items-center justify-center gap-4"
                          >
                            <LinkItem
                              parentCssClass="mx-auto w-full"
                              link={callToActionItem.ctaLink}
                              label={callToActionItem.ctaLabel}
                              cssClass={
                                callToActionItem?.ctaClass
                                  ? callToActionItem.ctaClass
                                  : `${
                                      callToActionItem.ctaPrimary
                                        ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl !rounded-full bg-primary hover:bg-secondary transition-all"
                                        : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !rounded-full"
                                    } mx-auto duration-[400ms]`
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
        </Fade>
      )}
      {pageWidthStyle === "netflix" && (
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
      )}
      {pageWidthStyle === "power" && (
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
      )}
      {pageWidthStyle === "moon" && (
        <Fade triggerOnce className="relative">
          <div
            className={`relative block transition-all duration-500 ${
              scroll ? "" : "bg-primary"
            }`}
          >
            <div className="flex flex-col items-center justify-center min-h-[65vh] relative z-40">
              <div className="py-2 mx-auto relative w-full text-color items-center flex justify-center flex-col">
                <Fade direction="up" triggerOnce>
                  {!!pageHeaderTitleProp && (
                    <h1 className="text-3xl md:text-6xl xl:text-7xl  mt-0 mb-1 py-0 text-center font-bold uppercase">
                      {pageHeaderTitleProp}
                    </h1>
                  )}
                  {!!pageHeaderSubtitleProp && (
                    <h2 className="my-0 py-0 text-center uppercase tracking-widest font-bold text-xl opacity-100 text-overlay max-w-lg mx-auto">
                      {pageHeaderSubtitleProp}
                    </h2>
                  )}
                  {!!pageCallToAction && pageCallToAction?.length > 0 && (
                    <div className="flex items-center flex-row justify-center gap-x-4 text-center mx-auto">
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
                                          ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl bg-secondary !rounded-md"
                                          : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl !border !rounded-md"
                                      } mr-2 max-w-max`
                                }
                              />
                            </div>
                          )
                      )}
                    </div>
                  )}
                </Fade>
              </div>
            </div>
            <div
              className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-tertiary opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <Zoom triggerOnce>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  from-secondary to-tertiary opacity-50  sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </Zoom>
            {pageHeaderImageProp && (
              <div
                className={`relative w-full mx-auto block h-full transition-all overflow-hidden rounded-full aspect-1 duration-700 ${
                  scroll
                    ? "max-w-[1880px] max-h-[1880px] rotate-180"
                    : "max-w-[1440px] max-h-[1440px] rotate-0"
                }`}
              >
                <Image
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  src={pageHeaderImageProp}
                  className="object-cover w-full h-full absolute inset-0"
                />
              </div>
            )}
          </div>
        </Fade>
      )}
      {pageWidthStyle === "modern" && (
        <div className="bg">
          <div className="relative isolate pt-14">
            <Zoom triggerOnce>
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </Zoom>
            <div className="py-24 sm:py-32 lg:pb-40 relative z-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Zoom triggerOnce>
                  <div className="mx-auto max-w-2xl text-center">
                    {!!pageHeaderTitleProp && (
                      <h1 className="text-4xl font-bold tracking-tight text-text-color sm:text-6xl">
                        {pageHeaderTitleProp}
                      </h1>
                    )}
                    {!!pageHeaderSubtitleProp && (
                      <p className="mt-6 text-lg leading-8 text-text-color">
                        {pageHeaderSubtitleProp}
                      </p>
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
                  </div>
                </Zoom>

                {!!pageHeaderImageProp && (
                  <Fade triggerOnce direction="up">
                    <div className="mt-16 flow-root sm:mt-24">
                      <div className="-m-2 rounded-xl bg p-2 ring-1 ring-inset ring-primary lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image
                          src={pageHeaderImageProp}
                          alt={pageHeaderTitleProp || ""}
                          width={2432}
                          height={1442}
                          className="rounded-md shadow-2xl ring-1 ring-secondary"
                        />
                      </div>
                    </div>
                  </Fade>
                )}
              </div>
            </div>
            <Zoom triggerOnce>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </Zoom>
          </div>
        </div>
      )}
      {pageWidthStyle === "gradient" && (
        <section className={`w-full ${cssClass}`}>
          {(pageHeaderTitleProp || pageHeaderSubtitleProp) && (
            <section className="gradient-page-header-wrapper">
              <div className="gradient-page-header-hero"></div>
              <div className="gradient-page-header-content">
                {!!pageHeaderSubtitleProp && (
                  <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80">
                    {pageHeaderSubtitleProp}
                  </h2>
                )}
                <h1
                  className="gradient-page-header-h1--scalingSize"
                  data-text={pageHeaderTitleProp}
                >
                  {pageHeaderTitleProp}
                </h1>

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
              </div>
            </section>
          )}
        </section>
      )}
      {pageWidthStyle === "square" && (
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
      )}
      {pageWidthStyle === "Content" && (
        <section
          className={`relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8' ${cssClass}`}
        >
          {(pageHeaderTitleProp || pageHeaderSubtitleProp) && (
            <div className="relative w-full mx-auto p-4 my-8">
              <div className="flex flex-col md:flex-col items-center justify-center md:justify-start w-full">
                {!!pageHeaderTitleProp && (
                  <Fade direction="left" triggerOnce>
                    <h1 className="text-3xl md:text-7xl xl:text-8xl text-shadow my-0 py-0 text-center text-primary font-bold w-full mx-auto">
                      {pageHeaderTitleProp}
                    </h1>
                  </Fade>
                )}
                {!!pageHeaderSubtitleProp && (
                  <Fade direction="right" triggerOnce>
                    <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80 md:ml-4 w-full">
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
                  className="h-[26rem] w-full object-cover object-center mb-8"
                />
              )}
            </div>
          </Fade>
        </section>
      )}
    </>
  );
}
