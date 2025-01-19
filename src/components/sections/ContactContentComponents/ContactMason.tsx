import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

interface ContactsSectionProps {
  contactsData: ContactFieldsFragment[];
}

export default function ContactMason({ contactsData }: ContactsSectionProps) {
  return (
    <section className="mx-auto max-w-4xl my-8 w-full px-4 lg:px-8 contact-layout-style-contact-circle relative z-20">
      {contactsData.map((contact) => (
        <div
          key={contact.contactQuery}
          className="rounded-lg bg-text-color shadow-xl max-w-8xl mx-auto w-full relative px-4 border border-primary"
        >
          {contact?.contactAvatar?.url && (
            <Image
              src={contact.contactAvatar.url}
              className="h-40 md:h-44 lg:h-52 w-40 md:w-44 lg:w-52 rounded-full object-cover relative lg:absolute lg:-top-20 lg:-right-10 shadow-xl mx-auto lg:mx-[initial] my-2 lg:my-[initial]"
              alt={contact.contactName || ""}
              width={120}
              height={120}
              sizes="100%"
            />
          )}
          <div className="lg:py-12 px-2 lg:px-4 max-w-4xl mr-auto gap-y-4 flex flex-col">
            {!!contact?.contactTitle && (
              <p className="my-2 text-sm text-dark opacity-80 uppercase tracking-wider border max-w-max rounded-xl p-2">
                {contact.contactTitle}
              </p>
            )}
            <h3 className="text-4xl md:text-6xl font-bold text-dark uppercase">
              {contact.contactName}
            </h3>
            {contact?.contactBio && (
              <div className="body-parsed-text all-text-dark">
                <p className="max-w-4xl">{contact.contactBio}</p>
              </div>
            )}
            <div className="flex flex-row gap-x-6">
              {!!contact?.contactEmail && (
                <a
                  href={`mailto:${contact.contactEmail}`}
                  className="relative flex items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase hover:text-primary focus-within:text-primary"
                >
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Email</span>
                </a>
              )}
              {contact?.contactPhone && (
                <a
                  href={`tel:${contact.contactPhone}`}
                  className="relative flex items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase hover:text-primary focus-within:text-primary"
                >
                  <PhoneIcon className="h-5 w-5 -mr-2" aria-hidden="true" />
                  <span>Call</span>
                </a>
              )}
              {!!contact.contactGoogleAddressLink && (
                <a
                  href={`mailto:${contact.contactGoogleAddressLink}`}
                  className="relative flex items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase hover:text-primary focus-within:text-primary"
                >
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Map</span>
                </a>
              )}
              {contact?.contactWhatsapp && (
                <a
                  href={
                    contact.contactWhatsapp.includes("http")
                      ? contact.contactWhatsapp
                      : `https://api.whatsapp.com/send?phone=${encodeURIComponent(
                          `${contact.contactWhatsapp}`
                        )}`
                  }
                  target="_blank"
                  className="relative flex items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase hover:text-primary focus-within:text-primary"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp as IconProp}
                    className="h-5 w-5 -mr-2"
                    aria-hidden="true"
                  />

                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
