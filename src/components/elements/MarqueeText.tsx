import React from "react";
import "./MarqueeText.scss";

interface MarqueeTextProps {
  text: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

export default function MarqueeTextElement({
  text,
  wrapperClassName,
  innerClassName,
}: MarqueeTextProps) {
  return (
    <div
      className={`marquee-text ${wrapperClassName}`}
      aria-hidden
      data-nosnippet
    >
      <div className={`marquee-text-inner flex flex-row w-full py-1 gap-x-4`}>
        <p className={innerClassName}>{text}</p>
        <p className={innerClassName}>{text}</p>
        <p className={innerClassName}>{text}</p>
      </div>
    </div>
  );
}
