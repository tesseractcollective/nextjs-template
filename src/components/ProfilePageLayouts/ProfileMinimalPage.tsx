import type {
  ContactFieldsFragment,
  ProfileFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import VideoSection from "@/components/VideoSection";
import BandsInTownApi from "@/components/elements/BandsInTownMapBox";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faGlobe,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
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
import BandsInTownMapBox from "@/components/elements/BandsInTownMapBox";
import ContactsSection from "../ContactsSection";
import SpotifyArtistAlbums from "@/components/elements/SpotifyAPI/SpotifyArtistAlbums";
import GridBox from "@/components/sections/GridBox";
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
  console.log(profile);
  return (
    <div>
      <Head>
        {!!profile?.name && (
          <title>{`${profile.name} - ${siteLibrary.title}`}</title>
        )}
        {!!profile.avatarImage?.url && (
          <meta property="og:image" content={profile.avatarImage?.url} />
        )}
        {!!siteLibrary?.title && (
          <meta
            name="description"
            content={`${profile.name} - ${siteLibrary.title}`}
          />
        )}
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
      </Head>
      <div className="bg-[#000]">
        <section
          className={`profile-container h-100vh tinted-blurred bg-no-repeat bg-fixed bg-cover bg-top`}
          style={{ backgroundImage: `url(${profile.heroImage?.url})` }}
        >
          <section className="page-content py-8 mx-auto px-4 flex justify-center flex-col max-w-4xl relative z-20">
            <Fade direction="down" triggerOnce>
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
            </Fade>

            <div className="flex justify-center flex-col mx-auto w-full">
              <Fade className="all-text-light" triggerOnce>
                <h1 className="text-2xl font-bold text-center uppercase mb-2">
                  {profile.name}
                </h1>
                {!!profile.miniBio && (
                  <p className="parsed-text mb-4 text-center opacity-90 max-w-md mx-auto">
                    {parse(profile.miniBio)}
                  </p>
                )}
              </Fade>
              <div className="rounded overflow-hidden">
                <Fade direction="up" triggerOnce className="music-links w-full">
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
                  {profile?.spotifyLink && (
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
                </Fade>

                <Fade direction="up" triggerOnce className="social-links">
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
                  {!!profile?.phoneNumber && (
                    <a
                      href={`tel:${profile.phoneNumber.replace(/-/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link gr-phone"
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faMobileRetro as IconProp}
                          className="fa-fw h-8 w-8 flex"
                        />
                        <span className="sr-only">call</span>
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
                </Fade>
              </div>

              {!!profile?.cards && <GridBox gridBoxData={profile.cards} />}
              <div className="all-text-light">
                {!!profile?.spotifyArtistName &&
                  siteLibrary?.spotifyClientSecret &&
                  siteLibrary?.spotifyClientId && (
                    <SpotifyArtistAlbums
                      artistName={profile.spotifyArtistName}
                      spotifyAlbumDisplay="featured"
                      spotifyClientId={siteLibrary.spotifyClientId}
                      spotifyClientSecret={siteLibrary.spotifyClientSecret}
                    />
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

            {!!siteLibrary?.youtubeApiKey &&
              !!profile?.videoBox &&
              profile?.videoBox.length >= 1 && (
                <VideoSection
                  videoData={profile?.videoBox}
                  youtubeApiKey={siteLibrary.youtubeApiKey}
                />
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
            {!!contacts && contacts.length >= 1 && (
              <ContactsSection
                contactTypes={profile?.contactQuery}
                contactsData={contacts}
              />
            )}

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
          </section>
        </section>
      </div>
    </div>
  );
}
