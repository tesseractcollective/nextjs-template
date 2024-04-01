import React from "react";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileSnapSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <div className="">
      <section className="container py-16 mx-auto w-full px-4 max-w-8xl">
        <div className="w-full transition">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center transition mb-16">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
          {profiles.map((profile) => (
            <Fade
              direction="up"
              cascade
              triggerOnce
              damping={0.015}
              key={profile.profileSlug}
              className="max-w-xs w-full mx-auto"
            >
              <LinkItem
                link={
                  profile?.externalLink
                    ? profile.externalLink
                    : `/${profile.profileType?.toLowerCase()}/${
                        profile.profileSlug
                      }`
                }
                cssClass="mx-auto flex items-center justify-center flex-col w-full transition-all rotate-0 hover:rotate-6 focus-visible:rotate-6 group max-w-max hover:outline-bg-secondary outline outline-none"
              >
                <div className="animate-col-width mx-auto md:mx-0 w-full bg-text-color">
                  <div className="h-full profile-card w-full relative">
                    {!!profile?.avatarImage?.url && (
                      <div className="p-0 m-0 w-full relative">
                        <Image
                          src={profile.avatarImage.url}
                          alt={(profile.name && profile.name) || ""}
                          width={0}
                          height={0}
                          sizes="100%"
                          className="w-[240px] h-[240px] object-cover mx-auto border-8 border-text-color group-hover:border-[16px] group-focus:border-[16px] transition-all"
                        />
                      </div>
                    )}
                    <div className="flex flex-col items-center justify-center text-center py-2 px-4 relative z-10 overflow-hidden">
                      <Fade triggerOnce direction="left">
                        {!!profile.name && (
                          <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-bg mt-0 text-center group-hover:tracking-widest group-focus:tracking-widest transition-all max-w-[200px]">
                            {profile.name}
                          </h3>
                        )}
                      </Fade>
                    </div>
                  </div>
                </div>
              </LinkItem>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}
