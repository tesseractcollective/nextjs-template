/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import parse from "html-react-parser";
import SocialMediaIcons from "@/components/SocialMediaIcons";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function CenterDarkNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 400)
      );
    }
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
  const secondaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem === false
  );
  const tertiaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem == undefined
  );

  return (
    <>
      <div
        className={`center-dark-navigation fixed top-0 z-[999] bg-after-black left-0 right-0 transition-all backdrop-blur-md ${
          small ? "nav-shadow nav-shadow-scrolled top-0" : ""
        } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
        id="navigation"
      >
        {/* Mobile menu */}
        <MobileMenuPanel
          open={open}
          setOpen={setOpen}
          navigation={navigation}
          siteLibrary={siteLibrary}
        />

        <header className="relative">
          <nav aria-label="Top">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-2">
              <div className="mt-2">
                <div className="flex items-center justify-between lg:justify-center flex-row relative w-full">
                  <Link
                    href="/"
                    className="justify-self-center transition-all cursor-pointer"
                    id={`nav-logo-desktop-${title?.replace(" ", "-")}`}
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
                          className="h-16 w-auto max-w-xs mx-auto cursor-pointer object-contain transition-all"
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
                  <button
                    type="button"
                    className="p-2 flex lg:hidden"
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
                        small ? "h-6 w-6" : "h-8 w-8"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center max-w-max gap-x-2 w-full mx-auto my-2">
                  <div className="hidden h-full lg:flex gap-x-4">
                    {/* START Desktop Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4 z-[99999]">
                      <div className="flex h-full justify-center space-x-8">
                        {!!tertiaryItems &&
                          tertiaryItems.length >= 1 &&
                          tertiaryItems.map((mainNavigationItem) => {
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
                                                : "border-dark text-text-color opacity-90 hover:text-text-color hover:opacity-100",
                                              `relative z-10 -mb-px flex items-center pt-px transition-all duration-200 ease-out uppercase font-semibold ${
                                                small
                                                  ? "text-xs md:text-sm"
                                                  : "text-xs sm:text-sm md:text-base"
                                              } ${
                                                mainNavigationItem?.cssClass
                                              } ${mainNavigationItem.cssClass}`
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
                                          enter="transition ease-in-out duration-300 transform"
                                          enterFrom="-translate-y-full opacity-0"
                                          enterTo="-translate-y-0 opacity-100"
                                          leave="transition ease-in-out duration-300 transform"
                                          leaveFrom="translate-y-0 opacity-100"
                                          leaveTo="-translate-y-full opacity-0"
                                        >
                                          <Popover.Panel className="absolute inset-x-0 top-[100%] text-xs sm:text-sm md:text-base text-text-color box-shadow max-w-4xl mx-auto rounded-xl">
                                            {({ close }) => (
                                              <>
                                                <div className="relative bg-bg-secondary border-2 border-primary z-10 rounded-md max-w-8xl">
                                                  <div className="mx-auto py-8 px-4 xl:px-8 w-full h-full max-h-[85vh] overflow-scroll">
                                                    <div className="flex flex-row items-center justify-start flex-wrap gap-4">
                                                      {mainNavigationItem.items.map(
                                                        (item) => (
                                                          <div
                                                            key={item.label}
                                                            className="group relative max-w-[8rem] xl:max-w-[12rem] block w-full transition-all"
                                                            onClick={() =>
                                                              close()
                                                            }
                                                          >
                                                            {!!item?.link && (
                                                              <LinkItem
                                                                key={item?.link}
                                                                link={
                                                                  item?.link
                                                                }
                                                                cssClass={`mt-4 block font-semibold text-text-color transition-all group-hover:text-primary text-xs xl:text-sm ${item?.cssClass}`}
                                                                sameTab={
                                                                  item?.sameTab
                                                                }
                                                              >
                                                                <>
                                                                  {item?.image && (
                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-bg-secondary group-hover:opacity-75 transition-all">
                                                                      <Image
                                                                        src={
                                                                          item
                                                                            .image
                                                                            ?.url
                                                                        }
                                                                        alt={
                                                                          item?.label ||
                                                                          ""
                                                                        }
                                                                        className="max-w-xs object-cover"
                                                                        width={
                                                                          0
                                                                        }
                                                                        height={
                                                                          0
                                                                        }
                                                                        sizes="100%"
                                                                      />
                                                                      <div className="absolute inset-0 z-10 ring-1 transition-all ring-primary group-hover:ring-secondary ring-inset rounded-md" />
                                                                    </div>
                                                                  )}
                                                                  <span>
                                                                    {
                                                                      item?.label
                                                                    }
                                                                  </span>
                                                                  <span
                                                                    className="absolute inset-0 z-10"
                                                                    aria-hidden="true"
                                                                  />
                                                                </>
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
                                                  className="fixed bg-[#00000070] transition-all z-0 backdrop-blur-xl top-0 h-[100vw] w-[300vw] left-[-100%]"
                                                  onClick={() => {
                                                    close();
                                                    ReactGA.event({
                                                      category: "Link",
                                                      action: "Close Nav Menu",
                                                      label: "Close Nav Menu",
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
                              </div>
                            );
                          })}
                      </div>
                    </Popover.Group>
                    {!!navigation?.headerIFrame && (
                      <div>{parse(navigation?.headerIFrame)}</div>
                    )}
                    {/* END Desktop Flyout menus */}
                    {secondaryItems.map((mainNavigationItem) => (
                      <LinkItem
                        key={mainNavigationItem?.link}
                        link={mainNavigationItem?.link}
                        label={mainNavigationItem?.label}
                        cssClass={`drop-shadow-button-secondary ${mainNavigationItem?.cssClass}`}
                        sameTab={mainNavigationItem?.sameTab}
                      />
                    ))}
                    {primaryItems.map((mainNavigationItem) => (
                      <LinkItem
                        key={mainNavigationItem?.link}
                        link={mainNavigationItem?.link}
                        label={mainNavigationItem?.label}
                        cssClass={`border border-primary rounded-2xl p-2 uppercase text-xs sm:text-sm md:text-base font-semibold bg-primary ${mainNavigationItem?.cssClass}`}
                        sameTab={mainNavigationItem?.sameTab}
                      />
                    ))}
                  </div>
                  <SocialMediaIcons
                    siteLibrary={siteLibrary}
                    fadeDirection="up"
                    cssClass="my-2 mx-auto lg:hidden flex flex-row flex-wrap social-icons-row items-center justify-center text-text-color gap-2 overflow-hidden mx-auto py-0 max-w-max gap-x-4"
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="pb-20"></div>
    </>
  );
}
