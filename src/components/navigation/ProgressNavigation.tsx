/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline";
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
import { MinusIcon } from "@heroicons/react/20/solid";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function ProgressNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const completion = useReadingProgress();
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
    <div
      className={`fixed lg:sticky bottom-0 lg:top-0 z-[999] left-0 right-0 transition-all ${
        small ? "" : ""
      } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
      id="navigation"
      // style={{ backgroundOpacity: "50%" }}
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
              <Dialog.Panel className="relative flex w-full max-h-[90vh] flex-col overflow-y-auto pb-2 shadow-xl border-t-primary border-t bg-bg transition-all rounded-t-xl">
                <Fade direction="down" triggerOnce>
                  <div className="flex mt-4 ml-4 px-4 pb-2 pt-4 items-center justify-start">
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
                      className="cursor-pointer transition-all hover:tracking-widest"
                      id={`nav-logo-mobile-panel`}
                    >
                      {navigation?.navigationLogo ? (
                        <>
                          <span className="sr-only">{title}</span>
                          <Image
                            className="w-[80px] md:w-[120px] max-h-[80px] cursor-pointer object-contain transition-all block"
                            src={navigation.navigationLogo?.url}
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

                              <div key={mainNavigationItem.label} className="">
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
                                          cssClass={`my-2 block text-text-color max-w-max  text-2xl w-full transition-all uppercase font-bold hover:text-primary hover:tracking-widest focus:text-primary focus:tracking-widest text-left flex flex-row items-center ${item?.cssClass}`}
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
                                  cssClass={`my-2 block text-text-color max-w-max  text-2xl w-full transition-all uppercase font-bold hover:text-primary hover:tracking-widest focus:text-primary focus:tracking-widest text-left flex flex-row items-center ${mainNavigationItem?.cssClass}`}
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
                        <p className="text-text-color text-xs font-bold">
                          <span>{contactName}</span>
                        </p>
                      )}
                      {!!contactPhone && (
                        <a
                          href={`tel:${contactPhone.replace("-", "")}`}
                          className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max"
                        >
                          <span className="font-semibold">{contactPhone}</span>
                        </a>
                      )}
                      {!!contactEmail && (
                        <a
                          href={`mailto:${contactEmail}`}
                          className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max"
                        >
                          <span className="font-semibold">{contactEmail}</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full px-0">
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-md py-2 text-text-color group flex-col text-center mx-auto max-w-max text-xs"
                      onClick={() => setOpen(false)}
                    >
                      <XMarkIcon
                        className="h-6 w-6 text-text-color group-hover:text-primary transition-all group-hover:rotate-90 text-center mx-auto"
                        aria-hidden="true"
                      />
                      <span className="text-text-color group-hover:text-primary transition-all uppercase text-center text-xs flex">
                        {siteLibrary.isSpanish ? "Cerrar menú" : "Close menu"}
                      </span>
                    </button>
                  </div>
                </Fade>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-2 mt-8">
        <nav
          aria-label="Top"
          className={`mx-auto px-4 sm:px-6 lg:px-8 bg-text-overlay transition-all transition-delay min-w-[70%] shadow-top lg:shadow-none ${
            small ? "rounded-none max-w-full" : "rounded-full max-w-8xl"
          }`}
        >
          <div className="">
            <div
              className={`flex items-center justify-between transition-all max-w-8xl mx-auto relative overflow-hidden ${
                small ? "h-12" : "h-16"
              }`}
            >
              <span
                id="progress-bar"
                style={{
                  transform: `translateX(${completion - 100}%)`,
                }}
                className={`absolute bottom-0 w-full transition-transform duration-150 h-[0.15rem] bg-primary rounded-full`}
              />
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
                          small ? "max-h-8" : "max-h-12"
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

              <div className="hidden h-full lg:flex mx-auto">
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
                                                              link={item?.link}
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
                                  label={mainNavigationItem?.label}
                                  cssClass={`flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all capitalize font-semibold ${
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
                {/* END Desktop Flyout menus */}
              </div>

              <Link
                href="/"
                className="lg:hidden cursor-pointer max-w-[200px]"
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
                      src={navigation.navigationLogo?.url}
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
              {/* Mobile menu bar */}
              <div className="flex flex-1 items-center justify-between lg:hidden max-w-max mx-auto">
                <button
                  type="button"
                  className="mx-auto text-text-color transition group relative w-8 aspect-1 flex"
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
                  <Bars2Icon
                    className={`group-hover:text-primary transition-all w-full min-w-4  h-10`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {!!primaryItems && primaryItems.length >= 1 && (
                <div className="flex flex-1 items-center justify-end max-w-max">
                  {primaryItems.map((mainNavigationItem) => (
                    <LinkItem
                      key={mainNavigationItem?.link}
                      link={mainNavigationItem?.link}
                      label={mainNavigationItem?.label}
                      cssClass={`flex items-center font-bold text-primary opacity-90 hover:text-text-color hover:opacity-100 transition-all capitalize font-semibold border px-2 py-1 border-primary rounded-full ${
                        small
                          ? "text-xs md:text-sm"
                          : "text-xs sm:text-sm md:text-base"
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
    </div>
  );
}
