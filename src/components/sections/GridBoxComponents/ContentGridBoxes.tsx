import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function ContentGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {gridBoxData.map((gridBoxItem, index) => (
          <div
            key={`${index}-${gridBoxItem.boxTitle || "item"}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="relative w-full pb-[56.25%]">
              {gridBoxItem.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-6 bg-bg-secondary">
              {gridBoxItem?.boxTitle && (
                <h3 className="text-xl font-semibold mb-2 truncate text-gray-800">
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
                  cssClass="inline-block bg-bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:bg-black"
                >
                  Learn More
                </LinkItem>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
