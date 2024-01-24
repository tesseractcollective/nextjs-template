import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileDefaultSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <div className="relative texture-background overflow-hidden">
      <section className="container my-16 mx-auto w-full px-4 md:11/12 xl:w-10/12  flex flex-wrap">
        <div className="w-full lg:5/12 xl:w-4/12 transition">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center xl:text-left transition-all">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div className="flex flex-row flex-wrap w-full transition-all max-w-8xl px-6 md:px-6 gap-x-8 gap-y-8 lg:7/12 xl:w-8/12 mx-auto lg:mx-0">
          {profiles.map((profile) => (
            <Fade
              direction="up"
              cascade
              triggerOnce
              damping={0.1}
              key={profile.profileSlug}
              className="block w-full md:w-2/4 lg:w-3/4 xl:w-1/4 transition-all relative mx-auto"
            >
              {!!profile.avatarImage?.url &&
                profile.profileSlug &&
                profile.profileType && (
                  <Link
                    href={`/${profile.profileType?.toLowerCase()}/${
                      profile.profileSlug
                    }`}
                    className="h-full no-underline mx-auto relative block group w-full"
                    key={profile.profileSlug}
                  >
                    <Image
                      src={profile.avatarImage?.url}
                      alt={profile.name || ""}
                      className="mx-auto mb-2 w-full block box-shadow border-round grayscale-0 hover:grayscale group-hover:grayscale group-focus:grayscale transition-all"
                      height={0}
                      width={0}
                      sizes="100%"
                      style={{
                        maxHeight: "400px",
                        maxWidth: "400px",
                        objectFit: "cover",
                        aspectRatio: 1,
                      }}
                    />

                    <p className="my-0 py-0 text-center text-text-color group-hover:text-secondary group-focus:text-secondary max-w-max overflow-hidde relative mx-auto">
                      <span>{profile.name}</span>
                      {/* <FontAwesomeIcon
                    icon={faArrowRight as IconProp}
                    className="fa-fw h-0 w-0 opacity-0 group-hover:h-4 group-hover:w-4 group-hover:opacity-100 transition-all absolute right-0 group-hover:-right- top-1"
                  /> */}
                    </p>
                  </Link>
                )}
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}
