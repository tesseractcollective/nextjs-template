import React from "react";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import "./ProfileUniversalSection.scss";
import LinkItem from "@/components/LinkItem";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileAlternateSection({
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
            <Fade triggerOnce className="w-full max-w-8xl gap-8  mx-auto">
              {profiles.map((profile, index) => (
                <div
                  key={profile.profileSlug}
                  className={`flex flex-col w-full mx-auto my-8 max-w-8xl px-4 justify-between items-center ${
                    index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* {!!profile.avatarImage?.url &&
                    profile.profileSlug &&
                    profile.profileType && (
                      <LinkItem
                        link={
                          profile?.externalLink
                            ? profile.externalLink
                            : `/${profile.profileType?.toLowerCase()}/${
                                profile.profileSlug
                              }`
                        }
                        cssClass="profile-alternate block grayscale hover:grayscale-0 transition-all relative max-w-3xl min-h-[21.5rem] lg:min-h-[26rem] min-w-[21.5rem] lg:min-w-[26rem] max-w-3xl h-full w-full duration-[400ms]"
                      >
                        <Image
                          src={profile.avatarImage.url}
                          alt={profile.name || ""}
                          width={0}
                          height={0}
                          sizes="100%"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </LinkItem>
                    )} */}

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
                    <h3 className="border-primary border-b w-full p-2 text-4xl uppercase border-r lg:border-t-0 border-t">
                      {profile.name}
                    </h3>
                    <div className="border-primary py-4 px-2 border-l">
                      <p>{profile.miniBio}</p>
                      <SocialMediaIcons
                        fadeDirection="up"
                        cssClass="flex flex-row profile-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-start text-text-color gap-x-1 rotate-icons my-2"
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
                        cssClass="bg-primary max-w-max text-text-color flex px-4 py-2 text-2xl uppercase tracking-wide mr-auto ml-0"
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
