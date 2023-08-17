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
  res.setHeader("Content-Type", "text/xml");
  res.write(
    getSitemap(
      pagesSlugList.pages,
      pagesSlugList.blogs,
      pagesSlugList.albums,
      pagesSlugList.events,
      pagesSlugList.profiles,
      pagesSlugList.products
    )
  );
  res.end();
  return {
    props: {},
  };
};

function getSitemap(
  pages: PagesSlugListFieldsFragment[],
  blogs: BlogsSlugListFieldsFragment[],
  albums: AlbumsSlugListFieldsFragment[],
  events: EventsSlugListFieldsFragment[],
  profiles: ProfilesSlugListFieldsFragment[],
  products: ProductsSlugListFieldsFragment[]
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `<url>
          <loc>${process.env.SITE_URL}/${page.pageSlug}</loc>
          <lastmod>${format(new Date(page.updatedAt), "yyyy-MM-dd")}</lastmod>
        </url>`
      )
      .join("")}
    ${blogs
      .map(
        (blog) => `<url>
          <loc>${process.env.SITE_URL}/blog/${blog.blogSlug}</loc>
          <lastmod>${format(new Date(blog.updatedAt), "yyyy-MM-dd")}</lastmod>
        </url>`
      )
      .join("")}
    ${albums
      .map(
        (album) => `<url>
          <loc>${process.env.SITE_URL}/music/${album.albumSlug}</loc>
          <lastmod>${format(new Date(album.updatedAt), "yyyy-MM-dd")}</lastmod>
        </url>`
      )
      .join("")}
    ${events
      .map(
        (event) => `<url>
          <loc>${process.env.SITE_URL}/event/${event.eventSlug}</loc>
          <lastmod>${format(new Date(event.updatedAt), "yyyy-MM-dd")}</lastmod>
        </url>`
      )
      .join("")}
    ${profiles
      .map(
        (profile) => `<url>
          <loc>${process.env.SITE_URL}/${profile.profileType.toLowerCase()}/${
          profile.profileSlug
        }</loc>
          <lastmod>${format(
            new Date(profile.updatedAt),
            "yyyy-MM-dd"
          )}</lastmod>
        </url>`
      )
      .join("")}
    ${products
      .map(
        (product) => `<url>
          <loc>${process.env.SITE_URL}/${product.productType.toLowerCase()}/${
          product.productSlug
        }</loc>
          <lastmod>${format(
            new Date(product.updatedAt),
            "yyyy-MM-dd"
          )}</lastmod>
        </url>`
      )
      .join("")}
    </urlset>
  `;
}
