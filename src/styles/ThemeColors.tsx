/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from "react";
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

    if (siteLibrary?.themeColor?.background?.hex) {
      document.body.style.setProperty(
        "--dark",
        siteLibrary?.themeColor.background.hex
      );
      document.body.style.setProperty(
        "--background",
        siteLibrary?.themeColor.background.hex
      );
    }
    if (siteLibrary?.themeColor?.backgroundSecondary?.hex) {
      document.body.style.setProperty(
        "--background-secondary",
        siteLibrary?.themeColor.backgroundSecondary.hex
      );
    }
    if (siteLibrary?.themeColor?.primary?.hex) {
      document.body.style.setProperty(
        "--primary",
        siteLibrary.themeColor.primary.hex
      );
      document.body.style.setProperty(
        "--swiper-theme-color",
        siteLibrary.themeColor.primary.hex
      );
      document.body.style.setProperty(
        "--primary-color",
        siteLibrary.themeColor.primary.hex
      );
    }
    if (siteLibrary?.themeColor?.secondary?.hex) {
      document.body.style.setProperty(
        "--secondary",
        siteLibrary.themeColor.secondary.hex
      );
      document.body.style.setProperty(
        "--swiper-pagination-bullet-inactive-color",
        siteLibrary?.themeColor?.secondary.hex
      );
    }

    if (siteLibrary?.themeColor?.tertiary?.hex) {
      document.body.style.setProperty(
        "--tertiary",
        siteLibrary?.themeColor.tertiary.hex
      );
    }

    if (siteLibrary?.themeColor?.primaryFadeOpacity?.hex) {
      document.body.style.setProperty(
        "--primary-fade-opacity",
        `${siteLibrary?.themeColor.primaryFadeOpacity.hex}75`
      );
      document.body.style.setProperty(
        "--tw-ring-color",
        `${siteLibrary?.themeColor.primaryFadeOpacity.hex}75`
      );
    }

    if (siteLibrary?.themeColor?.text?.hex) {
      document.body.style.setProperty(
        "--text",
        siteLibrary?.themeColor.text.hex
      );
    }
    if (siteLibrary?.themeColor?.textOverlay?.hex) {
      document.body.style.setProperty(
        "--text-text-overlay",
        siteLibrary?.themeColor.textOverlay.hex
      );
    }
  }, [
    siteLibrary?.siteCssBodyClass,
    siteLibrary?.siteLibraryJson?.siteID,
    siteLibrary.themeColor.background.hex,
    siteLibrary.themeColor.backgroundSecondary.hex,
    siteLibrary.themeColor.primary.hex,
    siteLibrary.themeColor.primaryFadeOpacity.hex,
    siteLibrary.themeColor.secondary.hex,
    siteLibrary.themeColor.tertiary.hex,
    siteLibrary.themeColor.text.hex,
    siteLibrary.themeColor.textOverlay.hex,
  ]);
  return <></>;
}
