import type { ReactElement } from "react";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import ReactGA from "react-ga4";
import type {
  SiteLibraryFieldsFragment,
  PageFieldsFragment,
} from "@/graphql/generated/graphql";
import SocialMediaIcons from "./SocialMediaIcons";

type HeroMediaSliderType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlock"][number]["heroMediaSlider"];

interface HeroMediaSliderProps {
  heroMediaSlider: HeroMediaSliderType;
  siteLibrary: SiteLibraryFieldsFragment;
}

// {
//   mediaType?: string;
//   sliderCssWrapper?: string;
//   sliderMediaBackground?: {
//     url: string;
//   };
//   textContent: {
//     contentImage?: { url: string };
//     header?: { html: string };
//     subHeader?: { html: string };
//     content?: { html: string };
//     contentAlign?: string;
//     link?: string;
//     imageStyle?: [string];
//     headerFont?: string;
//     subHeaderFont?: string;
//     contentFont?: string;
//   };
//   callToAction?: [
//     {
//       ctaLink?: string;
//       ctaLabel?: string;
//       ctaClass?: string;
//       ctaPrimary?: boolean;
//     },
//   ];
// },

export default function HeroMediaSliderSection({
  heroMediaSlider,
  siteLibrary,
}: HeroMediaSliderProps): ReactElement {
  if (!siteLibrary) return <></>;
  if (!heroMediaSlider) return <></>;
  const {
    facebookLink,
    instagramLink,
    twitterLink,
    youtubeLink,
    linkedinLink,
    pinterestLink,
  } = siteLibrary;
  // console.log('HeroMediaSlider', heroMediaSlider);

  return (
    <>
      {!!heroMediaSlider && heroMediaSlider.length >= 1 && (
        <div className="w-full mx-0 px-0">
          {heroMediaSlider.map((heroMediaSliderItem) => (
            <section
              key={Math.random() * 5}
              className={`video-wrapper dark-section ${
                heroMediaSliderItem?.sliderCssWrapper &&
                heroMediaSliderItem.sliderCssWrapper
              }`}
            >
              <div className="video-overlay-content headlinePrimary">
                <div key={Math.random()} className="">
                  <div
                    className={`p-4 text-${
                      heroMediaSliderItem?.textContent?.contentAlign &&
                      heroMediaSliderItem?.textContent?.contentAlign?.toLocaleLowerCase()
                    }`}
                  >
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.contentImage && (
                        <img
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
                    </div>
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.header && (
                        <div
                          className="text-shadow body-parsed-text"
                        >
                          {parse(heroMediaSliderItem?.textContent.header.html)}
                        </div>
                      )}
                    </div>
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.subHeader && (
                        <div
                          className="body-parsed-text"
                        >
                          {parse(
                            heroMediaSliderItem?.textContent.subHeader.html
                          )}
                        </div>
                      )}
                    </div>
                    <div className="animate-fade-in-up">
                      {heroMediaSliderItem?.textContent?.content && (
                        <div
                          className="body-parsed-text"
                        >
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
              </div>
              {!!heroMediaSliderItem?.displaySocialMedia && (
                <div className="tagline-wrapper">
                  <SocialMediaIcons siteLibrary={siteLibrary} />
                </div>
              )}
              {!!heroMediaSliderItem?.sliderMediaBackground && (
                <div className="main">
                  <div className="overlay" />
                  {heroMediaSliderItem.mediaType === "video" ? (
                    <video
                      src={heroMediaSliderItem.sliderMediaBackground.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      src={heroMediaSliderItem.sliderMediaBackground.url}
                      className="hero-media-image"
                      alt=""
                    />
                  )}
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </>
  );
}
