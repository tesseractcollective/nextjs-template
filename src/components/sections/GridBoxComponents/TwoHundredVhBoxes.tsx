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
interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function TwoHundredVhBoxes({ gridBoxData }: GridBoxProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="mx-auto w-full relative z-50 bg-primary">
      <Swiper
        className="w-full mx-auto"
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
        slidesPerView={1}
        spaceBetween={30}
      >
        {gridBoxData.map((gridBoxItem) => (
          <SwiperSlide key={gridBoxItem.boxLink}>
            <LinkItem
              link={gridBoxItem?.boxLink}
              cssClass="relative isolate flex bg-background group hover:cursor-pointer mx-auto w-full min-h-[100vh] md:min-h-[200vh] items-center justify-center"
            >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                {!!gridBoxItem.boxImage?.url && (
                  <Image
                    src={gridBoxItem.boxImage.url}
                    alt={gridBoxItem.boxTitle || ""}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                  />
                )}
                <div className="bg-primary p-4 max-w-max relative max-h-max">
                  {!!gridBoxItem?.boxTitle && (
                    <p className="text-4xl font-bold relative z-100 max-w-max">
                      {gridBoxItem.boxTitle}
                    </p>
                  )}
                </div>
              </div>
            </LinkItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
