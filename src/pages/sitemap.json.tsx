import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type {
  PagesSlugListQuery,
  PagesSlugListFieldsFragment,
  BlogsSlugListFieldsFragment,
  AlbumsSlugListFieldsFragment,
  ProfilesSlugListFieldsFragment,
  EventsSlugListFieldsFragment,
  ProductsSlugListFieldsFragment,
} from "@/graphql/generated/graphql";
import { format } from "date-fns";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ res }) => {
  const pagesSlugList: PagesSlugListQuery = await sdkClient.pagesSlugList();
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(pagesSlugList, null, 2));
  res.end();
  return {
    props: {},
  };
};
