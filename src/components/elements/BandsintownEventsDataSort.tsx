import React from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import BandsintownEvents from "@/components/elements/BandsintownEvents";

type bandsintownEventsDataType = {
  bandsintownKey: string;
  profileType: string;
};

type EventListProps = {
  isSpanish?: boolean;
  mapKey: string;
  icon: string;
  bandsintownEventsData: bandsintownEventsDataType;
  profiles: ProfileFieldsFragment[];
};

const BandsintownEventsDataSort: React.FC<EventListProps> = ({
  bandsintownEventsData,
  mapKey,
  icon,
  profiles,
}) => {
  if (!profiles || !bandsintownEventsData) return <></>;
  const { bandsintownKey, profileType } = bandsintownEventsData;
  const normalizeString = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n"); // Specific handling for "ñ" to "n"

  const artistNames = profiles
    .filter(
      (profile) =>
        normalizeString(profile?.profileType || "") ===
        normalizeString(profileType || "")
    )
    .filter((profile) => profile?.primaryProfile === true)
    .map((item) => item?.name)
    .filter((name) => name !== null && name !== undefined)
    .filter((name): name is string => typeof name === "string");

  const FilteredProfiles = profiles
    .filter(
      (profile) =>
        normalizeString(profile?.profileType || "") ===
        normalizeString(profileType || "")
    )
    .filter((profile) => profile.primaryProfile === true)
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
      const nameA = normalizeString(profileA.name || "");
      const nameB = normalizeString(profileB.name || "");

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
    .filter((profile) => profile.primaryProfile !== false);

  return (
    <>
      <BandsintownEvents
        bandsintownKey={bandsintownKey}
        artistNames={artistNames}
        mapKey={mapKey}
        icon={icon}
        profiles={FilteredProfiles}
      />
    </>
  );
};

export default BandsintownEventsDataSort;
