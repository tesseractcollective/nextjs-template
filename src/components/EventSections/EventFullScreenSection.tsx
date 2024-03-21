/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import Slider from 'react-slick';
import Moment from "react-moment";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface EventsProps {
  events: EventFieldsFragment[];
}

export default function EventFullScreenSection({ events }: EventsProps) {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="relative w-full mx-0 px-0">
      <Swiper
        className="h-full"
        grabCursor
        loop
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={0}
        pagination
      >
        {events.map((event) => (
          <SwiperSlide
            key={`fullscreen-${event.eventSlug}`}
            className="relative z-20 h-full w-full"
          >
            <div className="hero-media-slider video-wrapper transition-all">
              <div className="netflix-hero max-w-8xl px-4 py-20 mx-auto bottom-20 absolute z-40 w-full inset-x-0">
                <Fade direction="up" triggerOnce>
                  {!!event.eventTitle && (
                    <h1 className="text-3xl md:text-6xl xl:text-7xl text-shadow-large mt-0 mb-1 py-0 text-left text-text-overlay font-bold uppercase">
                      {event.eventTitle}
                    </h1>
                  )}
                  {/* {!!pageHeaderSubtitleProp && (
                          <h2 className="text-shadow my-0 py-0 text-left uppercase tracking-widest font-bold text-lg opacity-100 text-secondary max-w-md">
                            {pageHeaderSubtitleProp}
                          </h2>
                        )} */}
                  {!!event.eventTicketLinkDestination && (
                    <div>
                      <div className="text-center mx-auto md:text-left md:mx-0">
                        <LinkItem
                          link={
                            event?.newTabEventDestination
                              ? event.newTabEventDestination
                              : `/event/${event.eventSlug}`
                          }
                          label={event.eventLinkButtonText}
                          cssClass={`border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full mr-2`}
                        ></LinkItem>
                      </div>
                    </div>
                  )}
                </Fade>
              </div>
              {event?.eventFlyer && (
                <Image
                  src={event.eventFlyer.url}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  className={`absolute w-full h-full inset-0 transition-opacity duration-300 object-cover bg-fixed object-top`}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
