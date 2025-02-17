import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import {
  faEnvelope,
  faGlobe,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactCompact.scss";

interface ContactsSectionProps {
  contactsData: ContactFieldsFragment[];
}

export default function ContactCompact({ contactsData }: ContactsSectionProps) {
  return (
    <section className="contact-compact-section mx-auto max-w-8xl my-8 w-full px-2 lg:px-4">
      <div
        role="list"
        className="flex flex-col items-center gap-4 mx-auto w-full justify-center"
      >
        {contactsData.map((contact) => (
          <div
            key={contact.contactQuery}
            className="rounded-lg bg-text-color shadow max-w-md w-full border border-primary"
          >
            <section className="page-content py-0 mx-auto flex justify-center flex-col max-w-4xl relative z-20">
              {!!contact?.contactAvatar && (
                <Image
                  src={contact?.contactAvatar.url}
                  alt=""
                  sizes="100%"
                  width={0}
                  height={0}
                  className="w-32 h-32 mx-auto object-cover my-4 rounded-[100%] border border-primary"
                />
              )}

              <div className="flex justify-center flex-col mx-auto w-full all-text-dark">
                {contact.contactName && (
                  <p className="text-2xl !font-bold text-center uppercase text-bg mb-2">
                    {contact.contactName}
                  </p>
                )}
                {contact.contactTitle && (
                  <p className="text-sm tracking-widest opacity-80 font-bold text-center uppercase text-bg mb-2">
                    {contact.contactTitle}
                  </p>
                )}
                {!!contact.contactBio && (
                  <p className="parsed-text text-center opacity-90 max-w-md mx-auto text-bg">
                    {parse(contact.contactBio)}
                  </p>
                )}

                <div className="rounded overflow-hidden social-links">
                  {!!contact?.contactInstagram && (
                    <a
                      href={contact.contactInstagram}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-instagram"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faInstagram as IconProp}
                          className="fa-fw h-8 w-8 flex"
                        />
                        <span>{contact.contactInstagram}</span>
                      </div>
                    </a>
                  )}

                  {!!contact?.contactLinkedin && (
                    <a
                      href={contact.contactLinkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-linkedin"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faLinkedin as IconProp}
                          className="fa-fw h-8 w-8 flex"
                        />
                        {/* <span>{instagramLink.split('/').pop()}</span> */}
                      </div>
                    </a>
                  )}

                  {!!contact?.contactEmail && (
                    <a
                      href={`mailto:${contact.contactEmail}`}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-download"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faEnvelope as IconProp}
                          className="fa-fw stroke-black stroke-1 h-8 w-8 flex"
                        />
                        {/* <span>{instagramLink.split('/').pop()}</span> */}
                      </div>
                    </a>
                  )}
                  {!!contact?.contactPhone && (
                    <a
                      href={`tel:${contact.contactPhone.replace(/-/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-phone"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faMobileRetro as IconProp}
                          className="fa-fw h-8 w-8 flex"
                        />
                        <span className="sr-only">call</span>
                      </div>
                    </a>
                  )}
                  {!!contact?.contactWebsite && (
                    <a
                      href={contact.contactWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-download"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faGlobe as IconProp}
                          className="fa-fw stroke-black stroke-1 flex h-8 w-8"
                        />
                        {/* <span>{instagramLink.split('/').pop()}</span> */}
                      </div>
                    </a>
                  )}
                  {!!contact?.contactWhatsapp && (
                    <a
                      href={
                        contact.contactWhatsapp.includes("http")
                          ? contact.contactWhatsapp
                          : `https://api.whatsapp.com/send?phone=${contact.contactWhatsapp}&text=Hello`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-whatsapp"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faWhatsapp as IconProp}
                          className="fa-fw h-8 w-8 flex"
                        />
                        {/* <span>{instagramLink.split('/').pop()}</span> */}
                      </div>
                    </a>
                  )}
                  {!!contact?.contactCalendly && (
                    <a
                      href={contact.contactCalendly}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-twitter"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faCalendar as IconProp}
                          className="fa-fw h-8 w-8 flex"
                        />
                        {/* <span>{instagramLink.split('/').pop()}</span> */}
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
