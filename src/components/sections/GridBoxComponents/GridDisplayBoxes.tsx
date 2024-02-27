import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridDisplayBoxes({ gridBoxData }: GridBoxProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-8xl my-20 px-4 gap-8">
      {gridBoxData.map((heroMediaSliderItem) => (
        <LinkItem
          cssClass="aspect-video min-h-[33vh] bg-[#00000050] group max-w-8xl px-4 lg:px-8 md:pt-44 lg:pt-72 pb-8 mx-auto relative w-full overflow-hidden hover:rounded-2xl focus:rounded-2xl transition-all flex items-end justify-start h-full border border-[#0000000] hover:border-primary focus:border-primary"
          link={heroMediaSliderItem.boxLink}
          key={`${heroMediaSliderItem.boxLink}`}
        >
          <Fade direction="left" triggerOnce className="gap-y-2 z-20 relative">
            <div className="group">
              {!!heroMediaSliderItem.boxTitle && (
                <h1 className="text-2xl md:text-4xl text-shadow mt-0 mb-1 py-0 text-left text-[white] font-bold uppercase text-shadow">
                  {heroMediaSliderItem.boxTitle}
                </h1>
              )}
              {!!heroMediaSliderItem.boxDescription && (
                <h2 className="text-shadow my-0 py-0 text-left uppercase tracking-widest font-bold text-md lg:text-lg opacity-80 max-w-md text-[white] text-shadow mb-2">
                  {parse(heroMediaSliderItem.boxDescription.html)}
                </h2>
              )}

              <p
                className={`text-[black] py-2 px-8 max-w-max uppercase font-bold rounded bg-primary transition-all block mt-4`}
              >
                Info
              </p>
            </div>
          </Fade>
          <Fade
            triggerOnce
            direction="up"
            className={`absolute w-full h-full inset-0 object-cover`}
          >
            {heroMediaSliderItem.boxImage?.url && (
              <Image
                className={`absolute w-full h-full inset-0 object-cover opacity-50 transition-all group-hover:opacity-100 group-focus:opacity-100 z-0`}
                sizes="100%"
                width={0}
                height={0}
                alt={heroMediaSliderItem?.boxTitle || ""}
                src={heroMediaSliderItem.boxImage?.url}
              ></Image>
            )}
          </Fade>
        </LinkItem>
      ))}
    </div>
  );
}
