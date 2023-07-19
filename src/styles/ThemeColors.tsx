/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect, Fragment } from "react";
import type { SiteLibraryFieldsFragment } from "@/graphql/generated/graphql";

export interface ThemeColorsProps {
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function ThemeColors({ siteLibrary }: ThemeColorsProps) {
  useEffect(() => {
    if (siteLibrary?.siteCssBodyClass) {
      document.body.classList.add(siteLibrary?.siteCssBodyClass as string);
    }

    if (siteLibrary?.siteLibraryJson?.siteID) {
      document.body.classList.add(siteLibrary?.siteLibraryJson?.siteID);
    }

    if (siteLibrary?.themeColor?.dark?.hex) {
      document.body.style.setProperty(
        "--dark",
        siteLibrary?.themeColor.dark.hex
      );
    }
    if (siteLibrary?.themeColor?.primary?.hex) {
      document.body.style.setProperty(
        "--primary",
        siteLibrary?.themeColor.primary.hex
      );
      document.body.style.setProperty(
        "--swiper-theme-color",
        siteLibrary?.themeColor.primary.hex
      );
      document.body.style.setProperty(
        "--primary-color",
        siteLibrary?.themeColor.primary.hex
      );
    }
    if (siteLibrary?.themeColor?.primaryHover?.hex) {
      document.body.style.setProperty(
        "--primary-hover",
        siteLibrary?.themeColor.primaryHover.hex
      );
      document.body.style.setProperty(
        "--swiper-pagination-bullet-inactive-color",
        siteLibrary?.themeColor?.primaryHover.hex
      );
    }

    if (siteLibrary?.themeColor?.primaryFade?.hex) {
      document.body.style.setProperty(
        "--primary-fade",
        siteLibrary?.themeColor.primaryFade.hex
      );
    }

    if (siteLibrary?.themeColor?.primaryFadeOpacity?.hex) {
      document.body.style.setProperty(
        "--primary-fade-opacity",
        siteLibrary?.themeColor.primaryFadeOpacity.hex
      );
      document.body.style.setProperty(
        "--tw-ring-color",
        siteLibrary?.themeColor.primaryFadeOpacity.hex
      );
    }

    if (siteLibrary?.themeColor?.white?.hex) {
      document.body.style.setProperty(
        "--white",
        siteLibrary?.themeColor.white.hex
      );
    }
  }, [
    siteLibrary?.siteCssBodyClass,
    siteLibrary?.themeColor.dark.hex,
    siteLibrary?.themeColor.primary.hex,
    siteLibrary?.themeColor.primaryFade.hex,
    siteLibrary?.themeColor.primaryFadeOpacity.hex,
    siteLibrary?.themeColor.primaryHover.hex,
    siteLibrary?.themeColor.white.hex,
    siteLibrary?.siteLibraryJson?.siteID,
  ]);

  return <></>;
}
