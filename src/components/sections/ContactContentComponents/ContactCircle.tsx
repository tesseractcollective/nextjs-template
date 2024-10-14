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
import { Fade, Zoom, Slide } from "react-awesome-reveal";

interface ContactsSectionProps {
  contactsData: ContactFieldsFragment[];
}

export default function ContactCircle({ contactsData }: ContactsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl my-8 w-full px-8 contact-layout-style-contact-circle">
      {contactsData.map((contact) => (
        <div
          key={contact.contactQuery}
          className="rounded-lg bg-bg shadow-xl max-w-8xl mx-auto w-full relative px-4 border border-primary"
        >
          {contact?.contactAvatar?.url && (
            <Image
              src={contact.contactAvatar.url}
              className="h-20 lg:h-52 w-20 lg:w-52 rounded-full object-cover absolute -top-20 right-20 shadow-xl"
              alt=""
              width={120}
              height={120}
              sizes="100%"
            />
          )}
          <div className="py-12 px-4 max-w-4xl mr-auto gap-y-4 flex flex-col">
            {!!contact?.contactTitle && (
              <p className="my-2 text-sm text-primary opacity-80 uppercase tracking-wider border max-w-max rounded-xl p-2">
                {contact.contactTitle}
              </p>
            )}
            <h3 className="text-4xl md:text-6xl font-bold text-primary uppercase">
              {contact.contactName}
            </h3>
            {contact?.contactBio && (
              <div className="body-parsed-text">
                <p className="max-w-4xl">{contact.contactBio}</p>
              </div>
            )}
            <div className="flex flex-row gap-x-6">
              {!!contact?.contactEmail && (
                <a
                  href={`mailto:${contact.contactEmail}`}
                  className="relative flex items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase"
                >
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Email</span>
                </a>
              )}
              {contact?.contactPhone && (
                <a
                  href={`tel:${contact.contactPhone}`}
                  className="relative flex items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold opacity-80 transition-all hover:opacity-100 focus:opacity-100 uppercase"
                >
                  <PhoneIcon className="h-5 w-5 -mr-2" aria-hidden="true" />
                  <span>Call</span>
                </a>
              )}
            </div>
          </div>
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

          <div>
            <div className="-mt-px flex divide-x divide-bg-secondary">
              <div className="flex w-0 flex-1"></div>
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
        </div>
      ))}
    </section>
  );
}
