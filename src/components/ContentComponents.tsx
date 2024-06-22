"use client";
import type {
  AlbumFieldsFragment,
  BlogFieldsFragment,
  ContactFieldsFragment,
  EventFieldsFragment,
  LogoTableFieldsFragment,
  ProductFieldsFragment,
  ProfileFieldsFragment,
  SiteLibraryFieldsFragment,
  TestimonialFieldsFragment,
} from "@/graphql/generated/graphql";
import LogoTable from "@/components/LogoTable";
import Blogs from "@/components/Blogs";
import ContentSocialMediaLinks from "@/components/ContentSocialMediaLinks";
import Events from "@/components/Events";
import FeatureAlbum from "@/components/FeatureAlbum";
import Testimonials from "@/components/Testimonials";
import Profiles from "@/components/Profiles";
import Products from "@/components/Products";
import ContactsSection from "@/components/ContactsSection";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import { Event } from "@/components/Calendar/calendarHelpers";
import Calendar from "@/components/Calendar/Calendar";
import BandsintownEventsDataSort from "@/components/elements/BandsintownEventsDataSort";

type ContentTagsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["contentTags"];

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface ContentTagsProps {
  contentTags: ContentTagsType;
  events: EventFieldsFragment[];
  testimonials: TestimonialFieldsFragment[];
  logoTables: LogoTableFieldsFragment[];
  profiles: ProfileFieldsFragment[];
  products: ProductFieldsFragment[];
  blogs: BlogFieldsFragment[];
  albums: AlbumFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  eventsData?: Event[];
  elements: ElementsType;
}
export default function ContentComponents({
  contentTags,
  events,
  testimonials,
  profiles,
  logoTables,
  products,
  blogs,
  siteLibrary,
  albums,
  eventsData,
  contacts,
  elements,
}: ContentTagsProps) {
  const filteredCalendarData =
    eventsData &&
    eventsData.filter((item) =>
      item.kind.includes(contentTags?.eventShowType || "")
    );
  return (
    <>
      {!!testimonials && contentTags?.testimonialType && (
        <section
          className="max-w-8xl mx-auto z-20 w-full relative testimonial-wrapper-content-components"
          id={`testimonial-${contentTags.testimonialType}`}
        >
          <Testimonials
            testimonials={testimonials}
            query={contentTags.testimonialType}
          />
        </section>
      )}
      {!!products &&
        contentTags?.productType &&
        contentTags?.productLayoutStyle && (
          <section
            className="product-wrapper-content-components w-full"
            id={`product-${contentTags.productType}`}
          >
            <Products
              products={products}
              type={contentTags.productType}
              productLayoutStyle={contentTags.productLayoutStyle}
            />
          </section>
        )}
      {!!contentTags?.logoTableType && logoTables.length >= 1 && (
        <div>
          {logoTables &&
            contentTags.logoTableType &&
            contentTags.logoTableLayout && (
              <LogoTable
                type={contentTags.logoTableType}
                logoTables={logoTables}
                logoTableLayout={contentTags.logoTableLayout}
              />
            )}
        </div>
      )}
      {!!blogs && contentTags?.blogCategory && contentTags?.blogLayoutStyle && (
        <div className="relative texture-background texture-right overflow-hidden">
          <section className="container my-8 px-4  mx-auto">
            <Blogs
              blogs={blogs}
              blogCategory={contentTags.blogCategory}
              blogHeader={contentTags.blogSectionTitle || "Blogs"}
              blogLayoutStyle={contentTags.blogLayoutStyle || "slider"}
            />
          </section>
        </div>
      )}
      {!!albums && contentTags?.albumDisplayType && (
        <FeatureAlbum
          albumDisplayType={contentTags.albumDisplayType}
          albums={albums}
          siteLibrary={siteLibrary}
        />
      )}
      {!!events && !!contentTags?.eventDisplayLayout && (
        <section className="content-components-events-wrapper">
          <Events
            eventDisplayLayout={contentTags.eventDisplayLayout || "grid"}
            events={events}
          />
        </section>
      )}
      {!!elements?.elementJson?.bandsintownEvents &&
        !!siteLibrary?.mapKey &&
        !!siteLibrary?.metaAppleTouchIcon?.url &&
        !!profiles && (
          <>
            <BandsintownEventsDataSort
              mapKey={siteLibrary.mapKey}
              icon={siteLibrary.metaAppleTouchIcon.url}
              bandsintownEventsData={elements.elementJson.bandsintownEvents}
              profiles={profiles}
            />
          </>
        )}
      {!!profiles &&
        contentTags?.profileType &&
        contentTags?.profileLayoutStyle && (
          <Profiles
            profiles={profiles}
            profileType={contentTags.profileType}
            profileLayoutStyle={contentTags.profileLayoutStyle}
            profileSectionTitle={contentTags?.profileSectionTitle || ""}
            siteID={siteLibrary.siteId}
            siteLogo={siteLibrary?.logo?.url || ""}
            siteDomain={siteLibrary.metaDomain || ""}
            spotifyClientId={siteLibrary?.spotifyClientId || ""}
            spotifyClientSecret={siteLibrary?.spotifyClientSecret || ""}
          />
        )}
      {!!contentTags?.eventShowType &&
        !!filteredCalendarData &&
        filteredCalendarData.length >= 1 && (
          <Calendar
            events={filteredCalendarData}
            createMonthsForNoEvents={true}
          />
        )}
      {!!contentTags?.contactType && !!contacts && contacts.length >= 1 && (
        <ContactsSection
          contactTypes={contentTags?.contactType}
          contactsData={contacts}
          contactsLayoutStyle={contentTags?.contactLayoutStyle || "default"}
        />
      )}
      {!!contentTags?.socialMediaLinks &&
        contentTags.socialMediaLinks.length >= 1 && (
          <ContentSocialMediaLinks
            socialMediaLinks={contentTags.socialMediaLinks}
          />
        )}
    </>
  );
}
