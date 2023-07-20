import parse from "html-react-parser";
import  Link  from "next/link";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";

type GridBoxType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlock"][number]["gridBox"];
interface GridBoxProps {
  gridBoxData: GridBoxType;
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-16">
      <div className={`space-y-12 lg:grid lg:grid-cols-${gridBoxData.length} lg:gap-x-8 lg:space-y-0`}>
        {gridBoxData.map((gridBoxItem) => {
          if (gridBoxItem.boxLink?.includes("http"))
            return (
              <a
                key={gridBoxItem.boxLink}
                href={gridBoxItem?.boxLink || "#"}
                className="group block max-h-[280px] h-full"
              >
                {!!gridBoxItem?.boxImage?.url && (
                  <div
                    aria-hidden="true"
                    className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75"
                  >
                    <img
                      src={gridBoxItem.boxImage?.url}
                      alt={gridBoxItem?.boxTitle || ""}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )}
                {!!gridBoxItem?.boxTitle && (
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {gridBoxItem.boxTitle}
                  </h3>
                )}
                {!!gridBoxItem?.boxDescription && (
                  <div className="mt-2 text-sm text-gray-500 body-parsed-text">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                )}
              </a>
            );
          else
            return (
              <Link
                key={gridBoxItem.boxLink}
                href={gridBoxItem?.boxLink || "#"}
                className="group block max-h-[280px] h-full"
              >
                {!!gridBoxItem?.boxImage?.url && (
                  <div
                    aria-hidden="true"
                    className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75"
                  >
                    <img
                      src={gridBoxItem.boxImage?.url}
                      alt={gridBoxItem?.boxTitle || ""}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )}
                {!!gridBoxItem?.boxTitle && (
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {gridBoxItem.boxTitle}
                  </h3>
                )}
                {!!gridBoxItem?.boxDescription && (
                  <div className="mt-2 text-sm text-gray-500 body-parsed-text">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                )}
              </Link>
            );
        })}
      </div>
    </section>
  );
}
