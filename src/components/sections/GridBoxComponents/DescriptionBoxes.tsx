import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}
export default function DescriptionBoxes({ gridBoxData }: GridBoxProps) {
  const gridBoxDataWLinks = gridBoxData.filter(
    (gridBoxLinkTemp) => gridBoxLinkTemp.boxLink !== null
  );
  const gridBoxDataWOLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink === "" || gridBoxTemp.boxLink === null
  );
  return (
    <section className="description-card-boxes mx-auto px-4 max-w-8xl my-8 w-full gap-y-8">
      <div
        // direction="up"
        // triggerOnce
        className="flex flex-wrap flex-row items-center justify-center mx-auto lg:mx-0 transition gap-8"
      >
        {gridBoxDataWOLinks.map((gridBoxItem, index) => (
          <Fade
            direction="up"
            triggerOnce
            key={`no-link-${index}`}
            className="max-w-sm flex bg-text-color all-text-dark p-0"
          >
            <div className="relative group py-4 px-4 overflow-hidden">
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
                {gridBoxItem.boxTitle && (
                  <h1 className="mt-4 text-2xl font-bold tracking-tight">
                    {gridBoxItem.boxTitle}
                  </h1>
                )}
                {!!gridBoxItem?.boxDescription?.html && (
                  <div className="mt-4 text-xs body-parsed-text">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                )}
              </div>
            </div>
          </Fade>
        ))}
        {gridBoxDataWLinks.map((gridBoxItem, index) => (
          <LinkItem
            link={gridBoxItem.boxLink}
            key={`${gridBoxItem.boxLink}-${index}`}
            parentCssClass="max-w-sm flex bg-text-color all-text-dark p-0"
            cssClass="relative group py-4 px-4 overflow-hidden"
          >
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
              {gridBoxItem.boxTitle && (
                <h1 className="mt-4 text-2xl font-bold tracking-tight">
                  {gridBoxItem.boxTitle}
                </h1>
              )}
              {!!gridBoxItem?.boxDescription?.html && (
                <div className="mt-4 text-xs body-parsed-text">
                  {parse(gridBoxItem.boxDescription.html)}
                </div>
              )}
              <div className="mt-2">
                <span className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 font-medium text-white group-hover:bg-secondary transition-all">
                  Info
                </span>
              </div>
            </div>
          </LinkItem>
        ))}
      </div>
    </section>
  );
}
