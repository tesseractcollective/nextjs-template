/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { XMarkIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
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
          navigationWrapperCssClass ? navigationWrapperCssClass : ""
        }`}
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
                className="fixed inset-0  transition-all bg-[#00000080] opacity-60 backdrop-blur-xl"
                aria-hidden="true"
              />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex justify-end items-end w-full">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-y-full translate-x-full blur-xl"
                enterTo="-translate-y-0 -translate-x-0 blur-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-y-0 -translate-x-0 blur-0"
                leaveTo="translate-y-full translate-x-full blur-xl"
              >
                <Dialog.Panel className="relative flex w-full h-full max-h-[90vh] max-w-[90vw] md:max-w-md flex-col overflow-y-auto pb-12 shadow-xl border-primary border-t border-l bg-bg transition-all isolate">
                  <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                  >
                    <div
                      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                    />
                  </div>
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
                      className="cursor-pointer transition-all"
                      id={`nav-logo-mobile-panel-${title?.replace(" ", "-")}`}
                    >
                      {navigation?.navigationLogo ? (
                        <>
                          <span className="sr-only">{title}</span>
                          <Image
                            className="h-8 md:h-12 w-auto max-w-xs mx-auto cursor-pointer object-contain transition-all"
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
                      title={
                        siteLibrary.isSpanish ? "Cerrar menú" : "Close menu"
                      }
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 ml-auto group"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">
                        {siteLibrary.isSpanish ? "Cerrar menú" : "Close menu"}
                      </span>
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
                                            cssClass={`mt-2 block text-xs md:text-sm font-medium text-text-color text-center group-hover:!text-primary !transition-all !cursor-pointer ${item?.cssClass}`}
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
                                <LinkItem
                                  key={mainNavigationItem.label}
                                  link={mainNavigationItem.link || "/"}
                                  sameTab={mainNavigationItem?.sameTab}
                                  cssClass="block py-2 p-2 text-text-color max-w-max mr-auto text-3xl w-[90%] transition-all uppercase font-bold hover:text-primary focus:text-primary  hover:scale-y-[0.9] focus:scale-y-[0.9] hover:tracking-wider focus:tracking-wider"
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

                  <div className="space-y-6 px-4 py-6">
                    <SocialMediaIcons
                      siteLibrary={siteLibrary}
                      cssClass="my-4 w-full flex flex-row social-icons-row items-center justify-center text-text-color flex-wrap gap-x-2"
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
                      {siteLibrary.isSpanish ? "Cerrar menú" : "Close menu"}
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
            <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-2">
              <div className="mt-2 relative">
                <div className="flex items-center justify-between flex-row relative">
                  <div className="max-w-max left-0">
                    <SocialMediaIcons
                      siteLibrary={siteLibrary}
                      cssClass="my-4 w-full social-icons-row text-text-color flex flex-row flex-wrap items-center justify-start gap-x-2 max-w-[120px] md:max-w-[300px]"
                    />
                    <button
                      type="button"
                      className="px-2 py-1 text-text-color border border-white hover:border-primary transition-all group fixed bottom-5 right-5 md:hidden skew-x-[-6deg] hover:skew-x-[6deg] bg-dark"
                      title="Open Mobile Menu"
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
                      <Bars3BottomLeftIcon
                        className="h-6 w-6 group-hover:text-primary transition-all rotate-180 skew-x-[-6deg] group-hover:skew-x-[6deg] group-hover:rotate-0"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <Link
                    href="/"
                    className="items-center justify-self-center transition-all cursor-pointer"
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
                          className="h-9 sm:h-12 md:h-16 w-auto max-w-xs mx-auto cursor-pointer object-contain transition-all"
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
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* DIV */}
        <div className="hidden md:flex md:fixed absolute bottom-10 left-4">
          <Fade direction="up" triggerOnce cascade damping={0.05}>
            {!!items &&
              items.length >= 1 &&
              items.map((mainNavigationItem) => {
                const hasItems = mainNavigationItem.items.length >= 1;
                return (
                  <div key={mainNavigationItem.label} className="">
                    {!hasItems && (
                      <div className="">
                        <LinkItem
                          key={mainNavigationItem.label}
                          link={mainNavigationItem.link || "/"}
                          sameTab={mainNavigationItem?.sameTab}
                          cssClass="m-2 px-2 py-4 text-text-color max-w-max mx-auto text-xl transition-all uppercase text-shadow font-bold relative hover:text-primary hover:top-[-6px] focus:text-primary  focus:top-[-6px] top-0"
                          onClick={() => setOpen(false)}
                        >
                          <span>{mainNavigationItem.label}</span>
                        </LinkItem>
                      </div>
                    )}
                  </div>
                );
              })}
          </Fade>
        </div>
        {/* DIV */}
      </div>
      {/* <div className="pb-4"></div> */}
    </>
  );
}
