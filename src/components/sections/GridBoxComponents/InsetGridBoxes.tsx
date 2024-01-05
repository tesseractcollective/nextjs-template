import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function InsetGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8 w-full">
      <Fade triggerOnce direction="up">
        <div className="flex flex-wrap justify-center md:justify-between items-stretch gap-4 h-full w-full">
          {gridBoxData.map((gridBoxItem, index) => (
            <LinkItem
              link={gridBoxItem.boxLink}
              key={`${gridBoxItem.boxLink}-${index}`}
              cssClass="relative isolate flex flex-col overflow-hidden rounded-2xl bg-background pb-4 pt-[25rem] px-36 group hover:cursor-pointer mx-auto w-full min-w-[280px] sm:min-w-[380px] md:w-[320px] lg:w-[420px] max-w-md self-stretch mx-auto"
            >
              <div>
                {!!gridBoxItem.boxImage?.url && (
                  <Image
                    src={gridBoxItem.boxImage.url}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "100%" }}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-gray-900/40 group-hover:from-secondary transition-all" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 transition-all ring-primary group-hover:ring-secondary ring-inset" />

                <h3 className="mt-3 text-lg font-semibold leading-6 !text-text-color absolute bottom-8 inset-x-0">
                  <div>
                    {!!gridBoxItem?.boxTitle && (
                      <p className="text-text-overlay font-bold uppercase text-2xl text-center mx-auto text-shadow">
                        {gridBoxItem.boxTitle}
                      </p>
                    )}
                    {!!gridBoxItem?.boxDescription?.html && (
                      <div className="body-parsed-text text-xs mx-auto block text-center text-text-overlay font-normal w-5/6 opacity-90 line-clamp-2 pt-2">
                        {parse(gridBoxItem.boxDescription.html)}
                      </div>
                    )}
                    <span
                      className="absolute inset-0 z-50"
                      aria-hidden="true"
                    />
                  </div>
                </h3>
              </div>
            </LinkItem>
          ))}
        </div>
      </Fade>
    </section>
  );
}
