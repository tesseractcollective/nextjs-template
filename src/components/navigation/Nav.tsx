/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";

// UI
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Tab,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
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

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigation: NavigationFieldsFragment;
  hideNav?: boolean;
}

export default function Nav({ navigation, siteLibrary, hideNav }: NavProps) {
  const [open, setOpen] = useState(false);

  if (!navigation && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const {
    title,
    logo,
    isSpanish,
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
    bookingPhoneOne,
    bookingEmailOne,
    bookingNameOne,
    siteLibraryJson,
  } = siteLibrary;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const { items } = navigation;

  return (
    <div className="bg-dark">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-dark opacity-50"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-dark pb-12 shadow-xl border-r-primary border-r">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {!!items &&
                  items.map((mainNavigationItem) => {
                    const hasItems = mainNavigationItem.items.length >= 1;
                    return (
                      <div key={mainNavigationItem.label}>
                        {hasItems && (
                          <Tab.Group as="div" className="mt-2">
                            <div className="border-b border-gray-200">
                              <Tab.List className="-mb-px flex space-x-8 px-4">
                                <Tab
                                  key={mainNavigationItem.label}
                                  className={({ selected }) =>
                                    classNames(
                                      selected
                                        ? "border-primary text-primary"
                                        : "border-transparent text-white",
                                      "flex-1 whitespace-nowrap border-dark hover:border-white border-b-2 px-1 py-4 text-base font-medium"
                                    )
                                  }
                                >
                                  {mainNavigationItem.label}
                                </Tab>
                              </Tab.List>
                            </div>
                            <Tab.Panels as={Fragment}>
                              <Tab.Panel
                                key={mainNavigationItem.label}
                                className="space-y-12 px-4 py-6"
                              >
                                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                  {mainNavigationItem.items.map((item) => (
                                    <div
                                      key={item.label}
                                      className="group relative"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                        {!!item?.image?.url && (
                                          <Image
                                            src={item.image.url}
                                            alt={item.label || ""}
                                            layout="fill"
                                            objectFit='cover'
                                            className="object-center"
                                          />
                                        )}
                                      </div>
                                      {!!item?.link && (
                                        <a
                                          href={item.link}
                                          className="mt-6 block text-sm font-medium text-white"
                                        >
                                          <span
                                            className="absolute inset-0 z-10"
                                            aria-hidden="true"
                                          />
                                          {item.label}
                                        </a>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>
                        )}

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                          {!hasItems && (
                            <div className="flow-root">
                              <a
                                key={mainNavigationItem.label}
                                href={mainNavigationItem.link || "/"}
                                className="-m-2 block p-2 font-medium text-white max-w-max"
                              >
                                {mainNavigationItem.label}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <nav className="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center">
                    {!!instagramLink && (
                      <a
                        href={instagramLink}
                        target="_blank"
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faTiktok as IconProp}
                          className="fa-fw h-4 w-4"
                        />
                        <span className="sr-only">TikTok</span>
                      </a>
                    )}

                    {!!appleMusicLink && (
                      <a
                        href={appleMusicLink}
                        target="_blank"
                        title="Apple Music"
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                        className="max-w-max mx-2 text-center text-link no-underline hover:no-underline hover:border-none"
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <Link href="/">
                      <span className="sr-only">{title}</span>
                      {!!logo && (
                        <Image
                          className="h-8 w-auto"
                          src={logo?.url}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      )}
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4 z-[99999]">
                      <div className="flex h-full justify-center space-x-8">
                        {!!items &&
                          items
                            .filter(
                              (mainNavigationItem) =>
                                mainNavigationItem.primaryItem !== true
                            )
                            .map((mainNavigationItem) => {
                              const hasItems =
                                mainNavigationItem.items.length >= 1;
                              return (
                                <div
                                  key={mainNavigationItem.label}
                                  className="my-auto"
                                >
                                  {hasItems && (
                                    <Popover className="flex">
                                      {({ open }) => (
                                        <>
                                          <div className="relative flex">
                                            <Popover.Button
                                              className={classNames(
                                                open
                                                  ? "border-primary text-primary"
                                                  : "border-dark text-white opacity-90 hover:text-white hover:opacity-100",
                                                "relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out border-dark hover:border-white border-b-2"
                                              )}
                                            >
                                              {mainNavigationItem.label}
                                            </Popover.Button>
                                          </div>

                                          <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-white border-b-2 border-primary">
                                              <div
                                                className="absolute inset-0 top-1/2 bg-primary-hover shadow"
                                                aria-hidden="true"
                                              />

                                              <div className="relative bg-dark">
                                                <div className="mx-auto max-w-7xl px-8">
                                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                    {mainNavigationItem.items.map(
                                                      (item) => (
                                                        <div
                                                          key={item.label}
                                                          className="group relative"
                                                        >
                                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                            <img
                                                              src={
                                                                item.image?.url
                                                              }
                                                              alt={
                                                                item?.label ||
                                                                ""
                                                              }
                                                              className="object-cover object-center"
                                                            />
                                                          </div>
                                                          {!!item?.link && (
                                                            <a
                                                              href={item.link}
                                                              className="mt-4 block font-medium text-white"
                                                            >
                                                              <span
                                                                className="absolute inset-0 z-10"
                                                                aria-hidden="true"
                                                              />
                                                              {item.label}
                                                            </a>
                                                          )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </Popover.Panel>
                                          </Transition>
                                        </>
                                      )}
                                    </Popover>
                                  )}
                                  {!hasItems && (
                                    <a
                                      href={mainNavigationItem.link || "/"}
                                      className="flex items-center text-sm font-medium text-white opacity-90 hover:text-white hover:opacity-100"
                                    >
                                      {mainNavigationItem.label}
                                    </a>
                                  )}
                                </div>
                              );
                            })}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center justify-between lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-dark p-2 text-white"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    {!!logo?.url && (
                      <img src={logo.url} alt="" className="h-8 w-auto" />
                    )}
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    {!!items &&
                      items
                        .filter(
                          (mainNavigationItem) =>
                            mainNavigationItem.primaryItem === true
                        )
                        .map((mainNavigationItem) => (
                          <a
                            key={mainNavigationItem.label}
                            href={mainNavigationItem.link || "/"}
                            className="flex items-center text-sm font-bold text-white opacity-90 hover:text-white hover:opacity-100 border-1 border-primary"
                          >
                            {mainNavigationItem.label}
                          </a>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
