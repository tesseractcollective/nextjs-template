import type {
  ProfileFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Head from "next/head";
import VideoBox from "@/components/VideoBox";
import {
  faSpotify,
  faInstagram,
  faFacebook,
  faTiktok,
  faTwitter,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDiamondTurnRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Profiles from "@/components/Profiles";

export interface ProfileProps {
  profile: ProfileFieldsFragment;
  // profiles?: ProfileFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Profile({ profile, siteLibrary }: ProfileProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <Head>
        {!!profile?.name && <title>{profile.name}</title>}
        {!!profile.heroImage?.url && (
          <meta property="og:image" content={profile.heroImage?.url} />
        )}
      </Head>
      <div className="bg-dark">
        <div aria-hidden="true" className="relative">
          {!!profile.heroImage?.url && (
            <Image
              src={profile.heroImage?.url}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="h-[30rem] w-full object-cover object-center"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark" />
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-gray-900 sm:text-4xl gradient-text uppercase">
              {profile.name}
            </h2>
            <nav className="mt-0 mb-8 w-full flex flex-row social-icons items-center justify-center">
              {!!profile.instagramLink && (
                <a
                  href={profile.instagramLink}
                  target="_blank"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram as IconProp}
                    className="fa-fw h-6 w-6"
                  />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {!!profile.spotifyLink && (
                <a
                  href={profile.spotifyLink}
                  target="_blank"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  title="Spotify"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSpotify as IconProp}
                    className="fa-fw h-6 w-6"
                  />
                  <span className="sr-only">Spotify</span>
                </a>
              )}
              {!!profile.facebookLink && (
                <a
                  href={profile.facebookLink}
                  target="_blank"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  title="Facebook"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook as IconProp}
                    className="fa-fw h-6 w-6"
                  />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {!!profile.twitterLink && (
                <a
                  href={profile.twitterLink}
                  target="_blank"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  title="Twitter"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter as IconProp}
                    className="fa-fw h-6 w-6"
                  />
                  <span className="sr-only">Twitter</span>
                </a>
              )}

              {!!profile.youtubeLink && (
                <a
                  href={profile.youtubeLink}
                  target="_blank"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  title="Youtube"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube as IconProp}
                    className="fa-fw h-6 w-6"
                  />
                  <span className="sr-only">Youtube</span>
                </a>
              )}
              {!!profile.tikTokLink && (
                <a
                  href={profile.tikTokLink}
                  target="_blank"
                  title="TikTok"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTiktok as IconProp}
                    className="fa-fw h-6 w-6"
                  />
                  <span className="sr-only">TikTok</span>
                </a>
              )}
              {!!profile?.appleMusicLink && (
                <a
                  href={profile.appleMusicLink}
                  target="_blank"
                  title="Apple Music"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-music fa-fw h-6 w-6"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M511.8,130.7c0-15.7-1.3-31.4-5.1-46.7C500,56,484,34.7,460.2,19C448,11,434.5,6.1,420.1,3.5c-11-2-22.2-2.9-33.3-3.2   L384.1,0H127.6c-3.2,0.3-6.5,0.4-9.7,0.6C102,1.5,86.2,3.2,71.1,9.2C42.7,20.4,22.1,40.1,10.1,68.4C5.9,78,3.8,88.2,2.3,98.5   c-1.2,8.3-1.9,16.8-2.2,25.2l-0.2,2v260.7c0.2,3,0.3,6,0.5,9c1.1,17.4,3.3,34.7,10.7,50.7c13.8,30.3,37.1,50.2,69,59.7   c8.9,2.8,18.2,4,27.6,4.8c11.8,1.2,23.7,1.3,35.5,1.3h235.3c11.2,0,22.3-0.7,33.5-2.2c17.6-2.2,34.1-7.4,49-17.2   c17.9-11.8,31.4-27.5,40.1-47.1c4-9,6.2-18.6,7.9-28.2c2.4-14.4,2.9-29,2.9-43.6c-0.1-81,0-162-0.1-243L511.8,130.7z M374.8,215.8   v121.8c0,8.9-1.2,17.7-5.2,25.7c-6.2,12.6-16.2,20.5-29.6,24.3c-7.4,2.2-15.1,3.3-22.8,3.7c-20.2,1-37.8-12.7-41.4-32.7   c-3.1-16.5,4.8-34.7,22.2-43.2c6.8-3.3,14.2-5.3,21.7-6.8c8.1-1.7,16.2-3.3,24.2-5.2c5.9-1.3,9.7-4.9,10.9-11l0.4-4.1   c0-38.7,0-77.5,0-116.2l-0.6-3.9c-0.8-3.2-3.2-5.2-6.5-5c-3.4,0.2-6.7,0.7-10.1,1.4c-16.3,3.2-32.5,6.4-48.7,9.7l-78.9,15.9   l-1.1,0.3c-5.9,1.7-8,4.3-8.3,10.5v2.7c-0.1,55.5,0,111-0.1,166.5c0,9-1,17.8-4.6,26.2c-5.9,13.7-16.4,22.3-30.6,26.3   c-7.5,2.2-15.2,3.4-23,3.7c-20.4,0.8-37.4-12.8-40.9-32.9c-3-17.3,4.9-36,24.6-44.3c7.7-3.2,15.6-4.9,23.7-6.6   c6.1-1.2,12.3-2.5,18.3-3.7c8.2-1.7,12.4-6.9,12.8-15.2v-3.2c0-63.2,0-126.3,0-189.5c0-2.7,0.3-5.3,0.9-7.9   c1.5-6.1,5.8-9.6,11.7-11c5.4-1.4,11-2.4,16.5-3.6c15.7-3.2,31.2-6.3,46.9-9.4l48.4-9.8c14.3-2.8,28.6-5.7,42.9-8.6   c4.7-0.9,9.4-1.9,14.2-2.3c6.6-0.6,11.2,3.6,11.8,10.3c0.2,1.6,0.3,3.2,0.3,4.7C374.8,134.2,374.8,174.9,374.8,215.8L374.8,215.8z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <span className="sr-only">Apple Music</span>
                </a>
              )}
              {!!profile.pandoraLink && (
                <a
                  href={profile.pandoraLink}
                  target="_blank"
                  title="Pandora"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    aria-hidden="true"
                    width="32"
                    height="32"
                    className="svg-inline--fa fa-music fa-fw h-6 w-6"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M25.401 0h-18.803c-3.599 0-6.599 2.964-6.599 6.599v18.803c0 3.599 2.959 6.599 6.599 6.599h18.803c3.635 0 6.599-2.964 6.599-6.599v-18.803c0-3.599-2.964-6.599-6.599-6.599zM16.5 21.083h-1.64v3.72c0 0.479-0.401 0.859-0.86 0.859h-5.14v-19.317h8.739c4.245 0 7.527 2.197 7.527 7.197 0 4.74-3.641 7.537-8.604 7.537h-0.021z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Pandora</span>
                </a>
              )}
              {!!profile.soundcloudLink && (
                <a
                  href={profile.soundcloudLink}
                  target="_blank"
                  title="Soundcloud"
                  className="max-w-max mx-2 text-center text-link no-underline hover:no-underline"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSoundcloud as IconProp}
                    className="fa-fw h-6 w-6"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Soundcloud</span>
                </a>
              )}
            </nav>
            {profile.fullBio?.html && (
              <div className="mt-4 text-gray-500 body-parsed-text">
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
              <div className="py-16 md:py-32 px-2 text-4xl font-bold tracking-tight transition text-white lg:text-dark md:text-5xl max-w-max text-center mx-auto">
                {parse(profile.miniBio)}
              </div>
            )}
            {profile.imageGallery.length >= 1 && (
              <>
                <div className="relative pb-0 md:pb-32">
                  <div className="hidden md:flex min-w-max space-x-6 mx-auto lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8 sm:-mb-20">
                      {profile?.imageGallery[0]?.url && (
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
                      )}

                      {profile?.imageGallery[1]?.url && (
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
                      )}
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      {profile?.imageGallery[2]?.url && (
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
                      )}
                      {profile?.imageGallery[3]?.url && (
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
                      )}
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8 sm:-mb-20">
                      {profile?.imageGallery[4]?.url && (
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
                      )}
                      {profile?.imageGallery[5]?.url && (
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
                      )}
                    </div>
                  </div>
                </div>
                <div className="block mb-16">
                  <ul
                    role="list"
                    className="grid md:hidden grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                  >
                    {profile.imageGallery.map((image) => (
                      <li key={image?.url} className="relative">
                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 relative">
                          {!!image?.url && (
                            <Image
                              src={image?.url}
                              alt=""
                              className="object-center mx-auto"
                              width={0}
                              height={0}
                              sizes="100%"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <section className="container mx-auto">
        {!!profile?.tourWidgetiFrame && (
          <div className="my-16 mx-auto">{parse(profile.tourWidgetiFrame)}</div>
        )}
        {!!profile?.iFrame && (
          <div className="my-16 mx-auto px-4">{parse(profile.iFrame)}</div>
        )}
        {!!profile?.videoBox && (
          <div>
            {profile.videoBox?.map((video) => (
              <VideoBox
                videoTitle={video?.videoTitle || undefined}
                vimeoVideoId={video?.vimeoVideoId || undefined}
                youtubeVideoId={video?.youtubeVideoId || undefined}
                youtubePlaylistId={video?.youtubePlaylistId || undefined}
                youtubeApiKey={siteLibrary.youtubeApiKey}
                key={Math.random()}
              />
            ))}
          </div>
        )}
      </section>
      <div className="bg-white my-16">
        <section
          aria-labelledby="features-heading"
          className="relative h-70vh flex items-center"
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
          {!!profile?.contactList && (
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
              <div className="lg:col-start-2">
                <h2
                  id="features-heading"
                  className="font-medium text-dark mb-0"
                >
                  {profile.name}
                </h2>
                <p className="mt-0 mb-4 text-3xl font-bold tracking-tight text-dark opacity-80">
                  {siteLibrary.isSpanish ? "Contáctenos" : "Contact Details"}
                </p>
                <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                  {profile.contactList?.map((contact) => (
                    <li key={contact.contactName}>
                      <div className="flex items-center gap-x-6">
                        {contact?.contactAvatar?.url && (
                          <Image
                            className="h-16 w-16 rounded-full object-cover"
                            src={contact.contactAvatar.url}
                            alt=""
                            width={64}
                            height={64}
                            sizes="100%"
                          />
                        )}
                        <div>
                          {contact.contactName && (
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-dark">
                              {contact.contactName}
                            </h3>
                          )}
                          {contact.contactTitle && (
                            <p className="text-sm font-semibold leading-6 text-primary">
                              {contact.contactTitle}
                            </p>
                          )}
                          {contact.contactPhone && (
                            <p className="text-sm my-0 text-dark opacity-80 flex flex-row items-center">
                              <a
                                href={`tel:${contact.contactPhone}`}
                                className="no-underline"
                              >
                                <FontAwesomeIcon
                                  icon={faPhone as IconProp}
                                  className="fa-fw mr-2 h-4 w-4"
                                />
                              </a>
                              <span>{contact.contactPhone}</span>
                            </p>
                          )}
                          {contact.contactEmail && (
                            <p className="text-sm my-0 text-dark opacity-80 flex flex-row items-center">
                              <a
                                href={`mailto:${contact.contactEmail}`}
                                className="no-underline"
                              >
                                <FontAwesomeIcon
                                  icon={faEnvelope as IconProp}
                                  className="fa-fw mr-2 h-4 w-4"
                                />
                              </a>
                              <span>{contact.contactEmail}</span>
                            </p>
                          )}
                          {!!contact.contactAddress && (
                            <p className="text-sm my-0 text-dark opacity-80 flex flex-row items-center">
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
      {/* {!!profiles && profile.profileType && (
        <Profiles
        profiles={profiles}
          profileLayoutStyle="cardLink"
          profileSectionTitle={profile.profileType}
          profilesQuery={profile.profileType}
        />
      )} */}
    </>
  );
}
