import React, { useEffect, useState } from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SpotifyProfileArtistAlbums from "@/components/elements/SpotifyAPI/SpotifyProfileArtistAlbums";

interface ProfilesProps {
  profiles?: ProfileFieldsFragment[];
  spotifyClientSecret: string;
  spotifyClientId: string;
}

export default function ProfileDiscographySection({
  profiles,
  spotifyClientSecret,
  spotifyClientId,
}: ProfilesProps) {
  if (!profiles) return <></>;

  // Filter out profiles that do not have a valid name
  const profileNames = profiles
    .map((profile) => profile.name)
    .filter((name): name is string => name !== null && name !== undefined);

  return (
    <div className="relative">
      {!!profileNames.length &&
        profileNames.length >= 1 &&
        spotifyClientSecret &&
        spotifyClientId && (
          <SpotifyProfileArtistAlbums
            artistNames={profileNames}
            spotifyClientId={spotifyClientId}
            spotifyClientSecret={spotifyClientSecret}
          />
        )}
    </div>
  );
}
