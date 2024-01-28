import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileGridSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <div className="relative">
      <section className="my-16 mx-auto w-full  flex flex-wrap">
        <div className="w-full transition">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-5xl mx-auto opacity-80 uppercase text-center font-bold mb-8">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div className="flex flex-row flex-wrap w-full mx-0 transition">
          {profiles.map((profile) => (
            <div
              key={profile.profileSlug}
              tabIndex={0}
              className="block w-2/4 md:w-1/3 lg:w-1/4 transition-all relative profile-hover overflow-hidden"
            >
              {!!profile.avatarImage?.url && (
                <div
                  className="profile h-0 bg-center bg-no-repeat bg-cover pb-[100%]"
                  style={{
                    backgroundImage: `url(${profile.avatarImage?.url})`,
                  }}
                >
                  <div className="profile-overlay p-5 absolute inset-0">
                    <div className="absolute top-5 left-5 z-[2]">
                      <SocialMediaIcons
                        fadeDirection="up"
                        cssClass="hidden sm:flex flex-row profile-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-start text-primary gap-x-2 flex-wrap text-shadow rotate-icon"
                        instagramLinkProp={profile?.instagramLink || undefined}
                        spotifyLinkProp={profile?.spotifyLink || undefined}
                        facebookLinkProp={profile?.facebookLink || undefined}
                        twitterLinkProp={profile?.twitterLink || undefined}
                        youtubeLinkProp={profile?.youtubeLink || undefined}
                        tikTokLinkProp={profile?.tikTokLink || undefined}
                        appleMusicLinkProp={
                          profile?.appleMusicLink || undefined
                        }
                        pandoraLinkProp={profile?.pandoraLink || undefined}
                        soundcloudLinkProp={
                          profile?.soundcloudLink || undefined
                        }
                        linkedinLinkProp={profile?.linkedinLink || undefined}
                        emailLinkProp={profile.email || undefined}
                        phoneLinkProp={profile.phoneNumber || undefined}
                        displayVcf={profile.displayVcf || undefined}
                        name={profile.name || undefined}
                        avatar={profile.avatarImage?.url || undefined}
                        calendlyLinkProp={profile.calendlyLink || undefined}
                      />
                    </div>
                    {profile.profileSlug && profile.profileType && (
                      <Link
                        href={`/${profile.profileType?.toLowerCase()}/${
                          profile.profileSlug
                        }`}
                        tabIndex={0}
                        className="absolute bottom-3 md:bottom-5 left-3 md:left-5 my-0 py-0 flex flex-row items-center justify-center text-left mx-auto text-primary hover:!text-secondary text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-all group z-[2] focus:!text-secondary text-shadow"
                      >
                        <span className="max-w-[17rem]">{profile.name}</span>
                        <FontAwesomeIcon
                          icon={faArrowRight as IconProp}
                          className="fa-fw h-0 w-0 opacity-0 group-hover:h-4 group-hover:sm:w-4 group-hover:sm:opacity-100 -ml-2 group-hover:sm:ml-2 transition-all group-focus:sm:w-4 group-focus:sm:opacity-100 group-focus:sm:h-4 group-focus:sm:ml-2"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
