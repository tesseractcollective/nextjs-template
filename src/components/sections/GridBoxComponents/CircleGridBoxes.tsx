import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function CircleGridBoxes({ gridBoxData }: GridBoxProps) {
  const gridBoxDataWLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink !== null
  );
  const gridBoxDataWOLinks = gridBoxData.filter(
    (gridBoxTemp) => gridBoxTemp.boxLink === null
  );

  return (
    <section className="mx-auto px-4 sm:px-6 xl:max-w-8xl lg:px-8 my-8">
      <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8">
        {gridBoxDataWOLinks.map((gridBoxDataWOLink, index) => (
          <div
            key={Math.random() + index}
            className="w-40 md:w-72 h-40 md:h-72 border-primary border rounded-[100%] flex items-center justify-center text-center transition-all"
          >
            <p className="text-text-color uppercase p-0 m-0 flex font-bold text-sm md:text-xl lg:text-2xl transition-all">
              {gridBoxDataWOLink.boxTitle}
            </p>
          </div>
        ))}
        {gridBoxDataWLinks.map((gridBoxDataWLink, index) => (
          <LinkItem
            key={`${index}-${gridBoxDataWLink.boxLink}`}
            cssClass="w-40 md:w-72 h-40 md:h-72 border-primary border rounded-[100%] flex items-center justify-center text-center transition-all hover:border-secondary"
          >
            <p className="text-text-color uppercase p-0 m-0 flex font-bold text-sm md:text-xl lg:text-2xl transition-all">
              {gridBoxDataWLink.boxTitle}
            </p>
          </LinkItem>
        ))}
      </div>
    </section>
  );
}
