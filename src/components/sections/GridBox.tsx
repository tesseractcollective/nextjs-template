import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  console.log("GridBox.tsx", gridBoxData);
  return (
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8">
      <div
        className={`space-y-6 lg:grid lg:grid-cols-2 lg:gap-4 justify-items-center items-center`}
      >
        {gridBoxData.map((gridBoxItem) => (
          <article
            key={gridBoxItem.boxLink}
            className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-dark pb-4 pt-40 sm:pt-36 max-w-md group hover:cursor-pointer mx-auto h-full w-full"
          >
            {!!gridBoxItem.boxImage?.url && (
              <Image
                src={gridBoxItem.boxImage.url}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center"
              />
            )}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark/50 via-white/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-primary-fade ring-inset ring-dark/10 overflow-hidden transition group-hover:ring-primary-hover" />
            <LinkItem
              link={gridBoxItem?.boxLink}
              label={gridBoxItem?.boxTitle}
              cssClass="text-shadow mt-3 text-lg font-semibold leading-6 !text-white text-shadow w-full text-center"
            >
              <span className="absolute inset-0 z-50" aria-hidden="true" />
            </LinkItem>
            <div className="absolute inset-0 bg-gradient-to-b from-primary-hover transition opacity-0 group-hover:opacity-30 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark transition opacity-0 group-hover:opacity-30 z-10" />
          </article>
        ))}
      </div>
    </section>
  );
}
