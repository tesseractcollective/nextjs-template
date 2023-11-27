// import React from "react";
// import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
// import Image from "next/image";
// import parse from "html-react-parser";
// import Link from "next/link";
// import LinkItem from "./LinkItem";

// interface ProductsProps {
//   profileSectionTitle?: string;
//   type?: string;
//   products?: ProductFieldsFragment[];
// }

// export default function Products({ type, products }: ProductsProps) {
//   if (!products) return <></>;
//   const filteredProducts = products.filter(
//     (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
//   );
//   return (
//     <>
//       {filteredProducts && filteredProducts.length && (
//         <div className="bg-bg-primary">
//           <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//             <h2 className="sr-only">Products</h2>

//             <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group relative flex flex-col overflow-hidden rounded-lg border border-text-color bg-white"
//                 >
//                   <LinkItem
//                     link={
//                       product.purchaseLink
//                         ? product.purchaseLink
//                         : `/product/${product.productSlug}`
//                     }
//                   >
//                     <div className="aspect-h-4 aspect-w-3 bg-text-color sm:aspect-none group-hover:opacity-75 sm:h-96">
//                       {product.gallery[0].url && (
//                         <Image
//                           sizes="100%"
//                           src={product.gallery[0].url}
//                           alt={product.name}
//                           className="h-full w-full object-cover object-center sm:h-full sm:w-full"
//                           width={0}
//                           height={0}
//                         />
//                       )}
//                     </div>
//                   </LinkItem>
// <div className="flex flex-1 flex-col space-y-2 p-4">
//   <h3 className="text-sm font-medium text-text-color">
//     <LinkItem
//       label={product.name}
//       link={
//         product.purchaseLink
//           ? product.purchaseLink
//           : `/product/${product.productSlug}`
//       }
//     />
//   </h3>

//   {product.description?.html && (
//     <div className="text-sm text-text-color opacity-80">
//       {parse(product.description?.html)}
//     </div>
//   )}
//   <div className="flex flex-1 flex-col justify-end">
//     <p className="text-base font-medium text-text-color">
//       {product.price}
//     </p>
//   </div>
// </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useState } from "react";
// import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
// import Image from "next/image";
// import parse from "html-react-parser";
// import LinkItem from "./LinkItem";

// interface ProductsProps {
//   profileSectionTitle?: string;
//   type?: string;
//   products?: ProductFieldsFragment[];
// }

// export default function Products({ type, products }: ProductsProps) {
//   const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
//   if (!products) return <></>;
//   const filteredProducts = products.filter(
//     (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
//   );

//   return (
//     <>
//       {filteredProducts && filteredProducts.length && (
//         <div className="bg-bg-primary">
//           <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//             <h2 className="sr-only">Products</h2>

//             <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group relative flex flex-col overflow-hidden rounded-lg border border-text-color bg-white"
//                   onMouseEnter={() => setHoveredProductId(product.id)}
//                   onMouseLeave={() => setHoveredProductId(null)}
//                   onFocus={() => setHoveredProductId(product.id)}
//                   onBlur={() => setHoveredProductId(null)}
//                 >
//                   <LinkItem
//                     link={
//                       product.purchaseLink
//                         ? product.purchaseLink
//                         : `/product/${product.productSlug}`
//                     }
//                   >
//                     <div
//                       className="aspect-h-4 aspect-w-3 bg-text-color sm:aspect-none group-hover:opacity-75 sm:h-96"
//                       style={{
//                         transition: "opacity 0.3s ease",
//                       }}
//                     >
//                       {product.gallery[hoveredProductId === product.id ? 1 : 0]
//                         ?.url && (
//                         <Image
//                           sizes="100%"
//                           src={
//                             product.gallery[
//                               hoveredProductId === product.id ? 1 : 0
//                             ]?.url
//                           }
//                           alt={product.name}
//                           className="h-full w-full object-cover object-center sm:h-full sm:w-full"
//                           width={0}
//                           height={0}
//                         />
//                       )}
//                     </div>
//                   </LinkItem>
//                   <div className="flex flex-1 flex-col space-y-2 p-4">
//                     <h3 className="text-sm font-medium text-text-color">
//                       <LinkItem
//                         label={product.name}
//                         link={
//                           product.purchaseLink
//                             ? product.purchaseLink
//                             : `/product/${product.productSlug}`
//                         }
//                       />
//                     </h3>

//                     <div className="flex flex-1 flex-col justify-end">
//                       <p className="text-base font-medium text-text-color">
//                         {`$${product.price}`}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import LinkItem from "./LinkItem";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products?: ProductFieldsFragment[];
}

export default function Products({ type, products }: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  if (!products) return <></>;
  const filteredProducts = products.filter(
    (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
  );

  return (
    <>
      {filteredProducts && filteredProducts.length && (
        <div className="bg-bg-primary">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 place-items-center">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-72 bg-text-color shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl"
                >
                  <LinkItem
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
                            product.gallery[
                              hoveredProductId === product.id ? 1 : 0
                            ]?.url
                          }
                          alt={product.name}
                          className="h-80 w-72 object-cover rounded-t-xl"
                          width={0}
                          height={0}
                        />
                      )}
                      <div className="px-4 py-3 w-72">
                        {product?.purchaseLink && (
                          <span className="text-dark mr-3 uppercase text-xs">
                            {product.vendor}
                          </span>
                        )}
                        <p className="text-lg font-bold text-dark truncate block capitalize">
                          {product.name}
                        </p>
                        <div className="flex items-center">
                          <p className="text-lg font-semibold text-bg cursor-auto my-3">
                            {`$${product.price}`}
                          </p>
                          {!!product?.purchaseLink && (
                            <div className="ml-auto">
                              <ArrowTopRightOnSquareIcon
                                title={product?.purchaseLink}
                                className="h-6 w-6 text-dark ml-2"
                                aria-hidden="true"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  </LinkItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
