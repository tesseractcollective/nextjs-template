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
    <div className="max-w-8xl w-full mx-auto relative z-10 px-8 p-4">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto py-8 gap-y-4">
        {events.map((event) => (
          <LinkItem
            link={
              event?.newTabEventDestination
                ? event.newTabEventDestination
                : `/event/${event.eventSlug}`
            }
            cssClass="w-full flex flex-row no-underline relative mx-auto bg-primary items-center justify-start rounded-md hover:bg-secondary focus-visible:bg-secondary transition-all group cursor-pointer"
            key={event.eventSlug}
          >
            <div className="date-format-badge bg-text-color text-bg group-hover:text-secondary rounded-full left-4 min-w-[60px] min-h-[60px] flex flex-col items-center justify-center absolute cursor-pointer">
              <span className="date-format-badge-month">
                <Moment format="MMM">{event.eventStartDateTime}</Moment>
              </span>
              <span className="date-format-badge-date">
                <Moment format="DD">{event.eventStartDateTime}</Moment>
              </span>
            </div>
            <p className="uppercase text-left py-4 px-0 text-bg group-hover:text-dark m-0 text-xs relative flex flex-col ml-[90px] cursor-pointer">
              <span className="line-clamp-1 m-0 p-0 max-w-[34ch] font-bold">
                {event.eventTitle}
              </span>
              <span>{event.eventCityState}</span>
            </p>
          </LinkItem>
        ))}
      </ul>
    </div>
  );
}
