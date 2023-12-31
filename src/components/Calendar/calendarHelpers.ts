import moment from "moment";

export interface ShowDateKey {
  name: string;
  times: string[];
}

export interface LegendKey {
  name: string;
  shows: ShowDateKey[];
}

export interface Month {
  name: string;
  days: CalendarDate[];
}

export interface CalendarDate {
  date: string;
  weekday: number;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  events: Event[];
  legendKey: LegendKey;
}

export interface Event {
  date: string;
  time: string;
  name: string;
  kind: string;
  location: string;
  link: string;
}

export function createLegendKeyForEvents(events: Event[]): LegendKey {
  let date = "";
  for (let event of events) {
    if (!date) {
      date = event.date;
    }
    if (date !== event.date) {
      throw new Error("unable to create legend key for multiple dates");
    }
  }
  const sortedEvents = [...events];
  sortedEvents.sort((a, b) => a.time.localeCompare(b.time));
  const shows: { [key: string]: ShowDateKey } = {};

  sortedEvents.forEach((event) => {
    if (!shows[event.name]) {
      shows[event.name] = { name: event.name, times: [event.time] };
    }
    if (!shows[event.name].times.find((time) => time === event.time)) {
      shows[event.name].times.push(event.time);
    }
  });

  const keyName =
    Object.values(shows)
      .map((show) => `${show.name} ${show.times.join(", ")}`)
      .join(", ") || "No Shows";
  return {
    name: keyName,
    shows: Object.values(shows),
  };
}

export function createCalendarMonthsForEvents(
  events: Event[],
  createForNoEvents = false
): Month[] {
  const months: Month[] = [];
  let currentMonth = -1;

  if (createForNoEvents) {
    const start = moment(events[0].date);
    const end = moment(events[events.length - 1].date);

    currentMonth = start.month();
    let currentYear = start.year();
    while (currentMonth !== end.month() || currentYear !== end.year()) {
      const monthDate = moment({ month: currentMonth, year: currentYear });
      months.push(createCalendarMonth(monthDate, events));
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
    }
    months.push(createCalendarMonth(end, events));
  } else {
    events.forEach((event) => {
      const eventDate = moment(event.date);
      if (eventDate.month() !== currentMonth) {
        currentMonth = eventDate.month();
        months.push(createCalendarMonth(eventDate, events));
      }
    });
  }

  return months;
}

export function legendKeysForMonths(months: Month[]): LegendKey[] {
  const keys: { [key: string]: LegendKey } = {};
  months.forEach((month) => {
    month.days.forEach((day) => {
      keys[day.legendKey.name] = day.legendKey;
    });
  });
  return Object.values(keys);
}

export function createCalendarMonth(
  momentDate: moment.Moment,
  events: Event[]
): Month {
  const dates: CalendarDate[] = [];
  const from = moment({ year: momentDate.year(), month: momentDate.month() });

  const addDate = (momentDate: moment.Moment, isCurrentMonth?: boolean) => {
    const date = momentDate.format("YYYY-MM-DD");
    const eventsForDate = events.filter((event) => event.date === date);
    dates.push({
      date,
      weekday: momentDate.weekday(),
      events: eventsForDate,
      legendKey: createLegendKeyForEvents(eventsForDate),
      isCurrentMonth,
    });
  };

  for (
    let m = moment(from).subtract(from.weekday(), "days");
    m.weekday() < from.weekday();
    m.add(1, "day")
  ) {
    addDate(m);
  }

  const to = moment(from).add(1, "months");
  for (let m = moment(from); m.isBefore(to); m.add(1, "days")) {
    addDate(m, true);
  }

  if (to.weekday() !== 6) {
    for (let m = moment(to); m.weekday() !== 0; m.add(1, "day")) {
      addDate(m);
    }
  }

  return {
    name: from.format("MMMM Y"),
    days: dates,
  };
}
