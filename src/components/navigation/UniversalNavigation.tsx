/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
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

export default function UniversalNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [menuImage, setMenuImage] = useState<string | null | undefined>(
    undefined
  );

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
        className={`fixed top-[2px] z-[999] left-0 right-0 transition-all duration-[400ms] ${
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

            <div className="fixed inset-0 z-40 flex items-start">
              <Transition.Child
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
                  <div className="absolute right-2 max-w-max bg-bg aspect-1 border-secondary border top-[6px]">
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
                  <Fade direction="down" triggerOnce className="relative z-10">
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

                  <Fade
                    triggerOnce
                    cascade
                    direction="up"
                    damping={0.05}
                    className="relative z-10"
                  >
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
                                        onMouseEnter={() =>
                                          setTimeout(
                                            () =>
                                              setMenuImage(
                                                mainNavigationItem.image?.url ??
                                                  undefined
                                              ),
                                            100
                                          )
                                        }
                                        onMouseLeave={() =>
                                          setTimeout(
                                            () => setMenuImage(undefined),
                                            100
                                          )
                                        }
                                      >
                                        {!!item?.link && (
                                          <LinkItem
                                            key={item?.link}
                                            link={item?.link}
                                            label={item?.label}
                                            cssClass={`my-2 block text-text-color max-w-max  text-2xl w-full transition-all duration-[400ms] uppercase font-bold hover:text-primary  focus:text-primary text-left flex flex-row items-center ${item?.cssClass}`}
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
                              <div
                                className="space-y-6 px-4 py-1 mt-4 mx-4"
                                onMouseEnter={() =>
                                  setTimeout(
                                    () =>
                                      setMenuImage(
                                        mainNavigationItem.image?.url ??
                                          undefined
                                      ),
                                    100
                                  )
                                }
                                onMouseLeave={() =>
                                  setTimeout(() => setMenuImage(undefined), 100)
                                }
                              >
                                <div className="max-w-max">
                                  <LinkItem
                                    key={mainNavigationItem.label}
                                    link={mainNavigationItem.link || "/"}
                                    sameTab={mainNavigationItem?.sameTab}
                                    cssClass="block py-1 text-text-color max-w-max mx-auto text-3xl lg:text-6xl w-full transition-all duration-[400ms] uppercase font-bold hover:text-primary focus:text-primary  text-left"
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

                  <Fade triggerOnce direction="up" className="relative z-10">
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
                  {!menuImage && (
                    <Fade
                      triggerOnce
                      direction="up"
                      className="absolute block w-full h-100vh inset-0 -z-1 transition-opacity duration-100 ease-in-out"
                    >
                      <div className="bg-bg absolute w-full h-100vh inset-0 -z-1 opacity-50"></div>
                    </Fade>
                  )}
                  {menuImage && (
                    <Fade
                      triggerOnce
                      direction="up"
                      className="object-cover absolute w-full h-100vh inset-0 -z-1 transition-opacity duration-500 ease-in-out"
                      style={{
                        opacity: menuImage ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <Image
                        src={menuImage}
                        width={0}
                        height={0}
                        sizes="100%"
                        className="object-cover absolute w-full h-100vh inset-0 -z-1 opacity-50"
                        alt=""
                        quality={100}
                      />
                    </Fade>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative px-1">
          <nav aria-label="Top" className="mx-auto px-0 my-2">
            <div className="flex items-center justify-between flex-row relative w-full">
              <Link
                href="/"
                className="max-w-max absolute left-0 top-[0.05rem] sm:top-0 transition-all duration-[400ms] cursor-pointer"
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
                    <Fade direction="down" triggerOnce>
                      <Image
                        className="w-[80px] md:w-[100px] max-h-[80px] cursor-pointer object-contain transition-all duration-[400ms] mr-auto"
                        src={navigation.navigationLogo?.url}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                      />
                    </Fade>
                  </>
                ) : (
                  <span className="font-bold text-2xl text-text-color">
                    {title}
                  </span>
                )}
              </Link>
              {/* Desktop menu bar */}
              <div className="absolute right-0 max-w-max bg-bg aspect-1 border-secondary border top-[-2px]">
                <button
                  type="button"
                  title="menu"
                  className="p-2 text-primary group hover:text-secondary transition-all duration-[400ms] cursor-pointer relative max-w-max"
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
                    className="h-7 w-7 group-hover:text-primary transition-all duration-[400ms] group-hover:opacity-50"
                    aria-hidden="true"
                  />
                  <span className="text-xs group-hover:opacity-100 absolute bottom-[-20px] rotate-0 opacity-0 transition-all duration-[400ms] uppercase font-bold blur-xl group-hover:blur-0 text-center left-0 right-0 z-2">
                    Menu
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
