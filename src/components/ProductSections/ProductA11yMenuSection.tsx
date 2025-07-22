import React, { useState, useRef } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import LinkItem from "@/components/LinkItem";
import BulletsSection from "../elements/BulletsSection";
import "./ProductA11yMenuSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFish,
  faFont,
  faLeaf,
  faPepperHot,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

type ProductTabCategory = {
  title: string;
  query: string;
  description: string;
  image: string;
  footer: string;
  ctaLink: string;
  ctaText: string;
  bullets?: string[];
};

type ProductTabMenu = {
  title: string;
  backgroundImage: string;
  categories: ProductTabCategory[];
};
interface ProductsProps {
  productTabMenuData: ProductTabMenu;
  products: ProductFieldsFragment[];
}

export default function ProductA11yMenuSection({
  productTabMenuData,
  products,
}: ProductsProps) {
  const [textScale, setTextScale] = useState("page-lg");
  if (!products) return <></>;

  const { title, categories } = productTabMenuData;
  if (!categories) return null;
  console.log(categories);
  const textMultiplier = (num: string) => {
    return setTextScale(num);
  };
  const buttonClass = "rounded-xl block aspect-1 bg-[#00a7eb] px-4";
  return (
    <div className={`bg-[white] px-4 py-16 ${textScale}`}>
      <div className="mx-auto max-w-6xl w-full flex flex-col items-start justify-center font-poppins">
        <h2 className="text-left mx-auto mb-8 text-[black] font-poppins">
          {title}
        </h2>
        <div className="flex flex-row w-full mx-auto gap-x-4 max-w-max items-center justify-start">
          <button
            onClick={() => textMultiplier("page-lg")}
            type="button"
            className={buttonClass}
          >
            <FontAwesomeIcon
              icon={faFont as IconProp}
              className="fa-fw my-0 text-xl h-8 w-8"
            />
          </button>
          <button
            onClick={() => textMultiplier("page-xl")}
            type="button"
            className={buttonClass}
          >
            <FontAwesomeIcon
              icon={faFont as IconProp}
              className="fa-fw my-0 text-xl h-12 w-12"
            />
          </button>
          <button
            onClick={() => textMultiplier("page-2xl")}
            type="button"
            className={buttonClass}
          >
            <FontAwesomeIcon
              icon={faFont as IconProp}
              className="fa-fw my-0 text-xl h-16 w-16"
            />
          </button>
        </div>
        <div className="tab-menu w-full mx-auto">
          {categories.map((category, index) => {
            const currentProducts = products.filter(
              (product) =>
                product?.productType?.toLowerCase() ===
                  category.query?.toLowerCase() || ""
            );
            const { ctaLink, ctaText, footer, title, image } = category;

            return (
              <div
                key={title}
                className={`flex flex-col px-4 gap-4 mb-8 w-full max-w-4xl mx-auto`}
              >
                <div className="w-full text-left flex flex-col all-text-black font-poppins gap-y-8">
                  {category?.image && (
                    <Image
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto rounded-lg block object-cover"
                      sizes="100%"
                      width={0}
                      height={0}
                    />
                  )}
                  <h2
                    className={`font-bold text-[black] text-left !mb-2 uppercase font-poppins border-b-2`}
                  >
                    {category.title}
                  </h2>
                  <p className="text-left pb-0 my-4">
                    {parse(category.description)}
                  </p>

                  <div className="flex flex-col gap-y-8 w-full">
                    {currentProducts.map((product) => {
                      return (
                        <article
                          key={product.productSlug}
                          className={`flex flex-col items-start gap-4 p-6 text-left justify-center mx-auto bg-[#fafafa] border-2 border-[#d0d0d0] rounded-xl w-full `}
                        >
                          {product.gallery[0]?.url && (
                            <Image
                              src={product.gallery[0]?.url}
                              alt={product.name}
                              width={100}
                              height={100}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          )}

                          <h3 className="item-header flex flex-row justify-between items-start font-semibold w-full">
                            <span className="text-[black]">{product.name}</span>
                            {product?.price && (
                              <span className="text-[red]">{`$${product.price}`}</span>
                            )}
                          </h3>

                          {product.description?.html && (
                            <div className="lowercase mb-1">
                              {parse(product.description?.html)}
                            </div>
                          )}
                          <div className="diet-pills flex flex-row py-2">
                            {product.productJson?.peanut && (
                              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
                                <FontAwesomeIcon
                                  icon={faTree as IconProp}
                                  title="Peanut"
                                  className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
                                />
                                <span>Peanuts</span>
                              </p>
                            )}
                            {product.productJson?.seafood && (
                              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
                                <FontAwesomeIcon
                                  icon={faFish as IconProp}
                                  title="Seafood"
                                  className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
                                />
                                <span>Seafood</span>
                              </p>
                            )}
                            {product?.productJson?.spicy && (
                              <span className="flex items-center gap-x-2 relative">
                                <FontAwesomeIcon
                                  icon={faPepperHot as IconProp}
                                  title="Spicy"
                                  className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
                                />
                              </span>
                            )}
                            {product?.productJson?.vegetarian && (
                              <span className="flex items-center gap-x-2 relative">
                                <FontAwesomeIcon
                                  icon={faLeaf as IconProp}
                                  title="Vegetarian"
                                  className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
                                />
                              </span>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  {!!category?.bullets && (
                    <BulletsSection bullets={category.bullets} />
                  )}
                  {/* {ctaLink && ctaText && (
                    <LinkItem
                      label={ctaText}
                      link={ctaLink}
                      cssClass="text-xl lg: font-semibold my-8 block mx-auto w-full max-w-xs my-2 px-4 py-2 rounded  border bg-bg border-primary hover:bg-secondary transition-all focus:bg-secondary text-text-color uppercase hidden lg:block"
                    ></LinkItem>
                  )} */}
                  {footer && (
                    <div className="text-left mx-auto tab-menu-footer">
                      {parse(footer)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
