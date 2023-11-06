import { GetStaticProps, GetStaticPaths } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import PageComponent from "@/components/PageComponent";
import {
  getDuttonEventsServer,
  getDuttonEventsClient,
} from "@/data/theDuttonsShowData";
import { Event } from "@/components/Calendar/calendarHelpers";
import { useState, useEffect } from "react";

interface PageProps {
  layout: LayoutQuery;
  events: Event[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the possible values for [pageSlug]
  const slugs = ["slug1", "slug2", "slug3"]; // Replace with your actual slug values
  const paths = slugs.map((slug) => ({ params: { pageSlug: slug } }));
  return { paths, fallback: false }; // You can adjust the 'fallback' option as needed
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
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

export default function Page({ layout, events }: PageProps) {
  const [latestEvents, setLatestEvents] = useState(events);

  useEffect(() => {
    console.log("useEffect fetch Start");
    if (typeof window !== "undefined") {
      // Only run this code on the client-side
      getDuttonEventsClient({ timeoutSeconds: 5 })
        .then((events) => {
          setLatestEvents(events);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return <PageComponent layout={layout} events={latestEvents} />;
}
