import { useRef } from "react";
import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useViewport from "@/app/hooks/useViewport";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function BlurGridBoxes({ gridBoxData }: GridBoxProps) {
  const { isMobile } = useViewport();
  const swiperRef = useRef<SwiperType>();
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Swiper
        className="!pb-10"
        grabCursor
        loop
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
      >
        {gridBoxData.map((gridBoxItem, index) => (
          <SwiperSlide
            key={`${index}-${gridBoxItem.boxTitle || "item"}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="relative w-full pb-[100%]">
              {gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  layout="fill"
                  objectFit="cover"
                  sizes="100%"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-6 bg-bg-secondary h-full">
              {gridBoxItem?.boxTitle && (
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-800">
                  {gridBoxItem.boxTitle}
                </h3>
              )}
              {gridBoxItem?.boxDescription?.html && (
                <div className="text-sm text-gray-600 line-clamp-2">
                  {parse(gridBoxItem.boxDescription.html)}
                </div>
              )}
              {gridBoxItem?.boxLink && (
                <LinkItem
                  link={gridBoxItem.boxLink}
                  cssClass="inline-block bg-bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:bg-black"
                >
                  Learn More
                </LinkItem>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
