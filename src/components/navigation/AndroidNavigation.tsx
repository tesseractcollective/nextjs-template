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
import { Fade } from "react-awesome-reveal";
import AccouncementBar from "@/components/navigation/AccouncementBar";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import MarqueeTextElement from "../elements/MarqueeText";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function AndroidNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [activePanel, setActivePanel] = useState("main");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
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

  const { items, navigationWrapperCssClass, navJson } = navigation;
  const primaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem === true
  );
  const secondaryItems = items.filter((item) => item.primaryItem !== true);

  const { announcementLink, announcementText } = navigation;
  const isMarquee = announcementLink?.includes("marquee");
  const showAnnouncement = !!announcementText;
  return (
    <div className="relative">
      <Link
        href="/"
        className={`cursor-pointer transition-all max-w-[80px] fixed z-[999] left-4 xl:max-w-[120px] bg-bg p-2 rounded-[500px] scale-100 hover:scale-120 hover:p-1 ${
          isScrolled ? "top-4" : "top-0"
        }`}
        id={`nav-logo-desktop`}
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
              className={`mx-auto cursor-pointer object-contain h-full w-full`}
              src={navigation.navigationLogo.url}
              alt=""
              width={300}
              height={300}
              // sizes="100%"
            />
          </>
        ) : (
          <span className="font-bold text-2xl text-text-color">{title}</span>
        )}
      </Link>

      <div
        className={`w-fill absolute bg-bg rounded-lg h-16 xl:h-24 inset-x-0 grid grid-cols-3 px-2 transition-all nav-shadow-scrolled z-20 ${
          isScrolled ? "-top-40" : "top-0"
        } ${navigationWrapperCssClass}`}
      >
        <div className="null"></div>
        {/* Middle nav items */}
        <div className="hidden h-full lg:flex justify-center mx-auto">
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
                      <div key={mainNavigationItem.label} className="my-auto">
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
                                        isScrolled
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
                                                        sameTab={item?.sameTab}
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
                              isScrolled
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
                    isScrolled
                      ? "text-xs md:text-sm py-[0.15rem] md:py-1"
                      : "text-xs sm:text-sm md:text-base py-1 md:py-2"
                  }`}
                  sameTab={mainNavigationItem?.sameTab}
                />
              ))}
            </div>
          )}
        </div>
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
                isScrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* CIRCLE BUTTON & PANEL */}
      <button
        className={`group fixed right-4 rounded-full bg-primary z-[400] transition-all shadow-tertiary shadow-[0px_0px_0_4px]  ${
          isScrolled ? "bottom-8" : "-bottom-40"
        } ${open ? "bottom-8" : ""}`}
        onClick={() => {
          setOpen(!open);
          ReactGA.event({
            category: "Link",
            action: "Open Mobile Menu",
            label: "Open Mobile Menu",
          });
        }}
      >
        <span className="sr-only">Open menu</span>
        <XMarkIcon
          className={`transition-all group-hover:rotate-[30deg] ${
            isScrolled ? "h-20 w-20" : "h-20 w-20"
          } ${open ? "rotate-90" : "rotate-45"}`}
          aria-hidden="true"
        />
      </button>
      <div className="h-0 xl:h-24 nav-spacer"></div>
      <div
        className={`android-panel overflow-hidden fixed z-100 transition-all duration-500 ease-in-out will-change-transform origin-bottom-right ${
          open
            ? "h-[100vh] w-[100vw] right-4 bottom-8 rounded-0 translate-x-4  translate-y-8 bg-tertiary"
            : "h-20 w-20 rounded-[999px] right-4 bottom-8 translate-x-0  translate-y-0 bg-primary"
        }  ${isScrolled ? "flex" : `${open ? "flex" : "hidden"}`}`}
      >
        <div
          className={`${
            open
              ? "sticky h-[100vh] w-[100vw] z-[500] p-8 flex flex-col items-center justify-center max-w-md mx-auto"
              : "hidden"
          }`}
        >
          <nav className="px-4 py-2 flex flex-col gap-y-4">
            {secondaryItems.map((item) => (
              <div key={item.label} className="">
                {item.items?.length > 0 ? (
                  <button
                    onClick={() => setActivePanel(item.label || "")}
                    className="group flex w-full items-center justify-between py-2 text-3xl font-bold uppercase text-text-color hover:text-primary focus-within:text-primary"
                    aria-label={`Open submenu for ${item.label}`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="h-5 w-5 text-text-color group-hover:text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <LinkItem
                    link={item.link || "/"}
                    cssClass="block py-2 text-3xl font-bold uppercase text-text-color hover:text-primary  focus-within:text-primary relative before:content-[''] before:absolute before:left-0 before:right-0 before:h-[1px] before:bg-primary before:top-0 before:opacity-0 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-primary after:bottom-0 after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 hover:after:opacity-100 focus-within:before:opacity-100 focus-within:after:opacity-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label || ""}
                  </LinkItem>
                )}
              </div>
            ))}
          </nav>

          <nav className="px-4 py-1 w-full relative">
            {primaryItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.items?.length > 0 ? (
                  <button
                    onClick={() => setActivePanel(item.label || "")}
                    className="group flex w-full items-center justify-between py-2 text-3xl font-bold uppercase text-text-color hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="h-5 w-5 text-text-color group-hover:text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <LinkItem
                    link={item.link || "/"}
                    cssClass="block py-2 text-3xl font-bold bg-primary hover:bg-text-color text-center uppercase text-text-color hover:text-primary relative duration-300 hover:before:opacity-100 hover:after:opacity-100 overflow-hidden"
                    onClick={() => setOpen(false)}
                  >
                    <Fade direction="up">{item.label || ""}</Fade>
                  </LinkItem>
                )}
              </div>
            ))}
          </nav>

          <Fade
            triggerOnce
            direction="up"
            className="relative z-10 max-h-max flex"
          >
            <div className="space-y-6 px-4 py-6 my-4 w-full text-center">
              <SocialMediaIcons
                siteLibrary={siteLibrary}
                fadeDirection="up"
                cssClass="my-2 mx-0 flex flex-row flex-wrap social-icons-row items-center justify-center text-primary gap-2 overflow-hidden mx-auto py-0 max-w-max gap-x-4"
              />
              <div className="text-center">
                {contactName && (
                  <p className="text-text-color text-xs font-bold">
                    <span>{contactName}</span>
                  </p>
                )}
                {contactPhone && (
                  <a
                    href={`tel:${contactPhone.replace(/-/g, "")}`}
                    className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max mx-auto"
                  >
                    <span className="font-semibold">{contactPhone}</span>
                  </a>
                )}
                {contactEmail && (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max mx-auto"
                  >
                    <span className="font-semibold">{contactEmail}</span>
                  </a>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
      {/* {showAnnouncement && (
        <MarqueeTextElement
          text={announcementText}
          wrapperClassName="bg-primary mb-0 max-w-max"
          innerClassName="text-text-overlay font-bold inline-flex tracking-wide uppercase opacity-90 top-0"
        />
      )} */}
    </div>
  );
}
