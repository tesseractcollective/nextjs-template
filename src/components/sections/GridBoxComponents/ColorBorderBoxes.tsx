import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}
export default function ColorBorderBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <section className="color-border-card-boxes mx-auto px-4 max-w-8xl my-8 w-full gap-y-8">
      <div
        // direction="up"
        // triggerOnce
        className="flex flex-wrap flex-row items-center justify-center mx-auto lg:mx-0 transition gap-8"
      >
        {gridBoxData.map((gridBoxItem, index) => (
          <Fade
            direction="up"
            triggerOnce
            key={`no-link-${index}`}
            className="max-w-sm flex bg-primary p-0"
          >
            <div className="relative py-4 px-4 overflow-hidden">
              {gridBoxItem.boxTitle && (
                <h1 className="mb-2 text-2xl font-bold tracking-tight">
                  {gridBoxItem.boxTitle}
                </h1>
              )}
              <div className="w-full aspect-square relative">
                {!!gridBoxItem?.boxImage?.url && (
                  <Image
                    src={gridBoxItem.boxImage.url}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-full w-full object-cover object-center aspect-square max-h-[280px]"
                  />
                )}
              </div>
              <div className="">
                {!!gridBoxItem?.boxDescription?.html && (
                  <div className="mt-4 text-xs body-parsed-text">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                )}
                {!!gridBoxItem?.boxLink && (
                  <LinkItem
                    cssClass="mt-2 inline-block rounded-md border border-transparent bg-text-color px-8 py-3 font-medium text-white group-hover:bg-secondary transition-all"
                    label="Info"
                    link={gridBoxItem.boxLink}
                  ></LinkItem>
                )}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
