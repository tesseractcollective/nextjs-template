import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Zoom } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function InsetGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8">
      <Zoom triggerOnce direction="left">
        <div className="flex flex-wrap justify-center items-stretch gap-4 h-full">
          {gridBoxData.map((gridBoxItem) => (
            <div
              key={gridBoxItem.boxLink}
              className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-background pb-4 pt-40 sm:pt-60 group hover:cursor-pointer mx-auto h-full w-full max-w-xs self-stretch"
            >
              {!!gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center"
                />
              )}

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/50 via-text-color/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-primary ring-inset ring-dark/10 overflow-hidden transition group-hover:ring-secondary" />
              <LinkItem
                link={gridBoxItem?.boxLink}
                cssClass="text-shadow mt-3 text-xl leading-6 w-full text-center text-text-overlay h-full z-40 self-stretch"
              >
                <div>
                  {!!gridBoxItem?.boxTitle && (
                    <p className="line-clamp-1 text-text-overlay font-semibold">
                      {gridBoxItem.boxTitle}
                    </p>
                  )}
                  {!!gridBoxItem?.boxDescription?.html && (
                    <div className="body-parsed-text text-xs mx-auto block text-center text-text-overlay font-normal w-5/6 opacity-90 line-clamp-2 pt-2">
                      {parse(gridBoxItem.boxDescription.html)}
                    </div>
                  )}
                  <span className="absolute inset-0 z-50" aria-hidden="true" />
                </div>
              </LinkItem>
              <div className="absolute inset-0 bg-gradient-to-b from-secondary transition opacity-0 group-hover:opacity-50 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark transition opacity-30 group-hover:opacity-50 z-10" />
            </div>
          ))}
        </div>
      </Zoom>
    </section>
  );
}
