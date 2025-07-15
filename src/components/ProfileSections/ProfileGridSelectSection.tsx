import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileGridSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  if (!profiles) return <></>;
  const profilesTotal = profiles.length;
  const primaryProfiles = profiles.filter(
    (profile) => profile?.primaryProfile === true
  );
  const isUnder8 = primaryProfiles.length <= 7;
  console.log(isUnder8);
  return (
    <div className="relative">
      <section className="mx-auto w-full flex flex-wrap">
        <div className="w-full transition">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-5xl mx-auto opacity-100 uppercase text-center font-bold mb-8">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div
          className={`grid grid-cols-2 w-full mx-0 transition ${
            isUnder8
              ? "lg:grid-cols-3 xl:grid-cols-3"
              : "lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {primaryProfiles
            .map((profile, index) => {
              const isHovered =
                hoveredItemIndex !== null && hoveredItemIndex !== index;

              return (
                <div
                  key={profile.profileSlug}
                  tabIndex={0}
                  className={`block w-full transition-all relative profile-hover overflow-hidden`}
                >
                  <LinkItem
                    link={
                      profile?.externalLink
                        ? profile.externalLink
                        : `/${profile.profileType?.toLowerCase()}/${
                            profile.profileSlug
                          }`
                    }
                  >
                    <>
                      {!!profile.avatarImage?.url && (
                        <div
                          className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%] group relative"
                          style={{
                            backgroundImage: `url(${profile.avatarImage?.url})`,
                          }}
                        >
                          <div className="profile-overlay absolute inset-0 z-1">
                            {profile?.profileLogo && (
                              <Image
                                src={profile.profileLogo.url}
                                alt={profile?.name || ""}
                                width={100}
                                height={100}
                                sizes="100px"
                                className="absolute -translate-x-2/4 -translate-y-2/4 z-[2] object-contain w-[64px] aspect-1 m-0 left-2/4 top-6"
                              />
                            )}
                            {profile.profileSlug && profile.profileType && (
                              <h3 className="absolute -translate-x-2/4 -translate-y-2/4 text-text-color z-[2] uppercase font-bold text-center w-full text-lg lg:text-2xl m-0 left-2/4 top-2/4">
                                {profile.name}
                              </h3>
                            )}
                            <div className="profile-overlay p-5 absolute inset-0">
                              {profile.profileSlug && profile.profileType && (
                                <span className="absolute bottom-3 md:bottom-5 right-3 md:right-5 my-0 py-0 flex flex-row items-center justify-center text-left mx-auto text-text-color text-sm lg:text-base font-bold transition-all group z-[2] text-shadow uppercase">
                                  <span className="max-w-[17rem]">
                                    {`View ${profile.profileType}`}
                                  </span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight as IconProp}
                                    className="fa-fw h-0 w-0 opacity-0 group-hover:h-4 group-hover:sm:w-4 group-hover:sm:opacity-100 -ml-2 group-hover:sm:ml-2 transition-all group-focus:sm:w-4 group-focus:sm:opacity-100 group-focus:sm:h-4 group-focus:sm:ml-2"
                                  />
                                </span>
                              )}
                            </div>
                            <div className="opacity-0 group-hover:opacity-70 transition-all inset-0 absolute z-0 bg-bg h-full w-full"></div>
                          </div>
                        </div>
                      )}
                    </>
                  </LinkItem>
                </div>
              );
            })
            .slice(0, 12)}
        </div>
      </section>
    </div>
  );
}
