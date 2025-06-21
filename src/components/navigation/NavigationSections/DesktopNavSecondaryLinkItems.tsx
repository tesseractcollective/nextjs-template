/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useRef } from "react";
import type { NavigationFieldsFragment } from "@/graphql/generated/graphql";
import {
  Transition,
  Popover,
  PopoverPanel,
  PopoverButton,
  PopoverBackdrop,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";

export interface DesktopNavSecondaryLinkItemsProps {
  navigation: NavigationFieldsFragment;
  wrapperClassName: string;
}

export default function DesktopNavSecondaryLinkItems({
  navigation,
  wrapperClassName,
}: DesktopNavSecondaryLinkItemsProps) {
  const [small, setSmall] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { items } = navigation;
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const panelGridColumns = items?.length >= 1 ? "grid-cols-2" : "grid-cols-1";
  return (
    <div className={`relative ${wrapperClassName}`}>
      {/* START Desktop Flyout menus */}
      <Popover className="inset-x-0 bottom-0 px-4 z-[99999]">
        <div className="flex h-full justify-center space-x-8">
          {!!items &&
            items.length >= 1 &&
            items
              .filter(
                (mainNavigationItem) => mainNavigationItem.primaryItem !== true
              )
              .map((mainNavigationItem) => {
                const hasItems = mainNavigationItem.items.length >= 1;
                return (
                  <div key={mainNavigationItem.label} className="my-auto">
                    {/* DROPDOWN NAV ITEM */}
                    {hasItems && (
                      <Popover className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <PopoverButton
                                onMouseEnter={() => buttonRef.current?.click()}
                                className={classNames(
                                  open
                                    ? "border-primary text-primary"
                                    : "border-dark text-text-color opacity-90 hover:text-text-color hover:opacity-100",
                                  `relative z-10 -mb-px flex items-center pt-px transition-all duration-200 ease-out uppercase font-semibold ${
                                    small
                                      ? "text-xs md:text-sm"
                                      : "text-xs sm:text-sm md:text-base"
                                  } ${mainNavigationItem?.cssClass} ${
                                    mainNavigationItem.cssClass
                                  }`
                                )}
                              >
                                <span>{mainNavigationItem.label}</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={3}
                                  stroke="currentColor"
                                  className={`ml-2 w-4 h-4 transition-all ${
                                    open ? "rotate-180" : "rotate-0"
                                  }`}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </PopoverButton>
                            </div>
                            {/* DROPDOWN NAV ITEM PANEL */}
                            <Transition
                              enter="transition ease-in-out duration-[300ms] transform origin-top"
                              enterFrom="scale-y-0 opacity-0"
                              enterTo="scale-y-1 opacity-100"
                              leave="transition ease-in-out duration-[300ms] transform origin-top"
                              leaveFrom="scale-y-1 opacity-100"
                              leaveTo="scale-y-0 opacity-0"
                            >
                              <PopoverPanel className="" anchor="bottom">
                                {({ close }) => (
                                  <>
                                    <div className="relative bg-glass glass-darker max-w-6xl text-text-color box-shadow mx-auto rounded-lg z-30 pt-8">
                                      <div className="mx-auto pt-8 pb-8 px-4 xl:px-8 w-full h-full max-h-[85vh] overflow-scroll">
                                        <div
                                          className={`grid ${panelGridColumns} items-center align-center flex-wrap gap-4`}
                                        >
                                          {mainNavigationItem.items.map(
                                            (item) => {
                                              const primaryDropdownItem =
                                                item.primaryItem === true;
                                              if (primaryDropdownItem)
                                                return (
                                                  <div
                                                    key={item.label}
                                                    className="group relative flex w-full transition-all mx-auto"
                                                    onClick={() => close()}
                                                  >
                                                    {!!item?.link && (
                                                      <LinkItem
                                                        key={item?.link}
                                                        link={item?.link}
                                                        parentCssClass="w-full"
                                                        cssClass={`border border-primary rounded gap-x-2  flex flex-row items-center font-semibold text-text-color transition-all group-hover:text-primary text-xs xl:text-sm bg-[#ffffff10] ${item?.cssClass}`}
                                                        sameTab={item?.sameTab}
                                                      >
                                                        {item?.image && (
                                                          <div className="aspect-1 h-24 w-24 overflow-hidden rounded-tl-sm rounded-bl-sm bg-bg-overlay group-hover:opacity-75 transition-all relative">
                                                            <Image
                                                              src={
                                                                item.image?.url
                                                              }
                                                              alt={
                                                                item?.label ||
                                                                ""
                                                              }
                                                              className="w-full inset-0 absolute h-full object-cover"
                                                              width={0}
                                                              height={0}
                                                              sizes="100%"
                                                            />
                                                          </div>
                                                        )}
                                                        <span className="inline-block font-bold uppercase p-4">
                                                          {item?.label}
                                                        </span>
                                                        <span
                                                          className="absolute inset-0 z-10"
                                                          aria-hidden="true"
                                                        />
                                                      </LinkItem>
                                                    )}
                                                  </div>
                                                );
                                              return (
                                                <div
                                                  key={item.label}
                                                  className="group relative flex w-full transition-all mx-auto"
                                                  onClick={() => close()}
                                                >
                                                  {!!item?.link && (
                                                    <LinkItem
                                                      key={item?.link}
                                                      link={item?.link}
                                                      parentCssClass="w-full"
                                                      cssClass={`border-[#000000] hover:border-primary rounded gap-x-2  flex flex-row items-center font-semibold text-text-color transition-all group-hover:text-primary text-xs xl:text-sm ${item?.cssClass}`}
                                                      sameTab={item?.sameTab}
                                                    >
                                                      {item?.image && (
                                                        <div className="aspect-1 h-24 w-24 overflow-hidden rounded-sm bg-bg-overlay group-hover:opacity-75 transition-all relative">
                                                          <Image
                                                            src={
                                                              item.image?.url
                                                            }
                                                            alt={
                                                              item?.label || ""
                                                            }
                                                            className="w-full inset-0 absolute h-full object-cover"
                                                            width={0}
                                                            height={0}
                                                            sizes="100%"
                                                          />
                                                        </div>
                                                      )}
                                                      <span className="inline-block font-bold uppercase p-4">
                                                        {item?.label}
                                                      </span>
                                                      <span
                                                        className="absolute inset-0 z-10"
                                                        aria-hidden="true"
                                                      />
                                                    </LinkItem>
                                                  )}
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                      <button
                                        type="button"
                                        className="absolute bottom-1 right-1 inline-flex items-center justify-center rounded-md p-1 text-text-color outline transition-all outline-none hover:text-primary mx-auto max-w-max uppercase text-[10px] hover:bg-dark group focus-within:bg-dark focus-within:ring-1 ring-primary gap-x-1 opacity-60 hover:opacity-100"
                                        onClick={() => {
                                          close();
                                          ReactGA.event({
                                            category: "Link",
                                            action: "Close Mobile Menu",
                                            label: "Close Mobile Menu",
                                          });
                                        }}
                                      >
                                        <FontAwesomeIcon
                                          icon={faXmark as IconProp}
                                          className="fa-fw my-0 py-0 h-4 w-4 group-hover:rotate-90 transition-all"
                                        />
                                        <span className="">Close menu</span>
                                      </button>
                                    </div>

                                    <div className="absolute bg-[#00000083] rounded-2xl z-0 inset-0" />
                                  </>
                                )}
                              </PopoverPanel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    )}
                    {/* LINK NAV ITEM */}
                    {!hasItems && (
                      <LinkItem
                        key={mainNavigationItem?.link}
                        link={mainNavigationItem?.link}
                        label={mainNavigationItem?.label}
                        activeClassName="!text-primary"
                        cssClass={`flex items-center font-medium text-text-color opacity-90 hover:text-text-color hover:opacity-100 transition-all uppercase font-semibold p-1 ${
                          small
                            ? "text-xs md:text-sm"
                            : "text-xs sm:text-sm md:text-base"
                        } ${mainNavigationItem?.cssClass}`}
                        sameTab={mainNavigationItem?.sameTab}
                      />
                    )}
                  </div>
                );
              })}
        </div>
      </Popover>
      {!!navigation?.headerIFrame && (
        <div>{parse(navigation?.headerIFrame)}</div>
      )}
      {/* END Desktop Flyout menus */}
    </div>
  );
}
