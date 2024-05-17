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
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="bg-bg-primary">
      <div className="mx-auto px-4 py-8 max-w-8xl">
        <h2 className="sr-only">Products</h2>
        <Fade direction="left" triggerOnce>
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 place-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-row bg-text-color all-text-dark p-4 rounded items-center gap-x-4 w-full border-bg border"
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
  );
}
