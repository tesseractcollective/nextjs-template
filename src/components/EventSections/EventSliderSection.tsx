/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
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

export default function EventSliderSection({ events }: EventsProps) {
  return (
    <div className="event-slider-wrapper max-w-8xl w-full my-4 mx-auto">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {events.map((event) => (
          <SwiperSlide key={event.eventSlug}>
            <LinkItem
              link={
                event?.newTabEventDestination
                  ? event.newTabEventDestination
                  : `/event/${event.eventSlug}`
              }
              cssClass="block no-underline relative mx-auto"
            >
              <>
                <div className="date-format-badge">
                  <span className="date-format-badge-month">
                    <Moment format="MMM">{event.eventStartDateTime}</Moment>
                  </span>
                  <span className="date-format-badge-date">
                    <Moment format="DD">{event.eventStartDateTime}</Moment>
                  </span>
                </div>
                {!!event?.eventFlyer?.url && (
                  <Image
                    src={event?.eventFlyer?.url}
                    alt={event?.eventTitle || "Event"}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "100%" }}
                    className="block w-full mb-2 border-round"
                  />
                )}
                <span className="text-center text-link uppercase block">
                  {event.eventTitle}
                </span>
              </>
            </LinkItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
