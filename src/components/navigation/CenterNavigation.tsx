/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useEffect } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import { Dialog, Popover, Transition, Tab } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { Fade } from "react-awesome-reveal";
import MobileMenuPanel from "./NavigationSections/MobileMenuPanel";

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
        className={`fixed top-0 z-[999] bg-after left-0 right-0 transition-all backdrop-blur-md ${
          small ? "nav-shadow nav-shadow-scrolled top-0" : ""
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
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-2">
              <div className="mt-2">
                <div className="flex items-center justify-center flex-row relative w-full">
                  <SocialMediaIcons
                    fadeDirection="down"
                    siteLibrary={siteLibrary}
                    cssClass="max-w-max md:flex flex-row social-icons-row items-center justify-center text-primary gap-x-2 hidden absolute left-0"
                  />
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
                          className="h-16 w-auto max-w-xs mx-auto cursor-pointer object-contain transition-all"
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
                  <div className="absolute right-0 max-w-max">
                    <button
                      type="button"
                      title="menu"
                      className="rounded-md px-2 py-1 text-primary group hover:text-secondary transition-all cursor-pointer relative"
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
      <div className="pb-20"></div>
    </>
  );
}
