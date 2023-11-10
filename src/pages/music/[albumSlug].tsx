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
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Zoom } from "react-awesome-reveal";

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
      {!!siteLibrary?.analyticsId && (
        <GoogleAnalytics analyticsId={siteLibrary.analyticsId} />
      )}
      <Nav
        siteLibrary={siteLibrary}
        navigations={navigations}
        hideNav={false}
      />
      <Zoom triggerOnce className="relative">
        <Album album={album} siteLibrary={siteLibrary} albums={albums} />
        <Footer
          siteLibrary={siteLibrary}
          navigations={navigations}
          hideFooter={false}
          blogs={blogs}
        />
      </Zoom>
    </>
  );
}
