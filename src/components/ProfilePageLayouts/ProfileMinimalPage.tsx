import type {
  ContactFieldsFragment,
  ProfileFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom } from "react-awesome-reveal";
import Profiles from "@/components/Profiles";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import VideoSection from "@/components/VideoSection";
import BandsInTownApi from "@/components/elements/BandsInTownMapBox";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faCloudArrowDown,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faTwitter,
  faYoutube,
  faGithub,
  faLinkedin,
  faSnapchat,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./ProfileMinimalPage.scss";
// import VCF from "@/components/VCF";
// import SpotifyQuery from "@/components/ArtistInfo";
// import ArtistInfo from "@/components/ArtistInfo";

export interface ProfileProps {
  profile: ProfileFieldsFragment;
  profiles: ProfileFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function ProfileMinimalPage({
  profile,
  siteLibrary,
  contacts,
  profiles,
}: ProfileProps) {
  const filteredContacts = contacts?.filter((contact) =>
    profile?.contactQuery.includes(contact.contactQuery)
  );
  const filteredProfiles = profiles?.filter(
    (tempProf) => profile.profileSlug !== tempProf.profileSlug
  );

  // cardLink
  // cardModal
  // grid
  // offset
  // record
  // slider
  // team
  // universal
  // vertical
  // basic
  // mason
  // blob
  // wavy
  // youtube
  // myspace
  // alternate
  // epk
  // fullScreen
  // netflix
  // snap
  // sport

  return (
    <div>
      <Head>
        {!!profile?.name && (
          <title>{`${profile.name} - ${siteLibrary.title}`}</title>
        )}
        {!!profile.heroImage?.url && (
          <meta property="og:image" content={profile.heroImage?.url} />
        )}
        {!!siteLibrary?.title && (
          <meta name="description" content={siteLibrary.title} />
        )}
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
      </Head>
      <section
        className={`profile-container h-100vh tinted-blurred`}
        style={{ backgroundImage: `url(${profile.heroImage?.url})` }}
      >
        <section className="page-content py-8 mx-auto px-4 flex justify-center flex-col max-w-4xl relative z-20">
          {!!profile?.avatarImage && (
            <Image
              src={profile?.avatarImage.url}
              alt=""
              sizes="100%"
              width={0}
              height={0}
              className="w-32 h-32 mx-auto object-cover my-6 rounded-[100%] border border-primary"
            />
          )}
          <div className="flex justify-center flex-col mx-auto w-full">
            <h1 className="text-2xl font-bold text-center uppercase mb-2">
              {profile.name}
            </h1>
            {!!profile.miniBio && (
              <div className="parsed-text mb-4 text-center opacity-90 text-text-color">
                {parse(profile.miniBio)}
              </div>
            )}

            <div className="music-links w-full">
              {!!profile.appleMusicLink && (
                <a
                  href={profile.appleMusicLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Apple Music"
                  className="music-link"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    src="https://media.graphassets.com/11P9OkXpTv2E3EGqE0rp"
                    alt=""
                  />
                </a>
              )}
              {!!profile?.spotifyLink && (
                <a
                  href={profile.spotifyLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Spotify"
                  className="music-link"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    src="https://media.graphassets.com/g6rvwDQyRFWV540FDSqI"
                    alt=""
                  />
                </a>
              )}
              {!!profile?.pandoraLink && (
                <a
                  href={profile?.pandoraLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Pandora"
                  className="music-link"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    src="https://media.graphassets.com/DADIPa7BQZ2Sr4wjOhNw"
                    alt=""
                  />
                </a>
              )}

              {!!profile?.soundcloudLink && (
                <a
                  href={profile?.soundcloudLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Soundcloud"
                  className="music-link"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    src="https://media.graphassets.com/y0WEyayRxugvRFXXHkKg"
                    alt=""
                  />
                </a>
              )}
            </div>

            <div className="social-links">
              {!!profile?.instagramLink && (
                <a
                  href={profile.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-instagram"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faInstagram as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{instagramLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
              {!!profile?.facebookLink && (
                <a
                  href={profile.facebookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-facebook"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{facebookLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
              {!!profile?.tikTokLink && (
                <a
                  href={profile.tikTokLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-tiktok"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faTiktok as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{tikTokLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
              {!!profile?.youtubeLink && (
                <a
                  href={profile?.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-youtube"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faYoutube as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{youtubeChannel.split('/').pop()}</span> */}
                  </div>
                </a>
              )}

              {!!profile?.linkedinLink && (
                <a
                  href={profile.linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-linkedin"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faLinkedin as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{instagramLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}

              {!!profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-download"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope as IconProp}
                      className="fa-fw stroke-black stroke-1 h-8 w-8 flex"
                    />
                    {/* <span>{instagramLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
              {!!profile?.websiteLink && (
                <a
                  href={profile.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-download"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faGlobe as IconProp}
                      className="fa-fw stroke-black stroke-1 flex h-8 w-8"
                    />
                    {/* <span>{instagramLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
              {!!profile?.whatsapp && (
                <a
                  href={
                    profile.whatsapp.includes("http")
                      ? profile.whatsapp
                      : `https://api.whatsapp.com/send?phone=${profile.whatsapp}&text=Hello`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-whatsapp"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faWhatsapp as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{instagramLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
              {!!profile?.twitterLink && (
                <a
                  href={profile.twitterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link gr-twitter"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faTwitter as IconProp}
                      className="fa-fw h-8 w-8 flex"
                    />
                    {/* <span>{instagramLink.split('/').pop()}</span> */}
                  </div>
                </a>
              )}
            </div>

            {!!profile?.iFrame && (
              <div className="max-w-8xl mx-auto w-full block my-8">
                {parse(profile.iFrame)}
              </div>
            )}
            {!!profile?.tourWidgetiFrame && (
              <div className="parsed-text mb-4">
                {parse(profile.tourWidgetiFrame)}
              </div>
            )}
          </div>

          {!!profile?.profileLogo && (
            <Link href="/" className="mx-auto flex">
              <Image
                src={profile.profileLogo.url}
                alt=""
                sizes="100%"
                width={0}
                height={0}
                className="w-full h-16 mx-auto object-contain my-8"
              />
            </Link>
          )}
          {!!profile?.phoneNumber && (
            <p className="opacity-50 text-center mx-auto">
              {profile.phoneNumber}
            </p>
          )}
        </section>
      </section>
      {!!filteredContacts && filteredContacts.length >= 1 && (
        <div className="bg-invert">
          <section
            aria-labelledby="features-heading"
            className="relative h-80vh flex items-center"
          >
            {profile.avatarImage?.url && (
              <div className="aspect-h-3 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                <Image
                  src={profile.avatarImage.url}
                  alt={profile?.name || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            )}
            {!!filteredContacts && (
              <div className="mx-auto px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                <div className="lg:col-start-2 text-center lg:text-left">
                  <h2
                    id="contacts-heading"
                    className="font-medium text-background mb-0"
                  >
                    {profile.name}
                  </h2>
                  <p className="mt-0 mb-4 text-3xl font-bold tracking-tight text-background opacity-80">
                    {siteLibrary.isSpanish ? "Contáctenos" : "Contact Details"}
                  </p>
                  <ul className="flex flex-col items-center justify-start lg:flex-row gap-y-8 gap-x-24 flex-wrap">
                    {filteredContacts?.map((contact) => (
                      <li key={contact.contactName} className="">
                        <div className="flex items-center gap-x-4 lg:gap-x-6 flex-col justify-center lg:justify-start text-center lg:text-left lg:flex-row w-full">
                          {contact?.contactAvatar?.url && (
                            <Image
                              className="h-14 lg:h-16 w-14 lg:w-16 rounded-full object-cover"
                              src={contact.contactAvatar.url}
                              alt={contact.contactName}
                              width={64}
                              height={64}
                              sizes="100%"
                            />
                          )}
                          <div>
                            {contact.contactName && (
                              <h3 className="text-sm lg:text-base font-bold leading-6 lg:leading-7 tracking-tight text-text-color">
                                {contact.contactName}
                              </h3>
                            )}
                            {contact.contactTitle && (
                              <p className="text-xs lg:text-sm font-light leading-6 !text-primary w-11/12">
                                {contact.contactTitle}
                              </p>
                            )}
                            <div className="flex flex-row items-center justify-start">
                              <SocialMediaIcons
                                fadeDirection="up"
                                cssClass="text-sm my-0 text-text-color opacity-80 flex flex-row items-center justify-center lg:justify-start gap-x-2 px-1 lg:pl-0 lg:pr-1"
                                phoneLinkProp={
                                  contact?.contactPhone || undefined
                                }
                                whatsappLinkProp={
                                  contact?.contactWhatsapp || undefined
                                }
                                emailLinkProp={
                                  contact?.contactEmail || undefined
                                }
                                displayVcf={true}
                                name={contact.contactName || undefined}
                                avatar={contact.contactAvatar?.url || undefined}
                                calendlyLinkProp={
                                  contact?.contactCalendly || undefined
                                }
                                linkedinLinkProp={
                                  contact?.contactLinkedin || undefined
                                }
                                instagramLinkProp={
                                  contact?.contactInstagram || undefined
                                }
                              />
                            </div>
                            {!!contact.contactAddress && (
                              <p className="text-xs md:text-sm my-0 text-text-color opacity-80 flex flex-row items-center">
                                <FontAwesomeIcon
                                  icon={faLocationDot as IconProp}
                                  className="fa-fw mr-2 h-5 w-5 flex"
                                />
                                <span className="max-w-[140px]">
                                  {contact.contactAddress}
                                </span>
                                {contact?.contactGoogleAddressLink && (
                                  <a
                                    href={contact.contactGoogleAddressLink}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faDiamondTurnRight as IconProp}
                                      className="fa-fw ml-2 h-5 w-5 flex"
                                    />
                                  </a>
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>
      )}
      {!!filteredProfiles && profile.profileType && siteLibrary?.logo?.url && (
        <Profiles
          profiles={filteredProfiles}
          profileLayoutStyle="grid"
          // profileSectionTitle={profile.profileType || ""}
          profileType={profile.profileType}
          siteID={siteLibrary.siteId}
          siteLogo={siteLibrary?.logo?.url}
        />
      )}
    </div>
  );
}
