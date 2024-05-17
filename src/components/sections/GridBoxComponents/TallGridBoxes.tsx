import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}
export default function TallGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="mx-auto px-4 max-w-9xl py-8 w-full">
      <Fade triggerOnce direction="up">
        <div className="flex flex-wrap justify-center items-stretch gap-4 h-full w-full">
          {gridBoxData.map((gridBoxItem, index) => (
            <LinkItem
              parentCssClass="h-full w-full md:max-w-xs"
              link={gridBoxItem.boxLink}
              key={`${gridBoxItem.boxLink}-${index}`}
              cssClass="relative isolate flex flex-col overflow-hidden rounded-2xl bg-background group hover:cursor-pointer mx-auto w-full self-stretch mx-auto  h-full block aspect-[16/9] md:aspect-[3/4] outline-none hover:outline-primary  focus-within:outline-primary transition-all"
            >
              <div className="w-full h-full">
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
                <h3 className="mt-3 text-md font-semibold leading-6 !text-text-color absolute top-8 inset-x-0">
                  <div>
                    {!!gridBoxItem?.boxTitle && (
                      <p className="text-text-overlay font-bold uppercase text-2xl text-left mx-auto w-5/6">
                        {gridBoxItem.boxTitle}
                      </p>
                    )}
                    {!!gridBoxItem?.boxDescription?.html && (
                      <div className="body-parsed-text text-xs mx-auto block text-left text-text-overlay font-normal w-5/6 line-clamp-2 pt-2">
                        {parse(gridBoxItem.boxDescription.html)}
                      </div>
                    )}
                    <span
                      className="absolute inset-0 z-50"
                      aria-hidden="true"
                    />
                  </div>
                </h3>
                <div className="w-full absolute z-[-5] inset-0 bg-[#000] opacity-0 group-hover:opacity-50 group-focus-within:opacity-50 transition-all"></div>
              </div>
            </LinkItem>
          ))}
        </div>
      </Fade>
    </section>
  );
}
