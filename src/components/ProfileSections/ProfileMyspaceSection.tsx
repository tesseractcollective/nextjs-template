import React from "react";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileMyspaceSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <section className="my-16 mx-auto w-full px-4 max-w-4xl flex flex-col">
      {!!profileSectionTitle && (
        <div className="transition bg-secondary flex items-center justify-start p-2 mb-8">
          <h3 className="text-2xl uppercase text-left text-primary">
            {profileSectionTitle}
          </h3>
        </div>
      )}
      <div className="flex items-center justify-start gap-4 w-full mx-auto lg:mx-0 transition flex-wrap">
        {profiles.map((profile) => (
          <Fade
            direction="up"
            cascade
            triggerOnce
            damping={0.015}
            key={profile.profileSlug}
            className="max-w-[9rem] w-full mx-auto block"
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
              <div className="animate-col-width mx-auto md:mx-0 w-full">
                <div className="overflow-hidden h-full rounded myspace-card w-full relative">
                  {!!profile.name && (
                    <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-primary mt-0 text-center">
                      {profile.name}
                    </h3>
                  )}
                  {!!profile?.avatarImage?.url && (
                    <div className="p-0 m-0 w-full relative">
                      <Image
                        src={profile?.avatarImage?.url}
                        alt={(profile.name && profile.name) || ""}
                        width={0}
                        height={0}
                        sizes="100%"
                        className="h-[180px] w-[150px] object-cover mx-auto aspect-[3/4] border-2 border-primary"
                      />
                    </div>
                  )}
                  <Image
                    src="https://media.graphassets.com/MsJsSZzDQryRvRj8f9H5"
                    alt="Online Now"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-[50px] w-[100px] mx-auto object-contain"
                  />
                </div>
              </div>
            </LinkItem>
          </Fade>
        ))}
      </div>
    </section>
  );
}
