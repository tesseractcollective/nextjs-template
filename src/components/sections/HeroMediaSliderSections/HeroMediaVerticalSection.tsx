import type { ReactElement } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import type {
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
} from "@/graphql/generated/graphql";
import useViewport from "@/app/hooks/useViewport";
import "./HeroMediaVerticalSection.scss";

type HeroMediaSliderType = HeroMediaSliderFieldsFragment;

interface HeroMediaSliderProps {
  heroMediaSliderData: HeroMediaSliderType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function HeroMediaVerticalSection({
  heroMediaSliderData,
  siteLibrary,
}: HeroMediaSliderProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null); // Specify the correct type here
  const { isMobile } = useViewport();
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  if (!siteLibrary) return <></>;
  if (!heroMediaSliderData) return <></>;
  const isOneSlider = heroMediaSliderData.length === 1;
  const heroMediaSliderItem = heroMediaSliderData[0];

  return (
    <div ref={ref}>
      {heroMediaSliderItem?.textContent?.contentImage && (
        <div className={`dynamic-image-class dynamic-medium`}>
          <Image
            fill
            style={{ objectFit: "contain" }}
            src={heroMediaSliderItem.textContent.contentImage.url}
            alt={heroMediaSliderItem?.textContent?.header?.html || ""}
          />
        </div>
      )}

      {heroMediaSliderItem.sliderMediaBackground?.url && (
        <div>Slider background content here</div>
      )}

      {heroMediaSliderItem.mobileThumbnail?.url && (
        <div>Mobile thumbnail content here</div>
      )}
    </div>
  );
}
