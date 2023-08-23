import type { LayoutQuery } from "@/graphql/generated/graphql";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface PopupProps {
  layout: LayoutQuery;
}

export default function Popup({ layout }: PopupProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", stickyCallBak);

    return () => {
      window.removeEventListener("scroll", stickyCallBak);
    };
  });
  useEffect(() => {
    !!layout &&
      layout?.page &&
      layout?.page.popup &&
      layout?.page?.popup.openOnScroll &&
      isScrolled &&
      setOpen(true);
  }, [isScrolled, layout, open]);
  const stickyCallBak = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 400) setIsScrolled(true);
  };

  if (!layout) return <></>;
  const {
    siteLibrary,
    page,
    events,
    testimonials,
    profiles,
    logoTables,
    products,
    albums,
    blogs,
    contacts,
  } = layout;
  if (!siteLibrary) return <></>;
  if (!page) return <></>;
  if (!page.popup) return <></>;
  const { popupContent, header, buttonOpenCss, buttonOpenText } = page.popup;

  // function openPopup() {
  //   setOpen(true);
  //   closePopup();
  // }

  // function closePopup() {
  //   setTimeout(function () {
  //     setOpen(false);
  //     console.log(
  //       "running",
  //       !!layout &&
  //         layout?.page &&
  //         layout?.page.popup &&
  //         layout?.page?.popup.duration
  //     );
  //   }, (!!layout &&
  //     layout?.page &&
  //     layout?.page.popup &&
  //     layout?.page?.popup.duration) ||
  //     8000);
  // }
  // isScrolled && setOpen(true);

  console.log("isScrolled", isScrolled);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#00000032] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto w-full">
            <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-5xl sm:p-6 w-full bg-invert flex-col flex">
                  {!!header && (
                    <h2 className="text-center mx-auto text-2xl text-dark font-bold uppercase">
                      {header}
                    </h2>
                  )}
                  {popupContent.map((popupBlock, parentIndex) => {
                    return (
                      <div
                        key={`layout-block-row-${parentIndex++}`}
                        id={`layout-block-row-${parentIndex++ + 1}`}
                        className={`w-full flex flex-wrap ${
                          popupBlock.cssClass
                        } ${
                          popupBlock?.backgroundImage?.url
                            ? "background-image-featured"
                            : ""
                        }`}
                      >
                        <div
                          id={
                            popupBlock?.htmlId || `layout-block-${parentIndex}`
                          }
                          key={Math.random()}
                          className={`${
                            popupBlock?.hideBlockColumn ? "hidden" : ""
                          } flex justify-center mx-0 px-0 w-full flex-auto  dynamic-feature-section flex-col ${
                            popupBlock?.cssClass ? popupBlock?.cssClass : ""
                          }`}
                        >
                          <Sections
                            sectionData={popupBlock.sections}
                            siteLibrary={siteLibrary}
                          />
                          <ContentComponents
                            contentTags={popupBlock.contentTags}
                            events={events}
                            contacts={contacts}
                            testimonials={testimonials}
                            profiles={profiles}
                            logoTables={logoTables}
                            products={products}
                            blogs={blogs}
                            albums={albums}
                            siteLibrary={siteLibrary}
                            page={page}
                          />
                          <Elements elements={popupBlock.elements} />
                        </div>
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    className="m-2 inline-flex items-center justify-center rounded-md p-2 text-dark outline outline-primary mx-auto max-w-max"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 text-dark"
                      aria-hidden="true"
                    />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <button
        type="button"
        id="popup-trigger"
        className={`rounded-md p-2 text-md font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 fixed left-8 bottom-8 z-[100] bg-primary ${buttonOpenCss}`}
        onClick={() => setOpen(true)}
      >
        <span className="max-w-max text-left">{buttonOpenText}</span>
      </button>
    </>
  );
}
