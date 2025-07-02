import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function InsetGridBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <div className="inset-grid-boxes my-0 magic-grid block h-full">
      <div className="block mx-auto max-w-12xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 my-4 md:my-1 px-4 md:px-0">
          {gridBoxData.map((gridBoxItem, index) => (
            <LinkItem
              link={gridBoxItem.boxLink}
              key={`${gridBoxItem.boxLink}-${index}`}
              parentCssClass="overflow-hidden"
              cssClass="group aspect-[4/5] md:aspect-[9/16] block mx-auto overflow-hidden cursor-pointer"
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
                    className="absolute inset-0 -z-10 h-full w-full object-cover scale-100 group-hover:scale-105 group-fovus-visible:scale-105 transition-transform duration-500 ease-in-out"
                  />
                )}
                {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background opacity-0 hover:opacity-100  group-hover:from-bg transition-all" /> */}
                <div className="absolute inset-0 z-20 ring-0 group-hover:ring-1 group-focus-visible:ring-1 transition-all ring-primary ring-inset" />
                <div className="absolute inset-1 z-10 ring-0 group-hover:ring-2 group-focus-visible:ring-2 transition-all ring-secondary ring-inset" />

                <div className="inline-block text-lg font-semibold leading-6 !text-text-color absolute top-8 inset-x-0">
                  <div>
                    {!!gridBoxItem?.boxTitle && (
                      <p className="text-text-overlay font-bold uppercase text-5xl text-center mx-auto text-shadow max-w-sm bg-[#ffffff00] border border-primary group-hover:bg-primary group-focus-visible:bg-primary px-2 py-1 rounded-md h-full">
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
                </div>
              </div>
            </LinkItem>
          ))}
        </div>
      </div>
    </div>
  );
}
