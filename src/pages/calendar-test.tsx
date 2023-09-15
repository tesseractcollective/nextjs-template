import { GetServerSideProps } from "next";

import Calendar from "@/components/Calendar/Calendar";
import {
  getDuttonEventsServer,
  getDuttonEventsClient,
} from "@/data/theDuttonsShowData";
import { Event } from "@/components/Calendar/calendarHelpers";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const events = await getDuttonEventsServer({ timeoutSeconds: 0.5 });
  return {
    props: {
      events,
    },
  };
};

export default function CalendarPage({ events }: { events: Event[] }) {
  const [latestEvents, setLatestEvents] = useState(events);

  useEffect(() => {
    console.log('useEffect fetch');
    getDuttonEventsClient({ timeoutSeconds: 5 })
      .then((events) => {
        setLatestEvents(events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Calendar events={latestEvents} createMonthsForNoEvents={true} />;
}
