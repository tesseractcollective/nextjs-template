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
import LinkItem from "@/components/LinkItem";
import useViewport from "@/hooks/useViewport";

type HeroMediaSliderType = HeroMediaSliderFieldsFragment;

interface HeroMediaSliderProps {
  heroMediaSliderData: HeroMediaSliderType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function HeroMediaProductSection({
  heroMediaSliderData,
  siteLibrary,
}: HeroMediaSliderProps): ReactElement {
  const { isMobile } = useViewport();
  if (!siteLibrary) return <></>;
  if (!heroMediaSliderData) return <></>;

  return (
    <>
      {!!heroMediaSliderData && heroMediaSliderData.length >= 1 && (
        <div className="relative w-full mx-0 px-0">
          {heroMediaSliderData.map((heroMediaSliderItem, index) => (
            <div
              key={`${heroMediaSliderItem.id}-${index++}`}
              className="relative z-20 h-full w-full"
            >
              <section
                className={`hero-media-section transition-all mx-auto w-full ${
                  heroMediaSliderItem?.sliderCssWrapper &&
                  heroMediaSliderItem.sliderCssWrapper
                }`}
              >
                {/* <div className="heromediaslider-overlay-content headlinePrimary  text-text-overlay flex items-center justify-center flex-col h-full w-full m-auto text-center absolute z-30 p-4">
                  <div
                    className={`swiper-no-swiping relative p-4 text-${
                      heroMediaSliderItem?.textContent?.contentAlign &&
                      heroMediaSliderItem?.textContent?.contentAlign?.toLocaleLowerCase()
                    } ${
                      heroMediaSliderItem?.textContent?.cssClass &&
                      heroMediaSliderItem?.textContent?.cssClass
                    }`}
                  >
                    <Fade triggerOnce className="w-full">
                      {heroMediaSliderItem?.textContent?.contentImage && (
                        <Image
                          priority
                          width={0}
                          height={0}
                          sizes="100%"
                          className={`block mb-0 pb-4 ${
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
                      <div className="text-shadow body-parsed-text text-text-overlay">
                        {parse(heroMediaSliderItem?.textContent.header.html)}
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.subHeader && (
                      <div className="body-parsed-text text-text-overlay">
                        {parse(heroMediaSliderItem?.textContent.subHeader.html)}
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.content && (
                      <div className="body-parsed-text text-text-overlay">
                        {parse(heroMediaSliderItem?.textContent.content.html)}
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.htmlText && (
                      <div className="body-parsed-text">
                        {parse(heroMediaSliderItem?.textContent.htmlText)}
                      </div>
                    )}

                    <div className="flex flex-row flex-wrap justify-center items-center mx-auto w-full gap-x-4">
                      {heroMediaSliderItem?.callToAction?.map(
                        (callToActionItem) => (
                          <div key={Math.random()}>
                            {callToActionItem?.ctaLink && (
                              <div
                                className={`flex gap-x-2 ${
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
                                  } max-w-max`}
                                />
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gradient-to-b from-dark z-20 section-fade-invert h-[5rem]opacity-70 left-0 right-0 top-0" />
                <div className="absolute bg-gradient-to-t from-dark z-20 section-fade-invert h-[5rem] bottom-0 left-0 right-0 w-full" /> */}
                {!!heroMediaSliderItem?.sliderMediaBackground && (
                  <>
                    {heroMediaSliderItem?.mobileThumbnail && (
                      <Image
                        src={
                          isMobile
                            ? heroMediaSliderItem.mobileThumbnail.url
                            : heroMediaSliderItem.sliderMediaBackground.url
                        }
                        className="hero-media-image h-full w-full select-none z-1 object-contain max-w-8xl mx-auto"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        quality={100}
                      />
                    )}
                    {heroMediaSliderItem?.mobileThumbnail === null && (
                      <Image
                        src={heroMediaSliderItem.sliderMediaBackground.url}
                        className="hero-media-image object-contain h-full w-full object-center-top select-none z-1"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        quality={100}
                      />
                    )}
                  </>
                )}
              </section>
            </div>
          ))}

          {!!heroMediaSliderData[0]?.displaySocialMedia && (
            <SocialMediaIcons
              fadeDirection="up"
              siteLibrary={siteLibrary}
              cssClass="absolute z-[80] bottom-10 left-0 right-0 mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center gap-x-2 !text-secondary"
            />
          )}
        </div>
      )}
    </>
  );
}
