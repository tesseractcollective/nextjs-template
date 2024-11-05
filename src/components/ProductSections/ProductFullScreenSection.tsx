import React, { useState, Fragment } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import parse from "html-react-parser";
import LinkItem from "@/components/LinkItem";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  faChevronRight,
  faChevronLeft,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
import ReactGA from "react-ga4";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ProductsProps {
  products?: ProductFieldsFragment[];
}

export default function ProductFullScreenSection({ products }: ProductsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductFieldsFragment>();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  useState<ProductFieldsFragment>();
  if (!products) return <></>;

  return (
    <div className="relative w-full">
      {products.map((product) => (
        <section
          key={product.productSlug}
          className="h-[100vh] bg-bg top-0 relative w-full"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat duration-[400ms] bg-fixed"></div>
          <div className="max-w-8xl px-4 lg:px-8 lg:py-20 mx-auto top-20 absolute w-full inset-x-0 z-10">
            <Fade direction="up" triggerOnce className="gap-y-2">
              <LinkItem
                link={
                  product?.purchaseLink
                    ? product.purchaseLink
                    : `/product/${product.productSlug}`
                }
                cssClass="gap-y-8 flex flex-col"
              >
                <div className="bg-glass glass-primary py-16">
                  {!!product.name && (
                    <h1 className="text-2xl md:text-6xl xl:text-7xl text-zhadow my-0 py-0 text-center text-[white] font-bold uppercase mx-auto">
                      {product.name}
                    </h1>
                  )}
                  {!!product.description?.html && (
                    <div className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-md lg:text-lg max-w-md text-[white] text-shadow mx-auto">
                      {parse(product.description?.html)}
                    </div>
                  )}

                  <p className="bg-primary text-text-color py-2 px-8 max-w-max uppercase font-bold rounded-md mx-auto">
                    {product?.purchaseLabel ? product.purchaseLabel : "Info"}
                  </p>
                </div>
              </LinkItem>
            </Fade>
          </div>
          {product.gallery[0]?.url && (
            <Image
              src={product.gallery[0].url}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-full object-cover absolute inset-0 z-0 h-100vh"
            />
          )}
        </section>
      ))}
    </div>
  );
}
