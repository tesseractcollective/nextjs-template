import { Fragment, useState, useRef } from "react";
import Image from "next/image";
import type { GridBoxFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface GridBoxProps {
  gridBoxData: GridBoxFieldsFragment[];
}

export default function VerticalTabGridBoxes({ gridBoxData }: GridBoxProps) {
  const [selectedItem, setSelectedItem] = useState<
    GridBoxFieldsFragment | undefined
  >(gridBoxData.length > 0 ? gridBoxData[0] : undefined);

  return (
    <div className="flex mx-auto relative items-center justify-center max-w-6xl w-full flex-wrap px-4">
      <div className="w-full md:w-1/3 gap-y-4 flex flex-col">
        {gridBoxData.map((gridBoxItem) => (
          <motion.div
            key={gridBoxItem.boxLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`border-bg border rounded-md cursor-pointer flex items-center justify-center p-4 transition-all hover:bg-tertiary ${
              selectedItem === gridBoxItem
                ? "border border-primary bg-primary"
                : ""
            }`}
            onClick={() => setSelectedItem(gridBoxItem)}
          >
            <p
              className={`transition-all h-full p-4 uppercase font-bold text-center ${
                selectedItem === gridBoxItem ? "!text-primary" : "!text-bg"
              }`}
            >
              {gridBoxItem.boxTitle}
            </p>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <div className="w-full md:w-2/3 flex flex-col items-center h-full justify-center flex-1 all-text-dark">
          <Fade className="p-4" direction="up" triggerOnce>
            {selectedItem.boxImage && (
              <Image
                src={selectedItem.boxImage.url}
                className="object-contain mx-auto h-full w-full aspect-1 max-w-72 max-h-72"
                alt=""
                width={0}
                height={0}
                sizes="100%"
              />
            )}
            {selectedItem?.boxDescription && (
              <div className="text-text-color body-parsed-text p-4 content-large text-center mx-auto max-xl">
                {parse(selectedItem?.boxDescription.html)}
              </div>
            )}
          </Fade>
        </div>
      )}
    </div>
  );
}
