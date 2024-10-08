import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}
export default function WideCardBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="px-4 wide-card-boxes flex flex-wrap items-center justify-center mx-auto lg:mx-0 transition my-8">
      <Fade triggerOnce cascade direction="up">
        {gridBoxData.map((gridBoxItem, index) => (
          <div
            key={`${gridBoxItem.boxLink}-${index}`}
            className="relative bg-text-color bg-invert my-2 py-4 md:py-8 overflow-hidden rounded-lg"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-2 md:py-24 lg:max-w-none">
                <div className="lg:pr-16">
                  {gridBoxItem.boxTitle && (
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                      {parse(gridBoxItem.boxTitle)}
                    </h1>
                  )}
                  {!!gridBoxItem?.boxDescription?.html && (
                    <div className="mt-4 text-xl body-parsed-text">
                      {parse(gridBoxItem.boxDescription.html)}
                    </div>
                  )}
                  <LinkItem
                    cssClass="mt-6 inline-block rounded-md border border-transparent px-8 py-3 font-bold text-white hover:bg-primary focus-within:bg-primary transition-all uppercase"
                    link={gridBoxItem.boxLink}
                  >
                    Info
                  </LinkItem>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 rounded-2xl">
              {!!gridBoxItem?.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-full object-cover object-center rounded-4xl p-4"
                />
              )}
            </div>
          </div>
        ))}
      </Fade>
    </section>
  );
}
