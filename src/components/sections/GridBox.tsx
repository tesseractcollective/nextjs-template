import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import InsetGridBoxes from "./GridBoxComponents/InsetGridBoxes";
import CompactGridBoxes from "./GridBoxComponents/CompactGridBoxes";
import ContentGridBoxes from "./GridBoxComponents/ContentGridBoxes";
import SliderGridBoxes from "./GridBoxComponents/SliderGridBoxes";
import TallGridBoxes from "./GridBoxComponents/TallGridBoxes";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  const SliderGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "slider"
  );
  const CompactGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "compact"
  );
  const InsetGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "inset"
  );
  const TallGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "tall"
  );
  const ContentGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "content"
  );
  if (InsetGridBoxData && InsetGridBoxData.length >= 1)
    return <InsetGridBoxes gridBoxData={InsetGridBoxData} />;
  if (SliderGridBoxData && SliderGridBoxData.length >= 1)
    return <SliderGridBoxes gridBoxData={SliderGridBoxData} />;
  if (CompactGridBoxData && CompactGridBoxData.length >= 1)
    return <CompactGridBoxes gridBoxData={CompactGridBoxData} />;
  if (TallGridBoxData && TallGridBoxData.length >= 1)
    return <TallGridBoxes gridBoxData={TallGridBoxData} />;
  if (ContentGridBoxData && ContentGridBoxData.length >= 1)
    return <ContentGridBoxes gridBoxData={ContentGridBoxData} />;
  return <></>;
}
