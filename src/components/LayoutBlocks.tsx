"use client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import Whatsapp from "@/components/Whatsapp";
import PageHeader from "@/components/PageHeader";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";

interface PageProps {
  layout: LayoutQuery;
}

export default function LayoutBlocks({ layout }: PageProps) {
  if (!layout) return <></>;
  const {
    siteLibrary,
    page,
    events,
    testimonials,
    profiles,
    logoTables,
    products,
    navigations,
    albums,
    blogs,
    contacts
  } = layout;
  if (!siteLibrary) return <></>;

  return (
    <>
      {navigations[0] && siteLibrary && (
        <Nav
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          hideNav={page?.hideNav || undefined}
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
      {page?.layoutBlocks && (
        <>
          {page.layoutBlocks.map((layoutBlock, parentIndex) => {
            const totalColumns = layoutBlock.layoutBlockColumns.length;
            const styleBlockBGImage = layoutBlock?.backgroundImage?.url
              ? { backgroundImage: `url(${layoutBlock.backgroundImage.url})` }
              : {};
            return (
              <div
                key={`layout-block-row-${parentIndex++}`}
                id={`layout-block-row-${parentIndex++ + 1}`}
                className={`w-full flex flex-wrap ${layoutBlock.cssClass} ${
                  layoutBlock?.backgroundImage?.url
                    ? "background-image-featured"
                    : ""
                }`}
                style={{ backgroundColor: layoutBlock.backgroundColor?.hex }}
              >
                {layoutBlock.layoutBlockColumns.map(
                  (layoutBlockColumn, index) => {
                    const styleBGImage = layoutBlockColumn?.backgroundImage?.url
                      ? {
                          backgroundImage: `url(${layoutBlockColumn.backgroundImage.url})`,
                        }
                      : {};
                    return (
                      <div
                        id={
                          layoutBlockColumn?.htmlId ||
                          `layout-block-${parentIndex}-column-${index + 1}`
                        }
                        key={Math.random()}
                        className={`${
                          layoutBlockColumn?.hideBlockColumn ? "hidden" : ""
                        } flex justify-center mx-0 px-0 w-full flex-auto  dynamic-feature-section flex-col xl:w-${
                          12 / totalColumns
                        }/12 ${
                          layoutBlockColumn?.cssClass
                            ? layoutBlockColumn?.cssClass
                            : ""
                        } ${
                          layoutBlockColumn?.backgroundImage?.url
                            ? "background-image-featured"
                            : ""
                        } `}
                        style={styleBGImage}
                      >
                        <Sections
                          sectionData={layoutBlockColumn.sections}
                          siteLibrary={siteLibrary}
                        />
                        <ContentComponents
                          contentQueries={layoutBlockColumn.contentQueries}
                          events={events}
                          contacts={contacts}
                          testimonials={testimonials}
                          profiles={profiles}
                          logoTables={logoTables}
                          products={products}
                          blogs={blogs}
                          albums={albums}
                          siteLibrary={siteLibrary}
                          page={page}
                        />
                       <Elements elements={layoutBlockColumn.elements}/>
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </>
      )}
      {page?.whatsAppContactNumberFloatingButton && (
        <Whatsapp contactNumber={page.whatsAppContactNumberFloatingButton} />
      )}
      {navigations[0] && siteLibrary && (
        <Footer
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          blogs={blogs}
          hideFooter={page?.hideFooter || undefined}
        />
      )}
    </>
  );
}
