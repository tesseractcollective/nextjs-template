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
        className={`sticky top-[-1px] z-[999] left-0 right-0 transition-all ${
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
                enterFrom="translate-y-full blur-xl"
                enterTo="-translate-y-0 blur-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-y-0 blur-0"
                leaveTo="translate-y-full blur-xl"
              >
                <Dialog.Panel
                  className="relative flex w-full max-h-[100vh] flex-col overflow-y-auto pb-12 shadow-xl border-t-primary border-t bg-bg
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
            <div className="mx-auto max-w-12xl px-0 mb-2">
              <div className="mt-2">
                <div className="flex items-center justify-between flex-row relative w-full">
                  <Link
                    href="/"
                    className="justify-self-start transition-all cursor-pointer group bg-after backdrop-blur-md"
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
                        <span className="sr-only cursor-pointer">{title}</span>
                        <Image
                          className="h-10 w-auto max-w-xs mx-auto cursor-pointer object-contain transition-all rotate-0 group-hover:rotate-[360deg]"
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
                  <div className="absolute right-0 max-w-max bg-bg aspect-1 border-secondary border top-[-2px]">
                    <button
                      type="button"
                      title="menu"
                      className="p-2 text-primary group hover:text-secondary transition-all cursor-pointer relative"
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
      {/* <div className="pb-20"></div> */}
      {/* <div className="fixed floating-whatsapp-button text-[#fff] bg-[#25D366] border-2 border-solid flex items-center align-middle z-[60] rounded-full border-[#fff] aspect-1 bottom-0 left-4 md:left-8 w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
        <SocialMediaIcons
          siteLibrary={siteLibrary}
          cssClass="relative max-w-max md:flex flex-row social-icons-row items-center justify-center text-primary gap-x-2 opacity-100 bg-secondary"
        />
      </div> */}
    </>
  );
}
