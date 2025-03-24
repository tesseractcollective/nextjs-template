import React, { useState, useRef } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkItem from "@/components/LinkItem";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
import { Fade } from "react-awesome-reveal";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products: ProductFieldsFragment[];
}

export default function ProductTabsMenuSection({
  type,
  products,
}: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType | null>(null);
  if (!products) return <></>;
  const filteredProducts = products.filter(
    (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
  );

  // Product Layout Style
  // compact √
  // slider √
  // card
  // chevron
  // grid
  // infinite
  // lightbox
  // mason
  // mix
  // polaroid
  // rotate
  // shelf
  // stack

  return (
    <div className="bg-bg-primary">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 place-items-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-72 bg-text-color hover:bg-tertiary focus-within:bg-tertiary shadow-md rounded-xl duration-300 hover:md:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl p-1 md:p-2 overflow-hidden max-w-sm"
            >
              <LinkItem
                cssClass="flex flex-row md:flex-col items-center justify-start md:justify-center px-0 mx-0"
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
                      className="aspect-1 w-full max-w-[90px] md:max-w-full object-cover rounded-t-xl block px-0 mx-0"
                      width={0}
                      height={0}
                    />
                  )}
                  <div className="px-2 md:px-4 py-3 w-full">
                    {!!product?.vendor && (
                      <span className="text-dark md:mr-3 uppercase text-xs">
                        {product.vendor}
                      </span>
                    )}
                    <p className="text-sm md:text-lg font-bold text-dark truncate block capitalize">
                      {product.name}
                    </p>
                    <div className="flex items-center md:my-3">
                      {!!product.price && (
                        <p className="text-md md:text-lg font-semibold text-bg cursor-auto">
                          {`$${product.price}`}
                        </p>
                      )}
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
  );
}
