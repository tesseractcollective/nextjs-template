"use client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import Whatsapp from "@/components/Whatsapp";
import PageHeader from "@/components/PageHeader";
import Popup from "@/components/Popup";
import LayoutBlockSections from "@/components/LayoutBlockSections";
import { Event } from "@/components/Calendar/calendarHelpers";
import Page404 from "@/components/Page404";
import Loader from "@/components/elements/Loader";
import PagePassword from "./PagePassword";
import React from "react";
import FixedSideLink from "./elements/FixedSideLink";
import MouseFollower from "./elements/MouseFollower";
// import AgeVerification from "./elements/AgeVerification";

interface PageProps {
  layout: LayoutQuery;
  events?: Event[];
}

export default function LayoutBlocks({ layout, events }: PageProps) {
  if (!layout.page?.pageSlug) return <Page404 layout={layout} />;
  const { siteLibrary, page, navigations, blogs } = layout;
  if (!siteLibrary) return <></>;

  return (
    <div className="relative layout-blocks-wrapper">
      {/* {page?.contentPageJson?.ageVerification && <AgeVerification />} */}
      {siteLibrary.siteLibraryJson?.mouseFollower && <MouseFollower />}
      {!!page?.contentPageJson?.loader && siteLibrary.logo?.url && (
        <Loader icon={siteLibrary.logo.url} />
      )}
      {page?.pagePassword && siteLibrary.logo?.url && (
        <PagePassword
          accessPassword={page.pagePassword}
          logo={siteLibrary.logo?.url}
        />
      )}

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
          pageCallToAction={page?.pageCallToAction || undefined}
          pageHeaderWrapperCssClassProp={
            page?.contentPageJson?.headerClass || undefined
          }
        />
      )}
      <div>
        <LayoutBlockSections layout={layout} eventsData={events} />
        {!!page?.whatsAppContactNumberFloatingButton && (
          <Whatsapp
            contactNumber={page.whatsAppContactNumberFloatingButton}
            isSpanish={siteLibrary?.isSpanish || false}
            metaDomain={siteLibrary?.metaDomain || ""}
          />
        )}
      </div>
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
      {page?.contentPageJson?.fixedSideLink && (
        <FixedSideLink fixedSideLink={page.contentPageJson.fixedSideLink} />
      )}
    </div>
  );
}
