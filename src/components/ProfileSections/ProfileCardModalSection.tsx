import React, { useState, Fragment } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SocialMediaIcons from "@/components/SocialMediaIcons";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function ProfileCardModalSection({
  profileSectionTitle,
  profiles,
}: ProfilesProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProfile, setSelctedProfile] =
    useState<ProfileFieldsFragment>();
  if (!profiles) return <></>;

  return (
    <>
      <div className="relative texture-background overflow-hidden">
        <section className="container my-16 mx-auto w-full px-4 md:11/12 xl:w-10/12  flex flex-wrap">
          <div className="w-full transition">
            {!!profileSectionTitle && (
              <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center transition mb-16">
                {profileSectionTitle}
              </h3>
            )}
          </div>
          <div className="flex items-center justify-center gap-8 w-full mx-auto lg:mx-0 transition flex-wrap">
            {profiles.map((profile) => (
              <Fade
                direction="up"
                cascade
                triggerOnce
                damping={0.015}
                key={profile.profileSlug}
                className="mx-auto max-w-xs w-full"
              >
                <>
                  <div className="animate-col-width mx-auto md:mx-0 w-full">
                    <div className="overflow-hidden border border-primary-fade h-full rounded profile-card w-full relative group hover:border-primary transition-all">
                      {!!profile?.avatarImage?.url && (
                        <div className="h-72 p-0 m-0 w-full relative">
                          {!!profile?.profileLogo?.url && (
                            <div>
                              <Fade
                                triggerOnce
                                direction="up"
                                className="h-10 max-w-10 p-0 m-0 absolute left-0 bottom-0 z-[9] bg-bg-secondary rounded-tr-sm border-primary-fade border-t border-r"
                              >
                                <Image
                                  src={profile?.profileLogo?.url}
                                  alt={(profile.name && profile.name) || ""}
                                  className="object-contain block w-full h-full"
                                  sizes="100%"
                                  width={0}
                                  height={0}
                                />
                              </Fade>
                            </div>
                          )}
                          <Image
                            src={profile?.avatarImage?.url}
                            alt={(profile.name && profile.name) || ""}
                            className="object-cover absolute inset-0 w-full h-auto border-primary-fade border-b cursor-pointer"
                            sizes="100%"
                            width={0}
                            height={0}
                            onClick={() => {
                              setSelctedProfile(profile);
                              setOpen(true);
                            }}
                          />
                        </div>
                      )}
                      <div className="flex flex-col items-start justify-center text-left p-4 bg-bg-secondary relative z-10 overflow-hidden">
                        <Fade triggerOnce direction="left">
                          {!!profile.name && (
                            <h3
                              className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-text-color mt-0 text-left cursor-pointer group-hover:text-primary transition-all"
                              onClick={() => {
                                setSelctedProfile(profile);
                                setOpen(true);
                              }}
                            >
                              {profile.name}
                            </h3>
                          )}
                          {!!profile.role && (
                            <h4
                              className="uppercase mt-0 mb-0 text-xs opacity-80 text-left line-clamp-1 max-w-xs cursor-pointer group-hover:text-primary transition-all"
                              onClick={() => {
                                setSelctedProfile(profile);
                                setOpen(true);
                              }}
                            >
                              {profile.role}
                            </h4>
                          )}
                        </Fade>

                        <div className="flex justify-between flex-row w-full">
                          <SocialMediaIcons
                            fadeDirection="up"
                            cssClass="profile-card-modal my-4 w-full flex flex-row social-icons-row items-center justify-start text-text-color flex-wrap gap-x-2"
                            instagramLinkProp={
                              profile?.instagramLink || undefined
                            }
                            spotifyLinkProp={profile?.spotifyLink || undefined}
                            facebookLinkProp={
                              profile?.facebookLink || undefined
                            }
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
                            linkedinLinkProp={
                              profile?.linkedinLink || undefined
                            }
                            emailLinkProp={profile.email || undefined}
                            phoneLinkProp={profile.phoneNumber || undefined}
                            displayVcf={profile.displayVcf || undefined}
                            name={profile.name || undefined}
                            avatar={profile.avatarImage?.url || undefined}
                            calendlyLinkProp={profile.calendlyLink || undefined}
                          />

                          {!!profile && (
                            <Fade
                              direction="right"
                              triggerOnce
                              className="max-w-max ml-auto"
                            >
                              <button
                                type="button"
                                className="bg-none text-text-color px-4 md:px-2 py-1 no-underline my-4 w-full border-round text-xs rounded bg-background transition-all hover:bg-gradient-to-tr hover:from-primary hover:to-secondary uppercase group flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-secondary"
                                onClick={() => {
                                  setSelctedProfile(profile);
                                  setOpen(true);
                                }}
                              >
                                <span className="opacity-80 font-bold group-hover:opacity-100 transition">
                                  Info
                                </span>
                              </button>
                            </Fade>
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
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div
                      className="fixed inset-0 bg-[#000000c7] opacity-60 backdrop-blur-xl"
                      aria-hidden="true"
                    />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto w-full">
                    <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-y-full blur-md"
                        enterTo="-translate-y-0 blur-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="-translate-y-0 blur-0"
                        leaveTo="translate-y-full blur-md"
                      >
                        <Dialog.Panel className="relative transform overflow-x-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:mb-8 max-w-5xl w-[95%] mx-auto bg-background flex-col flex max-h-[80vh] overflow-scroll">
                          <button
                            type="button"
                            className="my-8 inline-flex items-center justify-center rounded-md text-text-overlay outline outline-text-overlay mx-auto max-w-max absolute top-[-25px] right-2 z-10"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                              className="h-6 w-6 text-text-overlay"
                              aria-hidden="true"
                            />
                          </button>
                          <div className="">
                            <div
                              aria-hidden="true"
                              className="relative overflow-hidden"
                            >
                              {!!selectedProfile.heroImage?.url && (
                                <Fade direction="down" triggerOnce>
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
                                      className="w-[180px] h-[180px] object-cover mx-auto rounded-[100%] border-2 border-primary"
                                    />
                                  )}
                                  <h2 className="text-3xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-gray-900 sm:text-4xl gradient-text uppercase">
                                    {selectedProfile.name}
                                  </h2>
                                </Fade>
                                <SocialMediaIcons
                                  fadeDirection="up"
                                  cssClass="profile-card-modal my-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap gap-x-2"
                                  instagramLinkProp={
                                    selectedProfile?.instagramLink || undefined
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
                                    selectedProfile?.appleMusicLink || undefined
                                  }
                                  pandoraLinkProp={
                                    selectedProfile?.pandoraLink || undefined
                                  }
                                  soundcloudLinkProp={
                                    selectedProfile?.soundcloudLink || undefined
                                  }
                                  emailLinkProp={
                                    selectedProfile.email || undefined
                                  }
                                  phoneLinkProp={
                                    selectedProfile.phoneNumber || undefined
                                  }
                                  linkedinLinkProp={
                                    selectedProfile?.linkedinLink || undefined
                                  }
                                  displayVcf={
                                    selectedProfile.displayVcf || undefined
                                  }
                                  name={selectedProfile.name || undefined}
                                  avatar={
                                    selectedProfile.avatarImage?.url ||
                                    undefined
                                  }
                                  calendlyLinkProp={
                                    selectedProfile.calendlyLink || undefined
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
                            className="my-8 inline-flex items-center justify-center rounded-md text-text-color outline outline-primary mx-auto max-w-max"
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
}
