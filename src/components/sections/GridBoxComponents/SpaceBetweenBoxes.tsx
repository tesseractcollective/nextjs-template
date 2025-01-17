import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function SpaceBetweenBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <div className="mx-auto w-full">
      <Fade direction="up" triggerOnce>
        <div
          className={`flex flex-wrap flex-col justify-center items-center gap-y-4 mx-auto w-full`}
        >
          {gridBoxData.map((gridBoxItem, index) => (
            <div
              key={`${gridBoxItem.boxLink}-${index}`}
              className="mx-auto w-full"
            >
              <div className="max-w-12xl flex flex-col md:flex-row px-4 py-32 justify-between items-center  w-full mx-auto gap-4">
                {gridBoxItem?.boxImage?.url && (
                  <div className="bg-motion bg-small p-2 max-w-7xl w-full rounded-md">
                    {gridBoxItem.boxLink ? (
                      <LinkItem
                        parentCssClass="mx-auto"
                        link={gridBoxItem.boxLink}
                        cssClass="mx-auto w-full !max-w-max !flex items-center justify-center"
                      >
                        <Image
                          className="rounded object-cover  mx-auto w-full aspect-1"
                          width={0}
                          height={0}
                          sizes="100%"
                          src={gridBoxItem.boxImage.url}
                          alt={gridBoxItem?.boxTitle || ""}
                        />
                      </LinkItem>
                    ) : (
                      <Image
                        className="rounded object-cover mx-auto w-full aspect-video"
                        width={0}
                        height={0}
                        sizes="100%"
                        quality={100}
                        src={gridBoxItem.boxImage.url}
                        alt={gridBoxItem?.boxTitle || ""}
                      />
                    )}
                  </div>
                )}
                <div className="flex flex-col max-w-6xl w-full mx-auto body-parsed-text bg-glass glass-dark md:-ml-24 py-20 px-10 ml-0 -mt-20 md:mt-0">
                  {gridBoxItem?.boxTitle && (
                    <div className="text-4xl uppercase mb-2 font-bold my-0 py-0 parsed-mb-0 text-text-color">
                      {gridBoxItem.boxTitle}
                    </div>
                  )}

                  {gridBoxItem?.boxDescription && (
                    <div className="text-sm my-0 py-0 parsed-mb-0">
                      {parse(gridBoxItem.boxDescription.html)}
                    </div>
                  )}
                  {gridBoxItem.boxLink && (
                    <div className="mt-6">
                      <LinkItem
                        label="info"
                        link={gridBoxItem.boxLink}
                        cssClass="inline-block rounded-md border !border-text-color bg-none px-8 py-3 font-bold text-text-color group-hover:bg-secondary transition-all uppercase"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
