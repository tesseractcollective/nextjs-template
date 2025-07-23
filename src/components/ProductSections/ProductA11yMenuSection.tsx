import React, { useState } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import BulletsSection from "../elements/BulletsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import ProductA11yMenuItem from "./ProductA11yMenuItem";
import "./ProductA11yMenuSection.scss";

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
  const textMultiplier = (num: string) => {
    return setTextScale(num);
  };
  const buttonClass = "rounded-xl block aspect-1 bg-[blue] px-4 text-[white]";
  return (
    <div className={`bg-[white] px-4 py-16 ${textScale}`}>
      <div className="mx-auto max-w-6xl w-full flex flex-col items-start justify-center font-poppins">
        <h2 className="text-left mx-auto mb-8 text-[black] font-poppins">
          {title}
        </h2>
        <div className="flex flex-row w-full max-w-6xl mx-auto gap-x-4 items-end justify-center">
          <button
            onClick={() => textMultiplier("page-lg")}
            type="button"
            className={buttonClass}
            aria-label="Scale page text large"
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
            aria-label="Scale page text x-large"
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
            aria-label="Scale page text xx-large"
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
            const { footer, title } = category;

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
                          {product && <ProductA11yMenuItem product={product} />}
                        </article>
                      );
                    })}
                  </div>
                  {!!category?.bullets && (
                    <BulletsSection bullets={category.bullets} />
                  )}

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
