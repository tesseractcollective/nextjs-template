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

type ContentQueriesType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["contentQueries"];

interface ContentQuieresProps {
  contentQueries: ContentQueriesType;
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
}

export default function ContentQueries({
  contentQueries,
  events,
  testimonials,
  profiles,
  logoTables,
  products,
  blogs,
  siteLibrary,
  page,
  albums,
}: ContentQuieresProps) {
  if (!contentQueries) return <></>;
  if (!siteLibrary) return <></>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      {!!testimonials && contentQueries?.testimonialsQuery && (
        <section
          className="container mx-auto z-20 w-10/12"
          id={`testimonial-${contentQueries?.testimonialsQuery}`}
        >
          <Testimonials
            testimonials={testimonials}
            query={contentQueries?.testimonialsQuery}
          />
        </section>
      )}
      {!!products && contentQueries?.productQuery && (
        <section
          className="container mx-auto z-20 w-10/12"
          id={`product-${contentQueries?.productQuery}`}
        >
          <Products products={products} query={contentQueries?.productQuery} />
        </section>
      )}
      {!!contentQueries?.logoTableQuery && logoTables.length >= 1 && (
        <div>
          {logoTables && contentQueries.logoTableQuery && (
            <LogoTable
              query={contentQueries.logoTableQuery}
              logoTables={logoTables}
            />
          )}
        </div>
      )}
      {!!blogs && contentQueries?.blogCategory && (
        <div className="relative texture-background texture-right overflow-hidden">
          <section className="container my-8 px-4 dark-section mx-auto">
            <Blogs
              fromHomePage={page.setHomePage || false}
              blogs={blogs}
              blogCategory={contentQueries.blogCategory}
              blogHeader={contentQueries?.blogSectionTitle || "Blogs"}
            />
          </section>
        </div>
      )}
      {!!albums && contentQueries?.albumQuery && (
        <FeatureAlbum
          albumQuery={contentQueries.albumQuery}
          albums={albums}
          siteLibrary={siteLibrary}
        />
      )}
      {!!events && !!contentQueries?.eventDisplayLayout && (
        <section className="container my-4 mx-auto">
          <Events
            displayEventsStyleGridOrSlider={
              contentQueries.eventDisplayLayout || "grid"
            }
            events={events}
          />
        </section>
      )}
      {!!profiles &&
        contentQueries?.profilesQuery &&
        contentQueries?.profileSectionTitle &&
        contentQueries.profileLayoutStyle && (
          <Profiles
            profiles={profiles}
            profileLayoutStyle={contentQueries.profileLayoutStyle}
            profileSectionTitle={contentQueries.profileSectionTitle}
            profilesQuery={contentQueries.profilesQuery}
          />
        )}
    </>
  );
}
