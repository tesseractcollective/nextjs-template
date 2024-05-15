import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface PopupProps {
  layout: LayoutQuery;
}

const Popup = ({ layout }: PopupProps) => {
  useEffect(() => {
    if (
      layout?.page &&
      layout?.page.popup &&
      layout?.page?.popup.openOnScroll &&
      layout?.page.popup.openOnScroll
    ) {
      setIsOpen(true);

      // Check if duration is defined and is a number
      // if (
      //   layout?.page?.popup?.duration &&
      //   typeof layout.page.popup.duration === "number"
      // ) {
      //   const closeTimeout = setTimeout(() => {
      //     setOpen(false);
      //   }, layout.page.popup.duration * 1000);

      //   // Clear the timeout on component unmount
      //   return () => clearTimeout(closeTimeout);
      // }
    }
  }, [layout]);
  const [isOpen, setIsOpen] = useState(false);
  if (!layout) return <></>;

  return (
    <div className="bg-slate-900 fixed left-8 bottom-8 z-[1001]">
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-gradient-to-r from-bg to-bg-secondary text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity shadow-xl border border-bg-secondary ${layout?.page?.popup?.buttonOpenCss}`}
      >
        {layout?.page?.popup?.buttonOpenText}
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} layout={layout} />
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
  layout,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  layout: LayoutQuery;
}) => {
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
  const { popupContent, header, buttonOpenCss, buttonOpenText, duration } =
    page.popup;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-[#00000070] backdrop-blur p-8 fixed inset-0 z-[1000] grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-bg to-bg-secondary text-white py-6 px-2 rounded-lg w-full max-w-xl shadow-xl cursor-default relative overflow-hidden dialog-popup-page"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center">{header}</h3>
              {popupContent.map((popupBlock, parentIndex) => {
                return (
                  <div
                    key={`layout-block-row-${parentIndex++}`}
                    id={`layout-block-row-${parentIndex++ + 1}`}
                    className={`w-full flex flex-wrap ${popupBlock.cssClass} ${
                      popupBlock?.backgroundImage?.url
                        ? "background-image-featured"
                        : ""
                    }`}
                  >
                    <div
                      id={popupBlock?.htmlId || `layout-block-${parentIndex}`}
                      key={Math.random()}
                      className={`${
                        popupBlock?.hideBlockColumn ? "hidden" : ""
                      } flex justify-center mx-0 px-0 w-full flex-auto  dynamic-feature-section flex-col ${
                        popupBlock?.cssClass ? popupBlock?.cssClass : ""
                      }`}
                    >
                      <input
                        readOnly
                        type="checkbox"
                        id="null"
                        name="null"
                        checked
                        className="sr-only"
                      />
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
                        elements={popupBlock.elements}
                        siteLibrary={siteLibrary}
                      />
                      <Elements
                        elements={popupBlock.elements}
                        siteLibrary={siteLibrary}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div>
              <button
                type="button"
                className="hidden md:inline-flex items-center justify-center p-1 text-text-color outline transition-all outline-text-color hover:outline-primary mx-auto max-w-max uppercase text-xs absolute -top-5 right-0 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faXmark as IconProp}
                  className="fa-fw my-0 py-0 h-4 w-4"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
