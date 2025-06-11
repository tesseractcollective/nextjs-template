import React from "react";
import Moment from "react-moment";
import { Event } from "./bandsintowntypes";

interface bandsInTownLayoutProps {
  events: Event[];
}

const BandsInTownLayoutDefault: React.FC<bandsInTownLayoutProps> = ({
  events,
}: bandsInTownLayoutProps) => {
  return (
    <div className="max-w-8xl w-full mx-auto relative z-10 px-8 p-4">
      {Array.isArray(events) && events.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto py-8 gap-y-4">
          {events.map((event) => (
            <a
              href={event.offers[0]?.url}
              target="_blank"
              className="w-full flex flex-row no-underline relative mx-auto bg-primary items-center justify-start rounded-md hover:bg-secondary focus-visible:bg-secondary transition-all group cursor-pointer"
              key={event.id}
            >
              <div className="date-format-badge bg-text-color text-bg group-hover:text-secondary rounded-full left-4 min-w-[60px] min-h-[60px] flex flex-col items-center justify-center absolute cursor-pointer">
                <span className="date-format-badge-month">
                  <Moment format="MMM">{event.datetime}</Moment>
                </span>
                <span className="date-format-badge-date">
                  <Moment format="DD">{event.datetime}</Moment>
                </span>
              </div>
              <p className="uppercase text-left py-4 px-0 text-bg group-hover:text-dark m-0 text-xs relative flex flex-col ml-[90px] cursor-pointer">
                <span className="line-clamp-1 m-0 p-0 max-w-[34ch] font-bold">
                  {event.venue.name}
                </span>
                <span>{event.venue.location}</span>
              </p>
            </a>
          ))}
        </ul>
      ) : (
        <p className="text-center">No upcoming events</p>
      )}
    </div>
  );
};

export default BandsInTownLayoutDefault;
