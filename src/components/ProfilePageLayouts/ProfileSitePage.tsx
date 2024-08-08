import type {
  ContactFieldsFragment,
  ProfileFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import Image from "next/image";
import Head from "next/head";
import { Fade, Zoom } from "react-awesome-reveal";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import VideoSection from "@/components/VideoSection";
import BandsInTownApi from "../BandsInTownApi";
import BandsInTownMapBox from "@/components/elements/BandsInTownMapBox";
import SpotifyArtistAlbums from "@/components/elements/SpotifyAPI/SpotifyArtistAlbums";
import AnimateParagraph from "../elements/AnimateParagraph";
import ContactCard from "../sections/ContactContentComponents/ContactCard";

export interface ProfileProps {
  profile: ProfileFieldsFragment;
  profiles: ProfileFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  profilePageLayoutStyleProp?: string;
}

export default function ProfileSitePage({
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

  const hasMusic =
    !!profile?.spotifyArtistName &&
    !!siteLibrary?.spotifyClientSecret &&
    !!siteLibrary?.spotifyClientId;
  const hasBooking = filteredContacts && filteredContacts.length >= 1;
  const hasVideos =
    !!siteLibrary?.youtubeApiKey &&
    !!profile?.videoBox &&
    profile?.videoBox.length >= 1;
  const hasTour = profile?.tourWidgetiFrame || profile?.bandsInTownKey;
  const hasGallery = profile?.imageGallery && profile?.imageGallery.length >= 1;

  return (
    <div className="relative">
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
      {/* NAV */}
      <div className="py-2 fixed top-0 w-full z-50 bg-bg border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full px-4">
          <Fade triggerOnce direction="left" cascade>
            <ul className="hidden lg:flex flex-row justify-center items-center  gap-x-4 ml-0 mr-auto">
              {hasMusic && (
                <li>
                  <a
                    href="#music"
                    className="flex items-center text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold"
                  >
                    Music
                  </a>
                </li>
              )}
              {hasTour && (
                <li>
                  <a
                    href="#tour"
                    className="flex items-center text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold"
                  >
                    Tour
                  </a>
                </li>
              )}
              {hasVideos && (
                <li>
                  <a
                    href="#videos"
                    className="flex items-center text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold"
                  >
                    Videos
                  </a>
                </li>
              )}
              {hasBooking && (
                <li>
                  <a
                    href="#booking"
                    className="flex items-center text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold"
                  >
                    Booking
                  </a>
                </li>
              )}
            </ul>
          </Fade>
          <Fade
            direction="up"
            cascade
            damping={0.25}
            triggerOnce
            className="mx-auto w-full max-w-max"
          >
            {profile.profileLogo?.url ? (
              <Image
                src={profile.profileLogo?.url}
                alt={profile?.name || ""}
                width={0}
                height={0}
                sizes="100%"
                className="w-full max-w-[200px] mx-auto"
              />
            ) : (
              <Fade cascade triggerOnce direction="down">
                <h1 className="text-xl lg:text-3xl !font-bold animate-[tracking_1s_ease-in] tracking-wide text-text-color uppercase pt-1 text-center mx-auto max-w-max w-full transition-all">
                  {profile.name}
                </h1>
              </Fade>
            )}
          </Fade>

          <SocialMediaIcons
            fadeDirection="right"
            cssClass="max-w-max w-full flex flex-row !social-icons !items-center !justify-center flex-wrap gap-x-4 text-text-color mr-auto ml-auto lg:mr-0"
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
      </div>
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
                className="h-[130vh] w-full object-cover object-center transition-all"
              />
            </Fade>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background h-[33%]" />
          </div>
        )}
      </div>
      {/* TOUR */}
      {hasTour && (
        <div
          className="relative h-100vh flex flex-col w-full items-center justify-center"
          id="tour"
        >
          <h2 className="text-6xl text-center uppercase mt-16 relative z-10">
            Tour
          </h2>
          {!!profile?.tourWidgetiFrame && (
            <div
              className="my-16 mx-auto max-w-5xl px-4 rounded w-full"
              id="profile-tourwidget"
            >
              {parse(profile.tourWidgetiFrame)}
            </div>
          )}
          <div>
            {!!profile.name && !!profile?.bandsInTownKey && (
              <BandsInTownApi
                apiKey={profile?.bandsInTownKey}
                artistName={profile.name}
                isSpanish={siteLibrary?.isSpanish || false}
              />
            )}
            {!!siteLibrary?.mapKey &&
              !!profile.name &&
              !!profile?.bandsInTownKey &&
              !!profile.avatarImage?.url && (
                <BandsInTownMapBox
                  apiKey={profile.bandsInTownKey}
                  artistName={profile.name}
                  mapKey={siteLibrary.mapKey}
                  icon={profile.avatarImage.url}
                  isSpanish={siteLibrary?.isSpanish || false}
                />
              )}
          </div>
          {profile.portfolioGallery[0] && (
            <Image
              sizes="100%"
              width={0}
              height={0}
              src={profile.portfolioGallery[0].url}
              alt={profile.name || ""}
              className="w-full h-full absolute inset-0 object-cover z-0 opacity-50"
            />
          )}
        </div>
      )}
      {/* MUSIC */}
      {!!profile?.spotifyArtistName &&
        siteLibrary?.spotifyClientSecret &&
        siteLibrary?.spotifyClientId && (
          <div id="music">
            <SpotifyArtistAlbums
              artistName={profile.spotifyArtistName}
              spotifyAlbumDisplay="featured"
              spotifyClientId={siteLibrary.spotifyClientId}
              spotifyClientSecret={siteLibrary.spotifyClientSecret}
            />
          </div>
        )}
      {/* VIDEOS */}
      {hasVideos && (
        <section className="bg-invert h-100vh">
          <Fade triggerOnce>
            <h2
              className="text-6xl text-center uppercase pt-16 relative z-10"
              id="videos"
            >
              VIDEOS
            </h2>
          </Fade>
          <Fade triggerOnce cascade>
            <VideoSection
              videoData={profile?.videoBox}
              youtubeApiKey={siteLibrary.youtubeApiKey}
            />
          </Fade>
        </section>
      )}
      {/* IFRAME */}
      {!!profile?.iFrame && (
        <section className="h-100vh relative flex items-center justify-center">
          <div
            className="my-16 mx-auto px-4 max-w-5xl relative z-10 w-full"
            id="profile-iframe"
          >
            {parse(profile.iFrame)}
          </div>
          {profile.portfolioGallery[1] && (
            <Image
              sizes="100%"
              width={0}
              height={0}
              src={profile.portfolioGallery[1].url}
              alt={profile.name || ""}
              className="w-full h-full absolute inset-0 object-cover z-0 opacity-50"
            />
          )}
        </section>
      )}
      {profile?.miniBio && (
        <section className="bg-fade-1st">
          <Fade triggerOnce>
            <AnimateParagraph
              animateParagraph={profile.miniBio.replace("<br/>", " ")}
            />
          </Fade>
        </section>
      )}
      {/* GALLERY */}
      {hasGallery && (
        <section className="px-4 overflow-x-hidden py-8 bg-fade-1st-reverse">
          <div className="my-0 magic-grid block h-full">
            <div className="block px-4 max-w-8xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <Fade triggerOnce cascade damping={0.05} direction="up">
                  {profile.imageGallery.map((finalImage, index) => (
                    <div
                      key={finalImage.url}
                      className=" aspect-1 block mx-auto overflow-hidden"
                      id={`gallery-${index}`}
                    >
                      <Image
                        src={finalImage.url}
                        alt=""
                        className="object-cover block mx-auto h-full w-full aspect-1"
                        sizes="100%"
                        width={0}
                        height={0}
                      />
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        </section>
      )}
      {hasBooking && (
        <section className="isolate relative h-100vh flex items-center flex-col justify-center">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <Fade triggerOnce>
            <h2
              className="text-6xl text-center uppercase pt-16 relative z-10"
              id="booking"
            >
              Booking
            </h2>
          </Fade>
          <Fade cascade triggerOnce>
            <ContactCard contactsData={filteredContacts} />
          </Fade>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </section>
      )}
    </div>
  );
}
