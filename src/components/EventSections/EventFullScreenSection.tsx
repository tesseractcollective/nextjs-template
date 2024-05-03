import React, { useRef } from "react";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
            <div className="hero-media-slider video-wrapper transition-all h-90vh">
              <div className="netflix-hero max-w-8xl px-4 pt-32 pb-8 mx-auto bottom-20 absolute z-40 w-full inset-x-0 ">
                <Fade direction="up" triggerOnce>
                  {!!event.eventTicketLinkDestination && (
                    <LinkItem
                      link={
                        event?.newTabEventDestination
                          ? event.newTabEventDestination
                          : `/event/${event.eventSlug}`
                      }
                      cssClass={`px-4 md:px-6 py-2 max-w-max block no-underline my-4 font-bold w-full mr-2 text-text-color text-center mx-auto md:text-left md:mx-0 max-w-max bg-bg hover:bg-primary focus-within:bg-primary transition-all p-1`}
                    >
                      <>
                        {!!event.eventTitle && (
                          <h1 className="text-3xl md:text-6xl xl:text-7xl text-shadow-large mt-0 mb-1 text-left font-bold uppercase max-w-max">
                            {event.eventTitle}
                          </h1>
                        )}
                        {event.eventLinkButtonText && (
                          <span>{event.eventLinkButtonText}</span>
                        )}
                      </>
                    </LinkItem>
                  )}
                </Fade>
              </div>
              {event?.eventFlyer && (
                <Image
                  src={event.eventFlyer.url}
                  alt={event.eventTitle || ""}
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
