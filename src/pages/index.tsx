import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import PageComponent from "@/components/PageComponent";

export const getServerSideProps: GetServerSideProps = async () => {
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: "home",
  });
  console.log("getServerSideProps", layout.page?.pageSlug);
  return {
    props: {
      layout,
    },
  };
};

export default function Page({ layout }: { layout: LayoutQuery }) {
  return <PageComponent layout={layout} />;
}
