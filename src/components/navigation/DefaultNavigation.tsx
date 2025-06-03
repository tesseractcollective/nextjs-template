/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Transition, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";
import AccouncementBar from "./AccouncementBar";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function DefaultNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateSmall = () => {
      const currentScrollY = window.pageYOffset;
      // Set buffer zones: 400px to activate, 300px to deactivate
      if (currentScrollY > 400) {
        setSmall(true);
      } else if (currentScrollY < 300) {
        setSmall(false);
      }
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateSmall);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!navigations && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const { title } = siteLibrary;

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
      {navigation?.announcementText && (
        <AccouncementBar
          accouncementText={navigation.announcementText}
          accouncementLink={navigation?.announcementLink || ""}
          cssClassWrapper="fixed w-full z-[998] text-center !bg-bg-secondary text-text-color"
        />
      )}
      <div
        className={`default-navigation sticky ${
          navigation?.announcementText ? "top-8" : "top-0"
        } z-[999] bg-after-nav left-0 right-0 nav-shadow dark-shadow transition-all backdrop-blur-md duration-[400ms] border-b border-primary ${
          small ? "nav-shadow-scrolled" : ""
        } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
        id="default-navigation"
      >
        {/* Mobile menu */}
        <MobileMenuPanel
          open={open}
          setOpen={setOpen}
          navigation={navigation}
          siteLibrary={siteLibrary}
        />

        <nav aria-label="Top" className="relative z-2 mx-auto max-w-10xl px-4">
          <div
            className={`w-full justify-between grid grid-cols-2 lg:grid-cols-3 transition-all duration-[400ms] ${
              small ? "py-4" : "py-6"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="inline-flex items-center max-w-max"
              id="nav-logo-desktop"
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
                  <Fade direction="down" triggerOnce>
                    <Image
                      className={`w-auto object-contain max-w-[240px] lg:max-w-[288px] transition-all ${
                        small
                          ? "h-7 lg:h-8" // 2rem = h-8, 2.5rem = h-10
                          : "h-10 lg:h-12" // 4rem = h-16, 5rem = h-20
                      }`}
                      src={navigation.navigationLogo?.url}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                    />
                  </Fade>
                </>
              ) : (
                <span className="font-bold text-2xl text-text-color">
                  {title}
                </span>
              )}
            </Link>

            {/* Middle nav items */}
            <div className="hidden h-full lg:flex justify-center">
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
                                        <span>{mainNavigationItem.label}</span>
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
                                      enter="transition ease-in-out duration-[400ms] transform"
                                      enterFrom="-translate-y-full opacity-0"
                                      enterTo="-translate-y-0 opacity-100"
                                      leave="transition ease-in-out duration-[400ms] transform"
                                      leaveFrom="translate-y-0 opacity-100"
                                      leaveTo="-translate-y-full opacity-0"
                                    >
                                      <Popover.Panel className="absolute inset-x-0 top-[100%] text-xs sm:text-sm md:text-base text-text-color box-shadow max-w-4xl mx-auto rounded-xl z-30">
                                        {({ close }) => (
                                          <>
                                            <div className="relative bg-bg-secondary border-2 border-primary z-20 rounded-md max-w-8xl">
                                              <div className="mx-auto py-8 px-4 xl:px-8 w-full h-full max-h-[85vh] overflow-scroll">
                                                <div className="flex flex-row items-center justify-start flex-wrap gap-4">
                                                  {mainNavigationItem.items.map(
                                                    (item) => (
                                                      <div
                                                        key={item.label}
                                                        className="group relative max-w-[8rem] xl:max-w-[12rem] block w-full transition-all"
                                                        onClick={() => close()}
                                                      >
                                                        {!!item?.link && (
                                                          <LinkItem
                                                            key={item?.link}
                                                            link={item?.link}
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
                                                              <span>
                                                                {item?.label}
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
                                                    action: "Close Mobile Menu",
                                                    label: "Close Mobile Menu",
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
                                              className="absolute bg-[#00000070] transition-all z-0 top-0 h-[100vw] w-[300vw] left-[-100%]"
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
                                activeClassName="!text-primary"
                                cssClass={`flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold p-1 ${
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
            </div>

            <div className="flex flex-1 items-center justify-end max-w-max ml-auto">
              {/* Primary Right Item */}
              {!!primaryItems && primaryItems.length >= 1 && (
                <div className="hidden lg:flex items-center justify-end">
                  {primaryItems.map((mainNavigationItem) => (
                    <LinkItem
                      key={mainNavigationItem?.link}
                      link={mainNavigationItem?.link}
                      label={mainNavigationItem?.label}
                      cssClass={`flex items-center font-bold text-text-overlay opacity-90 hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer bg-primary px-2 md:px-4 rounded transition-all uppercase ${
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

              {/* Mobile Hamburger Menu Button */}
              <div className="flex items-center justify-end lg:hidden">
                <button
                  type="button"
                  className="ml-2 p-1 text-text-color border border-white hover:border-primary transition group"
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
                    className={`group-hover:text-primary transition-all duration-[400ms] ${
                      small ? "h-8 w-8" : "h-10 w-10"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
