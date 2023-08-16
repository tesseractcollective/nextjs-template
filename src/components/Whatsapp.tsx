import type { ReactElement } from "react";
import useViewport from "@/hooks/useViewport";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

interface WhatsappProps {
  contactNumber: string;
}
export default function Whatsapp({
  contactNumber,
}: WhatsappProps): ReactElement {
  const [visibleWhatsappModal, setVisibleWhatsappModal] = useState(false);
  const [whatsAppMessage, setWhatsappMessage] = useState("");

  return (
    <>
      <button
        type="button"
        aria-label="Whatsapp"
        className="fixed floating-whatsapp-button text-white bg-[#25D366] border-2 border-solid flex items-center align-middle z-10 rounded-full border-white aspect-1 bottom-12 md:bottom-20 left-4 md:left-8 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
        onClick={() => setVisibleWhatsappModal(true)}
      >
        <FontAwesomeIcon
          icon={faWhatsapp as IconProp}
          className="fa-fw h-7 w-7 mx-auto flex"
        />
        <span className="sr-only">Whatsapp</span>
      </button>
      <AnimatePresence>
        {visibleWhatsappModal && (
          <Dialog
            static
            className="relative z-50"
            as={motion.div}
            open={visibleWhatsappModal}
            onClose={() => setVisibleWhatsappModal(false)}
          >
            <div className="fixed inset-0 bg-black opacity-30" />
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title className="textt-white">Whatsapp</Dialog.Title>
                {/* <div className="field-wrapper my-4">
                  <span className="p-float-label">
                    <textarea
                      value={whatsAppMessage}
                      onChange={(e) => setWhatsappMessage(e.target.value)}
                      rows={5}
                      cols={30}
                      className="w-full"
                      id="whatsapp-input"
                    />
                    <label htmlFor="whatsapp-input">send</label>
                  </span>
                </div>
                <a
                  href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                    `${contactNumber}`
                  )}&text=${whatsAppMessage}`}
                  target="_blank"
                  style={{
                    border: "2px solid #fff",
                    color: "#fff",
                  }}
                  className="bg-[#25D366] inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => setVisibleWhatsappModal(false)}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane as IconProp}
                    className="fa-fw h-5 w-5"
                  />
                  <span className="sr-only">Send Message</span>
                </a> */}
                <div className="flex items-start space-x-4">
                  <div className="min-w-0 flex-1">
                    <form action="#" className="relative">
                      <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                          WhatsApp Message
                        </label>
                        <textarea
                          value={whatsAppMessage}
                          onChange={(e) => setWhatsappMessage(e.target.value)}
                          rows={5}
                          id="whatsapp-input"
                          className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                          placeholder="WhatsApp Messaage"
                          defaultValue={""}
                        />

                        {/* Spacer element to match the height of the toolbar */}
                        <div className="py-2" aria-hidden="true">
                          {/* Matches height of button in toolbar (1px border + 36px content height) */}
                          <div className="py-px">
                            <div className="h-9" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 bg-white">
                        <div className="flex-shrink-0">
                          <a
                            href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                              `${contactNumber}`
                            )}&text=${whatsAppMessage}`}
                            target="_blank"
                            style={{
                              border: "2px solid #fff",
                              color: "#fff",
                            }}
                            className="bg-[#25D366] inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ml-auto"
                            rel="noreferrer"
                            onClick={() => setVisibleWhatsappModal(false)}
                          >
                            <FontAwesomeIcon
                              icon={faPaperPlane as IconProp}
                              className="fa-fw h-5 w-5"
                            />
                            <span className="sr-only">Send Message</span>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
