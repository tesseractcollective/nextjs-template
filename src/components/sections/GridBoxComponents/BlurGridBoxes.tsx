import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function BlurGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <Fade triggerOnce className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {gridBoxData.map((gridBoxItem, index) => (
          <div
            key={`${index}-${gridBoxItem.boxTitle || "item"}`}
            className={`
              group relative overflow-hidden rounded-2xl bg-white 
              transition-all duration-300 ease-in-out
              ${index % 3 === 1 ? "lg:translate-y-8 xl:translate-y-8" : ""}
              ${index % 3 === 2 ? "lg:translate-y-16 xl:translate-y-16" : ""}
            `}
          >
            <div className="relative w-full pb-[120%] rounded-2xl">
              {gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100%"
                  layout="fill"
                  className="transition-transform duration-300 ease-in-out rounded-2xl object-cover w-full h-auto"
                />
              )}
            </div>
            <div className="p-4  h-full">
              {gridBoxItem?.boxTitle && (
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-800">
                  {gridBoxItem.boxTitle}
                </h3>
              )}
              {gridBoxItem?.boxDescription?.html && (
                <div className="text-sm opacity-80 line-clamp-2">
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
