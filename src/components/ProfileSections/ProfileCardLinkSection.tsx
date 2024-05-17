import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import "./ProfileCardLinkSection.scss";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileCardLinkSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;
  const profilesTotal = profiles.length;
  return (
    <div className="relative">
      <section className="mx-auto w-full flex flex-wrap">
        <div className="w-full">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-5xl mx-auto opacity-100 uppercase text-center font-bold mb-8">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div
          className={`grid ${
            profilesTotal === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          } w-full`}
        >
          {profiles.map((profile, index) => {
            return (
              <LinkItem
                key={profile.profileSlug}
                cssClass={`group w-full transition-all relative profile-card-link overflow-hidden aspect-video`}
                link={
                  profile?.externalLink
                    ? profile.externalLink
                    : `/${profile.profileType?.toLowerCase()}/${
                        profile.profileSlug
                      }`
                }
                parentCssClass="h-full w-full"
              >
                <div>
                  <div className="absolute z-[20] profile-card-link-name inset-0 group-hover:bg-[#000] group-focus:bg-[#000] w-full h-full">
                    <h3 className="my-0 py-0 profile-card-link-name absolute top-[30]">
                      {profile.name}
                    </h3>
                    <div className="opacity-0 group-hover:sm:opacity-100 group-focus:sm:opacity-100 absolute bottom-5 right-5 bg-primary text-text-color w-12 h-12 aspect-1 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faArrowRight as IconProp}
                        className="fa-fw -rotate-45 w-20 h-20"
                      />
                    </div>
                  </div>
                  {!!profile.avatarImage?.url && (
                    <div
                      className="profile h-0 bg-center bg-no-repeat bg-cover pb-[56.2%] relative"
                      style={{
                        backgroundImage: `url(${profile.avatarImage?.url})`,
                      }}
                    ></div>
                  )}
                </div>
              </LinkItem>
            );
          })}
        </div>
      </section>
    </div>
  );
}
