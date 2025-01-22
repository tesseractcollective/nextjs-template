import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import parse from "html-react-parser";
import type { CallToActionFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "./LinkItem";
import PageHeaderAngled from "./PageHeaders/PageHeaderAngled";
import PageHeaderFull from "./PageHeaders/PageHeaderFull";
import PageHeaderWavy from "./PageHeaders/PageHeaderWavy";
import PageHeaderOverlay from "./PageHeaders/PageHeaderOverlay";
import PageHeaderSplit from "./PageHeaders/PageHeaderSplit";
import PageHeaderVideo from "./PageHeaders/PageHeaderVideo";
import PageHeaderSharp from "./PageHeaders/PageHeaderSharp";
import PageHeaderDiagonal from "./PageHeaders/PageHeaderDiagonal";
import PageHeaderParallax from "./PageHeaders/PageHeaderParallax";
import PageHeaderMotion from "./PageHeaders/PageHeaderMotion";
import PageHeaderNetflix from "./PageHeaders/PageHeaderNetflix";
import PageHeaderContent from "./PageHeaders/PageHeaderContent";
import PageHeaderGradient from "./PageHeaders/PageHeaderGradient";
import PageHeaderModern from "./PageHeaders/PageHeaderModern";
import PageHeaderMoon from "./PageHeaders/PageHeaderMoon";
import PageHeaderPower from "./PageHeaders/PageHeaderPower";
import PageHeaderSquare from "./PageHeaders/PageHeaderSquare";
import PageHeaderTechno from "./PageHeaders/PageHeaderTechno";
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
  // - Full √
  // - gradient √
  // - modern √
  // - moon √
  // - motion √
  // - netflix √
  // - overlap √
  // - page
  // - parallax √
  // - power √
  // - sharp √
  // - split √
  // - square √
  // - techno √
  // - video √
  // - wavy

  return (
    <>
      {pageWidthStyle === "angled" && (
        <PageHeaderAngled
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "Full" && (
        <PageHeaderFull
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "wavy" && (
        <PageHeaderWavy
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "overlap" && (
        <PageHeaderOverlay
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "split" && (
        <PageHeaderSplit
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "video" && (
        <PageHeaderVideo
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "sharp" && (
        <PageHeaderSharp
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "diagonal" && (
        <PageHeaderDiagonal
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "parallax" && (
        <PageHeaderParallax
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "motion" && (
        <PageHeaderMotion
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "netflix" && (
        <PageHeaderNetflix
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "power" && (
        <PageHeaderPower
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "moon" && (
        <PageHeaderMoon
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "modern" && (
        <PageHeaderModern
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "gradient" && (
        <PageHeaderGradient
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "square" && (
        <PageHeaderSquare
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "techno" && (
        <PageHeaderTechno
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderImageProp={pageHeaderImageProp}
          // pageCallToAction={pageCallToAction}
        />
      )}
      {pageWidthStyle === "Content" && (
        <PageHeaderContent
          pageHeaderTitleProp={pageHeaderTitleProp}
          pageHeaderSubtitleProp={pageHeaderSubtitleProp}
          pageHeaderWrapperCssClassProp={pageHeaderWrapperCssClassProp}
          pageHeaderImageProp={pageHeaderImageProp}
          pageWidthStyle={pageWidthStyle}
          hideHeader={hideHeader}
          pageCallToAction={pageCallToAction}
        />
      )}
    </>
  );
}
