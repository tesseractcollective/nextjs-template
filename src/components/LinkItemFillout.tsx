import React from "react";
import { FilloutSliderEmbed } from "@fillout/react";
import { useState } from "react";

interface LinkItemFilloutProps {
  link: string;
  label: string;
  cssClass?: string | null;
  parentCssClass?: string | null;
}

const LinkItemFillout: React.FC<LinkItemFilloutProps> = ({
  link,
  label,
  cssClass,
  parentCssClass,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrubbedID = link.replace("fillout:", "");
  return (
    <div className={`relative ${parentCssClass}`}>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className={`${cssClass || ""}`}
      >
        {label}
      </button>
      {isOpen && (
        <FilloutSliderEmbed
          filloutId={scrubbedID}
          onClose={() => setIsOpen(false)}
          onSubmit={() => setIsOpen(false)}
          sliderDirection="right"
        />
      )}
    </div>
  );
};

export default LinkItemFillout;
