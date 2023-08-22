import React, { useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const [selectedMember, setSelctedMember] = useState<ProfileFieldsFragment>();
  return (
    <>
      {profiles && profiles.length && (
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
                    {profileLayoutStyle === "cardModal" ? (
                      <div className="animate-col-width mx-auto md:mx-0">
                        <div className="member-card">
                          {!!profile?.avatarImage?.url && (
                            <Image
                              src={profile?.avatarImage?.url}
                              alt={(profile.name && profile.name) || ""}
                              className=""
                              style={{ objectFit: "cover" }}
                              sizes="100%"
                            />
                          )}

                          <div className="flex flex-col">
                            {!!profile.name && (
                              <h3 className="text-2xl uppercase mb-2 gradient-text text-center underline">
                                {profile.name}
                              </h3>
                            )}
                            {!!profile.role && (
                              <h4 className="uppercase mt-0 mb-2 text-center text-sm  opacity-80">
                                {profile.role}
                              </h4>
                            )}
                            <nav className="flex flex-row member-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-center">
                              {!!profile.instagramLink && (
                                <a
                                  href={profile.instagramLink}
                                  target="_blank"
                                  className="max-w-max mr-2 text-center ml-0"
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
                                  className="max-w-max mr-2 ml-0"
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
                                  className="max-w-max mr-2 ml-0"
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
                                  className="max-w-max mr-2 ml-0"
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
                                  className="max-w-max mr-2 ml-0"
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
                                  className="max-w-max mr-2 ml-0"
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
                                  className="max-w-max mr-2 ml-0"
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
                                className="bg-none text-white border-white border px-4 md:px-4 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full mx-auto border-round text-xs"
                                // onClick={() => {
                                //   setSelctedMember(member);
                                //   setVisible(true);
                                // }}
                              >
                                <span className="opacity-80">Read More</span>
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare as IconProp}
                                  className="fa-fw fa-sm ml-2"
                                />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={`/${profile.profileType?.toLowerCase()}/${
                          profile.profileSlug
                        }`}
                        className="profile-card h-full no-underline mx-auto relative mb-4 inline-block max-w-max group"
                        key={profile.profileSlug}
                      >
                        {!!profile.avatarImage?.url && (
                          <Image
                            src={profile.avatarImage?.url}
                            alt=""
                            className="profile-card-image object-center mb-2 transition max-w-xs w-full transition-rounded"
                            width={0}
                            height={0}
                            sizes="100%"
                          />
                        )}
                        <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-white group-hover:text-primary-hover">
                          <span>{profile.name}</span>
                          <FontAwesomeIcon
                            icon={faArrowRight as IconProp}
                            className="fa-fw h-0 w-0 opacity-0 group-hover:h-4 group-hover:w-4 group-hover:opacity-100"
                          />
                        </p>
                      </Link>
                    )}
                  </Fade>
                ))}
            </div>
          </section>
        </div>
      )}
      {/* <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        breakpoints={{ '1200px': '40vw', '960px': '75vw', '640px': '90vw' }}
        style={{ width: '40vw' }}
        dismissableMask
        draggable={false}>
        <div className="member-card-content px-4">
          <img
            src={selectedprofile?.avatarImage?.url}
            alt={(selectedprofile?.name && selectedprofile.name) || ''}
            className="border mx-auto block"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
          {!!selectedprofile?.name && (
            <h3 className="text-2xl uppercase mb-2 gradient-text text-center underline">
              {selectedprofile.name}
            </h3>
          )}
          {!!selectedprofile?.welcomeQuote && (
            <p className="text-sm mt-0 py-0 mb-2 uppercase text-center">
              {selectedprofile.welcomeQuote}
            </p>
          )}
          <nav className="flex flex-row member-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-center">
            {!!selectedprofile?.instagramLink && (
              <a
                href={selectedprofile.instagramLink}
                target="_blank"
                className="max-w-max mr-2 text-center ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedprofile?.facebookLink && (
              <a
                href={selectedprofile.facebookLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedprofile?.twitterLink && (
              <a
                href={selectedprofile.twitterLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedprofile?.youtubeLink && (
              <a
                href={selectedprofile.youtubeLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube as IconProp}
                  className="fa-fw"
                />
              </a>
            )}

            {!!selectedprofile?.linkedinLink && (
              <a
                href={selectedprofile.linkedinLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedprofile?.email && (
              <a
                href={`mailto:${selectedprofile.email}`}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faEnvelope as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedprofile?.phoneNumber && (
              <a
                href={selectedprofile.phoneNumber}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon icon={faPhone as IconProp} className="fa-fw" />
              </a>
            )}
          </nav>
          {!!selectedprofile?.fullBio && (
            <div className="body-parsed-text">
              {parse(selectedprofile.fullBio?.html)}
            </div>
          )}
        </div>
      </Dialog> */}
    </>
  );
}
