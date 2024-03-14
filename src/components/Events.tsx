/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Slider from 'react-slick';
import Moment from "react-moment";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface EventsProps {
  events: EventFieldsFragment[];
  eventDisplayLayout?: string;
}

export default function Events({ events, eventDisplayLayout }: EventsProps) {
  if (eventDisplayLayout === "slider") {
    return (
      <>
        <div className="event-slider-wrapper">
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
                <Link
                  href={`/event/${event.eventSlug}`}
                  className="block no-underline relative mx-auto"
                >
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
  if (eventDisplayLayout === "artistFilter") {
    return (
      <>
        <div className="event-artist-filter-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-12xl mx-auto gap-8">
          {events.map((event) => (
            <LinkItem
              key={event.eventSlug}
              link={
                event?.newTabEventDestination
                  ? event.newTabEventDestination
                  : `/event/${event.eventSlug}`
              }
              cssClass="relative aspect-video group mx-auto w-full group h-full"
            >
              <div className="artist-filter-item">
                <div className="artist-filter-flyer-wrapper relative aspect-video max-h-[300px] object-cover h-[340px]">
                  <div className="absolute bg-gradient-to-t from-bg group-hover:from-primary z-20 h-24 bottom-0 left-0 right-0 w-full" />
                  {!!event?.eventFlyer?.url && (
                    <Image
                      src={event?.eventFlyer?.url}
                      alt={event?.eventTitle || "Event"}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="block w-full border-t-round opacity-50 group-hover:opacity-100 transition-all absolute inset-0"
                    />
                  )}
                </div>
                <div className="artist-filter-text-wrapper text-text-color flex flex-row items-center justify-start py-2 px-4 gap-x-4 border-b border-primary group-hover:bg-primary">
                  <div className="flex flex-col border-r border-text-color pr-4">
                    <span className="date-format-month text-center uppercase my-0 py-0 font-semibold opacity-90 text-xs">
                      <Moment format="ddd">{event.eventStartDateTime}</Moment>
                    </span>
                    <span className="date-format-month text-center uppercase my-0 py-0 font-semibold opacity-90 text-xs">
                      <Moment format="MMM">{event.eventStartDateTime}</Moment>
                    </span>
                    <span className="date-format-date text-center text-2xl my-0 py-0 font-bold">
                      <Moment format="DD">{event.eventStartDateTime}</Moment>
                    </span>
                  </div>
                  <span className="text-center text-xl font-bold uppercase block">
                    {event.eventTitle}
                  </span>
                </div>
              </div>
            </LinkItem>
          ))}
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full">
        {events.map((event) => (
          <Link
            href={`/event/${event.eventSlug}`}
            className="w-full flex flex-row no-underline relative mx-auto bg-primary items-center justify-center rounded-md hover:bg-secondary focus-visible:bg-secondary transition-all group"
            key={event.eventSlug}
          >
            <div className="date-format-badge bg-white text-primary rounded-full">
              <span className="date-format-badge-month">
                <Moment format="MMM">{event.eventStartDateTime}</Moment>
              </span>
              <span className="date-format-badge-date">
                <Moment format="DD">{event.eventStartDateTime}</Moment>
              </span>
            </div>
            <span className="uppercase text-left py-4 text-text-color">
              {event.eventTitle}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
