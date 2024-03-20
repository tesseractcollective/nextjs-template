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
  eventDisplayLayout?: string;
}

export default function Events({ events, eventDisplayLayout }: EventsProps) {
  const swiperRef = useRef<SwiperType>();
  // Get today's date in PST
  const today = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const pstDate = new Date(today);

  // Filter out events that occur on or before today in PST
  const filteredEvents = events.filter((event) => {
    const eventDateTime = new Date(event.eventStartDateTime);
    return eventDateTime >= pstDate;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.eventStartDateTime);
    const dateB = new Date(b.eventStartDateTime);
    return dateA.getTime() - dateB.getTime();
  });

  console.log(filteredEvents);
  console.log("events", events.length);
  console.log("filteredEvents", sortedEvents.length);

  if (eventDisplayLayout === "fullscreen") {
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
  if (eventDisplayLayout === "slider") {
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
          {sortedEvents.map((event) => (
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
    );
  }
  if (eventDisplayLayout === "artistFilter") {
    return (
      <div className="max-w-8xl w-full my-4 mx-auto">
        <div className="event-artist-filter-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-12xl mx-auto gap-8 px-4">
          {sortedEvents.map((event) => (
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
                <div className="artist-filter-flyer-wrapper relative aspect-video max-h-[300px] object-cover h-[340px] overflow-hidden">
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
      </div>
    );
  }
  return (
    <div className="px-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full">
      {sortedEvents.map((event) => (
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
  );
}
