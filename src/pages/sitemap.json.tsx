import { GetServerSideProps } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { PagesSlugListQuery } from "@/graphql/generated/graphql";
import { createSitemap } from "@/lib/sitemapHelpers";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ res }) => {
  const pagesSlugList: PagesSlugListQuery = await sdkClient.pagesSlugList();
  const sitemap = createSitemap(
    pagesSlugList.pages,
    pagesSlugList.blogs,
    pagesSlugList.albums,
    pagesSlugList.events,
    pagesSlugList.profiles,
    pagesSlugList.products
  );
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(sitemap, null, 2));
  res.end();
  return {
    props: {
      sitemap,
    },
  };
};
