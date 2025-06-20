import type {
  ContactFieldsFragment,
  ProfileFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Head from "next/head";
import {
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom } from "react-awesome-reveal";
import Profiles from "@/components/Profiles";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import VideoSection from "@/components/VideoSection";
import BandsInTownMapBox from "@/components/elements/BandsInTownMapBox";
// import VCF from "@/components/VCF";
import SpotifyArtistAlbums from "@/components/elements/SpotifyAPI/SpotifyArtistAlbums";
// import ArtistInfo from "@/components/ArtistInfo";

export interface ProfileProps {
  profile: ProfileFieldsFragment;
  profiles: ProfileFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  profilePageLayoutStyleProp?: string;
}

export default function ProfileMusicTwoPage({
  profile,
  siteLibrary,
  contacts,
  profiles,
  profilePageLayoutStyleProp,
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
      <section className="bg-bg py-16">
        <div className="max-w-12xl flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto w-full px-4 py-8">
          <Fade direction="up" cascade damping={0.25} triggerOnce>
            {profile.profileLogo?.url && (
              <Image
                src={profile.profileLogo?.url}
                alt={profile?.name || ""}
                width={0}
                height={0}
                sizes="100%"
                className="w-full mx-auto"
              />
            )}
            <h2 className="text-3xl !font-bold animate-[tracking_1s_ease-in] tracking-wide text-gray-900 sm:text-4xl gradient-text uppercase w-full">
              {profile.name}
            </h2>
          </Fade>
          <SocialMediaIcons
            fadeDirection="up"
            cssClass="w-full flex flex-row !social-icons !items-center !justify-center flex-wrap gap-x-4 text-text-color max-w-max scale-[1.2]"
            instagramLinkProp={profile?.instagramLink || undefined}
            spotifyLinkProp={profile?.spotifyLink || undefined}
            facebookLinkProp={profile?.facebookLink || undefined}
            twitterLinkProp={profile?.twitterLink || undefined}
            youtubeLinkProp={profile?.youtubeLink || undefined}
            tikTokLinkProp={profile?.tikTokLink || undefined}
            appleMusicLinkProp={profile?.appleMusicLink || undefined}
            pandoraLinkProp={profile?.pandoraLink || undefined}
            soundcloudLinkProp={profile?.soundcloudLink || undefined}
            linkedinLinkProp={profile?.linkedinLink || undefined}
            emailLinkProp={profile.email || undefined}
            phoneLinkProp={profile.phoneNumber || undefined}
            calendlyLinkProp={profile.calendlyLink || undefined}
            displayVcf={profile.displayVcf || undefined}
            avatar={profile.avatarImage?.url || undefined}
            name={profile.name || undefined}
            websiteLinkProp={profile?.websiteLink || undefined}
          />
        </div>
        <div className="max-w-12xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {!!profile.heroImage?.url && (
            <Fade direction="up" triggerOnce>
              <Image
                src={profile.heroImage?.url}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className="h-[25rem] w-full aspect-video object-cover object-center transition-all"
              />
            </Fade>
          )}
          {profile.fullBio?.html && (
            <div className="text-text-color body-parsed-text text-left max-w-4xl">
              {parse(profile.fullBio?.html)}
            </div>
          )}
        </div>
      </section>
      <section className="bg-invert">
        <div className="px-4 overflow-x-hidden py-8">
          <div className="mx-auto container relative flex flex-col md:items-center md:justify-center">
            {profile.miniBio && (
              <div className="px-2 text-4xl font-bold tracking-tight text-text-color md:text-5xl max-w-4xl text-center mx-auto relative block my-10 md:mt-12 md:mb-32">
                {parse(profile.miniBio)}
              </div>
            )}
            {profile.imageGallery.length >= 1 && (
              <>
                <div className="relative pb-0 md:pb-32 block md:mb-16 min-h-[50vh]">
                  <div className="hidden md:flex min-w-max space-x-6 mx-auto lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8 sm:-mb-20">
                      {profile?.imageGallery[0]?.url && (
                        <Fade triggerOnce direction="left">
                          <div className="flex-shrink-0 relative">
                            <Image
                              src={profile.imageGallery[0].url}
                              className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                              alt=""
                              width={288}
                              height={288}
                              sizes="100%"
                              id="image-0"
                            />
                          </div>
                        </Fade>
                      )}

                      {profile?.imageGallery[1]?.url && (
                        <Fade triggerOnce direction="left">
                          <div className="mt-6 flex-shrink-0 sm:mt-0 relative">
                            <Image
                              src={profile.imageGallery[1].url}
                              className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                              alt=""
                              width={288}
                              height={288}
                              sizes="100%"
                              id="image-1"
                            />
                          </div>
                        </Fade>
                      )}
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      {profile?.imageGallery[2]?.url && (
                        <Fade triggerOnce direction="up">
                          <div className="flex-shrink-0 relative">
                            <Image
                              src={profile.imageGallery[2].url}
                              className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                              alt=""
                              width={288}
                              height={288}
                              sizes="100%"
                              id="image-2"
                            />
                          </div>
                        </Fade>
                      )}
                      {profile?.imageGallery[3]?.url && (
                        <Fade triggerOnce direction="up">
                          <div className="mt-6 flex-shrink-0 sm:mt-0 relative">
                            <Image
                              src={profile.imageGallery[3].url}
                              className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                              alt=""
                              width={288}
                              height={288}
                              sizes="100%"
                              id="image-3"
                            />
                          </div>
                        </Fade>
                      )}
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8 sm:-mb-20">
                      {profile?.imageGallery[4]?.url && (
                        <Fade triggerOnce direction="right">
                          <div className="flex-shrink-0 relative">
                            <Image
                              src={profile.imageGallery[4].url}
                              className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                              alt=""
                              width={288}
                              height={288}
                              sizes="100%"
                              id="image-4"
                            />
                          </div>
                        </Fade>
                      )}
                      {profile?.imageGallery[5]?.url && (
                        <Fade triggerOnce direction="right">
                          <div className="mt-6 flex-shrink-0 sm:mt-0 relative">
                            <Image
                              src={profile.imageGallery[5].url}
                              className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                              alt=""
                              width={288}
                              height={288}
                              sizes="100%"
                              id="image-5"
                            />
                          </div>
                        </Fade>
                      )}
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="grid md:hidden grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mb-12"
                >
                  {profile.imageGallery.map((image) => (
                    <li key={image?.url} className="relative">
                      <Fade direction="up" triggerOnce cascade damping={0.1}>
                        <div className="group aspect-h-10 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 relative h-24">
                          {!!image?.url && (
                            <Image
                              src={image?.url}
                              alt=""
                              className="object-center mx-auto object-cover block"
                              width={0}
                              height={0}
                              sizes="100%"
                            />
                          )}
                        </div>
                      </Fade>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
      {/* {!!profile.name && <SpotifyAlbums artistId="4aXXDj9aZnlshx7mzj3W1N" />} */}
      <section className="container mx-auto">
        {!!profile?.tourWidgetiFrame && (
          <div
            className="my-16 mx-auto max-w-5xl px-4 rounded"
            id="profile-tourwidget"
          >
            {parse(profile.tourWidgetiFrame)}
          </div>
        )}
        {!!siteLibrary?.mapKey &&
          !!profile.name &&
          !!profile?.bandsInTownKey &&
          !!siteLibrary?.metaAppleTouchIcon && (
            <BandsInTownMapBox
              apiKey={profile.bandsInTownKey}
              artistName={profile.name}
              mapKey={siteLibrary.mapKey}
              icon={siteLibrary?.metaAppleTouchIcon.url}
              isSpanish={siteLibrary?.isSpanish || false}
            />
          )}
        {!!profile?.spotifyArtistName &&
          siteLibrary?.spotifyClientSecret &&
          siteLibrary?.spotifyClientId && (
            <SpotifyArtistAlbums
              artistName={profile.spotifyArtistName}
              spotifyAlbumDisplay="slider"
              spotifyClientId={siteLibrary.spotifyClientId}
              spotifyClientSecret={siteLibrary.spotifyClientSecret}
            />
          )}
        {!!profile?.iFrame && (
          <div className="my-16 mx-auto px-4 max-w-5xl" id="profile-iframe">
            {parse(profile.iFrame)}
          </div>
        )}
        {!!siteLibrary?.youtubeApiKey &&
          !!profile?.videoBox &&
          profile?.videoBox.length >= 1 && (
            <VideoSection
              videoData={profile?.videoBox}
              youtubeApiKey={siteLibrary.youtubeApiKey}
            />
          )}
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
                                linkedinLinkProp={
                                  contact?.contactLinkedin || ""
                                }
                                calendlyLinkProp={
                                  contact.contactCalendly || undefined
                                }
                                instagramLinkProp={
                                  contact.contactInstagram || undefined
                                }
                                whatsappLinkProp={
                                  contact.contactWhatsapp || undefined
                                }
                                displayVcf={true}
                                avatar={contact.contactAvatar?.url || undefined}
                                name={contact.contactName || undefined}
                                emailLinkProp={contact?.contactEmail || ""}
                                phoneLinkProp={contact?.contactPhone || ""}
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
          siteDomain={siteLibrary.metaDomain || ""}
          spotifyClientId={siteLibrary?.spotifyClientId || ""}
          spotifyClientSecret={siteLibrary?.spotifyClientSecret || ""}
        />
      )}
    </div>
  );
}
