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
import OpenTableWidget from "../elements/OpenTableWidget";
import AccouncementBar from "@/components/navigation/AccouncementBar";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function CircleNavigation({
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

  const { items, navigationWrapperCssClass, navJson } = navigation;
  const primaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem === true
  );

  return (
    <>
      {navigation?.announcementText && (
        <AccouncementBar
          accouncementText={navigation.announcementText}
          accouncementLink={navigation?.announcementLink || ""}
          cssClassWrapper="fixed inset-x-0 z-[998] text-center xl:text-right"
        />
      )}
      <div
        className={`bg-bg fixed bottom-0 xl:top-0 xl:bottom-[initial] z-[999] left-0 right-0 nav-shadow transition-all backdrop-blur-md nav-shadow dark-shadow border ${
          navigation?.announcementText ? "xl:top-8" : ""
        } ${
          small
            ? "nav-shadow-scrolled bg-bg-secondary border-t-bg border-b-none xl:border-b-bg"
            : "bg-bg border-t-secondary xl:border-b-secondary"
        } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
        id="navigation"
      >
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[1000]" onClose={setOpen}>
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
                className="fixed inset-0 bg-[#000000c7] opacity-60 backdrop-blur-xl"
                aria-hidden="true"
              />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex items-end">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-y-full blur-xl"
                enterTo="-translate-y-0 blur-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-y-0 blur-0"
                leaveTo="translate-y-full blur-xl"
              >
                <Dialog.Panel className="relative flex w-full max-h-[90vh] flex-col overflow-y-auto pb-2 shadow-xl border-t-primary border-t bg-bg transition-all">
                  <input
                    readOnly
                    type="checkbox"
                    id="null"
                    name="null"
                    checked
                    className="sr-only"
                  />
                  <Fade direction="down" triggerOnce>
                    <div className="flex mt-4 ml-4 px-4 pb-2 pt-5 items-center justify-start">
                      <Link
                        href="/"
                        onClick={() => {
                          setOpen(false);
                          ReactGA.event({
                            category: "Link",
                            action: "Visit Home",
                            label: "Visit Home",
                          });
                        }}
                        className="cursor-pointer transition-all"
                        id={`nav-logo-mobile-panel`}
                      >
                        {navigation?.navigationLogo ? (
                          <>
                            <span className="sr-only">{title}</span>
                            <Image
                              className="w-[80px] xl:w-[120px] max-h-[80px] cursor-pointer object-contain block"
                              src={navigation.navigationLogo.url}
                              alt=""
                              width={0}
                              height={0}
                              sizes="100%"
                              // style={{ width: "100%" }}
                            />
                          </>
                        ) : (
                          <span className="font-bold text-2xl text-text-color">
                            {title}
                          </span>
                        )}
                      </Link>
                    </div>
                  </Fade>

                  <Fade triggerOnce cascade direction="left" damping={0.05}>
                    {!!items &&
                      items.length >= 1 &&
                      items.map((mainNavigationItem) => {
                        const hasItems = mainNavigationItem.items.length >= 1;
                        return (
                          <div key={mainNavigationItem.label}>
                            {hasItems && (
                              <div className="space-y-6 px-4 py-3 mt-4 ml-4">
                                <h2
                                  key={mainNavigationItem.label}
                                  className="block text-text-color max-w-max text-xl w-full transition-all uppercase font-bold text-left border-b border-text-color opacity-70"
                                >
                                  {mainNavigationItem.label}
                                </h2>

                                <div
                                  key={mainNavigationItem.label}
                                  className=""
                                >
                                  <div className="">
                                    {mainNavigationItem.items.map((item) => (
                                      <div
                                        key={item.label}
                                        className="group relative"
                                      >
                                        {!!item?.link && (
                                          <LinkItem
                                            key={item?.link}
                                            link={item?.link}
                                            label={item?.label}
                                            cssClass={`my-2 block text-text-color max-w-max  text-2xl w-full transition-all uppercase font-bold hover:text-primary hover:skew-x-[8deg] hover:skew-y-[8deg] focus:text-primary focus:skew-x-[8deg] focus:skew-y-[8deg] text-left flex flex-row items-center ${item?.cssClass}`}
                                            sameTab={item?.sameTab}
                                          >
                                            <>
                                              {item?.image?.url && (
                                                <Image
                                                  src={item.image.url}
                                                  alt={item.label || ""}
                                                  width={60}
                                                  height={60}
                                                  className="object-cover mr-4"
                                                  sizes="100%"
                                                  style={{
                                                    maxHeight: "60px",
                                                    maxWidth: "60px",
                                                    objectFit: "cover",
                                                    aspectRatio: 1,
                                                  }}
                                                />
                                              )}
                                            </>

                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                          </LinkItem>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {!hasItems && (
                              <div className="space-y-6 px-4 py-1 mt-4 ml-4">
                                <div className="max-w-max">
                                  <LinkItem
                                    key={mainNavigationItem.label}
                                    link={mainNavigationItem.link || "/"}
                                    sameTab={mainNavigationItem?.sameTab}
                                    cssClass="block py-1 text-text-color max-w-max mx-auto text-3xl w-full transition-all uppercase font-bold hover:text-primary hover:skew-x-[8deg] hover:skew-y-[8deg] focus:text-primary focus:skew-x-[8deg] focus:skew-y-[8deg] text-left"
                                    onClick={() => setOpen(false)}
                                  >
                                    <span>{mainNavigationItem.label}</span>
                                  </LinkItem>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    {!!navJson?.opentableMobileID &&
                      !!navJson.opentableMobileTheme && (
                        <div
                          className="relative ml-8 mt-4 flex"
                          id="element-opentable-mobile"
                        >
                          <OpenTableWidget
                            targetID="element-opentable-mobile"
                            theme={navJson.opentableMobileTheme}
                            opentableID={navJson.opentableMobileID}
                          />
                        </div>
                      )}
                  </Fade>

                  <Fade triggerOnce direction="up">
                    <div className="space-y-6 px-4 py-6 mt-4 ml-4">
                      <SocialMediaIcons
                        fadeDirection="up"
                        siteLibrary={siteLibrary}
                        cssClass="my-2 mx-0 grid grid-cols-10 social-icons-row items-center justify-start text-text-color gap-2 overflow-hidden mr-auto py-0 max-w-max gap-x-4"
                      />
                      <div className="text-left">
                        {!!contactName && (
                          <p className="text-text-color text-md font-bold">
                            <span>{contactName}</span>
                          </p>
                        )}
                        {!!contactPhone && (
                          <a
                            href={`tel:${contactPhone.replace(/-/g, "")}`}
                            className="text-md font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max"
                          >
                            <span className="font-semibold">
                              {contactPhone}
                            </span>
                          </a>
                        )}
                        {!!contactEmail && (
                          <a
                            href={`mailto:${contactEmail}`}
                            className="text-md font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max"
                          >
                            <span className="font-semibold">
                              {contactEmail}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </Fade>
                  <Fade
                    className="relative bottom-0 right-5 xl:hidden z-[999] bg-bg h-20 rounded-t-full p-1 max-w-max ml-auto"
                    direction="up"
                  >
                    <button
                      type="button"
                      className="bg-motion rounded-full px-2 py-2 text-text-color border border-white hover:border-tertiary transition-all group relative aspect-1 bg-small max-w-max ml-auto"
                      onClick={() => {
                        setOpen(false);
                        ReactGA.event({
                          category: "Link",
                          action: "Open Mobile Menu",
                          label: "Open Mobile Menu",
                        });
                      }}
                    >
                      <XMarkIcon
                        className="h-7 w-7 group-hover:text-dark transition-all group-hover:opacity-50"
                        aria-hidden="true"
                      />
                      <span className="text-xs group-hover:opacity-100 absolute top-[50px] rotate-0 opacity-40 transition-all uppercase font-bold  text-center left-0 right-0 z-20 text-shadow group-hover:tracking-widest">
                        Close
                      </span>
                    </button>
                  </Fade>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="overflow-hidden relative z-2">
          <nav
            aria-label="Top"
            className={`px-4 xl:px-12 w-full grid grid-cols-3 xl:grid-cols-3 transition-all mx-auto ${
              small ? "h-16 mb-0" : "h-24 mb-0"
            }`}
          >
            {/* start */}
            <Popover.Group
              className={`inset-x-0 bottom-0 z-[0] hidden xl:flex  flex-row items-center justify-between w-full max-w-max`}
            >
              <div className="hidden xl:flex h-full justify-start space-x-8">
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
                                          small
                                            ? "text-xs xl:text-sm"
                                            : "text-xs sm:text-sm xl:text-base"
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
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 top-[100%] text-xs sm:text-sm xl:text-base text-text-color box-shadow max-w-4xl mx-auto rounded-xl">
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
                                                      onClick={() => close()}
                                                    >
                                                      {item?.image && (
                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-bg-secondary group-hover:opacity-75 transition-all">
                                                          <Image
                                                            src={
                                                              item.image?.url
                                                            }
                                                            alt={
                                                              item?.label || ""
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
                                                          label={item?.label}
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
                                  ? "text-xs xl:text-sm"
                                  : "text-xs sm:text-sm xl:text-base"
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
            {/* stop */}

            {/* START Mobile Flyout menus */}
            {((!!primaryItems && primaryItems.length >= 1) || siteLibrary) && (
              <div className="h-full flex flex-col-reverse xl:hidden sm:flex-row items-center justify-center xl:justify-end gap-x-4 max-w-max mr-auto gap-y-1 xl:gap-y-0">
                {primaryItems.map((mainNavigationItem) => (
                  <LinkItem
                    key={mainNavigationItem?.link}
                    link={mainNavigationItem?.link}
                    label={mainNavigationItem?.label}
                    cssClass={`flex justify-center items-center font-bold text-text-overlay opacity-90 hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer px-2 xl:px-4 rounded-[100px] hover:rounded-[25px] transition-all uppercase my-0 ${
                      mainNavigationItem?.cssClass
                    } ${
                      small
                        ? "text-xs xl:text-sm py-[0.15rem] xl:py-1 bg-primary hover:bg-secondary"
                        : "text-xs sm:text-sm xl:text-base py-1 xl:py-2 bg-primary hover:bg-secondary"
                    }`}
                    sameTab={mainNavigationItem?.sameTab}
                  />
                ))}
                {/* <SocialMediaIcons
                  fadeDirection="down"
                  siteLibrary={siteLibrary}
                  cssClass="w-full hidden xl:flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap gap-x-2 gap-y-0"
                /> */}
              </div>
            )}

            <Link
              href="/"
              className={`cursor-pointer transition-all flex items-center justify-center mx-auto psuedo-circle max-w-[80px] xl:max-w-[100px] ${
                small ? "small-psuedo-circle max-w-[70px] xl:max-w-[80px]" : ""
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

            {/* START Desktop Flyout menus */}
            {((!!primaryItems && primaryItems.length >= 1) || siteLibrary) && (
              <div className="h-full hidden xl:flex sm:flex-row items-center justify-center xl:justify-end gap-x-4 max-w-max ml-auto gap-y-1 xl:gap-y-0">
                {primaryItems.map((mainNavigationItem) => (
                  <LinkItem
                    key={mainNavigationItem?.link}
                    link={mainNavigationItem?.link}
                    label={mainNavigationItem?.label}
                    cssClass={`flex justify-center items-center font-bold text-text-overlay opacity-90 hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer px-2 xl:px-4 rounded-[100px] hover:rounded-[25px] transition-all uppercase my-0 ${
                      mainNavigationItem?.cssClass
                    } ${
                      small
                        ? "text-xs xl:text-sm py-[0.15rem] xl:py-1 bg-primary hover:bg-secondary"
                        : "text-xs sm:text-sm xl:text-base py-1 xl:py-2 bg-primary hover:bg-secondary"
                    }`}
                    sameTab={mainNavigationItem?.sameTab}
                  />
                ))}
                {/* <SocialMediaIcons
                  fadeDirection="down"
                  siteLibrary={siteLibrary}
                  cssClass="w-full hidden xl:flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap gap-x-2 gap-y-0"
                /> */}
              </div>
            )}

            {/* Mobile Menu Button */}
            <Fade
              className="relative xl:hidden p-1 max-w-max flex items-center justify-center ml-auto"
              direction="up"
            >
              <button
                type="button"
                className="rounded-full px-2 py-2 text-text-color hover:border border border-[transparent] hover:border-tertiary transition-all group relative aspect-1 flex items-center justify-center flex-col"
                onClick={() => {
                  setOpen(true);
                  ReactGA.event({
                    category: "Link",
                    action: "Open Mobile Menu",
                    label: "Open Mobile Menu",
                  });
                }}
              >
                <Bars3Icon
                  className="h-7 w-7 transition-all rotate group-hover:-rotate-180"
                  aria-hidden="true"
                />

                <span className="text-center text-sm">Menu</span>
              </button>
            </Fade>

            {/* Mobile menu bar */}
          </nav>
        </header>
      </div>
      <div className="h-0 xl:h-24 nav-spacer"></div>
    </>
  );
}
