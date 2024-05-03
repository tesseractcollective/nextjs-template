/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import EventArtistFilterSection from "@/components/EventSections/EventArtistFilterSection";
import EventSliderSection from "@/components/EventSections/EventSliderSection";
import EventFullScreenSection from "@/components/EventSections/EventFullScreenSection";
import EventGridSection from "@/components/EventSections/EventGridSection";

interface EventsProps {
  events: EventFieldsFragment[];
  eventDisplayLayout?: string;
}

export default function Events({ events, eventDisplayLayout }: EventsProps) {
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

  // console.log(filteredEvents);
  // console.log("events", events.length);
  // console.log("filteredEvents", sortedEvents.length);

  if (eventDisplayLayout === "fullscreen") {
    return <EventFullScreenSection events={sortedEvents} />;
  }
  if (eventDisplayLayout === "slider") {
    return <EventSliderSection events={sortedEvents} />;
  }
  if (eventDisplayLayout === "artistFilter") {
    return <EventArtistFilterSection events={sortedEvents} />;
  }
  return <EventGridSection events={sortedEvents} />;
}
