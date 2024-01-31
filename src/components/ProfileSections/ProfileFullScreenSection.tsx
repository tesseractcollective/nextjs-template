import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileFullScreenSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <div className="relative">
      {profiles.map((profile) => (
        <section
          key={profile.profileSlug}
          className="h-[100vh] bg-bg top-0 sticky"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat duration-[400ms] bg-fixed"></div>
          <div className="max-w-8xl px-4 lg:px-8 lg:py-20 mx-auto bottom-20 absolute w-full inset-x-0 z-10">
            <Fade direction="up" triggerOnce className="gap-y-2">
              <Link href={`/${profile.profileType}/${profile.profileSlug}`}>
                <Fade direction="up" triggerOnce>
                  {profile.profileLogo?.url && profile.name && (
                    <Image
                      src={profile.profileLogo?.url}
                      sizes="100%"
                      alt={profile.name}
                      width={0}
                      height={0}
                      className="w-24 lg:w-44 h-24 lg:h-44 object-contain rounded mb-4"
                    ></Image>
                  )}
                </Fade>
                {!!profile.name && (
                  <h1 className="text-2xl md:text-6xl xl:text-7xl text-shadow mt-0 mb-1 py-0 text-left text-[white] font-bold uppercase text-shadow">
                    {profile.name}
                  </h1>
                )}
                {!!profile.role && (
                  <h2 className="text-shadow my-0 py-0 text-left uppercase tracking-widest font-bold text-md lg:text-lg opacity-80 max-w-md text-[white] text-shadow mb-2">
                    {profile.role}
                  </h2>
                )}
                <p className="bg-[white] text-[black] py-2 px-8 max-w-max uppercase font-bold rounded">
                  Info
                </p>
              </Link>
            </Fade>
          </div>
          {profile.avatarImage?.url && (
            <Image
              src={profile.avatarImage?.url}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-full object-cover absolute inset-0 z-0 h-100vh"
            />
          )}
        </section>
      ))}
    </div>
  );
}
