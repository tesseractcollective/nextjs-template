import React from "react";
import type {
  AlbumFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import AlbumFeaturedSection from "@/components/AlbumSections/AlbumFeaturedSection";
import AlbumStackedSection from "@/components/AlbumSections/AlbumStackedSection";
import AlbumGridSection from "@/components/AlbumSections/AlbumGridSection";
import AlbumRecordSection from "@/components/AlbumSections/AlbumRecordSection";
import AlbumAllSection from "@/components/AlbumSections/AlbumAllSection";
import AlbumCdSection from "@/components/AlbumSections/AlbumCdSection";
import AlbumSliderSection from "@/components/AlbumSections/AlbumSliderSection";
import AlbumSkewSection from "@/components/AlbumSections/AlbumSkewSection";
export interface FeatureAlbumProps {
  albums: AlbumFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  albumDisplayType: string;
}

export default function FeatureAlbum({
  albums,
  siteLibrary,
  albumDisplayType,
}: FeatureAlbumProps) {
  if (!siteLibrary) return <></>;
  if (!albums) return <></>;

  // all
  // cd
  // compact
  // featured
  // record
  // skew
  // slider
  // stacked
  // myspace
  // vinyl
  // postcard
  // grid

  return (
    <>
      {albumDisplayType === "featured" && (
        <AlbumFeaturedSection
          albums={albums}
          isSpanish={siteLibrary?.isSpanish || false}
        />
      )}
      {albumDisplayType === "slider" && (
        <AlbumSliderSection
          albums={albums}
          isSpanish={siteLibrary?.isSpanish || false}
        />
      )}
      {albumDisplayType === "all" && <AlbumAllSection albums={albums} />}
      {albumDisplayType === "record" && <AlbumRecordSection albums={albums} />}
      {albumDisplayType === "cd" && <AlbumCdSection albums={albums} />}
      {albumDisplayType === "skew" && <AlbumSkewSection albums={albums} />}
      {albumDisplayType === "stacked" && (
        <AlbumStackedSection albums={albums} />
      )}
      {albumDisplayType === "grid" && <AlbumGridSection albums={albums} />}
    </>
  );
}
