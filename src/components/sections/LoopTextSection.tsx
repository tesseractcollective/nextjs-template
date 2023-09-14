import { TextLoop } from "react-text-loop-next";
import parse from "html-react-parser";
import type { LoopTextFieldsFragment } from "@/graphql/generated/graphql";

interface LoopTextProps {
  loopTextData: LoopTextFieldsFragment[];
}

export default function LoopTextSection({ loopTextData }: LoopTextProps) {
  if (loopTextData?.length === 0) return <></>;
  return (
    <div className="my-16">
      {loopTextData.map((item) => {
        const itemClass = item?.cssClassItem || "";
        return (
          <section
            key={item.staticText}
            className={item?.cssClassWrapper || ""}
          >
            <h3 className={item?.cssClassStatic || ""}>{item.staticText}</h3>
            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
              {item.loopTextItem.map((loopText) => (
                <span key={loopText.loopTextItemContent} className={itemClass}>
                  {loopText.loopTextItemContent &&
                    parse(loopText.loopTextItemContent)}
                </span>
              ))}
            </TextLoop>
          </section>
        );
      })}
    </div>
  );
}
