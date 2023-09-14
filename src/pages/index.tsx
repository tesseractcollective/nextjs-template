"use client";
import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import PageComponent from "@/components/PageComponent";

export const getServerSideProps: GetServerSideProps = async () => {
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: "home",
  });
  return {
    props: {
      layout,
    },
  };
};

export default function Page({ layout }: { layout: LayoutQuery }) {
  // if (!layout)
  //   return (
  //     <div className="h-screen flex items-center justify-center w-full bg-[#d50d0d]">
  //       <h1 className="text-[#fff]">Loading...</h1>
  //     </div>
  //   );
  return <PageComponent layout={layout} />;
}
