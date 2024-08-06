import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import InsetGridBoxes from "./GridBoxComponents/InsetGridBoxes";
import CompactGridBoxes from "./GridBoxComponents/CompactGridBoxes";
import ContentGridBoxes from "./GridBoxComponents/ContentGridBoxes";
import SliderGridBoxes from "./GridBoxComponents/SliderGridBoxes";
import TallGridBoxes from "./GridBoxComponents/TallGridBoxes";
import CircleGridBoxes from "./GridBoxComponents/CircleGridBoxes";
import VerticalTabGridBoxes from "./GridBoxComponents/VerticalTabGridBoxes";
import GridDisplayBoxes from "./GridBoxComponents/GridDisplayBoxes";
import HoverRoundGridBoxes from "./GridBoxComponents/HoverRoundGridBoxes";
import ParallaxGridBoxes from "./GridBoxComponents/ParallaxGridBoxes";
import WideCardBoxes from "./GridBoxComponents/WideCardBoxes";
import SmallCircleBoxes from "./GridBoxComponents/SmallCircleBoxes";
import SpaceBetweenBoxes from "./GridBoxComponents/SpaceBetweenBoxes";
import PolaroidBoxes from "./GridBoxComponents/PolaroidBoxes";
import DescriptionBoxes from "./GridBoxComponents/DescriptionBoxes";
import ImageCardBoxes from "./GridBoxComponents/ImageCardBoxes";
import TwoHundredVhBoxes from "./GridBoxComponents/TwoHundredVhBoxes";
import MasonGridBoxes from "./GridBoxComponents/MasonGridBoxes";
import NetflixCardBoxes from "./GridBoxComponents/NetflixCardBoxes";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  // slider √
  // compact √
  // inset √
  // tall √
  // content √
  // parallax √
  // hoverRound √
  // mason
  // netflix
  // grid
  // image
  // circle
  // polaroid
  // smallCircle
  // blur
  // spaceBetween
  // description
  // wideCard

  const sliderGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "slider"
  );
  const compactGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "compact"
  );
  const insetGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "inset"
  );
  const hoverRoundGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "hoverRound"
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
  const parallaxGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "parallax"
  );
  const gridDisplayGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "grid"
  );
  const wideCardGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "wideCard"
  );
  const smallCircleGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "smallCircle"
  );
  const spaceBetweenGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "spaceBetween"
  );
  const polaroidGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "polaroid"
  );
  const descriptionGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "description"
  );
  const imageGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "image"
  );
  const masonGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "mason"
  );
  const twovhGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "twohundredvh"
  );
  const netflixGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "netflix"
  );
  if (parallaxGridBoxData && parallaxGridBoxData.length >= 1)
    return <ParallaxGridBoxes gridBoxData={parallaxGridBoxData} />;
  if (verticalTabGridBoxData && verticalTabGridBoxData.length >= 1)
    return <VerticalTabGridBoxes gridBoxData={verticalTabGridBoxData} />;
  if (insetGridBoxData && insetGridBoxData.length >= 1)
    return <InsetGridBoxes gridBoxData={insetGridBoxData} />;
  if (hoverRoundGridBoxData && hoverRoundGridBoxData.length >= 1)
    return <HoverRoundGridBoxes gridBoxData={hoverRoundGridBoxData} />;
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
  if (wideCardGridBoxData && wideCardGridBoxData.length >= 1)
    return <WideCardBoxes gridBoxData={wideCardGridBoxData} />;
  if (masonGridBoxData && masonGridBoxData.length >= 1)
    return <MasonGridBoxes gridBoxData={masonGridBoxData} />;
  if (smallCircleGridBoxData && smallCircleGridBoxData.length >= 1)
    return <SmallCircleBoxes gridBoxData={smallCircleGridBoxData} />;
  if (spaceBetweenGridBoxData && spaceBetweenGridBoxData.length >= 1)
    return <SpaceBetweenBoxes gridBoxData={spaceBetweenGridBoxData} />;
  if (polaroidGridBoxData && polaroidGridBoxData.length >= 1)
    return <PolaroidBoxes gridBoxData={polaroidGridBoxData} />;
  if (descriptionGridBoxData && descriptionGridBoxData.length >= 1)
    return <DescriptionBoxes gridBoxData={descriptionGridBoxData} />;
  if (imageGridBoxData && imageGridBoxData.length >= 1)
    return <ImageCardBoxes gridBoxData={imageGridBoxData} />;
  if (twovhGridBoxData && twovhGridBoxData.length >= 1)
    return <TwoHundredVhBoxes gridBoxData={twovhGridBoxData} />;
  if (netflixGridBoxData && netflixGridBoxData.length >= 1)
    return <NetflixCardBoxes gridBoxData={netflixGridBoxData} />;
  return <></>;
}
