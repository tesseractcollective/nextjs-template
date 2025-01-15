import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function SnapGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <Fade triggerOnce className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8">
        {gridBoxData.map((gridBoxItem, index) => (
          <div
            key={`${index}-${gridBoxItem.boxTitle || "item"}`}
            className="group relative overflow-hidden bg-white 
              transition-all duration-300 ease-in-out gap-y-4 flex flex-col"
          >
            <div className="relative w-full pb-[62.25%]">
              {gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  layout="fill"
                  objectFit="cover"
                  sizes="100%"
                  className="transition-transform duration-300 ease-in-out"
                />
              )}
            </div>
            <div className="h-full">
              {gridBoxItem?.boxTitle && (
                <h3 className="text-xl font-semibold mb-2 text-text-color flex items-center gap-x-2">
                  <span className="block w-8 h-0.5 bg-text-color"></span>
                  <span>{gridBoxItem.boxTitle}</span>
                </h3>
              )}
              {gridBoxItem?.boxDescription?.html && (
                <div className="text-sm opacity-80">
                  {parse(gridBoxItem.boxDescription.html)}
                </div>
              )}
              {gridBoxItem?.boxLink && (
                <LinkItem
                  link={gridBoxItem.boxLink}
                  cssClass="inline-block bg-bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:bg-black"
                >
                  Learn More
                </LinkItem>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
}
