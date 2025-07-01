/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import ReactGA from "react-ga4";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import AccouncementBar from "./AccouncementBar";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function MinimalNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);

  if (!navigations && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const { title } = siteLibrary;

  const navigation =
    navigations?.find(
      (navigationTemp) =>
        navigationTemp?.pageNavigationSelection &&
        pageNavigationSelection &&
        navigationTemp?.pageNavigationSelection.includes(
          pageNavigationSelection
        )
    ) || navigations[0];

  const { navigationWrapperCssClass } = navigation;

  return (
    <>
      {navigation?.announcementText && (
        <AccouncementBar
          accouncementText={navigation.announcementText}
          accouncementLink={navigation?.announcementLink || ""}
          cssClassWrapper="fixed w-full z-[998] text-center !bg-bg-secondary text-text-color bottom-0
          
          f"
        />
      )}
      <div
        className={`minimal-navigation fixed top-[2px] z-[999] left-0 right-0 transition-all duration-[400ms] ${
          navigationWrapperCssClass ? navigationWrapperCssClass : ""
        }`}
        id="navigation"
      >
        {/* Mobile menu */}
        <MobileMenuPanel
          open={open}
          setOpen={setOpen}
          navigation={navigation}
          siteLibrary={siteLibrary}
        />

        <header className="relative px-1">
          <nav aria-label="Top" className="mx-auto px-0 my-2">
            <div className="flex items-center justify-between flex-row relative w-full">
              {/* Desktop menu bar */}
              <div className="absolute right-2 lg:right-initial left-[initial] lg:left-2 max-w-max aspect-1 border-[#00000000] hover:border-primary border top-2 transition-all duration-[400ms]">
                <button
                  type="button"
                  title="menu"
                  className="p-2 text-text-color group hover:text-primary transition-all duration-[400ms] cursor-pointer relative max-w-max"
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
                    className="h-10 lg:h-12 w-10 lg:w-12 group-hover:text-primary transition-all duration-[400ms] shadow-2xl"
                    aria-hidden="true"
                  />
                  <span className="text-xs group-hover:opacity-100 absolute bottom-0 group-hover:bottom-[-20px] group-focus-visible:bottom-[-20px] transition-all duration-[400ms] uppercase font-bold group-hover:blur-0 text-center left-0 right-0 z-2 group-focus-visible:opacity-100 opacity-0">
                    Menu
                  </span>
                  <div className="bg-bg backdrop-blur-xl inset-0 h-full w-full -z-1 absolute opacity-50"></div>
                </button>
              </div>
              <div className="absolute left-2 lg:left-[initial] right-[initial] lg:right-2 max-w-max aspect-1 top-2 transition-all duration-[400ms]">
                <Link
                  href="/"
                  className="justify-self-center transition-all cursor-pointer"
                  id="center-nav-logo-desktop"
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
                        className="h-16 w-auto max-w-[10rem] lg:max-w-[14rem] mx-auto cursor-pointer object-contain transition-all"
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
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
