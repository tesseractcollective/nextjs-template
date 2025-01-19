import React from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import "./ProfileUniversalSection.scss";
import LinkItem from "@/components/LinkItem";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileMasonSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <>
      <>
        <div className="relative">
          <section className="my-16 mx-auto w-full flex flex-wrap">
            {/* <div className="w-full transition">
              {!!profileSectionTitle && (
                <h3 className="text-2xl lg:text-5xl mx-auto opacity-80 uppercase text-center font-bold mb-8">
                  {profileSectionTitle}
                </h3>
              )}
            </div> */}
            <Fade
              triggerOnce
              className="w-full max-w-8xl gap-y-8 gap-x-16  mx-auto"
            >
              {profiles.map((profile, index) => (
                <div
                  key={profile.profileSlug}
                  className={`flex flex-col w-full mx-auto my-8 max-w-8xl px-4 justify-between items-start ${
                    index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {!!profile.avatarImage?.url && (
                    <Image
                      src={profile.avatarImage.url}
                      alt={profile.name || ""}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="block w-full h-full object-cover px-2 max-w-2xl"
                    />
                  )}

                  <div className="py-0 lg:py-2 px-2 w-full max-w-2xl">
                    <h2 className="px-4 py-0 my-0 opacity-60 uppercase tracking-widest text-[10px]">
                      {profile.miniBio}
                    </h2>
                    <h3 className="border-primary border-b w-full p-2 text-4xl uppercase border-r lg:border-t-0 border-t">
                      {profile.name}
                    </h3>
                    <div className="border-primary py-4 px-2 border-l">
                      {profile.fullBio?.html && (
                        <div className="mt-2 mx-auto text-text-color body-parsed-text text-left px-4">
                          {parse(profile.fullBio?.html)}
                        </div>
                      )}
                      <SocialMediaIcons
                        fadeDirection="up"
                        cssClass="flex flex-row profile-card-social-icons items-center mx-0 px-4 mt-1 mb-4 justify-start text-text-color gap-x-4 rotate-icons my-2"
                        instagramLinkProp={profile?.instagramLink || undefined}
                        spotifyLinkProp={profile?.spotifyLink || undefined}
                        facebookLinkProp={profile?.facebookLink || undefined}
                        twitterLinkProp={profile?.twitterLink || undefined}
                        youtubeLinkProp={profile?.youtubeLink || undefined}
                        tikTokLinkProp={profile?.tikTokLink || undefined}
                        appleMusicLinkProp={
                          profile?.appleMusicLink || undefined
                        }
                        pandoraLinkProp={profile?.pandoraLink || undefined}
                        soundcloudLinkProp={
                          profile?.soundcloudLink || undefined
                        }
                        linkedinLinkProp={profile?.linkedinLink || undefined}
                        emailLinkProp={profile.email || undefined}
                        phoneLinkProp={profile.phoneNumber || undefined}
                        displayVcf={profile.displayVcf || undefined}
                        name={profile.name || undefined}
                        avatar={profile.avatarImage?.url || undefined}
                        calendlyLinkProp={profile.calendlyLink || undefined}
                      />
                    </div>
                    {profile.profileSlug && profile.profileType && (
                      <LinkItem
                        link={
                          profile?.externalLink
                            ? profile.externalLink
                            : `/${profile.profileType?.toLowerCase()}/${
                                profile.profileSlug
                              }`
                        }
                        label="info"
                        cssClass="bg-primary max-w-max text-text-color flex px-8 py-2 text-2xl uppercase tracking-wide mr-auto ml-0"
                      ></LinkItem>
                    )}
                  </div>
                </div>
              ))}
            </Fade>
          </section>
        </div>
      </>
    </>
  );
}
