import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function SmallCircleBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <div className="mx-auto max-w-8xl my-8 w-full px-8">
      <Fade direction="left" triggerOnce>
        <div
          className={`flex flex-wrap flex-row items-center gap-x-4 gap-y-4 mx-auto w-full ${
            gridBoxData.length <= 2 ? "justify-center" : "justify-center"
          }`}
        >
          {gridBoxData.map((gridBoxItem, index) => (
            <div
              key={`${gridBoxItem.boxLink}-${index}`}
              className="mx-auto max-w-sm w-full"
            >
              {gridBoxItem?.boxLink ? (
                <LinkItem
                  link={gridBoxItem.boxLink}
                  cssClass="flex flex-row bg-invert all-text-dark p-4 rounded items-center gap-x-4 mx-auto max-w-sm w-full"
                >
                  <>
                    {gridBoxItem?.boxImage?.url && (
                      <Image
                        className="h-16 lg:h-20 w-16 lg:w-20 rounded-full object-cover"
                        width={72}
                        height={72}
                        sizes="100%"
                        src={gridBoxItem.boxImage.url}
                        alt={gridBoxItem?.boxTitle || ""}
                      />
                    )}
                    <div className="flex flex-col">
                      {gridBoxItem?.boxTitle && (
                        <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                          {gridBoxItem.boxTitle}
                        </div>
                      )}

                      {gridBoxItem?.boxDescription && (
                        <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 max-w-[200px]">
                          {parse(gridBoxItem.boxDescription.html)}
                        </div>
                      )}
                    </div>
                  </>
                </LinkItem>
              ) : (
                <div className="flex flex-row bg-text-color all-text-dark p-4 rounded items-center gap-x-4 mx-auto max-w-sm w-full">
                  <>
                    {gridBoxItem?.boxImage?.url && (
                      <Image
                        className="h-16 lg:h-20 w-16 lg:w-20 rounded-full object-cover"
                        width={72}
                        height={72}
                        sizes="100%"
                        src={gridBoxItem.boxImage.url}
                        alt={gridBoxItem?.boxTitle || ""}
                      />
                    )}
                    <div className="flex flex-col">
                      {gridBoxItem?.boxTitle && (
                        <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                          {gridBoxItem.boxTitle}
                        </div>
                      )}

                      {gridBoxItem?.boxDescription && (
                        <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 max-w-[200px]">
                          {parse(gridBoxItem.boxDescription.html)}
                        </div>
                      )}
                    </div>
                  </>
                </div>
              )}
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
