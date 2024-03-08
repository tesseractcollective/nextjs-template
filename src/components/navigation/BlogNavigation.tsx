/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Fade } from "react-awesome-reveal";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function BlogNavigation({
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

  return (
    <>
      <div
        className={`fixed top-0 z-[999] bg-after left-0 right-0 transition-all backdrop-blur-md ${
          small ? "nav-shadow nav-shadow-scrolled top-0" : ""
        } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
        id="navigation"
      >
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[1000]" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0 blur-xl"
              enterTo="opacity-100 blur-0"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100 blur-0"
              leaveTo="opacity-0 blur-xl"
            >
              <div
                className="fixed inset-0 bg-[#000] opacity-80 backdrop-blur-lg"
                aria-hidden="true"
              />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex justify-end">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full blur-xl"
                enterTo="-translate-x-0 blur-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-x-0 blur-0"
                leaveTo="translate-x-full blur-xl"
              >
                <Dialog.Panel className="relative flex w-full max-w-6xl flex-col overflow-y-auto py-6 shadow-xl bg-after isolate overflow-hidden border-l border-text-color backdrop-blur-lg">
                  <div className="flex px-4 py-5 z-10 items-center justify-between relative max-w-6xl">
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
                      className="cursor-pointer transition-all max-w-max relative left-2"
                      id={`nav-logo-mobile-panel-${title
                        ?.toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {navigation?.navigationLogo ? (
                        <>
                          <span className="sr-only">{title}</span>
                          <Image
                            className="h-8 w-full max-w-[120px] cursor-pointer object-contain"
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
                      className="inline-flex items-center justify-center rounded-md text-gray-400 group transition-all relative right-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-6 w-6 text-text-color group-hover:text-primary group-hover:rotate-180 transition-all"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {!!items &&
                    items.length >= 1 &&
                    items.map((mainNavigationItem) => {
                      const hasItems = mainNavigationItem.items.length >= 1;
                      return (
                        <div key={mainNavigationItem.label}>
                          {hasItems && (
                            <Tab.Group as="div" className="mt-2">
                              <div className="">
                                <Tab.List className="-mb-px flex space-x-8 px-4">
                                  <Tab
                                    key={mainNavigationItem.label}
                                    className={({ selected }) =>
                                      classNames(
                                        selected
                                          ? "border-primary text-tertiary"
                                          : "border-transparent text-text-color opacity-90",
                                        "flex-1 whitespace-nowrap px-1 py-4 text-3xl lg:text-5xl font-bold mx-auto max-w-max pointer-events-none"
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
                                  className="space-y-12 px-4 py-6 ml-auto flex-wrap w-full"
                                >
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                    {mainNavigationItem.items.map((item) => (
                                      <div
                                        key={item.label}
                                        className="group relative flex flex-col items-center justify-center"
                                      >
                                        <div className="overflow-hidden rounded-md bg-gray-100 group-hover:opacity-80 transition opacity-100">
                                          {!!item?.image?.url && (
                                            <Image
                                              src={item.image.url}
                                              alt={item.label || ""}
                                              width={140}
                                              height={140}
                                              className="object-cover"
                                              sizes="100%"
                                              style={{
                                                maxHeight: "400px",
                                                maxWidth: "400px",
                                                objectFit: "cover",
                                                aspectRatio: 1,
                                              }}
                                            />
                                          )}
                                        </div>
                                        {!!item?.link && (
                                          <LinkItem
                                            key={item?.link}
                                            link={item?.link}
                                            label={item?.label}
                                            cssClass={`mt-2 text-right block text-sm sm:text-xl lg:text-4xl font-semibold text-text-color text-center group-hover:text-primary transition hover:italic ${item?.cssClass}`}
                                            sameTab={item?.sameTab}
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                          </LinkItem>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </Tab.Panel>
                              </Tab.Panels>
                            </Tab.Group>
                          )}

                          <Fade
                            triggerOnce
                            direction="left"
                            cascade
                            damping={0.15}
                          >
                            {!hasItems && (
                              <div className="space-y-6 px-4 py-3">
                                <div className="flow-root">
                                  <LinkItem
                                    key={mainNavigationItem.label}
                                    sameTab={mainNavigationItem?.sameTab}
                                    link={mainNavigationItem.link || "/"}
                                    cssClass="block p-2 font-bold text-text-color max-w-max mx-auto text-3xl lg:text-5xl text-center hover:text-primary transition-all hover:-skew-x-12"
                                    onClick={() => {
                                      ReactGA.event({
                                        category: "Link",
                                        action: mainNavigationItem.link || "",
                                        label: mainNavigationItem.link || "",
                                      });
                                    }}
                                  >
                                    {mainNavigationItem?.label || ""}
                                  </LinkItem>
                                </div>
                              </div>
                            )}
                          </Fade>
                        </div>
                      );
                    })}

                  <div className="space-y-6 px-4 py-6">
                    <SocialMediaIcons
                      fadeDirection="up"
                      siteLibrary={siteLibrary}
                      cssClass="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color gap-x-2"
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
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 mx-auto group transition-all"
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
                  <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                  >
                    <div
                      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative">
          <nav aria-label="Top">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-2">
              <div className="mt-2">
                <div className="flex items-center justify-center flex-row relative w-full">
                  <SocialMediaIcons
                    fadeDirection="down"
                    siteLibrary={siteLibrary}
                    cssClass="max-w-max md:flex flex-row social-icons-row items-center justify-center text-primary gap-x-2 hidden absolute left-0"
                  />
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
                  {/* Desktop menu bar */}
                  <div className="absolute right-0 max-w-max">
                    <button
                      type="button"
                      title="menu"
                      className="rounded-md px-2 py-1 text-primary group hover:text-secondary transition-all cursor-pointer relative"
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
                      <Bars3BottomRightIcon
                        className="h-6 w-6 group-hover:text-secondary transition-all group-hover:rotate-180"
                        aria-hidden="true"
                      />
                      <span className="text-xs group-hover:opacity-100 absolute bottom-[-20px] rotate-0 opacity-0 transition-all uppercase font-bold blur-xl group-hover:blur-0 text-center left-0 right-0 z-2">
                        Menu
                      </span>
                    </button>
                  </div>
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
