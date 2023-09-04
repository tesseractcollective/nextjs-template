import React from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products?: ProductFieldsFragment[];
}

export default function Products({ type, products }: ProductsProps) {
  if (!products) return <></>;
  const filteredProducts = products.filter(
    (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
  );
  return (
    <>
      {filteredProducts && filteredProducts.length && (
        <div className="bg-bg-primary">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-text-color bg-white"
                >
                  <Link href={`/product/${product.productSlug}`}>
                    <div className="aspect-h-4 aspect-w-3 bg-text-color sm:aspect-none group-hover:opacity-75 sm:h-96">
                      {product.gallery[0].url && (
                        <Image
                          sizes="100%"
                          src={product.gallery[0].url}
                          alt={product.name}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                          width={0}
                          height={0}
                        />
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-text-color">
                      {product.purchaseLink && (
                        <a href={product.purchaseLink}>
                          <span aria-hidden="true" className="" />
                          {product.name}
                        </a>
                      )}
                    </h3>

                    {product.description?.html && (
                      <div className="text-sm text-text-color opacity-80">
                        {parse(product.description?.html)}
                      </div>
                    )}
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-base font-medium text-text-color">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
