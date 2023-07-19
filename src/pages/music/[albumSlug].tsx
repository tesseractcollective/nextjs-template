
import { sdkClient } from "@/lib/graphql-client";
import Album from "@/components/Album";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { json } from "stream/consumers";
import { AlbumQuery, SiteLibraryQuery, NavigationQuery, NavigationFieldsFragment, SiteLibraryFieldsFragment, BlogsQuery, BlogFieldsFragment, AlbumFieldsFragment } from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import Blogs from "@/components/Blogs";


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const album: AlbumQuery = await sdkClient.album({
    albumSlug: params?.albumSlug as string,
  });
  const siteLibrary: SiteLibraryQuery = await sdkClient.siteLibrary();
  const navigations: NavigationQuery = await sdkClient.Navigation();
  const blogs: BlogsQuery = await sdkClient.blogs();
  console.log("getServerSideProps", album.album?.albumSlug);
  return {
    props: {
      siteLibrary,
      navigations,
      album,
      blogs
    },
  };
};

// , { navigations }: { navigations: NavigationFieldsFragment }, { blogs }: { blogs: BlogFieldsFragment[] }

export default function AlbumSlug({ album }: { album: AlbumFieldsFragment }, { siteLibrary }: { siteLibrary: SiteLibraryFieldsFragment }) {
  if(!siteLibrary) return <></>
  return (
    <>
      {/* {navigations[0] && siteLibrary && (
        <Nav
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          hideNav={false}
        />
      )} */}
      <Album album={album} siteLibrary={siteLibrary} />
      {/* {!!navigations[0] && siteLibrary && (
        <Footer
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          hideFooter={false}
          blogs={blogs}
        />
      )} */}
    </>
  );
}
