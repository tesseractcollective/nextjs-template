import type { ReactElement } from "react";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import ReactGA from "react-ga4";
import type {
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
} from "@/graphql/generated/graphql";
import SocialMediaIcons from "../SocialMediaIcons";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

type HeroMediaSliderType = HeroMediaSliderFieldsFragment;

interface HeroMediaSliderProps {
  heroMediaSliderData: HeroMediaSliderType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function HeroMediaSliderSection({
  heroMediaSliderData,
  siteLibrary,
}: HeroMediaSliderProps): ReactElement {
  if (!siteLibrary) return <></>;
  if (!heroMediaSliderData) return <></>;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    draggable: true,
    pauseOnHover: true,
  };
  const youtubeiFrameParams =
    "&autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1?rel=0&enablejsapi=1";
  const youtubeiFrameNoParams =
    "?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1?rel=0&enablejsapi=1";
  return (
    <>
      {!!heroMediaSliderData && heroMediaSliderData.length >= 1 && (
        <div className="w-full mx-0 px-0">
          <Slider {...settings} className="">
            {heroMediaSliderData.map((heroMediaSliderItem, index) => (
              <section
                key={`${heroMediaSliderItem.id}-${index++}`}
                className={`video-wrapper dark-section ${
                  heroMediaSliderItem?.sliderCssWrapper &&
                  heroMediaSliderItem.sliderCssWrapper
                }`}
              >
                <div className="video-overlay-content headlinePrimary">
                  <div
                    className={`p-4 text-${
                      heroMediaSliderItem?.textContent?.contentAlign &&
                      heroMediaSliderItem?.textContent?.contentAlign?.toLocaleLowerCase()
                    }`}
                  >
                    <Fade direction="up" triggerOnce>
                      {heroMediaSliderItem?.textContent?.contentImage && (
                        <Image
                          width={0}
                          height={0}
                          sizes="100%"
                          className={`block mb-0 ${
                            (heroMediaSliderItem?.textContent?.contentAlign ===
                              "center" &&
                              "mx-auto") ||
                            (heroMediaSliderItem?.textContent?.contentAlign ===
                              "left" &&
                              "mr-auto") ||
                            (heroMediaSliderItem?.textContent?.contentAlign ===
                              "right" &&
                              "ml-auto") ||
                            (heroMediaSliderItem?.textContent?.contentAlign ===
                              "justify" &&
                              "mx-auto")
                          } ${heroMediaSliderItem?.textContent?.imageStyle?.map(
                            (imageStyleItem) =>
                              ` dynamic-image-class dynamic-${imageStyleItem} `
                          )}`}
                          style={{ objectFit: "contain" }}
                          src={
                            heroMediaSliderItem?.textContent?.contentImage.url
                          }
                          alt={
                            heroMediaSliderItem?.textContent?.header?.html || ""
                          }
                        />
                      )}
                    </Fade>
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.header && (
                        <div className="text-shadow body-parsed-text">
                          {parse(heroMediaSliderItem?.textContent.header.html)}
                        </div>
                      )}
                    </div>
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.subHeader && (
                        <div className="body-parsed-text">
                          {parse(
                            heroMediaSliderItem?.textContent.subHeader.html
                          )}
                        </div>
                      )}
                    </div>
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.content && (
                        <div className="body-parsed-text">
                          {parse(heroMediaSliderItem?.textContent.content.html)}
                        </div>
                      )}
                    </div>
                    <div className="animate-fade-in-up">
                      <div className="flex flex-row flex-wrap justify-center items-center mx-auto ">
                        {heroMediaSliderItem?.callToAction?.map(
                          (callToActionItem) => (
                            <div key={Math.random()}>
                              {callToActionItem?.ctaLink && (
                                <div
                                  className={`flex ${
                                    (callToActionItem?.contentAlign ===
                                      "center" &&
                                      "mx-auto") ||
                                    (callToActionItem?.contentAlign ===
                                      "left" &&
                                      "mr-auto") ||
                                    (callToActionItem?.contentAlign ===
                                      "right" &&
                                      "ml-auto") ||
                                    (callToActionItem?.contentAlign ===
                                      "justify" &&
                                      "mx-auto")
                                  }`}
                                >
                                  {callToActionItem?.ctaLink.includes(
                                    "http"
                                  ) ? (
                                    <a
                                      href={callToActionItem?.ctaLink}
                                      target="_blank"
                                      className={`${
                                        callToActionItem.ctaClass
                                      } ${
                                        callToActionItem?.ctaPrimary
                                          ? "border-white text-white border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                          : "text-white border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                                      } mr-2 max-w-max`}
                                      rel="noreferrer"
                                    >
                                      {callToActionItem.ctaLabel}
                                    </a>
                                  ) : (
                                    <Link
                                      href={callToActionItem?.ctaLink}
                                      className={`${
                                        callToActionItem.ctaClass
                                      } ${
                                        callToActionItem?.ctaPrimary
                                          ? "border-white text-white border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                          : "text-white border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                                      } mr-2 max-w-max`}
                                    >
                                      {callToActionItem.ctaLabel}
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {!!heroMediaSliderItem?.displaySocialMedia && (
                  <div className="tagline-wrapper">
                    <SocialMediaIcons siteLibrary={siteLibrary} />
                  </div>
                )}
                {!!heroMediaSliderItem?.sliderMediaBackground && (
                  <div className="main">
                    <div className="overlay" />
                    {heroMediaSliderItem.mediaType === "video" && (
                      <video
                        src={heroMediaSliderItem.sliderMediaBackground.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden="true"
                      />
                    )}
                    {heroMediaSliderItem.mediaType === "image" && (
                      <Image
                        src={heroMediaSliderItem.sliderMediaBackground.url}
                        className="hero-media-image"
                        alt=""
                        width={1920}
                        height={1080}
                      />
                    )}
                  </div>
                )}
                {heroMediaSliderItem?.youtubeVideoId &&
                  heroMediaSliderItem.mediaType === "youtube" && (
                    <div className="h-screen">
                      <div className="video-bg">
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            heroMediaSliderItem.youtubeVideoId
                          }${
                            heroMediaSliderItem.youtubeVideoId.includes("?")
                              ? youtubeiFrameParams
                              : youtubeiFrameNoParams
                          }`}
                        ></iframe>
                      </div>
                    </div>
                  )}
              </section>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
