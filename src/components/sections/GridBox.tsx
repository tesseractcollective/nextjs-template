import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import React from "react";

import BlurGridBoxes from "./GridBoxComponents/BlurGridBoxes";
import CircleGridBoxes from "./GridBoxComponents/CircleGridBoxes";
import ColorBorderBoxes from "./GridBoxComponents/ColorBorderBoxes";
import CompactGridBoxes from "./GridBoxComponents/CompactGridBoxes";
import ContentGridBoxes from "./GridBoxComponents/ContentGridBoxes";
import DescriptionBoxes from "./GridBoxComponents/DescriptionBoxes";
import GridDisplayBoxes from "./GridBoxComponents/GridDisplayBoxes";
import HoverRoundGridBoxes from "./GridBoxComponents/HoverRoundGridBoxes";
import ImageCardBoxes from "./GridBoxComponents/ImageCardBoxes";
import InsetGridBoxes from "./GridBoxComponents/InsetGridBoxes";
import MasonGridBoxes from "./GridBoxComponents/MasonGridBoxes";
import NetflixCardBoxes from "./GridBoxComponents/NetflixCardBoxes";
import ParallaxGridBoxes from "./GridBoxComponents/ParallaxGridBoxes";
import PolaroidBoxes from "./GridBoxComponents/PolaroidBoxes";
import SliderGridBoxes from "./GridBoxComponents/SliderGridBoxes";
import SmallCircleBoxes from "./GridBoxComponents/SmallCircleBoxes";
import SpaceBetweenBoxes from "./GridBoxComponents/SpaceBetweenBoxes";
import TallGridBoxes from "./GridBoxComponents/TallGridBoxes";
import TwoHundredVhBoxes from "./GridBoxComponents/TwoHundredVhBoxes";
import VerticalTabGridBoxes from "./GridBoxComponents/VerticalTabGridBoxes";
import WideCardBoxes from "./GridBoxComponents/WideCardBoxes";
import SnapGridBoxes from "./GridBoxComponents/SnapGridBoxes";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function GridBox({ gridBoxData }: GridBoxProps) {
  // compact √
  // content √
  // inset √
  // slider √
  // tall √
  // mason √
  // netflix √
  // grid √
  // image √
  // parallax √
  // circle √
  // polaroid √
  // myspace √
  // twohundredvh √
  // hoverRound √
  // colorBorder
  // horizontalTabs √ - needs work
  // verticalTabs √ - needs work
  // snap √
  // spaceBetween √
  // blur √
  // smallCircle √
  // description √
  // wideCard √

  const sliderGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "slider"
  );
  const colorBorderGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "colorBorder"
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
  const snapCardGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "snap"
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
  const blurGridBoxData = gridBoxData.filter(
    (gridBoxItem) => gridBoxItem.boxDisplay === "blur"
  );
  if (parallaxGridBoxData && parallaxGridBoxData.length >= 1)
    return <ParallaxGridBoxes gridBoxData={parallaxGridBoxData} />;
  if (colorBorderGridBoxData && colorBorderGridBoxData.length >= 1)
    return <ColorBorderBoxes gridBoxData={colorBorderGridBoxData} />;
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
  if (snapCardGridBoxData && snapCardGridBoxData.length >= 1)
    return <SnapGridBoxes gridBoxData={snapCardGridBoxData} />;
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
  if (blurGridBoxData && blurGridBoxData.length >= 1)
    return <BlurGridBoxes gridBoxData={blurGridBoxData} />;
  return <></>;
}
