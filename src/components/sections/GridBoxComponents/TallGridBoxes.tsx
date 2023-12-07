import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function TallGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8">
      <Fade triggerOnce direction="up">
        <div className="flex flex-wrap justify-center items-stretch gap-4 h-full">
          {gridBoxData.map((gridBoxItem) => (
            <div
              key={gridBoxItem.boxLink}
              className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-move pb-4 pt-40 sm:pt-[70vh] md:pt-[80vh] group hover:cursor-pointer mx-auto h-full w-full max-w-xl self-stretch hover:drop-shadow-xl transition-all"
            >
              <LinkItem
                link={gridBoxItem?.boxLink}
                cssClass="absolute mt-3 text-xl leading-6 w-full text-left text-text-overlay h-full z-40 self-stretch top-8 left-8"
              >
                <div className="relative">
                  {!!gridBoxItem?.boxTitle && (
                    <p className="text-shadow text-text-overlay font-bold uppercase text-4xl relative w-[80%]">
                      {gridBoxItem.boxTitle}
                    </p>
                  )}
                  {!!gridBoxItem?.boxDescription?.html && (
                    <div className="text-shadow body-parsed-text text-sm block text-left text-text-overlay font-normal w-5/6 opacity-90 line-clamp-2 mt-4">
                      {parse(gridBoxItem.boxDescription.html)}
                    </div>
                  )}
                  <span
                    className="absolute inset-0 z-50 w-full"
                    aria-hidden="true"
                  />
                </div>
              </LinkItem>

              {!!gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center opacity-100 blur-0 group-hover:blur-sm transition-all group-hover:opacity-50"
                />
              )}
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
