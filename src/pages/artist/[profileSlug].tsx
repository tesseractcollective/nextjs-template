import { sdkClient } from "@/lib/graphql-client";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { ProfilePageQuery } from "@/graphql/generated/graphql";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import "@/app/tailwind.css";
import ThemeColors from "@/styles/ThemeColors";
import Profile from "@/components/Profile";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Fade } from "react-awesome-reveal";

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await sdkClient.pagesSlugList();
  const slugs = result.profiles.map(item => item.profileSlug ?? "");
  return {
    paths: slugs.map(slug => {
      return {
        params: {
          profileSlug: slug
        }
      }
    }) ?? [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    <div>
      <ThemeColors siteLibrary={siteLibrary} />
      {!!siteLibrary?.analyticsId && (
        <GoogleAnalytics analyticsId={siteLibrary.analyticsId} />
      )}
      <div className="relative layout-blocks-wrapper profile-page">
        <Nav
          siteLibrary={siteLibrary}
          navigations={navigations}
          hideNav={false}
        />
        <Fade triggerOnce>
          <Profile
            profile={profile}
            siteLibrary={siteLibrary}
            contacts={contacts}
            profiles={profiles}
          />
        </Fade>
        <Footer
          siteLibrary={siteLibrary}
          navigations={navigations}
          hideFooter={false}
          blogs={blogs}
        />
      </div>
    </div>
  );
}
