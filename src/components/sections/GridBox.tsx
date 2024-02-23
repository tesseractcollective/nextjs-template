import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import InsetGridBoxes from "./GridBoxComponents/InsetGridBoxes";
import CompactGridBoxes from "./GridBoxComponents/CompactGridBoxes";
import ContentGridBoxes from "./GridBoxComponents/ContentGridBoxes";
import SliderGridBoxes from "./GridBoxComponents/SliderGridBoxes";
import TallGridBoxes from "./GridBoxComponents/TallGridBoxes";
import CircleGridBoxes from "./GridBoxComponents/CircleGridBoxes";
import VerticalTabGridBoxes from "./GridBoxComponents/VerticalTabGridBoxes";
import GridDisplayBoxes from "./GridBoxComponents/GridDisplayBoxes";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  // slider √
  // compact √
  // inset √
  // tall √
  // content √
  // mason
  // netflix
  // grid
  // image
  // parallax
  // circle
  // polaroid

  const sliderGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "slider"
  );
  const compactGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "compact"
  );
  const insetGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "inset"
  );
  const tallGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "tall"
  );
  const contentGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "content"
  );
  const circleGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "circle"
  );
  const verticalTabGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "verticalTabs"
  );
  const gridDisplayGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "grid"
  );
  if (verticalTabGridBoxData && verticalTabGridBoxData.length >= 1)
    return <VerticalTabGridBoxes gridBoxData={verticalTabGridBoxData} />;
  if (insetGridBoxData && insetGridBoxData.length >= 1)
    return <InsetGridBoxes gridBoxData={insetGridBoxData} />;
  if (circleGridBoxData && circleGridBoxData.length >= 1)
    return <CircleGridBoxes gridBoxData={circleGridBoxData} />;
  if (sliderGridBoxData && sliderGridBoxData.length >= 1)
    return <SliderGridBoxes gridBoxData={sliderGridBoxData} />;
  if (compactGridBoxData && compactGridBoxData.length >= 1)
    return <CompactGridBoxes gridBoxData={compactGridBoxData} />;
  if (tallGridBoxData && tallGridBoxData.length >= 1)
    return <TallGridBoxes gridBoxData={tallGridBoxData} />;
  if (contentGridBoxData && contentGridBoxData.length >= 1)
    return <ContentGridBoxes gridBoxData={contentGridBoxData} />;
  if (gridDisplayGridBoxData && gridDisplayGridBoxData.length >= 1)
    return <GridDisplayBoxes gridBoxData={gridDisplayGridBoxData} />;
  return <></>;
}
