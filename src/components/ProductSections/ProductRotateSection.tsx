import React, { useState } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import {
  faCircleInfo,
  faLeaf,
  faPepperHot,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import ReactGA from "react-ga4";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence, motion } from "framer-motion";

interface ProductsProps {
  products: ProductFieldsFragment[];
}

export default function ProductRotateSection({ products }: ProductsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductFieldsFragment>();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  useState<ProductFieldsFragment>();

  function camelCaseToSpaceSeparated(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  // Example usage:
  const camelCaseString: string = "brunchDrinks";
  const spaceSeparatedString: string =
    camelCaseToSpaceSeparated(camelCaseString);
  console.log(spaceSeparatedString); // Output: "brunch Drinks"

  return (
    <div className="">
      <div className="mx-auto px-4 py-8 max-w-8xl w-full">
        <div className="flex items-center justify-center flex-col relative">
          <h2 className="max-h-max max-w-max m-0 p-2 mb-2 bg-bg-secondary text-primary uppercase rounded-xl">
            {camelCaseToSpaceSeparated(products[0].productType)}
          </h2>
          <div className="flex flex-col items-center gap-y-2">
            {products.map((product) => (
              <button
                onClick={() => {
                  setOpen(true);
                  setSelectedProduct(product);
                  ReactGA.event({
                    category: "Link",
                    action: "Open product Popup",
                    label: "Open product Popup",
                  });
                }}
                type="button"
                key={product.id}
                className="flex flex-col p-4 gap-x-4 w-full max-w-[400px] items-start justify-center hover:border-primary border border-bg transition-all mx-auto relative group bg-glass glass-dark"
              >
                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-start justify-between gap-x-6">
                    {product.name && (
                      <div className="text-sm font-bold my-0 py-0 parsed-mb-0 uppercase tracking-widest text-left text-text-color">
                        {parse(product.name)}
                      </div>
                    )}
                    {product.price && (
                      <div className="text-sm font-light my-0 py-0 parsed-mb-0 text-text-color">
                        {parse(product.price)}
                      </div>
                    )}
                  </div>
                  {product?.description && (
                    <div className="text-[14px] my-0 font-light py-0 parsed-mb-0 opacity-80 text-left lowercase">
                      {parse(product.description.html)}
                    </div>
                  )}
                  {product?.productJson?.spicy && (
                    <span className="flex flex-row items-center gap-x-2">
                      <FontAwesomeIcon
                        icon={faPepperHot as IconProp}
                        className="fa-fw my-0 py-0  h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[red]"
                      />
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all">
                        spicy
                      </span>
                    </span>
                  )}
                  {product?.productJson?.vegetarian && (
                    <span className="flex flex-row items-center gap-x-2">
                      <FontAwesomeIcon
                        icon={faLeaf as IconProp}
                        className="fa-fw my-0 py-0  h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[green]"
                      />
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all">
                        vegetarian
                      </span>
                    </span>
                  )}
                  {product?.productJson?.vegan && (
                    <span className="flex flex-row items-center gap-x-2">
                      <div className="relative flex flex-row">
                        <FontAwesomeIcon
                          icon={faLeaf as IconProp}
                          className="fa-fw my-0 py-0 h-5 w-5 transition-all rounded-full text-[green] z-2 relative"
                        />
                        <FontAwesomeIcon
                          icon={faLeaf as IconProp}
                          className="fa-fw my-0 py-0  h-5 w-5 transition-all rounded-full text-[green] ml-[-0.10rem] z-1 relative"
                        />
                      </div>
                      <span className="text-[10px] transition-all">vegan</span>
                    </span>
                  )}
                </div>
                <FontAwesomeIcon
                  icon={faCircleInfo as IconProp}
                  className="fa-fw my-0 py-0  h-5 w-5 absolute right-[-10px] bottom-[-10px] opacity-0 group-hover:opacity-100 transition-all bg-text-color rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="bg-[#00000070] backdrop-blur-sm fixed inset-0 z-[1000] grid place-items-center overflow-y-scroll cursor-pointer p-6"
          >
            <div className="relative w-full mx-auto flex max-w-xl">
              <motion.div
                initial={{ scale: 0, rotate: "12.5deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                exit={{ scale: 0, rotate: "0deg" }}
                onClick={(e) => e.stopPropagation()}
                className="bg-text-color text-dark py-4 px-2 rounded-lg w-full max-w-xl shadow-xl cursor-default relative overflow-hidden dialog-popup-page max-h-[80dvh]"
              >
                <div className="relative z-10 text-bg gap-y-4 flex flex-col items-center justify-center">
                  {!!selectedProduct?.name && (
                    <h2 className="text-xl !font-bold text-center mb-0 text-dark">
                      {selectedProduct.name}
                    </h2>
                  )}
                  {selectedProduct?.gallery[0] && (
                    <Image
                      className="object-cover block mx-auto h-full w-full aspect-1 max-w-[22rem] mb-4 rounded"
                      sizes="100%"
                      width={0}
                      height={0}
                      src={selectedProduct.gallery[0].url}
                      alt={selectedProduct.name || ""}
                    />
                  )}
                  {selectedProduct?.productJson?.spicy && (
                    <span className="flex flex-row items-center gap-x-2">
                      <FontAwesomeIcon
                        icon={faPepperHot as IconProp}
                        className="fa-fw my-0 py-0  h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[red]"
                      />
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all">
                        spicy
                      </span>
                    </span>
                  )}
                  {selectedProduct?.productJson?.vegetarian && (
                    <span className="flex flex-row items-center gap-x-2">
                      <FontAwesomeIcon
                        icon={faLeaf as IconProp}
                        className="fa-fw my-0 py-0 h-5 w-5 transition-all rounded-full text-[green]"
                      />
                      <span className="text-[10px] transition-all">
                        vegetarian
                      </span>
                    </span>
                  )}
                  {selectedProduct?.productJson?.vegan && (
                    <span className="flex flex-row items-center gap-x-2">
                      <div className="relative flex flex-row">
                        <FontAwesomeIcon
                          icon={faLeaf as IconProp}
                          className="fa-fw my-0 py-0 h-5 w-5 transition-all rounded-full text-[green] z-2 relative"
                        />
                        <FontAwesomeIcon
                          icon={faLeaf as IconProp}
                          className="fa-fw my-0 py-0  h-5 w-5 transition-all rounded-full text-[green] ml-[-0.10rem] z-1 relative"
                        />
                      </div>
                      <span className="text-[10px] transition-all">vegan</span>
                    </span>
                  )}
                  {selectedProduct?.description && (
                    <div className="text-md my-0 font-light py-0 parsed-mb-0 uppercase opacity-90 text-center max-w-sm text-bg all-text-dark mx-auto">
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

                  <div className="flex gap-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
              <button
                type="button"
                className="inline-flex items-center justify-center p-1 text-text-color outline transition-all outline-text-color hover:outline-primary mx-auto max-w-max uppercase text-xs absolute top-0 md:-top-[10px] right-[-10px] rounded-full bg-primary"
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faTimes as IconProp}
                  className="fa-fw my-0 py-0 h-4 w-4"
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
