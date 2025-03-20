import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import LinkItem from "../LinkItem";

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
          <div className="grid gap-4 grid-cols-1 w-full mx-auto lg:mx-0 transition">
            {profiles.map((profile, index) => (
              <div
                key={profile.profileSlug}
                className={`
                group relative overflow-hidden rounded-2xl bg-white 
                transition-all duration-300 ease-in-out
                ${index % 3 === 1 ? "lg:translate-y-8 xl:translate-y-8" : ""}
                ${index % 3 === 2 ? "lg:translate-y-16 xl:translate-y-16" : ""}
              `}
              >
                <LinkItem
                  cssClass="w-full h-auto"
                  link={
                    profile?.externalLink
                      ? profile.externalLink
                      : `/${profile.profileType?.toLowerCase()}/${
                          profile.profileSlug
                        }`
                  }
                  parentCssClass="relative w-full pb-[56.25%] rounded-2xl overflow-hidden"
                >
                  {profile.avatarImage?.url && (
                    <Image
                      src={profile.avatarImage.url}
                      alt={profile.name || ""}
                      quality={100}
                      width={0}
                      height={0}
                      sizes="100%"
                      layout="fill"
                      className="transition-all duration-300 ease-in-out rounded-2xl object-cover w-full h-auto hover:shadow-xl shadow-none group-hover:scale-105"
                    />
                  )}
                </LinkItem>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
