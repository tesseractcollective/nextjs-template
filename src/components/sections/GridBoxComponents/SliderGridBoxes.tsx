import React, { useRef } from "react";
import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
import { Fade } from "react-awesome-reveal";
interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function SliderGridBoxes({ gridBoxData }: GridBoxProps) {
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType>();
  return (
    <section className="mx-auto max-w-8xl w-full px-4 my-8 relative z-50">
      <div className="flex flex-row items-center justify-between w-full px-14">
        <div>
          <h3>SHOP</h3>
        </div>
        <div className="flex flex-row gap-x-4 py-4">
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon
              icon={faChevronLeft as IconProp}
              className="fa-fw my-0 text-xl h-4 w-4"
            />
            <span className="sr-only">Move Rotation Back</span>
          </button>
          <button
            type="button"
            className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color"
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
      <Swiper
        className="!pb-20 w-full max-w-8xl mx-auto"
        grabCursor
        modules={[Navigation, Pagination, Autoplay]}
        loop
        pagination
        centerInsufficientSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
      >
        {gridBoxData.map((gridBoxItem) => (
          <SwiperSlide key={gridBoxItem.boxLink}>
            <LinkItem
              link={gridBoxItem?.boxLink}
              cssClass="relative isolate flex flex-col rounded-2xl bg-background pb-4 pt-40 sm:pt-60 group hover:cursor-pointer mx-auto h-full w-full max-w-xs self-stretch max-w-max"
            >
              <div>
                <Fade triggerOnce>
                  {!!gridBoxItem.boxImage?.url && (
                    <Image
                      src={gridBoxItem.boxImage.url}
                      alt={gridBoxItem.boxTitle || ""}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="absolute inset-0 -z-10 h-full w-full object-cover object-center rounded-md"
                    />
                  )}
                </Fade>
                <span className="absolute inset-0 z-50" aria-hidden="true" />
                {!!gridBoxItem?.boxTitle && (
                  <p className="line-clamp-1 text-primary font-semibold relative z-100 py-4 -bottom-16 text-center mx-auto">
                    {gridBoxItem.boxTitle}
                  </p>
                )}
              </div>
            </LinkItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
