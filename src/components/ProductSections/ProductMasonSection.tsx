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

export default function ProductCompactSection({
  type,
  products,
}: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="">
      <div className="mx-auto px-4 py-8 max-w-8xl">
        <h2 className="sr-only">Products</h2>
        <Fade direction="left" triggerOnce>
          <div
            className={`grid grid-cols-1 gap-8 place-items-start ${
              products.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`flex flex-col p-4 rounded items-center gap-x-4 w-full max-w-2xl mt-16 shadow-softer border-2 ${
                  product?.enableProduct
                    ? "bg-text-color all-text-dark border-primary"
                    : "bg-bg-secondary border-bg"
                }`}
              >
                {product?.gallery[0] && (
                  <Image
                    className="h-48 w-48 rounded-full object-cover -mt-28 mb-8"
                    width={72}
                    height={72}
                    sizes="100%"
                    src={product.gallery[0].url}
                    alt={product.name || ""}
                  />
                )}
                <div className="flex flex-col">
                  {product.name && (
                    <h2 className="text-4xl uppercase font-bold my-0 py-0 parsed-mb-0 mb-2">
                      {parse(product.name)}
                    </h2>
                  )}
                  {product?.description && (
                    <div className="text-md my-0 text-text-color opacity-80 py-0 parsed-mb-0 lowercase body-parsed-text">
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
  );
}
