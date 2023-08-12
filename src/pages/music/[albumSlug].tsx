import { sdkClient } from "@/lib/graphql-client";
import Album from "@/components/Album";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { AlbumPageQuery } from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/app/tailwind.css";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import ThemeColors from "@/styles/ThemeColors";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const albumPage: AlbumPageQuery = await sdkClient.albumPage({
    albumSlug: params?.albumSlug as string,
  });
  return {
    props: {
      albumPage,
    },
  };
};

export default function AlbumSlug({
  albumPage,
}: {
  albumPage: AlbumPageQuery;
}) {
  if (!albumPage.album || !albumPage.siteLibrary) return <></>;
  const { siteLibrary, navigations, blogs, album, albums } = albumPage;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary} />
      <Nav
        siteLibrary={siteLibrary}
        navigation={navigations[0]}
        hideNav={false}
      />
      <Album album={album} siteLibrary={siteLibrary} albums={albums} />
      <Footer
        siteLibrary={siteLibrary}
        navigation={navigations[0]}
        hideFooter={false}
        blogs={blogs}
      />
    </>
  );
}
