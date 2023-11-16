"use client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import Whatsapp from "@/components/Whatsapp";
import PageHeader from "@/components/PageHeader";
import Popup from "@/components/Popup";
import LayoutBlockSections from "@/components/LayoutBlockSections";
import { Event } from "@/components/Calendar/calendarHelpers";
import Link from "next/link";

interface PageProps {
  layout: LayoutQuery;
  events?: Event[];
}

export default function LayoutBlocks({ layout, events }: PageProps) {
  if (!layout.page?.pageSlug)
    return (
      <div className="relative">
        {layout.navigations && layout.siteLibrary && (
          <Nav
            siteLibrary={layout.siteLibrary}
            navigations={layout.navigations}
            hideNav={layout.page?.hideNav || undefined}
            pageNavigationSelection={
              layout.page?.pageNavigationSelection || undefined
            }
          />
        )}
        <div className="h-100vh flex items-center justify-center">
          <div className="body-parsed-text text-center items-center justify-center flex-co">
            <h1 className="text-text-color">404 - Page Not Found</h1>
            <Link href="/" className="text-link">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  const { siteLibrary, page, navigations, blogs } = layout;
  if (!siteLibrary) return <></>;

  return (
    <div className="relative">
      {navigations && siteLibrary && (
        <Nav
          siteLibrary={siteLibrary}
          navigations={navigations}
          hideNav={page?.hideNav || undefined}
          pageNavigationSelection={page?.pageNavigationSelection || undefined}
        />
      )}
      {!!page && (
        <PageHeader
          pageHeaderImageProp={page?.heroImage?.url || undefined}
          pageHeaderTitleProp={page?.title || undefined}
          pageHeaderSubtitleProp={page?.subtitle || undefined}
          pageWidthStyle={page?.pageWidthStyle || undefined}
          hideHeader={page?.hideHeader || undefined}
        />
      )}
      <LayoutBlockSections layout={layout} eventsData={events} />
      {page?.whatsAppContactNumberFloatingButton && siteLibrary?.isSpanish && (
        <Whatsapp
          contactNumber={page.whatsAppContactNumberFloatingButton}
          isSpanish={siteLibrary.isSpanish}
        />
      )}
      {navigations && siteLibrary && (
        <Footer
          siteLibrary={siteLibrary}
          navigations={navigations}
          blogs={blogs}
          hideFooter={page?.hideFooter || undefined}
          pageNavigationSelection={page?.pageNavigationSelection || undefined}
        />
      )}
      {page?.popup && <Popup layout={layout} />}
    </div>
  );
}
