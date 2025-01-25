import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function BlurGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <Fade triggerOnce className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            {gridBoxItem?.boxLink ? (
              <LinkItem
                cssClass="w-full h-auto"
                link={gridBoxItem.boxLink}
                parentCssClass="relative w-full pb-[120%] rounded-2xl"
              >
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
              </LinkItem>
            ) : (
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
            )}
            <div className="p-4  h-full">
              <div className="flex flex-row justify-between items-center w-full mb-1">
                {gridBoxItem?.boxTitle && (
                  <h3 className="text-xl font-semibold line-clamp-2 text-gray-800">
                    {gridBoxItem.boxTitle}
                  </h3>
                )}
                {gridBoxItem?.boxLink && (
                  <LinkItem
                    link={gridBoxItem.boxLink}
                    cssClass="inline-block text-white font-semibold transition-all duration-300 ease-in-out hover:bg-black"
                  >
                    <ArrowLongRightIcon
                      className="h-6 w-6 flex"
                      aria-hidden="true"
                    />
                  </LinkItem>
                )}
              </div>
              {gridBoxItem?.boxDescription?.html && (
                <div className="text-sm opacity-80 line-clamp-2">
                  {parse(gridBoxItem.boxDescription.html)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
}
