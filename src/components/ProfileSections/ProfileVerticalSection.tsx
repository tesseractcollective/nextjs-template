import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";

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
        <div className="w-full transition">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-5xl mx-auto opacity-80 uppercase text-center font-bold mb-8">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div className="profile-vertical-gallery flex items-start justify-center my-0 flex-col lg:flex-row relative w-full min-h-[75vh]">
          {profiles.map((profile) => (
            <Link
              key={profile.profileSlug}
              className="relative group vertical-profile h-[28rem] w-full lg:w-[20vw] hover:lg:w-[60vw] focus:lg:w-[60vw] transition-all duration-[400ms] lg:h-full cursor-pointer"
              href={
                profile.externalLink ||
                `/${profile.profileType?.toLowerCase()}/${profile.profileSlug}`
              }
            >
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
              <p className="absolute z-40 bottom-0 p-0 m-0 font-bold uppercase left-0 text-4xl group-hover:text-primary transition-all duration-[400ms]">
                {profile.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
