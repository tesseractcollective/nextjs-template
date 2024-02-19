import React, { useState, Fragment } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  faChevronRight,
  faChevronLeft,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import { Dialog, Transition } from "@headlessui/react";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ProductsProps {
  products?: ProductFieldsFragment[];
}

export default function ProductShelfSection({ products }: ProductsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductFieldsFragment>();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  useState<ProductFieldsFragment>();
  if (!products) return <></>;

  return (
    <div className="bg-bg-primary">
      <div className="mx-auto max-w-2xl px-4 pb-8 max-w-8xl">
        <h2 className="sr-only">Products</h2>
        <Fade direction="left" triggerOnce>
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 bg-text-color all-text-dark rounded py-4 mx-auto">
            {products.map((product) => (
              <button
                onClick={() => {
                  setOpen(true);
                  setSelectedProduct(product);
                  ReactGA.event({
                    category: "Link",
                    action: "Open Video Popup",
                    label: "Open Video Popup",
                  });
                }}
                type="button"
                key={product.id}
                className="flex flex-col p-4 gap-x-4 w-full max-w-[260px] items-start justify-center hover:border-primary border border-text-color transition-all mx-auto relative group"
              >
                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-start justify-between gap-x-6">
                    {product.name && (
                      <div className="text-sm font-bold my-0 py-0 parsed-mb-0 uppercase tracking-widest text-left">
                        {parse(product.name)}
                      </div>
                    )}
                    {product.price && (
                      <div className="text-sm font-light my-0 py-0 parsed-mb-0">
                        {parse(product.price)}
                      </div>
                    )}
                  </div>
                  {product?.description && (
                    <div className="text-[12px] my-0 font-light py-0 parsed-mb-0 uppercase opacity-80 text-left">
                      {parse(product.description.html)}
                    </div>
                  )}
                </div>
                <FontAwesomeIcon
                  icon={faCircleInfo as IconProp}
                  className="fa-fw my-0 py-0  h-5 w-5 absolute right-[-10px] bottom-[-10px] opacity-0 group-hover:opacity-100 transition-all bg-text-color rounded-full"
                />
              </button>
            ))}
          </div>
        </Fade>
      </div>
      {selectedProduct && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-[400ms]"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-[400ms]"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-[#000000c7] opacity-90 backdrop-blur-xl"
                aria-hidden="true"
              />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto w-full px-4">
              <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-y-full blur-xs"
                  enterTo="-translate-y-0 blur-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-y-0 blur-0"
                  leaveTo="translate-y-full blur-xs"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-8 pb-4 pt-5 text-left shadow-xl transition-all max-w-xl sm:p-0 w-full flex-col flex bg-text-color items-center justify-center">
                    {selectedProduct?.name && (
                      <h2 className="uppercase !font-bold pt-8 text-3xl mb-2 text-bg">
                        {selectedProduct.name}
                      </h2>
                    )}
                    {selectedProduct?.gallery[0] && (
                      <Image
                        className="object-cover block mx-auto h-full w-full aspect-1 max-w-[22rem] mb-8 rounded"
                        sizes="100%"
                        width={0}
                        height={0}
                        src={selectedProduct.gallery[0].url}
                        alt={selectedProduct.name || ""}
                      />
                    )}
                    {selectedProduct?.description && (
                      <div className="text-md my-0 font-light py-0 parsed-mb-0 uppercase opacity-90 text-center max-w-sm text-bg all-text-dark">
                        {parse(selectedProduct.description.html)}
                      </div>
                    )}
                    {selectedProduct?.purchaseLink &&
                      selectedProduct?.purchaseLabel && (
                        <div className="my-10">
                          <a
                            href={selectedProduct.purchaseLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-center rounded-md border-2 border-transparent hover:border-primary bg-bg px-8 py-3 text-base !text-text-color hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition-all font-bold uppercase mx-auto"
                            onClick={() =>
                              ReactGA.event({
                                category: "Link",
                                action: selectedProduct.purchaseLink || "",
                                label: selectedProduct.purchaseLink || "",
                              })
                            }
                          >
                            {selectedProduct.purchaseLabel}
                          </a>
                        </div>
                      )}
                    <button
                      type="button"
                      className="m-1 inline-flex items-center justify-center rounded-md p-2 outline transition-all outline-text-color hover:outline-primary ml-auto max-w-max uppercase text-xs text-bg"
                      onClick={() => setOpen(false)}
                    >
                      <span>Close Details</span>
                      <FontAwesomeIcon
                        icon={faXmark as IconProp}
                        className="fa-fw my-0 py-0 ml-2 h-4 w-4"
                      />
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );
}
