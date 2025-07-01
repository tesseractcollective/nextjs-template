import React, { Fragment, useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import LinkItem from "@/components/LinkItem";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";

interface MobileMenuPanelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navigation: NavigationFieldsFragment;
  siteLibrary: SiteLibraryFieldsFragment;
}

const MobileMenuPanel: React.FC<MobileMenuPanelProps> = ({
  open,
  setOpen,
  navigation,
  siteLibrary,
}) => {
  const [activePanel, setActivePanel] = useState("main");
  const [activeToggle, setActiveToggle] = useState(false);
  const { title, contactPhone, contactEmail, contactName } = siteLibrary;
  const { items, navigationLogo } = navigation;

  const secondaryItems = items.filter((item) => item.primaryItem !== true);
  const primaryItems = items.filter((item) => item.primaryItem === true);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="mobile-menu-panel relative z-[1000]"
        onClose={setOpen}
      >
        <TransitionChild
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
        </TransitionChild>

        <div className="fixed inset-0 z-40 flex">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-[400ms] transform"
            enterFrom="-translate-y-full blur-xl"
            enterTo="translate-y-0 blur-0"
            leave="transition ease-in-out duration-[400ms] transform"
            leaveFrom="translate-y-0 blur-0"
            leaveTo="-translate-y-full blur-xl"
          >
            <Dialog.Panel className="relative flex w-full max-h-[100dvh] flex-col overflow-y-auto pb-12 shadow-xl border-primary border-t bg-bg transition-all duration-[400ms] h-[100dvh] items-center justify-center border">
              {/* Close button */}
              {/* <div className="fixed top-0 right-2 w-full max-w-max p-4 z-[1001]">
                <button
                  onClick={() => setOpen(false)}
                  className="text-primary hover:text-secondary transition-all border-text-color"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div> */}

              {/* Main Panel */}
              <Transition
                show={activePanel === "main"}
                enter="transition ease-out duration-300"
                enterFrom="transform -translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition ease-in duration-300"
                leaveFrom="transform translate-x-0"
                leaveTo="transform translate-x-full"
              >
                <div className="absolute inset-0 w-full h-full flex flex-col p-2">
                  {/* Logo Section */}

                  <div className="relative z-10 flex mt-0 px-4 pb-2 pt-2 items-center justify-between">
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
                      className="cursor-pointer transition-all duration-[400ms] relative"
                      id="nav-logo-mobile-panel"
                    >
                      {navigationLogo ? (
                        <>
                          <span className="sr-only">{title}</span>
                          <Image
                            src={navigationLogo.url}
                            className="w-[100px] md:w-[160px] max-h-[120px] cursor-pointer object-contain transition-all duration-[400ms] block"
                            alt=""
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
                    <div className="relative w-full max-w-max p-0 z-[1001]">
                      <button
                        onClick={() => setOpen(false)}
                        className="text-text-color hover:text-secondary transition-all border-text-color p-2 opacity-80 hover:opacity-100 focus-within:opacity-100 focus-within:text-secondary"
                        aria-label="Close menu"
                      >
                        <XMarkIcon className="w-8 h-8" />
                      </button>
                    </div>
                  </div>

                  {/* NAV PANEL SECONDARY ITEMS */}
                  <nav className="px-4 py-2 flex flex-col gap-y-4">
                    {secondaryItems.map((item) => {
                      // ui note this is checking if full row should be a button or not - rb
                      const hasSubItems = item.items && item.items.length > 0;
                      const itemHasLink = item.link && item.link !== "";
                      return (
                        <div key={item.label} className="">
                          {hasSubItems ? (
                            <>
                              {itemHasLink ? (
                                <div className="flex w-full flex-row items-center justify-between">
                                  <LinkItem
                                    label={item.label}
                                    link={item.link}
                                    onClick={() => setOpen(false)}
                                    cssClass="text-3xl font-bold uppercase text-text-color hover:text-primary focus-within:text-primary"
                                  />
                                  <button
                                    type="button"
                                    className={`hover:text-secondary transition-all border-text-color p-2 ${
                                      activeToggle
                                        ? "text-primary"
                                        : "text-text-color"
                                    }`}
                                    aria-label={`Open submenu for ${item.label}`}
                                    onClick={() =>
                                      setActiveToggle(!activeToggle)
                                    }
                                  >
                                    <ChevronDownIcon
                                      className={`w-8 h-8 duration-300 transition-rotate ${
                                        activeToggle ? "rotate-180" : "rotate-0"
                                      }`}
                                    />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  // onClick={() => setActivePanel(item.label || "")}
                                  onClick={() => setActiveToggle(!activeToggle)}
                                  className="group flex w-full items-center justify-between py-2 text-3xl font-bold uppercase text-text-color hover:text-primary focus-within:text-primary"
                                  aria-label={`Open submenu for ${item.label}`}
                                >
                                  <span>{item.label}</span>
                                  <svg
                                    className={`h-8 w-8 text-text-color group-hover:text-primary transition-all duration-300 ${
                                      activeToggle
                                        ? "transform -rotate-90"
                                        : "rotate-90"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </button>
                              )}
                              <nav
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                  activeToggle
                                    ? "max-h-full opacity-100 translate-y-0"
                                    : "max-h-0 opacity-0 translate-y-2"
                                }`}
                              >
                                {item.items?.map((subItem) => (
                                  <div
                                    key={subItem.label}
                                    className="py-2 ml-4"
                                  >
                                    <LinkItem
                                      link={subItem.link || "/"}
                                      cssClass="block py-2 text-xl text-text-color hover:text-primary relative before:content-[''] before:absolute before:left-0 before:right-0 before:h-[1px] before:bg-primary before:top-0 before:opacity-0 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-primary after:bottom-0 after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 hover:after:opacity-100"
                                      onClick={() => setOpen(false)}
                                    >
                                      {subItem.label || ""}
                                    </LinkItem>
                                  </div>
                                ))}
                              </nav>
                            </>
                          ) : (
                            <LinkItem
                              link={item.link || "/"}
                              cssClass="block py-2 text-3xl font-bold uppercase text-text-color hover:text-primary  focus-within:text-primary relative before:content-[''] before:absolute before:left-0 before:right-0 before:h-[1px] before:bg-primary before:top-0 before:opacity-0 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-primary after:bottom-0 after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 hover:after:opacity-100 focus-within:before:opacity-100 focus-within:after:opacity-100"
                              onClick={() => setOpen(false)}
                            >
                              {item.label || ""}
                            </LinkItem>
                          )}
                        </div>
                      );
                    })}
                  </nav>
                  {/* NAV PANEL PRIMARY ITEMS */}
                  <nav className="px-4 py-1 mt-auto w-full max-h-max relative">
                    {primaryItems.map((item) => (
                      <div key={item.label} className="py-2">
                        {item.items?.length > 0 ? (
                          <button
                            onClick={() => setActivePanel(item.label || "")}
                            className="group flex w-full items-center justify-between py-2 text-3xl font-bold uppercase text-text-color hover:text-primary"
                          >
                            <span>{item.label}</span>
                            <svg
                              className="h-5 w-5 text-text-color group-hover:text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        ) : (
                          <LinkItem
                            link={item.link || "/"}
                            cssClass="block py-2 text-3xl font-bold bg-primary hover:bg-text-color text-center uppercase text-text-color hover:text-primary relative duration-300 hover:before:opacity-100 hover:after:opacity-100 overflow-hidden"
                            onClick={() => setOpen(false)}
                          >
                            <Fade direction="up">{item.label || ""}</Fade>
                          </LinkItem>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* NAV PANEL FOOTER */}
                  <Fade
                    triggerOnce
                    direction="up"
                    className="relative z-10 max-h-max flex"
                  >
                    <div className="space-y-6 px-4 py-6 my-4 w-full text-center">
                      <SocialMediaIcons
                        siteLibrary={siteLibrary}
                        fadeDirection="up"
                        cssClass="my-2 mx-0 flex flex-row flex-wrap social-icons-row items-center justify-center text-primary gap-2 overflow-hidden mx-auto py-0 max-w-max gap-x-4"
                      />
                      <div className="text-center">
                        {contactName && (
                          <p className="text-text-color text-xs font-bold">
                            <span>{contactName}</span>
                          </p>
                        )}
                        {contactPhone && (
                          <a
                            href={`tel:${contactPhone.replace(/-/g, "")}`}
                            className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max mx-auto"
                          >
                            <span className="font-semibold">
                              {contactPhone}
                            </span>
                          </a>
                        )}
                        {contactEmail && (
                          <a
                            href={`mailto:${contactEmail}`}
                            className="text-xs font-semibold block my-1 text-link !border-none hover:!border-none text-text-color max-w-max mx-auto"
                          >
                            <span className="font-semibold">
                              {contactEmail}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </Fade>
                  <div className="relative w-full max-w-max p-4 z-[1001] mx-auto">
                    <button
                      onClick={() => setOpen(false)}
                      className="text-primary hover:text-secondary transition-all border-text-color flex flex-row items-center justify-center text-xs"
                      aria-label="Close menu"
                    >
                      <XMarkIcon className="w-4 h-4" /> <span>Close Menu</span>
                    </button>
                  </div>
                </div>
              </Transition>

              {/* Sub-item Panels */}
              {items.map((mainItem) => (
                <Transition
                  key={mainItem.label}
                  show={activePanel === mainItem.label}
                  enter="transition ease-out duration-300"
                  enterFrom="transform translate-x-full"
                  enterTo="transform translate-x-0"
                  leave="transition ease-in duration-300"
                  leaveFrom="transform translate-x-0"
                  leaveTo="transform translate-x-full"
                >
                  <div className="absolute inset-0 w-full bg-bg h-full pt-16">
                    <div className="fixed top-0 right-2 w-full max-w-max p-4 z-[1001]">
                      <button
                        onClick={() => setOpen(false)}
                        className="text-primary hover:text-secondary transition-all border-text-color"
                        aria-label="Close menu"
                      >
                        <XMarkIcon className="w-8 h-8" />
                      </button>
                    </div>
                    <div className="px-4 py-1">
                      <div className="flex items-center mb-4 border-b border-text-color pb-2">
                        <button
                          onClick={() => setActivePanel("main")}
                          className="text-primary hover:text-secondary transition-all mr-3"
                          aria-label="Back to main menu"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <h2 className="text-2xl font-bold text-text-color uppercase py-1">
                          {mainItem.label}
                        </h2>
                      </div>
                      <nav>
                        {mainItem.items?.map((subItem) => (
                          <div key={subItem.label} className="py-2">
                            <LinkItem
                              link={subItem.link || "/"}
                              cssClass="block py-2 text-xl text-text-color hover:text-primary relative before:content-[''] before:absolute before:left-0 before:right-0 before:h-[1px] before:bg-primary before:top-0 before:opacity-0 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-primary after:bottom-0 after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 hover:after:opacity-100"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.label || ""}
                            </LinkItem>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                </Transition>
              ))}
            </Dialog.Panel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenuPanel;
