import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import type { ContactFieldsFragment } from "@/graphql/generated/graphql";

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
}) => {
  const [vCardData, setVCardData] = useState("");

  // Aggregate all contact data into a single object
  const vcfData = useMemo(
    () => ({
      name: contact?.contactName || name || "",
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
    }),
    [
      contact?.contactName,
      contact?.contactEmail,
      contact?.contactPhone,
      contact?.contactAvatar?.url,
      contact?.contactCalendly,
      contact?.contactLinkedin,
      name,
      email,
      phone,
      avatar,
      calendly,
      linkedin,
      facebook,
      twitterX,
      threads,
      youtube,
      instagram,
      tiktok,
      github,
    ]
  );

  // Generate the vCard data
  const generateVCard = useCallback(() => {
    const formatField = (value: string) => value.replace(/[:\n]/g, "");

    let vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${formatField(vcfData.name)}`, // Full name
    ];

    // Add email if available
    if (vcfData.email) {
      vCard.push(`EMAIL;TYPE=INTERNET:${formatField(vcfData.email)}`);
    }

    // Add phone if available
    if (vcfData.phone) {
      vCard.push(`TEL;TYPE=CELL:${formatField(vcfData.phone)}`);
    }

    // Add photo if available
    if (vcfData.photo) {
      vCard.push(`PHOTO;VALUE=URI:${formatField(vcfData.photo)}`);
    }

    // Add social profiles as URLs
    const socialProfiles = {
      CALENDLY: vcfData.calendly,
      LINKEDIN: vcfData.linkedin,
      FACEBOOK: vcfData.facebook,
      TWITTER: vcfData.twitterX,
      THREADS: vcfData.threads,
      YOUTUBE: vcfData.youtube,
      INSTAGRAM: vcfData.instagram,
      TIKTOK: vcfData.tiktok,
      GITHUB: vcfData.github,
    };

    Object.entries(socialProfiles).forEach(([platform, url]) => {
      if (url) {
        vCard.push(`URL;TYPE=${platform}:${formatField(url)}`);
      }
    });

    vCard.push("END:VCARD");
    setVCardData(vCard.join("\n"));
  }, [vcfData]);

  // Generate vCard on component mount or when data changes
  useEffect(() => {
    generateVCard();
  }, [generateVCard]);

  // Handle download of the vCard
  const handleDownload = useCallback(() => {
    if (!vcfData.name) return;

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `${vcfData.name.toLowerCase().replace(/\s+/g, "-")}-contact.vcf`
    );
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }, [vCardData, vcfData.name]);

  return (
    vCardData && (
      <button
        onClick={handleDownload}
        className="max-w-max mx-auto text-center !text-link transition-all cursor-pointer p-0 m-0 flex"
        type="button"
        title="Download Contact Card"
      >
        <FontAwesomeIcon
          icon={faAddressCard as IconProp}
          className="fa-fw h-5 w-5 flex aspect-1"
        />
        <span className="sr-only">Download Contact Card</span>
      </button>
    )
  );
};

export default VCF;
