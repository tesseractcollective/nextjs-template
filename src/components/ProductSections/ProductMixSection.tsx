import React from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import LinkItem from "../LinkItem";
import "./ProductMixSection.scss";

interface ProductsProps {
  products: ProductFieldsFragment[];
}

export default function ProductMixSection({ products }: ProductsProps) {
  return (
    <div className="overflow-hidden pt-[0.5rem]">
      <div className="mx-auto w-full">
        {products.map((product, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <article key={product.id} className="relative mx-auto w-full">
              <div
                className={`product-mix-wrapper ${isOdd ? "mix-odd" : "mix-even"}`}
              >
                {product.gallery[0]?.url && (
                  <div className="box-1">
                    <Image
                      alt={product.name || ""}
                      src={product.gallery[0].url}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 976px) 50vw, 25vw"
                      priority
                    />
                  </div>
                )}
                {product.gallery[1]?.url && (
                  <LinkItem
                    link={product.purchaseLink}
                    cssClass="absolute inset-0 w-full h-full"
                    parentCssClass="box-2 h-full w-full"
                  >
                    <Image
                      alt={product.name || ""}
                      src={product.gallery[1].url}
                      fill
                      className="object-cover rounded-lg h-full w-full"
                      sizes="(max-width: 976px) 100vw, 50vw"
                    />
                    <p className="absolute bottom-8 inset-x-0 mx-auto text-2xl lowercase w-full max-w-max text-center z-1 rounded-xl bg-primary px-4 py-2">
                      {product.purchaseLabel}
                    </p>
                  </LinkItem>
                )}
                {product.gallery[2]?.url && (
                  <div className="box-3">
                    <Image
                      alt={product.name || ""}
                      src={product.gallery[2].url}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 976px) 50vw, 25vw"
                    />
                  </div>
                )}
                {product.gallery[3]?.url && (
                  <div className="box-4">
                    <Image
                      alt={product.name || ""}
                      src={product.gallery[3].url}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 976px) 50vw, 25vw"
                    />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
