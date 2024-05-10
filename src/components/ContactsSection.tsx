import React from "react";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";
import ContactDefault from "@/components/sections/ContactContentComponents/ContactDefault";
import ContactCard from "@/components/sections/ContactContentComponents/ContactCard";

type contactTypeTags = ContactFieldsFragment["contactQuery"];

interface ContactsSectionProps {
  contactsData: ContactFieldsFragment[];
  contactTypes: contactTypeTags[];
  contactsLayoutStyle: string;
}

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
  if (contactsLayoutStyle === "card") {
    return <ContactCard contactsData={filteredContacts} />;
  }
  return <ContactDefault contactsData={filteredContacts} />;
}
