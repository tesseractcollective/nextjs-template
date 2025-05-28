/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function DualNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!navigations && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const { title, contactPhone, contactEmail, contactName } = siteLibrary;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const navigation =
    navigations?.find(
      (navigationTemp) =>
        navigationTemp?.pageNavigationSelection &&
        pageNavigationSelection &&
        navigationTemp?.pageNavigationSelection.includes(
          pageNavigationSelection
        )
    ) || navigations[0];

  const { items, navigationWrapperCssClass } = navigation;
  const primaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem === true
  );

  return (
    <>
      <div
        className={`bg-bg fixed top-0 z-[999] left-0 right-0 nav-shadow transition-all backdrop-blur-md nav-shadow  dark-shadow ${
          small ? "nav-shadow-scrolled" : ""
        } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
        id="navigation"
        // style={{ backgroundOpacity: "50%" }}
      >
        {/* Mobile menu */}
        <MobileMenuPanel
          open={open}
          setOpen={setOpen}
          navigation={navigation}
          siteLibrary={siteLibrary}
        />
        <header className="overflow-hidden relative z-2">
          <nav aria-label="Top">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div
                className={`flex items-center justify-between transition-all ${
                  small ? "h-16 mb-0" : "h-24 mb-0"
                }`}
              >
                {/* CTA BUTTON */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center  cursor-pointer max-w-max">
                  <Link
                    href="/"
                    id={`nav-logo-desktop-${title}`}
                    onClick={() => {
                      ReactGA.event({
                        category: "Link",
                        action: "Visit Home",
                        label: "Visit Home",
                      });
                    }}
                  >
                    {navigation?.navigationLogo ? (
                      <>
                        <span className="sr-only">{title}</span>
                        <Image
                          className={`w-auto max-w-xs mx-auto cursor-pointer object-contain transition-all h-full ${
                            small ? "max-h-10" : "max-h-12"
                          }`}
                          src={navigation.navigationLogo?.url}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "100%" }}
                        />
                      </>
                    ) : (
                      <span className="font-bold text-2xl text-text-color">
                        {title}
                      </span>
                    )}
                  </Link>
                </div>

                <div className="hidden h-full lg:flex flex-col items-center justify-center">
                  {/* START Desktop Flyout menus */}
                  {!!primaryItems && primaryItems.length >= 1 && (
                    <div className="flex items-center justify-center max-w-max">
                      {primaryItems.map((mainNavigationItem) => (
                        <LinkItem
                          key={mainNavigationItem?.link}
                          link={mainNavigationItem?.link}
                          label={mainNavigationItem?.label}
                          cssClass={`flex justify-center  items-center font-bold text-text-overlay opacity-90 hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer bg-primary px-2 md:px-4 rounded transition-all uppercase my-auto ${
                            mainNavigationItem?.cssClass
                          } ${
                            small
                              ? "text-xs md:text-sm py-[0.15rem] md:py-1"
                              : "text-xs sm:text-sm md:text-base py-1 md:py-2"
                          }`}
                          sameTab={mainNavigationItem?.sameTab}
                        />
                      ))}
                    </div>
                  )}
                  {/* END Desktop Flyout menus */}
                </div>
                {/* END Mobile menu bar */}
                {/* LOGO */}
                <Link
                  href="/"
                  className="lg:hidden  ml-0 mr-auto lg:mx-auto cursor-pointer max-w-[200px]"
                  id={`nav-logo-mobile-${title}`}
                  onClick={() => {
                    ReactGA.event({
                      category: "Link",
                      action: "Visit Home",
                      label: "Visit Home",
                    });
                  }}
                >
                  {navigation?.navigationLogo ? (
                    <>
                      <span className="sr-only">{title}</span>
                      <Image
                        className={`w-full max-w-xs ml-0 mr-auto lg:mx-auto cursor-pointer object-contain transition-all ${
                          small ? "h-7" : "h-10"
                        }`}
                        src={navigation.navigationLogo?.url}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                      />
                    </>
                  ) : (
                    <span className="font-bold text-2xl text-text-color">
                      {title}
                    </span>
                  )}
                </Link>
                {/* MOBILE HAMBURGER */}
                <div className="flex flex-1 items-center justify-between lg:hidden max-w-max">
                  <button
                    type="button"
                    className="ml-2 rounded-md px-2 py-1 text-text-color border border-white hover:border-primary transition group"
                    onClick={() => {
                      setOpen(true);
                      ReactGA.event({
                        category: "Link",
                        action: "Open Mobile Menu",
                        label: "Open Mobile Menu",
                      });
                    }}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon
                      className={`group-hover:text-primary transition-all ${
                        small ? "h-4 w-4" : "h-6 w-6"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              {/* start */}
              <div
                className={`${
                  small
                    ? "h-0 opacity-0 translate-y-60 blur-sm"
                    : "h-full opacity-1 translate-y-0 blur-0"
                } transition-all inset-x-0 bottom-0 z-[0] flex flex-row items-center justify-between w-full`}
              >
                <Popover.Group>
                  <div className="flex h-full justify-start space-x-8">
                    {!!items &&
                      items.length >= 1 &&
                      items
                        .filter(
                          (mainNavigationItem) =>
                            mainNavigationItem.primaryItem !== true
                        )
                        .map((mainNavigationItem) => {
                          const hasItems = mainNavigationItem.items.length >= 1;
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
                                              : "border-dark text-text-color opacity-90 hover:text-text-color hover:opacity-100",
                                            `relative z-10 -mb-px flex items-center pt-px transition-all duration-200 ease-out uppercase font-semibold ${
                                              small
                                                ? "text-xs md:text-sm"
                                                : "text-xs sm:text-sm md:text-base"
                                            } ${mainNavigationItem?.cssClass} ${
                                              mainNavigationItem.cssClass
                                            }`
                                          )}
                                        >
                                          <span>
                                            {mainNavigationItem.label}
                                          </span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="currentColor"
                                            className={`ml-2 w-4 h-4 transition-all ${
                                              open ? "rotate-180" : "rotate-0"
                                            }`}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                          </svg>
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
                                        <Popover.Panel className="absolute inset-x-0 top-[100%] text-xs sm:text-sm md:text-base text-text-color box-shadow max-w-4xl mx-auto rounded-xl">
                                          {({ close }) => (
                                            <>
                                              <div className="relative bg-bg-secondary border-2 border-primary z-10 rounded-md max-w-8xl">
                                                <div className="mx-auto px-8 w-full h-full overflow-scroll max-h-[80vh]">
                                                  <div className="flex flex-row items-center justify-start flex-wrap gap-4 py-8">
                                                    {mainNavigationItem.items.map(
                                                      (item) => (
                                                        <div
                                                          key={item.label}
                                                          className="group relative max-w-[12rem] block w-full"
                                                          onClick={() =>
                                                            close()
                                                          }
                                                        >
                                                          {item?.image && (
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-bg-secondary group-hover:opacity-75 transition-all">
                                                              <Image
                                                                src={
                                                                  item.image
                                                                    ?.url
                                                                }
                                                                alt={
                                                                  item?.label ||
                                                                  ""
                                                                }
                                                                className="max-w-xs object-cover"
                                                                width={0}
                                                                height={0}
                                                                sizes="100%"
                                                              />
                                                              <div className="absolute inset-0 z-10 ring-1 transition-all ring-primary group-hover:ring-secondary ring-inset rounded-md" />
                                                            </div>
                                                          )}
                                                          {!!item?.link && (
                                                            <LinkItem
                                                              key={item?.link}
                                                              link={item?.link}
                                                              label={
                                                                item?.label
                                                              }
                                                              cssClass={`mt-4 block font-semibold text-text-color transition-all group-hover:text-primary text-sm ${item?.cssClass}`}
                                                              sameTab={
                                                                item?.sameTab
                                                              }
                                                            >
                                                              <span
                                                                className="absolute inset-0 z-10"
                                                                aria-hidden="true"
                                                              />
                                                            </LinkItem>
                                                          )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-0 right-2 ml-auto z-10">
                                                <button
                                                  type="button"
                                                  className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline transition-all outline-none hover:text-primary mx-auto max-w-max uppercase text-xs hover:bg-dark group focus-within:bg-dark focus-within:ring-1 ring-primary"
                                                  onClick={() => {
                                                    close();
                                                    ReactGA.event({
                                                      category: "Link",
                                                      action:
                                                        "Close Mobile Menu",
                                                      label:
                                                        "Close Mobile Menu",
                                                    });
                                                  }}
                                                >
                                                  <FontAwesomeIcon
                                                    icon={faXmark as IconProp}
                                                    className="fa-fw my-0 py-0 h-4 w-4 group-hover:rotate-90 transition-all"
                                                  />
                                                  <span className="ml-2">
                                                    Close menu
                                                  </span>
                                                </button>
                                              </div>
                                              <div
                                                className="fixed inset-0 bg-[#1a1a1a0f] transition-all z-0 backdrop-blur-sm top-[54px]"
                                                onClick={() => {
                                                  close();
                                                  ReactGA.event({
                                                    category: "Link",
                                                    action: "Close Mobile Menu",
                                                    label: "Close Mobile Menu",
                                                  });
                                                }}
                                              />
                                            </>
                                          )}
                                        </Popover.Panel>
                                      </Transition>
                                    </>
                                  )}
                                </Popover>
                              )}
                              {!hasItems && (
                                <LinkItem
                                  key={mainNavigationItem?.link}
                                  link={mainNavigationItem?.link}
                                  label={mainNavigationItem?.label}
                                  cssClass={`flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold ${
                                    small
                                      ? "text-xs md:text-sm"
                                      : "text-xs sm:text-sm md:text-base"
                                  } ${mainNavigationItem?.cssClass}`}
                                  sameTab={mainNavigationItem?.sameTab}
                                />
                              )}
                              {/* INSERT */}
                            </div>
                          );
                        })}
                  </div>
                </Popover.Group>
                <SocialMediaIcons
                  fadeDirection="up"
                  siteLibrary={siteLibrary}
                  cssClass="my-2 mx-0 social-icons-row items-center justify-start text-text-color gap-x-2 overflow-hidden py-0 max-w-max gap-x-4 flex"
                />
              </div>
              {/* stop */}
            </div>
          </nav>
        </header>
      </div>
      <div className="h-24"></div>
    </>
  );
}
