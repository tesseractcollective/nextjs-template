import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { FilloutSliderEmbed } from "@fillout/react";
import { useState } from "react";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function BlurGridBoxes({ gridBoxData }: GridBoxProps) {
  const arrayQuantityUnderTwo = gridBoxData.length <= 2;
  const [isOpen, setIsOpen] = useState(false);
  const filterFilloutCards = gridBoxData.filter((item) =>
    item.boxLink?.includes("fillout:")
  );
  const filterLinkCards = gridBoxData.filter(
    (item) => !item.boxLink?.includes("fillout:")
  );
  return (
    <Fade triggerOnce className="max-w-8xl w-full mx-auto px-4 py-12">
      <div
        className={`gap-8 grid grid-cols-1 md:grid-cols-2 ${
          arrayQuantityUnderTwo ? "lg:grid-cols-2" : "lg:grid-cols-3"
        }`}
      >
        {filterLinkCards.map((gridBoxItem, index) => {
          return (
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
                  parentCssClass="relative w-full pb-[120%] rounded-2xl overflow-hidden"
                >
                  {gridBoxItem.boxImage?.url && (
                    <Image
                      src={gridBoxItem.boxImage.url}
                      alt={gridBoxItem.boxTitle || ""}
                      quality={100}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="transition-all duration-300 ease-in-out rounded-2xl object-cover w-full h-full hover:shadow-xl shadow-none group-hover:scale-105 group-hover:rotate-3 absolute inset-0 object-center"
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
                      className="transition-transform duration-300 ease-in-out rounded-2xl object-cover w-full h-full absolute inset-0 object-center"
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
                      cssClass="inline-block text-white font-semibold transition-all duration-300 ease-in-out group-hover:text-primary px-2 group-hover:pl-4 group-hover:pr-0 group-hover:scale-x-110"
                    >
                      <ArrowLongRightIcon
                        className="h-8 w-8 flex"
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
          );
        })}
        {filterFilloutCards.map((gridBoxItem, index) => {
          const scrubbedID = gridBoxItem?.boxLink?.replace("fillout:", "");
          return (
            <button
              key={`${index}-${gridBoxItem.boxTitle || "item"}`}
              className={`
              group relative overflow-hidden rounded-2xl bg-white 
              transition-all duration-300 ease-in-out
              ${index % 3 === 1 ? "lg:translate-y-8 xl:translate-y-8" : ""}
              ${index % 3 === 2 ? "lg:translate-y-16 xl:translate-y-16" : ""}
            `}
              onClick={() => setIsOpen(true)}
              type="button"
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
                    className="transition-transform duration-300 ease-in-out rounded-2xl object-cover w-full h-full absolute inset-0 object-center"
                  />
                )}
              </div>
              <div className="p-4 h-full">
                <div className="flex flex-row justify-between items-center w-full mb-1">
                  {gridBoxItem?.boxTitle && (
                    <h3 className="text-xl font-semibold line-clamp-2 text-gray-800">
                      {gridBoxItem.boxTitle}
                    </h3>
                  )}
                  {gridBoxItem?.boxLink && (
                    <span className="inline-block text-white font-semibold transition-all duration-300 ease-in-out group-hover:text-primary px-2 group-hover:pl-4 group-hover:pr-0 group-hover:scale-x-110">
                      <ArrowLongRightIcon
                        className="h-8 w-8 flex"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </div>
                {gridBoxItem?.boxDescription?.html && (
                  <div className="text-sm opacity-80 line-clamp-2 text-left">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                )}
                {isOpen && scrubbedID && (
                  <FilloutSliderEmbed
                    filloutId={scrubbedID}
                    onClose={() => setIsOpen(false)}
                    onSubmit={() => setIsOpen(false)}
                    sliderDirection="right"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </Fade>
  );
}
