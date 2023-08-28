import type { ReactElement } from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactGA from "react-ga4";

interface WhatsappProps {
  contactNumber: string;
}
export default function Whatsapp({
  contactNumber,
}: WhatsappProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [whatsAppMessage, setWhatsappMessage] = useState("");

  return (
    <>
      <button
        type="button"
        aria-label="Whatsapp"
        className="fixed floating-whatsapp-button text-text-color bg-[#25D366] border-2 border-solid flex items-center align-middle z-10 rounded-full border-white aspect-1 bottom-12 md:bottom-20 left-4 md:left-8 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon
          icon={faWhatsapp as IconProp}
          className="fa-fw h-7 w-7 mx-auto flex"
        />
        <span className="sr-only">Whatsapp</span>
      </button>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-2xl sm:p-6 w-full bg-invert flex-col flex">
                  <h2 className="text-center mx-auto text-2xl text-text-color font-bold uppercase">
                    WhatsApp
                  </h2>
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
                          <div className="py-2" aria-hidden="true">
                            <div className="py-px">
                              <div className="h-9" />
                            </div>
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 flex justify-between pb-2 pl-3 pr-2 bg-white">
                          <div className="flex-shrink-0 w-full">
                            <a
                              href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                                `${contactNumber}`
                              )}&text=${whatsAppMessage}`}
                              target="_blank"
                              style={{
                                border: "2px solid #fff",
                                color: "#fff",
                              }}
                              className="bg-[#25D366] inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-text-color hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ml-auto w-full"
                              rel="noreferrer"
                              onClick={() => {
                                setOpen(false);
                                ReactGA.event({
                                  category: "Link",
                                  action: "Send WhatsApp Popup",
                                  label: "Send WhatsApp Popup",
                                });
                              }}
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

                  <button
                    type="button"
                    className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline outline-primary mx-auto max-w-max"
                    onClick={() => {
                      setOpen(false);
                      ReactGA.event({
                        category: "Link",
                        action: "Close Popup",
                        label: "Close Popup",
                      });
                    }}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 text-text-color"
                      aria-hidden="true"
                    />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
