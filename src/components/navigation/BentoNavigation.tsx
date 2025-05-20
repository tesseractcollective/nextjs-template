/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import useViewport from "@/app/hooks/useViewport";
import "./ProgressNavigation.scss";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function BentoNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const completion = useReadingProgress();
  const { isMobile } = useViewport();
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

  const { items, navigationWrapperCssClass, announcementText } = navigation;
  const primaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem === true
  );

  return (
    <div
      className={`fixed lg:sticky bottom-0 lg:top-0 z-[999] left-0 right-0 transition-all ${
        navigationWrapperCssClass ? navigationWrapperCssClass : ""
      }`}
      id="progress-navigation-header"
    >
      {/* Mobile menu */}
      <MobileMenuPanel
        open={open}
        setOpen={setOpen}
        navigation={navigation}
        siteLibrary={siteLibrary}
      />
      <Fade direction={isMobile ? "up" : "down"} triggerOnce>
        <header className="relative z-2 mb-0 pt-2 px-2 pb-0 transition-all duration-[450ms]">
          <nav
            aria-label="Top"
            className={`mx-auto bg-primary transition-all min-w-[85%] duration-[450ms] shadow-top lg:shadow-none !min-h-[48px] rounded-lg ${
              small ? "" : ""
            }`}
          >
            <div className="">
              <div
                className={`grid grid-cols-3 justify-between transition-all px-4 mx-auto relative overflow-hidden !min-h-[48px] ${
                  small ? "h-16" : "h-20"
                }`}
              >
                <span
                  id="progress-bar"
                  style={{
                    transform: `translateX(${completion - 100}%)`,
                  }}
                  className={`absolute bottom-0 w-full transition-transform duration-150 h-[0.15rem] bg-primary rounded-full`}
                />
                <div className="hidden h-full lg:flex mr-auto">
                  {/* START Desktop Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4 z-[99999]">
                    <div className="flex h-full justify-center space-x-8">
                      {!!items &&
                        items.length >= 1 &&
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
                                                                link={
                                                                  item?.link
                                                                }
                                                                label={
                                                                  item?.label
                                                                }
                                                                cssClass={`mt-4 block font-semibold text-text-color transition-all group-hover:text-primary text-xs xl:text-sm ${item?.cssClass}`}
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
                                                  className="fixed inset-0 bg-[#00000070] transition-all z-0 backdrop-blur-xl top-[54px] min-h-[100vh] h-full"
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
                                    // label={mainNavigationItem?.label}
                                    cssClass={`flex items-center font-medium text-secondary transition-all capitalize font-semibold relative group ${
                                      small
                                        ? "text-xs md:text-sm"
                                        : "text-xs sm:text-sm md:text-lg"
                                    } ${mainNavigationItem?.cssClass}`}
                                    sameTab={mainNavigationItem?.sameTab}
                                    activeClassName="!font-bold !text-primary opacity-100"
                                  >
                                    <>
                                      {mainNavigationItem?.label}
                                      <span className="absolute left-0 right-0 bottom-0 h-0 border-b-2 border-text-secondary transition-all duration-300 hover:h-1 hover:border-text-secondary opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"></span>
                                    </>
                                  </LinkItem>
                                )}
                              </div>
                            );
                          })}
                    </div>
                  </Popover.Group>
                  {/* END Desktop Flyout menus */}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:items-center cursor-pointer max-w-max mx-auto">
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
                          className={`w-full ml-0 max-w-[10rem] mr-auto cursor-pointer object-contain transition-all h-full p-1 ${
                            small ? "max-h-12" : "max-h-16"
                          }`}
                          src={navigation.navigationLogo?.url}
                          alt={title || ""}
                          priority
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
                </div>

                <Link
                  href="/"
                  className="flex items-center lg:hidden cursor-pointer max-w-[200px]"
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
                        className={`w-full max-w-[140px] mx-auto cursor-pointer object-contain transition-all ${
                          small ? "h-7" : "h-10"
                        }`}
                        src={
                          navigation?.navJson?.mobileLogo
                            ? navigation.navJson.mobileLogo
                            : navigation.navigationLogo?.url
                        }
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        priority
                      />
                    </>
                  ) : (
                    <span className="font-bold text-2xl text-text-color">
                      {title}
                    </span>
                  )}
                </Link>
                {/* Mobile menu toggle button */}
                <div className="flex flex-1 items-center justify-between lg:hidden max-w-max mx-auto">
                  <button
                    type="button"
                    className="mx-auto text-text-color transition group relative w-8 aspect-1 flex flex-col"
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
                      className={`group-hover:text-primary transition-all w-full min-w-4 h-10`}
                      aria-hidden="true"
                    />
                    <span className="text-xs text-center my-0 py-0 -mt-2">
                      menu
                    </span>
                  </button>
                </div>

                {!!primaryItems && primaryItems.length >= 1 && (
                  <div className="flex flex-1 items-center justify-end max-w-max ml-auto">
                    {primaryItems.map((mainNavigationItem) => (
                      <LinkItem
                        key={mainNavigationItem?.link}
                        link={mainNavigationItem?.link}
                        label={mainNavigationItem?.label}
                        cssClass={`flex items-center font-bold text-secondary hover:text-tertiart transition-all capitalize font-semibold px-3 py-1 ${
                          small
                            ? "text-xs md:text-sm"
                            : "text-xs sm:text-sm md:text-lg"
                        } ${mainNavigationItem?.cssClass}`}
                        sameTab={mainNavigationItem?.sameTab}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      </Fade>
      {announcementText && (
        <div className="loop-text bg-secondary mt-[0.5rem] mx-2 mb-0 rounded-md">
          <p className="text-primary">{announcementText}</p>
        </div>
      )}
    </div>
  );
}
