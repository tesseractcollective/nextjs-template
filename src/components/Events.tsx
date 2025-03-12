/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import EventArtistFilterSection from "@/components/EventSections/EventArtistFilterSection";
import EventSliderSection from "@/components/EventSections/EventSliderSection";
import EventFullScreenSection from "@/components/EventSections/EventFullScreenSection";
import EventGridSection from "@/components/EventSections/EventGridSection";
import EventCardSection from "@/components/EventSections/EventCardSection";
import EventListSection from "@/components/EventSections/EventListSection";

interface EventsProps {
  events: EventFieldsFragment[];
  eventDisplayLayout?: string;
}

export default function Events({ events, eventDisplayLayout }: EventsProps) {
  // Get today's date in PST, set to the start of the day (00:00:00)
  const getTodayPST = () => {
    const today = new Date();
    const pstOffset = -8 * 60; // PST is UTC-8
    const pstTime =
      today.getTime() + (today.getTimezoneOffset() + pstOffset) * 60 * 1000;
    return new Date(pstTime).setHours(0, 0, 0, 0); // Set to start of the day in PST
  };

  const todayPST = getTodayPST();

  const filteredEvents = events.filter((event) => {
    const eventDateTime = new Date(event.eventStartDateTime).getTime(); // Convert event time to milliseconds
    return eventDateTime >= todayPST; // Compare event time with today's start of day in PST
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.eventStartDateTime).getTime();
    const dateB = new Date(b.eventStartDateTime).getTime();
    return dateA - dateB;
  });

  if (eventDisplayLayout === "card") {
    return <EventCardSection events={sortedEvents} />;
  }
  if (eventDisplayLayout === "fullscreen") {
    return <EventFullScreenSection events={sortedEvents} />;
  }
  if (eventDisplayLayout === "slider") {
    return <EventSliderSection events={sortedEvents} />;
  }
  if (eventDisplayLayout === "artistFilter") {
    return <EventArtistFilterSection events={sortedEvents} />;
  }
  if (eventDisplayLayout === "list") {
    return <EventListSection events={sortedEvents} />;
  }
  return <EventGridSection events={sortedEvents} />;
}
