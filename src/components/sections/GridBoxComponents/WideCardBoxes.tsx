import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function WideCardBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="px-4 wide-card-boxes flex flex-wrap items-center justify-center transition my-8 max-w-8xl mx-auto w-full">
      {gridBoxData.map((gridBoxItem, index) => (
        <div
          key={`${gridBoxItem.boxLink}-${index}`}
          className="relative bg-text-color bg-invert my-8 py-4 md:py-8 overflow-hidden rounded flex flex-col-reverse lg:flex-col w-full"
        >
          <div className="mr-auto max-w-7xl px-4 sm:px-6 lg:grid xl:grid-cols-2 lg:px-8">
            <div className="mx-auto max-w-2xl py-2 md:py-24 lg:max-w-none">
              <div className="pr-0 lg:pr-16">
                {gridBoxItem.boxTitle && (
                  <h1 className="text-2xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
                    {parse(gridBoxItem.boxTitle)}
                  </h1>
                )}
                {!!gridBoxItem?.boxDescription?.html && (
                  <div className="mt-4 text-xl body-parsed-text">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                )}
                {gridBoxItem?.boxLink && (
                  <LinkItem
                    cssClass="mt-6 inline-block rounded-md border border-transparent px-8 py-3 font-bold text-white hover:bg-primary focus-within:bg-primary transition-all uppercase"
                    link={gridBoxItem.boxLink}
                    label="Info"
                  ></LinkItem>
                )}
              </div>
            </div>
          </div>
          {/* Square Image Container */}
          <div className="w-full aspect-square lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 rounded-2xl">
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
    </section>
  );
}
