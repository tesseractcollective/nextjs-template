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

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function CenterNavigation({
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
        className={`fixed top-0 z-[999] left-0 right-0 transition-all ${
          small
            ? "nav-shadow nav-shadow-scrolled bg-dark top-0"
            : "bg-[#00000000]"
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
                className="fixed inset-0 bg-dark opacity-60"
                aria-hidden="true"
              />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex justify-end">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="-translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-md flex-col overflow-y-auto pb-12 shadow-xl border-l-primary border-l bg-bg-secondary">
                  <div className="flex px-4 pb-2 pt-5">
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
                      className="cursor-pointer"
                      id={`nav-logo-mobile-panel-${title}`}
                    >
                      {navigation?.navigationLogo ? (
                        <>
                          <span className="sr-only">{title}</span>
                          <Image
                            className="h-12 w-auto max-w-xs mx-auto cursor-pointer object-contain"
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
                      title="Close menu"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 ml-auto group"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-6 w-6 text-text-color transition-all group-hover:rotate-90 group-hover:text-primary"
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
                              <div className="border-b border-primary">
                                <Tab.List className="-mb-px flex space-x-8 px-4">
                                  <Tab
                                    key={mainNavigationItem.label}
                                    className={({ selected }) =>
                                      classNames(
                                        selected
                                          ? "border-primary text-primary"
                                          : "border-transparent text-text-color",
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
                                            cssClass={`mt-2 block text-xs md:text-sm font-medium text-text-color text-center group-hover:text-primary transition ${item?.cssClass}`}
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

                          {!hasItems && (
                            <div className="space-y-6 border-y border-[#2c2c2c31] px-4 py-3">
                              <div className="flow-root">
                                {mainNavigationItem.link?.includes("http") ? (
                                  <a
                                    target={
                                      mainNavigationItem?.sameTab
                                        ? "_self"
                                        : "_blank"
                                    }
                                    key={mainNavigationItem.label}
                                    href={mainNavigationItem.link || "/"}
                                    className="-m-2 block p-2 font-medium text-text-color max-w-max mx-auto"
                                    onClick={() => {
                                      setOpen(false);
                                      ReactGA.event({
                                        category: "Link",
                                        action: mainNavigationItem.link || "",
                                        label: mainNavigationItem.link || "",
                                      });
                                    }}
                                  >
                                    {mainNavigationItem.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={mainNavigationItem.label}
                                    href={mainNavigationItem.link || "/"}
                                    className="-m-2 block p-2 font-medium text-text-color max-w-max mx-auto text-xl w-[90%] hover:text-primary transition-all"
                                    onClick={() => {
                                      setOpen(false);
                                      ReactGA.event({
                                        category: "Link",
                                        action: "Visit Home",
                                        label: "Visit Home",
                                      });
                                    }}
                                  >
                                    {mainNavigationItem.label}
                                  </Link>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <SocialMediaIcons
                      siteLibrary={siteLibrary}
                      cssClass="mt-8 mb-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color"
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
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color mx-auto group"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-text-color group-hover:text-primary transition-all group-hover:rotate-90"
                      aria-hidden="true"
                    />
                    <span className="text-text-color ml-2 group-hover:text-primary transition-all">
                      Close menu
                    </span>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative">
          <nav aria-label="Top">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-2">
              <div className="mt-2">
                <div className="flex items-center justify-start md:justify-center flex-row relative">
                  <Link
                    href="/"
                    className="justify-self-center"
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
                          className="h-16 w-auto max-w-xs mx-auto cursor-pointer object-contain"
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
                  <div className="max-w-max absolute right-0">
                    <button
                      type="button"
                      className="rounded-md px-2 py-1 text-text-color border border-white hover:border-primary transition group"
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
                        className="h-6 w-6 group-hover:text-primary transition"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <SocialMediaIcons
                siteLibrary={siteLibrary}
                cssClass="-mt-2 w-full flex flex-row social-icons-row items-center justify-center text-text-color gap-x-0 h-8 opacity-40"
              />
            </div>
          </nav>
        </header>
      </div>
      <div className="pb-28"></div>
    </>
  );
}
