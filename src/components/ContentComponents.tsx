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
import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import { Event } from "@/components/Calendar/calendarHelpers";
import Calendar from "@/components/Calendar/Calendar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

type ContentTagsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["contentTags"];

interface ContentTagsProps {
  contentTags: ContentTagsType;
  events: EventFieldsFragment[];
  testimonials: TestimonialFieldsFragment[];
  profiles: ProfileFieldsFragment[];
  logoTables: LogoTableFieldsFragment[];
  products: ProductFieldsFragment[];
  blogs: BlogFieldsFragment[];
  albums: AlbumFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
  page: PageFieldsFragment;
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
  page,
  albums,
  eventsData,
}: ContentTagsProps) {
  if (!contentTags || !siteLibrary) return <></>;
  const {
    albumDisplayType,
    blogCategory,
    blogSectionTitle,
    eventDisplayLayout,
    logoTableType,
    logoTableLayout,
    productType,
    profileLayoutStyle,
    profileSectionTitle,
    profileType,
    testimonialType,
    showType,
  } = contentTags;
  return (
    <>
      {!!testimonials && testimonialType && (
        <section
          className="container mx-auto z-20 w-10/12"
          id={`testimonial-${testimonialType}`}
        >
          <Testimonials testimonials={testimonials} query={testimonialType} />
        </section>
      )}
      {!!products && productType && (
        <section
          className="container mx-auto z-20 w-10/12"
          id={`product-${productType}`}
        >
          <Products products={products} type={productType} />
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
      {!!blogs && blogCategory && (
        <div className="relative texture-background texture-right overflow-hidden">
          <section className="container my-8 px-4 dark-section mx-auto">
            <Blogs
              fromHomePage={page.setHomePage || false}
              blogs={blogs}
              blogCategory={blogCategory}
              blogHeader={blogSectionTitle || "Blogs"}
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
        <section className="container my-4 mx-auto">
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
      {!!showType && eventsData && (
        <>
          <Calendar
            events={eventsData}
            createMonthsForNoEvents={true}
            showType={showType}
          />
        </>
      )}
    </>
  );
}
