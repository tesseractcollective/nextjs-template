import React from "react";
import GalleryInfinite from "./GallerySections/GalleryInfinite";
import GalleryCarousel from "@/components/GallerySections/GalleryCarousel";
import GalleryMixSection from "@/components/GallerySections/GalleryMixSection";
import GallerySliderSection from "@/components/GallerySections/GallerySliderSection";
import GalleryLightbox from "./GallerySections/GalleryLightbox";
import GalleryGrid from "./GallerySections/GalleryGrid";
import GalleryFullscreen from "./GallerySections/GalleryFullscreen";
import GalleryShelf from "./GallerySections/GalleryShelf";
import GalleryMason from "./GallerySections/GalleryMason";
import GalleryRotate from "./GallerySections/GalleryRotate";
import GalleryComptact from "./GallerySections/GalleryComptact";
import GalleryChevron from "./GallerySections/GalleryChevron";
import GalleryDefault from "./GallerySections/GalleryDefault";

interface GalleryProps {
  galleryData?: {
    __typename?: "Asset" | undefined;
    url: string;
    caption?: string | null;
  }[];
  galleryLayoutData?: string;
}

// grid √
// infinite √
// lightbox √
// mason √
// rotate √
// fullScreen √
// shelf √
// card
// chevron
// compact
// mix
// polaroid
// slider
// stack
// twohundredvh
// circle

export default function GallerySection({
  galleryData,
  galleryLayoutData,
}: GalleryProps) {
  if (!galleryData || !galleryLayoutData) return <></>;

  const gallery = galleryData;
  const galleryLayout = galleryLayoutData;
  const finalImages = gallery.map((image) => image.url);
  if (!finalImages) return <></>;
  if (finalImages.length === 0) return null;

  if (galleryLayout === "fullScreen") {
    return <GalleryFullscreen imgs={finalImages} />;
  }
  if (galleryLayout === "card") {
    return <GalleryCarousel imgs={finalImages} />;
  }
  if (galleryLayout === "shelf") {
    return <GalleryShelf imgs={finalImages} />;
  }
  if (galleryLayout === "chevron") {
    return <GalleryChevron imgs={finalImages} />;
  }
  if (galleryLayout === "grid") {
    return <GalleryGrid galleryData={gallery} />;
  }
  if (galleryLayout === "infinite") {
    return <GalleryInfinite galleryData={gallery} />;
  }
  if (galleryLayout === "mason" && finalImages.length >= 1) {
    return <GalleryMason imgs={finalImages} />;
  }
  if (galleryLayout === "lightbox") {
    return <GalleryLightbox galleryData={gallery} />;
  }
  if (galleryLayout === "rotate" && gallery.length >= 1) {
    return <GalleryRotate imgs={finalImages} />;
  }
  if (galleryLayout === "compact" && gallery.length >= 1) {
    <GalleryComptact galleryData={gallery} />;
  }
  if (galleryLayout === "mix" && gallery.length >= 1) {
    return <GalleryMixSection galleryData={gallery} />;
  }
  if (galleryLayout === "slider" && gallery.length >= 2) {
    return (
      <GallerySliderSection
        beforeImage={gallery[0].url}
        afterImage={gallery[1].url}
      />
    );
  }
  if (gallery.length >= 1) {
    <GalleryDefault galleryData={gallery} />;
  }
  return null; // No gallery items to render
}
