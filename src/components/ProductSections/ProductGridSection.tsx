import React, { useState, useRef } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import LinkItem from "@/components/LinkItem";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products: ProductFieldsFragment[];
}

export default function ProductGridSection({ type, products }: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-8xl px-4">
        <div
          className={`grid w-full gap-4 place-items-center transition-all ${
            products.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          } ${
            products.length >= 6
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {products.map((product) => (
            <LinkItem
              parentCssClass="w-full px-4 md:px-0"
              key={product.id}
              cssClass="flex flex-row md:flex-col items-center justify-start md:justify-center px-0 mx-0 group hover:rounded-xl focus-within:rounded-xl overflow-hidden rounded-none transition-all duration-300 bg-bg w-full border border-bg hover:border-text-color focus-within:border-text-color"
              link={
                product.purchaseLink
                  ? product.purchaseLink
                  : `/product/${product.productSlug}`
              }
            >
              <>
                {product.gallery[hoveredProductId === product.id ? 1 : 0]
                  ?.url && (
                  <Image
                    sizes="100%"
                    src={
                      product.gallery[hoveredProductId === product.id ? 1 : 0]
                        ?.url
                    }
                    alt={product.name}
                    className="aspect-1 w-full max-w-[90px] md:max-w-full object-cover rounded-xl md:rounded-b-none md:rounded-t-xl block p-4 mx-0 group-hover:p-0 group-focus-within:p-0 transition-all duration-300"
                    width={0}
                    height={0}
                  />
                )}
                <div className="px-2 md:px-4 py-3 w-full">
                  {!!product?.vendor && (
                    <span className="text-text-color md:mr-3 uppercase text-xs">
                      {product.vendor}
                    </span>
                  )}
                  <p className="text-lg md:text-xl font-bold text-text-color truncate block capitalize group-hover:text-primary group-focus-within:text-primary transition-all duration-300">
                    {product.name}
                  </p>
                  <div className="flex items-center md:my-3">
                    {!!product.price && (
                      <p className="text-md md:text-lg font-semibold text-text-color cursor-auto">
                        {`$${product.price}`}
                      </p>
                    )}
                    {!!product?.purchaseLink && (
                      <ArrowTopRightOnSquareIcon
                        title={product?.purchaseLink}
                        className="h-6 w-6 text-text-color ml-auto max-w-max"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </>
            </LinkItem>
          ))}
        </div>
      </div>
    </div>
  );
}
