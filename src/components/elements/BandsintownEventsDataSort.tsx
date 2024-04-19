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

  return (
    <>
      <BandsintownEvents
        bandsintownKey={bandsintownKey}
        artistNames={artistNames}
        mapKey={mapKey}
        icon={icon}
      />
    </>
  );
};

export default BandsintownEventsDataSort;
