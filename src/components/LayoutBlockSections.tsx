"use client";
import React from "react";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";
import { Event } from "@/components/Calendar/calendarHelpers";
import Image from "next/image";
import PageCssClass from "./PageCssClass";

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
  const fullPageBackground = page?.pageWidthStyle === "page";
  return (
    <div className="relative layout-blocks-sections">
      <section className={fullPageBackground ? `h-100vh bg-bg` : ""}>
        <div
          className={
            fullPageBackground
              ? `fixed w-full h-full top-0 left-0 bg-cover bg-top bg-no-repeat opacity-100 bg-fixed pt-16`
              : ""
          }
          style={
            fullPageBackground
              ? { backgroundImage: `url(${page?.heroImage?.url})` }
              : {}
          }
        >
          {page.layoutBlocks?.length >= 1 && (
            <>
              {page.layoutBlocks.map((layoutBlock, parentIndex) => {
                const totalColumns = layoutBlock.layoutBlockColumns.length;

                const styleBlockBGColor = layoutBlock?.backgroundColor?.hex
                  ? { background: layoutBlock.backgroundColor?.hex }
                  : {};

                const rowKey = `layout-block-row-${parentIndex}`;
                return (
                  <div
                    className="relative"
                    key={rowKey}
                    id={`${rowKey}-${parentIndex + 1}`}
                  >
                    <div
                      className={`w-full flex flex-wrap relative ${
                        layoutBlock.cssClass
                      } ${
                        layoutBlock?.backgroundImage?.url
                          ? "background-image-featured"
                          : ""
                      }`}
                      style={styleBlockBGColor}
                    >
                      {layoutBlock.layoutBlockColumns.map(
                        (layoutBlockColumn, index) => {
                          const styleBGImage =
                            layoutBlockColumn?.backgroundImage?.url &&
                            !layoutBlockColumn?.cssClass?.includes?.(
                              "column-video-bg"
                            )
                              ? {
                                  backgroundImage: `url(${layoutBlockColumn.backgroundImage.url})`,
                                }
                              : {};

                          const columnKey =
                            layoutBlockColumn?.htmlId ||
                            `layout-block-${parentIndex}-column-${index + 1}`;
                          return (
                            <div
                              id={columnKey}
                              key={columnKey}
                              className={`${
                                layoutBlockColumn?.hideBlockColumn
                                  ? "hidden"
                                  : ""
                              } relative flex justify-center mx-0 px-0 w-full flex-auto dynamic-feature-section flex-col xl:w-${
                                12 / totalColumns
                              }/12 ${layoutBlockColumn?.cssClass || ""} ${
                                layoutBlockColumn?.backgroundImage?.url
                                  ? "background-image-featured"
                                  : ""
                              }`}
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
                                eventsData={eventsData}
                                elements={layoutBlockColumn.elements}
                              />
                              <Elements
                                elements={layoutBlockColumn.elements}
                                siteLibrary={siteLibrary}
                              />
                              {layoutBlockColumn?.cssClass?.includes?.(
                                "column-video-bg"
                              ) && (
                                <video
                                  src={layoutBlockColumn?.backgroundImage?.url}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  aria-hidden="true"
                                  className="absolute inset-0 -z-1 video-column h-full w-full object-cover"
                                />
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                    {layoutBlock?.backgroundImage?.url &&
                      !layoutBlock?.cssClass?.includes?.("column-video-bg") && (
                        <Image
                          src={layoutBlock?.backgroundImage?.url}
                          width={0}
                          height={0}
                          sizes="100%"
                          className="next-layout-block-image object-cover absolute w-full h-full inset-0 z-[-1]"
                          alt=""
                          quality={100}
                        />
                      )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>

      {!!page?.contentPageJson?.pageClass && (
        <PageCssClass pageClass={page?.contentPageJson?.pageClass} />
      )}
    </div>
  );
}
