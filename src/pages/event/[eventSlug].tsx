import { sdkClient } from "@/lib/graphql-client";
import Event from "@/components/Event";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { EventPageQuery } from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/app/tailwind.css";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import ThemeColors from "@/styles/ThemeColors";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const eventPage: EventPageQuery = await sdkClient.eventPage({
    eventSlug: params?.eventSlug as string,
  });
  return {
    props: {
      eventPage,
    },
  };
};

export default function eventSlug({
  eventPage,
}: {
  eventPage: EventPageQuery;
}) {
  if (!eventPage.event || !eventPage.siteLibrary) return <></>;
  const { siteLibrary, navigations, blogs, event, events } = eventPage;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary} />
      <Nav
        siteLibrary={siteLibrary}
        navigation={navigations[0]}
        hideNav={false}
      />
      <Event event={event} siteLibrary={siteLibrary} events={events} />
      <Footer
        siteLibrary={siteLibrary}
        navigation={navigations[0]}
        hideFooter={false}
        blogs={blogs}
      />
    </>
  );
}
