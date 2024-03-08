import React, { useState, useRef } from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import parse from "html-react-parser";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkItem from "./LinkItem";
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
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType>();
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
  if (productLayoutStyle === "shelf")
    return <ProductShelfSection products={filteredProducts} />;
  if (productLayoutStyle === "slider")
    return (
      <>
        {filteredProducts && filteredProducts.length && (
          <div className="bg-bg-primary">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>
              <div className="flex flex-row items-center justify-between">
                <button
                  type="button"
                  className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color mr-4"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft as IconProp}
                    className="fa-fw my-0 text-xl h-4 w-4"
                  />
                  <span className="sr-only">Move Rotation Back</span>
                </button>
                <Swiper
                  className="flex-wrap flex items-stretch h-full max-h-max"
                  grabCursor
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  centerInsufficientSlides
                  // autoplay={{
                  //   delay: 3000,
                  //   disableOnInteraction: false,
                  //   pauseOnMouseEnter: true,
                  // }}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={isMobile ? 1 : isDesktop ? 2 : 3}
                  spaceBetween={30}
                >
                  {filteredProducts.map((product) => (
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
                        <Fade
                          direction="down"
                          className="rounded-xl"
                          triggerOnce
                        >
                          <>
                            {product.gallery[
                              hoveredProductId === product.id ? 1 : 0
                            ]?.url && (
                              <Image
                                sizes="100%"
                                src={
                                  product.gallery[
                                    hoveredProductId === product.id ? 1 : 0
                                  ]?.url
                                }
                                alt={product.name}
                                className="aspect-1 w-full max-w-[90px] md:max-w-full object-cover !rounded-xl p-4 min-w-[90px] min-h-[90px]"
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
                              <p className="text-sm md:text-lg font-bold text-dark truncate block capitalize">
                                {product.name}
                              </p>
                              {product?.description && (
                                <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0 max-w-[200px] lg:max-w-[90%] bg-invert line-clamp-2 min-h-[60px] group-hover:bg-tertiary line-clamp-parse">
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
                <button
                  type="button"
                  className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color mr-4"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight as IconProp}
                    className="fa-fw my-0 text-xl h-4 w-4"
                  />
                  <span className="sr-only">Move Rotation Back</span>
                </button>
              </div>
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
                            product.gallery[
                              hoveredProductId === product.id ? 1 : 0
                            ]?.url
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
      )}
    </>
  );
}
