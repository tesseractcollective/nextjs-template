/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Fade, Zoom } from "react-awesome-reveal";
import "./VerticalNavigation.scss";

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
                <Dialog.Panel
                  className="relative flex w-full max-h-[90vh] flex-col overflow-y-auto pb-12 shadow-xl border-t-primary border-t bg-bg
                 transition-all"
                >
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
                        className="cursor-pointer transition-all hover:skew-x-[8deg] hover:skew-y-[8deg]"
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
                                            onClick={() => {
                                              setOpen(false);
                                              ReactGA.event({
                                                category: "Link",
                                                action:
                                                  mainNavigationItem?.link ||
                                                  "",
                                                label:
                                                  mainNavigationItem?.label ||
                                                  "",
                                              });
                                            }}
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
                                    onClick={() => {
                                      setOpen(false);
                                      ReactGA.event({
                                        category: "Link",
                                        action: mainNavigationItem?.link || "",
                                        label: mainNavigationItem?.label || "",
                                      });
                                    }}
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
                            href={`tel:${contactPhone.replace(/-/g, "")}`}
                            className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max"
                          >
                            <span className="font-semibold">
                              {contactPhone}
                            </span>
                          </a>
                        )}
                        {!!contactEmail && (
                          <a
                            href={`mailto:${contactEmail}`}
                            className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max"
                          >
                            <span className="font-semibold">
                              {contactEmail}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end items-center w-full px-6">
                      <button
                        type="button"
                        className="flex items-center justify-center rounded-md p-2 text-text-color group flex-col text-center ml-auto max-w-max text-xs"
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

        <header className="relative">
          <nav aria-label="Top">
            <div className="mx-auto px-4 sm:px-6 mb-2">
              <div className="mt-2 relative">
                <div className="flex items-center justify-between flex-row relative">
                  <Link
                    href="/"
                    className="max-w-max absolute left-0 top-[0.05rem] sm:top-0 transition-all cursor-pointer"
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
                          className="w-[120px] md:w-[160px] max-h-[80px] cursor-pointer object-contain transition-all mr-auto"
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
                  {/* Desktop menu bar */}
                  <div className="max-w-max absolute right-[0.7rem] transition-all top-[0.05rem] sm:top-0">
                    <SocialMediaIcons
                      fadeDirection="down"
                      siteLibrary={siteLibrary}
                      cssClass="my-4 w-28 sm:w-36 md:w-full social-icons-row text-text-color flex flex-row flex-wrap items-center justify-end gap-x-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Zoom className="fixed bottom-10 right-5 md:hidden">
            <button
              type="button"
              className="rounded-full px-2 py-2 text-text-color border border-white hover:border-primary transition-all group bg-dark hover:rotate-180 relative z-100"
              onClick={() => {
                setOpen(true);
                ReactGA.event({
                  category: "Link",
                  action: "Open Mobile Menu",
                  label: "Open Mobile Menu",
                });
              }}
            >
              <Bars3BottomRightIcon
                className="h-7 w-7 group-hover:text-primary transition-all group-hover:opacity-50"
                aria-hidden="true"
              />
              <span className="text-xs group-hover:opacity-100 absolute top-[-20px] rotate-180 opacity-0 transition-all uppercase font-bold blur-xl group-hover:blur-0 text-center left-0 right-0 z-2">
                Menu
              </span>
              <span className="sr-only">Menu</span>
            </button>
          </Zoom>
        </header>
        {/* DIV */}

        <div className="hidden md:flex md:fixed vertical-nav-desktop">
          <Fade direction="right" triggerOnce cascade damping={0.05}>
            {!!items &&
              items.length >= 1 &&
              items.map((mainNavigationItem) => {
                const hasItems = mainNavigationItem.items.length >= 1;
                return (
                  <div className="" key={mainNavigationItem.label}>
                    {hasItems && (
                      <div className="">
                        <LinkItem
                          key={mainNavigationItem.label}
                          link={mainNavigationItem.link || "/"}
                          sameTab={mainNavigationItem?.sameTab}
                          cssClass="m-2 p-2 font-medium text-text-color max-w-max mx-auto text-xl hover:text-primary transition-all uppercase"
                          onClick={() => setOpen(false)}
                        >
                          <span>{mainNavigationItem.label}</span>
                        </LinkItem>
                      </div>
                    )}
                    {!hasItems && (
                      <div className="">
                        <LinkItem
                          key={mainNavigationItem.label}
                          link={mainNavigationItem.link || "/"}
                          sameTab={mainNavigationItem?.sameTab}
                          cssClass="m-2 p-2 font-medium text-text-color max-w-max mx-auto text-xl hover:text-primary transition-all uppercase"
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
      {/* <div className="pb-28"></div> */}
    </>
  );
}
