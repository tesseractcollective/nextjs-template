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

export default function ContactCard({ contactsData }: ContactsSectionProps) {
  return (
    <section className="mx-auto max-w-8xl my-8 w-full px-8">
      <ul
        role="list"
        className={`flex flex-wrap flex-row items-center gap-x-4 gap-y-4 mx-auto w-full ${
          contactsData.length <= 2 ? "justify-center" : "justify-center"
        }`}
      >
        {contactsData.map((contact) => (
          <li
            key={contact.contactQuery}
            className="divide-y divide-bg-secondary rounded-lg bg-text-color shadow max-w-xs w-full"
          >
            <div className="flex w-full items-center justify-between flex-col px-4 py-6">
              {contact?.contactAvatar?.url && (
                <Image
                  src={contact.contactAvatar.url}
                  className="h-20 lg:h-28 w-20 lg:w-28 rounded-full object-cover mb-4"
                  alt=""
                  width={120}
                  height={120}
                  sizes="100%"
                />
              )}
              <div className="flex-1 truncate w-full">
                <div className="flex items-center justify-center text-center space-x-3">
                  <h3 className="truncate text-2xl font-bold text-dark uppercase">
                    {contact.contactName}
                  </h3>
                </div>
                {!!contact?.contactTitle && (
                  <p className="mt-1 mb-4 text-sm text-dark opacity-80 text-center uppercase tracking-wider">
                    {contact.contactTitle}
                  </p>
                )}
                <SocialMediaIcons
                  fadeDirection="up"
                  cssClass="mt-1 mb-0 w-full flex flex-row !social-icons !items-center !justify-center text-dark gap-x-2"
                  linkedinLinkProp={contact?.contactLinkedin || ""}
                  calendlyLinkProp={contact.contactCalendly || undefined}
                  instagramLinkProp={contact.contactInstagram || undefined}
                  whatsappLinkProp={contact.contactWhatsapp || undefined}
                  displayVcf={true}
                  avatar={contact.contactAvatar?.url || undefined}
                  name={contact.contactName || undefined}
                />
              </div>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-bg-secondary">
                <div className="flex w-0 flex-1">
                  {!!contact?.contactEmail && (
                    <a
                      href={`mailto:${contact.contactEmail}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold text-dark opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase"
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
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-none py-4 text-sm font-semibold text-dark opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase"
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
