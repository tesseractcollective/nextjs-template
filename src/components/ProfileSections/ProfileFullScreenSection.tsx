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
    <div>
      {profiles.map((profile) => (
        <section key={profile.profileSlug} className="h-[100vh] relative bg-bg">
          <div
            className={`absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[400ms] bg-fixed opacity-100`}
            style={{
              backgroundImage: `url(${profile.avatarImage?.url})`,
            }}
          ></div>
          <div className="max-w-8xl px-4 lg:px-8 lg:py-20 mx-auto bottom-20 lg:bottom-5 absolute w-full inset-x-0">
            <Fade direction="up" triggerOnce className="gap-y-2">
              <Link href={`/${profile.profileSlug}`}>
                {profile.profileLogo?.url && profile.name && (
                  <Image
                    src={profile.profileLogo?.url}
                    sizes="100%"
                    alt={profile.name}
                    width={0}
                    height={0}
                    className="w-12 lg:w-16 h-12 lg:h-16 object-contain rounded mb-4"
                  ></Image>
                )}
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
        </section>
      ))}
    </div>
  );
}
