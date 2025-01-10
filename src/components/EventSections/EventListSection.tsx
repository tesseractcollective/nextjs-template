/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import Slider from 'react-slick';
import Moment from "react-moment";

import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface EventsProps {
  events: EventFieldsFragment[];
}

export default function EventGridSection({ events }: EventsProps) {
  if (events.length === 0) return <></>;
  return (
    <div className="max-w-4xl w-full mx-auto relative z-10 px-8 p-4">
      <ul className="grid gap-4 grid-cols-1 w-full mx-auto py-8 gap-y-4">
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
              <div className="artist-filter-flyer-wrapper relative aspect-video max-h-[400px] object-cover h-[440px] overflow-hidden">
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
      </ul>
    </div>
  );
}
