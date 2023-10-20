import type { ReactElement } from "react";
import React from "react";
import parse from "html-react-parser";
import Image from "next/image";
import type {
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
} from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import LinkItem from "@/components/LinkItem";

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: heroMediaSliderData.length === 1 ? false : true,
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
                className={`hero-media-slider video-wrapper dark-section transition-all ${
                  heroMediaSliderItem?.sliderCssWrapper &&
                  heroMediaSliderItem.sliderCssWrapper
                }`}
              >
                <div className="video-overlay-content headlinePrimary dark-section text-text-color">
                  {!!heroMediaSliderItem?.displaySocialMedia && (
                    <SocialMediaIcons
                      siteLibrary={siteLibrary}
                      cssClass="absolute z-[80] bottom-10 left-0 right-0 mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center gap-x-2 !text-secondary"
                    />
                  )}
                  <div
                    className={`p-4 text-${
                      heroMediaSliderItem?.textContent?.contentAlign &&
                      heroMediaSliderItem?.textContent?.contentAlign?.toLocaleLowerCase()
                    }`}
                  >
                    <Fade triggerOnce className="w-full">
                      {heroMediaSliderItem?.textContent?.contentImage && (
                        <Image
                          priority
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

                    {heroMediaSliderItem?.textContent?.header && (
                      <div className="text-shadow body-parsed-text dark-section">
                        {parse(heroMediaSliderItem?.textContent.header.html)}
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.subHeader && (
                      <div className="body-parsed-text dark-section">
                        {parse(heroMediaSliderItem?.textContent.subHeader.html)}
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.content && (
                      <div className="body-parsed-text dark-section">
                        {parse(heroMediaSliderItem?.textContent.content.html)}
                      </div>
                    )}

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
                                  (callToActionItem?.contentAlign === "left" &&
                                    "mr-auto") ||
                                  (callToActionItem?.contentAlign === "right" &&
                                    "ml-auto") ||
                                  (callToActionItem?.contentAlign ===
                                    "justify" &&
                                    "mx-auto")
                                }`}
                              >
                                <LinkItem
                                  label={callToActionItem.ctaLabel}
                                  link={callToActionItem?.ctaLink}
                                  cssClass={`${callToActionItem.ctaClass} ${
                                    callToActionItem?.ctaPrimary
                                      ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                      : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                                  } mr-2 max-w-max`}
                                />
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark z-[1] section-fade-invert" />
                {!!heroMediaSliderItem?.sliderMediaBackground && (
                  <div className="main">
                    <Fade direction="up">
                      <div className="overlay absolute top-0 left-0 w-full h-full transition-all" />
                    </Fade>
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
                        className="hero-media-image object-cover h-full w-full object-center-top"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                      />
                    )}
                  </div>
                )}
                {heroMediaSliderItem?.youtubeVideoId &&
                  heroMediaSliderItem.mediaType === "youtube" && (
                    <div className="h-screen">
                      <div className="video-bg youtube-bg">
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
