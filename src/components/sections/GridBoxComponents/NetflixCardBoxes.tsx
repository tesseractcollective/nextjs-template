import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const NetflixCardBoxes = ({ gridBoxData }: GridBoxProps) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === gridBoxData.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, gridBoxData.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < gridBoxData.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8 px-4 max-w-6xl mx-auto w-full">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing w-full"
      >
        <Slides imgIndex={imgIndex} gridBoxData={gridBoxData} />
      </motion.div>

      <Dots
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
        gridBoxData={gridBoxData}
      />
      <GradientEdges />
    </div>
  );
};

const Slides = ({
  imgIndex,
  gridBoxData,
}: {
  imgIndex: number;
  gridBoxData: GridBoxFieldsFragment[];
}) => {
  return (
    <>
      {gridBoxData.map((gridBoxItem, idx) => {
        return (
          <div
            key={idx}
            className="w-full relative rounded-xl max-h-full flex items-end justify-start h-full px-4 pb-8"
          >
            <div className="flex flex-col gap-y-0">
              <LinkItem
                link={gridBoxItem.boxLink}
                parentCssClass="relative max-w-max"
                cssClass="px-4 py-0 text-primary my-0"
              >
                <h2 className="text-shadow-large uppercase py-0 my-0 text-2xl">
                  {gridBoxItem.boxTitle}
                </h2>
              </LinkItem>
              {gridBoxItem.boxDescription?.html && (
                <LinkItem
                  link={gridBoxItem.boxLink}
                  parentCssClass="relative max-w-max"
                >
                  <div className="bg-bg px-4 py-2 text-primary rounded-md uppercase">
                    {parse(gridBoxItem.boxDescription.html)}
                  </div>
                </LinkItem>
              )}
            </div>
            {!!gridBoxItem.boxImage?.url && (
              <Image
                src={gridBoxItem.boxImage.url}
                alt={gridBoxItem.boxTitle || ""}
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center rounded-xl"
              />
            )}
            <div className="aspect-w-16 aspect-h-9"></div>
          </div>
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
  gridBoxData,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  gridBoxData: GridBoxFieldsFragment[];
}) => {
  if (gridBoxData.length === 1) return <></>;
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {gridBoxData.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-all ${
              idx === imgIndex
                ? "bg-primary opacity-100"
                : "bg-secondary opacity-60"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default NetflixCardBoxes;
