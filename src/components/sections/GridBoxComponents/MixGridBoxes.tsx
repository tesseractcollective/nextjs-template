import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}
export default function MixGridBoxes({ gridBoxData }: GridBoxProps) {
  const gridBoxDataWLinks = gridBoxData.filter(
    (gridBoxLinkTemp) => gridBoxLinkTemp.boxLink !== null
  );
  const gridBoxDataWOLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink === "" || gridBoxTemp.boxLink === null
  );
  return (
    <section className="image-card-boxes mx-auto px-4 max-w-8xl my-8 w-full gap-y-8">
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
            <div className="w-full aspect-square relative">
              {!!gridBoxItem?.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-full object-cover object-center aspect-square max-h-[280px]"
                />
              )}
            </div>
          </Fade>
        ))}
        {gridBoxDataWLinks.map((gridBoxItem, index) => (
          <LinkItem
            link={gridBoxItem.boxLink}
            key={`${gridBoxItem.boxLink}-${index}`}
            parentCssClass="max-w-sm p-0"
            cssClass="relative group py-4 px-4 overflow-hidden"
          >
            <div className="w-full aspect-square relative">
              {!!gridBoxItem?.boxImage?.url && (
                <Image
                  src={gridBoxItem.boxImage.url}
                  alt={gridBoxItem.boxTitle || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-full w-full object-cover object-center aspect-square max-h-[280px]"
                />
              )}
            </div>
          </LinkItem>
        ))}
      </div>
    </section>
  );
}
