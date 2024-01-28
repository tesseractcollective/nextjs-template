import { ContactFieldsFragment } from "@/graphql/generated/graphql";
import React, { FC, useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

interface Props {
  contact?: ContactFieldsFragment;
  name?: string;
  email?: string;
  phone?: string;
  calendly?: string;
  linkedin?: string;
  avatar?: string;
  facebook?: string;
  twitterX?: string;
  threads?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  github?: string;
}

const VCF: FC<Props> = ({
  contact,
  name,
  email,
  phone,
  calendly,
  avatar,
  facebook,
  twitterX,
  linkedin,
  threads,
  youtube,
  instagram,
  tiktok,
  github,
}: Props) => {
  const [vCardData, setVCardData] = useState("");
  const vcfData = {
    name: contact?.contactName || name,
    email: contact?.contactEmail || email || "",
    phone: contact?.contactPhone || phone || "",
    photo: avatar || contact?.contactAvatar?.url || "",
    calendly: calendly || contact?.contactCalendly || "",
    linkedin: linkedin || contact?.contactLinkedin || "",
    facebook: facebook || "",
    twitterX: twitterX || "",
    threads: threads || "",
    youtube: youtube || "",
    instagram: instagram || "",
    tiktok: tiktok || "",
    github: github || "",
  };
  // Wrap generateVCard in a useCallback hook
  const generateVCard = useCallback(() => {
    const vCardContent = `BEGIN:VCARD\nVERSION:3.0\nFN:${vcfData.name}${
      vcfData.email ? `\nEMAIL:${vcfData.email}` : ""
    }${
      vcfData.phone
        ? `\nTEL;TYPE=cell:${vcfData.phone}\nPHOTO;TYPE=JPEG;VALUE=URI:${vcfData.photo}`
        : ""
    }${
      vcfData.calendly
        ? `\nX-SOCIALPROFILE;type=calendly:${vcfData.calendly}`
        : ""
    }${
      vcfData.linkedin
        ? `\nX-SOCIALPROFILE;type=linkedin:${vcfData.linkedin}`
        : ""
    }${
      vcfData.facebook
        ? `\nX-SOCIALPROFILE;type=facebook:${vcfData.facebook}`
        : ""
    }${
      vcfData.twitterX
        ? `\nX-SOCIALPROFILE;type=twitterX:${vcfData.twitterX}`
        : ""
    }${
      vcfData.threads ? `\nX-SOCIALPROFILE;type=threads:${vcfData.threads}` : ""
    }${
      vcfData.youtube ? `\nX-SOCIALPROFILE;type=youtube:${vcfData.youtube}` : ""
    }${
      vcfData.instagram
        ? `\nX-SOCIALPROFILE;type=instagram:${vcfData.instagram}`
        : ""
    }${
      vcfData.tiktok ? `\nX-SOCIALPROFILE;type=tiktok:${vcfData.tiktok}` : ""
    }${
      vcfData.github ? `\nX-SOCIALPROFILE;type=github:${vcfData.github}` : ""
    }\nEND:VCARD`;
    setVCardData(vCardContent);
  }, [
    vcfData.calendly,
    vcfData.email,
    vcfData.linkedin,
    vcfData.name,
    vcfData.phone,
    vcfData.photo,
    vcfData.facebook,
    vcfData.github,
    vcfData.instagram,
    vcfData.threads,
    vcfData.tiktok,
    vcfData.twitterX,
    vcfData.youtube,
  ]);

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
            `contact-card-${(vcfData.name || "download")
              .toLocaleLowerCase()
              .replace(" ", "-")}.vcf`
          );
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="max-w-max mx-auto text-center !text-link transition-all cursor-pointer p-0 m-0 flex"
        type="button"
        title="Download Contact Vcard"
      >
        <FontAwesomeIcon
          icon={faAddressCard as IconProp}
          className="fa-fw h-5 w-5 flex aspect-1"
        />
        <span className="sr-only">Download Contact Vcard</span>
      </button>
    )
  );
};

export default VCF;
