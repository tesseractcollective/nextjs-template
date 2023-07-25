import { sdkClient } from "@/lib/graphql-client";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import {
  SiteLibraryQuery,
  NavigationQuery,
  ProfileQuery,
  // ProfilesQuery,
 BlogsQuery,
} from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import "@/app/tailwind.css";
import ThemeColors from "@/styles/ThemeColors";
import Profile from "@/components/Profile";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const profile: ProfileQuery = await sdkClient.profile({
    profileSlug: params?.profileSlug as string,
  });
  const siteLibrary: SiteLibraryQuery = await sdkClient.siteLibrary();
  const navigations: NavigationQuery = await sdkClient.Navigation();
  const profiles: ProfileQuery = await sdkClient.profiles();
  const blogs: BlogsQuery = await sdkClient.blogs();
  return {
    props: {
      siteLibrary,
      navigations,
      profile,
      blogs,
      profiles
    },
  };
};

interface ProfilePageProps {
  profile: ProfileQuery;
  siteLibrary: SiteLibraryQuery;
  profiles: ProfileQuery;
  navigations: NavigationQuery;
  blogs: BlogsQuery;
}

export default function ProfileSlug({
  profile,
  siteLibrary,
  // profiles,
  navigations,
  blogs
}: ProfilePageProps) {
  if (!profile.profile || !siteLibrary.siteLibrary) return <></>;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary.siteLibrary} />
      <Nav
        siteLibrary={siteLibrary.siteLibrary}
        navigation={navigations.navigations[0]}
        hideNav={false}
      />
      {/* <Profile profile={profile?.profile} profiles={profiles} siteLibrary={siteLibrary?.siteLibrary} /> */}
      <Profile profile={profile?.profile} siteLibrary={siteLibrary?.siteLibrary} />
      <Footer
        siteLibrary={siteLibrary.siteLibrary}
        navigation={navigations.navigations[0]}
        hideFooter={false}
        blogs={blogs.blogs}
      />
    </>
  );
}
