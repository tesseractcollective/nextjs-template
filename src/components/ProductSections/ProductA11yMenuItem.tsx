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
        {product?.description && (
          <div className="lowercase mb-1">
            {parse(product.description.html || "")}
          </div>
        )}
        <div className="diet-pills flex flex-row py-2">
          {product.productJson?.dairy && (
            <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
              <FontAwesomeIcon
                icon={faCow as IconProp}
                title="dairy"
                className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 text-[black]"
              />
              <span>Contains dairy</span>
            </p>
          )}
          {product.productJson?.peanut && (
            <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
              <FontAwesomeIcon
                icon={faTree as IconProp}
                title="Peanut"
                className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
              />
              <span>Contains peanut product</span>
            </p>
          )}
          {product.productJson?.egg && (
            <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
              <FontAwesomeIcon
                icon={faEgg as IconProp}
                title="egg"
                className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
              />
              <span>Contains egg</span>
            </p>
          )}
          {product.productJson?.gluten && (
            <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
              <FontAwesomeIcon
                icon={faBreadSlice as IconProp}
                title="gluten"
                className="fa-fw my-0 py-0 h-5 w-5 opacity-70 text-[black]"
              />
              <span>Contains gluten</span>
            </p>
          )}
          {product.productJson?.seafood && (
            <p className="bg-[#d0d0d0] rounded-full px-4 max-w-max">
              <FontAwesomeIcon
                icon={faFish as IconProp}
                title="Seafood"
                className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
              />
              <span>Seafood</span>
            </p>
          )}
          {product?.productJson?.spicy && (
            <span className="flex items-center gap-x-2 relative">
              <FontAwesomeIcon
                icon={faPepperHot as IconProp}
                title="Spicy"
                className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
              />
            </span>
          )}
          {product?.productJson?.vegetarian && (
            <span className="flex items-center gap-x-2 relative">
              <FontAwesomeIcon
                icon={faLeaf as IconProp}
                title="Vegetarian"
                className="fa-fw my-0 py-0 mb-1 h-5 w-5 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 transition-all rounded-full text-[black]"
              />
            </span>
          )}
        </div>
      </>
    ),
    [product]
  );

  return (
    <div className="flex flex-col-reverse items-start w-full">
      <Speech
        text={textSpeech}
        pitch={1.2}
        rate={1.2}
        id={product.productSlug}
        highlightText={true}
        startBtn={
          <button
            className="bg-[#58a9ff] !text-[white] p-2 rounded !text-[18px] font-bold"
            type="button"
            aria-label={product.name}
          >
            PLAY
          </button>
        }
        stopBtn={
          <button
            className="bg-[#ffc107] text-[black] p-2 rounded !text-[18px] font-bold"
            type="button"
          >
            STOP
          </button>
        }
        useStopOverPause
      ></Speech>
      <HighlightedText id={product.productSlug} className="w-full mb-4">
        {textSpeech}
      </HighlightedText>
    </div>
  );
}
