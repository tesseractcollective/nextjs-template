import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import parse from "html-react-parser";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SocialMediaIcons from "./SocialMediaIcons";

interface ProfilesProps {
  profileSectionTitle?: string;
  profileType?: string;
  profileLayoutStyle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function Profiles({
  profileSectionTitle,
  profileType,
  profileLayoutStyle,
  profiles,
}: ProfilesProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProfile, setSelctedProfile] =
    useState<ProfileFieldsFragment>();
  if (!profiles) return <></>;
  if (profileLayoutStyle === "cardModal")
    return (
      <>
        <div className="relative texture-background overflow-hidden">
          <section className="container my-16 mx-auto w-full px-4 md:11/12 xl:w-10/12 dark-section flex flex-wrap">
            <div className="w-full transition">
              {!!profileSectionTitle && (
                <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center transition mb-16">
                  {profileSectionTitle}
                </h3>
              )}
            </div>
            <div className="flex items-center justify-center gap-8 w-full mx-auto lg:mx-0 transition flex-wrap">
              {profiles
                .filter(
                  (profile) =>
                    profile?.profileType?.toLowerCase() ===
                    profileType?.toLowerCase()
                )
                .map((profile) => (
                  <Fade
                    direction="up"
                    cascade
                    triggerOnce
                    damping={0.1}
                    key={profile.profileSlug}
                    className="mx-auto max-w-xs w-full"
                  >
                    <>
                      <div className="animate-col-width mx-auto md:mx-0 w-full">
                        <div className="overflow-hidden border border-primary-fade h-full rounded profile-card w-full">
                          {!!profile?.avatarImage?.url && (
                            <div className="h-72 max-w-72 p-0 m-0 w-full">
                              <Image
                                src={profile?.avatarImage?.url}
                                alt={(profile.name && profile.name) || ""}
                                className="object-cover block w-full h-full"
                                sizes="100%"
                                width={0}
                                height={0}
                              />
                            </div>
                          )}
                          <div className="flex flex-col items-start justify-center text-left p-4">
                            {!!profile.name && (
                              <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-text-color mt-0 text-left">
                                {profile.name}
                              </h3>
                            )}
                            {!!profile.role && (
                              <h4 className="uppercase mt-0 mb-0 text-xs opacity-80 text-left line-clamp-1 w-10/12">
                                {profile.role}
                              </h4>
                            )}

                            <div className="flex justify-between flex-row w-full">
                              <SocialMediaIcons
                                cssClass="flex flex-row profile-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-start gap-x-2"
                                instagramLinkProp={
                                  profile?.instagramLink || undefined
                                }
                                spotifyLinkProp={
                                  profile?.spotifyLink || undefined
                                }
                                facebookLinkProp={
                                  profile?.facebookLink || undefined
                                }
                                twitterLinkProp={
                                  profile?.twitterLink || undefined
                                }
                                youtubeLinkProp={
                                  profile?.youtubeLink || undefined
                                }
                                tikTokLinkProp={
                                  profile?.tikTokLink || undefined
                                }
                                appleMusicLinkProp={
                                  profile?.appleMusicLink || undefined
                                }
                                pandoraLinkProp={
                                  profile?.pandoraLink || undefined
                                }
                                soundcloudLinkProp={
                                  profile?.soundcloudLink || undefined
                                }
                                linkedinLinkProp={
                                  profile?.linkedinLink || undefined
                                }
                                emailLinkProp={profile.email || undefined}
                                phoneLinkProp={profile.phoneNumber || undefined}
                              />

                              {!!profile && (
                                <button
                                  type="button"
                                  className="bg-none text-text-color px-4 md:px-2 py-1 max-w-max no-underline my-4 w-full ml-auto border-round text-xs rounded bg-background transition hover:bg-gradient-to-tr hover:from-primary hover:to-secondary uppercase group flex items-center justify-center"
                                  onClick={() => {
                                    setSelctedProfile(profile);
                                    setOpen(true);
                                  }}
                                >
                                  <span className="opacity-80 font-bold group-hover:opacity-100 transition">
                                    Info
                                  </span>
                                  <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare as IconProp}
                                    className="fa-fw fa-sm ml-2 opacity-80 group-hover:opacity-100 transition h-3 w-3"
                                  />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </Fade>
                ))}
              {selectedProfile && (
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-[10000]"
                    onClose={setOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-[#27272727] transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto w-full">
                      <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative transform overflow-x-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-5xl sm:p-6 w-full bg-background flex-col flex max-h-[80vh] overflow-scroll">
                            <div className="">
                              <div
                                aria-hidden="true"
                                className="relative overflow-hidden"
                              >
                                {!!selectedProfile.heroImage?.url && (
                                  <Fade direction="up" triggerOnce>
                                    <Image
                                      src={selectedProfile.heroImage?.url}
                                      alt=""
                                      width={0}
                                      height={0}
                                      sizes="100%"
                                      className="h-[20rem] w-full object-cover object-center"
                                    />
                                  </Fade>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background" />
                              </div>

                              <div className="relative mx-auto -mt-24 max-w-8xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl flex flex-col">
                                  <Fade
                                    direction="up"
                                    cascade
                                    damping={0.25}
                                    triggerOnce
                                  >
                                    {selectedProfile.avatarImage?.url && (
                                      <Image
                                        src={selectedProfile.avatarImage?.url}
                                        alt={selectedProfile?.name || ""}
                                        width={0}
                                        height={0}
                                        sizes="100%"
                                        className="w-full max-w-[200px] mx-auto rounded-full"
                                      />
                                    )}
                                    <h2 className="text-3xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-gray-900 sm:text-4xl gradient-text uppercase">
                                      {selectedProfile.name}
                                    </h2>
                                  </Fade>
                                  <SocialMediaIcons
                                    cssClass="mt-0 mb-8 w-full flex flex-row !social-icons !items-center !justify-center gap-x-2"
                                    instagramLinkProp={
                                      selectedProfile?.instagramLink ||
                                      undefined
                                    }
                                    spotifyLinkProp={
                                      selectedProfile?.spotifyLink || undefined
                                    }
                                    facebookLinkProp={
                                      selectedProfile?.facebookLink || undefined
                                    }
                                    twitterLinkProp={
                                      selectedProfile?.twitterLink || undefined
                                    }
                                    youtubeLinkProp={
                                      selectedProfile?.youtubeLink || undefined
                                    }
                                    tikTokLinkProp={
                                      selectedProfile?.tikTokLink || undefined
                                    }
                                    appleMusicLinkProp={
                                      selectedProfile?.appleMusicLink ||
                                      undefined
                                    }
                                    pandoraLinkProp={
                                      selectedProfile?.pandoraLink || undefined
                                    }
                                    soundcloudLinkProp={
                                      selectedProfile?.soundcloudLink ||
                                      undefined
                                    }
                                    linkedinLinkProp={
                                      selectedProfile?.linkedinLink || undefined
                                    }
                                    emailLinkProp={
                                      selectedProfile.email || undefined
                                    }
                                    phoneLinkProp={
                                      selectedProfile.phoneNumber || undefined
                                    }
                                  />
                                  {selectedProfile.fullBio?.html && (
                                    <div className="mt-4 text-text-color body-parsed-text">
                                      {parse(selectedProfile.fullBio?.html)}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline outline-primary mx-auto max-w-max"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close menu</span>
                              <XMarkIcon
                                className="h-6 w-6 text-text-color"
                                aria-hidden="true"
                              />
                            </button>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              )}
            </div>
          </section>
        </div>
        ;
      </>
    );
  return (
    <>
      <div className="relative texture-background overflow-hidden">
        <section className="container my-16 mx-auto w-full px-4 md:11/12 xl:w-10/12 dark-section flex flex-wrap">
          <div className="w-full lg:5/12 xl:w-4/12 transition">
            {!!profileSectionTitle && (
              <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center xl:text-left transition">
                {profileSectionTitle}
              </h3>
            )}
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  lg:7/12 xl:w-8/12 mx-auto lg:mx-0 transition">
            {profiles
              .filter(
                (profile) =>
                  profile?.profileType?.toLowerCase() ===
                  profileType?.toLowerCase()
              )
              .map((profile) => (
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
                        <div className="music-border"></div>
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
          <>{}</>
        </section>
      </div>
    </>
  );
}
