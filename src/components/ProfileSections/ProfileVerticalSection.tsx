import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import "./ProfileVerticalSection.scss";
import LinkItem from "@/components/LinkItem";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileVerticalSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <div className="relative">
      <section className="my-0 mx-auto w-full flex flex-wrap">
        <div className="profile-vertical-gallery flex items-start justify-center my-0 flex-col lg:flex-row relative w-full min-h-[75vh]">
          {profiles.map((profile) => (
            <LinkItem
              key={profile.profileSlug}
              parentCssClass="relative group vertical-profile h-[28rem] w-full lg:w-[20vw] hover:lg:w-[60vw] focus-within:lg:w-[60vw] transition-all duration-[400ms] lg:h-full cursor-pointer"
              link={
                profile.externalLink ||
                `/${profile.profileType?.toLowerCase()}/${profile.profileSlug}`
              }
            >
              <>
                {!!profile.avatarImage?.url && (
                  <Image
                    sizes="100%"
                    src={profile.avatarImage?.url}
                    alt={profile.name || ""}
                    width={0}
                    height={0}
                    className="grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-[400ms] object-cover h-full w-full overflow-hidden"
                  />
                )}

                {profile.profileLogo?.url ? (
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-32 h-32 absolute bottom-1 left-1 object-contain saturate-0 group-hover:saturate-100 group-focus-within:saturate-100 transition-all"
                    src={profile.profileLogo?.url}
                    alt={profile.name || ""}
                  />
                ) : (
                  <p className="absolute z-40 bottom-0 p-0 m-0 font-bold uppercase left-0 text-4xl group-hover:text-primary transition-all duration-[400ms]">
                    {profile.name}
                  </p>
                )}
              </>
            </LinkItem>
          ))}
        </div>
      </section>
    </div>
  );
}
