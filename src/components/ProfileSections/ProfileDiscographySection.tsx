import React, { useEffect, useState } from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SpotifyArtistAlbums from "@/components/elements/SpotifyAPI/SpotifyArtistAlbums";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
  spotifyClientSecret: string;
  spotifyClientId: string;
}
export default function ProfileDiscographySection({
  profileSectionTitle,
  profiles,
  spotifyClientSecret,
  spotifyClientId,
}: ProfilesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(profiles || []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProfiles(profiles || []);
    } else {
      setFilteredProfiles(
        profiles?.filter((profile) =>
          profile.name?.toLowerCase().includes(searchQuery.toLowerCase())
        ) || []
      );
    }
  }, [searchQuery, profiles]);

  if (!profiles) return <></>;

  return (
    <>
      <div className="relative all-text-dark bg-invert">
        <section className="my-16 mx-auto w-full flex-col flex flex-wrap max-w-8xl">
          <div className="w-full transition">
            {!!profileSectionTitle && (
              <h3 className="text-2xl md:text-5xl mx-auto opacity-80 uppercase text-center font-bold mb-8">
                {profileSectionTitle}
              </h3>
            )}
          </div>
          <div className="mb-8 px-8 max-w-xl">
            <div className="relative mb-2 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              {/* <!--Search icon--> */}
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full transition max-w-8xl px-6 md:px-6 mx-auto gap-8">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.profileSlug}
                className="block w-full transition-all relative profile-universal-hover mx-auto groupm mb-8 p-4 border rounded"
              >
                {profile?.name && (
                  <h1 className="text-2xl font-bold mb-4 uppercase">
                    {profile.name}
                  </h1>
                )}

                {!!profile?.name && spotifyClientSecret && spotifyClientId && (
                  <SpotifyArtistAlbums
                    artistName={profile?.name}
                    spotifyAlbumDisplay="discography"
                    spotifyClientId={spotifyClientId}
                    spotifyClientSecret={spotifyClientSecret}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
