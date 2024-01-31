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
import { Fade } from "react-awesome-reveal";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function HorizonNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [openSocial, setOpenSocial] = useState<boolean>(false);
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSrolled(window.pageYOffset > 200)
      );
    }
  }, []);

  if (!navigations && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const { title, contactPhone, contactEmail, contactName, isSpanish } =
    siteLibrary;

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
                <Dialog.Panel className="relative w-full h-full max-h-[90vh] overflow-y-auto pb-12 shadow-xl border-t-primary border-t bg-bg transition-all flex flex-col justify-end">
                  <Fade
                    direction="down"
                    triggerOnce
                    className="relative h-full"
                  >
                    <div className="flex mt-4 ml-4 p-2 items-start justify-start mb-auto absolute top-0">
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
                        className="cursor-pointer transition-all w-full block"
                        id={`nav-logo-mobile-panel`}
                      >
                        {navigation?.navigationLogo ? (
                          <>
                            <span className="sr-only">{title}</span>
                            <Image
                              className="w-[80px] md:w-[120px] max-h-[80px] cursor-pointer object-contain transition-all block min-h-[80px]"
                              src={navigation.navigationLogo?.url}
                              alt=""
                              width={0}
                              height={0}
                              sizes="100%"
                              // style={{ width: "100%" }}
                            />
                          </>
                        ) : (
                          <span className="font-bold text-2xl text-text-color uppercase">
                            {title}
                          </span>
                        )}
                      </Link>
                    </div>
                  </Fade>

                  <Fade triggerOnce cascade direction="right" damping={0.05}>
                    {!!items &&
                      items.length >= 1 &&
                      items.map((mainNavigationItem) => {
                        const hasItems = mainNavigationItem.items.length >= 1;
                        return (
                          <div
                            key={mainNavigationItem.label}
                            className="mt-auto flex max-h-max"
                          >
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
                                            cssClass={`my-2 block text-text-color max-w-max text-4xl w-full transition-all uppercase font-bold hover:text-primary focus:text-primary text-right flex flex-row items-center  hover:tracking-wide focus:tracking-wide ${item?.cssClass}`}
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
                              <div className="space-y-0 px-4 my-2 mt-auto ml-auto mr-0">
                                <div className="max-w-max">
                                  <LinkItem
                                    key={mainNavigationItem.label}
                                    link={mainNavigationItem.link || "/"}
                                    sameTab={mainNavigationItem?.sameTab}
                                    cssClass="block py-0 my-0 text-text-color max-w-max text-4xl w-full transition-all uppercase font-bold hover:text-primary hover:tracking-widest focus:text-primary text-right hover:scale-y-[95%] relative strike"
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
                    <button
                      type="button"
                      onClick={() => setOpenSocial(true)}
                      className="block py-1 text-text-color max-w-max ml-auto text-4xl w-full transition-all uppercase font-bold hover:text-primary hover:tracking-widest focus:text-primary text-right hover:scale-y-[95%] relative strike mr-4"
                    >
                      <span className="ml-auto max-w-max">
                        {isSpanish ? "SIGUE" : "FOLLOW"}
                      </span>
                    </button>
                  </Fade>

                  <Fade triggerOnce direction="up">
                    {(contactName || contactEmail || contactPhone) && (
                      <div className="space-y-6 px-4 py-6 mt-4 ml-4">
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
                    )}
                    <div className="flex justify-end items-center w-full px-6 mt-4">
                      <button
                        type="button"
                        className="flex items-center justify-center text-text-color group flex-col text-center ml-auto max-w-max text-xs px-0 -mr-2 opacity-70 hover:opacity-80 active:opacity-100 transition-all"
                        onClick={() => setOpen(false)}
                      >
                        {/* <span className="text-text-color group-hover:text-primary transition-all uppercase text-center text-xs flex">
                          {siteLibrary.isSpanish ? "Cerrar menú" : "Close menu"}
                        </span> */}
                        <span className="text-4xl">CLOSE</span>
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
                          className="w-[120px] md:w-[160px] max-h-[80px] cursor-pointer object-contain transition-all mr-auto min-h-[80px]"
                          src={navigation.navigationLogo?.url}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100%"
                        />
                      </>
                    ) : (
                      <span className="font-bold text-2xl text-text-color uppercase">
                        {title}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <Fade
            className="fixed bottom-10 right-5 xl:hidden"
            direction="up"
            triggerOnce
          >
            <button
              type="button"
              className="group flex-col text-center ml-auto max-w-max text-xs p-2 opacity-70 hover:opacity-80 active:opacity-100 transition-all text-text-color text-shadow"
              onClick={() => {
                setOpen(true);
                ReactGA.event({
                  category: "Link",
                  action: "Open Mobile Menu",
                  label: "Open Mobile Menu",
                });
              }}
            >
              {/* <Bars3BottomRightIcon
                className="h-7 w-7 group-hover:text-primary transition-all group-hover:opacity-50 rotate-90"
                aria-hidden="true"
              />
              <span className="sr-only">Menu</span> */}
              <span className="text-4xl">MENU</span>
            </button>
          </Fade>
        </header>
        {/* DIV */}

        {/* DESKTOP NAV */}
        <div
          className={`hidden xl:flex xl:fixed horizon-nav-desktop ${
            scrolled ? "horizon-nav-desktop isScrolled" : ""
          }`}
        >
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
                          cssClass="m-2 p-2 font-medium text-text-color max-w-max text-right text-xl hover:text-primary transition-all uppercase"
                          onClick={() => setOpen(false)}
                        >
                          <span>{mainNavigationItem.label}</span>
                        </LinkItem>
                      </div>
                    )}
                  </div>
                );
              })}

            <button
              type="button"
              onClick={() => setOpenSocial(true)}
              className="my-2 p-2 font-medium text-text-color max-w-max ml-auto text-xl hover:text-primary transition-all uppercase text-right block !mr-0"
            >
              <span className="ml-auto max-w-max">
                {isSpanish ? "SIGUE" : "FOLLOW"}
              </span>
            </button>
          </Fade>
        </div>
        {/* DIV */}
      </div>
      {/* <div className="pb-28"></div> */}
      {/* SocialMediaPopup */}
      <Transition.Root show={openSocial} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={setOpenSocial}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-400 transform"
            enterFrom="translate-y-full"
            enterTo="-translate-y-0"
            leave="transition ease-in-out duration-400 transform"
            leaveFrom="-translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="fixed inset-0 bg-[#00000097] transition-all backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto w-full">
            <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-600"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-600"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left transition-all sm:mb-8 max-w-2xl sm:p-6 w-full flex-col flex">
                  <div className="flex items-center justify-center space-x-4">
                    <SocialMediaIcons
                      fadeDirection="down"
                      iconClass="scale-[200%]"
                      siteLibrary={siteLibrary}
                      cssClass="my-4 w-28 sm:w-36 md:w-full social-icons-row text-text-color flex flex-row flex-wrap items-center justify-center gap-10"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="absolute bottom-12">
                <button
                  type="button"
                  className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline transition-all outline-none hover:text-primary mx-auto max-w-max uppercase text-xs hover:bg-dark group focus-within:bg-dark focus-within:ring-1 ring-primary"
                  onClick={() => {
                    setOpenSocial(false);
                    ReactGA.event({
                      category: "Link",
                      action: "Close Whatsapp Menu",
                      label: "Close Whatsapp Menu",
                    });
                  }}
                >
                  <XMarkIcon
                    className="h-6 w-6 text-text-color group-hover:text-primary transition-all group-hover:rotate-90 text-center mx-auto"
                    aria-hidden="true"
                  />
                  <span className="ml-2">{`${
                    isSpanish ? "Cerrar" : "Close"
                  }`}</span>
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
