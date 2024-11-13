import React from "react";
import type { SiteLibraryFieldsFragment } from "@/graphql/generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faCalendar,
  faMusic,
  faShoppingBag,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSpotify,
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
  faSoundcloud,
  faWhatsapp,
  faLinkedin,
  faGithub,
  faThreads,
  faXTwitter,
  faGoogle,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import VCF from "@/components/VCF";

export interface SocialMediaIconsProps {
  siteLibrary?: SiteLibraryFieldsFragment;
  facebookLinkProp?: string;
  tikTokLinkProp?: string;
  instagramLinkProp?: string;
  spotifyLinkProp?: string;
  twitterLinkProp?: string;
  youtubeLinkProp?: string;
  soundcloudLinkProp?: string;
  calendlyLinkProp?: string;
  pandoraLinkProp?: string;
  appleMusicLinkProp?: string;
  threadsLinkProp?: string;
  linkedinLinkProp?: string;
  cssClass?: string;
  iconClass?: string;
  emailLinkProp?: string;
  whatsappLinkProp?: string;
  phoneLinkProp?: string;
  githubLinkProp?: string;
  smartMusicLinkProp?: string;
  googleMapLinkProp?: string;
  yelpLinkProp?: string;
  shopLinkProp?: string;
  websiteLinkProp?: string;
  avatar?: string;
  name?: string;
  fade?: boolean;
  fadeDirection: any;
  displayVcf?: boolean;
}

export default function SocialMediaIcons({
  siteLibrary,
  facebookLinkProp,
  tikTokLinkProp,
  instagramLinkProp,
  spotifyLinkProp,
  twitterLinkProp,
  youtubeLinkProp,
  soundcloudLinkProp,
  pandoraLinkProp,
  appleMusicLinkProp,
  threadsLinkProp,
  linkedinLinkProp,
  emailLinkProp,
  whatsappLinkProp,
  calendlyLinkProp,
  phoneLinkProp,
  githubLinkProp,
  smartMusicLinkProp,
  googleMapLinkProp,
  websiteLinkProp,
  yelpLinkProp,
  shopLinkProp,
  cssClass,
  fade,
  displayVcf,
  avatar,
  name,
  iconClass,
  fadeDirection,
}: SocialMediaIconsProps) {
  // const propDirection = fadeDirection || "right";
  return (
    <>
      {(siteLibrary ||
        facebookLinkProp ||
        tikTokLinkProp ||
        instagramLinkProp ||
        spotifyLinkProp ||
        twitterLinkProp ||
        youtubeLinkProp ||
        soundcloudLinkProp ||
        pandoraLinkProp ||
        appleMusicLinkProp ||
        threadsLinkProp ||
        linkedinLinkProp ||
        emailLinkProp ||
        whatsappLinkProp ||
        calendlyLinkProp ||
        githubLinkProp ||
        displayVcf ||
        websiteLinkProp ||
        phoneLinkProp ||
        smartMusicLinkProp ||
        googleMapLinkProp ||
        yelpLinkProp ||
        shopLinkProp ||
        fadeDirection) && (
        <nav className={`social-media-icons-element ${cssClass}`}>
          <Fade
            direction={fadeDirection}
            cascade={fade ? false : true}
            damping={fade ? undefined : 0.05}
            triggerOnce
            className=""
          >
            {(siteLibrary?.instagramLink || instagramLinkProp) && (
              <a
                href={siteLibrary?.instagramLink || instagramLinkProp}
                target="_blank"
                className={`max-w-max mx-auto text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Instagram"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action:
                      siteLibrary?.instagramLink || instagramLinkProp || "",
                    label: siteLibrary?.instagramLink || instagramLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faInstagram as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Instagram</span>
              </a>
            )}
            {(siteLibrary?.spotifyLink || spotifyLinkProp) && (
              <a
                href={siteLibrary?.spotifyLink || spotifyLinkProp}
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Spotify"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.spotifyLink || spotifyLinkProp || "",
                    label: siteLibrary?.spotifyLink || spotifyLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faSpotify as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Spotify</span>
              </a>
            )}
            {(siteLibrary?.facebookLink || facebookLinkProp) && (
              <a
                href={siteLibrary?.facebookLink || facebookLinkProp}
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Facebook"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.facebookLink || facebookLinkProp || "",
                    label: siteLibrary?.facebookLink || facebookLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faFacebook as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Facebook</span>
              </a>
            )}
            {(siteLibrary?.twitterLink || twitterLinkProp) && (
              <a
                href={siteLibrary?.twitterLink || twitterLinkProp}
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="X - Twitter"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.twitterLink || twitterLinkProp || "",
                    label: siteLibrary?.twitterLink || twitterLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faXTwitter as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">X - Twitter</span>
              </a>
            )}
            {(siteLibrary?.youtubeLink || youtubeLinkProp) && (
              <a
                href={siteLibrary?.youtubeLink || youtubeLinkProp}
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Youtube"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.youtubeLink || youtubeLinkProp || "",
                    label: siteLibrary?.youtubeLink || youtubeLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faYoutube as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Youtube</span>
              </a>
            )}
            {(siteLibrary?.tikTokLink || tikTokLinkProp) && (
              <a
                href={siteLibrary?.tikTokLink || tikTokLinkProp}
                target="_blank"
                title="TikTok"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.tikTokLink || tikTokLinkProp || "",
                    label: siteLibrary?.tikTokLink || tikTokLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faTiktok as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">TikTok</span>
              </a>
            )}
            {(siteLibrary?.threadsLink || threadsLinkProp) && (
              <a
                href={siteLibrary?.threadsLink || threadsLinkProp}
                target="_blank"
                title="Threads"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.threadsLink || threadsLinkProp || "",
                    label: siteLibrary?.threadsLink || threadsLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faThreads as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Threads</span>
              </a>
            )}
            {(smartMusicLinkProp || siteLibrary?.smartMusicLink) && (
              <a
                href={siteLibrary?.smartMusicLink || smartMusicLinkProp}
                target="_blank"
                title="Music"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action:
                      siteLibrary?.smartMusicLink || smartMusicLinkProp || "",
                    label: siteLibrary?.smartMusicLink || smartMusicLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faMusic as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Music</span>
              </a>
            )}
            {(siteLibrary?.appleMusicLink || appleMusicLinkProp) && (
              <a
                href={siteLibrary?.appleMusicLink || appleMusicLinkProp}
                target="_blank"
                title="Apple Music"
                className="max-w-max mx-auto text-center !text-link transition-all cursor-pointer flex items-center"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action:
                      siteLibrary?.appleMusicLink || appleMusicLinkProp || "",
                    label: siteLibrary?.appleMusicLink || appleMusicLinkProp,
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  className={`svg-inline--fa fa-music fa-fw h-5 w-5 relative ${iconClass}`}
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
            {(siteLibrary?.pandoraLink || pandoraLinkProp) && (
              <a
                href={siteLibrary?.pandoraLink || pandoraLinkProp}
                target="_blank"
                title="Pandora"
                className="max-w-max mx-auto  text-center !text-link transition-all cursor-pointer flex items-center"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.pandoraLink || pandoraLinkProp || "",
                    label: siteLibrary?.pandoraLink || pandoraLinkProp,
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  aria-hidden="true"
                  width="32"
                  height="32"
                  className="svg-inline--fa fa-music fa-fw h-5 w-5 relative"
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
            {(siteLibrary?.soundcloudLink || soundcloudLinkProp) && (
              <a
                href={siteLibrary?.soundcloudLink || soundcloudLinkProp}
                title="Soundcloud"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action:
                      siteLibrary?.soundcloudLink || soundcloudLinkProp || "",
                    label: siteLibrary?.soundcloudLink || soundcloudLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faSoundcloud as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                  aria-hidden="true"
                />
                <span className="sr-only">Soundcloud</span>
              </a>
            )}
            {websiteLinkProp && (
              <a
                href={websiteLinkProp}
                title="Website Link"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: websiteLinkProp || "",
                    label: websiteLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faGlobe as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                  aria-hidden="true"
                />
                <span className="sr-only">Website</span>
              </a>
            )}
            {(siteLibrary?.contactPhone || phoneLinkProp) && (
              <a
                title={siteLibrary?.contactPhone || phoneLinkProp}
                href={`tel:${siteLibrary?.contactPhone || phoneLinkProp}`}
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.contactPhone || phoneLinkProp || "",
                    label: siteLibrary?.contactPhone || phoneLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faPhone as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Phone Number</span>
              </a>
            )}
            {whatsappLinkProp && (
              <a
                title={`Whatsapp: ${whatsappLinkProp}`}
                href={
                  whatsappLinkProp.includes("http")
                    ? whatsappLinkProp
                    : `https://api.whatsapp.com/send?phone=${encodeURIComponent(
                        `${whatsappLinkProp}`
                      )}&text=hello`
                }
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: whatsappLinkProp || "",
                    label: whatsappLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faWhatsapp as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Whatsapp</span>
              </a>
            )}
            {(siteLibrary?.contactEmail || emailLinkProp) && (
              <a
                title={siteLibrary?.contactEmail || emailLinkProp}
                href={`mailto:${siteLibrary?.contactEmail || emailLinkProp}`}
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.contactEmail || emailLinkProp || "",
                    label: siteLibrary?.contactEmail || emailLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faEnvelope as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Email</span>
              </a>
            )}
            {linkedinLinkProp && (
              <a
                title={linkedinLinkProp}
                href={linkedinLinkProp}
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: linkedinLinkProp || "",
                    label: linkedinLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faLinkedin as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Linkedin</span>
              </a>
            )}
            {githubLinkProp && (
              <a
                title={githubLinkProp}
                href={githubLinkProp}
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: githubLinkProp || "",
                    label: githubLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faGithub as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {calendlyLinkProp && (
              <a
                title={calendlyLinkProp}
                href={calendlyLinkProp}
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: calendlyLinkProp || "",
                    label: calendlyLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faCalendar as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Calendly</span>
              </a>
            )}
            {(siteLibrary?.siteLibraryJson?.googleMapLink ||
              googleMapLinkProp ||
              siteLibrary?.googleMapLink) && (
              <a
                href={
                  siteLibrary?.siteLibraryJson?.googleMapLink ||
                  googleMapLinkProp ||
                  siteLibrary?.googleMapLink
                }
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Google Map"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action:
                      siteLibrary?.siteLibraryJson?.googleMapLink ||
                      googleMapLinkProp ||
                      siteLibrary?.googleMapLink,
                    label:
                      siteLibrary?.siteLibraryJson.googleMapLink ||
                      googleMapLinkProp ||
                      siteLibrary?.googleMapLink,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faGoogle as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Google Map</span>
              </a>
            )}
            {(siteLibrary?.yelpLink || yelpLinkProp) && (
              <a
                href={siteLibrary?.yelpLink || yelpLinkProp}
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Yelp"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.yelpLink || yelpLinkProp || "",
                    label: siteLibrary?.yelpLink || yelpLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faYelp as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Yelp</span>
              </a>
            )}
            {(siteLibrary?.shopLink || shopLinkProp) && (
              <a
                href={siteLibrary?.shopLink || shopLinkProp}
                target="_blank"
                className={`relative max-w-max mx-auto  text-center !text-link transition-all cursor-pointer ${iconClass}`}
                title="Shop"
                rel="noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: siteLibrary?.shopLink || shopLinkProp || "",
                    label: siteLibrary?.shopLink || shopLinkProp,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faShoppingBag as IconProp}
                  className="fa-fw h-5 w-5 flex aspect-1"
                />
                <span className="sr-only">Yelp</span>
              </a>
            )}
            {displayVcf && (
              <VCF
                name={name || undefined}
                phone={phoneLinkProp || undefined}
                email={emailLinkProp || undefined}
                linkedin={linkedinLinkProp || undefined}
                calendly={calendlyLinkProp || undefined}
                avatar={avatar || undefined}
                facebook={facebookLinkProp || undefined}
                twitterX={twitterLinkProp || undefined}
                threads={threadsLinkProp || undefined}
                youtube={youtubeLinkProp || undefined}
                instagram={instagramLinkProp || undefined}
                tiktok={tikTokLinkProp || undefined}
                github={githubLinkProp || undefined}
              />
            )}
          </Fade>
        </nav>
      )}
    </>
  );
}
