import React from "react";
import Link from "next/link";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileUniversalSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <>
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
                  {!!profile.avatarImage?.url &&
                    profile.profileSlug &&
                    profile.profileType && (
                      <Link
                        href={`/${profile.profileType?.toLowerCase()}/${
                          profile.profileSlug
                        }`}
                        className="profile-universal h-0 bg-center bg-no-repeat bg-cover pb-[100%] rounded-xl block grayscale group-hover:grayscale-0 transition-all"
                        style={{
                          backgroundImage: `url(${profile.avatarImage?.url})`,
                        }}
                      />
                    )}
                  <div className="p-2">
                    {profile.profileSlug && profile.profileType && (
                      <Link
                        href={`/${profile.profileType?.toLowerCase()}/${
                          profile.profileSlug
                        }`}
                        className="relative my-0 py-0 text-left mx-auto text-text-color text-lg md:text-2xl lg:!text-3xl !font-bold transition-all z-[2] group-focus:gradient-text text-zink !no-underline !border-none group-hover:text-primary uppercase profile-universal-text"
                      >
                        {profile.name}
                      </Link>
                    )}
                    <SocialMediaIcons
                      fadeDirection="up"
                      cssClass="flex flex-row profile-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-start text-text-color gap-x-1 rotate-icons"
                      instagramLinkProp={profile?.instagramLink || undefined}
                      spotifyLinkProp={profile?.spotifyLink || undefined}
                      facebookLinkProp={profile?.facebookLink || undefined}
                      twitterLinkProp={profile?.twitterLink || undefined}
                      youtubeLinkProp={profile?.youtubeLink || undefined}
                      tikTokLinkProp={profile?.tikTokLink || undefined}
                      appleMusicLinkProp={profile?.appleMusicLink || undefined}
                      pandoraLinkProp={profile?.pandoraLink || undefined}
                      soundcloudLinkProp={profile?.soundcloudLink || undefined}
                      linkedinLinkProp={profile?.linkedinLink || undefined}
                      emailLinkProp={profile.email || undefined}
                      phoneLinkProp={profile.phoneNumber || undefined}
                      displayVcf={profile.displayVcf || undefined}
                      name={profile.name || undefined}
                      avatar={profile.avatarImage?.url || undefined}
                      calendlyLinkProp={profile.calendlyLink || undefined}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    </>
  );
}
