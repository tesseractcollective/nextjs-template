import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function ParallaxGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="relative">
      {gridBoxData.map((gridBoxItem) => (
        <section
          key={gridBoxItem.boxLink}
          className="h-100vh bg-bg top-0 sticky"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat duration-[400ms] bg-fixed"></div>
          <div className="max-w-8xl px-4 lg:px-8 lg:py-20 mx-auto bottom-20 absolute w-full inset-x-0 z-10">
            <Fade direction="up" triggerOnce className="gap-y-2">
              <LinkItem link={gridBoxItem.boxLink}>
                <>
                  {!!gridBoxItem.boxTitle && (
                    <h1 className="text-2xl md:text-6xl xl:text-7xl text-shadow mt-0 mb-1 py-0 text-left text-[white] font-bold uppercase text-shadow">
                      {gridBoxItem.boxTitle}
                    </h1>
                  )}
                  <p className="bg-[white] text-[black] py-2 px-8 max-w-max uppercase font-bold rounded">
                    Info
                  </p>
                </>
              </LinkItem>
            </Fade>
          </div>
          {gridBoxItem.boxImage && (
            <Image
              src={gridBoxItem.boxImage.url}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-full object-cover absolute inset-0 z-0 h-100vh"
            />
          )}
        </section>
      ))}
    </section>
  );
}
