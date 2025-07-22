/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Fade } from "react-awesome-reveal";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import "./BorderNavigation.scss";
import parse from "html-react-parser";
import DesktopNavSecondaryLinkItems from "./NavigationSections/DesktopNavSecondaryLinkItems";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolled(window.pageYOffset > 400)
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
        isScrolled ? "nav-shadow-scrolled" : ""
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
            <div
              className={`nav-border mx-auto max-w-12xl transition-all border-b ${
                isScrolled ? "border-primary" : "border-text-color"
              }`}
            >
              <div className="">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center cursor-pointer max-w-max px-4 h-full">
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
                        <Image
                          className="h-14 w-auto max-w-xs ml-0 mr-auto cursor-pointer object-contain py-2"
                          src={navigation.navigationLogo.url}
                          alt={title || ""}
                          width={0}
                          height={0}
                          sizes="200px"
                        />
                      ) : (
                        <span className="font-bold text-2xl text-text-color">
                          {title}
                        </span>
                      )}
                    </Link>
                  </div>

                  {navigation.announcementText && (
                    <Fade direction="down" triggerOnce>
                      {navigation.announcementLink ? (
                        <LinkItem
                          label={navigation.announcementText}
                          cssClass="flex m-0 p-2 items-center justify-center text-xs lg:text-sm font-semibold text-text-color hover:text-primary"
                          link={navigation.announcementLink}
                        ></LinkItem>
                      ) : (
                        <p className="flex m-0 p-2 items-center justify-center text-xs lg:text-sm font-semibold">
                          {parse(navigation.announcementText)}
                        </p>
                      )}
                    </Fade>
                  )}

                  <DesktopNavSecondaryLinkItems
                    navigation={navigation}
                    wrapperClassName={`hidden lg:flex flex-1 items-center justify-end max-w-max ml-auto gap-x-4 px-4 ${navigationWrapperCssClass}`}
                    linkStyles="flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold p-1 "
                  />

                  {/* mega menu bar */}
                  <div className="hidden lg:flex flex-1 items-center justify-between max-w-max h-full bg-primary">
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
                              cssClass={`flex items-center text-xs lg:text-base font-bold text-text-color opacity-100 hover:text-text-color 
                              hover:opacity-100 border-1 border-primary cursor-pointer px-2 lg:px-8 lg:py-5 uppercase transition-all ${
                                isScrolled
                                  ? "bg-primary hover:bg-secondary"
                                  : "bg-secondary hover:bg-primary"
                              } ${mainNavigationItem?.cssClass}`}
                              sameTab={mainNavigationItem?.sameTab}
                            />
                          ))}
                    </Fade>
                  </div>

                  {/* PRIMARY ITEM */}
                  <div className="flex lg:hidden flex-1 items-center justify-between max-w-max h-full px-4">
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
