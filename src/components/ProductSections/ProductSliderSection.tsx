import React, { useState, useRef } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
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

export default function ProductSliderSection({
  type,
  products,
}: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-bg-primary overflow-hidden mx-auto z-20 w-full relative">
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 max-w-8xl mx-auto">
        {!!type && (
          <h2 className="text-2xl md:text-4xl mx-auto md:mx-0 opacity-90 uppercase text-center md:text-left font-bold mb-4">
            {type}
          </h2>
        )}
        <div className="flex flex-row">
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color mr-4 hover:rotate-6"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon
              icon={faChevronLeft as IconProp}
              className="fa-fw my-0 text-xl h-8 w-8"
            />
            <span className="sr-only">Move Blog Rotation Back</span>
          </button>
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color hover:-rotate-6"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon
              icon={faChevronRight as IconProp}
              className="fa-fw my-0 text-xl h-8 w-8"
            />
            <span className="sr-only">Move Blog Rotation Next</span>
          </button>
        </div>
      </div>
      <div className="relative flex flex-row items-center justify-between w-full mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper !py-8"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="w-full md:w-72 bg-text-color shadow-md rounded-xl duration-300 hover:md:scale-95 hover:shadow-md focus-within:scale-95 focus-within:shadow-md px-1 md:px-2 overflow-hidden max-w-sm p-1 h-full self-stretch min-h-[200px]"
            >
              <LinkItem
                cssClass="flex flex-row md:flex-col items-center justify-start md:justify-center"
                link={
                  product.purchaseLink
                    ? product.purchaseLink
                    : `/product/${product.productSlug}`
                }
              >
                <Fade direction="down" className="rounded-xl" triggerOnce>
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
                        className="aspect-1 w-full max-w-full object-cover !rounded-xl p-4"
                        width={0}
                        height={0}
                      />
                    )}
                    <div className="px-2 md:px-4 py-3 w-full">
                      {product?.vendor && (
                        <span className="text-dark md:mr-3 uppercase text-xs">
                          {product.vendor}
                        </span>
                      )}
                      <p className="text-lg md:text-xl font-bold text-dark truncate block capitalize">
                        {product.name}
                      </p>
                      {product?.description && (
                        <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0 max-w-[90%] bg-invert line-clamp-2 min-h-[60px] group-hover:bg-tertiary line-clamp-parse">
                          {parse(product.description.html)}
                        </div>
                      )}
                      <div className="flex items-center md:my-3">
                        {product.price && (
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
                </Fade>
              </LinkItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
