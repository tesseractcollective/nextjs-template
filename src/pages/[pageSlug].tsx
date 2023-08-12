"use client";
import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import PageComponent from "@/components/PageComponent";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: params?.pageSlug as string,
  });
  return {
    props: {
      layout,
    },
  };
};

export default function Page({ layout }: { layout: LayoutQuery }) {
  return <PageComponent layout={layout} />;
}
