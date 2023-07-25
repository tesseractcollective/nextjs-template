import { sdkClient } from "@/lib/graphql-client";
import Album from "@/components/Album";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import {
  AlbumQuery,
  SiteLibraryQuery,
  NavigationQuery,
  BlogsQuery,
} from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/app/tailwind.css";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import ThemeColors from "@/styles/ThemeColors";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const album: AlbumQuery = await sdkClient.album({
    albumSlug: params?.albumSlug as string,
  });
  const siteLibrary: SiteLibraryQuery = await sdkClient.siteLibrary();
  const navigations: NavigationQuery = await sdkClient.Navigation();
  const blogs: BlogsQuery = await sdkClient.blogs();
  return {
    props: {
      siteLibrary,
      navigations,
      album,
      blogs,
    },
  };
};

interface AlbumPageProps {
  album: AlbumQuery;
  siteLibrary: SiteLibraryQuery;
  blogs: BlogsQuery;
  navigations: NavigationQuery;
}

export default function AlbumSlug({
  album,
  siteLibrary,
  blogs,
  navigations,
}: AlbumPageProps) {
  if (!album.album || !siteLibrary.siteLibrary) return <></>;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary.siteLibrary} />
      <Nav
        siteLibrary={siteLibrary.siteLibrary}
        navigation={navigations.navigations[0]}
        hideNav={false}
      />
      <Album album={album?.album} siteLibrary={siteLibrary?.siteLibrary} />
      <Footer
        siteLibrary={siteLibrary.siteLibrary}
        navigation={navigations.navigations[0]}
        hideFooter={false}
        blogs={blogs.blogs}
      />
    </>
  );
}
