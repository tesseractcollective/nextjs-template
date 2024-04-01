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
  const ref = useRef(null);
  const { isMobile } = useViewport();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  if (!siteLibrary) return <></>;
  if (!heroMediaSliderData) return <></>;
  const isOneSlider = heroMediaSliderData.length === 1;
  const heroMediaSliderItem = heroMediaSliderData[0];
  //   image
  // video
  // youtube
  // netflix
  // vertical
  // expand
  // product

  return (
    <div
      ref={ref}
      className="w-full h-100vh md:h-120vh overflow-hidden relative flex items-center justify-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10 -mt-72"
      >
        {heroMediaSliderItem?.textContent?.contentImage && (
          <Image
            priority
            width={0}
            height={0}
            sizes="100%"
            className={`block mb-0 pb-4  ${heroMediaSliderItem?.textContent?.imageStyle?.map(
              (imageStyleItem) => ` dynamic-image-class dynamic-medium `
            )}`}
            style={{ objectFit: "contain" }}
            src={heroMediaSliderItem?.textContent?.contentImage.url}
            alt={heroMediaSliderItem?.textContent?.header?.html || ""}
          />
        )}
      </motion.h1>

      {heroMediaSliderItem.sliderMediaBackground?.url && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroMediaSliderItem.sliderMediaBackground.url})`,
            backgroundPosition: "center 40%",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
      )}
      {heroMediaSliderItem.mobileThumbnail?.url && (
        <div
          className="absolute inset-0 z-20 h-full outline outline-primary"
          style={{
            backgroundImage: `url(${heroMediaSliderItem.mobileThumbnail.url})`,
            backgroundPosition: isMobile ? "center top" : "center 15%",
            backgroundSize: isMobile ? "" : "cover",
          }}
        />
      )}
    </div>
  );
}
