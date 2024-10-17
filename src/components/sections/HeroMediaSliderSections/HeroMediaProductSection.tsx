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
      {heroMediaSliderData.length > 0 && (
        <div className="relative w-full mx-0 px-0">
          {heroMediaSliderData.map((heroMediaSliderItem, index) => (
            <div
              key={`${heroMediaSliderItem.id}-${index}`}
              className="relative z-20 h-full w-full"
            >
              <Fade
                className={`hero-media-section transition-all mx-auto w-full ${
                  heroMediaSliderItem?.sliderCssWrapper &&
                  heroMediaSliderItem.sliderCssWrapper
                }`}
              >
                {heroMediaSliderItem?.sliderMediaBackground &&
                  heroMediaSliderItem?.mobileThumbnail && (
                    <Image
                      src={
                        isMobile
                          ? heroMediaSliderItem.mobileThumbnail.url
                          : heroMediaSliderItem.sliderMediaBackground.url
                      }
                      className={`hero-media-image h-full w-full select-none z-1 object-contain max-w-8xl mx-auto max-h-[80vh]`}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      quality={100}
                    />
                  )}
              </Fade>
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
