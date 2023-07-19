/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import type { SiteLibraryFieldsFragment } from "@/graphql/generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faSpotify,
  faInstagram,
  faFacebook,
  faTiktok,
  faTwitter,
  faYoutube,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

export interface SocialMediaIconsProps {
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function SocialMediaIcons({
  siteLibrary,
}: SocialMediaIconsProps) {
  const {
    facebookLink,
    tikTokLink,
    instagramLink,
    spotifyLink,
    twitterLink,
    youtubeLink,
    soundcloudLink,
    pandoraLink,
    appleMusicLink,
    threadsLink,
  } = siteLibrary;

  return (
    <nav className="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center">
      {!!instagramLink && (
        <a
          href={instagramLink}
          target="_blank"
          className="max-w-max mx-2 text-center text-link"
          title="Instagram"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram as IconProp}
            className="fa-fw h-4 w-4"
          />
          <span className="sr-only">Instagram</span>
        </a>
      )}
      {!!spotifyLink && (
        <a
          href={spotifyLink}
          target="_blank"
          className="max-w-max mx-2 text-center text-link"
          title="Spotify"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faSpotify as IconProp}
            className="fa-fw h-4 w-4"
          />
          <span className="sr-only">Spotify</span>
        </a>
      )}
      {!!facebookLink && (
        <a
          href={facebookLink}
          target="_blank"
          className="max-w-max mx-2 text-center text-link"
          title="Facebook"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook as IconProp}
            className="fa-fw h-4 w-4"
          />
          <span className="sr-only">Facebook</span>
        </a>
      )}
      {!!twitterLink && (
        <a
          href={twitterLink}
          target="_blank"
          className="max-w-max mx-2 text-center text-link"
          title="Twitter"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter as IconProp}
            className="fa-fw h-4 w-4"
          />
          <span className="sr-only">Twitter</span>
        </a>
      )}

      {!!youtubeLink && (
        <a
          href={youtubeLink}
          target="_blank"
          className="max-w-max mx-2 text-center text-link"
          title="Youtube"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube as IconProp}
            className="fa-fw h-4 w-4"
          />
          <span className="sr-only">Youtube</span>
        </a>
      )}

      {!!tikTokLink && (
        <a
          href={tikTokLink}
          target="_blank"
          title="TikTok"
          className="max-w-max mx-2 text-center text-link"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTiktok as IconProp}
            className="fa-fw h-4 w-4"
          />
          <span className="sr-only">TikTok</span>
        </a>
      )}

      {!!threadsLink && (
        <a
          href={threadsLink}
          target="_blank"
          title="TikTok"
          className="max-w-max mx-2 text-center text-link"
          rel="noreferrer"
        >
          <svg className="svg-inline--fa fa-music fa-fw h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="#000"><path d="M141.54 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.035l13.78 9.452c5.73-8.694 14.723-10.548 21.347-10.548h.23c8.248.054 14.473 2.452 18.502 7.13 2.932 3.405 4.893 8.11 5.864 14.05-7.314-1.244-15.224-1.626-23.68-1.141-23.82 1.372-39.134 15.265-38.105 34.569.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.05-14.127 5.177-6.6 8.452-15.153 9.898-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.35-22.809-.168-40.06-7.483-51.275-21.741C35.238 139.966 29.811 120.682 29.608 96c.203-24.682 5.63-43.966 16.133-57.317C56.957 24.425 74.207 17.11 97.016 16.94c22.975.17 40.526 7.52 52.171 21.848 5.71 7.025 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.04 9.608 125.205.195 97.072 0h-.113C68.884.195 47.294 9.643 32.79 28.08 19.884 44.487 13.226 67.316 13.002 95.933v.135c.224 28.616 6.882 51.446 19.788 67.854C47.294 182.359 68.883 191.807 96.96 192h.112c24.96-.173 42.554-6.708 57.048-21.19 18.963-18.944 18.392-42.691 12.142-57.27-4.484-10.453-13.033-18.944-24.723-24.552zm-43.096 40.519c-10.44.588-21.286-4.098-21.821-14.135-.396-7.442 5.296-15.746 22.462-16.735 1.966-.113 3.895-.169 5.79-.169 6.235 0 12.068.606 17.37 1.765-1.977 24.702-13.58 28.713-23.801 29.274z"/></svg>
          <span className="sr-only">Threads</span>
        </a>
      )}

      {!!appleMusicLink && (
        <a
          href={appleMusicLink}
          target="_blank"
          title="Apple Music"
          className="max-w-max mx-2 text-center text-link"
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
            className="svg-inline--fa fa-music fa-fw h-4 w-4"
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
      {!!pandoraLink && (
        <a
          href={pandoraLink}
          target="_blank"
          title="Pandora"
          className="max-w-max mx-2 text-center text-link"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            aria-hidden="true"
            width="32"
            height="32"
            className="svg-inline--fa fa-music fa-fw h-4 w-4"
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
      {!!soundcloudLink && (
        <a
          href={soundcloudLink}
          target="_blank"
          title="Soundcloud"
          className="max-w-max mx-2 text-center text-link"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faSoundcloud as IconProp}
            className="fa-fw h-4 w-4"
            aria-hidden="true"
          />
          <span className="sr-only">Soundcloud</span>
        </a>
      )}
    </nav>
  );
}
