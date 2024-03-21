/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Moment from "react-moment";
import moment from "moment";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import { useSearchParams } from "next/navigation";

interface EventsProps {
  events: EventFieldsFragment[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function EventArtistFilterSection({ events }: EventsProps) {
  const performerParam = useSearchParams();
  const linkPerformer = performerParam?.get("performer");
  const [selected, setSelected] = useState(events[0]?.eventPerformer || "");
  const uniqueMonths = Array.from(
    new Set(
      events.map((event) =>
        moment(event.eventStartDateTime).format("MMMM YYYY")
      )
    )
  );
  const [selectedMonth, setSelectedMonth] = useState(uniqueMonths[0] || "");
  useEffect(() => {
    if (linkPerformer) {
      setSelected(linkPerformer);
    }
  }, [linkPerformer]);

  const filteredArtistEvents =
    selected === ""
      ? events
          .filter(
            (event) =>
              moment(event.eventStartDateTime).format("MMMM YYYY") ===
              selectedMonth
          )
          .sort((a, b) =>
            moment(a.eventStartDateTime).diff(b.eventStartDateTime)
          )
      : events.filter(
          (event) =>
            event.eventPerformer === selected &&
            moment(event.eventStartDateTime).format("MMMM YYYY") ===
              selectedMonth
        );

  return (
    <div className="max-w-8xl w-full my-4 mx-auto">
      <div className="filter-box py-8 px-4 flex flex-row">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <div className="flex flex-col">
              <Listbox.Label className="block text-sm font-medium leading-6 text-text-color">
                Artists
              </Listbox.Label>
              <div className="relative mt-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-invert py-1.5 pl-3 pr-10 text-left text-text-color shadow-sm ring-1 ring-inset ring-bg focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 max-w-sm">
                  <span className="block truncate">
                    {selected || "All Artists"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-invert py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all-artists"
                      className={({ active }) =>
                        classNames(
                          active
                            ? "bg-bg-secondary text-white"
                            : "text-text-color",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value=""
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All Artists
                          </span>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-primary" : "text-text-color",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                    {events
                      .slice() // Create a shallow copy to avoid mutating the original array
                      .sort((a, b) =>
                        (a?.eventPerformer ?? "").localeCompare(
                          b?.eventPerformer ?? ""
                        )
                      )
                      .map((event) => (
                        <Listbox.Option
                          key={event.eventSlug}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-bg-secondary text-white"
                                : "text-text-color",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={event.eventPerformer}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {event.eventPerformer}
                              </span>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-primary" : "text-text-color",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
        </Listbox>

        <Listbox value={selectedMonth} onChange={setSelectedMonth}>
          {({ open }) => (
            <div className="flex flex-col">
              <Listbox.Label className="block text-sm font-medium leading-6 text-text-color">
                Months
              </Listbox.Label>
              <div className="relative mt-2">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-invert py-1.5 pl-3 pr-10 text-left text-text-color shadow-sm ring-1 ring-inset ring-bg focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 max-w-sm">
                  <span className="block truncate">
                    {selectedMonth || "All Months"}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-invert py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {uniqueMonths.map((month) => (
                      <Listbox.Option
                        key={month}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-bg-secondary text-white"
                              : "text-text-color",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={month}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {month}
                            </span>
                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-primary" : "text-text-color",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
        </Listbox>
      </div>
      <Fade>
        <div className="event-artist-filter-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-12xl mx-auto gap-8 px-4">
          {filteredArtistEvents.map((event) => (
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
                <div className="artist-filter-flyer-wrapper relative aspect-video max-h-[300px] object-cover h-[340px] overflow-hidden">
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
        </div>
      </Fade>
    </div>
  );
}
