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
import { Fade } from "react-awesome-reveal";
import Profiles from "@/components/Profiles";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import VideoBox from "@/components/VideoBox";
import SocialMediaIcons from "@/components/SocialMediaIcons";
// import VCF from "@/components/VCF";
// import SpotifyQuery from "@/components/ArtistInfo";
// import ArtistInfo from "@/components/ArtistInfo";

export interface ProfileProps {
  profile: ProfileFieldsFragment;
  profiles: ProfileFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Profile({
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
  return (
    <>
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
      <div className="bg-background">
        {!!profile.heroImage?.url && (
          <div aria-hidden="true" className="relative overflow-hidden">
            <Fade direction="up" triggerOnce>
              <Image
                src={profile.heroImage?.url}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className="h-[38rem] w-full object-cover object-center transition-all"
              />
            </Fade>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background h-[33%]" />
          </div>
        )}

        <div
          className={`relative mx-auto max-w-8xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 ${
            !!profile.heroImage?.url ? "-mt-12" : "mt-0"
          }`}
        >
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl flex flex-col">
            <Fade direction="up" cascade damping={0.25} triggerOnce>
              {profile.profileLogo?.url && (
                <Image
                  src={profile.profileLogo?.url}
                  alt={profile?.name || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full max-w-xs mx-auto"
                />
              )}
              <h2 className="text-3xl !font-bold animate-[tracking_1s_ease-in] tracking-wide text-gray-900 sm:text-4xl gradient-text uppercase">
                {profile.name}
              </h2>
            </Fade>
            <SocialMediaIcons
              cssClass="mt-0 mb-8 w-full flex flex-row !social-icons !items-center !justify-center flex-wrap gap-x-4"
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
            />
            {/* {!!profile.name && (
              <ArtistInfo
                artistId="0TnOYISbd1XYRBk9myaseg"
                clientId="cd926e12c97646b487d5e831548f1585"
              />
            )} */}
            {profile.fullBio?.html && (
              <div className="mt-4 text-text-color body-parsed-text text-left sm:text-center">
                {parse(profile.fullBio?.html)}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="bg-invert px-4 overflow-x-hidden">
          <div className="mx-auto container relative flex flex-col md:items-center md:justify-center">
            {profile.miniBio && (
              <div className="px-2 text-4xl font-bold tracking-tight text-text-color md:text-5xl max-w-4xl text-center mx-auto relative block my-10 md:mt-12 md:mb-32">
                {parse(profile.miniBio)}
              </div>
            )}
            {profile.imageGallery.length >= 1 && (
              <>
                <div className="relative pb-0 md:pb-32 block md:mb-16">
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
      </div>

      <section className="container mx-auto">
        {!!profile?.tourWidgetiFrame && (
          <div
            className="my-16 mx-auto max-w-5xl px-4 rounded"
            id="profile-tourwidget"
          >
            {parse(profile.tourWidgetiFrame)}
          </div>
        )}
        {!!profile?.iFrame && (
          <div className="my-16 mx-auto px-4 max-w-5xl" id="profile-iframe">
            {parse(profile.iFrame)}
          </div>
        )}
        {!!profile?.videoBox && (
          <div>
            {profile.videoBox?.map((video) => (
              <div
                key={Math.random()}
                className="my-16 mx-auto px-4 max-w-5xl"
                id={`profile-videbox-${video?.videoTitle}`}
              >
                {video?.youtubePlaylistId ? (
                  <VideoPlaylistBox
                    videoTitle={video?.videoTitle || undefined}
                    youtubePlaylistId={video.youtubePlaylistId}
                    youtubeApiKey={siteLibrary.youtubeApiKey}
                  />
                ) : (
                  <VideoBox
                    videoTitle={video?.videoTitle || undefined}
                    vimeoVideoId={video?.vimeoVideoId || undefined}
                    youtubeVideoId={video?.youtubeVideoId || undefined}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      {!!filteredContacts && filteredContacts.length >= 1 && (
        <div className="bg-invert my-16">
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
                  <ul className="flex flex-col items-center justify-center lg:flex-row gap-y-8 gap-x-24">
                    {filteredContacts?.map((contact) => (
                      <li key={contact.contactName}>
                        <div className="flex items-center gap-x-4 lg:gap-x-6 flex-col justify-center lg:justify-start text-center lg:text-left lg:flex-row">
                          {contact?.contactAvatar?.url && (
                            <Image
                              className="h-14 lg:h-16 w-14 lg:w-16 rounded-full object-cover"
                              src={contact.contactAvatar.url}
                              alt=""
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
                              <p className="text-xs lg:text-sm font-semibold leading-6 !text-primary">
                                {contact.contactTitle}
                              </p>
                            )}
                            <div className="flex flex-row items-center justify-start">
                              <SocialMediaIcons
                                fade={false}
                                cssClass="text-sm my-0 text-text-color opacity-80 flex flex-row items-center justify-center lg:justify-start gap-x-2"
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
                              />
                            </div>
                            {!!contact.contactAddress && (
                              <p className="text-xs md:text-sm my-0 text-text-color opacity-80 flex flex-row items-center">
                                <FontAwesomeIcon
                                  icon={faLocationDot as IconProp}
                                  className="fa-fw mr-2 h-4 w-4"
                                />
                                <span>{contact.contactAddress}</span>
                                {contact?.contactGoogleAddressLink && (
                                  <a
                                    href={contact.contactGoogleAddressLink}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faDiamondTurnRight as IconProp}
                                      className="fa-fw ml-2 h-4 w-4"
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
      {!!profiles && profile.profileType && (
        <Profiles
          profiles={filteredProfiles}
          profileLayoutStyle="grid"
          profileSectionTitle={profile.profileType}
          profileType={profile.profileType}
        />
      )}
    </>
  );
}
