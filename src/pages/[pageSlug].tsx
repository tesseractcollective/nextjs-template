"use client";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await sdkClient.pagesSlugList();
  const slugs = result.pages.map(item => item.pageSlug ?? "").filter(slug => slug != "home");
  return {
    paths: slugs.map(slug => {
      return {
        params: {
          pageSlug: slug
        }
      }
    }) ?? [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.pageSlug as string;
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: slug.split("/").join("-"),
  });
  return {
    props: {
      layout,
    },
  };
};

export default function Page({ layout }: PageProps) {
  const [latestEvents, setLatestEvents] = useState<Event[]>([]);
  const isDuttons = layout?.siteLibrary?.siteId === "duttons";

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
