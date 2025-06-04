import React from "react";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";
import ContactCard from "@/components/sections/ContactContentComponents/ContactCard";
import ContactChevron from "@/components/sections/ContactContentComponents/ContactChevron";
import ContactCircle from "@/components/sections/ContactContentComponents/ContactCircle";
import ContactCompact from "@/components/sections/ContactContentComponents/ContactCompact";
import ContactDefault from "@/components/sections/ContactContentComponents/ContactDefault";
import ContactMason from "@/components/sections/ContactContentComponents/ContactMason";

type contactTypeTags = ContactFieldsFragment["contactQuery"];

interface ContactsSectionProps {
  contactsData: ContactFieldsFragment[];
  contactTypes: contactTypeTags[];
  contactsLayoutStyle: string;
}

// card √
// chevron √
// circle √
// compact √
// fullScreen
// grid
// infinite
// lightbox
// mason √
// mix
// polaroid
// rotate
// shelf
// slider
// stack
// twohundredvh

export default function ContactsSection({
  contactTypes,
  contactsData,
  contactsLayoutStyle,
}: ContactsSectionProps) {
  const filteredContacts = contactsData?.filter((contact) =>
    contactTypes.some((contactType) =>
      contact?.contactQuery.includes(contactType)
    )
  );
  if (filteredContacts.length === 0) return <></>;
  if (contactsLayoutStyle === "card") {
    return <ContactCard contactsData={filteredContacts} />;
  }
  if (contactsLayoutStyle === "chevron") {
    return <ContactChevron contactsData={filteredContacts} />;
  }
  if (contactsLayoutStyle === "circle") {
    return <ContactCircle contactsData={filteredContacts} />;
  }
  if (contactsLayoutStyle === "compact") {
    return <ContactCompact contactsData={filteredContacts} />;
  }
  if (contactsLayoutStyle === "mason") {
    return <ContactMason contactsData={filteredContacts} />;
  }
  return <ContactDefault contactsData={filteredContacts} />;
}
