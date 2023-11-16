"use client";
import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import PageComponent from "@/components/PageComponent";
import {
  getDuttonEventsServer,
  getDuttonEventsClient,
} from "@/data/theDuttonsShowData";
import { useEffect, useState } from "react";
import { Event } from "@/components/Calendar/calendarHelpers";
interface PageProps {
  layout: LayoutQuery;
  events: Event[];
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pageSlug = params?.pageSlug as string;
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: pageSlug.split("/").join("-"),
  });
  const events = await getDuttonEventsServer({ timeoutSeconds: 0.5 });
  return {
    props: {
      layout,
      events,
    },
  };
};

export default function Page({ layout }: PageProps) {
  const [latestEvents, setLatestEvents] = useState<Event[]>([]); // Set default value to an empty array
  const isDuttons = layout.siteLibrary?.siteLibraryJson.siteID === "theduttons";

  useEffect(() => {
    console.log("useEffect fetch Start");
    if (isDuttons && typeof window !== "undefined") {
      // Only run this code on the client-side when isDuttons is true
      getDuttonEventsClient({ timeoutSeconds: 5 })
        .then((events) => {
          setLatestEvents(events);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isDuttons]); // Trigger useEffect when isDuttons changes

  return <PageComponent layout={layout} events={latestEvents} />;
}
