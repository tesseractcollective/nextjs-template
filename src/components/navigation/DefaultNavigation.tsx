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

export default function DefaultNavigation({
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

  return (
    <div
      className={`sticky top-0 z-[999] bg-background left-0 right-0 nav-shadow ${
        small ? "nav-shadow-scrolled" : ""
      } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
      id="navigation"
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
              className="fixed inset-0 bg-dark opacity-60"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl border-r-primary border-r bg-bg-secondary theme-scroll">
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
                          className="h-8 w-auto max-w-xs mx-auto cursor-pointer object-contain"
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
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 ml-auto"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 text-text-color"
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
                                        ? "text-primary"
                                        : "border-transparent text-text-color",
                                      "flex-1 whitespace-nowrap border-dark hover:border-white px-1 py-4 text-base font-medium"
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
                                          cssClass={`mt-2 block text-xs sm:text-sm md:text-base font-medium text-text-color text-center group-hover:text-primary transition ${item?.cssClass}`}
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
                          <div className="space-y-6 px-4 py-3">
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
                                  className="-m-2 block p-2 font-medium text-text-color max-w-max mx-auto"
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

                <div className="space-y-6 px-4 py-6">
                  <SocialMediaIcons
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
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 mx-auto"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 text-text-color"
                    aria-hidden="true"
                  />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          <div className="">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-dark">
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
                                                `relative z-10 -mb-px flex items-center pt-px font-medium transition-colors duration-200 ease-out border-dark hover:border-white border-b-2 ${
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
                                              {mainNavigationItem.label}
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
                                            <Popover.Panel className="absolute inset-x-0 top-full text-xs sm:text-sm md:text-base text-text-color border-t-2 border-b-2 border-primary box-shadow">
                                              {({ close }) => (
                                                <>
                                                  <div
                                                    className="absolute inset-0 top-1/2 bg-dark shadow"
                                                    aria-hidden="true"
                                                  />

                                                  <div className="relative bg-bg-secondary">
                                                    <div className="mx-auto max-w-8xl px-8">
                                                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                        {mainNavigationItem.items.map(
                                                          (item) => (
                                                            <div
                                                              key={item.label}
                                                              className="group relative"
                                                              onClick={() =>
                                                                close()
                                                              }
                                                            >
                                                              {item?.image && (
                                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
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
                                                                  cssClass={`mt-4 block font-medium text-text-color ${item?.cssClass}`}
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
                                                  <div className="absolute top-0 right-0 ml-auto">
                                                    <button
                                                      type="button"
                                                      className="m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 outline outline-primary z-50"
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
                                                      <span className="sr-only">
                                                        Close menu
                                                      </span>
                                                      <XMarkIcon
                                                        className="h-6 w-6 text-text-color"
                                                        aria-hidden="true"
                                                      />
                                                    </button>
                                                  </div>
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
                                      cssClass={`flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all ${
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
                        />
                      </>
                    ) : (
                      <span className="font-bold text-2xl text-text-color">
                        {title}
                      </span>
                    )}
                  </Link>

                  {!!primaryItems && primaryItems.length >= 1 && (
                    <div className="flex flex-1 items-center justify-end max-w-max">
                      {primaryItems.map((mainNavigationItem) => (
                        <LinkItem
                          key={mainNavigationItem?.link}
                          link={mainNavigationItem?.link}
                          label={mainNavigationItem?.label}
                          cssClass={`flex items-center font-bold text-text-overlay opacity-90  hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer bg-primary px-2 md:px-4 rounded transition-all ${
                            mainNavigationItem?.cssClass
                          } ${
                            small
                              ? "text-xs md:text-sm py-0 md:py-1"
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
