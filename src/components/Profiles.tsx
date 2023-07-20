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
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";

interface MemberProps {
  profileSectionTitle?: string;
  profilesQuery?: string;
  profileLayoutStyle?: string;
  profiles?: ProfileFieldsFragment[];
}

export default function TeamMember({
  profileSectionTitle,
  profilesQuery,
  profileLayoutStyle,
  profiles,
}: MemberProps) {
  const [visible, setVisible] = useState(false);
  const [selectedMember, setSelctedMember] =
    useState<ProfileFieldsFragment>();
  return (
    <>
      {profiles && profiles.length && (
        <div className="relative texture-background overflow-hidden">
          <section className="container my-16 mx-auto w-10/12 xl:w-10/12 dark-section flex">
            <div className="w-12/12 lg:w-4/12">
              {!!profileSectionTitle && (
                <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center">
                  {profileSectionTitle}
                </h3>
              )}
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-12/12 lg:w-8/12 mx-auto md:mx-0">
              {profiles
                .filter((member) => member?.profileType?.toLowerCase() === profilesQuery?.toLowerCase())
                .map((member) => (
                  <div key={member.profileSlug} className="">
                    {profileLayoutStyle === "cardModal" ? (
                      <div className="animate-col-width mx-auto md:mx-0">
                        <div className="member-card">
                          <img
                            src={member?.avatarImage?.url}
                            alt={(member.name && member.name) || ""}
                            className=""
                            style={{ objectFit: "cover" }}
                          />

                          <div className="flex flex-col">
                            {!!member.name && (
                              <h3 className="text-2xl uppercase mb-2 gradient-text text-center underline">
                                {member.name}
                              </h3>
                            )}
                            {!!member.name && (
                              <h4 className="uppercase mt-0 mb-2 text-center text-sm  opacity-80">
                                {member.companyTitle}
                              </h4>
                            )}
                            <nav className="flex flex-row member-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-center">
                              {!!member.instagramLink && (
                                <a
                                  href={member.instagramLink}
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
                              {!!member.facebookLink && (
                                <a
                                  href={member.facebookLink}
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
                              {!!member.twitterLink && (
                                <a
                                  href={member.twitterLink}
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
                              {!!member.youtubeLink && (
                                <a
                                  href={member.youtubeLink}
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
                              {!!member.linkedinLink && (
                                <a
                                  href={member.linkedinLink}
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
                              {!!member.email && (
                                <a
                                  href={`mailto:${member.email}`}
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
                              {!!member.phoneNumber && (
                                <a
                                  href={`tel:${member.phoneNumber}`}
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
                            {!!member && (
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
                        href={`/${member.profileType?.toLowerCase()}/${
                          member.profileSlug
                        }`}
                        className="talent-card h-full no-underline animate-col-width mx-auto"
                        key={member.profileSlug}
                      >
                        <img
                          src={member.avatarImage?.url}
                          alt=""
                          className="talent-card-image"
                        />
                        <p className="my-0 py-0 flex flex-row items-center">
                          <span>{member.name}</span>
                          <FontAwesomeIcon
                            icon={faArrowRight as IconProp}
                            className="fa-fw text-sm h-4 w-4"
                          />
                        </p>
                      </Link>
                    )}
                  </div>
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
            src={selectedMember?.avatarImage?.url}
            alt={(selectedMember?.name && selectedMember.name) || ''}
            className="border mx-auto block"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
          {!!selectedMember?.name && (
            <h3 className="text-2xl uppercase mb-2 gradient-text text-center underline">
              {selectedMember.name}
            </h3>
          )}
          {!!selectedMember?.welcomeQuote && (
            <p className="text-sm mt-0 py-0 mb-2 uppercase text-center">
              {selectedMember.welcomeQuote}
            </p>
          )}
          <nav className="flex flex-row member-card-social-icons items-center mx-0 px-0 mt-1 mb-0 justify-center">
            {!!selectedMember?.instagramLink && (
              <a
                href={selectedMember.instagramLink}
                target="_blank"
                className="max-w-max mr-2 text-center ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedMember?.facebookLink && (
              <a
                href={selectedMember.facebookLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedMember?.twitterLink && (
              <a
                href={selectedMember.twitterLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedMember?.youtubeLink && (
              <a
                href={selectedMember.youtubeLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube as IconProp}
                  className="fa-fw"
                />
              </a>
            )}

            {!!selectedMember?.linkedinLink && (
              <a
                href={selectedMember.linkedinLink}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedMember?.email && (
              <a
                href={`mailto:${selectedMember.email}`}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faEnvelope as IconProp}
                  className="fa-fw"
                />
              </a>
            )}
            {!!selectedMember?.phoneNumber && (
              <a
                href={selectedMember.phoneNumber}
                target="_blank"
                className="max-w-max mr-2 ml-0"
                rel="noreferrer">
                <FontAwesomeIcon icon={faPhone as IconProp} className="fa-fw" />
              </a>
            )}
          </nav>
          {!!selectedMember?.fullBio && (
            <div className="body-parsed-text">
              {parse(selectedMember.fullBio?.html)}
            </div>
          )}
        </div>
      </Dialog> */}
    </>
  );
}
