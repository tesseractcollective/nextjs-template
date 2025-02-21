import Image from "next/image";
import Link from "next/link";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function CircleGridBoxes({ gridBoxData }: GridBoxProps) {
  const gridBoxDataWLinks = gridBoxData.filter(
    (gridBoxLinkTemp) => gridBoxLinkTemp.boxLink !== null
  );
  const gridBoxDataWOLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink === null
  );

  return (
    <section className="mx-auto px-4 sm:px-6 max-w-8xl lg:px-8 my-8 record circle-grid-boxes">
      <div className="flex flex-wrap items-center justify-center mx-auto lg:mx-0 transition gap-x-4">
        {gridBoxDataWOLinks.map((gridBoxDataWOLink, index) => (
          <Fade
            direction="up"
            cascade
            triggerOnce
            damping={0.1}
            key={`gridBoxDataWLink-${index}`}
            className="mx-auto"
          >
            <div className="profile-card h-full no-underline mx-auto relative mb-4 inline-block max-w-max group">
              {!!gridBoxDataWOLink.boxImage?.url && (
                <div className="relative">
                  <Image
                    src={gridBoxDataWOLink.boxImage?.url}
                    alt=""
                    className="profile-card-image object-cover w-72 h-72 mb-2 transition max-w-xs transition-rounded grayscale-0 group-hover:grayscale"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <div className="record-border"></div>
                </div>
              )}
              <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-text-color group-hover:text-primary uppercase font-bold opacity-100 group-hover:opacity-100 absolute inset-0 z-[2] text-base md:text-lg lg:text-xl  [text-shadow:1px_1px_0_#000,2px_2px_0_#000,3px_3px_0_#000,4px_4px_0_#000,5px_5px_0_#000,6px_6px_0_#000]">
                <span>{gridBoxDataWOLink.boxTitle}</span>
              </p>
            </div>
          </Fade>
        ))}

        {gridBoxDataWLinks.map((gridBoxItem, index) => (
          <Fade
            direction="up"
            cascade
            triggerOnce
            damping={0.1}
            key={`gridBoxDataWLink-${index}`}
            className="mx-auto"
          >
            <LinkItem
              link={gridBoxItem.boxLink || ""}
              cssClass="profile-card h-full no-underline mx-auto relative mb-4 inline-block max-w-max group"
            >
              <>
                <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-primary group-hover:text-primary uppercase font-bold absolute inset-0 z-[10] text-base md:text-lg lg:text-xl  [text-shadow:1px_1px_0_#000,2px_2px_0_#000,3px_3px_0_#000,4px_4px_0_#000,5px_5px_0_#000,6px_6px_0_#000] group-hover:[text-shadow:1px_1px_0_var(--primary),2px_2px_0_#000,3px_3px_0_#000,4px_4px_0_#000,5px_5px_0_#000,6px_6px_0_#000]">
                  <span>{gridBoxItem.boxTitle}</span>
                </p>
                {!!gridBoxItem.boxImage?.url && (
                  <div className="relative">
                    <Image
                      src={gridBoxItem.boxImage?.url}
                      alt=""
                      className="profile-card-image object-cover w-72 h-72 mb-2 transition max-w-xs transition-rounded grayscale-0 group-hover:grayscale"
                      width={0}
                      height={0}
                      sizes="100%"
                    />
                    <div className="record-border"></div>
                  </div>
                )}
              </>
            </LinkItem>
          </Fade>
        ))}
      </div>
    </section>
  );
}
