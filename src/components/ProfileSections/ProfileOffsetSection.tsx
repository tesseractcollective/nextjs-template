import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileOffsetSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <>
      <div className="relative texture-background overflow-hidden offset-profiles">
        <section className="container my-16 mx-auto w-full px-4 md:11/12 xl:w-10/12  flex flex-wrap">
          <div className="w-full lg:5/12 xl:w-4/12 transition">
            {!!profileSectionTitle && (
              <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center xl:text-left transition">
                {profileSectionTitle}
              </h3>
            )}
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  lg:7/12 xl:w-8/12 mx-auto lg:mx-0 transition">
            {profiles.map((profile) => (
              <Fade
                direction="up"
                cascade
                triggerOnce
                damping={0.1}
                key={profile.profileSlug}
                className="mx-auto"
              >
                <Link
                  href={`/${profile.profileType?.toLowerCase()}/${
                    profile.profileSlug
                  }`}
                  className="profile-card h-full no-underline mx-auto relative mb-4 inline-block max-w-max group"
                  key={profile.profileSlug}
                >
                  {!!profile.avatarImage?.url && (
                    <div className="relative">
                      <Image
                        src={profile.avatarImage?.url}
                        alt=""
                        className="profile-card-image object-center mb-2 transition max-w-xs w-full transition-rounded"
                        width={0}
                        height={0}
                        sizes="100%"
                      />
                      <div className="record-border"></div>
                    </div>
                  )}
                  <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-text-color group-hover:text-secondary">
                    <span>{profile.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowRight as IconProp}
                      className="fa-fw h-0 w-0 opacity-0 group-hover:h-4 group-hover:w-4 group-hover:opacity-100"
                    />
                  </p>
                </Link>
              </Fade>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
