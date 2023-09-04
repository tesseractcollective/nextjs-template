import { ContactFieldsFragment } from "@/graphql/generated/graphql";
import React, { FC, useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

interface Props {
  contact: ContactFieldsFragment;
}

const VCF: FC<Props> = ({ contact }: Props) => {
  const [vCardData, setVCardData] = useState("");

  // Wrap generateVCard in a useCallback hook
  const generateVCard = useCallback(() => {
    const vCardContent = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact?.contactName}\nEMAIL:${contact?.contactEmail}\nTEL;TYPE=cell:${contact?.contactPhone}\nPHOTO:${contact.contactAvatar?.url}\nEND:VCARD`;
    setVCardData(vCardContent);
  }, [contact]);

  useEffect(() => {
    generateVCard();
  }, [generateVCard]);

  return (
    vCardData && (
      <button
        onClick={() => {
          const blob = new Blob([vCardData], { type: "text/vcard" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            `contact-card-${contact.contactName
              .toLocaleLowerCase()
              .replace(" ", "-")}.vcf`
          );
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="max-w-max mx-2 text-center group opacity-80 group-hover:opacity-100  group-hover:text-primary"
        type="button"
        title="Download Contact Vcard"
      >
        <FontAwesomeIcon
          icon={faAddressCard as IconProp}
          className="fa-fw mr-2 h-4 w-4"
        />
        <span className="sr-only">Download Contact Vcard</span>
      </button>
    )
  );
};

export default VCF;
