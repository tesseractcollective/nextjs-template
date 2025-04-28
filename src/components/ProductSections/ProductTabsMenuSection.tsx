import React, { useState, useRef } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import LinkItem from "@/components/LinkItem";

type ProductTabCategory = {
  title: string;
  query: string;
  description: string;
  image: string;
  footer: string;
  ctaLink: string;
  ctaText: string;
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

export default function ProductTabsMenuSection({
  productTabMenuData,
  products,
}: ProductsProps) {
  if (!products) return <></>;
  const [activeIndex, setActiveIndex] = useState(0);

  const { title, categories } = productTabMenuData;
  if (!categories) return <></>;

  return (
    <div className="bg-bg-primary px-4 py-16">
      <h2 className="text-center mx-auto mb-8 text-2xl">{title}</h2>
      <div className="mx-auto max-w-6xl w-full flex flex-row items-start justify-center">
        <div className="toggle-wrapper border-r border-primary w-full max-w-xs bg-[#ffffff23] hidden lg:flex flex-col">
          {categories.map((category, index) => {
            return (
              <button
                key={category.query}
                onClick={() => setActiveIndex(index)}
                className={`flex gap-2 text-primary hover:text-secondary w-full justify-end gap-y-4 text-right p-2 text-xl uppercase border-b ${activeIndex === index ? "border-b-secondary text-secondary" : "border-b-[#00000000] "}`}
              >
                {category.title}
              </button>
            );
          })}
        </div>
        <div className="tab-menu max-w-2xl w-full mx-auto">
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
                className={`flex flex-col px-4 gap-4 mb-8 w-full ${activeIndex !== index ? "lg:hidden" : ""}`}
              >
                <div className="w-full text-center flex flex-col">
                  <h3 className="!text-4xl font-bold text-primary text-center !mb-2 uppercase">
                    {category.title}
                  </h3>
                  <p className="!text-md max-w-lg text-center mx-auto pb-0 !mb-2">
                    {parse(category.description)}
                  </p>
                  {category?.image && (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto rounded-lg block"
                    />
                  )}
                  <div className="mt-2 mb-4">
                    {currentProducts.map((product) => {
                      return (
                        <div
                          key={product.productSlug}
                          className={`flex flex-col items-center gap-4 px-4 py-6 text-center justify-center max-w-md mx-auto`}
                        >
                          {product.gallery[0]?.url && (
                            <Image
                              src={product.gallery[0]?.url}
                              alt={product.name}
                              width={100}
                              height={100}
                              className="w-16 h-16 rounded-lg"
                            />
                          )}
                          <div className="body-parsed-tex">
                            <h4 className="text-xl font-semibold text-primary !mb-2">
                              {product.name}
                            </h4>
                            {product.description?.html && (
                              <p className="lowercase !text-[16px] mb-1">
                                {parse(product.description?.html)}
                              </p>
                            )}
                            {product?.price && (
                              <p className="!mb-0 !pb-0 text-[14px]">
                                {`$${product.price}`}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {ctaLink && ctaText && (
                    <LinkItem
                      label={ctaText}
                      link={ctaLink}
                      cssClass="text-xl lg:text-2xl font-semibold my-8 block mx-auto w-full max-w-xs my-2 px-4 py-2 rounded  border bg-bg border-primary hover:bg-secondary transition-all focus:bg-secondary text-text-color uppercase"
                    ></LinkItem>
                  )}
                  {footer && (
                    <p className="!text-md max-w-lg text-center mx-auto tab-menu-footer">
                      {parse(footer)}
                    </p>
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
