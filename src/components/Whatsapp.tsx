import type { ReactElement } from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";

interface WhatsappProps {
  contactNumber: string;
  isSpanish?: boolean;
}
export default function Whatsapp({
  contactNumber,
  isSpanish,
}: WhatsappProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [whatsAppMessage, setWhatsappMessage] = useState("");

  return (
    <>
      <button
        type="button"
        aria-label="Whatsapp"
        className="fixed floating-whatsapp-button text-[#fff] bg-[#25D366] border-2 border-solid flex items-center align-middle z-[60] rounded-full border-[#fff] aspect-1 bottom-12 md:bottom-20 left-4 md:left-8 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
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
            enter="transition ease-in-out duration-400 transform"
            enterFrom="translate-y-full"
            enterTo="-translate-y-0"
            leave="transition ease-in-out duration-400 transform"
            leaveFrom="-translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="fixed inset-0 bg-[#00000097] transition-all backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto w-full">
            <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-600"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-600"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#F5F2ED] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-2xl sm:p-6 w-full flex-col flex">
                  <h2 className="text-center mx-auto text-2xl !text-[#000] font-bold uppercase">
                    WhatsApp
                  </h2>
                  <div className="flex items-start space-x-4">
                    <div className="min-w-0 flex-1">
                      <form action="#" className="relative">
                        <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-bg">
                          <textarea
                            value={whatsAppMessage}
                            onChange={(e) => setWhatsappMessage(e.target.value)}
                            rows={5}
                            id="whatsapp-input"
                            className="block w-full resize-none border-0 bg-transparent py-1.5 !text-[#000] placeholder:text-[#333] focus:ring-0 sm:text-sm sm:leading-6 px-2"
                            placeholder="WhatsApp Message"
                            defaultValue={""}
                          />
                          <div className="py-0" aria-hidden="true">
                            <div className="py-px">
                              <div className="-mt-px flex divide-x divide-bg-secondary">
                                <div className="flex w-0 flex-1">
                                  <button
                                    onClick={() => {
                                      setOpen(false);
                                      ReactGA.event({
                                        category: "Action",
                                        action: "Close Popup",
                                        label: "Close Popup",
                                      });
                                    }}
                                    type="button"
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-none py-4 text-sm font-semibold text-white bg-[#eb6565]"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTimes as IconProp}
                                      className="fa-fw h-5 w-5"
                                    />
                                    <span className="">
                                      {isSpanish ? "Cancelar" : "Cancel"}
                                    </span>
                                  </button>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                  <a
                                    href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                                      `${contactNumber}`
                                    )}&text=${whatsAppMessage}`}
                                    target="_blank"
                                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-none py-4 text-sm font-semibold text-white bg-[#65EB82]"
                                  >
                                    <FontAwesomeIcon
                                      icon={faPaperPlane as IconProp}
                                      className="fa-fw h-5 w-5"
                                    />
                                    <span className="">
                                      {isSpanish
                                        ? "Enviar Mensaje"
                                        : "Send Message"}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="absolute inset-x-0 bottom-0 flex justify-between pb-2 pl-3 pr-2 bg-white">
                          <div className="flex-shrink-0 w-full">
                            <button
                              type="button"
                              className="m-2 inline-flex items-center justify-center rounded-md p-2 !text-text-color outline outline-primary mx-auto max-w-max"
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
                                className="h-6 w-6 !text-text-color"
                                aria-hidden="true"
                              />
                            </button>
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
                        </div> */}
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="absolute bottom-12">
                <button
                  type="button"
                  className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline transition-all outline-none hover:text-primary mx-auto max-w-max uppercase text-xs hover:bg-dark group focus-within:bg-dark focus-within:ring-1 ring-primary"
                  onClick={() => {
                    setOpen(false);
                    ReactGA.event({
                      category: "Link",
                      action: "Close Whatsapp Menu",
                      label: "Close Whatsapp Menu",
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTimes as IconProp}
                    className="fa-fw my-0 py-0 h-4 w-4 group-hover:rotate-90 transition-all"
                  />
                  <span className="ml-2">{`${
                    isSpanish ? "Cerrar" : "Close"
                  } WhatsApp`}</span>
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
