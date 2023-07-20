/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment } from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
  Tab,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "../SocialMediaIcons";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigation: NavigationFieldsFragment;
  hideNav?: boolean;
}

export default function Nav({ navigation, siteLibrary, hideNav }: NavProps) {
  const [open, setOpen] = useState(false);

  if (!navigation && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const {
    title,
    bookingPhoneOne,
    bookingEmailOne,
    bookingNameOne,
    siteLibraryJson,
  } = siteLibrary;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const { items } = navigation;

  return (
    <div className="bg-dark">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              className="fixed inset-0 bg-dark opacity-50"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-dark pb-12 shadow-xl border-r-primary border-r">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {!!items &&
                  items.map((mainNavigationItem) => {
                    const hasItems = mainNavigationItem.items.length >= 1;
                    return (
                      <div key={mainNavigationItem.label}>
                        {hasItems && (
                          <Tab.Group as="div" className="mt-2">
                            <div className="border-b border-gray-200">
                              <Tab.List className="-mb-px flex space-x-8 px-4">
                                <Tab
                                  key={mainNavigationItem.label}
                                  className={({ selected }) =>
                                    classNames(
                                      selected
                                        ? "border-primary text-primary"
                                        : "border-transparent text-white",
                                      "flex-1 whitespace-nowrap border-dark hover:border-white border-b-2 px-1 py-4 text-base font-medium"
                                    )
                                  }
                                >
                                  {mainNavigationItem.label}
                                </Tab>
                              </Tab.List>
                            </div>
                            <Tab.Panels as={Fragment}>
                              <Tab.Panel
                                key={mainNavigationItem.label}
                                className="space-y-12 px-4 py-6"
                              >
                                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                  {mainNavigationItem.items.map((item) => (
                                    <div
                                      key={item.label}
                                      className="group relative"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                        {!!item?.image?.url && (
                                          <Image
                                            src={item.image.url}
                                            alt={item.label || ""}
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-center mx-auto max-h-16"
                                          />
                                        )}
                                      </div>
                                      {!!item?.link && (
                                        <Link
                                          href={item.link}
                                          className="mt-6 block text-sm font-medium text-white"
                                        >
                                          <span
                                            className="absolute inset-0 z-10"
                                            aria-hidden="true"
                                          />
                                          {item.label}
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>
                        )}

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                          {!hasItems && (
                            <div className="flow-root">
                              <a
                                key={mainNavigationItem.label}
                                href={mainNavigationItem.link || "/"}
                                className="-m-2 block p-2 font-medium text-white max-w-max"
                              >
                                {mainNavigationItem.label}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <SocialMediaIcons siteLibrary={siteLibrary} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <Link href="/">
                      <span className="sr-only">{title}</span>
                      {!!navigation.navigationLogo && (
                        <Image
                          className="h-8 w-auto"
                          src={navigation.navigationLogo?.url}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100%"
                          style={{ width: "100%" }}
                        />
                      )}
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4 z-[99999]">
                      <div className="flex h-full justify-center space-x-8">
                        {!!items &&
                          items
                            .filter(
                              (mainNavigationItem) =>
                                mainNavigationItem.primaryItem !== true
                            )
                            .map((mainNavigationItem) => {
                              const hasItems =
                                mainNavigationItem.items.length >= 1;
                              return (
                                <div
                                  key={mainNavigationItem.label}
                                  className="my-auto"
                                >
                                  {hasItems && (
                                    <Popover className="flex">
                                      {({ open }) => (
                                        <>
                                          <div className="relative flex">
                                            <Popover.Button
                                              className={classNames(
                                                open
                                                  ? "border-primary text-primary"
                                                  : "border-dark text-white opacity-90 hover:text-white hover:opacity-100",
                                                "relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out border-dark hover:border-white border-b-2"
                                              )}
                                            >
                                              {mainNavigationItem.label}
                                            </Popover.Button>
                                          </div>

                                          <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-white border-b-2 border-primary">
                                              <div
                                                className="absolute inset-0 top-1/2 bg-primary-hover shadow"
                                                aria-hidden="true"
                                              />

                                              <div className="relative bg-dark">
                                                <div className="mx-auto max-w-7xl px-8">
                                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                    {mainNavigationItem.items.map(
                                                      (item) => (
                                                        <div
                                                          key={item.label}
                                                          className="group relative"
                                                        >
                                                          {item?.image && (
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                              <Image
                                                                src={item.image?.url}
                                                                alt={ item?.label || "" }
                                                                width={0}
                                                                height={0}
                                                                sizes="100%"
                                                                style={{ width: "100%" }}
                                                              />
                                                            </div>
                                                          )}
                                                          {!!item?.link && (
                                                            <Link
                                                              href={item.link}
                                                              className="mt-4 block font-medium text-white"
                                                            >
                                                              <span
                                                                className="absolute inset-0 z-10"
                                                                aria-hidden="true"
                                                              />
                                                              {item.label}
                                                            </Link>
                                                          )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </Popover.Panel>
                                          </Transition>
                                        </>
                                      )}
                                    </Popover>
                                  )}
                                  {!hasItems && (
                                    <Link
                                      href={mainNavigationItem.link || "/"}
                                      className="flex items-center text-sm font-medium text-white opacity-90 hover:text-white hover:opacity-100"
                                    >
                                      {mainNavigationItem.label}
                                    </Link>
                                  )}
                                </div>
                              );
                            })}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center justify-between lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-dark p-2 text-white"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href="/" className="lg:hidden">
                    <span className="sr-only">{title}</span>
                    {!!navigation.navigationLogo?.url && (
                      <Image
                        src={navigation.navigationLogo.url}
                        alt=""
                        className="h-8 w-auto"
                        width={0}
                        height={0}
                        sizes="100%"
                        style={{ width: "100%" }}
                      />
                    )}
                  </Link>

                  <div className="flex flex-1 items-center justify-end">
                    {!!items &&
                      items
                        .filter(
                          (mainNavigationItem) =>
                            mainNavigationItem.primaryItem === true
                        )
                        .map((mainNavigationItem) => (
                          <Link
                            key={mainNavigationItem.label}
                            href={mainNavigationItem.link || "/"}
                            className="flex items-center text-sm font-bold text-white opacity-90 hover:text-white hover:opacity-100 border-1 border-primary"
                          >
                            {mainNavigationItem.label}
                          </Link>
                        ))}
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
