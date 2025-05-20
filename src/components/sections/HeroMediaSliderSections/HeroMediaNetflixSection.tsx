import type { ReactElement } from "react";
import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import type {
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
} from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import HeroMediaCircleSection from "@/components/sections/HeroMediaSliderSections/HeroMediaCircleSection";
import HeroMediaVerticalSection from "@/components/sections/HeroMediaSliderSections/HeroMediaVerticalSection";
import HeroMediaProductSection from "@/components/sections/HeroMediaSliderSections/HeroMediaProductSection";
import HeroMediaPowerSection from "@/components/sections/HeroMediaSliderSections/HeroMediaPowerSection";
import HeroMediaCircleVideoSection from "@/components/sections/HeroMediaSliderSections/HeroMediaCircleVideoSection";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/hooks/useViewport";

type HeroMediaSliderType = HeroMediaSliderFieldsFragment;

interface HeroMediaSliderProps {
  heroMediaSliderData: HeroMediaSliderType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function HeroMediaNetflixSection({
  heroMediaSliderData,
  siteLibrary,
}: HeroMediaSliderProps): ReactElement {
  const [scroll, setScroll] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
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
  const { isMobile } = useViewport();
  if (!siteLibrary) return <></>;
  if (!heroMediaSliderData) return <></>;

  const isOneSlider = heroMediaSliderData.length === 1;
  // image
  // video
  // youtube
  // netflix
  // vertical
  // expand
  // prod

  return (
    <>
      {!!heroMediaSliderData && heroMediaSliderData.length >= 1 && (
        <div className="relative w-full mx-0 px-0">
          {!isOneSlider && (
            <button
              type="button"
              className="flex border-none outline-none font-bold cursor-pointer transition-all rotate-0 hover:-rotate-5 text-primary absolute left-10 bottom-10 bg-secondary rounded-[999px] z-30 !p-4 aspect-1"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FontAwesomeIcon
                icon={faChevronLeft as IconProp}
                className="fa-fw p-0 aspect-1 m-0 text-xl h-6 md:h-8 w-6 md:w-8"
              />
              <span className="sr-only">Move Blog Rotation Next</span>
            </button>
          )}
          <Swiper
            className="h-full"
            grabCursor
            loop
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={0}
            pagination
          >
            {heroMediaSliderData.map((heroMediaSliderItem, index) => (
              <SwiperSlide
                key={`${heroMediaSliderItem.id}-${index++}`}
                className="relative z-20 h-full w-full pt-2 px-2 rounded-lg overflow-hidden"
              >
                <section
                  className={`hero-media-slider video-wrapper transition-all rounded-lg ${
                    heroMediaSliderItem?.sliderCssWrapper &&
                    heroMediaSliderItem.sliderCssWrapper
                  }`}
                >
                  <div className="heromediaslider-overlay-content headlinePrimary  text-text-overlay flex items-start justify-center flex-col h-full w-full mx-auto absolute z-30 p-4">
                    <div
                      className={`swiper-no-swiping relative p-4 text-left ${
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
                            className={`block mb-0 pb-4 max-w-max mr-auto`}
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
                      </Fade>

                      {heroMediaSliderItem?.textContent?.header && (
                        <div className="text-shadow body-parsed-text text-text-overlay parse-h1">
                          {parse(heroMediaSliderItem?.textContent.header.html)}
                        </div>
                      )}

                      {heroMediaSliderItem?.textContent?.subHeader && (
                        <div className="body-parsed-text text-text-overlay parse-h2">
                          {parse(
                            heroMediaSliderItem?.textContent.subHeader.html
                          )}
                        </div>
                      )}

                      {heroMediaSliderItem?.textContent?.content && (
                        <div className="body-parsed-text text-text-overlay parse-p">
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

                  {!!heroMediaSliderItem?.sliderMediaBackground &&
                    heroMediaSliderItem?.mobileThumbnail && (
                      <div className="main">
                        <Fade direction="up">
                          <div className="overlay absolute top-0 left-0 w-full h-full transition-all z-0" />
                        </Fade>
                        <video
                          src={
                            isMobile
                              ? heroMediaSliderItem.mobileThumbnail.url
                              : heroMediaSliderItem.sliderMediaBackground.url
                          }
                          autoPlay
                          loop
                          muted
                          playsInline
                          aria-hidden="true"
                          className="absolute inset-0 z-1"
                        />
                      </div>
                    )}
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
          {!isOneSlider && (
            <button
              type="button"
              className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-primary absolute right-10 top-[50%] z-30"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FontAwesomeIcon
                icon={faChevronRight as IconProp}
                className="fa-fw my-0 text-xl h-6 md:h-8 w-6 md:w-8"
              />
              <span className="sr-only">Move Rotation Next</span>
            </button>
          )}
          {!!heroMediaSliderData[0]?.displaySocialMedia && (
            <SocialMediaIcons
              fadeDirection="up"
              siteLibrary={siteLibrary}
              cssClass="absolute z-[80] top-10 right-10 max-w-max mt-8 mb-4 w-full flex flex-row social-icons-row items-end justify-center gap-x-2 !text-secondary"
            />
          )}
        </div>
      )}
    </>
  );
}
