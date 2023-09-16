import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Event, createCalendarMonthsForEvents } from "./calendarHelpers";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export interface CalendarProps {
  events: Event[];
  createMonthsForNoEvents: boolean;
  showType: string;
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar(props: CalendarProps) {
  const [monthLimit, setMonthLimit] = useState(true);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  let events = props.events ?? [];
  const months = createCalendarMonthsForEvents(
    events,
    props.createMonthsForNoEvents
  );
  // const bransonDuttons2pm = "TheDutto01 - 2:00pm";
  // const bransonDuttons8pm = "TheDutto02 - 8:00pm";
  // const whereJesus01 = "WhereJes01 - 10:00am";
  // const whereJesus02 = "WhereJes02 - 2:00pm";
  // const whereJesus03 = "WhereJes03 - 7:30pm";
  // const arizonaDuttons01 = "DuttonsA03 - 7pm Arizona";
  // const arizonaDuttons02 = "DuttonsA04 - 2pm Arizona";

  const bransonEvents = events.filter((event) =>
    event.kind.includes("TheDutton0")
  );
  const jesusEvents = events.filter((event) =>
    event.kind.includes("WhereJes0")
  );
  const mesaEvents = events.filter((event) => event.kind.includes("DuttonsA0"));

  // let filteredEvents: Event[];
  switch (props.showType) {
    case "branson":
      events = bransonEvents;
      break;
    case "jesus":
      events = jesusEvents;
      break;
    case "mesa":
      events = mesaEvents;
      break;
    default:
      events = events;
      break;
  }

  console.log(
    "events",
    events.map((event) => event.kind)
  );

  const nextThreeMonths = months.splice(0, 3);
  const allMonths = months;
  return (
    <>
      <div className="block relative">
        <div className="legend flex items-center justify-center gap-x-8">
          <div className="legend-item flex flex-col items-center justify-center my-4 mx-2">
            <span className="h-8 w-8 bg-primary-fade mb-1"></span>
            <span className="text-center text-text-color text-sm">1 Show</span>
          </div>
          <div className="legend-item flex flex-col items-center justify-center my-4 mx-2">
            <span className="h-8 w-8 bg-tertiary mb-1"></span>
            <span className="text-center text-text-color text-sm">2 Shows</span>
          </div>
        </div>
        <div className="relative max-w-8xl mx-auto grid grid-cols-1 gap-x-14 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-y-8 transition-all">
          {/* <button
          type="button"
          className="absolute -left-1.5 -top-1 flex items-center justify-center p-1.5 text-text-color hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="absolute -right-1.5 -top-1 flex items-center justify-center p-1.5 text-text-color hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button> */}
          {(monthLimit ? nextThreeMonths : allMonths).map((month, monthIdx) => (
            <section
              key={monthIdx}
              className={classNames(
                monthIdx === months.length - 1 && "hidden md:block",
                "text-center calendar-block h-full flex flex-col ring-1 ring-text-color rounded"
              )}
            >
              <h2 className="text-md font-semibold text-text-color mt-0 mb-0 uppercase block py-2">
                {month.name}
              </h2>
              <div className="grid grid-cols-7 text-xs leading-6 text-text-color">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-bg-secondary text-md shadow h-full">
                {month.days.map((day, dayIdx) => {
                  const events = day.events;

                  return (
                    <>
                      <button
                        key={day.date}
                        type="button"
                        disabled={events.length > 0 ? false : true}
                        onClick={() => setOpen(true)}
                        className={classNames(
                          "relative py-1.5 focus:z-10 transition-all group text-text-color",
                          day.isCurrentMonth ? "bg-bg-secondary" : "!bg-bg",
                          dayIdx === 0 && "rounded-tl-lg",
                          dayIdx === 6 && "rounded-tr-lg",
                          dayIdx === month.days.length - 7 && "rounded-bl-lg",
                          dayIdx === month.days.length - 1 && "rounded-br-lg",
                          events.length > 0
                            ? "bg-primary-fade hover:bg-primary cursor-pointer"
                            : "cursor-default focus:not-sr-only",
                          events.length >= 2
                            ? "bg-tertiary over:bg-primary cursor-pointer"
                            : "cursor-default focus:not-sr-only"
                        )}
                      >
                        <time
                          dateTime={day.date}
                          className={classNames(
                            // events.length > 0
                            //   ? "bg-secondary hover:bg-primary cursor-pointer"
                            //   : "cursor-default !bg-bg-secondary",
                            "relative py-1.5 focus:z-10 transition-all ",
                            day.isToday &&
                              "bg-primary font-semibold text-white",
                            "mx-auto flex h-7 w-7 items-center justify-center rounded-full relative"
                          )}
                        >
                          <span className="date-digit">
                            {day.date.split("-").pop()?.replace(/^0/, "")}
                          </span>
                          <span className="absolute -right-1 top-0">
                            {events.length > 0 ? " *" : ""}
                          </span>
                        </time>
                      </button>
                      <Transition.Root show={open} as={Fragment}>
                        <Dialog
                          as="div"
                          className="relative z-10"
                          initialFocus={cancelButtonRef}
                          onClose={setOpen}
                        >
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="fixed inset-0 bg-dark bg-opacity-75 transition-opacity" />
                          </Transition.Child>

                          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-text-color px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                  <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                      <Dialog.Title
                                        as="h3"
                                        className="text-base font-semibold leading-6 text-dark"
                                      >
                                        <span className="date-digit text-dark">
                                          {day.date}
                                        </span>
                                      </Dialog.Title>
                                      <div className="mt-2">
                                        {events.map((event) => (
                                          <p
                                            className="text-sm text-dark"
                                            key={event.date}
                                          >
                                            {`${event.name} - ${event.time}`}
                                          </p>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                      type="button"
                                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                                      onClick={() => setOpen(false)}
                                    >
                                      Buy
                                    </button>
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                      onClick={() => setOpen(false)}
                                      ref={cancelButtonRef}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition.Root>
                    </>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className="block mt-12 mb-4">
        <button
          onClick={() => setMonthLimit(!monthLimit)}
          className="flex items-center font-bold text-text-overlay opacity-90  hover:text-text-color hover:opacity-100 rounded border-1 border-primary cursor-pointer bg-primary px-2 md:px-4 transition-all text-base py-1 md:py-2 mx-auto text-center my-8"
          type="button"
        >
          {monthLimit ? "See All Dates" : "See Less Dates"}
        </button>
      </div>
    </>
  );
}
