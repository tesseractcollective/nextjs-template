import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Moment from "react-moment";
import Image from "next/image";
import BandsInTownEventsMapBox from "@/components/elements/BandsInTownEventsMapBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import { Variants, motion } from "framer-motion";

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
  profiles: ProfileFieldsFragment[];
};

const BandsintownEvents: React.FC<EventListProps> = ({
  bandsintownKey,
  artistNames,
  isSpanish,
  mapKey,
  icon,
  profiles,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [selectedArtist, setSelectedArtist] = useState("");
  // console.log("artistNames", artistNames);
  // console.log("bandsintownKey", bandsintownKey);

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

  // Filter events based on whether the selected artist's name is included in the event's lineup array
  const dateSortedEvents = events
    .filter((event) => {
      if (selectedArtist !== "") {
        // Check if the selected artist's name is included in the event's lineup array
        return event.lineup.includes(selectedArtist);
      }
      return true; // Include all events if no artist is selected
    })
    .filter((event) => new Date(event.datetime) >= new Date()) // Filter out past events
    .sort(
      (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    );

  // console.log("dateSortedEvents", dateSortedEvents);
  // console.log("selectedArtist", selectedArtist);

  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  } as Variants;

  return (
    <div className="max-w-8xl w-full mx-auto relative z-10 px-8 py-4">
      <div className="flex flex-row gap-x-4 flex-wrap items-start justify-center mx-auto w-full">
        {!!profiles &&
          profiles.map((profile) => (
            <button
              key={profile.profileSlug}
              className="text-text-color md:flex-1 md:min-w-[280px]"
              type="button"
              onClick={() => profile.name && setSelectedArtist(profile.name)}
            >
              <div className="animate-col-width mx-auto md:mx-0 w-full">
                <div className="overflow-hidden h-full rounded profile-card w-full relative">
                  {!!profile?.avatarImage?.url && (
                    <div className="p-0 m-0 w-full relative">
                      <Image
                        src={profile?.avatarImage?.url}
                        alt={(profile.name && profile.name) || ""}
                        width={0}
                        height={0}
                        sizes="100%"
                        className={`w-[120px] h-[120px] object-cover mx-auto rounded-[100%] border-2 ${
                          selectedArtist === profile.name
                            ? "border-primary"
                            : "border-secondary"
                        }`}
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-center justify-center text-center p-4 relative z-10 overflow-hidden">
                    <Fade triggerOnce direction="left">
                      {!!profile.name && (
                        <h3
                          className={`text-xs uppercase font-bold animate-[tracking_1s_ease-in] mt-0 text-center max-w-[120px] ${
                            selectedArtist === profile.name
                              ? "text-primary"
                              : "text-text-color"
                          }`}
                        >
                          {profile.name}
                        </h3>
                      )}
                    </Fade>
                  </div>
                </div>
              </div>
            </button>
          ))}
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-60vh bg-bg-secondary rounded-xl">
          <p className="text-center mx-auto">
            <motion.div
              transition={{
                staggerChildren: 0.25,
              }}
              initial="initial"
              animate="animate"
              className="flex gap-1"
            >
              <motion.div variants={variants} className="h-12 w-2 bg-primary" />
              <motion.div variants={variants} className="h-12 w-2 bg-primary" />
              <motion.div variants={variants} className="h-12 w-2 bg-primary" />
              <motion.div variants={variants} className="h-12 w-2 bg-primary" />
              <motion.div variants={variants} className="h-12 w-2 bg-primary" />
            </motion.div>
          </p>
        </div>
      ) : Array.isArray(dateSortedEvents) && dateSortedEvents.length > 0 ? (
        <>
          <BandsInTownEventsMapBox
            eventMapData={dateSortedEvents}
            mapKey={mapKey}
            icon={icon}
            profiles={profiles}
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
        <div className="py-16 flex flex-col items-center justify-center gap-y-4">
          <p className="text-center flex flex-col text-2xl">
            {selectedArtist && (
              <span className="font-bold">{selectedArtist}</span>
            )}
            {isSpanish ? "No hay eventos próximos" : "No upcoming events"}
          </p>
          <button
            className="mx-auto text-center text-text-color border border-text-color max-w-max p-4 rounded"
            type="button"
            onClick={() => setSelectedArtist("")}
          >
            All Artists
          </button>
        </div>
      )}
    </div>
  );
};

export default BandsintownEvents;
