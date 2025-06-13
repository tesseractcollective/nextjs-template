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

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function SliderGridBoxes({ gridBoxData }: GridBoxProps) {
  const { isMobile, isDesktop } = useViewport();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mx-auto w-full my-8 relative z-50">
      <div className="flex flex-row items-center justify-between w-full px-4 md:px-14">
        <div>{/* <h3>SHOP</h3> */}</div>
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
            <span className="sr-only">Move Rotation Forward</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <Swiper
          className="!pb-20"
          grabCursor
          modules={[Navigation, Pagination, Autoplay]}
          loop={false}
          pagination
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          //   pauseOnMouseEnter: true,
          //   stopOnLastSlide: true,
          // }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={isMobile ? 1.2 : 3.5}
          spaceBetween={20}
          slidesOffsetBefore={isMobile ? 16 : 160}
          slidesOffsetAfter={isMobile ? 16 : 160}
          centeredSlides={false}
        >
          {gridBoxData.map((gridBoxItem, index) => (
            <SwiperSlide key={`${gridBoxItem.boxLink}-${index}`}>
              <a
                // link={gridBoxItem?.boxLink}
                className="relative group hover:cursor-pointer h-full w-full"
              >
                <div className="relative w-full pb-[133.33%] overflow-hidden rounded-2xl bg-background">
                  {!!gridBoxItem.boxImage?.url && (
                    <Image
                      src={gridBoxItem.boxImage.url}
                      alt={gridBoxItem.boxTitle || ""}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                {!!gridBoxItem?.boxTitle && (
                  <p className="text-text-overlay font-bold py-4 text-left absolute top-1 left-4 z-10 text-4xl w-10/12  text-shadow">
                    {gridBoxItem.boxTitle}
                  </p>
                )}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
