import Image from "next/image";
import Link from "next/link";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import { Fade } from "react-awesome-reveal";
import "./HoverRoundGridBoxes.scss";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function HoverRoundGridBoxes({ gridBoxData }: GridBoxProps) {
  const gridBoxDataWLinks = gridBoxData.filter(
    (gridBoxLinkTemp) => gridBoxLinkTemp.boxLink !== null
  );
  const gridBoxDataWOLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink === null
  );

  return (
    <section className="mx-auto px-4 sm:px-6 max-w-8xl lg:px-8 my-8 hover-round-grid-items">
      <div className="flex flex-wrap items-center justify-center mx-auto lg:mx-0 transition">
        {gridBoxDataWOLinks.map((gridBoxDataWOLink, index) => (
          <Fade
            direction="up"
            cascade
            triggerOnce
            damping={0.1}
            key={`gridBoxDataWLink-${index}`}
            className="mx-auto"
          >
            <div className="h-full no-underline mx-auto relative mb-4 inline-block max-w-max group">
              {!!gridBoxDataWOLink.boxImage?.url && (
                <div className="relative">
                  <Image
                    src={gridBoxDataWOLink.boxImage?.url}
                    alt=""
                    className="object-cover w-72 h-72 transition-all duration-[400ms] rounded-md max-w-xs grayscale-0 group-hover:grayscale group-hover:rounded-[100%]"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                  <div className="record-border"></div>
                </div>
              )}
              <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-text-color group-hover:text-primary uppercase font-bold opacity-100 group-hover:opacity-100 absolute inset-0 z-[2] text-base md:text-lg lg:text-xl">
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
              cssClass="h-full no-underline mx-auto relative mb-4 inline-block max-w-max group"
            >
              <>
                {!!gridBoxItem.boxImage?.url && (
                  <div className="relative">
                    <Image
                      src={gridBoxItem.boxImage?.url}
                      alt=""
                      className="object-cover w-72 h-72 transition-all duration-[400ms] rounded-md max-w-xs grayscale-0 group-hover:grayscale group-hover:rounded-[100%]"
                      width={0}
                      height={0}
                      sizes="100%"
                    />
                    <div className="record-border"></div>
                  </div>
                )}
                <p className="my-0 py-0 flex flex-row items-center justify-center text-center mx-auto text-text-color group-hover:text-primary uppercase font-bold opacity-100 group-hover:opacity-100 absolute inset-0 z-[2] text-base md:text-lg lg:text-xl">
                  <span>{gridBoxItem.boxTitle}</span>
                </p>
              </>
            </LinkItem>
          </Fade>
        ))}
      </div>
    </section>
  );
}
