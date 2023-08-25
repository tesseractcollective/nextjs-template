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
                    className="mx-auto max-w-sm"
                  >
                    <>
                      <div className="animate-col-width mx-auto md:mx-0 w-full">
                        <div className="overflow-hidden border border-primary-fade h-full rounded bg-dark profile-card w-full">
                          <div className="h-72 w-72">
                            {!!profile?.avatarImage?.url && (
                              <Image
                                src={profile?.avatarImage?.url}
                                alt={(profile.name && profile.name) || ""}
                                className="object-cover block w-full h-full"
                                sizes="100%"
                                width={0}
                                height={0}
                              />
                            )}
                          </div>

                          <div className="flex flex-col px-4 items-start justify-center text-left py-4">
                            {!!profile.name && (
                              <h3 className="text-3xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-gray-900 sm:text-2xl text-white mt-0 text-left">
                                {profile.name}
                              </h3>
                            )}
                            {!!profile.role && (
                              <h4 className="uppercase mt-0 mb-0 text-sm opacity-80 text-left">
                                {profile.role}
                              </h4>
                            )}

                            <div className="flex justify-between flex-row w-full">
                              <nav className="flex flex-row profile-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-start">
                                {!!profile.instagramLink && (
                                  <a
                                    href={profile.instagramLink}
                                    target="_blank"
                                    className="max-w-max mr-2 text-center ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faInstagram as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                                {!!profile.facebookLink && (
                                  <a
                                    href={profile.facebookLink}
                                    target="_blank"
                                    className="max-w-max mr-2 ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faFacebook as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                                {!!profile.twitterLink && (
                                  <a
                                    href={profile.twitterLink}
                                    target="_blank"
                                    className="max-w-max mr-2 ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTwitter as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                                {!!profile.youtubeLink && (
                                  <a
                                    href={profile.youtubeLink}
                                    target="_blank"
                                    className="max-w-max mr-2 ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faYoutube as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                                {!!profile.linkedinLink && (
                                  <a
                                    href={profile.linkedinLink}
                                    target="_blank"
                                    className="max-w-max mr-2 ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faLinkedin as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                                {!!profile.email && (
                                  <a
                                    href={`mailto:${profile.email}`}
                                    target="_blank"
                                    className="max-w-max mr-2 ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faEnvelope as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                                {!!profile.phoneNumber && (
                                  <a
                                    href={`tel:${profile.phoneNumber}`}
                                    target="_blank"
                                    className="max-w-max mr-2 ml-0 opacity-80 transition hover:opacity-100"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faPhone as IconProp}
                                      className="fa-fw"
                                    />
                                  </a>
                                )}
                              </nav>

                              {!!profile && (
                                <button
                                  type="button"
                                  className="bg-none text-white px-4 md:px-2 py-2 max-w-max block no-underline my-4 w-full ml-auto border-round text-xs rounded bg-dark transition hover:bg-gradient-to-tr hover:from-primary hover:to-primary-hover uppercase group"
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
                                    className="fa-fw fa-sm ml-2 opacity-80 group-hover:opacity-100 transition"
                                  />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
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
                                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-5xl sm:p-6 w-full bg-invert flex-col flex">
                                    {!!selectedProfile.name && (
                                      <h2 className="text-center mx-auto text-2xl text-dark font-bold uppercase">
                                        {selectedProfile.name}
                                      </h2>
                                    )}

                                    <button
                                      type="button"
                                      className="m-2 inline-flex items-center justify-center rounded-md p-2 text-dark outline outline-primary mx-auto max-w-max"
                                      onClick={() => setOpen(false)}
                                    >
                                      <span className="sr-only">
                                        Close menu
                                      </span>
                                      <XMarkIcon
                                        className="h-6 w-6 text-dark"
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
                    </>
                  </Fade>
                ))}
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
                    <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-white group-hover:text-primary-hover">
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
