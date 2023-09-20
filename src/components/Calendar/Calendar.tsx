import { useState, useRef, useEffect } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
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
    <button
      key={day.date}
      onClick={() =>
        console.log(
          `Clicked: ${day.date} ${day.events.map(
            (event) => `${event.name} - ${event.location} at ${event.time}`
          )}`
        )
      }
      type="button"
      title={`Info 
      Date: ${day.date}
      ${day.events.map(
        (event) => `${event.name} - ${event.location} at ${event.time}`
      )}`}
      disabled={day.events.length === 0}
      className={classNames(
        "relative py-1.5 focus:z-10 transition-all group text-text-color hover:bg-primary focus:bg-primary hover:rounded-md focus:rounded-md",
        className
      )}
    >
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
