"use client";
import { GetStaticProps } from "next";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import dynamic from "next/dynamic";

export const getStaticProps: GetStaticProps = async () => {
  const { sdkClient } = await import("@/lib/graphql-client");
  const layout = await sdkClient.layout({ pageSlug: "home" });
  return {
    props: { layout },
  };
};

const PageComponent = dynamic(() => import("@/components/PageComponent"));

interface PageProps {
  layout: LayoutQuery;
}

const Page = ({ layout }: PageProps) => {
  return <PageComponent layout={layout} />;
};

export default Page;
