import React, { useEffect } from "react";
import Link from "next/link";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import "./ProfileUniversalSection.scss";
import LinkItem from "@/components/LinkItem";
import Image from "next/image";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}
type UseScript = (url: string) => void;

const useScript: UseScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function ProfileYoutubeSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  useScript("https://apis.google.com/js/platform.js");
  if (!profiles) return <></>;
  return (
    <>
      <div className="relative">
        <section className="my-16 mx-auto w-full  flex flex-wrap">
          <div className="w-full transition">
            {!!profileSectionTitle && (
              <h3 className="text-2xl md:text-5xl mx-auto opacity-80 uppercase text-center font-bold mb-8">
                {profileSectionTitle}
              </h3>
            )}
          </div>
          <div className="flex flex-row flex-wrap w-full transition max-w-8xl px-6 md:px-6 mx-auto gap-8">
            {profiles.map((profile) => (
              <div
                key={profile.profileSlug}
                className="block w-full md:w-2/4 lg:w-1/4 xl:w-1/5 transition-all relative profile-universal-hover mx-auto group"
              >
                <>
                  <div
                    className="g-ytsubscribe"
                    data-channelid="UCEIYjmRvpgwCfCX7vG6fD8w"
                    data-layout="full"
                    data-theme="dark"
                    data-count="hidden"
                  ></div>
                </>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
