import React, { useState } from "react";
import { FilloutSliderEmbed } from "@fillout/react";
import id from "date-fns/locale/id";

interface FixedFilloutSideButtonProps {
  fixedFilloutSideButton: {
    text: string;
    id: string;
    hoverText?: string;
  };
}

export default function FixedFilloutSideButton({
  fixedFilloutSideButton,
}: FixedFilloutSideButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed right-[-70px] top-[60%] -translate-y-1/2 z-[750] transform -rotate-90">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="relative flex items-center transition-all duration-300 text-text-color !m-0 text-lg uppercase tracking-widest px-6 bg-[#000000b0] hover:bg-primary border-primarary border-x border-t pt-2 pb-7 whitespace-nowrap group font-bold"
      >
        <>
          <span className="relative z-[750]">
            {fixedFilloutSideButton.text}
          </span>
          <span className="absolute group-hover:opacity-100 opacity-0 bg-bg group-hover:-top-[6rem] top-[20rem] rotate-90 px-4 transition-all z-[700]">
            {fixedFilloutSideButton.hoverText}
          </span>
        </>
      </button>
      {isOpen && id && (
        <FilloutSliderEmbed
          filloutId={fixedFilloutSideButton.id}
          onClose={() => setIsOpen(false)}
          onSubmit={() => setIsOpen(false)}
          sliderDirection="right"
        />
      )}
    </div>
  );
}
