import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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
  const { title, contactPhone, contactEmail, contactName } = siteLibrary;
  const { items, navigationLogo } = navigation;

  return (
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

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
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
              <div className="fixed bottom-2 right-2 p-4 z-[1001]">
                <button
                  onClick={() => setOpen(false)}
                  className="text-text-color hover:text-primary transition-all border-text-color border rounded-full p-1 hover:border-primary"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>

              {/* Main Panel */}
              <Transition
                show={activePanel === "main"}
                enter="transition ease-out duration-300"
                enterFrom="transform -translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition ease-in duration-300"
                leaveFrom="transform translate-x-0"
                leaveTo="transform translate-x-full"
                className="absolute inset-0 w-full"
              >
                <div className="h-full w-full flex flex-col p-2">
                  {/* Logo Section */}
                  <Fade direction="down" triggerOnce className="relative z-10">
                    <div className="flex mt-0 mx-4 px-0 pb-2 pt-2 items-center justify-start">
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
                              className="w-[80px] md:w-[160px] max-h-[120px] cursor-pointer object-contain transition-all duration-[400ms] block"
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
                    </div>
                  </Fade>

                  {/* NAV PANEL MAIN ITEMS */}
                  <nav className="px-4 py-1">
                    {items.map((item) => (
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
                            cssClass="block py-2 text-3xl font-bold uppercase text-text-color hover:text-primary relative before:content-[''] before:absolute before:left-0 before:right-0 before:h-[1px] before:bg-primary before:top-0 before:opacity-0 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1px] after:bg-primary after:bottom-0 after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 hover:after:opacity-100"
                            onClick={() => setOpen(false)}
                          >
                            {item.label || ""}
                          </LinkItem>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* NAV PANEL FOOTER */}
                  <Fade
                    triggerOnce
                    direction="up"
                    className="relative z-10 mt-auto max-h-max flex"
                  >
                    <div className="space-y-6 px-4 py-6 mt-4 w-full text-center">
                      <SocialMediaIcons
                        siteLibrary={siteLibrary}
                        fadeDirection="up"
                        cssClass="my-2 mx-0 flex flex-row flex-wrap social-icons-row items-center justify-center text-text-color gap-2 overflow-hidden mx-auto py-0 max-w-max gap-x-4"
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
                  className="absolute inset-0 w-full bg-bg"
                >
                  <div className="h-full w-full pt-16">
                    <div className="px-4 py-1">
                      <div className="flex items-center mb-4 border-b border-text-color pb-2">
                        <button
                          onClick={() => setActivePanel("main")}
                          className="text-text-color hover:text-primary transition-all mr-3"
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
                        <h2 className="text-2xl font-bold text-text-color py-1">
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenuPanel;
