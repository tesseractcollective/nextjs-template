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

  return {
    props: {
      layout,
    },
  };
};

export default function Page({ layout }: PageProps) {
  const [latestEvents, setLatestEvents] = useState<Event[]>([]);
  const isDuttons = layout.siteLibrary?.siteId === "duttons";

  useEffect(() => {
    if (isDuttons && typeof window !== "undefined") {
      getDuttonEventsClient({ timeoutSeconds: 5 })
        .then((events) => {
          setLatestEvents(events);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isDuttons]);

  return <PageComponent layout={layout} events={latestEvents} />;
}
