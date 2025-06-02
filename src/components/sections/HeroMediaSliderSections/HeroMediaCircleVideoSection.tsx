import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import type {
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
} from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";
import "./HeroMediaCircleVideo.scss";
import { motion } from "framer-motion";

type HeroMediaSliderType = HeroMediaSliderFieldsFragment;

interface HeroMediaSliderProps {
  heroMediaSliderData: HeroMediaSliderType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function HeroMediaCircleVideoSection({
  heroMediaSliderData,
  siteLibrary,
}: HeroMediaSliderProps): ReactElement {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
                className={`hero-media-slider transition-all h-100vh flex flex-col items-center ${
                  heroMediaSliderItem?.sliderCssWrapper &&
                  heroMediaSliderItem.sliderCssWrapper
                }`}
              >
                <div className="heromediaslider-overlay-content headlinePrimary text-text-color flex items-center justify-center flex-1 flex-col h-full w-full m-auto text-center relative z-30 p-4 mt-48 mb-24">
                  <div
                    className={`relative p-4 text-${
                      heroMediaSliderItem?.textContent?.contentAlign &&
                      heroMediaSliderItem?.textContent?.contentAlign?.toLocaleLowerCase()
                    } ${
                      heroMediaSliderItem?.textContent?.cssClass &&
                      heroMediaSliderItem?.textContent?.cssClass
                    }`}
                  >
                    <Fade triggerOnce className="w-full">
                      {heroMediaSliderItem?.textContent?.contentImage &&
                        heroMediaSliderItem.textContent.linkImage !== true && (
                          <Image
                            priority
                            width={0}
                            height={0}
                            sizes="100%"
                            className={`block mb-0 pb-4 ${
                              (heroMediaSliderItem?.textContent
                                ?.contentAlign === "center" &&
                                "mx-auto") ||
                              (heroMediaSliderItem?.textContent
                                ?.contentAlign === "left" &&
                                "mr-auto") ||
                              (heroMediaSliderItem?.textContent
                                ?.contentAlign === "right" &&
                                "ml-auto") ||
                              (heroMediaSliderItem?.textContent
                                ?.contentAlign === "justify" &&
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
                              heroMediaSliderItem?.textContent?.header?.html ||
                              ""
                            }
                          />
                        )}
                      {heroMediaSliderItem?.textContent?.contentImage &&
                        heroMediaSliderItem.textContent.linkImage === true && (
                          <LinkItem link={heroMediaSliderItem.textContent.link}>
                            <Image
                              priority
                              width={0}
                              height={0}
                              sizes="100%"
                              className={`block mb-0 pb-4 ${
                                (heroMediaSliderItem?.textContent
                                  ?.contentAlign === "center" &&
                                  "mx-auto") ||
                                (heroMediaSliderItem?.textContent
                                  ?.contentAlign === "left" &&
                                  "mr-auto") ||
                                (heroMediaSliderItem?.textContent
                                  ?.contentAlign === "right" &&
                                  "ml-auto") ||
                                (heroMediaSliderItem?.textContent
                                  ?.contentAlign === "justify" &&
                                  "mx-auto")
                              } ${heroMediaSliderItem?.textContent?.imageStyle?.map(
                                (imageStyleItem) =>
                                  ` dynamic-image-class dynamic-${imageStyleItem} `
                              )}`}
                              style={{ objectFit: "contain" }}
                              src={
                                heroMediaSliderItem?.textContent?.contentImage
                                  .url
                              }
                              alt={
                                heroMediaSliderItem?.textContent?.header
                                  ?.html || ""
                              }
                            />
                          </LinkItem>
                        )}
                    </Fade>

                    {heroMediaSliderItem?.textContent?.header && (
                      <div className="hero-circle-video-text-box here max-6-xl mx-auto w-full">
                        <motion.div
                          className="overflow-hidden max-h-max"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { y: -200, opacity: 0, scale: 0 },
                            visible: {
                              scale: 1,
                              y: 0,
                              opacity: 1,
                              transition: {
                                delay: 0.5,
                                duration: 1,
                              },
                            },
                          }}
                        >
                          {parse(heroMediaSliderItem?.textContent.header.html)}
                        </motion.div>
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.subHeader && (
                      <div className="body-parsed-text text-text-color">
                        {parse(heroMediaSliderItem?.textContent.subHeader.html)}
                      </div>
                    )}

                    {heroMediaSliderItem?.textContent?.content && (
                      <div className="body-parsed-text text-text-color mx-auto max-w-2xl">
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
                                      : "text-text-overlay border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl theme-overlay"
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
                {!!heroMediaSliderItem?.sliderMediaBackground && (
                  <div className="main relative flex items-center justify-center">
                    <div className="relative w-[85vw] h-[85vw] lg:w-[50vw] lg:h-[50vw]  rounded-full border-4 border-primary overflow-hidden m-auto">
                      {heroMediaSliderItem.mediaType === "video" && (
                        <video
                          src={heroMediaSliderItem.sliderMediaBackground.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover" /* Adjust video styling */
                        />
                      )}
                    </div>
                  </div>
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
