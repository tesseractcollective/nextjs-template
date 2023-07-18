import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: params?.pageSlug as string,
  });
  console.log("getServerSideProps", layout.page?.pageSlug);
  return {
    props: {
      layout,
    },
  };
};

export default function Page({ layout }: { layout: LayoutQuery }) {
  return (
    <>
      <h1>{layout.page?.pageSlug}</h1>
      {/* <Home layout={layout} />     */}
    </>
  );
}
