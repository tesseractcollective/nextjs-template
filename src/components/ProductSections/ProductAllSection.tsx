import React from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import parse from "html-react-parser";

interface ProductsProps {
  type?: string;
  products: ProductFieldsFragment[];
}

export default function ProductAllSection({ type, products }: ProductsProps) {
  // Group products by productType
  const groupedProducts = products.reduce((acc, product) => {
    const productType = product.productType || "Uncategorized";
    if (!acc[productType]) {
      acc[productType] = [];
    }
    acc[productType].push(product);
    return acc;
  }, {} as Record<string, ProductFieldsFragment[]>);

  // Sort productTypes alphabetically
  const sortedProductTypes = Object.keys(groupedProducts).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <div className="bg-bg-primary">
      <div className="mx-auto px-4 py-8 max-w-8xl bg-[#fff] rounded">
        <h2 className="sr-only">Products</h2>
        <div className="flex flex-col gap-y-6">
          {sortedProductTypes.map((productType) => (
            <div
              key={productType}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4 uppercase">
                {productType}
              </h3>
              <div className="flex flex-col gap-y-4">
                {groupedProducts[productType].map((product) => (
                  <div key={product.id} className="flex flex-col">
                    {product.name && (
                      <div className="text-sm font-bold my-0 py-0 parsed-mb-0 flex flex-row gap-x-2">
                        <p>{parse(product.name)}</p>
                        <p>{`$${product?.price}`}</p>
                      </div>
                    )}
                    {product?.description && (
                      <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0">
                        {parse(product.description.html)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
