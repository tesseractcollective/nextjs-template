import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function CompactGridBoxes({ gridBoxData }: GridBoxProps) {
  console.log(gridBoxData);
  return (
    <div className="mx-auto max-w-8xl my-8 w-full">
      <Fade direction="left" triggerOnce>
        <div
          className={`flex flex-wrap flex-col items-center gap-x-4 gap-y-4 mx-auto w-full justify-center`}
        >
          {gridBoxData.map((gridBoxItem, index) => (
            <div
              key={`${gridBoxItem.boxLink}-${index}`}
              className="mx-auto w-full"
            >
              {gridBoxItem?.boxLink ? (
                <LinkItem
                  link={gridBoxItem.boxLink}
                  cssClass="flex flex-col bg-invert hover:bg-primary transition-all all-text-dark py-2 px-0 rounded items-center justify-center mx-auto w-full border-text-color border hover:border-primary group"
                  label={gridBoxItem.boxTitle}
                >
                  <>
                    {gridBoxItem?.boxImage?.url && (
                      <Image
                        className="h-16 w-16 rounded-full object-cover mx-auto group-hover:rotate-[360deg] transition-all"
                        width={64}
                        height={64}
                        sizes="100%"
                        src={gridBoxItem.boxImage.url}
                        alt={gridBoxItem?.boxTitle || ""}
                      />
                    )}
                    <div className="flex flex-col">
                      {/* {gridBoxItem?.boxTitle && (
                        <div className="text-sm uppercase font-bold my-0 py-0 parsed-mb-0 text-center">
                          {gridBoxItem.boxTitle}
                        </div>
                      )} */}

                      {gridBoxItem?.boxDescription && (
                        <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 max-w-[200px text-center">
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
                        className="h-16 w-16 rounded-full object-cover mx-auto"
                        width={64}
                        height={64}
                        sizes="100%"
                        src={gridBoxItem.boxImage.url}
                        alt={gridBoxItem?.boxTitle || ""}
                      />
                    )}
                    <div className="flex flex-col">
                      {gridBoxItem?.boxTitle && (
                        <div className="text-sm font-bold my-0 py-0 parsed-mb-0 text-center">
                          {gridBoxItem.boxTitle}
                        </div>
                      )}

                      {gridBoxItem?.boxDescription && (
                        <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 max-w-[200px] text-center">
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
