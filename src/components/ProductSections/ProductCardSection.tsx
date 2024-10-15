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
import ProductShelfSection from "@/components/ProductSections/ProductShelfSection";
import ProductFullScreenSection from "@/components/ProductSections/ProductFullScreenSection";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products: ProductFieldsFragment[];
}

export default function ProductCardSection({ type, products }: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType>();
  if (!products) return <></>;

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
      <div className="mx-auto px-4 py-16 max-w-8xl">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 lg:gap-x-8 bg-text-color all-text-dark rounded py-4 mx-auto">
          {products.map((product) => (
            <LinkItem
              key={product.id}
              link={
                product.purchaseLink
                  ? product.purchaseLink
                  : `/product/${product.productSlug}`
              }
              cssClass="flex flex-col p-4 gap-x-4 w-full max-w-[260px] items-start justify-center hover:border-primary border border-text-color transition-all mx-auto relative group"
            >
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-start justify-between gap-x-6">
                  {product.name && (
                    <div className="text-xl font-bold my-0 py-0 parsed-mb-0 uppercase tracking-widest text-left">
                      {parse(product.name)}
                    </div>
                  )}
                  {product.price && (
                    <div className="text-sm font-light my-0 py-0 parsed-mb-0">
                      {parse(product.price)}
                    </div>
                  )}
                </div>
                {product?.description && (
                  <div className="text-[12px] my-0 font-light py-0 parsed-mb-0 opacity-80 text-left lowercase">
                    {parse(product.description.html)}
                  </div>
                )}
              </div>
            </LinkItem>
          ))}
        </div>
      </div>
    </div>
  );
}
