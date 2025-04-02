import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SnapGridBoxes.scss";
import { Pagination, Navigation } from "swiper/modules";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function SnapGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <Fade triggerOnce className="w-full mx-auto py-16">
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.5,
          },
        }}
        modules={[Pagination, Navigation]}
        className="snap-grid-boxes"
      >
        {gridBoxData.map((gridBoxItem, index) => (
          <SwiperSlide
            key={`${index}-${gridBoxItem.boxLink || "item"}`}
            className="group rounded-md"
          >
            <LinkItem
              parentCssClass="relative w-full pb-[56.25%]"
              cssClass="p-1"
              link={gridBoxItem.boxLink}
            >
              {gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  width={0}
                  height={0}
                  quality={100}
                  sizes="100%"
                  className="transition-transform duration-300 ease-in-out object-cover w-full h-full absolute inset-0"
                />
              )}
            </LinkItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fade>
  );
}
