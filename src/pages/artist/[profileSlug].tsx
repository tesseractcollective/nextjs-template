import { sdkClient } from "@/lib/graphql-client";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { ProfilePageQuery } from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import "@/app/tailwind.css";
import ThemeColors from "@/styles/ThemeColors";
import Profile from "@/components/Profile";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const profilePage: ProfilePageQuery = await sdkClient.profilePage({
    profileSlug: params?.profileSlug as string,
  });
  return {
    props: {
      profilePage,
    },
  };
};

export default function ProfileSlug({
  profilePage,
}: {
  profilePage: ProfilePageQuery;
}) {
  if (!profilePage.profile || !profilePage.siteLibrary) return <></>;
  const { profile, siteLibrary, navigations, blogs, contacts, profiles } =
    profilePage;
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
      <Profile
        profile={profile}
        siteLibrary={siteLibrary}
        contacts={contacts}
        profiles={profiles}
      />
      <Footer
        siteLibrary={siteLibrary}
        navigations={navigations}
        hideFooter={false}
        blogs={blogs}
      />
    </>
  );
}
