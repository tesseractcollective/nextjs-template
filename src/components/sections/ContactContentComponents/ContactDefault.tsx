import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

interface ContactsSectionProps {
  contactsData: ContactFieldsFragment[];
}

export default function ContactDefault({ contactsData }: ContactsSectionProps) {
  return (
    <section className="mx-auto max-w-8xl my-8 w-full px-8 contact-layout-style-contact-default">
      <ul
        role="list"
        className={`flex flex-wrap flex-row items-center gap-x-4 gap-y-4 mx-auto w-full ${
          contactsData.length <= 2 ? "justify-center" : "justify-center"
        }`}
      >
        {contactsData.map((contact) => (
          <li
            key={contact.contactQuery}
            className="divide-y divide-bg-secondary rounded-lg bg-text-color shadow max-w-sm w-full"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-bold text-dark">
                    {contact.contactName}
                  </h3>
                </div>
                {!!contact?.contactTitle && (
                  <p className="mt-1 truncate text-sm text-dark opacity-80">
                    {contact.contactTitle}
                  </p>
                )}
                <SocialMediaIcons
                  fadeDirection="up"
                  cssClass="mt-1 mb-0 w-full flex flex-row !social-icons !items-center !justify-start text-dark gap-x-2"
                  linkedinLinkProp={contact?.contactLinkedin || ""}
                  calendlyLinkProp={contact.contactCalendly || undefined}
                  instagramLinkProp={contact.contactInstagram || undefined}
                  whatsappLinkProp={contact.contactWhatsapp || undefined}
                  displayVcf={true}
                  avatar={contact.contactAvatar?.url || undefined}
                  name={contact.contactName || undefined}
                  emailLinkProp={contact?.contactEmail || ""}
                  phoneLinkProp={contact?.contactPhone || ""}
                />
              </div>
              {contact?.contactAvatar?.url && (
                <Image
                  src={contact.contactAvatar.url}
                  className="h-14 lg:h-16 w-14 lg:w-16 rounded-full object-cover"
                  alt=""
                  width={64}
                  height={64}
                  sizes="100%"
                />
              )}
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-bg-secondary">
                <div className="flex w-0 flex-1">
                  {!!contact?.contactEmail && (
                    <a
                      href={`mailto:${contact.contactEmail}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold text-dark opacity-80 transition-all hover:opacity-100 focus:opacity-100"
                    >
                      <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                      Email
                    </a>
                  )}
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  {contact?.contactPhone && (
                    <a
                      href={`tel:${contact.contactPhone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-none py-4 text-sm font-semibold text-dark opacity-80 transition-all hover:opacity-100 focus:opacity-100"
                    >
                      <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                      Call
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
