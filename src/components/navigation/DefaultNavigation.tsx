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
import AccouncementBar from "./AccouncementBar";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import DesktopNavSecondaryLinkItems from "./NavigationSections/DesktopNavSecondaryLinkItems";

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
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateSmall = () => {
      const currentScrollY = window.pageYOffset;
      // Set buffer zones: 400px to activate, 300px to deactivate
      if (currentScrollY > 400) {
        setSmall(true);
      } else if (currentScrollY < 300) {
        setSmall(false);
      }
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateSmall);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!navigations && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const { title } = siteLibrary;

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
    <>
      {navigation?.announcementText && (
        <AccouncementBar
          accouncementText={navigation.announcementText}
          accouncementLink={navigation?.announcementLink || ""}
          cssClassWrapper="fixed w-full z-[998] text-center !bg-bg-secondary text-text-color"
        />
      )}
      <div
        className={`default-navigation sticky ${
          navigation?.announcementText ? "top-8" : "top-0"
        } z-[999] bg-after-nav left-0 right-0 nav-shadow dark-shadow transition-all backdrop-blur-md duration-[400ms] border-b border-primary ${
          small ? "nav-shadow-scrolled" : ""
        } ${navigationWrapperCssClass ? navigationWrapperCssClass : ""}`}
        id="default-navigation"
      >
        {/* Mobile menu */}
        <MobileMenuPanel
          open={open}
          setOpen={setOpen}
          navigation={navigation}
          siteLibrary={siteLibrary}
        />

        <nav aria-label="Top" className="relative z-2 mx-auto max-w-10xl px-4">
          <div
            className={`w-full justify-between grid grid-cols-2 lg:grid-cols-3 transition-all duration-[400ms] ${
              small ? "py-4" : "py-6"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="inline-flex items-center max-w-max"
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
                  <Fade direction="down" triggerOnce>
                    <Image
                      className={`w-auto object-contain max-w-[240px] lg:max-w-[288px] transition-all ${
                        small ? "h-7 lg:h-8" : "h-10 lg:h-12"
                      }`}
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

            {/* Middle nav items */}
            <DesktopNavSecondaryLinkItems
              navigation={navigation}
              wrapperClassName="hidden h-full lg:flex justify-center"
              linkStyles="flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold p-1 border-b hover:border-primary border-[#ffffff00]"
            />

            <div className="flex flex-1 items-center justify-end max-w-max ml-auto">
              {/* Primary Right Item */}
              {!!primaryItems && primaryItems.length >= 1 && (
                <div className="hidden lg:flex items-center justify-end">
                  {primaryItems.map((mainNavigationItem) => (
                    <LinkItem
                      key={mainNavigationItem?.link}
                      link={mainNavigationItem?.link}
                      label={mainNavigationItem?.label}
                      cssClass={`flex items-center font-bold text-text-overlay opacity-90 hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer bg-primary px-2 md:px-4 rounded transition-all uppercase ${
                        mainNavigationItem?.cssClass
                      } ${
                        small
                          ? "text-xs md:text-sm py-[0.15rem] md:py-1"
                          : "text-xs sm:text-sm md:text-base py-1 md:py-2"
                      }`}
                      sameTab={mainNavigationItem?.sameTab}
                    />
                  ))}
                </div>
              )}

              {/* Mobile Hamburger Menu Button */}
              <div className="flex items-center justify-end lg:hidden">
                <button
                  type="button"
                  className="ml-2 p-1 text-text-color border border-white hover:border-primary transition group"
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
                    className={`group-hover:text-primary transition-all duration-[400ms] ${
                      small ? "h-8 w-8" : "h-10 w-10"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
