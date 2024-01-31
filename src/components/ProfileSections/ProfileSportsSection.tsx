import React from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";

interface ProfilesProps {
  siteLogo: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileSportsSection({
  profiles,
  siteLogo,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <section className="my-16 mx-auto w-full px-4 max-w-8xl flex flex-col">
      <div className="flex items-center justify-center gap-4 w-full mx-auto lg:mx-0 transition flex-wrap">
        {profiles.map((profile) => (
          <Fade
            direction="up"
            cascade
            triggerOnce
            damping={0.015}
            key={profile.profileSlug}
            className="max-w-[15rem] mx-auto"
          >
            <Link
              href={`/${profile.profileType?.toLowerCase()}/${
                profile.profileSlug
              }`}
              title={(profile.name && profile.name) || ""}
              className="sports-card block relative h-[310px] w-[200px] border-[15px] border-primary transition-all group"
            >
              <Image
                src={siteLogo}
                alt={(profile.name && profile.name) || ""}
                width={0}
                height={0}
                sizes="100%"
                className="team_logo object-contain h-[60px] w-[60px]"
              />
              {!!profile?.avatarImage?.url && (
                <Image
                  src={profile?.avatarImage?.url}
                  alt={(profile.name && profile.name) || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="player object-cover"
                />
              )}
              {profile.name && (
                <p className="profile-sport-name block">{profile.name}</p>
              )}
            </Link>
          </Fade>
        ))}
      </div>
    </section>
  );
}
