import SocialMediaIcons from "@/components/SocialMediaIcons";

export interface ContentSocialMediaLinksProps {
  socialMediaLinks: string[];
  isSpanish?: boolean;
}

export default function ContentSocialMediaLinks({
  socialMediaLinks,
  isSpanish,
}: ContentSocialMediaLinksProps) {
  const sortedLinks = socialMediaLinks.reduce(
    (acc, link) => {
      if (link.includes("facebook")) {
        acc.facebook = link;
      } else if (link.includes("instagram")) {
        acc.instagram = link;
      } else if (link.includes("tiktok")) {
        acc.tikTok = link;
      } else if (link.includes("spotify")) {
        acc.spotify = link;
      } else if (link.includes("twitter")) {
        acc.twitter = link;
      } else if (link.includes("youtube")) {
        acc.youtube = link;
      } else if (link.includes("soundcloud")) {
        acc.soundcloud = link;
      } else if (link.includes("pandora")) {
        acc.pandora = link;
      } else if (link.includes("applemusic")) {
        acc.appleMusic = link;
      } else if (link.includes("threads")) {
        acc.threads = link;
      } else if (link.includes("linkedin")) {
        acc.linkedin = link;
      } else if (link.includes("email")) {
        acc.email = link;
      } else if (link.includes("whatsapp")) {
        acc.whatsapp = link;
      } else if (link.includes("calendly")) {
        acc.calendly = link;
      } else if (link.includes("phone")) {
        acc.phone = link;
      } else if (link.includes("github")) {
        acc.github = link;
      } else if (link.includes("google.com/maps")) {
        acc.googleMap = link;
      } else {
        acc.website = link;
      }
      return acc;
    },
    {
      facebook: "",
      instagram: "",
      tikTok: "",
      spotify: "",
      twitter: "",
      youtube: "",
      soundcloud: "",
      pandora: "",
      appleMusic: "",
      threads: "",
      linkedin: "",
      email: "",
      whatsapp: "",
      calendly: "",
      phone: "",
      github: "",
      googleMap: "",
      website: "",
    }
  );

  return (
    <div className="my-32 py-2 flex flex-col flex-wrap items-center justify-center">
      <h2 className="uppercase font-bold text-4xl">
        {isSpanish ? "¡Síguenos" : "Follow Us!"}
      </h2>
      <SocialMediaIcons
        fadeDirection="up"
        iconClass="scale-[2]"
        cssClass="w-full flex flex-row social-icons-row has-border items-center justify-center text-primary flex-wrap gap-x-8 p-4"
        facebookLinkProp={sortedLinks.facebook || undefined}
        instagramLinkProp={sortedLinks.instagram || undefined}
        tikTokLinkProp={sortedLinks.tikTok || undefined}
        spotifyLinkProp={sortedLinks.spotify || undefined}
        twitterLinkProp={sortedLinks.twitter || undefined}
        youtubeLinkProp={sortedLinks.youtube || undefined}
        soundcloudLinkProp={sortedLinks.soundcloud || undefined}
        pandoraLinkProp={sortedLinks.pandora || undefined}
        appleMusicLinkProp={sortedLinks.appleMusic || undefined}
        threadsLinkProp={sortedLinks.threads || undefined}
        linkedinLinkProp={sortedLinks.linkedin || undefined}
        emailLinkProp={sortedLinks.email || undefined}
        whatsappLinkProp={sortedLinks.whatsapp || undefined}
        calendlyLinkProp={sortedLinks.calendly || undefined}
        phoneLinkProp={sortedLinks.phone || undefined}
        githubLinkProp={sortedLinks.github || undefined}
        googleMapLinkProp={sortedLinks.googleMap || undefined}
        websiteLinkProp={sortedLinks.website || undefined}
      />
    </div>
  );
}
