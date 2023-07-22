/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
// import Slider from 'react-slick';
import Moment from 'react-moment';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// export const EventGridSliderStyles = {
//   rel: 'stylesheet',
//   href: EventGridSliderSCSS,
// };

// export const SwiperCSS = {
//   rel: "stylesheet",
//   href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
// }

// export const links: LinksFunction = () => [EventGridSliderStyles, SwiperCSS];

interface EventsProps {
  events: EventFieldsFragment[];
  displayEventsStyleGridOrSlider?: string;
}


export default function Events({events, displayEventsStyleGridOrSlider}: EventsProps) {

  return (
    <div>
      {(displayEventsStyleGridOrSlider === 'grid' ||
        displayEventsStyleGridOrSlider === undefined) && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
          {events.map((event) => (
            <Link
              href={`/event/${event.eventSlug}`}
              className="col-12 md:col-5 lg:col-4 flex flex-col no-underline relative mx-auto"
              key={event.eventSlug}>
              <div className="date-format-badge">
                <span className="date-format-badge-month">
                  <Moment format="MMM">{event.eventStartDateTime}</Moment>
                </span>
                <span className="date-format-badge-date">
                  <Moment format="DD">{event.eventStartDateTime}</Moment>
                </span>
              </div>
              <img
                src={event?.eventFlyer?.url}
                alt={event?.eventTitle || "Event"}
                className="block w-full mb-2 border-round"
              />
              <span className="text-center text-link uppercase">
                {event.eventTitle}
              </span>
            </Link>
          ))}
        </div>
      )}
      {displayEventsStyleGridOrSlider === 'slider' && (
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
            className="mySwiper">
            {events.map((event) => (
              <SwiperSlide key={event.eventSlug}>
                <Link
                  href={`/event/${event.eventSlug}`}
                  className="block no-underline relative mx-auto">
                  <div className="date-format-badge">
                    <span className="date-format-badge-month">
                      <Moment format="MMM">{event.eventStartDateTime}</Moment>
                    </span>
                    <span className="date-format-badge-date">
                      <Moment format="DD">{event.eventStartDateTime}</Moment>
                    </span>
                  </div>
                  <img
                    src={event?.eventFlyer?.url}
                    alt={event?.eventTitle || 'Event'}
                    className="block w-full mb-2 border-round"
                  />
                  <span className="text-center text-link uppercase block">
                    {event.eventTitle}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}