import React from "react";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import SocialMediaIcons from "@/components/SocialMediaIcons";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileTeamSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  if (!profiles) return <></>;

  return (
    <div className="">
      <section className="container my-16 mx-auto w-full px-4 md:11/12 xl:w-10/12  flex flex-wrap">
        <div className="w-full transition">
          {!!profileSectionTitle && (
            <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center transition mb-16">
              {profileSectionTitle}
            </h3>
          )}
        </div>
        <div className="flex items-center justify-center gap-4 w-full mx-auto lg:mx-0 transition flex-wrap">
          {profiles.map((profile) => (
            <Fade
              direction="up"
              cascade
              triggerOnce
              damping={0.015}
              key={profile.profileSlug}
              className="max-w-xs w-full"
            >
              <>
                <div className="animate-col-width mx-auto md:mx-0 w-full">
                  <div className="overflow-hidden h-full rounded profile-card w-full relative">
                    {!!profile?.avatarImage?.url && (
                      <div className="p-0 m-0 w-full relative">
                        <Image
                          src={profile?.avatarImage?.url}
                          alt={(profile.name && profile.name) || ""}
                          width={0}
                          height={0}
                          sizes="100%"
                          className="w-[180px] h-[180px] object-cover mx-auto rounded-[100%] border-2 border-primary"
                        />
                      </div>
                    )}
                    <div className="flex flex-col items-center justify-center text-center p-4 relative z-10 overflow-hidden">
                      <Fade triggerOnce direction="left">
                        {!!profile.name && (
                          <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-text-color mt-0 text-center">
                            {profile.name}
                          </h3>
                        )}
                        {!!profile.role && (
                          <h4 className="uppercase mt-0 mb-0 text-xs opacity-80 text-center line-clamp-1 max-w-xs">
                            {profile.role}
                          </h4>
                        )}
                      </Fade>

                      <div className="flex justify-between flex-row w-full">
                        <SocialMediaIcons
                          fadeDirection="up"
                          cssClass="flex flex-row profile-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-center"
                          instagramLinkProp={
                            profile?.instagramLink || undefined
                          }
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
                    </div>
                  </div>
                </div>
              </>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}
