import React from "react";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";
import ContactDefault from "@/components/sections/ContactContentComponents/ContactDefault";
import ContactCard from "@/components/sections/ContactContentComponents/ContactCard";
import ContactCircle from "@/components/sections/ContactContentComponents/ContactCircle";
import ContactMason from "@/components/sections/ContactContentComponents/ContactMason";

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
  if (filteredContacts.length === 0) return <></>;
  if (contactsLayoutStyle === "card") {
    return <ContactCard contactsData={filteredContacts} />;
  }
  if (contactsLayoutStyle === "circle") {
    return <ContactCircle contactsData={filteredContacts} />;
  }
  if (contactsLayoutStyle === "mason") {
    return <ContactMason contactsData={filteredContacts} />;
  }
  return <ContactDefault contactsData={filteredContacts} />;
}
