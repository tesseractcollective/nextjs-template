import React from "react";
import Moment from "react-moment";
import { Event } from "./bandsintowntypes";
import { Fade } from "react-awesome-reveal";

interface bandsInTownLayoutProps {
  events: Event[];
}

const BandsInTownLayoutWide: React.FC<bandsInTownLayoutProps> = ({
  events,
}: bandsInTownLayoutProps) => {
  return (
    <div className="text-content-full border-b border-text-color">
      {events.map((event) => (
        <div key={event.id} className="mx-auto w-full block">
          <div className="border-t border-text-color p-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="flex flex-col items-center justify-center lg:justify-start text-center lg:text-left relative z-2 gap-2">
              {event.datetime && (
                <div className="text-lg my-0 font-light py-0 parsed-mb-0 uppercase tracking-widest text-primary mx-auto w-full">
                  <Moment format="MMMM/DD/YYYY">{event.datetime}</Moment>
                </div>
              )}
              {event.venue && (
                <div className="text-4xl lg:text-6xl font-bold my-0 py-0 parsed-mb-0 mx-auto w-full uppercase text-text-color">
                  {event.venue.location}
                </div>
              )}
              {event.venue && (
                <div className="body-parsed-text text-lg my-0 parsed-mb-0 opacity-80 mx-auto w-full text-text-color">
                  {event.venue.name}
                </div>
              )}
            </div>
            <a
              href={event.offers[0]?.url}
              target="_blank"
              className="text-bg bg-text-color py-2 px-6 transition-all hover:bg-primary"
            >
              TICKETS
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BandsInTownLayoutWide;
