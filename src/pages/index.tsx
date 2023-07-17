import { GetStaticProps, InferGetStaticPropsType } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Home from "@/components/page";

export const getStaticProps: GetStaticProps<{
  layout: LayoutQuery;
}> = async () => {
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: "home",
  });
  return { props: { layout } };
};

export default function HomePage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Home layout={layout} />
  );
}
