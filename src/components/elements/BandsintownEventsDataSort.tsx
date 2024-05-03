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
  const artistNames = profiles
    .filter(
      (profile) =>
        profile?.profileType?.toLowerCase() === profileType?.toLowerCase()
    )
    .map((item) => item?.name)
    .filter((name) => name !== null && name !== undefined)
    .filter((name): name is string => typeof name === "string");

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
