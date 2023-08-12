import { sdkClient } from "@/lib/graphql-client";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { BlogPageQuery } from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import "@/app/tailwind.css";
import ThemeColors from "@/styles/ThemeColors";
import Blog from "@/components/Blog";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const blogPage: BlogPageQuery = await sdkClient.blogPage({
    blogSlug: params?.blogSlug as string,
  });
  return {
    props: {
      blogPage,
    },
  };
};

export default function BlogSlug({ blogPage }: { blogPage: BlogPageQuery }) {
  if (!blogPage.blog || !blogPage.siteLibrary) return <></>;
  const { siteLibrary, navigations, blogs, blog } = blogPage;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary} />
      <Nav
        siteLibrary={siteLibrary}
        navigation={navigations[0]}
        hideNav={false}
      />
      <Blog blog={blog} siteLibrary={siteLibrary} />
      <Footer
        siteLibrary={siteLibrary}
        navigation={navigations[0]}
        hideFooter={false}
        blogs={blogs}
      />
    </>
  );
}
