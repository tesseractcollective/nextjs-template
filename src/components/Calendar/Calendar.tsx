import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Event, createCalendarMonthsForEvents } from "./calendarHelpers";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faChevronDown,
  faCalendar,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
export interface CalendarProps {
  events: Event[];
  createMonthsForNoEvents: boolean;
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar(props: CalendarProps) {
  const [monthLimit, setMonthLimit] = useState(true);
  const [calendarDisplayTypeGrid, setCalendarDisplayTypeGrid] = useState(true);
  console.log("calendarDisplayTypeGrid", calendarDisplayTypeGrid);
  let events = props.events ?? [];
  const months = createCalendarMonthsForEvents(
    events,
    props.createMonthsForNoEvents
  );
  const swiperRef = useRef<SwiperType>();
  // const bransonDuttons2pm = "TheDutto01 - 2:00pm";
  // const bransonDuttons8pm = "TheDutto02 - 8:00pm";
  // const whereJesus01 = "WhereJes01 - 10:00am";
  // const whereJesus02 = "WhereJes02 - 2:00pm";
  // const whereJesus03 = "WhereJes03 - 7:30pm";
  // const arizonaDuttons01 = "DuttonsA03 - 7pm Arizona";
  // const arizonaDuttons02 = "DuttonsA04 - 2pm Arizona";

  // const bransonEvents = events.filter((event) =>
  //   event.kind.includes("TheDutton0")
  // );
  // const jesusEvents = events.filter((event) =>
  //   event.kind.includes("WhereJes0")
  // );
  // const mesaEvents = events.filter((event) => event.kind.includes("DuttonsA0"));

  // // let filteredEvents: Event[];
  // switch (props.showType) {
  //   case "branson":
  //     events = bransonEvents;
  //     break;
  //   case "jesus":
  //     events = jesusEvents;
  //     break;
  //   case "mesa":
  //     events = mesaEvents;
  //     break;
  //   default:
  //     events = events;
  //     break;
  // }

  console.log(
    "events",
    events.map((event) => event)
  );

  const allMonths = months;
  const nextThreeMonths = months.filter((month, index) => index < 3);
  console.log("allMonths", allMonths);
  console.log("months", months);
  console.log("nextThreeMonths", nextThreeMonths);

  return (
    <div className="relative max-w-8xl mx-auto w-full">
      <div className="flex flex-row items-center justify-between max-w-8xl mx-auto w-full px-8">
        <div className="legend flex items-center justify-center gap-x-8">
          <div className="legend-item flex flex-col items-center justify-center my-4 mx-2">
            <span className="h-6 w-6 bg-primary-fade mb-1 rounded-full"></span>
            <span className="text-center text-text-color text-sm">1 Show</span>
          </div>
          <div className="legend-item flex flex-col items-center justify-center my-4 mx-2">
            <span className="h-6 w-6 bg-secondary mb-1 rounded-full"></span>
            <span className="text-center text-text-color text-sm">2 Shows</span>
          </div>
          <div className="legend-item flex flex-col items-center justify-center my-4 mx-2">
            <span className="h-6 w-6 bg-tertiary mb-1 rounded-full"></span>
            <span className="text-center text-text-color text-sm">
              3+ Shows
            </span>
          </div>
        </div>
        <button
          onClick={() => setCalendarDisplayTypeGrid(!calendarDisplayTypeGrid)}
          className="flex flex-row items-center font-bold text-text-overlay opacity-90  hover:text-text-color hover:opacity-100 rounded border-1 border-primary cursor-pointer bg-secondary px-2 md:px-4 transition-all text-base py-1 md:py-2 text-center mx-0"
          type="button"
        >
          <span>{calendarDisplayTypeGrid ? "Slider" : "Grid"}</span>
          <span>
            {calendarDisplayTypeGrid ? (
              <FontAwesomeIcon
                icon={faCalendar as IconProp}
                className="fa-fw my-0 text-xl h-4 w-4"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCalendarDays as IconProp}
                className="fa-fw my-0 text-xl h-4 w-4"
              />
            )}
          </span>
        </button>
      </div>
      {calendarDisplayTypeGrid === true && (
        <>
          <div className="block relative">
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
              {(monthLimit ? nextThreeMonths : allMonths).map(
                (month, monthIdx) => (
                  <section
                    key={monthIdx}
                    className={classNames(
                      monthIdx === months.length - 1 && "hidden md:block",
                      "text-center calendar-block h-full flex flex-col ring-1 ring-text-color rounded m-4"
                    )}
                  >
                    <h2 className="text-md font-semibold text-text-color mt-0 mb-0 uppercase block py-2">
                      {`${month.name}`}
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
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-bg-secondary text-md shadow max-h-max auto-rows-max">
                      {month.days.map((day, dayIdx) => {
                        const events = day.events;

                        return (
                          <button
                            key={day.date}
                            type="button"
                            disabled={events.length > 0 ? false : true}
                            className={classNames(
                              "relative py-1.5 focus:z-10 transition-all group text-text-color",
                              day.isCurrentMonth ? "bg-bg-secondary" : "!bg-bg",
                              dayIdx === 0 && "rounded-tl-lg",
                              dayIdx === 6 && "rounded-tr-lg",
                              dayIdx === month.days.length - 7 &&
                                "rounded-bl-lg",
                              dayIdx === month.days.length - 1 &&
                                "rounded-br-lg",
                              events.length === 1
                                ? "bg-primary-fade hover:bg-primary cursor-pointer"
                                : "cursor-default focus:not-sr-only",
                              events.length === 2
                                ? "bg-secondary hover:bg-primary cursor-pointer"
                                : "cursor-default focus:not-sr-only",
                              events.length >= 3
                                ? "bg-tertiary hover:bg-primary cursor-pointer"
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
                        );
                      })}
                    </div>
                  </section>
                )
              )}
            </div>
          </div>
          <div className="block mt-12 mb-4">
            <button
              onClick={() => setMonthLimit(!monthLimit)}
              className="flex items-center font-bold text-text-overlay opacity-90  hover:text-text-color hover:opacity-100 rounded border-1 border-primary cursor-pointer bg-secondary px-2 md:px-4 transition-all text-base py-1 md:py-2 mx-auto text-center my-8"
              type="button"
            >
              <span>{monthLimit ? "See All Dates" : "See Less Dates"}</span>
              <span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-all ${
                    monthLimit ? "rotate-0" : "rotate-180"
                  }`}
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
        </>
      )}
      {calendarDisplayTypeGrid !== true && (
        <>
          <div className="block relative">
            <div className="relative max-w-8xl mx-auto flex flex-col">
              <div className="flex flex-row w-full items-center justify-between px-2">
                {/* <h3 className="text-2xl md:text-4xl opacity-100 uppercase text-left">
                  {(!!blogHeader && blogHeader.includes("s")
                    ? blogHeader
                    : `${blogHeader}s`) || "Blogs"}
                </h3> */}
                <div className="flex flex-row items-center justify-center max-w-max mx-auto">
                  <button
                    type="button"
                    className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color mr-4"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft as IconProp}
                      className="fa-fw my-0 text-xl h-4 w-4"
                    />
                    <span className="sr-only">Move Calendar Rotation Back</span>
                  </button>
                  <button
                    type="button"
                    className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-text-color"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight as IconProp}
                      className="fa-fw my-0 text-xl h-4 w-4"
                    />
                    <span className="sr-only">Move Calendar Rotation Next</span>
                  </button>
                </div>
              </div>
              <div className="max-w-8xl blog-slider-wrapper mx-auto py-4 px-4">
                <Swiper
                  className="!pb-10"
                  grabCursor
                  modules={[Navigation, Pagination]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  pagination
                  autoplay
                  slidesPerView={1}
                  spaceBetween={30}
                >
                  {months.map((month, monthIdx) => (
                    <SwiperSlide key={monthIdx}>
                      <section
                        className={classNames(
                          monthIdx === months.length - 1 && "hidden md:block",
                          "text-center calendar-block h-full flex flex-col ring-1 ring-text-color rounded m-4"
                        )}
                      >
                        <h2 className="text-md font-semibold text-text-color mt-0 mb-0 uppercase block py-2">
                          {`${month.name}`}
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
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-bg-secondary text-md shadow max-h-max auto-rows-max">
                          {month.days.map((day, dayIdx) => {
                            const events = day.events;

                            return (
                              <button
                                key={day.date}
                                type="button"
                                disabled={events.length > 0 ? false : true}
                                className={classNames(
                                  "relative py-1.5 focus:z-10 transition-all group text-text-color",
                                  day.isCurrentMonth
                                    ? "bg-bg-secondary"
                                    : "!bg-bg",
                                  dayIdx === 0 && "rounded-tl-lg",
                                  dayIdx === 6 && "rounded-tr-lg",
                                  dayIdx === month.days.length - 7 &&
                                    "rounded-bl-lg",
                                  dayIdx === month.days.length - 1 &&
                                    "rounded-br-lg",
                                  events.length === 1
                                    ? "bg-primary-fade hover:bg-primary cursor-pointer"
                                    : "cursor-default focus:not-sr-only",
                                  events.length === 2
                                    ? "bg-secondary hover:bg-primary cursor-pointer"
                                    : "cursor-default focus:not-sr-only",
                                  events.length >= 3
                                    ? "bg-tertiary hover:bg-primary cursor-pointer"
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
                                    {day.date
                                      .split("-")
                                      .pop()
                                      ?.replace(/^0/, "")}
                                  </span>
                                  <span className="absolute -right-1 top-0">
                                    {events.length > 0 ? " *" : ""}
                                  </span>
                                </time>
                              </button>
                            );
                          })}
                        </div>
                      </section>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
