import { MetadataRoute } from "next";
import type {
  PagesSlugListFieldsFragment,
  BlogsSlugListFieldsFragment,
  AlbumsSlugListFieldsFragment,
  ProfilesSlugListFieldsFragment,
  EventsSlugListFieldsFragment,
  ProductsSlugListFieldsFragment,
} from "@/graphql/generated/graphql";
import { format } from "date-fns";

type Sitemap = MetadataRoute.Sitemap;

function formatDate(dateString: string): string {
  return format(new Date(dateString), "yyyy-MM-dd");
}

export function createSitemap(
  pages: PagesSlugListFieldsFragment[],
  blogs: BlogsSlugListFieldsFragment[],
  albums: AlbumsSlugListFieldsFragment[],
  events: EventsSlugListFieldsFragment[],
  profiles: ProfilesSlugListFieldsFragment[],
  products: ProductsSlugListFieldsFragment[]
): Sitemap {
  const sitemap: Sitemap = [];

  sitemap.push(
    ...pages.map((page) => ({
      url: `${process.env.SITE_URL}/${page.pageSlug}`,
      lastModified: formatDate(page.updatedAt),
    }))
  );
  sitemap.push(
    ...blogs.map((blog) => ({
      url: `${process.env.SITE_URL}/blog/${blog.blogSlug}`,
      lastModified: formatDate(blog.updatedAt),
    }))
  );
  sitemap.push(
    ...albums.map((album) => ({
      url: `${process.env.SITE_URL}/music/${album.albumSlug}`,
      lastModified: formatDate(album.updatedAt),
    }))
  );
  sitemap.push(
    ...events.map((event) => ({
      url: `${process.env.SITE_URL}/event/${event.eventSlug}`,
      lastModified: formatDate(event.updatedAt),
    }))
  );
  sitemap.push(
    ...profiles.map((profile) => ({
      url: `${process.env.SITE_URL}/${profile.profileType.toLowerCase()}/${
        profile.profileSlug
      }`,
      lastModified: formatDate(profile.updatedAt),
    }))
  );
  sitemap.push(
    ...products.map((product) => ({
      url: `${process.env.SITE_URL}/${product.productType.toLowerCase()}/${
        product.productSlug
      }`,
      lastModified: formatDate(product.updatedAt),
    }))
  );

  return sitemap;
}

export function createSitemapXml(sitemap: Sitemap): string {
  const urls = sitemap
      .map((item) => {
        return `<url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastModified}</lastmod>
        </url>`;
      });
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("")}
    </urlset>
  `;
}
