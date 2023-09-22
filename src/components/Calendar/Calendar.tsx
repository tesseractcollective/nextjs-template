import { Fragment, useState, useRef, useEffect } from "react";
import {
  CalendarDate,
  Event,
  LegendKey,
  createCalendarMonthsForEvents,
  legendKeysForMonths,
} from "./calendarHelpers";
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
  faArrowUpRightFromSquare,
  faXmark,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ReactGA from "react-ga4";
import Moment from "react-moment";
import Link from "next/link";

export interface CalendarProps {
  events: Event[];
  createMonthsForNoEvents: boolean;
}

// interface CalendarMonthComponentProps {
//   months: [{ [key: string]: string }];
//   month: { [key: string]: string };
//   monthIdx: number;
//   createForNoEvents: boolean;
// }
interface CalendarDayComponentProps {
  day: CalendarDate;
  legendKeyClasses: { [key: string]: string };
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// function CalendarMonthComponent(props: CalendarMonthComponentProps) {
//   const { months, month, monthIdx } = props;
//   return (
//     <section
//       key={monthIdx}
//       className={classNames(
//         monthIdx === months.length - 1 && "hidden md:block",
//         "text-center calendar-block h-full flex flex-col ring-1 ring-text-color rounded m-4"
//       )}
//     >
//       <h2 className="text-md font-semibold text-text-color mt-0 mb-0 uppercase block py-2">
//         {`${month.name}`}
//       </h2>
//       <div className="grid grid-cols-7 text-xs leading-6 text-text-color">
//         <div>M</div>
//         <div>T</div>
//         <div>W</div>
//         <div>T</div>
//         <div>F</div>
//         <div>S</div>
//         <div>S</div>
//       </div>
//       <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-bg-secondary text-md shadow max-h-max auto-rows-max">
//         {month.days.map((day) => (
//           <CalendarDayComponent
//             key={day.date}
//             day={day}
//             legendKeyClasses={legendKeyClasses}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

function CalendarDayComponent(props: CalendarDayComponentProps) {
  const { day, legendKeyClasses } = props;
  const [open, setOpen] = useState<boolean>(false);
  let className: string;
  if (!day.isCurrentMonth) {
    className = "!bg-bg";
  } else if (day.legendKey.name === "No Shows") {
    className =
      "bg-bg-secondary cursor-default focus:not-sr-only hover:!bg-bg-secondary focus:!bg-bg-secondary";
  } else {
    className = legendKeyClasses[day.legendKey.name] ?? "bg-primary-fade";
  }
  return (
    <div
      key={day.date}
      className={classNames(
        "relative py-1.5 focus:z-10 transition-all group text-text-color hover:bg-primary focus:bg-primary hover:rounded-md focus:rounded-md",
        className
      )}
    >
      <button
        onClick={() => {
          setOpen(true);
          ReactGA.event({
            category: "Link",
            action: "Open Popup",
            label: "Open Popup",
          });
        }}
        type="button"
        title={`Info 
        Date: ${day.date}
        ${day.events.map(
          (event) => `${event.name} - ${event.location} at ${event.time}`
        )}`}
        disabled={day.events.length === 0}
        // className={classNames(
        //   "focus:z-10 transition-all group text-text-color hover:bg-primary focus:bg-primary hover:rounded-md focus:rounded-md",
        //   className
        // )}
      >
        <span className="absolute inset-x-0 -top-px bottom-0" />
        <time
          dateTime={day.date}
          className={classNames(
            "relative py-1.5 focus:z-10 transition-all ",
            day.isToday && "bg-primary font-semibold text-white",
            "mx-auto flex h-7 w-7 items-center justify-center rounded-full relative"
          )}
        >
          <span className="date-digit">
            {day.date.split("-").pop()?.replace(/^0/, "")}
          </span>
        </time>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#00000032] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto w-full">
            <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mb-8 max-w-xl sm:p-6 w-full bg-invert flex-col flex">
                  {!!day.date && (
                    <h2 className="text-center mx-auto text-2xl text-text-color font-bold uppercase">
                      <Moment format="MMM/dddd DD/YYYY">{day.date}</Moment>
                    </h2>
                  )}
                  {/* Event List */}
                  <ul role="list" className="divide-y divide-bg-secondary my-8">
                    {day.events.map((event) => (
                      <li
                        key={event.name}
                        className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-primary group rounded cursor-pointer ring-[#00000033] ring-1 hover:ring-dark my-2"
                      >
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-bg-secondary">
                              <a href={`#/${event.name}`}>
                                <span className="absolute inset-x-0 -top-px bottom-0" />
                                {event.name}
                              </a>
                            </p>
                            <p className="text-sm leading-6 text-bg-secondary">
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {event.location}
                            </p>
                            <p className="text-sm leading-6 text-bg-secondary">
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {event.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-4">
                          {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                              {event.location}
                            </p>
                          </div> */}
                          <div className="flex flex-col">
                            <p className="flex flex-row items-center text-text-color opacity-90 rounded cursor-pointer px-2 md:px-4 transition-all text-base py-1 md:py-2 text-center mx-0 group-hover:text-primary group-hover:opacity-100 group-focus:text-primary group-focus:opacity-100">
                              <span>Buy Tickets</span>
                              <span>
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare as IconProp}
                                  className="fa-fw my-0 py-0 ml-2 h-4 w-4"
                                />
                              </span>
                            </p>
                            <p className="text-[8px] text-center">
                              Sold by completeticketing.co
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Promo Cards */}
                  <div
                    className={classNames(
                      "group relative bg-white p-6 ring-[#00000000] ring-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-bg-secondary rounded px-4 hover:bg-secondary focus:bg-secondary transition-all"
                    )}
                  >
                    <div>
                      <span
                        className={classNames("inline-flex rounded-lg p-3")}
                      >
                        <FontAwesomeIcon
                          icon={faUsers as IconProp}
                          className="fa-fw my-0 py-0 h-4 w-4"
                        />
                      </span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        <Link
                          href="/group-sales"
                          className="focus:outline-none"
                        >
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          Group Sales
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Buying tickets for 20+? Click here to checkout group
                        sales!
                      </p>
                    </div>
                    <span
                      className="pointer-events-none absolute right-6 top-6 text-dark group-hover:text-bg-secondary"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </span>
                  </div>
                  {/* Close Menu */}
                  <button
                    type="button"
                    className="m-2 inline-flex items-center justify-center rounded-md p-2 text-text-color outline transition-all outline-text-color hover:outline-primary mx-auto max-w-max uppercase text-xs"
                    onClick={() => {
                      setOpen(false);
                      ReactGA.event({
                        category: "Link",
                        action: "Close Popup",
                        label: "Close Popup",
                      });
                    }}
                  >
                    <span>Close menu</span>
                    <FontAwesomeIcon
                      icon={faXmark as IconProp}
                      className="fa-fw my-0 py-0 ml-2 h-4 w-4"
                    />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
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
  const legendKeys = legendKeysForMonths(months).filter(
    (key) => key.name !== "No Shows"
  );
  const legendKeyClassesOptions = [
    "bg-primary-fade",
    "bg-secondary",
    "bg-tertiary",
    "bg-[#be860c]",
    "bg-[#BF27FF]",
    "bg-[#14dcff]",
    "bg-[#40d500]",
    "bg-[#a68aed]",
    "bg-[#ba6161]",
  ];
  const legendKeyClasses: { [key: string]: string } = {};
  legendKeys.forEach((key, index) => {
    const className = legendKeyClassesOptions[index] ?? "bg-secondary";
    console.log(`className for key ${key.name}: ${className}`);
    legendKeyClasses[key.name] = className;
  });

  const swiperRef = useRef<SwiperType>();

  const currentYear = months.filter((month, index) =>
    month.name.includes(`${new Date().getFullYear()}`)
  );

  const EventHeader = events[0].name;

  useEffect(() => {
    if (!!currentYear && currentYear.length === 0) {
      setCalendarDisplayTypeGrid(false);
    }
  }, [currentYear]);

  return (
    <div className="relative max-w-8xl mx-auto w-full">
      {!!EventHeader && (
        <h2 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mb-4 mt-16">
          {EventHeader}
        </h2>
      )}
      <div className="legend-wrapper flex flex-col md:flex-row items-center md:items-center justify-between max-w-8xl mx-auto w-full px-8 gap-y-6">
        <div className="legend gap-2 grid grid-cols-2 md:grid-cols-3">
          {legendKeys.map((key) => {
            const className = legendKeyClasses[key.name] ?? "bg-primary-fade";
            return (
              <div
                key={key.name}
                className="legend-item flex flex-row items-center justify-start"
              >
                <span
                  className={classNames(
                    "h-4 md:h-6 w-4 md:w-6 mb-1 rounded-full flex",
                    className
                  )}
                ></span>
                <span className="text-text-color text-xs ml-2 text-left max-w-[10rem] flex">
                  {key.name}
                </span>
              </div>
            );
          })}
        </div>
        <button
          title="Toggle calendar from Month to Year view"
          onClick={() => setCalendarDisplayTypeGrid(!calendarDisplayTypeGrid)}
          className="flex flex-row items-center text-text-color opacity-90 rounded cursor-pointer ring-1 ring-text-color px-2 md:px-4 transition-all text-base py-1 md:py-2 text-center mx-0 hover:text-primary hover:ring-primary hover:opacity-100 focus:text-primary focus:ring-primary focus:opacity-100"
          type="button"
        >
          <span>{calendarDisplayTypeGrid ? "Month View" : "Year View"}</span>
          <span>
            {calendarDisplayTypeGrid ? (
              <FontAwesomeIcon
                icon={faCalendar as IconProp}
                className="fa-fw my-0 py-0 ml-2 h-4 w-4"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCalendarDays as IconProp}
                className="fa-fw my-0 py-0 ml-2 h-4 w-4"
              />
            )}
          </span>
        </button>
      </div>
      {calendarDisplayTypeGrid === true && (
        <>
          <div className="block relative">
            <div className="relative max-w-8xl mx-auto grid grid-cols-1 gap-x-14 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-y-8 transition-all">
              {(monthLimit ? currentYear : months).map((month, monthIdx) => (
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
                    {month.days.map((day) => (
                      <CalendarDayComponent
                        key={day.date}
                        day={day}
                        legendKeyClasses={legendKeyClasses}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <div className="block mt-12 mb-4">
            <button
              onClick={() => setMonthLimit(!monthLimit)}
              className="flex flex-row items-center text-text-color opacity-90 rounded cursor-pointer ring-1 ring-text-color px-2 md:px-4 transition-all text-base py-1 md:py-2 text-center hover:text-primary hover:ring-primary hover:opacity-100 focus:text-primary focus:ring-primary focus:opacity-100 mx-auto"
              type="button"
            >
              <span>{monthLimit ? "See All Dates" : "See Less Dates"}</span>
              <span>
                <FontAwesomeIcon
                  icon={faChevronDown as IconProp}
                  className={`fa-fw h-4 w-4 transition-all my-0 py-0 ml-2 ${
                    monthLimit ? "rotate-0" : "rotate-180"
                  }`}
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
              </div>
              <div className="max-w-8xl w-full calendar-slider-wrapper mx-auto py-4 px-4">
                <div className="flex flex-row items-center justify-center max-w-max mx-auto">
                  <button
                    type="button"
                    className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-80 hover:opacity-100 text-text-color mr-4 hover:text-primary focus:text-primary"
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
                    className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-80 hover:opacity-100 text-text-color hover:text-primary focus:text-primary"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight as IconProp}
                      className="fa-fw my-0 text-xl h-4 w-4"
                    />
                    <span className="sr-only">Move Calendar Rotation Next</span>
                  </button>
                </div>
                <Swiper
                  className="!pb-10"
                  grabCursor
                  modules={[Navigation, Pagination]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  pagination={{ clickable: true }}
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
                          {month.days.map((day) => (
                            <CalendarDayComponent
                              key={day.date}
                              day={day}
                              legendKeyClasses={legendKeyClasses}
                            />
                          ))}
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
