"use client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";
import { Event } from "@/components/Calendar/calendarHelpers";

interface PageProps {
  layout: LayoutQuery;
  eventsData?: Event[];
}

export default function LayoutBlockSections({ layout, eventsData }: PageProps) {
  if (!layout) return <></>;
  const {
    siteLibrary,
    page,
    events,
    testimonials,
    profiles,
    logoTables,
    products,
    albums,
    blogs,
    contacts,
  } = layout;
  if (!siteLibrary) return <></>;
  if (!page?.layoutBlocks) return <></>;
  return (
    <div className="relative">
      {page.layoutBlocks && page.layoutBlocks.length >= 1 && (
        <>
          {page.layoutBlocks.map((layoutBlock, parentIndex) => {
            const totalColumns = layoutBlock.layoutBlockColumns.length;
            const styleBlockBGImage = layoutBlock?.backgroundImage?.url
              ? { backgroundImage: `url(${layoutBlock.backgroundImage.url})` }
              : {};
            const styleBlockBGColor = layoutBlock?.backgroundColor?.hex
              ? { background: layoutBlock.backgroundColor?.hex }
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
                style={styleBlockBGColor || styleBlockBGImage}
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
                          contentTags={layoutBlockColumn.contentTags}
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
                          eventsData={eventsData}
                        />
                        <Elements
                          elements={layoutBlockColumn.elements}
                          siteLibrary={siteLibrary}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
