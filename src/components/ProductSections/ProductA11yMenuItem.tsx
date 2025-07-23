import React, { useMemo } from "react";
import Speech, { HighlightedText } from "react-text-to-speech";
import parse from "html-react-parser";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBreadSlice,
  faCow,
  faEgg,
  faFish,
  faLeaf,
  faPepperHot,
  faTree,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

interface ProductA11yMenuItemProps {
  product: ProductFieldsFragment;
}

export default function ProductA11yMenuItem({
  product,
}: ProductA11yMenuItemProps) {
  const textSpeech = useMemo(
    () => (
      <>
        <h3 className="item-header flex flex-row justify-between items-start font-semibold w-full">
          <span className="text-[black]">{product.name}</span>
          {product.price && (
            <span className="text-[red]">{`$${product.price}`}</span>
          )}
        </h3>
        {product?.description?.html && (
          <div className="lowercase mb-1">
            {parse(product.description.html || "")}
          </div>
        )}
        {product.productJson && (
          <div className="diet-pills flex flex-row py-2 gap-4 flex-wrap">
            {product.productJson?.dairy && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faCow as IconProp}
                  title="dairy"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Contains dairy</span>
              </p>
            )}
            {product.productJson?.peanut && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faTree as IconProp}
                  title="Peanut"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Contains peanut product</span>
              </p>
            )}
            {product.productJson?.egg && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faEgg as IconProp}
                  title="egg"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Contains egg</span>
              </p>
            )}
            {product.productJson?.gluten && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faBreadSlice as IconProp}
                  title="gluten"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Contains gluten</span>
              </p>
            )}
            {product.productJson?.seafood && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faFish as IconProp}
                  title="Seafood"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Contains Seafood</span>
              </p>
            )}
            {product?.productJson?.spicy && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faPepperHot as IconProp}
                  title="Spicy"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Spicy Dish</span>
              </p>
            )}
            {product?.productJson?.vegetarian && (
              <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max flex flex-row items-center justify-start gap-x-2">
                <FontAwesomeIcon
                  icon={faLeaf as IconProp}
                  title="Vegetarian"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
                />
                <span>Vegetarian</span>
              </p>
            )}
          </div>
        )}
      </>
    ),
    [product]
  );

  return (
    <div className="flex flex-col-reverse items-start w-full">
      {textSpeech && (
        <>
          <Speech
            text={textSpeech}
            pitch={1.2}
            rate={1.2}
            id={product.productSlug}
            highlightText={true}
            startBtn={
              <button
                className="bg-[blue] !text-[white] p-2 rounded !text-[18px] font-bold flex flex-row items-center justifty-center focus:outline-dotted outline-4"
                type="button"
                aria-label={product.name}
              >
                <FontAwesomeIcon
                  icon={faPlay as IconProp}
                  title="Play Audio"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[white]"
                />
                <span className="text-[white]">Audio Description</span>
              </button>
            }
            stopBtn={
              <button
                className="bg-[#ffc107] text-[black] p-2 rounded !text-[18px] font-bold flex flex-row items-center justifty-center"
                type="button"
              >
                <FontAwesomeIcon
                  icon={faStop as IconProp}
                  title="Stop Audio"
                  className="fa-fw my-0 py-0 h-5 w-5 opacity-70text-[black]"
                />
                <span>Stop Audio</span>
              </button>
            }
            useStopOverPause
          ></Speech>
          <HighlightedText id={product.productSlug} className="w-full mb-4">
            {textSpeech}
          </HighlightedText>
        </>
      )}
    </div>
  );
}
