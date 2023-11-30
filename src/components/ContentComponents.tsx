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
import Events from "@/components/Events";
import FeatureAlbum from "@/components/FeatureAlbum";
import Testimonials from "@/components/Testimonials";
import Profiles from "@/components/Profiles";
import Products from "@/components/Products";
import ContactsSection from "@/components/ContactsSection";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import { Event } from "@/components/Calendar/calendarHelpers";
import Calendar from "@/components/Calendar/Calendar";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/thumbs";
// import "swiper/css/effect-cards";

type ContentTagsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["contentTags"];

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
}: ContentTagsProps) {
  if (!contentTags || !siteLibrary) return <></>;
  const {
    albumDisplayType,
    blogCategory,
    blogSectionTitle,
    blogLayoutStyle,
    eventDisplayLayout,
    logoTableType,
    logoTableLayout,
    productType,
    productLayoutStyle,
    profileLayoutStyle,
    profileSectionTitle,
    profileType,
    testimonialType,
    eventShowType,
    contactType,
  } = contentTags;

  const filteredCalendarData =
    eventsData &&
    eventsData.filter((item) => item.kind.includes(eventShowType || ""));

  return (
    <>
      {!!testimonials && testimonialType && (
        <section
          className="max-w-8xl mx-auto z-20 w-full relative"
          id={`testimonial-${testimonialType}`}
        >
          <Testimonials testimonials={testimonials} query={testimonialType} />
        </section>
      )}
      {!!products && productType && productLayoutStyle && (
        <section
          className="max-w-8xl mx-auto z-20 w-full relative"
          id={`product-${productType}`}
        >
          <Products
            products={products}
            type={productType}
            productLayoutStyle={productLayoutStyle}
          />
        </section>
      )}
      {!!logoTableType && logoTables.length >= 1 && (
        <div>
          {logoTables && logoTableType && logoTableLayout && (
            <LogoTable
              type={logoTableType}
              logoTables={logoTables}
              logoTableLayout={logoTableLayout}
            />
          )}
        </div>
      )}
      {!!blogs && blogCategory && blogLayoutStyle && (
        <div className="relative texture-background texture-right overflow-hidden">
          <section className="container my-8 px-4  mx-auto">
            <Blogs
              blogs={blogs}
              blogCategory={blogCategory}
              blogHeader={blogSectionTitle || "Blogs"}
              blogLayoutStyle={blogLayoutStyle || "slider"}
            />
          </section>
        </div>
      )}
      {!!albums && albumDisplayType && (
        <FeatureAlbum
          albumDisplayType={albumDisplayType}
          albums={albums}
          siteLibrary={siteLibrary}
        />
      )}
      {!!events && !!eventDisplayLayout && (
        <section className="max-w-8xl w-full my-4 mx-auto">
          <Events
            displayEventsStyleGridOrSlider={eventDisplayLayout || "grid"}
            events={events}
          />
        </section>
      )}
      {!!profiles &&
        profileType &&
        profileSectionTitle &&
        profileLayoutStyle && (
          <Profiles
            profiles={profiles}
            profileLayoutStyle={profileLayoutStyle}
            profileSectionTitle={profileSectionTitle}
            profileType={profileType}
          />
        )}
      {!!eventShowType &&
        !!filteredCalendarData &&
        filteredCalendarData.length >= 1 && (
          <Calendar
            events={filteredCalendarData}
            createMonthsForNoEvents={true}
          />
        )}
      {!!contactType && contacts && contacts.length >= 1 && (
        <ContactsSection contactTypes={contactType} contactsData={contacts} />
      )}
    </>
  );
}
