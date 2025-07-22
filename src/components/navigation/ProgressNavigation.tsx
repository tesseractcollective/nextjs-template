/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import useViewport from "@/app/hooks/useViewport";
import "./ProgressNavigation.scss";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";
import DesktopNavSecondaryLinkItems from "./NavigationSections/DesktopNavSecondaryLinkItems";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function ProgressNavigation({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const completion = useReadingProgress();
  const { isMobile } = useViewport();
  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
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
  const primaryItems = items.filter(
    (mainNavigationItem) => mainNavigationItem.primaryItem === true
  );

  return (
    <div
      className={`fixed lg:sticky bottom-0 lg:top-0 z-[999] left-0 right-0 transition-all ${
        navigationWrapperCssClass ? navigationWrapperCssClass : ""
      }`}
      id="progress-navigation-header"
    >
      {/* Mobile menu */}
      <MobileMenuPanel
        open={open}
        setOpen={setOpen}
        navigation={navigation}
        siteLibrary={siteLibrary}
      />
      <Fade direction={isMobile ? "up" : "down"} triggerOnce>
        <header className="relative z-2 mb-0 lg:mb-8 lg:mt-8 transition-all duration-[450ms]">
          <nav
            aria-label="Top"
            className={`mx-auto px-4 sm:px-6 lg:px-8 bg-text-overlay transition-all min-w-[85%] duration-[450ms] shadow-top lg:shadow-none !min-h-[48px] ${
              small ? "rounded-none max-w-full" : "rounded-full max-w-8xl"
            }`}
          >
            <div className="">
              <div
                className={`grid grid-cols-3 justify-between transition-all max-w-8xl mx-auto relative overflow-hidden !min-h-[48px] ${
                  small ? "h-16" : "h-20"
                }`}
              >
                <span
                  id="progress-bar"
                  style={{
                    transform: `translateX(${completion - 100}%)`,
                  }}
                  className={`absolute bottom-0 w-full transition-transform duration-150 h-[0.15rem] bg-primary rounded-full`}
                />
                <div className="hidden lg:flex lg:flex-1 lg:items-center cursor-pointer max-w-max mr-auto">
                  <Link
                    href="/"
                    id={`nav-logo-desktop-${title}`}
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
                          className={`w-full ml-0 max-w-[10rem] mr-auto cursor-pointer object-contain transition-all h-full p-1 ${
                            small ? "max-h-12" : "max-h-16"
                          }`}
                          src={navigation.navigationLogo?.url}
                          alt={title || ""}
                          priority
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
                <DesktopNavSecondaryLinkItems
                  navigation={navigation}
                  wrapperClassName={`hidden h-full lg:flex mx-auto ${navigationWrapperCssClass}`}
                  linkStyles={`flex items-center font-medium text-text-color opacity-100  hover:opacity-100 transition-all capitalize font-semibold relative group ${
                    small
                      ? "text-xs md:text-sm"
                      : "text-xs sm:text-sm md:text-base"
                  }`}
                />

                <Link
                  href="/"
                  className="flex items-center lg:hidden cursor-pointer max-w-[200px]"
                  id={`nav-logo-mobile-${title}`}
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
                        className={`w-full max-w-[140px] mx-auto cursor-pointer object-contain transition-all ${
                          small ? "h-7" : "h-10"
                        }`}
                        src={
                          navigation?.navJson?.mobileLogo
                            ? navigation.navJson.mobileLogo
                            : navigation.navigationLogo?.url
                        }
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        priority
                      />
                    </>
                  ) : (
                    <span className="font-bold text-2xl text-text-color">
                      {title}
                    </span>
                  )}
                </Link>
                {/* Mobile menu bar */}
                <div className="flex flex-1 items-center justify-between lg:hidden max-w-max mx-auto">
                  <button
                    type="button"
                    className="mx-auto text-text-color transition group relative w-8 aspect-1 flex flex-col"
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
                      className={`group-hover:text-primary transition-all w-full min-w-4 h-10`}
                      aria-hidden="true"
                    />
                    <span className="text-xs text-center my-0 py-0 -mt-2">
                      menu
                    </span>
                  </button>
                </div>

                {!!primaryItems && primaryItems.length >= 1 && (
                  <div className="flex flex-1 items-center justify-end max-w-max ml-auto">
                    {primaryItems.map((mainNavigationItem) => (
                      <LinkItem
                        key={mainNavigationItem?.link}
                        link={mainNavigationItem?.link}
                        label={mainNavigationItem?.label}
                        cssClass={`progress-primary-button flex items-center font-bold bg-primary text-dark opacity-90 hover:text-secondary hover:opacity-100 transition-all capitalize font-semibold border px-3 py-1 border-primary rounded-full hover:border-secondary ${
                          small
                            ? "text-xs md:text-sm"
                            : "text-xs sm:text-sm md:text-base"
                        } ${mainNavigationItem?.cssClass}`}
                        sameTab={mainNavigationItem?.sameTab}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      </Fade>
    </div>
  );
}
