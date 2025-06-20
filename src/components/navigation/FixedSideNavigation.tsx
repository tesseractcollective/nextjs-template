/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import {
  Dialog,
  Popover,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Fade } from "react-awesome-reveal";
import BodyClassManager from "@/hooks/BodyClassManager";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function FixedSideNavigation({
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
      <BodyClassManager classes="fixed-nav ml-0 lg:ml-48" />
      <div
        className={`fixed lg:top-0 z-[999] left-0 right-0 transition-all ${
          navigationWrapperCssClass ? navigationWrapperCssClass : ""
        }`}
        id="navigation"
      >
        {/* Mobile menu */}
        <Transition show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[1000]" onClose={setOpen}>
            <TransitionChild
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
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex items-start">
              <TransitionChild
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-y-full blur-xl"
                enterTo="-translate-y-0 blur-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-y-0 blur-0"
                leaveTo="-translate-y-full blur-xl"
              >
                <Dialog.Panel
                  className="relative flex w-full max-h-[100vh] flex-col overflow-y-auto pb-12 shadow-xl border-primary border-t bg-bg
                 transition-all duration-[400ms] h-100vh items-center justify-center border"
                >
                  <div className="absolute bottom-6 max-w-max bg-bg aspect-1 border-secondary border">
                    <button
                      type="button"
                      title="menu"
                      className="p-2 text-primary group hover:text-secondary transition-all duration-[400ms] cursor-pointer relative"
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
                        className="h-6 w-6 text-text-color group-hover:text-primary transition-all duration-[400ms] group-hover:rotate-90 text-center mx-auto"
                        aria-hidden="true"
                      />

                      <span className="text-xs group-hover:opacity-100 absolute bottom-[-20px] rotate-0 opacity-0 transition-all duration-[400ms] uppercase font-bold blur-xl group-hover:blur-0 text-center left-0 right-0 z-2">
                        {siteLibrary.isSpanish ? "Cerrar" : "Close"}
                      </span>
                    </button>
                  </div>
                  <Fade direction="down" triggerOnce>
                    <div className="flex mt-0 mx-4 px-4 pb-2 pt-2 items-center justify-start">
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
                        className="cursor-pointer transition-all duration-[400ms] hover:skew-x-[8deg] hover:skew-y-[8deg] relative"
                        id="nav-logo-mobile-panel"
                      >
                        {navigation?.navigationLogo ? (
                          <>
                            <span className="sr-only">{title}</span>
                            <Image
                              src={navigation.navigationLogo?.url}
                              className="w-[80px] md:w-[120px] max-h-[80px] cursor-pointer object-contain transition-all duration-[400ms] block"
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
                    </div>
                  </Fade>

                  <Fade triggerOnce cascade direction="up" damping={0.05}>
                    {!!items &&
                      items.length >= 1 &&
                      items.map((mainNavigationItem) => {
                        const hasItems = mainNavigationItem.items.length >= 1;
                        return (
                          <div key={mainNavigationItem.label}>
                            {hasItems && (
                              <div className="space-y-6 px-4 py-3 mt-4 mx-4">
                                <h2
                                  key={mainNavigationItem.label}
                                  className="block text-text-color max-w-max text-xl w-full transition-all duration-[400ms] uppercase font-bold text-left border-b border-text-color opacity-70"
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
                                            cssClass={`my-2 block text-text-color max-w-max  text-2xl w-full transition-all duration-[400ms] uppercase font-bold hover:text-primary hover:skew-x-[8deg] hover:skew-y-[8deg] focus:text-primary focus:skew-x-[8deg] focus:skew-y-[8deg] text-left flex flex-row items-center ${item?.cssClass}`}
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
                              <div className="space-y-6 px-4 py-1 mt-4 mx-4">
                                <div className="max-w-max">
                                  <LinkItem
                                    key={mainNavigationItem.label}
                                    link={mainNavigationItem.link || "/"}
                                    sameTab={mainNavigationItem?.sameTab}
                                    cssClass="block py-1 text-text-color max-w-max mx-auto text-3xl lg:text-6xl w-full transition-all duration-[400ms] uppercase font-bold hover:text-primary hover:skew-x-[8deg] hover:skew-y-[8deg] focus:text-primary focus:skew-x-[8deg] focus:skew-y-[8deg] text-left"
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
                    <div className="space-y-6 px-4 py-6 mt-4 mx-4">
                      <SocialMediaIcons
                        siteLibrary={siteLibrary}
                        fadeDirection="up"
                        cssClass="my-2 mx-0 flex flex-row flex-wrap social-icons-row items-center justify-center text-text-color gap-2 overflow-hidden mx-auto py-0 max-w-max gap-x-4"
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
                  </Fade>
                </Dialog.Panel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <header className="w-full lg:max-w-max left-0 fixed bottom-0 top-[unset] lg:top-0 bg-bg-secondary lg:bg-bg max-h-max lg:max-h-full lg:h-full flex flex-row items-center lg:flex-col gap-y-4 border-t lg:border-r border-secondary transition-all">
          <Link
            href="/"
            className="transition-all cursor-pointer p-4"
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
                <Image
                  className="w-[120px] md:w-[160px] cursor-pointer object-contain transition-all block"
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
          <div className="hidden lg:flex flex-col mt-auto items-center w-full">
            <Fade
              direction="left"
              triggerOnce
              cascade
              damping={0.05}
              className="w-full"
            >
              {!!items &&
                items.length >= 1 &&
                items.map((mainNavigationItem) => {
                  const hasItems = mainNavigationItem.items.length >= 1;
                  return (
                    <div key={mainNavigationItem.label} className="w-full">
                      {!hasItems && (
                        <LinkItem
                          key={mainNavigationItem.label}
                          link={mainNavigationItem.link || "/"}
                          sameTab={mainNavigationItem?.sameTab}
                          // label={mainNavigationItem.label}
                          parentCssClass="cursor-pointer w-full text-center"
                          cssClass="my-2 text-text-color mx-auto text-sm lg:text-xl transition-all uppercase text-shadow font-bold relative hover:text-primary focus:text-primary block w-full border-l border-bg relative group"
                          activeClassName="border-primary bg-secondary"
                          onClick={() => setOpen(false)}
                        >
                          <span className="relative z-10">
                            {mainNavigationItem.label}
                          </span>
                          <span className="w-full bg-secondary h-full absolute inset-0 opacity-0 transition-all -z-10 group-hover:opacity-40"></span>
                        </LinkItem>
                      )}
                    </div>
                  );
                })}
            </Fade>
          </div>
          <button
            type="button"
            className="p-2 text-text-color border border-white hover:border-tertiary transition-all group w-full max-w-max mx-auto lg:hidden bg-bg-secondary rounded-full"
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
            <Bars3Icon
              className="h-6 w-6 group-hover:text-tertiary transition-all"
              aria-hidden="true"
            />
          </button>
          <Fade direction="up" triggerOnce cascade damping={0.05}>
            <SocialMediaIcons
              fadeDirection="right"
              siteLibrary={siteLibrary}
              iconClass="lg:scale-[1.2] lg:scale-[1.5] opacity-70"
              cssClass="w-full social-icons-row text-text-color flex flex-row max-w-max items-center justify-center gap-2 max-w-max mx-auto lg:mt-2 lg:mb-4 px-4"
              whatsappLinkProp={
                siteLibrary?.contactPhone ? siteLibrary.contactPhone : ""
              }
            />
          </Fade>
        </header>

        {/* DIV */}
        {/* <div className="flex fixed bottom-10 left-4">
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
                          cssClass="m-2 px-2 py-4 text-text-color max-w-max mx-auto text-sm lg:text-xl transition-all uppercase text-shadow font-bold relative hover:text-primary hover:top-[-6px] focus:text-primary focus:top-[-6px] top-0 duration-[400ms]"
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
        <div className="flex fixed bottom-10 right-4">
          <Fade direction="up" triggerOnce cascade damping={0.05}>
            <SocialMediaIcons
              fadeDirection="down"
              siteLibrary={siteLibrary}
              iconClass="scale-[1.5] opacity-70"
              cssClass="w-full social-icons-row text-text-color flex flex-col max-w-max items-center justify-center gap-y-2 max-w-max"
              whatsappLinkProp={
                siteLibrary?.contactPhone ? siteLibrary.contactPhone : ""
              }
            />
          </Fade>
        </div> */}
        {/* DIV */}
      </div>
      {/* <div className="pb-4"></div> */}
    </>
  );
}
