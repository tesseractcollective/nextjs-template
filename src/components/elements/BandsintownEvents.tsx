import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import Image from "next/image";
import BandsInTownEventsMapBox from "@/components/elements/BandsInTownEventsMapBox";

type Event = {
  id: string;
  url: string;
  artist: {
    name: string;
    image_url: string;
  };
  lineup: string[];
  datetime: string;
  venue: {
    name: string;
    location: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    region: string;
    street_address: string;
  };
  offers: [
    {
      type: string;
      url: string;
      status: string;
    }
  ];
};

type EventListProps = {
  isSpanish?: boolean;
  mapKey: string;
  icon: string;
  bandsintownKey: string;
  artistNames: string[];
};

const BandsintownEvents: React.FC<EventListProps> = ({
  bandsintownKey,
  artistNames,
  isSpanish,
  mapKey,
  icon,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents: Event[] = [];
        for (const artistName of artistNames) {
          const scrubbedArtistName = removeAccents(artistName);
          const response = await fetch(
            `https://rest.bandsintown.com/artists/${encodeURIComponent(
              scrubbedArtistName
            )}/events?app_id=${bandsintownKey}`
          );
          const data: Event[] = await response.json();
          // Check if data is empty or not an array
          if (Array.isArray(data) && data.length > 0) {
            allEvents.push(...data);
          } else {
            console.log(`No events found for artist: ${artistName}`);
          }
        }
        // Remove duplicates based on offer URL
        const uniqueEvents = allEvents.filter(
          (event, index, self) =>
            index ===
            self.findIndex((e) => e.offers[0]?.url === event.offers[0]?.url)
        );
        setEvents(uniqueEvents);
        setLoading(false); // Set loading state to false after events are fetched
      } catch (error) {
        setLoading(false); // Set loading state to false in case of error
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [bandsintownKey, artistNames]);

  const removeAccents = (artistName: string) =>
    artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const dateSortedEvents = events
    .filter((event) => new Date(event.datetime) >= new Date()) // Filter out past events
    .sort(
      (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    );

  return (
    <div className="max-w-8xl w-full mx-auto relative z-10 px-8 p-4">
      {loading ? (
        <div className="flex items-center justify-center h-60vh bg-bg-secondary rounded-xl">
          <p className="text-center mx-auto">Loading...</p>
        </div>
      ) : Array.isArray(dateSortedEvents) && dateSortedEvents.length > 0 ? (
        <>
          <BandsInTownEventsMapBox
            eventMapData={dateSortedEvents}
            mapKey={mapKey}
            icon={icon}
          />
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto py-8 gap-y-4">
            {dateSortedEvents.map((event) => (
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
                  {event?.lineup[0] && (
                    <span className="line-clamp-1 m-0 p-0 max-w-[34ch] font-bold">
                      {event.lineup[0]}
                    </span>
                  )}
                  <span className="line-clamp-1 m-0 p-0 max-w-[34ch] font-bold">
                    {event.venue.name}
                  </span>
                  <span>{event.venue.location}</span>
                </p>
              </a>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center">
          {isSpanish ? "No hay eventos próximos" : "No upcoming events"}
        </p>
      )}
    </div>
  );
};

export default BandsintownEvents;
