import Image from "next/image";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

type GridBoxType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["gridBox"];
interface GridBoxProps {
  gridBoxData: GridBoxType;
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-8">
      <div
        className={`space-y-12 lg:grid lg:grid-cols-${gridBoxData.length} lg:gap-x-8 lg:space-y-0 justify-items-center items-center`}
      >
        {gridBoxData.map((gridBoxItem) => (
          <article
            key={gridBoxItem.boxLink}
            className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-dark px-36 pb-4 pt-40 sm:pt-36 max-w-md group hover:cursor-pointer"
          >
            {!!gridBoxItem.boxImage?.url && (
              <Image
                src={gridBoxItem.boxImage.url}
                alt=""
                fill
                sizes="100%"
                className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center"
              />
            )}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark/50 via-white/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-primary ring-inset ring-dark/10 overflow-hidden vignette transition group-hover:ring-primary-hover" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 !text-white text-shadow">
              <LinkItem
                link={gridBoxItem?.boxLink}
                label={gridBoxItem?.boxTitle}
                cssClass="!text-white text-shadow"
              >
                <span className="absolute inset-0 z-50" aria-hidden="true" />
              </LinkItem>
            </h3>
            <div className="absolute inset-0 bg-gradient-to-b from-primary-hover transition opacity-0 group-hover:opacity-30 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark transition opacity-0 group-hover:opacity-30 z-10" />
          </article>
        ))}
      </div>
    </section>
  );
}
