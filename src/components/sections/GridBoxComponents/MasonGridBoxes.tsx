import Image from "next/image";
import { useState } from "react";
import parse from "html-react-parser";
import useViewport from "@/app/hooks/useViewport";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import React from "react";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function MasonGridBoxes({ gridBoxData }: GridBoxProps) {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const { isTablet } = useViewport();

  return (
    <section className="relative w-full mx-auto my-0 overflow-hidden">
      <div className="flex flex-row flex-wrap w-full mx-0 transition">
        {gridBoxData.map((gridBoxItem, index) => {
          const isHovered =
            hoveredItemIndex !== null && hoveredItemIndex !== index;
          return (
            <LinkItem
              key={index}
              parentCssClass={`relative w-full lg:w-[50%] h-100vh relative group overflow-hidden transition-all ${
                isHovered ? "grayscale" : ""
              }`}
              onMouseEnter={() => setHoveredItemIndex(index)}
              onMouseLeave={() => setHoveredItemIndex(null)}
              link={gridBoxItem.boxLink}
            >
              <>
                {!!gridBoxItem.boxImage?.url && (
                  <Image
                    sizes="100%"
                    src={gridBoxItem.boxImage?.url}
                    alt={gridBoxItem.boxTitle || ""}
                    width={0}
                    height={0}
                    className="transition-all object-cover h-full w-full overflow-hidden grayscale-0 group-hover:grayscale group-focus:grayscale absolute inset-0"
                  />
                )}
                {/* {!!profileItem?.name && (
                  <p className="opacity-50 group-hover:opacity-100 md:opacity-0 absolute bottom-1 md:bottom-[initial] z-40 md:top-[25%] md:group-focus:top-[50%] md:group-hover:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 p-0 m-0 font-bold uppercase text-xs md:text-4xl text-left md:text-center md:group-hover:opacity-100 group-focus:opacity-100 transition-all duration-[400ms] flex flex-row items-center justify-start group-hover:text-shadow">
                    <span>{parse(profileItem.name)}</span>
                  </p>
                )} */}
              </>
            </LinkItem>
          );
        })}
      </div>
    </section>
  );
}
