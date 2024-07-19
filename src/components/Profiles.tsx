import React from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import ProfileEPKSection from "@/components/ProfileSections/ProfileEPKSection";
import ProfileRecordSection from "@/components/ProfileSections/ProfileRecordSection";
import ProfileVerticalSection from "@/components/ProfileSections/ProfileVerticalSection";
import ProfileGridSection from "@/components/ProfileSections/ProfileGridSection";
import ProfileOffsetSection from "@/components/ProfileSections/ProfileOffsetSection";
import ProfileUniversalSection from "@/components/ProfileSections/ProfileUniversalSection";
import ProfileCardModalSection from "@/components/ProfileSections/ProfileCardModalSection";
import ProfileTeamSection from "@/components/ProfileSections/ProfileTeamSection";
import ProfileSnapSection from "@/components/ProfileSections/ProfileSnapSection";
import ProfileDefaultSection from "@/components/ProfileSections/ProfileDefaultSection";
import ProfileFullScreenSection from "@/components/ProfileSections/ProfileFullScreenSection";
import ProfileMyspaceSection from "@/components/ProfileSections/ProfileMyspaceSection";
import ProfileSportsSection from "@/components/ProfileSections/ProfileSportsSection";
import ProfileCardLinkSection from "@/components/ProfileSections/ProfileCardLinkSection";
import ProfileYoutubeSection from "@/components/ProfileSections/ProfileYoutubeSection";
import ProfileVideoSection from "@/components/ProfileSections/ProfileVideoSection";
import ProfileDiscographySection from "@/components/ProfileSections/ProfileDiscographySection";
import ProfileBiographySection from "@/components/ProfileSections/ProfileBiographySection";
import ProfilesHalfScreenSection from "@/components/ProfileSections/ProfilesHalfScreenSection";

interface ProfilesProps {
  profileSectionTitle?: string;
  profileType?: string;
  profileLayoutStyle?: string;
  profiles?: ProfileFieldsFragment[];
  siteID?: string;
  siteLogo?: string;
  siteDomain: string;
  spotifyClientId?: string;
  spotifyClientSecret?: string;
}

export default function Profiles({
  profileSectionTitle,
  profileType,
  profileLayoutStyle,
  profiles,
  siteID,
  siteLogo,
  siteDomain,
  spotifyClientId,
  spotifyClientSecret,
}: ProfilesProps) {
  if (!profiles) return <></>;
  const FilteredProfiles = profiles
    .filter(
      (profile) =>
        profile?.profileType?.toLowerCase() === profileType?.toLowerCase()
    )
    .sort((profileA, profileB) => {
      const orderA = profileA.order || 99;
      const orderB = profileB.order || 99;

      if (orderA < orderB) {
        return -1;
      }
      if (orderA > orderB) {
        return 1;
      }

      // If orders are equal, sort by name
      const nameA = profileA.name?.toLowerCase() || "";
      const nameB = profileB.name?.toLowerCase() || "";

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  // grid √
  // offset √
  // record √
  // universal √
  // vertical √
  // epk √
  // cardLink √
  // cardModal
  // slider
  // team
  // basic
  // mason
  // blob
  // wavy
  // netflix
  // youtube √
  // myspace
  // fullScreen √
  // video
  // gridSelect
  // fullScreen

  console.log(profileLayoutStyle);
  if (profileLayoutStyle === "cardModal")
    return (
      <ProfileCardModalSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "cardLink")
    return (
      <ProfileCardLinkSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (
    profileLayoutStyle === "discography" &&
    !!spotifyClientId &&
    !!spotifyClientSecret
  )
    return (
      <ProfileDiscographySection
        profiles={FilteredProfiles}
        spotifyClientId={spotifyClientId}
        spotifyClientSecret={spotifyClientSecret}
      />
    );
  if (
    profileLayoutStyle === "biography" &&
    !!spotifyClientId &&
    !!spotifyClientSecret
  )
    return (
      <ProfileBiographySection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
        spotifyClientId={spotifyClientId}
        spotifyClientSecret={spotifyClientSecret}
      />
    );
  if (profileLayoutStyle === "epk" && !!siteID)
    return <ProfileEPKSection profiles={FilteredProfiles} siteID={siteID} />;
  if (profileLayoutStyle === "team")
    return (
      <ProfileTeamSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "snap")
    return (
      <ProfileSnapSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "myspace")
    return (
      <ProfileMyspaceSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "universal")
    return (
      <ProfileUniversalSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "offset")
    return (
      <ProfileOffsetSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "grid")
    return (
      <ProfileGridSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "vertical")
    return (
      <ProfileVerticalSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "record")
    return (
      <ProfileRecordSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "video")
    return <ProfileVideoSection profiles={FilteredProfiles} />;
  if (profileLayoutStyle === "youtube")
    return (
      <ProfileYoutubeSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
        siteDomain={siteDomain}
      />
    );
  if (profileLayoutStyle === "fullScreen")
    return (
      <ProfileFullScreenSection
        profiles={FilteredProfiles}
        profileSectionTitle={profileSectionTitle}
      />
    );
  if (profileLayoutStyle === "halfScreen")
    return <ProfilesHalfScreenSection profiles={FilteredProfiles} />;
  if (profileLayoutStyle === "sport" && !!siteLogo)
    return (
      <ProfileSportsSection profiles={FilteredProfiles} siteLogo={siteLogo} />
    );
  return (
    <ProfileDefaultSection
      profiles={FilteredProfiles}
      profileSectionTitle={profileSectionTitle}
    />
  );
}
