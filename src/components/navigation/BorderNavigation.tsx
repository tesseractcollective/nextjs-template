/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Fade } from "react-awesome-reveal";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import "./BorderNavigation.scss";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function BorderNavigation({
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
    <div
      className={`border-navigation sticky top-0 z-[999] bg-background left-0 right-0 ${
        small ? "nav-shadow-scrolled" : ""
      } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
      id="navigation"
    >
      {/* Mobile menu */}
      <MobileMenuPanel
        open={open}
        setOpen={setOpen}
        navigation={navigation}
        siteLibrary={siteLibrary}
      />
      <header className="relative">
        <nav aria-label="Top">
          <div className="">
            <div className="nav-border mx-auto max-w-12xl border border-y border-text-color">
              <div className="">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center cursor-pointer max-w-max px-4 border-r border-text-color h-full">
                    <Link
                      href="/"
                      className="flex mx-auto items-center justify-center"
                      id={`nav-logo-desktop`}
                      onClick={() => {
                        ReactGA.event({
                          category: "Link",
                          action: "Visit Home",
                          label: "Visit Home",
                        });
                      }}
                    >
                      {navigation?.navigationLogo?.url ? (
                        <Fade triggerOnce direction="left">
                          <Image
                            className="h-14 w-auto max-w-xs mx-auto cursor-pointer object-contain py-2"
                            src={navigation.navigationLogo.url}
                            alt={title || ""}
                            width={0}
                            height={0}
                            sizes="100%"
                            style={{ width: "100%" }}
                          />
                        </Fade>
                      ) : (
                        <span className="font-bold text-2xl text-text-color">
                          {title}
                        </span>
                      )}
                    </Link>
                  </div>

                  {navigation.announcementText && (
                    <Fade direction="down" triggerOnce>
                      <p className="flex m-0 p-2 items-center justify-center text-xs md:text-sm font-semibold">
                        {navigation.announcementText}
                      </p>
                    </Fade>
                  )}

                  <div className="hidden md:flex flex-1 items-center justify-end max-w-max ml-auto gap-x-4 px-4">
                    <Fade direction="down" triggerOnce>
                      {!!items &&
                        items
                          .filter(
                            (mainNavigationItem) =>
                              mainNavigationItem.primaryItem !== true
                          )
                          .map((mainNavigationItem) => (
                            <LinkItem
                              key={mainNavigationItem?.link}
                              link={mainNavigationItem?.link}
                              label={mainNavigationItem?.label}
                              cssClass={`flex items-center text-xs md:text-base font-bold text-text-color opacity-90 hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer px-2 md:px-4 py-1 md:py-2 uppercase ${mainNavigationItem?.cssClass}`}
                              sameTab={mainNavigationItem?.sameTab}
                            />
                          ))}
                    </Fade>
                  </div>

                  {/* mega menu bar */}
                  <div className="hidden md:flex flex-1 items-center justify-between max-w-max border-l border-text-color h-full bg-primary">
                    <Fade direction="right" triggerOnce>
                      {!!items &&
                        items
                          .filter(
                            (mainNavigationItem) =>
                              mainNavigationItem.primaryItem === true
                          )
                          .map((mainNavigationItem) => (
                            <LinkItem
                              key={mainNavigationItem?.link}
                              link={mainNavigationItem?.link}
                              label={mainNavigationItem?.label}
                              cssClass={`flex items-center text-xs md:text-base font-bold text-text-color opacity-100 hover:text-text-color 
                              hover:opacity-100 border-1 border-primary cursor-pointer bg-primary hover:bg-secondary px-2 md:px-8 md:py-5 uppercase transition-all ${mainNavigationItem?.cssClass}`}
                              sameTab={mainNavigationItem?.sameTab}
                            />
                          ))}
                    </Fade>
                  </div>
                  <div className="flex md:hidden flex-1 items-center justify-between max-w-max border-l border-text-color h-full px-4">
                    <Fade direction="right" triggerOnce>
                      <button
                        type="button"
                        className="mx-4 p-2 text-text-color border border-white hover:border-primary transition group rounded-full max-h-max"
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
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
