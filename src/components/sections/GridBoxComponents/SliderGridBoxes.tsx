import React, { useRef } from "react";
import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
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
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8">
      <div className="max-w-8xl py-5 grid-slider-wrapper mx-auto">
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
            className="!pb-10 flex-wrap"
            grabCursor
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            centerInsufficientSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={isMobile ? 1 : isDesktop ? 2 : 3}
            spaceBetween={30}
          >
            {gridBoxData.map((gridBoxItem) => (
              <SwiperSlide key={gridBoxItem.boxLink}>
                <div className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-background pb-4 pt-40 sm:pt-60 group hover:cursor-pointer mx-auto h-full w-full max-w-xs self-stretch">
                  <Fade triggerOnce>
                    {!!gridBoxItem.boxImage?.url && (
                      <Image
                        src={gridBoxItem.boxImage.url}
                        alt={gridBoxItem.boxTitle || ""}
                        width={0}
                        height={0}
                        sizes="100%"
                        className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center"
                      />
                    )}
                  </Fade>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/50 via-text-color/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-primary-fade ring-inset group-hover:ring-dark/10 overflow-hidden transition group-hover:ring-secondary" />
                  <LinkItem
                    link={gridBoxItem?.boxLink}
                    cssClass="text-shadow mt-3 text-xl leading-6 w-full text-center text-text-overlay h-full z-40 self-stretch"
                  >
                    <div>
                      {!!gridBoxItem?.boxTitle && (
                        <p className="line-clamp-1 text-text-overlay font-semibold">
                          {gridBoxItem.boxTitle}
                        </p>
                      )}
                      {!!gridBoxItem?.boxDescription?.html && (
                        <div className="body-parsed-text text-xs mx-auto block text-center text-text-overlay font-normal w-5/6 opacity-90 line-clamp-2 pt-2">
                          {parse(gridBoxItem.boxDescription.html)}
                        </div>
                      )}
                      <span
                        className="absolute inset-0 z-50"
                        aria-hidden="true"
                      />
                    </div>
                  </LinkItem>
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary transition opacity-0 group-hover:opacity-50 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark transition opacity-30 group-hover:opacity-50 z-10" />
                </div>
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
    </section>
  );
}
