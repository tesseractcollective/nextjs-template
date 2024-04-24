import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function PolaroidBoxes({ gridBoxData }: GridBoxProps) {
  const gridBoxDataWLinks = gridBoxData.filter(
    (gridBoxLinkTemp) => gridBoxLinkTemp.boxLink !== null
  );
  const gridBoxDataWOLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink === null
  );

  return (
    <section className="mx-auto px-4 sm:px-6 max-w-8xl lg:px-8 my-8 record">
      <div className="flex flex-wrap items-center justify-center mx-auto lg:mx-0 transition">
        {gridBoxDataWOLinks.map((gridBoxDataWOLink, index) => (
          <Fade
            direction="up"
            cascade
            triggerOnce
            damping={0.1}
            key={`gridBoxDataWOLink-${index}`}
            className="mx-auto"
          >
            <div className="mx-auto flex items-center justify-center flex-col w-full transition-all rotate-0 hover:rotate-6 focus-visible:rotate-6 group max-w-max hover:outline-bg-secondary outline outline-none">
              <div className="animate-col-width mx-auto md:mx-0 w-full bg-text-color">
                <div className="h-full profile-card w-full relative">
                  {!!gridBoxDataWOLink?.boxImage?.url && (
                    <div className="p-0 m-0 w-full relative">
                      <Image
                        src={gridBoxDataWOLink.boxImage.url}
                        alt={
                          (gridBoxDataWOLink.boxTitle &&
                            gridBoxDataWOLink.boxTitle) ||
                          ""
                        }
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[240px] h-[240px] object-cover mx-auto border-8 border-text-color group-hover:border-[16px] group-focus:border-[16px] transition-all"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-center justify-center text-center py-2 px-4 relative z-10 overflow-hidden">
                    <Fade triggerOnce direction="left">
                      {!!gridBoxDataWOLink.boxTitle && (
                        <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-bg mt-0 text-center group-hover:tracking-widest group-focus:tracking-widest transition-all max-w-[200px]">
                          {gridBoxDataWOLink.boxTitle}
                        </h3>
                      )}
                    </Fade>
                  </div>
                </div>
              </div>
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
              link={gridBoxItem.boxLink}
              cssClass="mx-auto flex items-center justify-center flex-col w-full transition-all rotate-0 hover:rotate-6 focus-visible:rotate-6 group max-w-max hover:outline-bg-secondary outline outline-none"
            >
              <div className="animate-col-width mx-auto md:mx-0 w-full bg-text-color">
                <div className="h-full profile-card w-full relative">
                  {!!gridBoxItem?.boxImage?.url && (
                    <div className="p-0 m-0 w-full relative">
                      <Image
                        src={gridBoxItem.boxImage.url}
                        alt={
                          (gridBoxItem.boxTitle && gridBoxItem.boxTitle) || ""
                        }
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-[240px] h-[240px] object-cover mx-auto border-8 border-text-color group-hover:border-[16px] group-focus:border-[16px] transition-all"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-center justify-center text-center py-2 px-4 relative z-10 overflow-hidden">
                    <Fade triggerOnce direction="left">
                      {!!gridBoxItem.boxTitle && (
                        <h3 className="text-xl font-bold animate-[tracking_1s_ease-in] tracking-wide text-bg mt-0 text-center group-hover:tracking-widest group-focus:tracking-widest transition-all max-w-[200px]">
                          {gridBoxItem.boxTitle}
                        </h3>
                      )}
                    </Fade>
                  </div>
                </div>
              </div>
            </LinkItem>
          </Fade>
        ))}
      </div>
    </section>
  );
}
