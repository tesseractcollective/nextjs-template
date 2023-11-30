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
import { Fade } from "react-awesome-reveal";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products?: ProductFieldsFragment[];
  productLayoutStyle: string;
}

export default function Products({
  type,
  products,
  productLayoutStyle,
}: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  if (!products) return <></>;
  const filteredProducts = products.filter(
    (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
  );

  if (productLayoutStyle === "compact")
    return (
      <>
        {filteredProducts && filteredProducts.length && (
          <div className="bg-bg-primary">
            <div className="mx-auto max-w-2xl px-4 py-8 max-w-8xl">
              <h2 className="sr-only">Products</h2>
              <Fade direction="left" triggerOnce>
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 place-items-center">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-row bg-text-color all-text-dark p-4 rounded items-center gap-x-4 w-full"
                    >
                      {product?.gallery[0] && (
                        <Image
                          className="h-16 lg:h-20 w-16 lg:w-20 rounded-full object-cover"
                          width={72}
                          height={72}
                          sizes="100%"
                          src={product.gallery[0].url}
                          alt={product.name || ""}
                        />
                      )}
                      <div className="flex flex-col">
                        {product.name && (
                          <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                            {parse(product.name)}
                          </div>
                        )}
                        {product?.description && (
                          <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0 max-w-[200px] lowercase">
                            {parse(product.description.html)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        )}
      </>
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
                  className="w-full md:w-72 bg-text-color shadow-md rounded-xl duration-300 hover:md:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl px-1 md:px-2 overflow-hidden max-w-sm"
                >
                  <LinkItem
                    cssClass="flex flex-row md:flex-col items-center justify-between md:justify-center"
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
                          className="aspect-1 w-full max-w-[90px] md:max-w-full object-cover rounded-t-xl"
                          width={0}
                          height={0}
                        />
                      )}
                      <div className="px-2 md:px-4 py-3 max-w-[140px] md:max-w-full w-full md:w-72">
                        {product?.vendor && (
                          <span className="text-dark md:mr-3 uppercase text-xs">
                            {product.vendor}
                          </span>
                        )}
                        <p className="text-xs md:text-lg font-bold text-dark truncate block capitalize">
                          {product.name}
                        </p>
                        <div className="flex items-center md:my-3">
                          <p className="text-md md:text-lg font-semibold text-bg cursor-auto">
                            {`$${product.price}`}
                          </p>
                          {!!product?.purchaseLink && (
                            <ArrowTopRightOnSquareIcon
                              title={product?.purchaseLink}
                              className="h-6 w-6 text-dark ml-auto max-w-max"
                              aria-hidden="true"
                            />
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
