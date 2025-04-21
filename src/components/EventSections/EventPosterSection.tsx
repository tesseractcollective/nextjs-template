import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";

interface CalendarEventsProps {
  events: EventFieldsFragment[];
  month?: number;
  year?: number;
}

export default function EventPosterSection({
  events,
  month: initialMonth,
  year: initialYear,
}: CalendarEventsProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    initialMonth ?? today.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    initialYear ?? today.getFullYear()
  );
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "quarter">("month");

  // Get unique sorted artists
  const uniqueArtists = Array.from(
    new Set(events.map((e) => e.eventPerformer).filter(Boolean))
  ).sort() as string[];

  // Filtered events based on selected artist
  const filteredEvents = selectedArtist
    ? events.filter((e) => e.eventPerformer === selectedArtist)
    : events;

  // Date calculation helpers
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Navigation handlers
  const adjustMonth = (step: number) => {
    const newMonth = currentMonth + step;
    if (newMonth < 0) {
      setCurrentYear((y) => y - 1);
      setCurrentMonth(12 + newMonth);
    } else if (newMonth > 11) {
      setCurrentYear((y) => y + 1);
      setCurrentMonth(newMonth % 12);
    } else {
      setCurrentMonth(newMonth);
    }
  };

  const getQuarterMonths = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const date = new Date(currentYear, currentMonth + i);
      return { month: date.getMonth(), year: date.getFullYear() };
    });
  };

  // Calendar cell renderer
  const renderCalendar = (month: number, year: number, isCompact = false) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const groupedEvents = filteredEvents.reduce(
      (acc, event) => {
        const eventDate = new Date(event.eventStartDateTime || "");
        if (
          eventDate.getMonth() === month &&
          eventDate.getFullYear() === year
        ) {
          const day = eventDate.getDate();
          acc[day] = [...(acc[day] || []), event];
        }
        return acc;
      },
      {} as Record<number, EventFieldsFragment[]>
    );

    const cellSize = isCompact
      ? "min-h-16 md:min-h-20 text-xs"
      : "min-h-24 md:min-h-32 lg:min-h-40 text-sm md:text-base";

    return (
      <div className="bg-bg-secondary rounded-lg overflow-hidden shadow-xl">
        {!isCompact && (
          <div className="grid grid-cols-7 gap-1 bg-primary p-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold text-bg">
                {day}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-7 gap-px">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className={`${cellSize} bg-bg-secondary/40`}
            />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = groupedEvents[day] || [];
            const hasMultipleArtists =
              new Set(dayEvents.map((e) => e.eventPerformer)).size > 1;

            return (
              <div
                key={day}
                className={`relative ${cellSize} ${
                  dayEvents.length
                    ? "cursor-pointer bg-tertiary"
                    : "bg-bg-secondary/40"
                }`}
              >
                <div className="absolute top-1 left-1 bg-primary text-bg px-2 rounded-full z-10">
                  {day}
                </div>

                {dayEvents.length > 0 && (
                  <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-px">
                    {dayEvents.slice(0, 4).map((event) => (
                      <Link
                        key={event.eventSlug}
                        href={
                          event.eventTicketLinkDestination ||
                          event.newTabEventDestination ||
                          `/event/${event.eventSlug}`
                        }
                        target="_blank"
                        className="relative group"
                      >
                        {event.eventFlyer?.url ? (
                          <>
                            <Image
                              src={event.eventFlyer.url}
                              alt={event.eventTitle || "Event"}
                              fill
                              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            {hasMultipleArtists && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg via-bg/80 to-transparent p-1">
                                <p className="text-xs font-bold truncate">
                                  {event.eventPerformer}
                                </p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="bg-secondary h-full flex items-center justify-center p-1">
                            <p className="text-xs text-center line-clamp-3">
                              {event.eventPerformer && (
                                <span className="font-bold">
                                  {event.eventPerformer}:{" "}
                                </span>
                              )}
                              {event.eventTitle}
                            </p>
                          </div>
                        )}
                      </Link>
                    ))}
                    {dayEvents.length > 4 && (
                      <div className="absolute bottom-1 right-1 bg-primary text-bg text-xs font-bold px-1.5 rounded-full">
                        +{dayEvents.length - 4}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-4 lg:p-6 bg-bg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => adjustMonth(viewMode === "quarter" ? -3 : -1)}
            className="bg-primary hover:bg-secondary text-bg px-3 py-1.5 rounded transition-colors"
          >
            &lt;
          </button>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
            <span className="text-secondary">{monthNames[currentMonth]}</span>
            <span className="mx-2 text-primary">{currentYear}</span>
          </h2>

          <button
            onClick={() => adjustMonth(viewMode === "quarter" ? 3 : 1)}
            className="bg-primary hover:bg-secondary text-bg px-3 py-1.5 rounded transition-colors"
          >
            &gt;
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <select
            className="bg-bg-secondary border-2 border-primary rounded-lg px-4 py-2 text-sm md:text-base"
            value={selectedArtist || ""}
            onChange={(e) => setSelectedArtist(e.target.value || null)}
          >
            <option value="">All Artists</option>
            {uniqueArtists.map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("month")}
              className={`flex-1 px-4 py-2 rounded-lg ${
                viewMode === "month"
                  ? "bg-primary text-bg"
                  : "bg-bg-secondary text-primary"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setViewMode("quarter")}
              className={`flex-1 px-4 py-2 rounded-lg ${
                viewMode === "quarter"
                  ? "bg-primary text-bg"
                  : "bg-bg-secondary text-primary"
              }`}
            >
              Quarter
            </button>
          </div>
        </div>
      </div>

      {viewMode === "month" ? (
        renderCalendar(currentMonth, currentYear)
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {getQuarterMonths().map(({ month, year }) => (
            <div key={`${year}-${month}`}>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {monthNames[month]} {year}
              </h3>
              {renderCalendar(month, year, true)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
