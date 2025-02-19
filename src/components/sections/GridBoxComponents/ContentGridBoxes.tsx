import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function ContentGridBoxes({ gridBoxData }: GridBoxProps) {
  const arrayQuantityIsOne = gridBoxData.length >= 1;
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div
        className={`grid grid-cols-1 gap-8 ${
          arrayQuantityIsOne
            ? "lg:grid-cols-1"
            : "lg:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {gridBoxData.map((gridBoxItem, index) => (
          <div
            key={`${index}-${gridBoxItem.boxTitle || "item"}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl max-w-lg mx-auto"
          >
            <div className="relative w-full pb-[56.25%] overflow-hidden">
              {gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover w-full h-auto absolute inset-0"
                />
              )}
            </div>
            <div className="p-6 bg-bg-secondary h-full">
              {gridBoxItem?.boxTitle && (
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-800">
                  {gridBoxItem.boxTitle}
                </h3>
              )}
              {gridBoxItem?.boxDescription?.html && (
                <div className="text-sm text-gray-600 line-clamp-2">
                  {parse(gridBoxItem.boxDescription.html)}
                </div>
              )}
              {gridBoxItem?.boxLink && (
                <LinkItem
                  link={gridBoxItem.boxLink}
                  cssClass="inline-block bg-bg-secondary text-white font-semibold py-4 rounded-full transition-all duration-300 ease-in-out hover:bg-black"
                >
                  Info
                </LinkItem>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
