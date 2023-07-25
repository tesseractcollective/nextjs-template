import { sdkClient } from "@/lib/graphql-client";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import {
  SiteLibraryQuery,
  NavigationQuery,
  BlogsQuery,
  BlogQuery
} from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import "@/app/tailwind.css";
import ThemeColors from "@/styles/ThemeColors";
import Blog from "@/components/Blog";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const blog: BlogQuery = await sdkClient.blog({
    blogSlug: params?.blogSlug as string,
  });
  const siteLibrary: SiteLibraryQuery = await sdkClient.siteLibrary();
  const navigations: NavigationQuery = await sdkClient.Navigation();
  const blogs: BlogsQuery = await sdkClient.blogs();
  return {
    props: {
      siteLibrary,
      navigations,
      blog,
      blogs,
    },
  };
};

interface BlogPageProps {
  blog: BlogQuery;
  siteLibrary: SiteLibraryQuery;
  blogs: BlogsQuery;
  navigations: NavigationQuery;
}

export default function BlogSlug({
  blog,
  siteLibrary,
  blogs,
  navigations,
}: BlogPageProps) {
  if (!blog.blog || !siteLibrary.siteLibrary) return <></>;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary.siteLibrary} />
      <Nav
        siteLibrary={siteLibrary.siteLibrary}
        navigation={navigations.navigations[0]}
        hideNav={false}
      />
      <Blog blog={blog?.blog} siteLibrary={siteLibrary?.siteLibrary} />
      <Footer
        siteLibrary={siteLibrary.siteLibrary}
        navigation={navigations.navigations[0]}
        hideFooter={false}
        blogs={blogs.blogs}
      />
    </>
  );
}
