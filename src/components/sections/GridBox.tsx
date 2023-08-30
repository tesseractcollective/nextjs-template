import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8">
      <div className={`flex flex-wrap justify-center items-center gap-4`}>
        {gridBoxData.map((gridBoxItem) => (
          <article
            key={gridBoxItem.boxLink}
            className="relative isolate flex overflow-hidden rounded-2xl bg-background pb-4 pt-40 sm:pt-60 group hover:cursor-pointer mx-auto h-full w-full max-w-xs"
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
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/50 via-text-color/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-primary-fade ring-inset ring-dark/10 overflow-hidden transition group-hover:ring-secondary" />
            <LinkItem
              link={gridBoxItem?.boxLink}
              label={gridBoxItem?.boxTitle}
              cssClass="text-shadow mt-3 text-xl font-semibold leading-6 w-full text-center text-text-overlay h-full line-clamp-1 z-40"
            >
              <span className="absolute inset-0 z-50" aria-hidden="true" />
            </LinkItem>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary transition opacity-0 group-hover:opacity-50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark transition opacity-30 group-hover:opacity-50 z-10" />
          </article>
        ))}
      </div>
    </section>
  );
}
