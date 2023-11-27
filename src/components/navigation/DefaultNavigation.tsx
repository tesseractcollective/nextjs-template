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
      className={`sticky top-0 z-[999] bg-after left-0 right-0 nav-shadow transition-all backdrop-blur-md ${
        small ? "nav-shadow-scrolled" : ""
      } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
      id="navigation"
      // style={{ backgroundOpacity: "50%" }}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1000] lg:hidden"
          onClose={setOpen}
        >
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
              className="fixed inset-0 bg-dark opacity-60 backdrop-blur-xl"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full blur-xl"
              enterTo="translate-x-0 blur-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0 blur-0"
              leaveTo="-translate-x-full blur-xl"
            >
              <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto py-6 shadow-xl bg-bg-secondary theme-scroll">
                <Fade triggerOnce cascade direction="down" damping={0.05}>
                  <div className="flex px-4 pb-5 pt-5 justify-between items-center relative w-full">
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
                      className="cursor-pointer transition-all max-w-max absolute left-0 w-full ml-4"
                      id={`nav-logo-mobile-panel`}
                    >
                      {navigation?.navigationLogo ? (
                        <>
                          <span className="sr-only">{title}</span>
                          <Image
                            className="h-10 w-full cursor-pointer object-contain relative left-0"
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
                    <button
                      type="button"
                      title="Close menu"
                      className="mr-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 ml-auto absolute right-0 border-text-color group"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-6 w-6 text-text-color transition-all group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    </button>
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
                            <div className="space-y-2 px-4 py-3 mt-4 ml-4">
                              <h2
                                key={mainNavigationItem.label}
                                className="block text-text-color max-w-max text-xl w-full transition-all uppercase font-bold text-left border-text-color opacity-70 mb-0 pb-0"
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
                                          cssClass={`my-2 block text-text-color max-w-max text-xl w-full transition-all uppercase font-bold hover:text-primary  focus:text-primary text-left flex flex-row items-center ${item?.cssClass}`}
                                          sameTab={item?.sameTab}
                                        >
                                          <>
                                            {item?.image?.url && (
                                              <Image
                                                src={item.image.url}
                                                alt={item.label || ""}
                                                width={50}
                                                height={50}
                                                className="object-cover mr-2"
                                                sizes="100%"
                                                style={{
                                                  maxHeight: "50px",
                                                  maxWidth: "50px",
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
                                  cssClass="block py-1 text-text-color max-w-max mx-auto text-2xl w-full transition-all uppercase font-bold hover:text-primary focus:text-primary text-left"
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
                <Fade triggerOnce cascade direction="up" damping={0.05}>
                  <div className="space-y-6 px-4 py-6">
                    <SocialMediaIcons
                      siteLibrary={siteLibrary}
                      cssClass="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap gap-x-2"
                    />
                    <div className="text-center">
                      {!!contactName && (
                        <p className="text-text-color text-xs font-bold">
                          <span>{contactName}</span>
                        </p>
                      )}
                      {!!contactPhone && (
                        <a
                          href={`tel:${contactPhone.replace("-", "")}`}
                          className="text-xs block my-1 text-link !border-none hover:!border-none text-text-color"
                        >
                          <span>{contactPhone}</span>
                        </a>
                      )}
                      {!!contactEmail && (
                        <a
                          href={`mailto:${contactEmail}`}
                          className="text-xs block my-1 text-link !border-none hover:!border-none text-text-color"
                        >
                          <span>{contactEmail}</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="-m-2 ml-auto flex items-center justify-center rounded-md p-2 text-gray-400 mx-auto group transition-all"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-text-color group-hover:text-primary group-hover:rotate-180 transition-all"
                      aria-hidden="true"
                    />
                    <span className="text-text-color group-hover:text-primary pl-1 transition-all group-hover:pl-2">
                      Close menu
                    </span>
                  </button>
                </Fade>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-2">
        <nav aria-label="Top">
          <div className="">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div className="">
                <div
                  className={`flex items-center justify-between transition-all ${
                    small ? "h-12" : "h-16"
                  }`}
                >
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

                  <div className="hidden h-full lg:flex">
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
                                                } ${
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
                                                  open
                                                    ? "rotate-180"
                                                    : "rotate-0"
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
                                                                  key={
                                                                    item?.link
                                                                  }
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
                                                        icon={
                                                          faXmark as IconProp
                                                        }
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
                                                        action:
                                                          "Close Nav Menu",
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
                    {/* END Desktop Flyout menus */}
                  </div>

                  {/* Mobile menu bar */}
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
                  <Link
                    href="/"
                    className="lg:hidden mx-auto cursor-pointer max-w-[200px]"
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
                          className={`w-full max-w-xs mx-auto cursor-pointer object-contain transition-all ${
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

                  {!!primaryItems && primaryItems.length >= 1 && (
                    <div className="flex flex-1 items-center justify-end max-w-max py">
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
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
