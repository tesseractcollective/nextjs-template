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
import { Fade } from "react-awesome-reveal";

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
    <div>
      <ThemeColors siteLibrary={siteLibrary} />
      {!!siteLibrary?.analyticsId && (
        <GoogleAnalytics analyticsId={siteLibrary.analyticsId} />
      )}
      <div className="relative layout-blocks-wrapper profile-page-site">
        <Nav
          siteLibrary={siteLibrary}
          navigations={navigations}
          hideNav={true}
        />
        <Fade triggerOnce>
          <Profile
            profile={profile}
            siteLibrary={siteLibrary}
            contacts={contacts}
            profiles={profiles}
            profilePageLayoutStyleProp="site"
          />
        </Fade>
        <div className="border-secondary border-t">
          <Footer
            siteLibrary={siteLibrary}
            navigations={navigations}
            hideFooter={false}
            blogs={blogs}
          />
        </div>
      </div>
    </div>
  );
}
